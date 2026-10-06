import React from 'react';
import { motion } from 'framer-motion';

export const PixelArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`inline-flex flex-col items-center justify-center select-none pointer-events-none ${className}`}
      title="2D Pixel Arrow"
    >
      {/* 2D Retro Pixel-Art Downward Arrow */}
      <svg
        viewBox="0 0 16 20"
        className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 filter drop-shadow-[0_4px_12px_rgba(254,208,0,0.35)]"
        style={{
          imageRendering: 'pixelated',
          shapeRendering: 'crispEdges',
        }}
      >
        {/* Pixel Arrow Shadow/Outline (Pure Black 2D outline) */}
        <rect x="5" y="1" width="6" height="11" fill="#000000" />
        <rect x="1" y="10" width="14" height="2" fill="#000000" />
        <rect x="2" y="12" width="12" height="2" fill="#000000" />
        <rect x="4" y="14" width="8" height="2" fill="#000000" />
        <rect x="6" y="16" width="4" height="2" fill="#000000" />
        <rect x="7" y="18" width="2" height="2" fill="#000000" />

        {/* Pixel Arrow Main Stem (Yellow #FED000) */}
        <rect x="6" y="2" width="4" height="9" fill="#FED000" />
        <rect x="6" y="2" width="1" height="9" fill="#FFE66D" />
        <rect x="9" y="2" width="1" height="9" fill="#D49B00" />

        {/* Pixel Arrow Head */}
        <rect x="2" y="11" width="12" height="1" fill="#FED000" />
        <rect x="3" y="12" width="10" height="1" fill="#FED000" />
        <rect x="3" y="12" width="2" height="1" fill="#FFE66D" />
        <rect x="5" y="13" width="6" height="1" fill="#FED000" />
        <rect x="5" y="14" width="6" height="1" fill="#FED000" />
        <rect x="7" y="15" width="2" height="1" fill="#FED000" />
        <rect x="7" y="16" width="2" height="1" fill="#FED000" />
        <rect x="7" y="17" width="2" height="1" fill="#D49B00" />
      </svg>
    </motion.div>
  );
};
