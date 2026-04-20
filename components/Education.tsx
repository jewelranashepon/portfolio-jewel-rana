"use client";
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Education
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Academic Background
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full mx-auto mt-4" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-700 to-transparent" />

            {education.map((edu, i) => (
              <div key={i} className="relative pl-16 pb-10 last:pb-0">
                <div
                  className="absolute left-6 top-5 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center border-2 border-slate-900"
                  style={{ background: 'linear-gradient(135deg, #06b6d4, #0ea5e9)' }}
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                <div className="group bg-slate-800/60 border border-slate-700 hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-sky-500/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={18} className="text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base leading-tight">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold text-sm mt-0.5">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-slate-400 text-xs ml-13">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-slate-500" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-slate-500" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
