import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Zap, Circle, FileText, Sparkles, Lock } from 'lucide-react';

const WAVEFORM = [18, 32, 24, 44, 28, 52, 20, 40, 36, 56, 24, 42, 30, 50, 22, 46, 34, 54, 26, 44, 20, 38, 48, 30, 52, 22, 40, 28, 56, 24];

const DATA_SOURCES = [
  { label: "Giving History",   color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { label: "Wealth-X",         color: "#0891B2", bg: "rgba(8,145,178,0.08)" },
  { label: "Foundation Dir.",  color: "#059669", bg: "rgba(5,150,105,0.08)" },
];

export function AperionCardStack() {
  return (
    <div className="w-full bg-white flex justify-center py-16 overflow-hidden font-sans text-slate-900">
      <div className="max-w-[1280px] w-full min-h-[720px] flex flex-col lg:flex-row items-center gap-12 px-8 xl:px-0">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-start pr-0 lg:pr-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100 shadow-sm">
            Platform 02 — Aperion
          </div>

          <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-5 text-[#0A0E1A]">
            Stop Writing Briefs.
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#2563EB,#0891B2,#06B6D4)" }}>
              Start Raising More.
            </span>
          </h1>

          <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
            Aperion's AI engine researches every donor, writes cultivation briefs, and automates your outreach cadence — so your team spends less time on admin and more time building relationships.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-10 w-full sm:w-auto">
            <button
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg,#2563EB,#0891B2)", boxShadow: "0 8px 20px -6px rgba(37,99,235,0.45)" }}
            >
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group">
              View Client Results
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Blackbaud & Salesforce Native
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <BarChart3 className="w-3.5 h-3.5 text-cyan-500" /> AI Brief Generation
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Zap className="w-3.5 h-3.5 text-blue-400" /> Live in 30 Days
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 relative w-full min-h-[600px] flex flex-col items-center justify-center">

          {/* Radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)" }}
          />

          {/* Card stack */}
          <div className="relative w-[380px] h-[300px] flex items-center justify-center z-10">

            {/* BACK CARD */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.10)] flex flex-col"
              style={{ transform: "rotate(-8deg) translate(-18px, 18px) scale(0.91)", opacity: 0.5, zIndex: 1 }}
            >
              <div className="h-[52px] rounded-t-2xl flex justify-between items-center px-4"
                style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">S</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Donor Brief</span>
                </div>
                <div className="bg-white text-blue-700 font-black rounded-lg px-2 py-0.5 text-xs">$420K</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-[15px] text-[#0A0E1A] mb-1">S. Whitmore</div>
                <div className="text-slate-400 text-xs mb-3">Ronald McDonald House</div>
                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Board Member</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">3 prev gifts</div>
                </div>
              </div>
            </div>

            {/* MIDDLE CARD */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.11)] flex flex-col"
              style={{ transform: "rotate(-3deg) translate(-7px, 9px) scale(0.96)", opacity: 0.82, zIndex: 2 }}
            >
              <div className="h-[52px] rounded-t-2xl flex justify-between items-center px-4"
                style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Donor Brief</span>
                </div>
                <div className="bg-white text-blue-700 font-black rounded-lg px-2 py-0.5 text-xs">$190K</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-[15px] text-[#0A0E1A] mb-1">D. Abramowitz</div>
                <div className="text-slate-400 text-xs mb-3">Feeding America</div>
                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Lapsed Major</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Re-engage</div>
                </div>
              </div>
            </div>

            {/* FRONT CARD */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_25px_65px_rgba(0,0,0,0.15)] flex flex-col"
              style={{ zIndex: 10 }}
            >
              <div className="h-[52px] rounded-t-2xl flex justify-between items-center px-4"
                style={{ background: "linear-gradient(90deg,#1D4ED8,#0891B2)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">P</div>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Donor Brief</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/50 text-[8px] font-bold uppercase tracking-widest mb-0.5">Capacity</span>
                  <div className="bg-white text-blue-700 font-black rounded-lg px-2 py-0.5 text-xs leading-none">$285K</div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-[16px] text-[#0A0E1A] leading-tight">P. Nakamura</div>
                    <div className="text-slate-400 text-xs mt-0.5">United Way — Major Gifts</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#2563EB" strokeWidth="3"
                        strokeDasharray="88" strokeDashoffset="14" strokeLinecap="round"
                        style={{ transformOrigin: "18px 18px", transform: "rotate(-90deg)" }} />
                      <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="800" fill="#2563EB">91</text>
                    </svg>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">8 gifts · 6 yrs</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Education focus</div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  AI brief generated · 4 talking points ready
                </div>

                <div className="border-t border-slate-100 pt-2.5">
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-1.5">Intelligence Sources</div>
                  <div className="flex gap-1.5">
                    {DATA_SOURCES.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ color: s.color, background: s.bg }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <circle cx="4" cy="4" r="3.5" stroke={s.color} strokeWidth="1" />
                          <path d="M2 4l1.5 1.5L6 2.5" stroke={s.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s.label}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-xs px-3 py-1 font-semibold">Brief Ready</div>
                  <div className="text-blue-600 text-xs font-bold cursor-pointer hover:text-blue-700">View Brief →</div>
                </div>
              </div>
            </div>

          </div>{/* end stack */}

          {/* AI BRIEF GENERATION WIDGET */}
          <div
            className="relative z-10 mt-8 mx-auto rounded-2xl border border-slate-100 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
            style={{ width: "370px" }}
          >
            <div className="flex items-center justify-between px-4 py-2.5"
              style={{ background: "linear-gradient(90deg,#1D4ED8,#0891B2)" }}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <FileText className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-xs font-bold">AI Brief — Generating</span>
                <span className="text-white/60 text-[10px] font-mono">00:08</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white/70 text-[10px] font-semibold">P. Nakamura</span>
              </div>
            </div>

            <div className="px-4 py-3 flex flex-col gap-2">
              {/* Animated typing bars */}
              <div className="flex items-end gap-[2px] h-10">
                {WAVEFORM.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-full flex-1"
                    style={{
                      height: `${h * 0.65}px`,
                      background: "linear-gradient(to top, #2563EB, #06B6D4)",
                      animation: `pulse ${0.8 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.04}s`,
                      opacity: i > 20 ? 0.25 : 0.8,
                    }}
                  />
                ))}
              </div>
              {/* Progress lines */}
              <div className="space-y-1.5 pt-1">
                {[
                  { label: "Giving history analyzed",    done: true  },
                  { label: "Capacity estimate confirmed", done: true  },
                  { label: "Talking points drafted",      done: false },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 flex items-center justify-center ${step.done ? "bg-blue-500" : "bg-slate-100 border border-slate-200"}`}>
                      {step.done && <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1 3.5l1.5 1.5L6 1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <span className={`text-[10px] font-semibold ${step.done ? "text-slate-500" : "text-slate-300"}`}>{step.label}</span>
                    {!step.done && <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden"><div className="h-full w-2/3 rounded-full animate-pulse" style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }} /></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-slate-50 bg-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-400">Education focus · $75K ask recommended</span>
              <span className="text-[10px] font-bold text-cyan-500">● Generating</span>
            </div>
          </div>

          {/* Status chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-5 z-10 relative">
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Circle className="w-2.5 h-2.5 fill-blue-500 text-blue-500" />
              <span className="text-blue-600">23 briefs ready today</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Zap className="w-3.5 h-3.5 text-cyan-500" />
              <span className="text-cyan-600">75% less admin time</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Lock className="w-3 h-3 text-blue-500" />
              <span className="text-blue-600">SOC 2 compliant</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
