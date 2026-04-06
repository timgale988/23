import React from 'react';
import { Check, Hexagon, Zap, ArrowRight } from 'lucide-react';

export function GiantNumber() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[100dvh] w-full text-white font-sans overflow-hidden">
      {/* Left Column */}
      <div
        className="w-full lg:w-[42%] flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20 relative"
        style={{ backgroundColor: '#03071A' }}
      >
        <div className="flex-1 flex flex-col justify-center mt-12 lg:mt-0">
          <div className="mb-2 -ml-2 lg:-ml-4">
            <span
              className="font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400"
              style={{ fontSize: 'clamp(120px, 16vw, 220px)' }}
            >
              75%
            </span>
          </div>
          <div className="text-[0.75rem] uppercase tracking-[0.15em] text-[#6B7280] font-semibold mb-12 lg:mb-20">
            of administrative time eliminated
          </div>

          <div className="w-full h-px bg-white/10 mb-12 lg:mb-16"></div>

          <div className="flex flex-col gap-10">
            <div>
              <div className="text-4xl lg:text-[48px] font-light tracking-tight mb-2">20:1 ROI</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Average first-year return</div>
            </div>
            <div>
              <div className="text-4xl lg:text-[48px] font-light tracking-tight mb-2">3× touchpoints</div>
              <div className="text-xs uppercase tracking-wider text-gray-500 font-medium">Increase in donor engagement</div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-0">
          <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            Platform 02 — Aperion
          </span>
        </div>

        {/* Divider Line (Visible on LG) */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-white/10" />
      </div>

      {/* Right Column */}
      <div
        className="w-full lg:w-[58%] flex flex-col justify-center p-8 md:p-12 lg:p-20 xl:p-28"
        style={{ backgroundColor: '#04081E' }}
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-mono tracking-wide text-blue-400 mb-8">
            PLATFORM 02 — APERION
          </div>

          <h1
            className="font-medium tracking-tight mb-6 leading-[1.05]"
            style={{ fontSize: 'clamp(38px, 4vw, 58px)' }}
          >
            Every Gift Officer's{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Unfair Advantage.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-12 max-w-xl font-light">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity text-sm tracking-wide">
              Request a Demo
            </button>
            <button className="px-8 py-4 rounded-full text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2 text-sm tracking-wide">
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-400 font-medium">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              Blackbaud CRM
            </span>
            <span className="flex items-center gap-2">
              <Hexagon className="w-4 h-4 text-blue-400" />
              AI Briefings
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              75% Admin Saved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiantNumber;
