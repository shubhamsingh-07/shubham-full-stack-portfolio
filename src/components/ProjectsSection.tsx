import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import { FadeIn } from './FadeIn.tsx';

interface Project {
  number: string;
  category: string;
  name: string;
  link: string;
  tech: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Full-Stack',
    name: 'Blog Application',
    tech: 'Node.js, Express.js, EJS',
    link: 'https://blog-capstone-gtkx.onrender.com/',
    col1Img1:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1280&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1280&q=80',
    col2Img: '/blog-app.jpg',
  },
  {
    number: '02',
    category: 'Node.js',
    name: 'QR Code Generator',
    tech: 'Node.js, JavaScript, Inquirer',
    link: 'https://github.com/shubhamsingh-07/QR-Code-Generator',
    col1Img1:
      'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=1280&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1280&q=80',
    col2Img: '/qr-generator.jpg',
  },
  {
    number: '03',
    category: 'Frontend',
    name: 'Simon Game',
    tech: 'JavaScript, HTML5, CSS3, jQuery',
    link: 'https://simon-game-shubham-builds.netlify.app/',
    col1Img1:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1280&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1280&q=80',
    col2Img: '/simon-game.jpg',
  },
  {
    number: '04',
    category: 'Java, CLI',
    name: 'Banking System',
    tech: 'Java, OOP',
    link: 'https://github.com/shubhamsingh-07/banking-mini-program',
    col1Img1:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1280&q=80',
    col1Img2:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1280&q=80',
    col2Img: '/banking-cli.webp',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(${index * 28}px + 5.5rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: 'transform',
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-6 shadow-2xl relative overflow-hidden"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#D7E2EA]/10">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs sm:text-sm font-medium">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-tight leading-snug"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block text-xs uppercase tracking-wider text-[#D7E2EA]/50 font-light mr-2">
              {project.tech}
            </span>
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch flex-grow">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6 justify-between">
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Img1}
                alt={`${project.name} preview 1`}
                loading="lazy"
                onError={(e) => {
                  // Fallback for Unsplash or blocked assets
                  if (!e.currentTarget.src.includes('images.unsplash.com')) {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1280&q=80';
                  }
                }}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Img2}
                alt={`${project.name} preview 2`}
                loading="lazy"
                onError={(e) => {
                  if (!e.currentTarget.src.includes('images.unsplash.com')) {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1280&q=80';
                  }
                }}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] min-h-[220px] md:min-h-full">
            <img
              src={project.col2Img}
              alt={`${project.name} showcase`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 pb-28"
    >
      {/* Heading: "Project" */}
      <FadeIn delay={0} y={30} className="mb-16 sm:mb-20 md:mb-24 text-center">
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* 4 Sticky Stacking Cards */}
      <div className="relative max-w-6xl mx-auto flex flex-col">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};
