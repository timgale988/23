import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

const VARIANTS = [
  {
    label: "Variant A — Slate Grey",
    leftBg:  "linear-gradient(160deg, #18181B 0%, #303030 100%)",
    rightBg: "linear-gradient(160deg, #27272A 0%, #3F3F46 100%)",
    imgFilterL: "saturate(0.2) brightness(0.7) contrast(1.1)",
    imgFilterR: "saturate(0.2) brightness(0.7) contrast(1.1)",
    overlayL: "linear-gradient(to bottom, rgba(24,24,27,0.1) 0%, rgba(24,24,27,0.85) 100%)",
    overlayR: "linear-gradient(to bottom, rgba(39,39,42,0.1) 0%, rgba(39,39,42,0.85) 100%)",
    divider: "rgba(255,255,255,0.08)",
    badge: { bg: "rgba(255,255,255,0.07)", border: "rgba(255,255,255,0.10)", text: "#A1A1AA" },
    statMuted: "#71717A",
    statAccent: "#D4D4D8",
    btnBorder: "rgba(255,255,255,0.12)",
  },
  {
    label: "Variant B — Deep Violet",
    leftBg:  "linear-gradient(160deg, #1E0A3C 0%, #3730A3 100%)",
    rightBg: "linear-gradient(160deg, #2E1065 0%, #4338CA 100%)",
    imgFilterL: "saturate(1.0) brightness(0.7) contrast(1.05)",
    imgFilterR: "saturate(0.9) brightness(0.68) contrast(1.08)",
    overlayL: "linear-gradient(to bottom, rgba(30,10,60,0.1) 0%, rgba(30,10,60,0.85) 100%)",
    overlayR: "linear-gradient(to bottom, rgba(46,16,101,0.1) 0%, rgba(46,16,101,0.85) 100%)",
    divider: "rgba(124,58,237,0.25)",
    badge: { bg: "rgba(124,58,237,0.18)", border: "rgba(124,58,237,0.28)", text: "#C4B5FD" },
    statMuted: "#8B5CF6",
    statAccent: "#A78BFA",
    btnBorder: "rgba(255,255,255,0.16)",
  },
  {
    label: "Variant C — Teal Jade",
    leftBg:  "linear-gradient(160deg, #042F2E 0%, #0F766E 100%)",
    rightBg: "linear-gradient(160deg, #064E3B 0%, #0D9488 100%)",
    imgFilterL: "saturate(0.7) brightness(0.65) contrast(1.1) hue-rotate(160deg)",
    imgFilterR: "saturate(0.7) brightness(0.65) contrast(1.1) hue-rotate(160deg)",
    overlayL: "linear-gradient(to bottom, rgba(4,47,46,0.1) 0%, rgba(4,47,46,0.85) 100%)",
    overlayR: "linear-gradient(to bottom, rgba(6,78,59,0.1) 0%, rgba(6,78,59,0.85) 100%)",
    divider: "rgba(20,184,166,0.25)",
    badge: { bg: "rgba(20,184,166,0.18)", border: "rgba(20,184,166,0.28)", text: "#5EEAD4" },
    statMuted: "#14B8A6",
    statAccent: "#5EEAD4",
    btnBorder: "rgba(255,255,255,0.16)",
  },
];

const HEALTH_SYSTEMS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

export function HeroV1LayoutC() {
  return (
    <section className="w-full bg-white font-['Urbanist'] py-12">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 mb-3 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Layout C — Unified Split Cards
          </div>
          <p className="text-base font-semibold text-slate-400">One card per variant — Prysm and Aperion share a single composition divided by a centerline</p>
        </div>

        {/* 3 unified split cards */}
        <div className="flex flex-col gap-5 mb-10">
          {VARIANTS.map((v) => (
            <div key={v.label}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-2 pl-1">{v.label}</div>

              <div
                className="rounded-2xl overflow-hidden shadow-xl flex"
                style={{ minHeight: 340 }}
              >
                {/* LEFT HALF — Prysm */}
                <div className="flex-1 flex flex-col relative overflow-hidden" style={{ background: v.leftBg }}>
                  {/* Top image zone */}
                  <div className="h-[160px] relative overflow-hidden shrink-0">
                    <img
                      src="/__mockup/images/dash-growth.jpeg"
                      alt="Prysm"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 15%", filter: v.imgFilterL }}
                    />
                    <div className="absolute inset-0" style={{ background: v.overlayL }} />
                    <div className="absolute top-4 left-5">
                      <span
                        className="text-[10px] font-bold tracking-[0.16em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full"
                        style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}`, color: v.badge.text }}
                      >
                        Platform 01 — Prysm
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-5 text-white flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-black tracking-tight uppercase mb-1">Prysm</h2>
                      <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: v.badge.text }}>
                        Epic-native grateful patient intelligence for complex health systems.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        {[["1,284","Prospects/Mo"],["93.1","Avg Score"],["305%","MG Increase"]].map(([val, lbl], i) => (
                          <div key={lbl}>
                            <div className="text-lg font-black" style={{ color: i === 2 ? v.statAccent : "white" }}>{val}</div>
                            <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: v.statMuted }}>{lbl}</div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                        style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}
                      >
                        Explore Prysm <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="w-px flex-shrink-0" style={{ background: v.divider }} />

                {/* RIGHT HALF — Aperion */}
                <div className="flex-1 flex flex-col relative overflow-hidden" style={{ background: v.rightBg }}>
                  <div className="h-[160px] relative overflow-hidden shrink-0">
                    <img
                      src="/__mockup/images/dash-finance.jpeg"
                      alt="Aperion"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 30%", filter: v.imgFilterR }}
                    />
                    <div className="absolute inset-0" style={{ background: v.overlayR }} />
                    <div className="absolute top-4 left-5">
                      <span
                        className="text-[10px] font-bold tracking-[0.16em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full"
                        style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}`, color: v.badge.text }}
                      >
                        Platform 02 — Aperion
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-5 text-white flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-black tracking-tight uppercase mb-1">Aperion</h2>
                      <p className="text-[13px] leading-relaxed max-w-xs" style={{ color: v.badge.text }}>
                        AI-powered fundraising automation and insights for agile nonprofits.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-6 mb-4">
                        {[["75%","Less Admin"],["20×","ROI"],["47","Briefs/Wk"]].map(([val, lbl], i) => (
                          <div key={lbl}>
                            <div className="text-lg font-black" style={{ color: i === 2 ? v.statAccent : "white" }}>{val}</div>
                            <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: v.statMuted }}>{lbl}</div>
                          </div>
                        ))}
                      </div>
                      <button
                        className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl font-bold text-sm text-white"
                        style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.06)" }}
                      >
                        Explore Aperion <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
