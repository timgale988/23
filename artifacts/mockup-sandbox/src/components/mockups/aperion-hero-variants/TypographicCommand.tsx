import React from "react";
import { ArrowRight, Check, Hexagon, Zap } from "lucide-react";

export function TypographicCommand() {
  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-[85vh] pt-[80px] pb-16 overflow-hidden text-white"
      style={{
        backgroundColor: "#05091C",
        backgroundImage: "radial-gradient(circle at 50% 40%, rgba(30, 58, 138, 0.15) 0%, rgba(5, 9, 28, 0) 70%)"
      }}
    >
      {/* Background noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center max-w-7xl">
        
        {/* Platform Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-12 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          PLATFORM 02 — APERION
        </div>

        {/* Massive Headline */}
        <h1 
          className="font-bold tracking-tighter leading-[1.05] mb-8 w-full"
          style={{ fontSize: "clamp(72px, 8vw, 120px)" }}
        >
          Every Gift Officer's<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
            Unfair Advantage.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-300/80 text-lg sm:text-xl max-w-[600px] leading-relaxed mb-12 font-medium">
          Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95">
            Request a Demo
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold text-lg transition-all group active:scale-95 flex items-center justify-center gap-2">
            View Case Study 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400 mb-20">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
              <Check className="w-3 h-3" />
            </div>
            Blackbaud CRM
          </div>
          <div className="flex items-center gap-2">
            <Hexagon className="w-4 h-4 text-purple-400" />
            AI Briefings
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" fill="currentColor" />
            75% Admin Saved
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-12" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">75%</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Admin Saved</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">300+</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Opportunity Library</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">20:1</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">ROI</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">3×</div>
            <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Donor Touchpoints</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TypographicCommand;
