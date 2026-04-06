import React from "react";
import { X, Check, AlertTriangle, ArrowRight, Hexagon } from "lucide-react";

export function BeforeAfter() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full text-white font-sans antialiased overflow-hidden">
      
      {/* HEADER STRIP */}
      <div 
        className="flex flex-col items-center justify-center shrink-0 w-full"
        style={{ height: "12vh", backgroundColor: "#02060F", minHeight: "100px" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-mono font-medium tracking-widest text-white/70 uppercase">
            Platform 02 <span className="text-white/30">—</span> Aperion
          </div>
          <h1 className="text-white font-semibold tracking-tight" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
            The difference is undeniable.
          </h1>
        </div>
      </div>

      {/* TWO-PANEL COMPARISON */}
      <div 
        className="flex flex-col md:flex-row flex-1 w-full"
        style={{ minHeight: "65vh" }}
      >
        {/* LEFT PANEL: Without Aperion */}
        <div 
          className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-8"
          style={{ backgroundColor: "#100505", borderRight: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <h2 className="text-[#EF4444] font-mono text-sm tracking-[0.2em] font-semibold uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]">
                Without Aperion
              </h2>
            </div>
            
            <ul className="flex flex-col gap-5">
              <PainItem text="12+ hours/week on donor research" />
              <PainItem text="Manual data pulls from 3 systems" />
              <PainItem text="Generic outreach from cold data" />
              <PainItem text="Missed opportunities in patient records" />
              <PainItem text="Proposal writing from scratch" />
              <PainItem text="Lost capacity due to admin overload" />
            </ul>

            <div className="mt-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
              <p className="text-red-400 font-medium text-sm sm:text-base text-center md:text-left">
                Average: 75% of time on non-gift-officer work
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: With Aperion */}
        <div 
          className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-8"
          style={{ backgroundColor: "#030D1A" }}
        >
          <div className="w-full max-w-md flex flex-col gap-8">
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
              <h2 className="text-[#22D3EE] font-mono text-sm tracking-[0.2em] font-semibold uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                With Aperion
              </h2>
            </div>
            
            <ul className="flex flex-col gap-5">
              <OutcomeItem text="AI-prepared briefings before every meeting" />
              <OutcomeItem text="Auto-synced from Blackbaud CRM" />
              <OutcomeItem text="Personalized outreach from 300+ library" />
              <OutcomeItem text="Grateful patient signals surfaced automatically" />
              <OutcomeItem text="AI-drafted proposals in minutes" />
              <OutcomeItem text="Gift officers focused on relationships only" />
            </ul>

            <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 shadow-[0_0_20px_rgba(34,211,238,0.05)]">
              <p className="text-cyan-400 font-medium text-sm sm:text-base text-center md:text-left">
                Result: 20:1 ROI · 3× touchpoints · 75% admin eliminated
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CTA STRIP */}
      <div 
        className="flex flex-col items-center justify-center shrink-0 w-full px-6 py-10"
        style={{ height: "23vh", backgroundColor: "#04081E", minHeight: "200px" }}
      >
        <div className="flex flex-col items-center gap-6 max-w-3xl w-full text-center">
          <h2 className="font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-indigo-200" style={{ fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.1 }}>
            Every Gift Officer's Unfair Advantage.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Request a Demo
            </button>
            <button className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white/90 font-medium transition-all">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-2 text-xs font-mono text-white/50 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-cyan-400" /> Blackbaud CRM
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20"></div>
            <div className="flex items-center gap-1.5">
              <Hexagon className="w-3.5 h-3.5 text-indigo-400" /> AI Briefings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PainItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/80">
      <div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10 text-red-400">
        <X className="w-3 h-3" />
      </div>
      <span className="text-base sm:text-lg leading-tight">{text}</span>
    </li>
  );
}

function OutcomeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-white/90">
      <div className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        <Check className="w-3 h-3" />
      </div>
      <span className="text-base sm:text-lg leading-tight font-medium">{text}</span>
    </li>
  );
}
