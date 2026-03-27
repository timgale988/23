import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

const VARIANTS = [
  {
    label: "Variant A — Slate Grey",
    cardBg: "linear-gradient(135deg, #18181B 0%, #3F3F46 100%)",
    imgFilter: "saturate(0.25) brightness(0.75) contrast(1.1)",
    badge: { bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.12)", text: "#A1A1AA" },
    statAccent: "#D4D4D8",
    statMuted: "#71717A",
    btnBorder: "rgba(255,255,255,0.14)",
  },
  {
    label: "Variant B — Deep Violet",
    cardBg: "linear-gradient(135deg, #1E0A3C 0%, #4338CA 100%)",
    imgFilter: "saturate(1.0) brightness(0.72) contrast(1.08)",
    badge: { bg: "rgba(124,58,237,0.18)", border: "rgba(124,58,237,0.28)", text: "#C4B5FD" },
    statAccent: "#A78BFA",
    statMuted: "#8B5CF6",
    btnBorder: "rgba(255,255,255,0.18)",
  },
  {
    label: "Variant C — Teal Jade",
    cardBg: "linear-gradient(135deg, #042F2E 0%, #0D9488 100%)",
    imgFilter: "saturate(0.8) brightness(0.7) contrast(1.1) hue-rotate(160deg)",
    badge: { bg: "rgba(20,184,166,0.18)", border: "rgba(20,184,166,0.28)", text: "#5EEAD4" },
    statAccent: "#5EEAD4",
    statMuted: "#14B8A6",
    btnBorder: "rgba(255,255,255,0.18)",
  },
];

const HEALTH_SYSTEMS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

type CardProps = {
  v: (typeof VARIANTS)[0];
  badge: string;
  title: string;
  desc: string;
  imgSrc: string;
  stats: [string, string][];
  cta: string;
};

function LandscapeCard({ v, badge, title, desc, imgSrc, stats, cta }: CardProps) {
  return (
    <div
      className="flex rounded-2xl overflow-hidden shadow-lg"
      style={{ background: v.cardBg, minHeight: 200 }}
    >
      {/* Image — fixed left column */}
      <div className="w-[38%] flex-shrink-0 relative overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          style={{ filter: v.imgFilter }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-bold tracking-[0.16em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full"
            style={{ background: v.badge.bg, border: `1px solid ${v.badge.border}`, color: v.badge.text }}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* Content — right */}
      <div className="flex flex-col justify-center px-8 py-6 text-white flex-1">
        <h2 className="text-2xl font-black tracking-tight uppercase mb-1">{title}</h2>
        <p className="text-sm leading-relaxed mb-5 max-w-sm" style={{ color: v.badge.text }}>{desc}</p>

        <div className="flex items-center gap-8 mb-5">
          {stats.map(([val, lbl], i) => (
            <div key={lbl}>
              <div className="text-2xl font-black leading-none mb-0.5" style={{ color: i === 2 ? v.statAccent : "white" }}>{val}</div>
              <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: v.statMuted }}>{lbl}</div>
            </div>
          ))}
        </div>

        <button
          className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl font-bold text-sm text-white"
          style={{ border: `1.5px solid ${v.btnBorder}`, background: "rgba(255,255,255,0.07)" }}
        >
          {cta} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function HeroV1LayoutB() {
  return (
    <section className="w-full bg-white font-['Urbanist'] py-12">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-600 mb-3 uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Layout B — Landscape Card Strips
          </div>
          <p className="text-base font-semibold text-slate-400">Image left, content right — 6 horizontal bands reading top to bottom</p>
        </div>

        {/* 6 landscape cards, grouped 2 per variant */}
        <div className="flex flex-col gap-8 mb-10">
          {VARIANTS.map((v) => (
            <div key={v.label}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-3 pl-1">{v.label}</div>
              <div className="flex flex-col gap-3">
                <LandscapeCard
                  v={v}
                  badge="Platform 01 — Prysm"
                  title="Prysm"
                  desc="Epic-native grateful patient intelligence for complex health systems."
                  imgSrc="/__mockup/images/dash-growth.jpeg"
                  stats={[["1,284","Prospects/Mo"],["93.1","Avg Score"],["305%","MG Increase"]]}
                  cta="Explore Prysm"
                />
                <LandscapeCard
                  v={v}
                  badge="Platform 02 — Aperion"
                  title="Aperion"
                  desc="AI-powered fundraising automation and insights for agile nonprofits."
                  imgSrc="/__mockup/images/dash-finance.jpeg"
                  stats={[["75%","Less Admin"],["20×","ROI"],["47","Briefs/Wk"]]}
                  cta="Explore Aperion"
                />
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
