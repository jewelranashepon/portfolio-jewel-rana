"use client";
import { useState } from "react";
import { skills } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Layers, Cpu, Wrench, Globe, CheckCircle2, Award, ArrowRight } from "lucide-react";

const categories = [
  { key: "all", label: "All Tech", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
  { key: "frontend", label: "Frontend", icon: Layers, color: "text-indigo-600", bg: "bg-indigo-50" },
  { key: "backend", label: "Backend", icon: Cpu, color: "text-purple-600", bg: "bg-purple-50" },
  { key: "tools", label: "Tools", icon: Wrench, color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Skills() {
  const [active, setActive] = useState("all");
  const { ref, visible } = useScrollAnimation();

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="py-12 lg:py-20 bg-[#F8FAFC] relative overflow-hidden" // Light, clean background
    >
      {/* Soft Colorful Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl text-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
                Technical Proficiency
              </span>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Modern Stack &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Expertise.
                </span>
              </h3>
            </div>

            {/* WordPress Expert Badge - Refined for Light Mode */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white shadow-xl shadow-blue-500/5 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Award size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg leading-none">
                  WordPress Expert
                </p>
                <p className="text-slate-500 text-xs mt-1 font-medium uppercase tracking-wider">
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
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 border ${
                  active === cat.key
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200"
                    : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50"
                }`}
              >
                <cat.icon
                  size={18}
                  className={active === cat.key ? "text-white" : cat.color}
                />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-900 font-extrabold text-lg group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-indigo-50 transition-colors">
                      <CheckCircle2
                        size={18}
                        className="text-slate-300 group-hover:text-indigo-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Skill Level Indicator - High Contrast */}
                  <div className="flex gap-1.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                          visible && i < Math.ceil(skill.level / 20)
                            ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                            : "bg-slate-100"
                        }`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-indigo-400 transition-colors">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Expertise Callout - Bold and Colorful */}
          <div className="mt-20 p-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-[2.5rem]">
            <div className="bg-white p-8 md:p-10 rounded-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex gap-8 items-center text-center md:text-left flex-col md:flex-row">
                <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
                  <Globe size={40} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-black text-2xl mb-2">
                    Full-Cycle Digital Delivery
                  </h4>
                  <p className="text-slate-500 max-w-md font-medium leading-relaxed">
                    From custom <span className="text-indigo-600 font-bold">Next.js</span> applications to 
                    high-performance <span className="text-blue-600 font-bold">WordPress</span> ecosystems.
                  </p>
                </div>
              </div>
              <button className="group flex items-center gap-3 px-10 py-5 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-slate-200 hover:shadow-indigo-200">
                View Portfolio
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}