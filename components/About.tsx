"use client";

import {
  User,
  Briefcase,
  Code,
  CheckCircle2,
  Zap,
  Layout,
  MapPin,
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { personal } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  {
    icon: Briefcase,
    label: "Years Experience",
    value: "3+",
    gradient: "from-blue-600 to-indigo-600",
    size: "col-span-1",
  },
  {
    icon: Code,
    label: "Projects Completed",
    value: "20+",
    gradient: "from-purple-600 to-pink-600",
    size: "col-span-1",
  },
  {
    icon: Layout,
    label: "WordPress Ecosystems",
    value: "15+",
    gradient: "from-emerald-500 to-teal-600",
    size: "col-span-2", // Highlighting core expertise
  },
];

const expertise = [
  "Next.js & React Specialist",
  "Advanced WordPress Architecture",
  "Performance & Core Web Vitals",
  "Technical SEO & Growth Strategy",
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 lg:py-20 bg-[#FDFDFF] relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-in-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT: Text Content */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
                  <Sparkles size={14} /> The Blueprint
                </span>
                <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  Architecting <br />
                  <span className="italic font-serif text-indigo-600">Digital</span> Excellence.
                </h2>
                <p className="text-lg text-slate-900 leading-relaxed">
                  {personal.summary}
                </p>
              </div>

              {/* Modern Expertise Pills */}
              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-indigo-300 transition-colors group">
                    <CheckCircle2 size={16} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-slate-900">{item}</span>
                  </div>
                ))}
              </div>

              {/* Status Indicator Group */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-slate-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-600 tracking-widest leading-none mb-1">Base</p>
                    <p className="text-slate-900 font-bold">{personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-200 flex items-center justify-center text-white">
                    <Zap size={20} />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-600 tracking-widest leading-none mb-1">Status</p>
                    <p className="text-slate-900 font-bold">Open for Collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Bento Grid Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ icon: Icon, label, value, gradient, size }) => (
                  <div
                    key={label}
                    className={`relative overflow-hidden group p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${size}`}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-12 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <Icon size={22} />
                      </div>
                      
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-4xl font-bold text-slate-900 mb-1 tracking-tight">{value}</h4>
                          <p className="text-xs font-bold text-slate-600 tracking-widest">{label}</p>
                        </div>
                        <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Aesthetic "Call to Action" Bento Piece */}
                <div className="col-span-2 p-8 rounded-[2rem] bg-slate-900 text-white flex flex-row items-center justify-between group cursor-pointer overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                   <div className="relative z-10">
                      <p className="text-indigo-400 text-xs font-black uppercase tracking-[0.2em] mb-1">Let's build</p>
                      <h4 className="text-xl font-bold">Start a conversation</h4>
                   </div>
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors relative z-10">
                      <ExternalLink size={20} />
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}