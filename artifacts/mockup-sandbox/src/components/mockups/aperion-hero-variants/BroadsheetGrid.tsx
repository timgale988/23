import React from 'react';

export function BroadsheetGrid() {
  return (
    <div 
      className="min-h-[90vh] w-full text-white font-sans flex flex-col pt-12 pb-24 px-6 md:px-12"
      style={{ backgroundColor: '#04081E' }}
    >
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        {/* TOP STRIP */}
        <div className="flex justify-between items-end pb-4 border-b border-white/15 uppercase tracking-widest text-xs font-semibold">
          <span>PLATFORM 02 — APERION</span>
          <span className="text-white/60 text-right">Q2 2025 — HEALTHCARE PHILANTHROPY INTELLIGENCE</span>
        </div>

        {/* HEADLINE ROW */}
        <div className="py-12 border-b border-white/15">
          <h1 className="font-serif leading-none tracking-tight" style={{ fontSize: 'clamp(42px, 5vw, 68px)' }}>
            Every Gift Officer's{' '}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Unfair Advantage.
            </span>
          </h1>
        </div>

        {/* THREE-COLUMN BODY */}
        <div className="flex flex-col md:flex-row flex-grow items-stretch relative mt-8">
          
          {/* Column 1: ~40% */}
          <div className="w-full md:w-[40%] flex flex-col justify-between pr-0 md:pr-8 pb-8 md:pb-0">
            <div>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-12">
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/10 mt-auto">
              <span className="flex items-center text-sm tracking-wide text-white/70">
                <span className="text-blue-400 mr-2">✓</span> Blackbaud CRM
              </span>
              <span className="flex items-center text-sm tracking-wide text-white/70">
                <span className="text-blue-400 mr-2">⬡</span> AI Briefings
              </span>
              <span className="flex items-center text-sm tracking-wide text-white/70">
                <span className="text-blue-400 mr-2">⚡</span> 75% Admin Saved
              </span>
            </div>
          </div>

          {/* Vertical Rule 1 */}
          <div className="hidden md:block w-px bg-white/10" />
          <div className="md:hidden h-px w-full bg-white/10 my-8" />

          {/* Column 2: ~30% */}
          <div className="w-full md:w-[30%] px-0 md:px-8 flex flex-col justify-between">
            <div className="space-y-6">
              {[
                { num: "75%", label: "Administrative burden reduced" },
                { num: "300+", label: "Opportunity library entries" },
                { num: "20:1", label: "Average ROI" },
                { num: "3×", label: "Touchpoints per cycle" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="text-3xl font-light text-white mb-1">{stat.num}</span>
                  <span className="text-sm text-white/60 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Rule 2 */}
          <div className="hidden md:block w-px bg-white/10" />
          <div className="md:hidden h-px w-full bg-white/10 my-8" />

          {/* Column 3: ~30% */}
          <div className="w-full md:w-[30%] pl-0 md:pl-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4 w-full">
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-4 px-6 font-semibold tracking-wide uppercase text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                Request a Demo
              </button>
              <button className="w-full border border-white/20 hover:border-white/40 hover:bg-white/5 text-white py-4 px-6 font-semibold tracking-wide uppercase text-sm transition-all">
                View Case Study →
              </button>
            </div>
            
            <div className="mt-12 md:mt-auto pt-8 border-t border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">
                Built for Blackbaud CRM and Salesforce NPSP.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
