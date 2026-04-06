import React from "react";
import { ArrowRight, CheckCircle2, Hexagon, Zap } from "lucide-react";

export default function NarrowRail() {
  return (
    <div className="min-h-[100dvh] w-full flex bg-[#060D2A] text-white font-sans overflow-hidden selection:bg-blue-500/30">
      {/* LEFT RAIL - ~200px wide */}
      <div className="w-[120px] md:w-[200px] shrink-0 bg-[#020612] flex flex-col items-center py-12 relative border-r border-white/5 z-10">
        <div className="text-white/40 text-sm font-mono tracking-widest mb-24">02</div>
        
        <div 
          className="text-white/40 text-xs font-mono tracking-[0.2em] whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          PLATFORM 02 — APERION
        </div>

        <div className="flex-grow w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 mt-24"></div>
      </div>

      {/* MAIN BODY */}
      <div className="flex-1 flex flex-col min-h-full">
        {/* TOP ROW */}
        <div className="flex-1 min-h-[50vh] flex flex-col justify-end p-8 md:p-16 lg:p-24 relative">
          <div className="absolute top-0 right-0 w-full h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <h1 className="text-[clamp(52px,6vw,88px)] leading-[1.05] font-light tracking-tight max-w-[1200px]">
            Every Gift Officer's <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Unfair Advantage.
            </span>
          </h1>
        </div>

        {/* THIN HORIZONTAL RULE */}
        <div className="h-px w-full bg-white/5"></div>

        {/* BOTTOM ROW */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* LEFT SUB-COLUMN (60%) */}
          <div className="lg:w-[60%] p-8 md:p-16 lg:p-24 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-[800px] font-light">
              Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
            </p>

            <div className="flex flex-wrap gap-4 mt-12 md:mt-24">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-sm text-slate-300 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Blackbaud CRM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-sm text-slate-300 border border-white/5">
                <Hexagon className="w-4 h-4 text-blue-400" />
                <span>AI Briefings</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 text-sm text-slate-300 border border-white/5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>75% Admin Saved</span>
              </div>
            </div>
          </div>

          {/* RIGHT SUB-COLUMN (40%) */}
          <div className="lg:w-[40%] p-8 md:p-16 lg:p-24 flex flex-col justify-between relative bg-gradient-to-b from-transparent to-blue-950/20">
            <div className="flex flex-col gap-4 w-full max-w-[320px]">
              <button className="h-14 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium flex items-center justify-center hover:opacity-90 transition-opacity shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                Request a Demo
              </button>
              <button className="h-14 w-full rounded-full bg-white/5 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/10">
                View Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-8 mt-16 md:mt-24">
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-light text-white mb-1">75%</span>
                <span className="text-sm text-slate-400 font-mono tracking-wide uppercase">Admin Saved</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-light text-white mb-1">20:1</span>
                <span className="text-sm text-slate-400 font-mono tracking-wide uppercase">ROI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-light text-white mb-1">3×</span>
                <span className="text-sm text-slate-400 font-mono tracking-wide uppercase">Touchpoints</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
