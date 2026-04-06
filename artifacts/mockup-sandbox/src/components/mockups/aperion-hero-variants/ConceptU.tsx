import React, { useState } from "react";
import { DollarSign, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react";

// Concept U — "The Sunk Cost Reframe"
// Design hypothesis: CFO/VP Finance framing. Instead of showing capacity gained,
// show the dollar cost of the status quo — what you're paying right now for admin work.
// Interaction: salary + officer count sliders. Output: annual admin spend wasted, Aperion payback.

export function ConceptU() {
  const [officers, setOfficers] = useState(8);
  const [avgSalary, setAvgSalary] = useState(85000);

  const totalPayroll = officers * avgSalary;
  const adminWaste = Math.round(totalPayroll * 0.75);
  const aperionCost = officers * 12000; // estimated annual per seat
  const netSavings = adminWaste - aperionCost;
  const paybackMonths = Math.round((aperionCost / adminWaste) * 12);
  const roi = Math.round(adminWaste / aperionCost);

  const fmt = (n: number) =>
    n >= 1_000_000
      ? `$${(n / 1_000_000).toFixed(1)}M`
      : `$${(n / 1_000).toFixed(0)}K`;

  return (
    <div className="min-h-[100dvh] w-full font-sans" style={{ background: "#03081A", color: "#E2E8F0" }}>
      {/* Top bar */}
      <div className="w-full px-10 py-6 flex items-center justify-between border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Admin Cost Audit</span>
        </div>
        <span className="text-xs text-slate-500 uppercase tracking-widest">Platform 02 — Aperion</span>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-14 grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100dvh-72px)]">

        {/* LEFT: Framing */}
        <div>
          <h1 className="font-bold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(36px,4vw,54px)", letterSpacing: "-0.03em" }}>
            You're paying your team<br />
            <span style={{ color: "#FCA5A5" }}>to do a computer's job.</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            75% of every gift officer's salary goes to research, data entry, and prep work.
            That's not a performance problem — it's a tooling problem. Aperion fixes it.
          </p>

          {/* Sliders */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gift Officers</label>
                <span className="text-2xl font-bold text-white tabular-nums">{officers}</span>
              </div>
              <input
                type="range" min={1} max={50} value={officers}
                onChange={e => setOfficers(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #F59E0B ${(officers / 50) * 100}%, #1E293B ${(officers / 50) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>1</span><span>50</span></div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avg Officer Salary</label>
                <span className="text-2xl font-bold text-white tabular-nums">${(avgSalary / 1000).toFixed(0)}K</span>
              </div>
              <input
                type="range" min={50000} max={200000} step={5000} value={avgSalary}
                onChange={e => setAvgSalary(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #F59E0B ${((avgSalary - 50000) / 150000) * 100}%, #1E293B ${((avgSalary - 50000) / 150000) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>$50K</span><span>$200K</span></div>
            </div>
          </div>
        </div>

        {/* RIGHT: Output */}
        <div className="space-y-4">
          {/* Admin waste — the "bad" number */}
          <div className="rounded-2xl p-7" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.20)" }}>
            <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">Annual Admin Spend (Wasted)</div>
            <div className="font-bold text-red-300 tabular-nums" style={{ fontSize: "clamp(42px,5vw,64px)", letterSpacing: "-0.04em" }}>
              {fmt(adminWaste)}
            </div>
            <div className="text-sm text-red-400/70 mt-1">{officers} officers × {fmt(avgSalary)} salary × 75% admin</div>
          </div>

          {/* Three outcome stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Aperion Annual Cost", value: fmt(aperionCost), color: "#94A3B8" },
              { label: "Net Annual Savings", value: fmt(netSavings), color: "#34D399" },
              { label: "Payback Period", value: `${paybackMonths}mo`, color: "#60A5FA" },
            ].map(({ label, value, color }) => (
              <div key={label} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="font-bold text-xl tabular-nums" style={{ color }}>{value}</div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wide leading-tight">{label}</div>
              </div>
            ))}
          </div>

          {/* ROI callout */}
          <div className="rounded-xl p-5 flex items-center gap-4" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.20)" }}>
            <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-bold text-lg">{roi}:1 ROI in year one</div>
              <div className="text-sm text-slate-400">For every $1 spent on Aperion, {roi}x returns in reclaimed capacity</div>
            </div>
          </div>

          <button className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all"
            style={{ background: "linear-gradient(90deg, #F59E0B, #EF4444)" }}>
            <DollarSign className="w-4 h-4" />
            Get Full Cost Analysis
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConceptU;
