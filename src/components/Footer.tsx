import React, { useState } from 'react';
import { Linkedin, Github, Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { FadeIn } from './FadeIn.tsx';

interface FooterLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

const FOOTER_LINKS: FooterLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shubhamsingh2022/',
    icon: <Linkedin className="w-5 h-5 flex-shrink-0" />,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/shubhamsingh-07',
    icon: <Github className="w-5 h-5 flex-shrink-0" />,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:shubhamsingh7102004@gmail.com',
    icon: <Mail className="w-5 h-5 flex-shrink-0" />,
    external: false,
  },
  {
    label: '+91 7905839383',
    href: 'tel:+917905839383',
    icon: <Phone className="w-5 h-5 flex-shrink-0" />,
    external: false,
  },
];

export const Footer: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => {
      setCopiedItem(null);
    }, 2000);
  };

  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 pb-16 border-t border-[#D7E2EA]/10 select-none scroll-mt-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Contact Heading & Subheading */}
        <FadeIn delay={0} y={30} className="text-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FED000] font-medium mb-3">
            Available For Opportunities & Collaborations
          </p>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
          >
            Get In Touch
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Have a project in mind, an opportunity, or just want to discuss modern full-stack web development? Reach out via any platform below.
          </p>
        </FadeIn>

        {/* 4 Rich Contact Detail Cards */}
        <FadeIn delay={0.15} y={30}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/shubhamsingh2022/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#141414] hover:border-[#D7E2EA]/60 hover:bg-[#1A1A1A] transition-all duration-300 flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#0077B5]/15 text-[#0077B5] group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] transition-colors" />
              </div>
              <div>
                <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest block font-medium">
                  LinkedIn
                </span>
                <span className="text-[#D7E2EA] text-sm md:text-base font-semibold group-hover:text-white transition-colors break-words">
                  /in/shubhamsingh2022
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/shubhamsingh-07"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#141414] hover:border-[#D7E2EA]/60 hover:bg-[#1A1A1A] transition-all duration-300 flex flex-col justify-between gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <ExternalLink className="w-4 h-4 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] transition-colors" />
              </div>
              <div>
                <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest block font-medium">
                  GitHub
                </span>
                <span className="text-[#D7E2EA] text-sm md:text-base font-semibold group-hover:text-white transition-colors break-words">
                  @shubhamsingh-07
                </span>
              </div>
            </a>

            {/* Email Card */}
            <div className="group p-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#141414] hover:border-[#D7E2EA]/60 hover:bg-[#1A1A1A] transition-all duration-300 flex flex-col justify-between gap-4 relative">
              <div className="flex items-center justify-between">
                <a
                  href="mailto:shubhamsingh7102004@gmail.com"
                  className="p-3 rounded-2xl bg-[#EA4335]/15 text-[#EA4335] group-hover:scale-110 transition-transform cursor-pointer"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <button
                  onClick={() => copyToClipboard('shubhamsingh7102004@gmail.com', 'email')}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg text-[#D7E2EA]/40 hover:text-[#D7E2EA] hover:bg-white/10 transition-colors"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div>
                <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest block font-medium">
                  Email
                </span>
                <a
                  href="mailto:shubhamsingh7102004@gmail.com"
                  className="text-[#D7E2EA] text-xs sm:text-sm font-semibold hover:text-white transition-colors block truncate"
                >
                  shubhamsingh7102004@gmail.com
                </a>
              </div>
            </div>

            {/* Mobile Number Card */}
            <div className="group p-5 rounded-3xl border border-[#D7E2EA]/20 bg-[#141414] hover:border-[#D7E2EA]/60 hover:bg-[#1A1A1A] transition-all duration-300 flex flex-col justify-between gap-4 relative">
              <div className="flex items-center justify-between">
                <a
                  href="tel:+917905839383"
                  className="p-3 rounded-2xl bg-[#34A853]/15 text-[#34A853] group-hover:scale-110 transition-transform cursor-pointer"
                >
                  <Phone className="w-6 h-6" />
                </a>
                <button
                  onClick={() => copyToClipboard('+917905839383', 'phone')}
                  title="Copy phone to clipboard"
                  className="p-1.5 rounded-lg text-[#D7E2EA]/40 hover:text-[#D7E2EA] hover:bg-white/10 transition-colors"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div>
                <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-widest block font-medium">
                  Mobile Number
                </span>
                <a
                  href="tel:+917905839383"
                  className="text-[#D7E2EA] text-sm md:text-base font-semibold hover:text-white transition-colors block"
                >
                  +91 7905839383
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Quick Nav Bar Links Style Row */}
        <FadeIn delay={0.25} y={20} className="border-t border-[#D7E2EA]/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2.5 text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

