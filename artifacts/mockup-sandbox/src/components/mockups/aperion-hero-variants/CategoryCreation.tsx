import React from "react";
import { ArrowRight, CheckCircle2, Hexagon, Zap } from "lucide-react";

export function CategoryCreation() {
  return (
    <div className="min-h-[100dvh] w-full bg-[#02050E] text-white font-sans flex flex-col overflow-x-hidden selection:bg-indigo-500/30">
      {/* OPENING STATEMENT BLOCK */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 lg:py-32 min-h-[40vh]">
        <div className="max-w-5xl mx-auto w-full">
          <div className="space-y-4 md:space-y-6 flex flex-col">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-light tracking-tight text-white/50 flex flex-wrap items-center gap-2">
              <span className="line-through decoration-white/30 decoration-2 text-white/70">Your CRM</span>
              <span>— not designed for grateful patient intelligence.</span>
            </h2>
            
            <h2 className="text-lg md:text-2xl lg:text-3xl font-light tracking-tight text-white/40 flex flex-wrap items-center gap-2 transition-all">
              <span className="line-through decoration-white/20 decoration-2 text-white/50">Your research tools</span>
              <span>— built for stock analysts, not gift officers.</span>
            </h2>
            
            <h2 className="text-base md:text-xl lg:text-2xl font-light tracking-tight text-white/30 flex flex-wrap items-center gap-2 pb-6 md:pb-8">
              <span className="line-through decoration-white/10 decoration-2 text-white/40">Your spreadsheets</span>
              <span>— not a scalable fundraising system.</span>
            </h2>

            <div className="pt-4 md:pt-8 border-t border-white/5 w-24 mb-4"></div>

            <h1 className="text-[clamp(52px,6vw,84px)] font-semibold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              Aperion is.
            </h1>
          </div>
        </div>
      </section>

      {/* CATEGORY DEFINITION BLOCK */}
      <section className="bg-[#04081E] px-6 md:px-12 lg:px-24 py-20 lg:py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono tracking-widest text-indigo-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Platform 02 — Aperion
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white/90 leading-snug">
                The first AI platform built specifically for healthcare grateful patient fundraising.
              </h3>
              
              <p className="text-lg text-white/60 leading-relaxed max-w-xl font-light">
                Aperion connects your CRM data to proven AI intelligence — automatically preparing briefings, surfacing opportunities, and drafting proposals so gift officers can do what only gift officers can do: build relationships.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Blackbaud CRM
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Hexagon className="w-4 h-4 text-indigo-400" />
                AI Briefings
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <Zap className="w-4 h-4 text-amber-400" />
                75% Admin Saved
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-80" />
            
            <div className="relative bg-[#0D1117] border border-indigo-500/30 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)] overflow-hidden">
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              
              <div className="space-y-6">
                <div className="text-xs font-bold tracking-widest text-[#7C3AED] uppercase">
                  New Category
                </div>
                
                <h4 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                  Grateful Patient Intelligence
                </h4>
                
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                  The discipline of transforming CRM data and clinical relationships into prepared, intelligent fundraising conversations — at scale.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* BOTTOM CTA STRIP */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-24 md:py-32 text-center bg-gradient-to-b from-transparent to-[#010308]">
        <div className="space-y-10 max-w-4xl mx-auto w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white/90">
            Every Gift Officer's <br className="md:hidden" />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">
              Unfair Advantage.
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent text-white border border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
              View Case Study 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="pt-8">
            <span className="text-sm text-white/40 tracking-wide font-light">
              Join the healthcare teams redefining what's possible.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryCreation;
