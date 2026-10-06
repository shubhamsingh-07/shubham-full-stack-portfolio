import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { AnimatedText } from './AnimatedText.tsx';
import { ContactButton } from './ContactButton.tsx';
import { PixelArrow } from './PixelArrow.tsx';
import { TechStack } from './TechStack.tsx';

const ABOUT_PARAGRAPH =
  "I'm a Computer Science undergraduate and Oracle-certified Generative AI professional. I focus on building scalable full-stack web applications with React.js, Node.js, and REST APIs, and i truly enjoy turning ideas into clean, reliable products. Let's build something incredible together!";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Centered Content Stack with One 2D Pixelated Arrow */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        {/* Single 2D Pixelated Arrow pointing to About me */}
        <FadeIn delay={0} y={-20} className="mb-4 sm:mb-6">
          <PixelArrow />
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.1} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading and text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16 w-full" />

        {/* Animated Paragraph */}
        <AnimatedText
          text={ABOUT_PARAGRAPH}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto"
        />

        {/* Gap between text block and button */}
        <div className="h-12 sm:h-16 md:h-20 w-full" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>

        {/* Tech Stack Component matching GitHub profile screenshot */}
        <TechStack />
      </div>
    </section>
  );
};
