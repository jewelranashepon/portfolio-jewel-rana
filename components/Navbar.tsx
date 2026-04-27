// "use client";
// import { useState, useEffect } from 'react';
// import { Menu, X, Code2 } from 'lucide-react';

// const links = [
//   { label: 'About', href: '#about' },
//   { label: 'Skills', href: '#skills' },
//   { label: 'Experience', href: '#experience' },
//   { label: 'Projects', href: '#projects' },
//   { label: 'Education', href: '#education' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [active, setActive] = useState('');

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const sections = links.map((l) => l.href.slice(1));
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) setActive(e.target.id);
//         });
//       },
//       { threshold: 0.4 }
//     );
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) observer.observe(el);
//     });
//     return () => observer.disconnect();
//   }, []);

//   const handleClick = (href: string) => {
//     setOpen(false);
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800/50' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <button
//             onClick={() => handleClick('#hero')}
//             className="flex items-center gap-2 group"
//           >
//             <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
//               <Code2 size={16} className="text-white" />
//             </div>
//             <span className="text-white font-bold text-lg tracking-tight">
//               Jewel<span className="text-cyan-400">.</span>dev
//             </span>
//           </button>

//           <div className="hidden md:flex items-center gap-1">
//             {links.map((link) => (
//               <button
//                 key={link.href}
//                 onClick={() => handleClick(link.href)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   active === link.href.slice(1)
//                     ? 'text-cyan-400 bg-cyan-400/10'
//                     : 'text-slate-300 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {link.label}
//               </button>
//             ))}
//             <button
//               onClick={() => handleClick('#contact')}
//               className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
//             >
//               Hire Me
//             </button>
//           </div>

//           <button
//             className="md:hidden text-slate-300 hover:text-white transition-colors"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800">
//           <div className="px-4 py-3 space-y-1">
//             {links.map((link) => (
//               <button
//                 key={link.href}
//                 onClick={() => handleClick(link.href)}
//                 className="block w-full text-left px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors"
//               >
//                 {link.label}
//               </button>
//             ))}
//             <button
//               onClick={() => handleClick('#contact')}
//               className="w-full mt-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-sm font-semibold"
//             >
//               Hire Me
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Send } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));

    const getActiveSection = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            return id;
          }
        }
      }
      return "";
    };

    const handleScroll = () => {
      const activeSection = getActiveSection();
      setActive(activeSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-4 transition-all duration-500 ${
          scrolled ? "scale-[0.98]" : "scale-100"
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 h-16 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo Section */}
          <button
            onClick={() => handleClick("#hero")}
            className="flex items-center gap-2 group transition-transform active:scale-95 cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 transition-transform group-hover:rotate-12">
              <Sparkles size={18} className="text-white" />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <span className="text-slate-900 font-black text-xl tracking-tighter">
              JEWEL<span className="text-indigo-600">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 cursor-pointer ${
                  active === link.href.slice(1)
                    ? "text-indigo-600"
                    : "text-slate-800 hover:text-slate-950"
                }`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </button>
            ))}

            <div className="w-[1px] h-6 bg-slate-200 mx-3" />

            <button
              onClick={() => handleClick("#contact")}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg shadow-slate-200 hover:bg-indigo-600 hover:shadow-indigo-100 transition-all active:scale-95 cursor-pointer"
            >
              Contact
              <Send
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-600 shadow-sm cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-24 left-4 right-4 md:hidden transition-all duration-300 transform ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-4 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white shadow-2xl space-y-2">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`block w-full text-left px-5 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                  active === link.href.slice(1)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-indigo-600 text-white text-sm font-bold shadow-lg shadow-indigo-100 cursor-pointer"
            >
              Get in Touch
              <Send size={14} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
