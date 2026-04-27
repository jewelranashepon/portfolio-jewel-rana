"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  CheckCircle,
  Globe,
  ArrowRight,
  User,
} from "lucide-react";
import { personal } from "../data/portfolioData";

export default function ProfessionalContact() {
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
    w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3.5 
    text-sm text-slate-900 placeholder:text-slate-400 outline-none 
    focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all duration-300
  `;

  return (
    <section className="py-12 lg:py-20 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#e2e8f0,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="grid lg:grid-cols-12">
            
            {/* Branding Column - Dark Blue Gradient */}
            <div className="lg:col-span-5 p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
              {/* Subtle abstract glow */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-blue-300 mb-5">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  Contact
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-5 leading-tight">
                  Let’s start a{" "}
                  <span className="text-blue-400">conversation.</span>
                </h2>
                <p className="text-slate-200 text-sm leading-relaxed max-w-xl">
                  I’m currently accepting new projects and consulting engagements for Q3 2026.
                </p>
              </div>

              <div className="mt-8 space-y-6 relative z-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-400 transition-all duration-300">
                    <Mail size={18} className="text-blue-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Mail me at</p>
                    <p className="text-sm font-medium">{personal.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin size={18} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Based in</p>
                    <p className="text-sm font-medium">{personal.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 relative z-10 flex gap-4">
                <a href={personal.github} className="text-sky-500 hover:text-white transition-colors"><Globe size={18} /></a>
                <a href={personal.linkedin} className="text-sky-500 hover:text-white transition-colors"><User size={18} /></a>
              </div>
            </div>

            {/* Form Column - Clean White Background */}
            <div className="lg:col-span-7 p-10 lg:p-14 bg-white">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Form Ready!</h3>
                  <p className="text-slate-500 text-sm mb-8 max-w-xs">
                    Please complete the final step in your mail application to send your inquiry.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-800 ml-1">Full Name</label>
                      <input
                        required
                        placeholder="Enter your full name"
                        className={inputStyles}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-800 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="Enter your email address"
                        className={inputStyles}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-slate-800 ml-1">Project Brief</label>
                    <textarea
                      required
                      placeholder="How can I help you?"
                      rows={5}
                      className={`${inputStyles} resize-none`}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full relative group bg-blue-600 text-white h-14 rounded-xl font-bold text-sm transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-50"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                  
                  <p className="text-center text-[10px] text-slate-600 uppercase tracking-widest pt-2">
                    Response time: typically within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}