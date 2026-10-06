import React from 'react';
import { FadeIn } from './FadeIn.tsx';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Full-Stack Development',
    description:
      'Building end-to-end web applications with React.js, Node.js, and Express.js, from database-backed logic to polished user interfaces.',
  },
  {
    number: '02',
    name: 'REST API Development',
    description:
      'Designing clean RESTful routes and middleware with proper error handling, built for scalability and reliable data flow.',
  },
  {
    number: '03',
    name: 'Frontend Development',
    description:
      'Crafting responsive, interactive interfaces with React.js, JavaScript (ES6+), HTML5, and CSS3, with attention to performance and user experience.',
  },
  {
    number: '04',
    name: 'Server-Side Rendering',
    description:
      'Creating dynamic, server-rendered pages with EJS and Express that load fast and stay easy to maintain.',
  },
  {
    number: '05',
    name: 'Deployment & Version Control',
    description:
      'Managing code with Git and GitHub and deploying live applications, so projects are production-ready and easy to collaborate on.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={30}>
          <h2
            className="pixel-heading-dark font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 transition-colors duration-300 hover:bg-black/[0.02]"
            >
              {/* Number on left */}
              <div
                className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[200px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              {/* Name & Description stacked on right */}
              <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] tracking-tight leading-snug"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60 text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
