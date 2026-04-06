import React from "react";
import { Plug, FileText, CheckCircle2, Sparkles, Handshake, ChevronRight, ArrowRight } from "lucide-react";

export function FeatureJourney() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-white overflow-hidden bg-[#03081A]">
      
      {/* TOP STRIP */}
      <div className="flex-[0.18] min-h-[18vh] w-full flex flex-col justify-center items-center px-6 pt-12 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-gray-300 mb-6 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          Platform 02 — Aperion
        </div>
        
        <h1 className="text-[clamp(36px,4vw,56px)] font-bold tracking-tight leading-tight mb-4 max-w-4xl">
          Here's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">exactly</span> how Aperion works.
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl">
          Three steps from CRM data to closed gift — all automated.
        </p>
      </div>

      {/* NUMBERED STEPS */}
      <div className="flex-[0.52] min-h-[52vh] w-full flex items-center justify-center px-4 sm:px-8 py-8 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* STEP 01 */}
          <div className="relative overflow-hidden bg-[#0D1117] border border-white/[0.08] rounded-2xl p-7 flex flex-col shadow-2xl transition-transform hover:-translate-y-1 duration-300 group">
            <div className="absolute top-4 right-4 text-[80px] font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors">
              01
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
              <Plug className="w-6 h-6 text-cyan-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              Sync with Blackbaud CRM or Salesforce NPSP
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              Aperion connects to your existing CRM in minutes — no migration, no IT project. Patient and donor data flows in automatically.
            </p>
            
            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-cyan-400">✓</span> Zero setup time
            </div>
          </div>

          {/* STEP 02 */}
          <div className="relative overflow-hidden bg-[#0D1117] border border-white/[0.08] rounded-2xl p-7 flex flex-col shadow-2xl transition-transform hover:-translate-y-1 duration-300 group">
            <div className="absolute top-4 right-4 text-[80px] font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors">
              02
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              AI prepares every briefing before every meeting
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              Before each donor conversation, Aperion assembles a complete briefing — capacity signals, prior giving history, relationship notes, and a suggested ask — from your library of 300+ entries.
            </p>
            
            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-blue-400">⬡</span> AI-Generated · Ready in seconds
            </div>
          </div>

          {/* STEP 03 */}
          <div className="relative overflow-hidden bg-[#0D1117] border border-white/[0.08] rounded-2xl p-7 flex flex-col shadow-2xl transition-transform hover:-translate-y-1 duration-300 group">
            <div className="absolute top-4 right-4 text-[80px] font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors">
              03
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
              <Handshake className="w-6 h-6 text-emerald-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              Gift officers arrive prepared — and close more
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              With briefings done automatically, gift officers spend their time on relationships. Average teams see 3× touchpoints and 20:1 ROI within one fundraising cycle.
            </p>
            
            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-emerald-400 text-lg leading-none">⚡</span> 20:1 ROI · 3× touchpoints
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM CTA STRIP */}
      <div className="flex-[0.30] min-h-[30vh] w-full bg-[#04081E] flex flex-col items-center justify-center px-6 py-12 border-t border-white/[0.05] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-[clamp(28px,3vw,44px)] font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 relative z-10">
          Every Gift Officer's Unfair Advantage.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 relative z-10">
          <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 group">
            Request a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2">
            View Case Study
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        
        <p className="text-gray-500 text-sm font-medium relative z-10">
          Built for Blackbaud CRM and Salesforce NPSP
        </p>
      </div>

    </div>
  );
}

export default FeatureJourney;
