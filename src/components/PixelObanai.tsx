import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  targetX: number;
  targetY: number;
  currentX: number;
  currentY: number;
  startX: number;
  startY: number;
  color: string;
  delay: number;
  speed: number;
}

export const PixelObanai: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [isAssembling, setIsAssembling] = useState(true);
  const [showTag, setShowTag] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const cleanedImageCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize and run atom particle assembly animation
  const assembleAtoms = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsAssembled(false);
    setIsAssembling(true);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/obanai-face-pixel.jpg';

    img.onload = () => {
      const displaySize = 300;
      canvas.width = displaySize;
      canvas.height = displaySize;

      // Sample image into 48x48 pixel grid (reduced pixelation strength by ~20% for sharper clarity)
      const sampleSize = 48;
      const offCanvas = document.createElement('canvas');
      offCanvas.width = sampleSize;
      offCanvas.height = sampleSize;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      offCtx.drawImage(img, 0, 0, sampleSize, sampleSize);
      const imgData = offCtx.getImageData(0, 0, sampleSize, sampleSize);
      const data = imgData.data;

      // Identify outer greyish background using BFS from all 4 boundaries
      const isBg = Array.from({ length: sampleSize }, () =>
        Array(sampleSize).fill(false)
      );

      const queue: [number, number][] = [];

      // Helper to check if pixel is background (pure black, dark grey, or white/light outer backdrop)
      const isBackgroundPixel = (x: number, y: number) => {
        const idx = (y * sampleSize + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = data[idx + 3];

        if (a < 30) return true;
        const maxVal = Math.max(r, g, b);
        const minVal = Math.min(r, g, b);
        const diff = maxVal - minVal;

        // 1. Dark, charcoal, or pure black background
        if (maxVal < 45) return true;
        if (maxVal < 60 && diff < 16) return true;

        // 2. White or light outer background
        if (minVal > 185 && diff < 30) return true;

        return false;
      };

      // Seed all border pixels that match background
      for (let x = 0; x < sampleSize; x++) {
        if (isBackgroundPixel(x, 0)) {
          isBg[0][x] = true;
          queue.push([x, 0]);
        }
        if (isBackgroundPixel(x, sampleSize - 1)) {
          isBg[sampleSize - 1][x] = true;
          queue.push([x, sampleSize - 1]);
        }
      }
      for (let y = 0; y < sampleSize; y++) {
        if (isBackgroundPixel(0, y) && !isBg[y][0]) {
          isBg[y][0] = true;
          queue.push([0, y]);
        }
        if (isBackgroundPixel(sampleSize - 1, y) && !isBg[y][sampleSize - 1]) {
          isBg[sampleSize - 1][y] = true;
          queue.push([sampleSize - 1, y]);
        }
      }

      // BFS to flood-fill background
      while (queue.length > 0) {
        const [cx, cy] = queue.shift()!;
        const neighbors = [
          [cx + 1, cy],
          [cx - 1, cy],
          [cx, cy + 1],
          [cx, cy - 1],
        ];

        for (const [nx, ny] of neighbors) {
          if (nx >= 0 && nx < sampleSize && ny >= 0 && ny < sampleSize) {
            if (!isBg[ny][nx] && isBackgroundPixel(nx, ny)) {
              isBg[ny][nx] = true;
              queue.push([nx, ny]);
            }
          }
        }
      }

      // Create a cleaned canvas with transparent background for assembled state
      const cleanedCanvas = document.createElement('canvas');
      cleanedCanvas.width = displaySize;
      cleanedCanvas.height = displaySize;
      const cleanedCtx = cleanedCanvas.getContext('2d');
      if (cleanedCtx) {
        cleanedCtx.imageSmoothingEnabled = false;
        const cellSize = displaySize / sampleSize;

        for (let y = 0; y < sampleSize; y++) {
          for (let x = 0; x < sampleSize; x++) {
            if (isBg[y][x]) continue; // Skip background pixels

            const idx = (y * sampleSize + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = data[idx + 3];

            if (a < 30) continue;

            cleanedCtx.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
            cleanedCtx.fillRect(x * cellSize, y * cellSize, cellSize + 0.4, cellSize + 0.4);
          }
        }
        cleanedImageCanvasRef.current = cleanedCanvas;
      }

      // Build atoms for Obanai and Kaburamaru only
      const particles: Particle[] = [];
      const cellSize = displaySize / sampleSize;

      for (let y = 0; y < sampleSize; y++) {
        for (let x = 0; x < sampleSize; x++) {
          // Exclude outer background completely
          if (isBg[y][x]) continue;

          const idx = (y * sampleSize + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const a = data[idx + 3];

          if (a < 30) continue;

          const targetX = x * cellSize;
          const targetY = y * cellSize;

          // Atoms start scattered outward from random angles
          const angle = Math.random() * Math.PI * 2;
          const distance = 160 + Math.random() * 200;
          const startX = targetX + Math.cos(angle) * distance;
          const startY = targetY + Math.sin(angle) * distance;

          particles.push({
            targetX,
            targetY,
            currentX: startX,
            currentY: startY,
            startX,
            startY,
            color: `rgba(${r},${g},${b},${a / 255})`,
            delay: Math.random() * 0.35,
            speed: 0.85 + Math.random() * 0.35,
          });
        }
      }

      particlesRef.current = particles;
      startTimeRef.current = performance.now();

      const animate = (now: number) => {
        if (!startTimeRef.current) startTimeRef.current = now;
        const elapsed = (now - startTimeRef.current) / 1000;
        const duration = 1.5;

        // Clear canvas completely so div background (#0C0C0C) shows seamlessly
        ctx.clearRect(0, 0, displaySize, displaySize);

        let allFinished = true;

        particlesRef.current.forEach((p) => {
          if (elapsed < p.delay) {
            allFinished = false;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.startX, p.startY, cellSize, cellSize);
            return;
          }

          const localProgress = Math.min(1, (elapsed - p.delay) / (duration * p.speed));
          if (localProgress < 1) allFinished = false;

          const ease = 1 - Math.pow(1 - localProgress, 3);

          p.currentX = p.startX + (p.targetX - p.startX) * ease;
          p.currentY = p.startY + (p.targetY - p.startY) * ease;

          ctx.fillStyle = p.color;
          ctx.fillRect(p.currentX, p.currentY, cellSize + 0.4, cellSize + 0.4);
        });

        if (!allFinished) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          setIsAssembled(true);
          setIsAssembling(false);

          // Draw final clean character on transparent background
          ctx.clearRect(0, 0, displaySize, displaySize);
          if (cleanedImageCanvasRef.current) {
            ctx.drawImage(cleanedImageCanvasRef.current, 0, 0);
          }
        }
      };

      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = requestAnimationFrame(animate);
    };
  }, []);

  useEffect(() => {
    assembleAtoms();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [assembleAtoms]);

  const handleCharacterClick = () => {
    assembleAtoms();
  };

  return (
    <div
      onClick={handleCharacterClick}
      onMouseEnter={() => setShowTag(true)}
      onMouseLeave={() => setShowTag(false)}
      className={`relative group cursor-pointer select-none flex flex-col items-center justify-center ${className}`}
      title="Click to scatter & re-assemble Obanai Iguro's pixels!"
    >
      {/* Subtle floating idle animation (NO border, NO shell, NO grid) */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex items-center justify-center w-full"
      >
        {/* Transparent Canvas with Pure #0C0C0C Black Blend - Zero Grid, Zero Shell */}
        <canvas
          ref={canvasRef}
          className="w-full h-auto aspect-square object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
          style={{
            imageRendering: 'pixelated',
          }}
        />

        {/* Reassembling Indicator */}
        {isAssembling && (
          <div className="absolute top-0 right-0 flex items-center gap-1 bg-black/90 px-2.5 py-0.5 rounded-full border border-emerald-400/40 text-[10px] text-emerald-300 font-mono tracking-wider animate-pulse shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            assembling
          </div>
        )}
      </motion.div>

      {/* 2D Tag-Name: "Hey Sup!" */}
      <div
        className={`absolute -bottom-7 left-1/2 -translate-x-1/2 transition-opacity duration-200 pointer-events-none z-30 ${
          showTag ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="bg-[#181818]/95 text-[#D7E2EA] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full border border-[#D7E2EA]/40 whitespace-nowrap shadow-xl">
          Hey Sup!
        </span>
      </div>
    </div>
  );
};
