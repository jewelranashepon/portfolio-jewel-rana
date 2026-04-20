import {  Mail, Code2, Heart, GitBranch, LucideForkKnifeCrossed } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Jewel<span className="text-cyan-400">.</span>dev
            </span>
          </div>

          <p className="text-slate-500 text-sm text-center max-w-xs">
            Full Stack Web Developer based in Dhaka, Bangladesh. Building modern web solutions.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
            >
              <GitBranch size={17} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 hover:border-sky-400/50 hover:text-sky-400 transition-all duration-200"
            >
              <LucideForkKnifeCrossed size={17} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
            >
              <Mail size={17} />
            </a>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            &copy; {year} Jewel Rana. Crafted with
            <Heart size={11} className="text-red-500 fill-red-500" />
            in Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
