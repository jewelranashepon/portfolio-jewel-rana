"use client";
import { useState } from "react";
import { skills } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Layers, Cpu, Wrench, Globe, CheckCircle2, Award } from "lucide-react";

const categories = [
  { key: "all", label: "All Tech", icon: Globe },
  { key: "frontend", label: "Frontend", icon: Layers },
  { key: "backend", label: "Backend", icon: Cpu },
  { key: "tools", label: "Tools", icon: Wrench },
];

export default function Skills() {
  const [active, setActive] = useState("all");
  const { ref, visible } = useScrollAnimation();

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="py-32 bg-[#030712] relative overflow-hidden"
    >
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#3b82f605,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">
                Technical Proficiency
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Modern Stack &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Expertise.
                </span>
              </h3>
            </div>

            {/* WordPress Expert Badge - Right Side */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <Award size={24} />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">
                  WordPress Expert
                </p>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-tighter">
                  Enterprise Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  active === cat.key
                    ? "bg-white text-black border-white"
                    : "text-slate-400 border-slate-800 hover:border-slate-600 hover:bg-slate-900/50"
                }`}
              >
                <cat.icon
                  size={16}
                  className={
                    active === cat.key
                      ? "text-black"
                      : "text-slate-500 group-hover:text-cyan-400"
                  }
                />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-slate-900/40 border border-slate-800/50 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-800/40 hover:border-cyan-500/30 overflow-hidden"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-200 font-bold tracking-tight group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2
                      size={16}
                      className="text-slate-700 group-hover:text-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Skill Level Indicator - Minimalist Style */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                          visible && i < Math.ceil(skill.level / 20)
                            ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                            : "bg-slate-800"
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-6 items-center text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                <Globe size={32} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">
                  Full-Cycle Digital Delivery
                </h4>
                <p className="text-slate-400 max-w-md">
                  From custom Next.js applications to high-performance WordPress
                  ecosystems and technical SEO.
                </p>
              </div>
            </div>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
