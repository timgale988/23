import React, { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

// Concept V — "The Portfolio Coverage Gap"
// Design hypothesis: Pipeline-forward framing. Shift from time/cost to donor relationships.
// How many donors in your portfolio are being underserved right now?
// Interaction: portfolio size + officer count → shows coverage ratio, at-risk donors, touchpoint gap.

export function ConceptV() {
  const [portfolioSize, setPortfolioSize] = useState(400);
  const [officers, setOfficers] = useState(6);

  const capacityPerOfficer = 60; // realistically without Aperion
  const aperionCapacityPerOfficer = 180; // with Aperion
  const currentCoverage = Math.min(officers * capacityPerOfficer, portfolioSize);
  const aperionCoverage = Math.min(officers * aperionCapacityPerOfficer, portfolioSize);
  const underserved = portfolioSize - currentCoverage;
  const newlyServed = aperionCoverage - currentCoverage;
  const coveragePct = Math.round((currentCoverage / portfolioSize) * 100);
  const aperionPct = Math.min(100, Math.round((aperionCoverage / portfolioSize) * 100));

  const avgGift = 18500;
  const opportunityCost = Math.round(underserved * avgGift * 0.08); // 8% conversion

  return (
    <div className="min-h-[100dvh] w-full font-sans flex flex-col" style={{ background: "#03081A", color: "#E2E8F0" }}>

      {/* Badge row */}
      <div className="px-10 py-6 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase">Portfolio Coverage Analysis</span>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-[1fr_1fr] gap-0">

        {/* LEFT: Story + Inputs */}
        <div className="p-8 md:p-12 flex flex-col justify-center border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <h1 className="font-bold text-white leading-[1.05] mb-5" style={{ fontSize: "clamp(32px,3.5vw,50px)", letterSpacing: "-0.03em" }}>
            How many donors aren't
            <br />
            <span style={{ background: "linear-gradient(90deg,#A78BFA,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              hearing from you?
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-10">
            Each gift officer can meaningfully cultivate ~60 donors without support.
            Aperion triples that — without adding headcount.
          </p>

          {/* Inputs */}
          <div className="space-y-7">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Major Gift Portfolio Size</label>
                <span className="text-xl font-bold text-white tabular-nums">{portfolioSize} donors</span>
              </div>
              <input
                type="range" min={50} max={2000} step={50} value={portfolioSize}
                onChange={e => setPortfolioSize(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #7C3AED ${((portfolioSize - 50) / 1950) * 100}%, #1E293B ${((portfolioSize - 50) / 1950) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>50</span><span>2,000</span></div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gift Officers on Team</label>
                <span className="text-xl font-bold text-white tabular-nums">{officers} officers</span>
              </div>
              <input
                type="range" min={1} max={40} value={officers}
                onChange={e => setOfficers(Number(e.target.value))}
                className="w-full h-1 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #7C3AED ${(officers / 40) * 100}%, #1E293B ${(officers / 40) * 100}%)` }}
              />
              <div className="flex justify-between text-xs text-slate-600 mt-1"><span>1</span><span>40</span></div>
            </div>
          </div>
        </div>

        {/* RIGHT: Coverage visualization */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          {/* Coverage bars */}
          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">Current Coverage</span>
                <span className="font-bold text-white">{currentCoverage} / {portfolioSize} donors ({coveragePct}%)</span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${coveragePct}%`, background: "linear-gradient(90deg,#4B5563,#6B7280)" }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-violet-300">With Aperion</span>
                <span className="font-bold text-violet-200">{aperionCoverage} / {portfolioSize} donors ({aperionPct}%)</span>
              </div>
              <div className="w-full h-4 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${aperionPct}%`, background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }}
                />
              </div>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl p-5" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Currently Underserved</div>
              <div className="text-3xl font-bold text-red-300 tabular-nums">{underserved}</div>
              <div className="text-xs text-slate-500 mt-1">donors getting inadequate contact</div>
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Newly Reachable</div>
              <div className="text-3xl font-bold text-emerald-300 tabular-nums">+{newlyServed}</div>
              <div className="text-xs text-slate-500 mt-1">additional donors per year</div>
            </div>
          </div>

          <div className="rounded-xl p-5 mb-6 flex items-center gap-4" style={{ background: "rgba(124,58,237,0.10)", border: "1px solid rgba(124,58,237,0.20)" }}>
            <Clock className="w-5 h-5 text-violet-400 shrink-0" />
            <div className="text-sm">
              <span className="text-slate-400">Unrealized opportunity from underserved donors: </span>
              <span className="font-bold text-white">${(opportunityCost / 1000).toFixed(0)}K–${(opportunityCost * 2.5 / 1000).toFixed(0)}K annually</span>
            </div>
          </div>

          <button className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(90deg, #7C3AED, #06B6D4)" }}>
            See Your Coverage Plan <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConceptV;
