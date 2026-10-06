import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedWord: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <motion.span
      style={{ opacity, willChange: 'opacity' }}
      className="inline-block whitespace-nowrap mr-1.5"
    >
      {word}
    </motion.span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const start = idx / totalWords;
        const end = Math.min(1, start + 0.08);
        return (
          <AnimatedWord
            key={`word-${idx}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
