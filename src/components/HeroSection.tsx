import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { Magnet } from './Magnet.tsx';
import { ContactButton } from './ContactButton.tsx';
import { PixelObanai } from './PixelObanai.tsx';

export const HeroSection: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[620px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Top Section: Navbar & Heading */}
      <div className="w-full flex flex-col flex-shrink-0 z-20">
        {/* Navbar */}
        <FadeIn delay={0} y={-20} className="relative z-20 w-full px-6 md:px-10 pt-6 md:pt-8">
          <nav className="flex justify-between items-center w-full">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </FadeIn>

        {/* Hero Heading */}
        <div className="w-full overflow-hidden text-center z-10 px-2 sm:px-4 mt-3 sm:mt-5 md:mt-6">
          <FadeIn delay={0.15} y={30} className="w-full">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[10.5vw] md:text-[11.5vw] lg:text-[12vw]">
              Hi, i&apos;m shubham
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Center Section: Obanai Logo with Magnet - Sits cleanly in dedicated flex-grow area */}
      <div className="relative z-10 flex-grow flex items-center justify-center pointer-events-auto px-4 my-4 sm:my-6 md:my-8 min-h-[160px]">
        <FadeIn delay={0.6} y={20}>
          <Magnet
            padding={90}
            strength={4.5}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="inline-block"
          >
            <PixelObanai className="w-[130px] sm:w-[165px] md:w-[200px] lg:w-[230px]" />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar: Bio Left + Contact Button Right */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full flex-shrink-0">
        {/* Left Bio text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full-stack developer driven by building scalable and unforgettable web applications
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
