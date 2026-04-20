"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleClick('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Jewel<span className="text-cyan-400">.</span>dev
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="w-full mt-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
