"use client";

import {
  User,
  Briefcase,
  GraduationCap,
  Code,
  CheckCircle2,
  Zap,
  Layout,
  Terminal,
} from "lucide-react";
import { personal } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  {
    icon: Briefcase,
    label: "Years Experience",
    value: "3+",
    color: "text-blue-400",
  },
  {
    icon: Code,
    label: "Projects Completed",
    value: "20+",
    color: "text-cyan-400",
  },
  {
    icon: Layout,
    label: "WordPress Sites",
    value: "15+",
    color: "text-sky-400",
  },
  {
    icon: User,
    label: "Satisfied Clients",
    value: "20+",
    color: "text-indigo-400",
  },
];

const expertise = [
  "Next.js & React Specialist",
  "Advanced WordPress Development",
  "Performance Optimization",
  "Technical SEO Strategy",
];

export default function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                <Terminal size={14} /> Professional Profile
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Crafting digital experiences with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  precision and passion.
                </span>
              </h2>
            </div>
            <div className="hidden md:block w-24 h-px bg-slate-800 mb-6" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Biography & Expertise */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 md:p-10">
                  <p className="text-slate-300 leading-relaxed text-lg mb-8">
                    {personal.summary}
                  </p>

                  {/* Expertise Tags */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {expertise.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500"
                          />
                        </div>
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status & Location Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">
                      Based In
                    </p>
                    <p className="text-white font-medium">
                      {personal.location}
                    </p>
                  </div>
                </div>
                <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase font-bold tracking-tighter">
                      Current Status
                    </p>
                    <p className="text-white font-medium">Available for Hire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Stats Grid (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="group relative bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-300 ${color}`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">
                      {value}
                    </p>
                    <p className="text-slate-500 text-sm font-medium leading-tight">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Helper Component
function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
