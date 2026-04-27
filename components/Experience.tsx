"use client";
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Updated experience data
const experience = [
  {
    role: "Frontend Developer",
    company: "Aus Asia IT",
    period: "October 2025 - Present",
    location: "On-site (Bangladesh Office)",
    description:
      "Working on scalable, high-performance web applications with a strong focus on modern UI/UX and clean architecture.",
    bullets: [
      "Developing responsive applications using React & Next.js",
      "Collaborating with backend teams for API integration",
      "Improving performance, accessibility, and SEO",
    ],
    link: "https://www.ausasiaonline.com.au/",
  },
  {
    role: "Frontend Developer",
    company: "Birds of Eden Soft",
    period: "January 2025 - September 2025",
    location: "On-site )",
    description:
      "Built and maintained modern web interfaces for client projects with a focus on usability and performance.",
    bullets: [
      "Created reusable and scalable UI components",
      "Optimized website speed and SEO",
      "Worked closely with design and backend teams",
    ],
    link: "https://birdsofeden.me/",
  },
];

export default function Experience() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section
      id="experience"
      className="py-12 lg:py-20 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Light premium background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
              Work Experience
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Professional Journey
            </h2>
            <p className="text-slate-800 mt-4 max-w-2xl mx-auto font-medium">
              A timeline of my professional experience, showcasing my growth,
              skills, and contributions in modern web development.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full mx-auto mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/40 via-slate-200 to-transparent" />

            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-24 pb-12">
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 border-4 border-white shadow-lg shadow-indigo-500/40" />

                {/* Card */}
                <div className="group bg-white border border-slate-200 hover:border-indigo-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-2">
                        <Briefcase size={16} className="text-indigo-600" />
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 font-semibold hover:underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 text-sm">
                      <div className="flex items-center gap-1.5 text-slate-800">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-800">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-900 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-slate-900"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-indigo-500 mt-1 shrink-0"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
