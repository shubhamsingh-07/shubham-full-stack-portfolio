import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ROW_1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW_2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Doubled lists for optimal performance & seamless loop
const ROW_1_TILES = [...ROW_1_IMAGES, ...ROW_1_IMAGES];
const ROW_2_TILES = [...ROW_2_IMAGES, ...ROW_2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // High-performance compositor scroll transforms (Zero React re-renders)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for high frame-rate motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // Row 1 moves RIGHT on scroll
  const x1 = useTransform(smoothProgress, [0, 1], [-250, 250]);
  // Row 2 moves LEFT on scroll
  const x2 = useTransform(smoothProgress, [0, 1], [250, -250]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - Moves RIGHT with GPU Compositor Acceleration */}
        <div className="overflow-visible">
          <motion.div
            style={{ x: x1, willChange: 'transform' }}
            className="flex gap-3"
          >
            {ROW_1_TILES.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="w-[420px] h-[270px] min-w-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-md"
              >
                <img
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves LEFT with GPU Compositor Acceleration */}
        <div className="overflow-visible">
          <motion.div
            style={{ x: x2, willChange: 'transform' }}
            className="flex gap-3"
          >
            {ROW_2_TILES.map((src, idx) => (
              <div
                key={`row2-${idx}`}
                className="w-[420px] h-[270px] min-w-[420px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-md"
              >
                <img
                  src={src}
                  alt={`Preview row 2 ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
