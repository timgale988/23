import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

export function HeroV1ProductHub() {
  return (
    <section className="relative min-h-[600px] w-full bg-white text-slate-900 py-16 md:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold tracking-wider text-slate-600 mb-6 shadow-sm uppercase">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Actionable Insight AI Platforms
          </div>
          <p className="text-xl md:text-2xl font-bold italic text-[#0A0E1A] leading-tight max-w-2xl">
            "Transforming donor data into decisive action for health systems and nonprofits."
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center items-stretch mb-20">
          
          {/* PRYSM Card — jet black */}
          <div 
            className="group relative flex-1 flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:max-w-[500px] min-h-[520px]"
            style={{ background: "linear-gradient(160deg, #08080F 0%, #0F0F1E 100%)" }}
          >
            {/* Image Band */}
            <div className="h-[200px] w-full relative overflow-hidden shrink-0">
              <img 
                src="/__mockup/images/dash-growth.jpeg" 
                alt="Prysm Intelligence Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 15%", filter: "saturate(0.9) brightness(0.7) contrast(1.1)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(8,8,15,0.15) 0%, rgba(8,8,15,0.92) 100%)" }} />
              <div className="absolute top-6 left-8">
                <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Platform 01
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8 text-white relative z-10">
              <h2 className="text-4xl font-black tracking-tight mb-3">PRYSM</h2>
              <p className="text-white/50 text-base mb-8 leading-relaxed font-medium">
                Epic-native grateful patient intelligence for complex health systems.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-auto pt-2">
                <div>
                  <div className="text-2xl font-bold text-white">1,284</div>
                  <div className="text-[10px] text-white/35 font-bold uppercase tracking-wider mt-1">Prospects/Mo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">93.1</div>
                  <div className="text-[10px] text-white/35 font-bold uppercase tracking-wider mt-1">Avg Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: "#7C3AED" }}>305%</div>
                  <div className="text-[10px] text-white/35 font-bold uppercase tracking-wider mt-1">MG Increase</div>
                </div>
              </div>

              {/* Action */}
              <a href="#" className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/8 transition-colors text-white font-bold text-lg group/btn">
                Explore Prysm <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* APERION Card — steel blue gradient */}
          <div 
            className="group relative flex-1 flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full lg:max-w-[500px] min-h-[520px]"
            style={{ background: "linear-gradient(160deg, #1E3A5F 0%, #2563EB 100%)" }}
          >
            {/* Image Band */}
            <div className="h-[200px] w-full relative overflow-hidden shrink-0">
              <img 
                src="/__mockup/images/dash-finance.jpeg" 
                alt="Aperion Platform Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 30%", filter: "saturate(1.05) brightness(0.82) contrast(1.05)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(30,58,95,0.15) 0%, rgba(37,99,235,0.88) 100%)" }} />
              <div className="absolute top-6 left-8">
                <span className="text-xs font-bold tracking-[0.2em] text-blue-100/80 uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                  Platform 02
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8 text-white relative z-10">
              <h2 className="text-4xl font-black tracking-tight mb-3">APERION</h2>
              <p className="text-blue-100/70 text-base mb-8 leading-relaxed font-medium">
                AI-powered fundraising automation and insights for agile nonprofits.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-auto pt-2">
                <div>
                  <div className="text-2xl font-bold text-white">75%</div>
                  <div className="text-[10px] text-blue-200/60 font-bold uppercase tracking-wider mt-1">Less Admin</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">20x</div>
                  <div className="text-[10px] text-blue-200/60 font-bold uppercase tracking-wider mt-1">ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">47</div>
                  <div className="text-[10px] text-blue-200/60 font-bold uppercase tracking-wider mt-1">Briefs/Wk</div>
                </div>
              </div>

              {/* Action */}
              <a href="#" className="mt-8 flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/15 transition-colors text-white font-bold text-lg group/btn">
                Explore Aperion <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* Trust Strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-200/60 max-w-5xl mx-auto">
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <span>Providence Health</span>
            <span>City of Hope</span>
            <span>LSU Health</span>
            <span className="hidden sm:inline">UCF Health</span>
            <span className="hidden md:inline">Rutgers Health</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
              <Activity className="w-4 h-4 text-blue-500" />
              Epic Native
            </div>
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
              <Clock className="w-4 h-4 text-violet-500" />
              Live in 30 Days
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
