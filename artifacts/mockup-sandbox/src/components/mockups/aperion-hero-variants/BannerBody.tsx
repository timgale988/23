import React from 'react';
import { ArrowRight, Check, Hexagon, Zap } from 'lucide-react';

export default function BannerBody() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-slate-200">
      {/* ZONE A - COMPACT BANNER */}
      <div 
        className="flex-none px-8 py-8 md:px-12 md:py-10 flex flex-col justify-center relative z-10"
        style={{ 
          backgroundColor: '#020A1E',
          minHeight: '38vh' 
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-blue-500"></div>
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
              Platform 02 — Aperion
            </span>
          </div>
          
          <h1 
            className="font-bold tracking-tight text-white leading-[1.1] flex-1 max-w-4xl"
            style={{ fontSize: 'clamp(44px, 5.5vw, 76px)' }}
          >
            Every Gift Officer's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Unfair Advantage.
            </span>
          </h1>

          <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full border border-white/10 text-white/50 shrink-0">
            <ArrowRight size={24} />
          </div>
        </div>
      </div>

      {/* HORIZONTAL SEPARATOR */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 to-cyan-400 shrink-0"></div>

      {/* ZONE B - EXPANDED BODY */}
      <div 
        className="flex-1 px-8 py-16 md:px-12 md:py-24 flex flex-col justify-center relative overflow-hidden"
        style={{ backgroundColor: '#04081E' }}
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-20 items-stretch relative z-10">
          
          {/* LEFT GROUP (~40%) */}
          <div className="lg:w-[40%] flex flex-col gap-8">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              Aperion eliminates <strong className="text-white font-medium">75% of administrative burden</strong> — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
            </p>
            
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-400">
                Built for Blackbaud CRM and Salesforce NPSP.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  <Check size={14} className="text-blue-400" />
                  Blackbaud CRM
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  <Hexagon size={14} className="text-purple-400" />
                  AI Briefings
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                  <Zap size={14} className="text-yellow-400" />
                  75% Admin Saved
                </div>
              </div>
            </div>
          </div>

          {/* CENTER GROUP (~25%) */}
          <div className="lg:w-[25%] flex items-center lg:border-l border-white/10 lg:pl-12 xl:pl-16">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">75%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Admin Reduced</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">300+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Data Points</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">20:1</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">ROI Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">3&times;</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">Pipeline Velocity</div>
              </div>
            </div>
          </div>

          {/* RIGHT GROUP (~35%) */}
          <div className="lg:w-[35%] flex flex-col justify-center lg:border-l border-white/10 lg:pl-12 xl:pl-16">
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <button className="w-full relative group overflow-hidden rounded-lg p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98]">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400"></span>
                <div className="relative bg-[#04081E] group-hover:bg-transparent transition-colors rounded-[7px] px-6 py-4 flex items-center justify-center gap-2">
                  <span className="font-semibold text-white">Request a Demo</span>
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              
              <button className="w-full px-6 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium transition-colors flex items-center justify-center gap-2">
                View Case Study
              </button>

              <div className="mt-6 flex flex-col items-center gap-3">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-medium text-center">
                  Trusted by leading healthcare systems
                </span>
                <div className="flex items-center gap-4 opacity-40 grayscale">
                  <div className="h-6 w-16 bg-white/20 rounded"></div>
                  <div className="h-6 w-20 bg-white/20 rounded"></div>
                  <div className="h-6 w-16 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
