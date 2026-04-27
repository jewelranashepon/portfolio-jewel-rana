"use client";
import { useState } from "react";
import { ExternalLink, Star, ArrowRight, FolderKanban, Sparkles } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { ref, visible } = useScrollAnimation();

  // Logic to toggle between 3 and all projects
  const displayed = showAll ? projects : projects.slice(0, 3);

  // High-end vibrant gradients for a professional "Pop"
  const cardGradients = [
    "from-blue-500 to-cyan-400",
    "from-violet-500 to-fuchsia-400",
    "from-orange-400 to-rose-400",
    "from-emerald-500 to-teal-400",
  ];

  return (
    <section id="projects" className="py-12 lg:py-20 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[150px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles size={14} className="animate-pulse" /> Selected Works
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Digital Solutions.</span>
            </h2>
            <p className="max-w-2xl text-slate-500 text-lg font-medium">
              A collection of high-performance applications built with precision and modern aesthetics.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col bg-white rounded-3xl p-4 border border-slate-200/60 shadow-xl shadow-blue-900/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* 1. Image Area */}
                <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden">
                  <img
                    src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Top Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/20 flex items-center gap-1.5">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="text-[10px] font-black text-slate-800 tracking-tighter">FEATURED</span>
                    </div>
                  )}
                </div>

                {/* 2. Content Area */}
                <div className="px-5 pt-8 pb-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-slate-900 text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags?.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-800 text-[10px] font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 3. Action Area - THE FIXED LINK */}
                  <div className="mt-auto">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r ${
                          cardGradients[i % cardGradients.length]
                        } text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:brightness-105 transition-all active:scale-95 cursor-pointer`}
                      >
                        Launch Application
                        <ExternalLink size={18} />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center w-full py-4 rounded-2xl bg-slate-100 text-slate-400 font-bold text-sm cursor-not-allowed">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          {projects.length > 3 && (
            <div className="flex justify-center mt-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-2xl hover:bg-indigo-600 transition-all duration-300"
              >
                {showAll ? "Show Less" : `Explore All Projects (${projects.length})`}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}