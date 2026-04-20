"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Globe,
  ArrowRight,
  User,
} from "lucide-react";
import { personal } from "../data/portfolioData";

export default function CompactContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    window.location.href = `mailto:${personal.email}?subject=Inquiry from ${form.name}&body=${form.message}`;
    setStatus("success");
    setIsSubmitting(false);
  };

  const inputStyles = `
    w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3.5 
    text-sm text-white placeholder:text-slate-600 outline-none 
    focus:bg-white/[0.05] focus:border-white/20 transition-all duration-300
    hover:border-white/10
  `;

  return (
    <section className="py-24 bg-[#030303] text-white relative overflow-hidden">
      {/* Sophisticated Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
          <div className="grid lg:grid-cols-12">
            {/* Branding Column */}
            <div className="lg:col-span-5 p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-8">
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                  Contact
                </div>
                <h2 className="text-4xl font-semibold tracking-tighter mb-4 italic">
                  Let&apos;s build <br />
                  <span className="text-slate-500 not-italic">
                    something great.
                  </span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
                  Available for select freelance opportunities and architectural
                  consulting.
                </p>
              </div>

              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                    <Mail
                      size={14}
                      className="text-slate-400 group-hover:text-white"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                    {personal.email}
                  </span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    <MapPin size={14} className="text-slate-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-300">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Interaction Column */}
            <div className="lg:col-span-7 p-10 lg:p-14 bg-gradient-to-b from-white/[0.01] to-transparent">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20">
                    <CheckCircle size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Message Drafted</h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Finishing the process in your mail client...
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      placeholder="Full Name"
                      className={inputStyles}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      className={inputStyles}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                    />
                  </div>

                  <textarea
                    required
                    placeholder="Your message or project brief..."
                    rows={4}
                    className={`${inputStyles} resize-none`}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />

                  <button
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-white text-black h-14 rounded-xl font-bold text-sm transition-all hover:bg-slate-100 active:scale-[0.98] disabled:opacity-50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          SEND INQUIRY
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </>
                      )}
                    </div>
                  </button>

                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex gap-4">
                      <a
                        href={personal.github}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={personal.linkedin}
                        className="text-slate-500 hover:text-white transition-colors"
                      >
                        <User size={16} />
                      </a>
                    </div>
                    <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                      © 2026 Portfolio
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Floating Availability Badge */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0A0A0A] border border-white/5 shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Available for Q3 — 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
