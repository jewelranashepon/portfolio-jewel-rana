import {
  Mail,
  Code2,
  Heart,
  Globe2,
  User,
  MapPin,
  Phone,
  ExternalLink,
  ArrowRight,
  Send,
} from "lucide-react";
import { personal } from "../data/portfolioData";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
    social: [
      { name: "GitHub", href: personal.github, icon: Globe2 },
      { name: "LinkedIn", href: personal.linkedin, icon: User },
      { name: "Email", href: `mailto:${personal.email}`, icon: Mail },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-sky-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Jewel<span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Full Stack Web Developer crafting modern, scalable, and
              user-friendly web experiences.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-cyan-400" />
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={14} className="text-cyan-400" />
                </div>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-slate-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-cyan-400" />
                </div>
                <span className="text-slate-400 text-sm">
                  {personal.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Let&apos;s Connect
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              discuss how we can work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold rounded-xl hover:from-cyan-600 hover:to-sky-600 transition-all duration-300 shadow-lg shadow-cyan-500/20 group cursor-pointer"
            >
              Start a Project
              <ExternalLink
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              &copy; {year}{" "}
              <span className="text-white font-medium">Jewel Rana</span>.
              Crafted with
              <Heart size={12} className="text-red-500 fill-red-500 mx-1" />
              in Dhaka, Bangladesh
            </p>
            <div className="flex items-center gap-6">
              <span className="text-slate-600 text-xs uppercase tracking-wider">
                Built with Next.js & Tailwind
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-xs font-medium">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
