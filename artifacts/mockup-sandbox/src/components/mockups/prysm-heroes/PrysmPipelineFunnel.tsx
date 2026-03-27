import React from 'react';
import { ArrowRight, Database, ShieldCheck, Activity } from 'lucide-react';

const STAGES = [
  { label: "Clinical Encounters",    sub: "Epic EMR daily discharge",    count: "12,847", pct: 100, color: "#7C3AED", textColor: "#C4B5FD" },
  { label: "AI-Scored Prospects",    sub: "Windfall + DonorSearch",      count: "4,823",  pct: 38,  color: "#4F46E5", textColor: "#A5B4FC" },
  { label: "Qualified for Outreach", sub: "Capacity ≥ $25K · Score ≥ 70",count: "1,422",  pct: 22,  color: "#2563EB", textColor: "#93C5FD" },
  { label: "Gift Officer Assigned",  sub: "CRM push · Daily queue",      count: "287",    pct: 10,  color: "#0891B2", textColor: "#67E8F9" },
  { label: "Major Gifts Received",   sub: "Avg gift $48,200",            count: "47",     pct: 5,   color: "#059669", textColor: "#6EE7B7" },
];

export function PrysmPipelineFunnel() {
  return (
    <div className="w-full flex justify-center bg-white min-h-[720px] font-sans">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row overflow-hidden border border-slate-200 shadow-xl rounded-2xl my-8">

        {/* LEFT — headline */}
        <div className="w-full lg:w-[42%] bg-white p-10 lg:p-14 flex flex-col justify-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600" />
            </span>
            <span className="text-xs font-bold tracking-wide text-violet-700 uppercase">Platform 01 — Prysm</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-black text-[#0A0E1A] uppercase leading-[1.0] tracking-tight mb-5">
            Every Discharge<br />
            Is a Gift<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)" }}>
              Waiting to Happen.
            </span>
          </h1>

          <p className="text-base text-slate-500 mb-8 leading-relaxed">
            Prysm turns your clinical encounter volume into a predictable major gift pipeline — automatically, at scale, every single day.
          </p>

          <div className="flex gap-3 mb-10">
            <button className="px-6 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 24px rgba(124,58,237,0.3)" }}>
              Request a Demo
            </button>
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 font-bold text-sm text-[#0A0E1A] hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#E5E7EB" }}>
              View Results <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-slate-100">
            {[{ icon: Database, label: "Epic Integration" }, { icon: ShieldCheck, label: "HIPAA Compliant" }, { icon: Activity, label: "Real-Time Scoring" }].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-sm font-medium text-slate-400">
                <Icon className="w-4 h-4 text-violet-500" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — pipeline funnel */}
        <div className="flex-1 bg-[#0A0E1A] flex flex-col justify-center px-8 py-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(124,58,237,0.1) 0%, transparent 65%)" }} />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[4px] text-white/25 mb-6 text-center">
              Prysm Patient-to-Donor Pipeline · Rolling 90 Days
            </p>

            <div className="flex flex-col gap-2.5">
              {STAGES.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  {/* Stage number */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white/40 border border-white/10">
                    {i + 1}
                  </div>

                  {/* Bar + label */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">{s.label}</span>
                      <span className="text-xs font-semibold" style={{ color: s.textColor }}>{s.count}</span>
                    </div>
                    <div className="h-7 rounded-lg overflow-hidden relative" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div
                        className="h-full rounded-lg flex items-center px-3 transition-all duration-500"
                        style={{ width: `${s.pct}%`, background: `linear-gradient(90deg, ${s.color}33, ${s.color}55)`, borderRight: `2px solid ${s.color}` }}
                      >
                        <span className="text-[10px] font-semibold text-white/50">{s.sub}</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow between stages */}
                  {i < STAGES.length - 1 && (
                    <div className="flex-shrink-0 text-white/15 text-xs">↓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Conversion summary */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Qualification Rate", value: "14.9%", color: "#7C3AED" },
                { label: "Avg Capacity Score", value: "93.1",  color: "#2563EB" },
                { label: "Year 1 Revenue",      value: "$4.32M",color: "#059669" },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[9px] font-semibold uppercase tracking-widest text-white/35 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
