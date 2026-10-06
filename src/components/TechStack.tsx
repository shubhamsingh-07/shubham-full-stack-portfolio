import React from 'react';
import { FadeIn } from './FadeIn.tsx';

interface TechItem {
  name: string;
  category: string;
  glowColor: string;
  icon: React.ReactNode;
}

export const TechStack: React.FC = () => {
  // Group 1: Languages
  const languages: TechItem[] = [
    {
      name: 'JavaScript',
      category: 'Languages',
      glowColor: '#F7DF1E',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#F7DF1E" />
          <path
            d="M17 48.5c1.8 1.1 4 1.8 6.4 1.8 5 0 8.2-2.5 8.2-8V23.7h-6.2v18.4c0 3.1-1.6 4.3-4.1 4.3-1.6 0-3-.6-3.9-1.3l-.4 3.4zm23.6-1.5c2.3 1.4 5.3 2.3 8.6 2.3 6.9 0 11.2-3.6 11.2-9.7 0-5.4-3.4-8.2-8.5-10.4-3.4-1.5-5.2-2.7-5.2-4.9 0-1.9 1.5-3.3 4.2-3.3 2.4 0 4.6.8 6 1.8l1.7-4.4c-1.8-1.1-4.4-1.8-7.5-1.8-6.3 0-10.4 3.6-10.4 9.1 0 5.2 3.4 8 8.4 10.1 3.5 1.5 5.3 2.9 5.3 5.3 0 2.2-1.9 3.8-5 3.8-2.9 0-5.7-1.1-7.3-2.3l-1.5 4.5z"
            fill="#000000"
          />
        </svg>
      ),
    },
    {
      name: 'Java',
      category: 'Languages',
      glowColor: '#EA2D2E',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1E293B" />
          <path
            d="M26.4 46.8s-3.5 1.8 2.2 2.4c6.7.7 10.6.6 17.5-1 0 0 2.2 1.4-1.3 2.5-9.6 2.8-23.7.8-18.4-3.9zm-2.8-7.3s-3.8 2.5 1.8 3.2c7.2.9 12.8.9 22.8-.9 0 0 1.6 1.1-1.3 2-9.5 2.8-27.8 1.4-23.3-4.3zm12.3-12.7c3.3 3.6-.9 7-2.6 10.2 3.6-3.8 7.3-7.5 4.1-12.6-3.1-4.9-6-7.8 6.4-14.4-13.6 5.2-12.8 11.8-7.9 16.8zm7.3 12.3c2.7-2.7 5.1-5.7 3.6-9.1-1.2-2.8-4-4.2-5.7-6.5-1.1-1.5-1.5-3.3-1.4-5.1-4.2 4.4-2.8 10.6 3.5 20.7zm-14.8 12.9s-5.8 3.3 2 4.2c9.5 1.1 16.2.7 26.6-1 0 0 1.7 1.3-1.6 2.3-11.8 3.4-34.1 1.7-27-5.5z"
            fill="#EA2D2E"
          />
          <path
            d="M39.6 18c3.2 4.3-1.5 8.2-3.7 11.8 4.2-4.4 7.6-8.9 3.7-11.8zm-9.3 24.3c-2.7.4-4.8.8-4.8.8s-1.8 1.4.9 1.7c4.6.6 9.8.5 15.6-.2 4.7-.6 9.5-1.7 9.5-1.7s1.3.9-1 1.6c-8.5 2.4-24.5 1.8-20.2-2.2z"
            fill="#5382A1"
          />
        </svg>
      ),
    },
    {
      name: 'C++',
      category: 'Languages',
      glowColor: '#00599C',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#00599C" />
          <path
            d="M32 14l16 9.2v17.6L32 50 16 40.8V23.2L32 14z"
            fill="#004482"
          />
          <path
            d="M32 23c-5 0-9 4-9 9s4 9 9 9c3.2 0 6-1.7 7.5-4.2l-4-2.3c-.8 1.2-2 2-3.5 2-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5c1.5 0 2.7.8 3.5 2l4-2.3C38 24.7 35.2 23 32 23zm10 6.5h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2zm7 0h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'HTML5',
      category: 'Languages',
      glowColor: '#E34F26',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#E34F26" />
          <path d="M16 15l3.2 35.8L32 55l12.8-4.2L48 15H16zm26 12.3H27.8l.5 5.5h13.2l-1.2 13-8.3 2.3-8.3-2.3-.5-6.3h4.6l.3 3.3 3.9 1 3.9-1 .4-4.8H21.2l-1.4-16h22.7l-.5 5.3z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      category: 'Languages',
      glowColor: '#1572B6',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1572B6" />
          <path d="M16 15l3.2 35.8L32 55l12.8-4.2L48 15H16zm26 12.3H27.8l.5 5.5h13.2l-1.2 13-8.3 2.3-8.3-2.3-.5-6.3h4.6l.3 3.3 3.9 1 3.9-1 .4-4.8H21.2l-1.4-16h22.7l-.5 5.3z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  // Group 2: Frontend
  const frontend: TechItem[] = [
    {
      name: 'React.js',
      category: 'Frontend',
      glowColor: '#61DAFB',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#20232A" />
          <g fill="none" stroke="#61DAFB" strokeWidth="2.5">
            <ellipse cx="32" cy="32" rx="6.5" ry="18" transform="rotate(30 32 32)" />
            <ellipse cx="32" cy="32" rx="6.5" ry="18" transform="rotate(90 32 32)" />
            <ellipse cx="32" cy="32" rx="6.5" ry="18" transform="rotate(150 32 32)" />
          </g>
          <circle cx="32" cy="32" r="3.5" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: 'Bootstrap',
      category: 'Frontend',
      glowColor: '#7952B3',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#7952B3" />
          <path
            d="M24 18h10.5c4.5 0 7.5 2.5 7.5 6.2 0 2.5-1.5 4.5-3.8 5.4 3 1 4.8 3.2 4.8 6.4 0 4.5-3.5 7-8.5 7H24V18zm6 9.5h4c2 0 3.2-1 3.2-2.6 0-1.6-1.2-2.5-3.2-2.5H30v5.1zm0 10.9h4.5c2.2 0 3.8-1 3.8-2.9 0-1.8-1.5-2.8-3.8-2.8H30v5.7z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'jQuery',
      category: 'Frontend',
      glowColor: '#0769AD',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#0769AD" />
          <path
            d="M17 38c5-2 11-8 16-16 2.5 8 9 14 14 16-6 3-12 6-17 6s-9-3-13-6z"
            fill="#FFFFFF"
          />
          <path
            d="M32 20c-2 3-5 7-9 11 3 0 7-1 10-3 3-2 6-5 8-8-3 0-6 0-9 0z"
            fill="#00528A"
          />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      glowColor: '#1572B6',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1572B6" />
          <path d="M16 15l3.2 35.8L32 55l12.8-4.2L48 15H16zm26 12.3H27.8l.5 5.5h13.2l-1.2 13-8.3 2.3-8.3-2.3-.5-6.3h4.6l.3 3.3 3.9 1 3.9-1 .4-4.8H21.2l-1.4-16h22.7l-.5 5.3z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      glowColor: '#E34F26',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#E34F26" />
          <path d="M16 15l3.2 35.8L32 55l12.8-4.2L48 15H16zm26 12.3H27.8l.5 5.5h13.2l-1.2 13-8.3 2.3-8.3-2.3-.5-6.3h4.6l.3 3.3 3.9 1 3.9-1 .4-4.8H21.2l-1.4-16h22.7l-.5 5.3z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  // Group 3: Backend & Databases
  const backend: TechItem[] = [
    {
      name: 'Node.js',
      category: 'Backend & Databases',
      glowColor: '#339933',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#222222" />
          <path
            d="M32 14l16 9.2v17.6L32 50 16 40.8V23.2L32 14z"
            fill="#339933"
          />
          <path
            d="M26 38V26h3.5v9.5h5V38H26zm14.5-5.5h-5.5v-2h5.5c1.5 0 2.5-.8 2.5-2.2 0-1.5-1-2.3-2.5-2.3h-7V38h3.5v-3.5h3.5c2.5 0 4.5 1.5 4.5 3.5v.5h-3.5v-.5c0-.8-.6-1.5-1.5-1.5z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'Express.js',
      category: 'Backend & Databases',
      glowColor: '#E2E8F0',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1C1C1C" />
          <text
            x="32"
            y="41"
            fontSize="26"
            fontFamily="sans-serif"
            fontWeight="bold"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            ex
          </text>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      category: 'Backend & Databases',
      glowColor: '#47A248',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1C2826" />
          <path
            d="M32 14c-1 3-7 14-7 22 0 7.5 4.5 13 7 14 2.5-1 7-6.5 7-14 0-8-6-19-7-22z"
            fill="#47A248"
          />
          <path
            d="M32 14v36c.5 0 1-.2 1.5-.5 2.5-1.5 5.5-6.5 5.5-13.5 0-8-6-19-7-22z"
            fill="#4DB33D"
          />
          <path d="M32 46v4c-.5-.1-1-.4-1.3-.8L32 46z" fill="#3F8F3B" />
        </svg>
      ),
    },
    {
      name: 'MySQL',
      category: 'Backend & Databases',
      glowColor: '#00758F',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#00758F" />
          <path
            d="M44 26c-3-2-7-3-11-2-5 1-9 5-11 9-1 2-1 4 0 6 1 2 3 3 5 3 4 0 8-2 11-5 2-2 4-5 5-8 1-1 1-2 1-3zm-14 9c-2 0-3-1-3-2 0-2 2-3 4-3 1 0 2 0 2 1 0 2-1 4-3 4z"
            fill="#F29111"
          />
          <path
            d="M46 22c-5-4-12-5-18-3-7 2-12 8-14 15-1 4 0 8 2 11 3 3 7 5 11 5 6 0 12-3 16-7 4-4 6-9 6-15 0-2-1-4-3-6z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>
      ),
    },
  ];

  // Group 4: Cloud, DevOps & Tooling
  const tooling: TechItem[] = [
    {
      name: 'Git',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#F05032',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#F05032" />
          <path
            d="M48.2 28.5L35.5 15.8c-1.5-1.5-4-1.5-5.5 0l-2.7 2.7 4.2 4.2c1.3-.4 2.8-.2 3.8.9 1 1 1.3 2.5.9 3.8l4.1 4.1c1.3-.4 2.8-.2 3.8.9 1.5 1.5 1.5 4 0 5.5-1.5 1.5-4 1.5-5.5 0-1.1-1.1-1.4-2.7-.8-4.1l-3.8-3.8v10.5c.3.2.6.4.8.7 1.5 1.5 1.5 4 0 5.5-1.5 1.5-4 1.5-5.5 0-1.5-1.5-1.5-4 0-5.5.4-.4.9-.7 1.5-.8V28.2c-.6-.2-1.1-.4-1.5-.8-1.1-1.1-1.4-2.7-.8-4.1l-4.1-4.1-6.1 6.1c-1.5 1.5-1.5 4 0 5.5l12.7 12.7c1.5 1.5 4 1.5 5.5 0l14.2-14.2c1.5-1.6 1.5-4.1 0-5.6z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#FFFFFF',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#181717" />
          <path
            d="M32 16C23.2 16 16 23.2 16 32c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.8c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.7 2.5 1.7 1.4 2.5 3.8 1.8 4.7 1.4.1-1.1.6-1.8 1-2.2-3.6-.4-7.3-1.8-7.3-7.9 0-1.8.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4.1-.5s2.8.2 4.1.5c3.1-2.1 4.5-1.7 4.5-1.7.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.2-3.8 7.5-7.4 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .5.3.9 1.1.8C43.5 45.1 48 39.1 48 32c0-8.8-7.2-16-16-16z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'VS Code',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#007ACC',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#1E1E1E" />
          <path
            d="M45.5 17.5L34.3 26 23.8 18l-5.6 2.7v22.6l5.6 2.7 10.5-8 11.2 8.5 4.5-2.2V19.7l-4.5-2.2zM34.3 37.8L24 45.5V18.5l10.3 7.7v11.6zm11.2 2.7L36.8 33l8.7-7.5v15z"
            fill="#007ACC"
          />
        </svg>
      ),
    },
    {
      name: 'IntelliJ IDEA',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#21D789',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#000000" />
          <rect x="18" y="18" width="28" height="28" rx="4" fill="#21D789" />
          <rect x="22" y="22" width="20" height="20" rx="3" fill="#000000" />
          <text
            x="32"
            y="37"
            fontSize="14"
            fontFamily="monospace"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            IJ
          </text>
        </svg>
      ),
    },
    {
      name: 'NPM',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#CB3837',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#CB3837" />
          <path
            d="M18 22v20h14V27h5v15h9V22H18zm9 15h-4V27h4v10z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      name: 'Postman',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#FF6C37',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#FF6C37" />
          <circle cx="32" cy="28" r="8" fill="#FFFFFF" />
          <path
            d="M23 44c0-5 4-9 9-9s9 4 9 9H23z"
            fill="#FFFFFF"
          />
          <path d="M38 23l8-4-4 8" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: 'Oracle',
      category: 'Cloud, DevOps & Tooling',
      glowColor: '#C74634',
      icon: (
        <svg viewBox="0 0 64 64" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect width="64" height="64" rx="14" fill="#C74634" />
          <ellipse cx="32" cy="32" rx="14" ry="7" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  // Core Concepts & Skills tags
  const coreCompetencies = [
    'OOP',
    'DOM Manipulation',
    'REST APIs',
    'Server-Side Rendering',
    'Async JS',
    'Event Handling',
    'EJS',
  ];

  const renderLogoRow = (items: TechItem[], title: string) => (
    <div className="flex flex-col items-center gap-2.5">
      <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#D7E2EA]/80 uppercase">
        {title}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-full">
        {items.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="relative group cursor-pointer select-none"
          >
            {/* Logo Card with Brand Glow on Cursor Touch (Pure CSS - Zero Re-render) */}
            <div
              className="p-1.5 sm:p-2 rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 transition-all duration-300 ease-out flex items-center justify-center relative overflow-hidden group-hover:-translate-y-1 group-hover:scale-110"
              style={{
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tech.glowColor;
                e.currentTarget.style.boxShadow = `0 0 20px ${tech.glowColor}55, 0 4px 12px rgba(0,0,0,0.6)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(215, 226, 234, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Soft Radial Ambient Glow beneath the SVG */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${tech.glowColor} 0%, transparent 75%)`,
                }}
              />
              <div className="relative z-10 pointer-events-none">
                {tech.icon}
              </div>
            </div>

            {/* Pure CSS Hover Tooltip (Zero React State / Re-render) */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 scale-95 group-hover:scale-100">
              <span
                className="bg-[#181818]/95 text-xs font-mono tracking-wider font-semibold px-2 py-0.5 rounded border whitespace-nowrap shadow-xl block"
                style={{
                  color: tech.glowColor,
                  borderColor: `${tech.glowColor}60`,
                  boxShadow: `0 4px 14px rgba(0,0,0,0.8), 0 0 10px ${tech.glowColor}30`,
                }}
              >
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <FadeIn delay={0.2} y={30} className="w-full max-w-4xl mx-auto mt-12 sm:mt-16">
      {/* Container matching GitHub Profile Tech Stack */}
      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0E0E0E] border border-[#D7E2EA]/15 shadow-2xl flex flex-col gap-8 text-center relative overflow-hidden">
        {/* Subtle Ambient Tech Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#FED000]/5 blur-3xl rounded-full pointer-events-none" />

        {/* Section Header: 🛠️ Tech Stack */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl">🛠️</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight hero-heading">
              Tech Stack
            </h3>
          </div>
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#D7E2EA]/20 to-transparent" />
        </div>

        {/* Grouped Horizontal Logos Layout */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {renderLogoRow(languages, 'Languages')}
          {renderLogoRow(frontend, 'Frontend')}
          {renderLogoRow(backend, 'Backend & Databases')}
          {renderLogoRow(tooling, 'Cloud, DevOps & Tooling')}
        </div>

        {/* Core Architecture & Web Engineering Concepts */}
        <div className="flex flex-col items-center gap-3 pt-4 border-t border-[#D7E2EA]/10">
          <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
            Core Concepts & Engineering Competencies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl">
            {coreCompetencies.map((concept) => (
              <span
                key={concept}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#161616] border border-[#D7E2EA]/20 text-[#D7E2EA] hover:border-[#FED000]/50 hover:text-[#FED000] hover:bg-[#1C1C1C] transition-all duration-200 cursor-default select-none shadow-sm hover:shadow-[0_0_12px_rgba(254,208,0,0.25)]"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
