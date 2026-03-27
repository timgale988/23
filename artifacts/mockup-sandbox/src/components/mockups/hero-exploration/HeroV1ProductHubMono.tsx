import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Clock } from 'lucide-react';

const VARIANTS = [
  {
    label: "Variant A — Obsidian",
    pageBg: "#050505",
    cardBg: "linear-gradient(160deg, #0A0A0A 0%, #1C1C1E 100%)",
    imgFilter: "saturate(0) brightness(0.65) contrast(1.12)",
    overlay: "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.92) 100%)",
    badgeBg: "rgba(255,255,255,0.07)",
    badgeBorder: "rgba(255,255,255,0.10)",
    badgeText: "#A8A8A8",
    headline: "#FFFFFF",
    body: "#6B6B6B",
    statMain: "#FFFFFF",
    statAccent: "#E5E5E5",
    statLabel: "#4A4A4A",
    btnBg: "rgba(255,255,255,0.06)",
    btnBorder: "rgba(255,255,255,0.10)",
    btnText: "#C8C8C8",
    divider: "rgba(255,255,255,0.06)",
    labelColor: "#5A5A5A",
    cardBorder: "rgba(255,255,255,0.06)",
    isDark: true,
  },
  {
    label: "Variant B — Graphite",
    pageBg: "#F2F2F2",
    cardBg: "linear-gradient(160deg, #1A1A1A 0%, #3A3A3A 100%)",
    imgFilter: "saturate(0) brightness(0.72) contrast(1.08)",
    overlay: "linear-gradient(to bottom, rgba(26,26,26,0.08) 0%, rgba(26,26,26,0.42) 55%, rgba(26,26,26,0.90) 100%)",
    badgeBg: "rgba(255,255,255,0.09)",
    badgeBorder: "rgba(255,255,255,0.14)",
    badgeText: "#B8B8B8",
    headline: "#FFFFFF",
    body: "#7A7A7A",
    statMain: "#FFFFFF",
    statAccent: "#D4D4D4",
    statLabel: "#5C5C5C",
    btnBg: "rgba(255,255,255,0.07)",
    btnBorder: "rgba(255,255,255,0.13)",
    btnText: "#C0C0C0",
    divider: "rgba(255,255,255,0.07)",
    labelColor: "#888888",
    cardBorder: "rgba(255,255,255,0.07)",
    isDark: true,
  },
  {
    label: "Variant C — Pearl",
    pageBg: "#F2F2F2",
    cardBg: "linear-gradient(160deg, #FFFFFF 0%, #EBEBEB 100%)",
    imgFilter: "saturate(0) brightness(0.95) contrast(1.06)",
    overlay: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, rgba(230,230,230,0.35) 55%, rgba(255,255,255,0.80) 100%)",
    badgeBg: "rgba(0,0,0,0.05)",
    badgeBorder: "rgba(0,0,0,0.10)",
    badgeText: "#555555",
    headline: "#0A0A0A",
    body: "#6B6B6B",
    statMain: "#0A0A0A",
    statAccent: "#222222",
    statLabel: "#9A9A9A",
    btnBg: "rgba(0,0,0,0.04)",
    btnBorder: "rgba(0,0,0,0.10)",
    btnText: "#333333",
    divider: "rgba(0,0,0,0.06)",
    labelColor: "#888888",
    cardBorder: "rgba(0,0,0,0.06)",
    isDark: false,
  },
];

const HEALTH_SYSTEMS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

function ProductCard({
  v,
  platform,
  badge,
  title,
  desc,
  imgSrc,
  imgPos,
  stats,
  cta,
}: {
  v: (typeof VARIANTS)[0];
  platform: string;
  badge: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgPos: string;
  stats: { val: string; label: string; accent?: boolean }[];
  cta: string;
}) {
  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: v.cardBg,
        border: `1px solid ${v.cardBorder}`,
        boxShadow: v.isDark
          ? "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35)"
          : "0 4px 24px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)",
      }}
    >
      {/* Image zone */}
      <div className="h-[176px] relative overflow-hidden shrink-0">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          style={{ objectPosition: imgPos, filter: v.imgFilter }}
        />
        <div className="absolute inset-0" style={{ background: v.overlay }} />
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-bold tracking-[0.18em] uppercase backdrop-blur-md px-2.5 py-1 rounded-full"
            style={{ background: v.badgeBg, border: `1px solid ${v.badgeBorder}`, color: v.badgeText }}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2
          className="text-2xl font-black tracking-tight mb-1.5 uppercase"
          style={{ color: v.headline }}
        >
          {title}
        </h2>
        <p className="text-[13px] leading-relaxed mb-5" style={{ color: v.body }}>
          {desc}
        </p>

        <div
          className="grid grid-cols-3 gap-2 pb-5 mb-5"
          style={{ borderBottom: `1px solid ${v.divider}` }}
        >
          {stats.map(({ val, label, accent }) => (
            <div key={label}>
              <div
                className="text-lg font-black leading-none mb-1"
                style={{ color: accent ? v.statAccent : v.statMain }}
              >
                {val}
              </div>
              <div
                className="text-[9px] font-bold uppercase tracking-wider"
                style={{ color: v.statLabel }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        <button
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-[13px] transition-all"
          style={{
            background: v.btnBg,
            border: `1px solid ${v.btnBorder}`,
            color: v.btnText,
          }}
        >
          {cta} <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export function HeroV1ProductHubMono() {
  return (
    <section className="relative w-full bg-white text-slate-900 py-10 overflow-hidden font-['Urbanist']">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-widest text-slate-500 mb-3 uppercase">
            <span className="flex h-2 w-2 rounded-full bg-slate-700" />
            Monochrome Treatment — Prysm × Aperion
          </div>
          <p className="text-base font-semibold text-slate-400 max-w-lg">
            Three positions on the black-to-white axis
          </p>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-3 gap-5 mb-3">
          {VARIANTS.map((v) => (
            <div key={v.label} className="text-[10px] font-bold uppercase tracking-widest text-slate-300 text-center">
              {v.label}
            </div>
          ))}
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {VARIANTS.map((v) => (
            <div
              key={v.label}
              className="flex flex-col gap-3 rounded-3xl p-4"
              style={{
                background: v.pageBg,
                boxShadow: v.isDark ? "inset 0 0 0 1px rgba(255,255,255,0.04)" : "inset 0 0 0 1px rgba(0,0,0,0.04)",
              }}
            >
              <ProductCard
                v={v}
                platform="prysm"
                badge="Platform 01 — Prysm"
                title="Prysm"
                desc="Epic-native grateful patient intelligence for complex health systems."
                imgSrc="/__mockup/images/dash-growth.jpeg"
                imgPos="center 15%"
                stats={[
                  { val: "1,284", label: "Prospects/Mo" },
                  { val: "93.1",  label: "Avg Score" },
                  { val: "305%",  label: "MG Increase", accent: true },
                ]}
                cta="Explore Prysm"
              />
              <ProductCard
                v={v}
                platform="aperion"
                badge="Platform 02 — Aperion"
                title="Aperion"
                desc="AI-powered fundraising automation and insights for agile nonprofits."
                imgSrc="/__mockup/images/dash-finance.jpeg"
                imgPos="center 30%"
                stats={[
                  { val: "75%", label: "Less Admin" },
                  { val: "20×", label: "ROI" },
                  { val: "47",  label: "Briefs/Wk", accent: true },
                ]}
                cta="Explore Aperion"
              />
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-100 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-3 text-[11px] font-bold text-slate-300 uppercase tracking-widest">
            {HEALTH_SYSTEMS.map((s) => <span key={s}>{s}</span>)}
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
            {[
              { icon: ShieldCheck, label: "HIPAA Compliant" },
              { icon: Activity,    label: "Epic Native" },
              { icon: Clock,       label: "Live in 30 Days" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                <Icon className="w-4 h-4 text-slate-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
