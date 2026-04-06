import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Zap, Hexagon } from 'lucide-react';

export function SplitPanel() {
  return (
    <section className="w-full min-h-[72vh] flex flex-col md:flex-row bg-[#04081E] text-white overflow-hidden relative font-sans">
      {/* Left Panel: Information Architecture */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-20 relative z-10">
        <div className="max-w-xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-blue-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>PLATFORM 02 — APERION</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
            <span className="block text-slate-100">Every Gift</span>
            <span className="block text-slate-100">Officer's</span>
            <span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 pb-2">
              Unfair Advantage.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-[#2563EB] to-[#06B6D4] hover:from-blue-600 hover:to-cyan-500 text-white border-0 shadow-lg shadow-blue-900/20 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
            >
              Request a Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 rounded-full bg-transparent text-base transition-all duration-300 group"
            >
              View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Sub-text */}
          <p className="text-sm text-slate-500 font-medium">
            Built for Blackbaud CRM and Salesforce NPSP. Works inside the tools your team already uses.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 mt-4 border-t border-slate-800/60">
            <div className="flex items-center text-sm font-medium text-slate-300">
              <Check className="w-4 h-4 mr-2 text-blue-500" />
              Blackbaud CRM
            </div>
            <div className="flex items-center text-sm font-medium text-slate-300">
              <Hexagon className="w-4 h-4 mr-2 text-cyan-500" />
              AI Briefings
            </div>
            <div className="flex items-center text-sm font-medium text-slate-300">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              75% Admin Saved
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Visual Atmosphere */}
      <div 
        className="w-full md:w-[45%] h-64 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0 border-l border-white/5"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(37,99,235,0.35) 0%, rgba(15,30,100,0.6) 35%, rgba(4,8,30,1) 100%)',
        }}
      >
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>
    </section>
  );
}
