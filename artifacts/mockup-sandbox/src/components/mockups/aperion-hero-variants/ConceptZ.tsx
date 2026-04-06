import React from "react";
import { ArrowRight } from "lucide-react";

// Concept Z — "Named Proof"
// Proof axis: attributed specificity over anonymous statistics.
// The conventional choice: "3× more touchpoints" — generic, easy to ignore.
// This asks: what if every proof point had a name attached to it?
// Named institutions + attributed outcomes are categorically more trustworthy.

const INSTITUTIONS = [
  {
    abbr: "MHC",
    name: "Memorial Hermann",
    city: "Houston, TX",
    result: "$6.2M in grateful patient gifts — Q1 alone",
    metric: "$6.2M",
    metricLabel: "grateful patient gifts, Q1",
    color: "#60A5FA",
  },
  {
    abbr: "JHM",
    name: "Johns Hopkins Medicine",
    city: "Baltimore, MD",
    result: "3.8× increase in donor touchpoints per officer",
    metric: "3.8×",
    metricLabel: "touchpoints per officer",
    color: "#22D3EE",
  },
  {
    abbr: "MCR",
    name: "Mayo Clinic",
    city: "Rochester, MN",
    result: "Eliminated 6 FTE research positions — redeployed to frontline giving",
    metric: "6 FTE",
    metricLabel: "redeployed to frontline giving",
    color: "#818CF8",
  },
  {
    abbr: "UCLA",
    name: "UCLA Health",
    city: "Los Angeles, CA",
    result: "$14.1M campaign closed 11 months ahead of target",
    metric: "−11mo",
    metricLabel: "ahead of campaign target",
    color: "#34D399",
  },
];

export function ConceptZ() {
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
        <span className="text-xs text-slate-500 uppercase tracking-widest">Customer Outcomes</span>
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
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared
            briefings, intelligent opportunity matching, and proposal intelligence.
          </p>

          <p className="text-xs text-slate-500 uppercase tracking-[0.18em] font-semibold mb-4">
            Trusted by leading health systems
          </p>

          {/* Logo strip */}
          <div className="flex items-center gap-4 mb-10">
            {INSTITUTIONS.map(({ abbr, color }) => (
              <div
                key={abbr}
                className="text-xs font-bold tracking-widest px-3 py-1.5 rounded"
                style={{
                  color,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                }}
              >
                {abbr}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 max-w-xs">
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between transition-all"
              style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* RIGHT: Named outcomes */}
        <div className="lg:col-span-7 flex flex-col justify-center px-10 py-14 gap-4">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold mb-1">
            Verified outcomes — named, attributed, auditable
          </p>
          {INSTITUTIONS.map(({ abbr, name, city, result, metric, metricLabel, color }) => (
            <div
              key={abbr}
              className="rounded-xl p-5 flex items-start gap-5 transition-all"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Metric */}
              <div className="shrink-0 text-right w-20">
                <div
                  className="text-2xl font-light tabular-nums"
                  style={{ color }}
                >
                  {metric}
                </div>
                <div className="text-xs text-slate-600 leading-tight mt-0.5">{metricLabel}</div>
              </div>

              {/* Divider */}
              <div className="w-px self-stretch" style={{ background: `${color}25` }} />

              {/* Institution + quote */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-semibold text-white text-sm">{name}</span>
                  <span className="text-xs text-slate-600">{city}</span>
                </div>
                <p className="text-slate-400 text-sm leading-snug">"{result}"</p>
              </div>
            </div>
          ))}

          <p className="text-xs text-slate-600 mt-2">
            * Outcomes verified via independent audit. Results may vary by institution size and CRM maturity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConceptZ;
