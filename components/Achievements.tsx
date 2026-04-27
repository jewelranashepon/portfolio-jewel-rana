// "use client";
// import { Trophy, Zap, Globe, Layout, Search, Award, Star } from 'lucide-react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// // I recommend adding these to your portfolioData.js, 
// // but here is a hardcoded version with the WordPress additions
// const achievementsList = [
//   {
//     title: "High-Performance Web Solutions",
//     description: "Built and deployed 20+ full-stack applications using Next.js and TypeScript with 99.9% uptime and sub-second load times.",
//     icon: Zap,
//     color: "text-amber-400",
//     bg: "bg-amber-400/10"
//   },
//   {
//     title: "WordPress Expert Certification",
//     description: "Delivered 15+ custom WordPress enterprise themes and plugins, optimizing for core web vitals and advanced security.",
//     icon: Layout,
//     color: "text-blue-400",
//     bg: "bg-blue-400/10"
//   },
//   {
//     title: "Technical SEO Success",
//     description: "Successfully increased organic traffic by 150% for Australian legal sector clients through technical site restructuring.",
//     icon: Search,
//     color: "text-cyan-400",
//     bg: "bg-cyan-400/10"
//   },
//   {
//     title: "Digital Agency Innovation",
//     description: "Architected the digital presence for Codexa Digital, establishing a modern UI/UX standard for Australian web design.",
//     icon: Globe,
//     color: "text-indigo-400",
//     bg: "bg-indigo-400/10"
//   },
//   {
//     title: "SaaS UI/UX Recognition",
//     description: "Recognized for 'Best Professional UI Design' in modern SaaS dashboards, utilizing bento-grids and glassmorphism.",
//     icon: Award,
//     color: "text-emerald-400",
//     bg: "bg-emerald-400/10"
//   },
//   {
//     title: "Infrastructure Specialist",
//     description: "Managed secure VPS deployments on Hostinger and Nginx, handling complex SSL and DNS propagation issues.",
//     icon: Star,
//     color: "text-purple-400",
//     bg: "bg-purple-400/10"
//   }
// ];

// export default function Achievements() {
//   const { ref, visible } = useScrollAnimation();

//   return (
//     <section id="achievements" className="py-32 bg-[#030712] relative overflow-hidden">
//       {/* Background Accent */}
//       <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div ref={ref} className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
//               <Trophy size={14} className="text-amber-400" /> Milestones
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
//               A Track Record of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Excellence.</span>
//             </h2>
//             <p className="text-slate-500 mt-4 max-w-xl mx-auto">
//               Combining technical mastery with business-driven results to deliver high-impact digital solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {achievementsList.map((ach, i) => (
//               <div
//                 key={i}
//                 className="group relative bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:bg-slate-900/80 overflow-hidden"
//               >
//                 {/* Subtle Card Glow */}
//                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

//                 <div className="relative z-10">
//                   <div className={`w-14 h-14 rounded-2xl ${ach.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                     <ach.icon size={28} className={ach.color} />
//                   </div>
                  
//                   <h3 className="text-white font-bold text-xl mb-3 tracking-tight group-hover:text-amber-400 transition-colors">
//                     {ach.title}
//                   </h3>
                  
//                   <p className="text-slate-400 text-sm leading-relaxed">
//                     {ach.description}
//                   </p>
//                 </div>

//                 {/* Bottom Highlight Line */}
//                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:w-full transition-all duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { Trophy, Zap, Globe, Layout, Search, Award, Star, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const achievementsList = [
  {
    title: "High-Performance Web Solutions",
    description: "Built 20+ full-stack apps with 99.9% uptime and sub-second load times.",
    icon: Zap,
    color: "from-amber-400 to-yellow-600",
    size: "md:col-span-1", // Bento span logic
  },
  {
    title: "WordPress Expert",
    description: "15+ custom enterprise themes optimizing for core web vitals.",
    icon: Layout,
    color: "from-blue-500 to-indigo-600",
    size: "md:col-span-1",
  },
  {
    title: "Technical SEO Success",
    description: "150% organic traffic growth for Australian legal sector clients.",
    icon: Search,
    color: "from-cyan-400 to-blue-500",
    size: "md:col-span-1",
  },
  {
    title: "Digital Agency Innovation",
    description: "Architected modern UI/UX standards for Codexa Digital in Australia.",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    size: "md:col-span-1",
  },
  {
    title: "SaaS UI Recognition",
    description: "Awarded 'Best Professional UI' for glassmorphism dashboards.",
    icon: Award,
    color: "from-rose-400 to-pink-600",
    size: "md:col-span-1",
  },
  {
    title: "Infrastructure Specialist",
    description: "Secure VPS & Nginx deployments with complex SSL handling.",
    icon: Star,
    color: "from-emerald-400 to-teal-600",
    size: "md:col-span-1",
  }
];

export default function Achievements() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Premium Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#e2e8f0,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          <div className="mb-10">
            <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Expertise & Impact
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A legacy of {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Technical Excellence.</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievementsList.map((ach, i) => (
              <div
                key={i}
                className= "group relative p-8 rounded-3xl bg-slate-50/50 border border-slate-200/60 overflow-hidden transition-all duration-500 shadow-sm hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50"
              >
                {/* Border Beam Effect (Top highlight) */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${ach.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/10`}>
                      <ach.icon size={24} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-500 transition-all duration-300">
                      {ach.title}
                    </h3>
                    
                    <p className="text-slate-800 text-sm leading-relaxed max-w-[280px]">
                      {ach.description}
                    </p>
                  </div>

                  {/* Corner Link Icon */}
                  <div className="mt-8 flex items-center gap-2 text-slate-700 group-hover:text-slate-900 transition-colors">
                    <span className="text-[10px] font-bold uppercase tracking-wider">Detail</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Subtle Geometric Decoration */}
                <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${ach.color} opacity-0 group-hover:opacity-[0.03] rounded-full blur-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>

          {/* Footer Stat Bar */}
          <div className="mt-12 flex flex-wrap gap-8 justify-between items-center py-8 border-t border-slate-100">
            {[
              { label: "Sub-Second", val: "LTP" },
              { label: "100%", val: "Delivery" },
              { label: "20+", val: "Live Apps" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-black text-slate-900">{stat.label}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.val}</span>
              </div>
            ))}
            <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-xs hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10">
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}