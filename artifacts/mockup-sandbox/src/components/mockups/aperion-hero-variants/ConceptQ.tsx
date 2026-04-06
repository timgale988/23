import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ConceptQ() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#03081A] font-sans selection:bg-cyan-500/30">
      {/* LEFT COLUMN */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 relative z-10">
        <div className="max-w-md mx-auto lg:mx-0 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-[11px] font-medium tracking-wide text-cyan-300">
              Platform 02 — Aperion
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-[800] tracking-tight leading-[1.1] mb-6" style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>
            Every gift officer, fully briefed.
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base mb-10 leading-relaxed">
            AI-prepared donor briefings, delivered before every meeting.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full text-gray-300 hover:text-white font-medium inline-flex items-center justify-center gap-2 transition-colors">
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Note */}
          <p className="text-gray-500 text-xs">
            Built for Blackbaud CRM and Salesforce NPSP
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full lg:w-[60%] bg-[#04081E] flex items-center justify-center p-8 lg:p-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Card */}
        <div 
          className="w-full max-w-xl bg-[#0D1117] border border-white/10 rounded-2xl p-6 sm:p-8 relative z-10 shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur-xl"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="inline-flex rounded bg-cyan-500/10 px-2 py-1">
              <span className="font-mono text-[10px] font-bold tracking-wider text-cyan-400">
                AI BRIEFING
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-gray-400 text-[11px] font-medium tracking-wide">Ready</span>
            </div>
          </div>

          {/* Donor Info */}
          <div className="mb-6">
            <h2 className="text-white text-base font-bold tracking-wide mb-1">
              DR. SARAH CHEN
            </h2>
            <p className="text-gray-500 text-xs">
              Chief of Cardiology, Memorial Hospital
            </p>
          </div>

          <hr className="border-t border-white/5 my-6" />

          {/* Data Row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-500 text-[10px] font-medium tracking-wider uppercase mb-1">
                Gift Capacity
              </p>
              <p className="text-white text-sm font-bold">
                $250K–$400K
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] font-medium tracking-wider uppercase mb-1">
                Last Gift
              </p>
              <p className="text-white text-sm font-bold">
                $50,000 · 2022
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-[11px] font-medium">
              Cardiology Research
            </span>
            <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-200 text-[11px] font-medium">
              Patient Care
            </span>
            <span className="px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-200 text-[11px] font-medium">
              Capital Campaign
            </span>
          </div>

          {/* Recommended Ask */}
          <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <p className="text-gray-500 text-[10px] font-medium tracking-wider uppercase mb-2">
              Recommended Ask
            </p>
            <p className="text-2xl sm:text-[28px] font-[800] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-200 mb-1 leading-none tracking-tight">
              $125,000
            </p>
            <p className="text-gray-400 text-[11px]">
              Cardiovascular ICU Expansion Fund
            </p>
          </div>

          {/* Talking Points */}
          <div>
            <p className="text-gray-500 text-[9px] font-bold tracking-[0.1em] uppercase mb-4">
              Key Talking Points
            </p>
            <ul className="space-y-3">
              {[
                "Dr. Chen's department treated 847 grateful patients last year",
                "Recent publication on cardiac outcomes aligns with campaign priorities",
                "Board member Dr. Rodriguez is a mutual connection"
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-xs leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Typing indicator footer */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold tracking-widest text-cyan-500/70">
                APERION AI
              </span>
              <span className="text-cyan-400 text-xs animate-[pulse_1s_step-end_infinite]">
                ▋
              </span>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
}

export default ConceptQ;