import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

const VARIANTS = [
  {
    label: "Variant A — Slate Grey",
    cardBg:    "linear-gradient(160deg, #18181B 0%, #3F3F46 100%)",
    imgFilter: "saturate(0.25) brightness(0.75) contrast(1.1)",
    overlay:   "linear-gradient(to bottom, rgba(24,24,27,0.18) 0%, rgba(24,24,27,0.52) 55%, rgba(24,24,27,0.88) 100%)",
    badge:     { bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.12)", text: "text-zinc-300" },
    accent:    "#A1A1AA",
    subtext:   "text-zinc-400",
    statMuted: "text-zinc-500",
    btnBorder: "rgba(255,255,255,0.12)",
    statAccent:"#D4D4D8",
  },
  {
    label: "Variant B — Deep Violet",
    cardBg:    "linear-gradient(160deg, #1E0A3C 0%, #4338CA 100%)",
    imgFilter: "saturate(1.0) brightness(0.72) contrast(1.08)",
    overlay:   "linear-gradient(to bottom, rgba(30,10,60,0.15) 0%, rgba(42,26,100,0.50) 55%, rgba(30,10,60,0.88) 100%)",
    badge:     { bg: "rgba(124,58,237,0.18)", border: "rgba(124,58,237,0.28)", text: "text-violet-300" },
    accent:    "#7C3AED",
    subtext:   "text-violet-200",
    statMuted: "text-violet-300",
    btnBorder: "rgba(255,255,255,0.18)",
    statAccent:"#A78BFA",
  },
  {
    label: "Variant C — Teal Jade",
    cardBg:    "linear-gradient(160deg, #042F2E 0%, #0D9488 100%)",
    imgFilter: "saturate(0.8) brightness(0.7) contrast(1.1) hue-rotate(160deg)",
    overlay:   "linear-gradient(to bottom, rgba(4,47,46,0.15) 0%, rgba(13,116,128,0.48) 55%, rgba(4,47,46,0.88) 100%)",
    badge:     { bg: "rgba(20,184,166,0.18)", border: "rgba(20,184,166,0.28)", text: "text-teal-300" },
    accent:    "#14B8A6",
    subtext:   "text-teal-100",
    statMuted: "text-teal-300",
    btnBorder: "rgba(255,255,255,0.18)",
    statAccent:"#5EEAD4",
  },
];

const HEALTH_SYSTEMS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

export function HeroV1ProductHub() {
  return (
    <section className="relative w-full bg-white text-slate-900 py-12 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold tracking-wider text-slate-600 mb-4 shadow-sm uppercase">
            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
            Card Color Exploration — Prysm × Aperion
          </div>
          <p className="text-lg font-bold italic text-[#0A0E1A] leading-tight max-w-xl">
            Three gradient treatments, higher dashboard transparency
          </p>
        </div>

        {/* 3-column variant grid */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {VARIANTS.map((v) => (
            <div key={v.label} className="flex flex-col gap-2">
              {/* Variant label */}
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center mb-1">
                {v.label}
              </div>

              {/* Card */}
              <div
                className="group relative flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[480px]"
                style={{ background: v.cardBg }}
              >
                {/* Image band — more transparent overlay */}
                <div className="h-[200px] w-full relative overflow-hidden shrink-0">
                  <img
                    src="/__mockup/images/dash-growth.jpeg"
                    alt="Prysm dashboard"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 15%", filter: v.imgFilter }}
                  />
                  <div className="absolute inset-0" style={{ background: v.overlay }} />
                  <div className="absolute top-5 left-6">
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] ${v.badge.text} uppercase backdrop-blur-md px-2.5 py-1 rounded-full`}
                      style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}` }}
                    >
                      Platform 01 — Prysm
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 text-white">
                  <h2 className="text-3xl font-black tracking-tight mb-2">PRYSM</h2>
                  <p className={`${v.subtext} text-sm mb-6 leading-relaxed`}>
                    Epic-native grateful patient intelligence for complex health systems.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-auto">
                    <div>
                      <div className="text-xl font-bold text-white">1,284</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>Prospects/Mo</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">93.1</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>Avg Score</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold" style={{ color: v.statAccent }}>305%</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>MG Increase</div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all"
                    style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}
                  >
                    Explore Prysm <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Aperion card — same gradient, different image */}
              <div
                className="group relative flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[480px]"
                style={{ background: v.cardBg }}
              >
                <div className="h-[200px] w-full relative overflow-hidden shrink-0">
                  <img
                    src="/__mockup/images/dash-finance.jpeg"
                    alt="Aperion dashboard"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 30%", filter: v.imgFilter }}
                  />
                  <div className="absolute inset-0" style={{ background: v.overlay }} />
                  <div className="absolute top-5 left-6">
                    <span
                      className={`text-[10px] font-bold tracking-[0.2em] ${v.badge.text} uppercase backdrop-blur-md px-2.5 py-1 rounded-full`}
                      style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}` }}
                    >
                      Platform 02 — Aperion
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 text-white">
                  <h2 className="text-3xl font-black tracking-tight mb-2">APERION</h2>
                  <p className={`${v.subtext} text-sm mb-6 leading-relaxed`}>
                    AI-powered fundraising automation and insights for agile nonprofits.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mb-auto">
                    <div>
                      <div className="text-xl font-bold text-white">75%</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>Less Admin</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">20x</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>ROI</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold" style={{ color: v.statAccent }}>47</div>
                      <div className={`text-[9px] ${v.statMuted} font-bold uppercase tracking-wider mt-0.5`}>Briefs/Wk</div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all"
                    style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}
                  >
                    Explore Aperion <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 text-sm font-bold text-slate-300 uppercase tracking-widest">
            {HEALTH_SYSTEMS.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
            {[
              { icon: ShieldCheck, color: "text-emerald-500", label: "HIPAA Compliant" },
              { icon: Activity,    color: "text-blue-500",    label: "Epic Native" },
              { icon: Clock,       color: "text-violet-500",  label: "Live in 30 Days" },
            ].map(({ icon: Icon, color, label }) => (
              <div key={label} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <Icon className={`w-4 h-4 ${color}`} />
                {label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
