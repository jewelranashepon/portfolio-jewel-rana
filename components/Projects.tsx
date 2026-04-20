"use client";
import { useState } from "react";
import { ExternalLink, Star, ArrowRight, FolderKanban } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { ref, visible } = useScrollAnimation();

  // Show 4 if standard, 2 standard + 1 prominent if you decide to highlight
  // Here we display 3 in a cleaner row, or 6 if showAll is true
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-32 bg-[#030712] relative overflow-hidden"
    >
      {/* Optional decorative grid in background */}
      <div className="absolute inset-0 opacity-[0.015] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[url('/grid.svg')]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
                <FolderKanban size={14} /> Showcase
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
                  Engagements.
                </span>
              </h2>
            </div>
            <div className="w-24 h-px bg-slate-800 hidden md:block mb-6"></div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.map((project, i) => (
              <div
                key={i}
                className={`group flex flex-col bg-slate-900/40 border rounded-3xl overflow-hidden transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 ${
                  project.featured
                    ? "border-cyan-500/20 shadow-lg shadow-cyan-500/5"
                    : "border-slate-800"
                }`}
              >
                {/* 1. Image Container */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-slate-800/50">
                  <img
                    src={
                      project.image ||
                      "https://images.unsplash.com/photo-1618788372246-79faff063467?q=80&w=600&h=400&auto=format&fit=crop"
                    } // Placeholder if image is missing
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Featured Badge - bottom left on image */}
                  {project.featured && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#030712]/70 border border-cyan-500/30 text-cyan-400 text-xs font-semibold backdrop-blur-sm shadow-xl">
                      <Star size={12} fill="currentColor" />
                      FEATURED
                    </div>
                  )}

                  {/* Glassmorphism Action Area (View Live Button) */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20"
                      aria-label="View live project"
                    >
                      <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50">
                        View Live Site
                        <ExternalLink size={16} />
                      </button>
                    </a>
                  )}
                </div>

                {/* 2. Content Container */}
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 text-xs font-mono shrink-0 mt-1.5">
                      {project.period}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700/50 group-hover:border-cyan-500/20 group-hover:text-slate-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show All / Show Less Button */}
          {projects.length > 3 && (
            <div className="text-center mt-20">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-slate-800 text-slate-300 font-bold hover:border-cyan-400/50 hover:text-white hover:bg-slate-900/50 transition-all duration-300"
              >
                {showAll
                  ? "Show Less Works"
                  : `Explore All Projects (${projects.length})`}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
