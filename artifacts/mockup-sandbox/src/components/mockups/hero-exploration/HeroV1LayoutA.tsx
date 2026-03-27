import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

const VARIANTS = [
  {
    label: "Variant A — Slate Grey",
    cardBg: "linear-gradient(160deg, #18181B 0%, #3F3F46 100%)",
    imgFilter: "saturate(0.25) brightness(0.75) contrast(1.1)",
    overlay: "linear-gradient(to bottom, rgba(24,24,27,0.18) 0%, rgba(24,24,27,0.52) 55%, rgba(24,24,27,0.88) 100%)",
    badge: { bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.12)", text: "#A1A1AA" },
    statAccent: "#D4D4D8",
    statMuted: "#71717A",
    btnBorder: "rgba(255,255,255,0.12)",
  },
  {
    label: "Variant B — Deep Violet",
    cardBg: "linear-gradient(160deg, #1E0A3C 0%, #4338CA 100%)",
    imgFilter: "saturate(1.0) brightness(0.72) contrast(1.08)",
    overlay: "linear-gradient(to bottom, rgba(30,10,60,0.15) 0%, rgba(42,26,100,0.50) 55%, rgba(30,10,60,0.88) 100%)",
    badge: { bg: "rgba(124,58,237,0.18)", border: "rgba(124,58,237,0.28)", text: "#C4B5FD" },
    statAccent: "#A78BFA",
    statMuted: "#8B5CF6",
    btnBorder: "rgba(255,255,255,0.18)",
  },
  {
    label: "Variant C — Teal Jade",
    cardBg: "linear-gradient(160deg, #042F2E 0%, #0D9488 100%)",
    imgFilter: "saturate(0.8) brightness(0.7) contrast(1.1) hue-rotate(160deg)",
    overlay: "linear-gradient(to bottom, rgba(4,47,46,0.15) 0%, rgba(13,116,128,0.48) 55%, rgba(4,47,46,0.88) 100%)",
    badge: { bg: "rgba(20,184,166,0.18)", border: "rgba(20,184,166,0.28)", text: "#5EEAD4" },
    statAccent: "#5EEAD4",
    statMuted: "#14B8A6",
    btnBorder: "rgba(255,255,255,0.18)",
  },
];

const HEALTH_SYSTEMS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

export function HeroV1LayoutA() {
  return (
    <section className="w-full bg-white font-['Urbanist'] py-12">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 mb-3 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Layout A — Products as Columns
          </div>
          <p className="text-base font-semibold text-slate-400">2 columns (Prysm · Aperion) × 3 rows (color variants)</p>
        </div>

        {/* Row-per-variant grid: 3 rows × 2 cols */}
        <div className="flex flex-col gap-4 mb-10">
          {VARIANTS.map((v) => (
            <div key={v.label}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-2 pl-1">{v.label}</div>
              <div className="grid grid-cols-2 gap-4">

                {/* Prysm card */}
                <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-xl" style={{ background: v.cardBg, minHeight: 360 }}>
                  <div className="h-[160px] relative overflow-hidden shrink-0">
                    <img src="/__mockup/images/dash-growth.jpeg" alt="Prysm" className="w-full h-full object-cover" style={{ objectPosition: "center 15%", filter: v.imgFilter }} />
                    <div className="absolute inset-0" style={{ background: v.overlay }} />
                    <div className="absolute top-4 left-5">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full" style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}`, color: v.badge.text }}>
                        Platform 01 — Prysm
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-5 text-white">
                    <h2 className="text-2xl font-black tracking-tight mb-1.5 uppercase">Prysm</h2>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: v.badge.text }}>Epic-native grateful patient intelligence for complex health systems.</p>
                    <div className="grid grid-cols-3 gap-3 mb-5 pb-5" style={{ borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
                      {[["1,284","Prospects/Mo"],["93.1","Avg Score"],["305%","MG Increase"]].map(([val, lbl], i) => (
                        <div key={lbl}>
                          <div className="text-xl font-black" style={{ color: i === 2 ? v.statAccent : "white" }}>{val}</div>
                          <div className="text-[9px] font-bold uppercase tracking-wider mt-0.5" style={{ color: v.statMuted }}>{lbl}</div>
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white" style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}>
                      Explore Prysm <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Aperion card */}
                <div className="relative flex flex-col rounded-2xl overflow-hidden shadow-xl" style={{ background: v.cardBg, minHeight: 360 }}>
                  <div className="h-[160px] relative overflow-hidden shrink-0">
                    <img src="/__mockup/images/dash-finance.jpeg" alt="Aperion" className="w-full h-full object-cover" style={{ objectPosition: "center 30%", filter: v.imgFilter }} />
                    <div className="absolute inset-0" style={{ background: v.overlay }} />
                    <div className="absolute top-4 left-5">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full" style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}`, color: v.badge.text }}>
                        Platform 02 — Aperion
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-5 text-white">
                    <h2 className="text-2xl font-black tracking-tight mb-1.5 uppercase">Aperion</h2>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: v.badge.text }}>AI-powered fundraising automation and insights for agile nonprofits.</p>
                    <div className="grid grid-cols-3 gap-3 mb-5 pb-5" style={{ borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
                      {[["75%","Less Admin"],["20×","ROI"],["47","Briefs/Wk"]].map(([val, lbl], i) => (
                        <div key={lbl}>
                          <div className="text-xl font-black" style={{ color: i === 2 ? v.statAccent : "white" }}>{val}</div>
                          <div className="text-[9px] font-bold uppercase tracking-wider mt-0.5" style={{ color: v.statMuted }}>{lbl}</div>
                        </div>
                      ))}
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm text-white" style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}>
                      Explore Aperion <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-bold text-slate-300 uppercase tracking-widest">
            {HEALTH_SYSTEMS.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            {[{ icon: ShieldCheck, label: "HIPAA" }, { icon: Activity, label: "Epic Native" }, { icon: Clock, label: "30 Days" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <Icon className="w-4 h-4 text-slate-400" />{label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
