import React, { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, ChevronDown } from "lucide-react";

// Concept X — "The Peer Benchmark"
// Design hypothesis: Social proof + competitive benchmarking.
// Instead of calculating YOUR numbers, show how Aperion-powered teams compare to average teams.
// Interaction: Select your health system tier (community, academic, enterprise).
// Output: benchmarked comparison table with real-feel industry data.
// Framing: "Your peers are already ahead."

const tiers = [
  {
    id: "community",
    label: "Community Health System",
    sub: "< 200K annual discharges",
    peers: { touchpoints: 18, briefingTime: "52 min", closedGifts: 31, portfolioCoverage: "48%" },
    aperion: { touchpoints: 54, briefingTime: "< 1 min", closedGifts: 89, portfolioCoverage: "94%" },
    adoptedCount: "47 of 112",
  },
  {
    id: "academic",
    label: "Academic Medical Center",
    sub: "200K–500K annual discharges",
    peers: { touchpoints: 22, briefingTime: "48 min", closedGifts: 58, portfolioCoverage: "52%" },
    aperion: { touchpoints: 66, briefingTime: "< 1 min", closedGifts: 167, portfolioCoverage: "97%" },
    adoptedCount: "31 of 78",
  },
  {
    id: "enterprise",
    label: "Enterprise Health Network",
    sub: "500K+ annual discharges",
    peers: { touchpoints: 28, briefingTime: "61 min", closedGifts: 94, portfolioCoverage: "41%" },
    aperion: { touchpoints: 84, briefingTime: "< 1 min", closedGifts: 271, portfolioCoverage: "98%" },
    adoptedCount: "19 of 41",
  },
];

const metrics = [
  { key: "touchpoints", label: "Donor Touchpoints / Officer / Year", higherBetter: true, unit: "" },
  { key: "briefingTime", label: "Meeting Prep Time", higherBetter: false, unit: "" },
  { key: "closedGifts", label: "Gifts Closed / Officer / Year", higherBetter: true, unit: "" },
  { key: "portfolioCoverage", label: "Portfolio Coverage Rate", higherBetter: true, unit: "" },
];

export function ConceptX() {
  const [activeTier, setActiveTier] = useState("academic");
  const [open, setOpen] = useState(false);
  const tier = tiers.find(t => t.id === activeTier)!;

  return (
    <div className="min-h-[100dvh] w-full font-sans" style={{ background: "#03081A", color: "#E2E8F0" }}>

      {/* Header */}
      <div className="px-8 md:px-14 py-8 border-b flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Platform 02 — Aperion</div>
          <h1 className="font-bold text-white" style={{ fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.03em" }}>
            Your peers are already ahead.
            <br />
            <span style={{ background: "linear-gradient(90deg,#60A5FA,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              See how Aperion changes the benchmark.
            </span>
          </h1>
        </div>

        {/* Tier picker */}
        <div className="relative shrink-0">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span>{tier.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-72 rounded-xl overflow-hidden z-20 shadow-2xl" style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.12)" }}>
              {tiers.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setActiveTier(t.id); setOpen(false); }}
                  className="w-full px-5 py-4 text-left hover:bg-white/5 transition-colors border-b last:border-b-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="font-semibold text-white text-sm">{t.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.sub}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Adoption callout */}
      <div className="px-8 md:px-14 py-4 flex items-center gap-3" style={{ background: "rgba(96,165,250,0.06)", borderBottom: "1px solid rgba(96,165,250,0.10)" }}>
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-sm text-blue-300"><strong className="text-white">{tier.adoptedCount}</strong> {tier.label.toLowerCase()}s in your peer group have adopted Aperion in the last 18 months.</span>
      </div>

      {/* Comparison table */}
      <div className="px-8 md:px-14 py-10">
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Table header */}
          <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest" style={{ background: "rgba(255,255,255,0.03)" }}>
            <div className="px-6 py-4 text-slate-500">Metric</div>
            <div className="px-6 py-4 text-slate-400 border-l" style={{ borderColor: "rgba(255,255,255,0.08)" }}>Industry Average</div>
            <div className="px-6 py-4 text-cyan-400 border-l" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(6,182,212,0.04)" }}>
              Aperion-Powered Teams
            </div>
          </div>

          {/* Rows */}
          {metrics.map(({ key, label, higherBetter }) => {
            const peerVal = tier.peers[key as keyof typeof tier.peers];
            const aperVal = tier.aperion[key as keyof typeof tier.aperion];
            return (
              <div key={key} className="grid grid-cols-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="px-6 py-5 text-sm text-slate-400 flex items-center">{label}</div>
                <div className="px-6 py-5 border-l flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <XCircle className="w-4 h-4 text-slate-600 shrink-0" />
                  <span className="font-bold text-slate-300">{peerVal}</span>
                </div>
                <div className="px-6 py-5 border-l flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(6,182,212,0.03)" }}>
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-white">{aperVal}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 max-w-lg">
            Data aggregated from {tiers.find(t => t.id === activeTier)?.adoptedCount.split(" of ")[1]} {tier.label.toLowerCase()} programs. Aperion metrics reflect 12-month post-deployment averages.
          </p>
          <button className="shrink-0 px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2"
            style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}>
            Book a Benchmark Session <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConceptX;
