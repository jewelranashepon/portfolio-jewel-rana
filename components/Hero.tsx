"use client";
import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ArrowDown, Download, Globe, User, ExternalLink } from 'lucide-react';
import { personal } from '../data/portfolioData';

const roles = [
  'Full Stack Web Developer',
  'Next.js Specialist',
  'React Developer',
  'WordPress Expert',
  'UI/UX Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* --- Advanced Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f615,transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none"></div>
        
        {/* Animated Glows */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 text-xs font-medium mb-10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

          {/* Name & Title */}
          <h2 className="text-slate-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Hello, I am
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {personal.name}
          </h1>

          {/* Typewriter Section */}
          <div className="h-10 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {displayed}
              <span className="inline-block w-[2px] h-8 bg-cyan-500 ml-1 align-middle animate-pulse" />
            </span>
          </div>

          <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed mb-12">
            Specializing in <span className="text-slate-200">modern web ecosystems</span>. 
            I bridge the gap between complex backend logic and pixel-perfect frontend experiences.
          </p>

          {/* Contact Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors cursor-default">
              <MapPin size={16} className="text-cyan-500" />
              <span className="text-sm">{personal.location}</span>
            </div>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={16} className="text-cyan-500" />
              <span className="text-sm">{personal.email}</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => scroll('#projects')}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Latest Works <ExternalLink size={18} />
              </span>
            </button>
            
            <div className="flex items-center gap-2">
                <a
                href={personal.github}
                target="_blank"
                className="p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                aria-label="GitHub"
                >
                <Globe size={20} />
                </a>
                <a
                href={personal.linkedin}
                target="_blank"
                className="p-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                aria-label="LinkedIn"
                >
                <User size={20} />
                </a>
                <button
                onClick={() => scroll('#contact')}
                className="ml-2 px-6 py-4 rounded-full border border-slate-800 text-slate-300 font-medium hover:bg-slate-900 transition-all"
                >
                Contact Me
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-[-1] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>
    </section>
  );
}