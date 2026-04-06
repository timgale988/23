import React, { useState } from "react";
import { ArrowRight, Users } from "lucide-react";

// Concept AA — "Your Proof"
// Proof axis: personalized relevance over generic benchmarks.
// The conventional choice: "20:1 ROI" — impressive but abstract.
// This asks: what if every number recalculated for your institution?
// The hero becomes a mirror. The viewer proves Aperion's value to themselves.

const TIERS = [
  { label: "Community Hospital", officers: 4, salary: 72000, aperionPPY: 14400 },
  { label: "Regional Health System", officers: 12, salary: 85000, aperionPPY: 12000 },
  { label: "Academic Medical Center", officers: 28, salary: 92000, aperionPPY: 10800 },
  { label: "Top-10 Health System", officers: 55, salary: 110000, aperionPPY: 9600 },
];

function fmtK(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  return `$${Math.round(n / 1000)}K`;
}

export function ConceptAA() {
  const [tierIdx, setTierIdx] = useState(1);
  const tier = TIERS[tierIdx];

  const adminWaste = tier.officers * tier.salary * 0.75;
  const aperionCost = tier.officers * tier.aperionPPY;
  const netSavings = adminWaste - aperionCost;
  const roi = Math.round(adminWaste / aperionCost);
  const paybackDays = Math.round((aperionCost / adminWaste) * 365);
  const touchpointGain = Math.round(tier.officers * 3.1 * 10) / 10;

  const stats = [
    { label: "Admin time reclaimed", value: fmtK(adminWaste), sub: "per year, currently wasted", color: "#F87171" },
    { label: "Net annual savings", value: fmtK(netSavings), sub: "after Aperion cost", color: "#34D399" },
    { label: "ROI in year one", value: `${roi}:1`, sub: "return per dollar spent", color: "#60A5FA" },
    { label: "Payback period", value: `${paybackDays}d`, sub: "from go-live to breakeven", color: "#22D3EE" },
    { label: "More donor touchpoints", value: `+${touchpointGain.toFixed(1)}×`, sub: "per officer, per quarter", color: "#818CF8" },
    { label: "Aperion annual cost", value: fmtK(aperionCost), sub: "full team, fully managed", color: "#94A3B8" },
  ];

  return (
    <div
      className="min-h-[100dvh] w-full font-sans flex flex-col"
      style={{ background: "#03081A", color: "#E2E8F0" }}
    >
      {/* Top bar */}
      <div
        className="w-full px-10 py-5 flex items-center justify-between border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
            Platform 02 — Aperion
          </span>
        </div>
        <span className="text-xs text-slate-500 uppercase tracking-widest">Your ROI</span>
      </div>

      {/* Body */}
      <div className="flex-1 grid lg:grid-cols-12">

        {/* LEFT */}
        <div
          className="lg:col-span-5 flex flex-col justify-center px-10 py-14 border-r"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <h1
            className="font-light text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(32px,3.5vw,50px)", letterSpacing: "-0.03em" }}
          >
            Every Gift Officer's<br />
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#60A5FA,#22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unfair Advantage.
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
            Stop reading someone else's ROI figures. Set your institution type and see exactly
            what Aperion means for your team — your payroll, your capacity, your return.
          </p>

          {/* Tier selector */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                Your institution type
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {TIERS.map((t, i) => (
                <button
                  key={t.label}
                  onClick={() => setTierIdx(i)}
                  className="px-3 py-2.5 text-left text-xs font-medium rounded-lg transition-all"
                  style={
                    i === tierIdx
                      ? {
                          background: "rgba(37,99,235,0.25)",
                          border: "1px solid rgba(37,99,235,0.5)",
                          color: "#93C5FD",
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#64748B",
                        }
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-3">
              Modeled on {tier.officers} officers · {fmtK(tier.salary)} avg salary
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-xs">
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between transition-all"
              style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
            >
              <span>Get Your Full Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* RIGHT: Personalized stats */}
        <div className="lg:col-span-7 flex flex-col justify-center px-10 py-14">
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
              Projected impact — {tier.label}
            </p>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded"
              style={{ background: "rgba(37,99,235,0.15)", color: "#93C5FD", border: "1px solid rgba(37,99,235,0.3)" }}
            >
              {tier.officers} officers
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ label, value, sub, color }) => (
              <div
                key={label}
                className="rounded-xl p-5 transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="text-3xl font-light tabular-nums mb-1"
                  style={{ color }}
                >
                  {value}
                </div>
                <div className="text-xs font-semibold text-white uppercase tracking-wide mb-0.5">{label}</div>
                <div className="text-xs text-slate-600">{sub}</div>
              </div>
            ))}
          </div>

          <div
            className="mt-5 rounded-lg px-5 py-4 flex items-center gap-3"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: "#2563EB" }}
            />
            <p className="text-xs text-slate-400 leading-snug">
              Based on average across {tier.label.toLowerCase()} deployments. Estimates use 75% admin-time recapture, {fmtK(tier.salary)} avg salary,
              and ${(tier.aperionPPY / 12).toLocaleString()}/seat/month pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptAA;
