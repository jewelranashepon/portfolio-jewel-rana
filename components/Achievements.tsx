"use client";
import { Trophy, Zap, Globe, Layout, Search, Award, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// I recommend adding these to your portfolioData.js, 
// but here is a hardcoded version with the WordPress additions
const achievementsList = [
  {
    title: "High-Performance Web Solutions",
    description: "Built and deployed 20+ full-stack applications using Next.js and TypeScript with 99.9% uptime and sub-second load times.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    title: "WordPress Expert Certification",
    description: "Delivered 15+ custom WordPress enterprise themes and plugins, optimizing for core web vitals and advanced security.",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Technical SEO Success",
    description: "Successfully increased organic traffic by 150% for Australian legal sector clients through technical site restructuring.",
    icon: Search,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Digital Agency Innovation",
    description: "Architected the digital presence for Codexa Digital, establishing a modern UI/UX standard for Australian web design.",
    icon: Globe,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10"
  },
  {
    title: "SaaS UI/UX Recognition",
    description: "Recognized for 'Best Professional UI Design' in modern SaaS dashboards, utilizing bento-grids and glassmorphism.",
    icon: Award,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Infrastructure Specialist",
    description: "Managed secure VPS deployments on Hostinger and Nginx, handling complex SSL and DNS propagation issues.",
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  }
];

export default function Achievements() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Trophy size={14} className="text-amber-400" /> Milestones
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              A Track Record of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Excellence.</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Combining technical mastery with business-driven results to deliver high-impact digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsList.map((ach, i) => (
              <div
                key={i}
                className="group relative bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:bg-slate-900/80 overflow-hidden"
              >
                {/* Subtle Card Glow */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${ach.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <ach.icon size={28} className={ach.color} />
                  </div>
                  
                  <h3 className="text-white font-bold text-xl mb-3 tracking-tight group-hover:text-amber-400 transition-colors">
                    {ach.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Bottom Highlight Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}