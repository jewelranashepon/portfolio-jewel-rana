
"use client";
import { useEffect, useState } from 'react';
import { 
  Mail, Phone, MapPin, ArrowDown, ExternalLink, 
  Globe2, User2, Code2, Cpu, Globe, Layers, Command 
} from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* --- Colorful Background Decorations --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Colorful Blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/50 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[120px] animate-pulse" />
        
        {/* Floating Icons Decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Code2 className="absolute top-40 left-[15%] text-blue-600 animate-bounce transition-all duration-1000" size={48} />
          <Layers className="absolute top-40 right-[20%] text-indigo-600 animate-pulse" size={40} />
          <Cpu className="absolute bottom-40 left-[20%] text-purple-600 animate-bounce" size={44} />
          <Globe className="absolute bottom-20 right-[15%] text-cyan-600 animate-pulse" size={52} />
          <Command className="absolute top-1/2 left-10 text-slate-400" size={32} />
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-soft-light"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>

          {/* Name & Title */}
          <h2 className="text-indigo-600 font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Creative Developer & Designer
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-6 tracking-tight">
            {personal.name}
          </h1>

          {/* Typewriter Section */}
          <div className="h-12 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              {displayed}
              <span className="inline-block w-[3px] h-8 bg-indigo-600 ml-1 align-middle animate-pulse" />
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-slate-800 text-lg md:text-xl leading-relaxed mb-12">
            Building <span className="text-indigo-600 font-semibold">high-performance websites</span>. 
            I transform ideas into scalable reality using the latest React ecosystem and modern UI patterns.
          </p>

          {/* Contact Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-slate-500">
              <MapPin size={16} className="text-indigo-500" />
              <span className="text-sm font-medium">{personal.location}</span>
            </div>
            <a href={`mailto:${personal.email}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-slate-500 hover:text-indigo-600 transition-all">
              <Mail size={16} className="text-indigo-500" />
              <span className="text-sm font-medium">{personal.email}</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              onClick={() => scroll('#projects')}
              className="group relative px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl overflow-hidden transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 active:scale-95"
            >
              <span className="relative flex items-center gap-2">
                View Portfolio <ExternalLink size={18} />
              </span>
            </button>
            
            <div className="flex items-center gap-3">
                <a
                href={personal.github}
                target="_blank"
                className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-all"
                aria-label="GitHub"
                >
                <Globe2 size={22} />
                </a>
                <a
                href={personal.linkedin}
                target="_blank"
                className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-all"
                aria-label="LinkedIn"
                >
                <User2 size={22} />
                </a>
                <button
                onClick={() => scroll('#contact')}
                className="ml-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                Let's Talk
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce">
        <ArrowDown size={20} className="text-indigo-400" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-[-1] opacity-[0.03]">
         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>
    </section>
  );
}