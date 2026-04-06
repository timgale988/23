import React from "react";
import { ArrowRight, CheckCircle2, Hexagon } from "lucide-react";

export function BentoGrid() {
  return (
    <div className="min-h-[90vh] bg-[#020710] p-4 md:p-6 font-sans text-white flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-12 gap-2 auto-rows-fr">
        
        {/* CELL A: Main Content */}
        <div className="col-span-12 lg:col-span-7 row-span-2 bg-[#060C22] rounded-xl border border-white/[0.08] p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Platform 02 — Aperion</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Every Gift Officer's <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Unfair Advantage.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium text-white shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
                Request a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 text-sm text-slate-400 font-medium px-4">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Blackbaud CRM</span>
                <span className="flex items-center gap-1.5"><Hexagon className="w-4 h-4 text-cyan-400" /> AI Briefings</span>
              </div>
            </div>
          </div>
        </div>

        {/* CELL B: Stat 1 */}
        <div className="col-span-12 lg:col-span-5 row-span-1 bg-[#07112A] rounded-xl border border-white/[0.08] p-8 flex flex-col justify-center items-start lg:items-center text-left lg:text-center relative overflow-hidden group hover:border-white/[0.15] transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-full flex flex-col items-start lg:items-center">
            <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">Net Result</span>
            <div className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-2">20:1</div>
            <div className="text-slate-400 text-lg font-medium">Return on Investment</div>
          </div>
        </div>

        {/* CELL C: Stat 2 */}
        <div className="col-span-12 lg:col-span-5 row-span-1 bg-[#050E24] rounded-xl border border-white/[0.08] p-8 flex flex-col justify-center items-start lg:items-center text-left lg:text-center relative overflow-hidden group hover:border-white/[0.15] transition-colors">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 w-full flex flex-col items-start lg:items-center">
            <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">Efficiency</span>
            <div className="text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-2">75%</div>
            <div className="text-slate-400 text-lg font-medium">Admin Saved</div>
          </div>
        </div>

        {/* CELL D: Bottom Strip */}
        <div className="col-span-12 row-span-1 bg-[#04081E] rounded-xl border border-white/[0.08] p-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-center lg:justify-start">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mr-2">Platform Capabilities</span>
            <div className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-sm text-slate-300">AI Briefings</div>
            <div className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-sm text-slate-300">Opportunity Matching</div>
            <div className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-sm text-slate-300 hidden sm:block">Proposal Intelligence</div>
          </div>
          
          <button className="text-slate-300 hover:text-white font-medium flex items-center gap-2 transition-colors whitespace-nowrap group text-sm lg:text-base">
            View Case Study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default BentoGrid;
