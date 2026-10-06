import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const MinecraftPikachu: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isSparking, setIsSparking] = useState(false);

  const triggerSpark = () => {
    setIsSparking(true);
    setTimeout(() => setIsSparking(false), 1200);
  };

  return (
    <div
      onClick={triggerSpark}
      className={`relative group cursor-pointer select-none flex items-center justify-center ${className}`}
      title="Click Pikachu for a Minecraft electric spark!"
    >
      {/* Floating Minecraft Spark Particles */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative flex items-center justify-center"
      >
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#FED000]/15 blur-2xl rounded-full scale-90 group-hover:bg-[#FED000]/25 transition-all duration-300" />

        {/* 2D Minecraft Pixel-Art Pikachu SVG */}
        <svg
          viewBox="0 0 36 36"
          className="w-full h-auto drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-transform duration-300 group-hover:scale-105 active:scale-95"
          style={{
            imageRendering: 'pixelated',
            shapeRendering: 'crispEdges',
          }}
        >
          {/* DEFINITIONS FOR MINECRAFT COLORS */}
          {/*
            Pikachu Palette (Minecraft style):
            #FED000: Bright yellow
            #F2B800: Mid yellow / shading
            #D49B00: Dark shadow yellow
            #FFE66D: Light yellow highlight
            #1D1B18: Deep blocky black outline/ears
            #E82B2B: Minecraft Redstone Red (Cheeks)
            #B01818: Dark Red cheek shade
            #8A4B1A: Minecraft Oak/Dirt Brown (Stripes & tail base)
            #5C310F: Dark Brown
            #FFFFFF: Eye specular white
          */}

          {/* === TAIL (ZIG-ZAG LIGHTNING) === */}
          {/* Tail Brown Base */}
          <rect x="25" y="27" width="2" height="3" fill="#8A4B1A" />
          <rect x="26" y="28" width="2" height="2" fill="#5C310F" />

          {/* Tail Lower Zigzag */}
          <rect x="27" y="24" width="2" height="4" fill="#1D1B18" />
          <rect x="28" y="24" width="2" height="3" fill="#D49B00" />
          <rect x="27" y="25" width="2" height="2" fill="#FED000" />

          {/* Tail Middle Zigzag */}
          <rect x="29" y="20" width="3" height="5" fill="#1D1B18" />
          <rect x="29" y="21" width="2" height="3" fill="#FED000" />
          <rect x="30" y="21" width="1" height="3" fill="#FFE66D" />

          {/* Tail Upper Wide Bolt */}
          <rect x="28" y="15" width="6" height="6" fill="#1D1B18" />
          <rect x="29" y="16" width="4" height="4" fill="#FED000" />
          <rect x="29" y="16" width="4" height="1" fill="#FFE66D" />
          <rect x="32" y="17" width="1" height="3" fill="#F2B800" />

          {/* === LEFT EAR (TILTED OUTWARD) === */}
          {/* Black tip */}
          <rect x="5" y="3" width="2" height="2" fill="#1D1B18" />
          <rect x="6" y="2" width="2" height="2" fill="#1D1B18" />
          <rect x="7" y="3" width="2" height="3" fill="#1D1B18" />
          <rect x="6" y="4" width="2" height="2" fill="#2A2622" />
          {/* Yellow base */}
          <rect x="7" y="5" width="3" height="3" fill="#FED000" />
          <rect x="8" y="7" width="3" height="3" fill="#FED000" />
          <rect x="9" y="9" width="3" height="3" fill="#F2B800" />
          <rect x="7" y="6" width="1" height="2" fill="#FFE66D" />
          <rect x="10" y="8" width="1" height="3" fill="#D49B00" />

          {/* === RIGHT EAR (TILTED OUTWARD) === */}
          {/* Black tip */}
          <rect x="29" y="3" width="2" height="2" fill="#1D1B18" />
          <rect x="28" y="2" width="2" height="2" fill="#1D1B18" />
          <rect x="27" y="3" width="2" height="3" fill="#1D1B18" />
          <rect x="28" y="4" width="2" height="2" fill="#2A2622" />
          {/* Yellow base */}
          <rect x="26" y="5" width="3" height="3" fill="#FED000" />
          <rect x="25" y="7" width="3" height="3" fill="#FED000" />
          <rect x="24" y="9" width="3" height="3" fill="#F2B800" />
          <rect x="28" y="6" width="1" height="2" fill="#FFE66D" />
          <rect x="25" y="8" width="1" height="3" fill="#D49B00" />

          {/* === BODY & FEET === */}
          {/* Lower Body Outline & Shadow */}
          <rect x="11" y="22" width="14" height="10" fill="#1D1B18" />
          {/* Main Body Yellow */}
          <rect x="12" y="22" width="12" height="9" fill="#FED000" />
          <rect x="12" y="22" width="1" height="9" fill="#FFE66D" />
          <rect x="23" y="22" width="1" height="9" fill="#D49B00" />
          <rect x="12" y="30" width="12" height="1" fill="#D49B00" />

          {/* Brown Back Stripes (Minecraft Voxel style) */}
          <rect x="14" y="24" width="8" height="1" fill="#8A4B1A" />
          <rect x="15" y="27" width="6" height="1" fill="#8A4B1A" />

          {/* Left Foot */}
          <rect x="11" y="31" width="4" height="2" fill="#1D1B18" />
          <rect x="11" y="31" width="3" height="1" fill="#FED000" />
          <rect x="11" y="32" width="3" height="1" fill="#D49B00" />

          {/* Right Foot */}
          <rect x="21" y="31" width="4" height="2" fill="#1D1B18" />
          <rect x="22" y="31" width="3" height="1" fill="#FED000" />
          <rect x="22" y="32" width="3" height="1" fill="#D49B00" />

          {/* Front Cute Little Paws */}
          <rect x="13" y="24" width="3" height="3" fill="#1D1B18" />
          <rect x="13" y="24" width="2" height="2" fill="#FFE66D" />
          <rect x="13" y="26" width="2" height="1" fill="#D49B00" />

          <rect x="20" y="24" width="3" height="3" fill="#1D1B18" />
          <rect x="21" y="24" width="2" height="2" fill="#FFE66D" />
          <rect x="21" y="26" width="2" height="1" fill="#D49B00" />

          {/* === HEAD (BLOCKY MINECRAFT HEAD) === */}
          {/* Head Outline */}
          <rect x="9" y="10" width="18" height="12" fill="#1D1B18" />
          {/* Head Main Yellow */}
          <rect x="10" y="11" width="16" height="10" fill="#FED000" />
          {/* Top Head Highlight */}
          <rect x="11" y="11" width="14" height="1" fill="#FFE66D" />
          <rect x="10" y="12" width="1" height="8" fill="#FFE66D" />
          {/* Head Right Shadow */}
          <rect x="25" y="12" width="1" height="8" fill="#D49B00" />
          {/* Chin Shadow */}
          <rect x="12" y="20" width="12" height="1" fill="#D49B00" />

          {/* LEFT EYE (Minecraft blocky eye with specular shine) */}
          <rect x="12" y="13" width="3" height="3" fill="#1D1B18" />
          <rect x="12" y="13" width="1" height="1" fill="#FFFFFF" />
          <rect x="14" y="15" width="1" height="1" fill="#3D3630" />

          {/* RIGHT EYE */}
          <rect x="21" y="13" width="3" height="3" fill="#1D1B18" />
          <rect x="21" y="13" width="1" height="1" fill="#FFFFFF" />
          <rect x="23" y="15" width="1" height="1" fill="#3D3630" />

          {/* NOSE */}
          <rect x="17" y="16" width="2" height="1" fill="#1D1B18" />

          {/* RED CHEEK POUCHES (Iconic Minecraft redstone blocks) */}
          {/* Left Cheek */}
          <rect x="9" y="16" width="3" height="3" fill="#E82B2B" />
          <rect x="9" y="18" width="3" height="1" fill="#B01818" />
          <rect x="9" y="16" width="1" height="1" fill="#FF7070" />

          {/* Right Cheek */}
          <rect x="24" y="16" width="3" height="3" fill="#E82B2B" />
          <rect x="24" y="18" width="3" height="1" fill="#B01818" />
          <rect x="24" y="16" width="1" height="1" fill="#FF7070" />

          {/* CUTE MOUTH (Cat smile 'w') */}
          <rect x="16" y="18" width="1" height="1" fill="#1D1B18" />
          <rect x="19" y="18" width="1" height="1" fill="#1D1B18" />
          <rect x="17" y="19" width="2" height="1" fill="#E82B2B" />
          <rect x="16" y="19" width="1" height="1" fill="#1D1B18" />
          <rect x="19" y="19" width="1" height="1" fill="#1D1B18" />

          {/* MINECRAFT PIXEL PARTICLES (YELLOW/CYAN CRIT SPARKLES) */}
          <rect x="3" y="12" width="2" height="2" fill="#FFE66D" opacity="0.85" />
          <rect x="4" y="13" width="1" height="1" fill="#FED000" />

          <rect x="32" y="10" width="2" height="2" fill="#FFE66D" opacity="0.9" />
          <rect x="33" y="11" width="1" height="1" fill="#FED000" />

          <rect x="31" y="27" width="2" height="2" fill="#55FFFF" opacity="0.8" />
          <rect x="4" y="25" width="2" height="2" fill="#55FFFF" opacity="0.75" />
        </svg>

        {/* Dynamic Electric Spark FX on Click/Hover */}
        {isSparking && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            <div className="absolute top-2 left-6 w-3 h-3 bg-[#FFE66D] border-2 border-black rotate-12 animate-ping" />
            <div className="absolute top-8 right-6 w-3 h-3 bg-[#55FFFF] border-2 border-black -rotate-12 animate-ping" />
            <div className="absolute bottom-6 left-8 w-2 h-2 bg-[#FED000] border border-black animate-bounce" />
            <span className="absolute -top-6 font-black text-sm tracking-widest text-[#FED000] bg-black/80 px-2 py-0.5 rounded border border-[#FED000]/50 uppercase shadow-lg">
              ⚡ Pika!
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Retro 8-bit Name Tag below Pikachu */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="bg-[#181818]/90 text-[#FED000] text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded border border-[#FED000]/40 whitespace-nowrap shadow-md">
          Minecraft 2D Pikachu
        </span>
      </div>
    </div>
  );
};
