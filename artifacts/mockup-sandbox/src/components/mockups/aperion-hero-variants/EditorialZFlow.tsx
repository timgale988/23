import React from "react";
import { Check, Hexagon, Zap, ArrowRight } from "lucide-react";

export function EditorialZFlow() {
  return (
    <section className="w-full flex flex-col min-h-[75vh] font-sans text-slate-300">
      {/* ROW 1 */}
      <div 
        className="w-full px-6 py-16 md:py-24 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end relative"
        style={{ backgroundColor: "#04081E" }}
      >
        {/* LEFT: Badge & Headline */}
        <div className="lg:col-span-7 flex flex-col items-start justify-end h-full">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
              Platform 02 — Aperion
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]">
            Every Gift Officer's
            <br />
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Unfair Advantage.
            </span>
          </h1>
        </div>

        {/* RIGHT: Stats 2x2 Grid */}
        <div className="lg:col-span-5 flex justify-start lg:justify-end pb-2">
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 w-full max-w-md border-l border-white/10 pl-8 lg:pl-12">
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">75%</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Admin Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">300+</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Opp Entries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">20:1</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-light text-white mb-1">3&times;</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">Touchpoints</div>
            </div>
          </div>
        </div>
      </div>

      {/* HORIZONTAL RULE */}
      <div className="w-full h-px bg-white/10"></div>

      {/* ROW 2 */}
      <div 
        className="w-full px-6 py-16 md:py-20 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-grow"
        style={{ backgroundColor: "#060D22" }}
      >
        {/* LEFT: Description & Tags (~55%) */}
        <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-12">
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-2xl mb-12 lg:mb-0">
            Aperion eliminates 75% of administrative burden &mdash; replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 mt-auto">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              Blackbaud CRM
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Hexagon className="w-4 h-4 text-purple-400" />
              AI Briefings
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Zap className="w-4 h-4 text-amber-400" />
              75% Admin Saved
            </div>
          </div>
        </div>

        {/* RIGHT: CTAs stacked (~45%) */}
        <div className="lg:col-span-5 flex flex-col justify-start pt-2 border-t border-white/10 lg:border-t-0 lg:border-l lg:pl-12 pt-10 lg:pt-0">
          <div className="max-w-sm w-full">
            <button className="w-full group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-lg rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] mb-4 flex items-center justify-between">
              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="w-full group px-8 py-5 border border-white/20 text-white font-medium text-lg rounded-none transition-all hover:bg-white/5 flex items-center justify-between mb-8">
              <span>View Case Study</span>
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>
            
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-slate-700"></span>
              Works with: Blackbaud CRM | Salesforce NPSP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialZFlow;