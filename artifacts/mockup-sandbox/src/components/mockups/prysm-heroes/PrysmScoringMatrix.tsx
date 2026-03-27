import React from "react";

const LeftColumn = () => (
  <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center relative z-10 border-r" style={{ background: "#FFFFFF", borderColor: "#E8E8E8" }}>
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px w-7" style={{ background: "#111111" }} />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#111111" }}>Platform 01 — Prysm</span>
    </div>
    <h1 className="font-black uppercase leading-[1.0] tracking-tight mb-6" style={{ fontSize: "clamp(32px,3.8vw,50px)", color: "#111111" }}>
      Grateful Patients Become<br />
      <span style={{ color: "#444444" }}>Transformational Donors.</span>
    </h1>
    <p className="text-base leading-relaxed mb-10 max-w-[400px]" style={{ color: "#707070" }}>
      Prysm scores every encounter across two dimensions — financial capacity and engagement signal — surfacing qualified prospects that would otherwise stay invisible.
    </p>
    <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
      <button className="px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all hover:opacity-80" style={{ background: "#111111" }}>Request a Demo</button>
      <button className="px-7 py-3.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-50 transition-all" style={{ border: "1.5px solid #DCDCDC", color: "#333333" }}>
        View Client Results
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
    <div className="pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-3" style={{ borderColor: "#EBEBEB" }}>
      {["Epic EHR Certified", "HIPAA Compliant", "Real-Time Scoring", "SOC 2 Type II"].map((label) => (
        <div key={label} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#555" }} />
          <span className="text-xs font-semibold" style={{ color: "#707070" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

// Scatter plot data — [capacityScore, engagementSignal, label?, capacity?]
const DOTS: { x: number; y: number; label?: string; cap?: string; size?: number }[] = [
  // Unqualified cloud
  { x: 12, y: 18 }, { x: 25, y: 8 }, { x: 8, y: 35 }, { x: 40, y: 22 },
  { x: 18, y: 45 }, { x: 32, y: 38 }, { x: 55, y: 15 }, { x: 48, y: 42 },
  { x: 20, y: 60 }, { x: 35, y: 55 }, { x: 62, y: 30 }, { x: 50, y: 58 },
  { x: 28, y: 72 }, { x: 15, y: 80 }, { x: 45, y: 65 }, { x: 60, y: 62 },
  // Borderline
  { x: 68, y: 58 }, { x: 72, y: 60 }, { x: 65, y: 70 },
  // Qualified zone — highlighted
  { x: 78, y: 78, label: "S. Chen", cap: "$420K", size: 8 },
  { x: 84, y: 72, label: "R. Walsh", cap: "$285K", size: 7 },
  { x: 91, y: 88, label: "M. Torres", cap: "$510K", size: 9 },
  { x: 74, y: 82 }, { x: 88, y: 76 }, { x: 80, y: 91 },
];

export function PrysmScoringMatrix() {
  // Map 0-100 score to SVG coords
  // Plot area: x from 60 to 500, y from 30 to 360 (inverted — higher y = lower on screen)
  const plotX = (v: number) => 60 + (v / 100) * 440;
  const plotY = (v: number) => 360 - (v / 100) * 330;
  const thresholdX = plotX(70);  // capacity threshold
  const thresholdY = plotY(65);  // engagement threshold

  return (
    <section className="w-full min-h-[720px] font-['Urbanist'] flex items-center justify-center py-10 px-4 overflow-hidden" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}>
        <LeftColumn />

        {/* RIGHT — Scoring Surface */}
        <div className="flex-1 relative flex flex-col justify-center p-6 lg:p-8 min-h-[500px]" style={{ background: "#F0F0F0" }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 flex flex-col h-full gap-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#999" }}>Scoring Matrix — Capacity × Engagement</div>

            <div className="flex-1 relative">
              <svg viewBox="0 0 540 410" className="w-full h-full overflow-visible" style={{ maxHeight: 420 }}>
                <defs>
                  <filter id="dotShadow">
                    <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.10" />
                  </filter>
                </defs>

                {/* Qualified zone background */}
                <rect
                  x={thresholdX}
                  y={30}
                  width={500 - thresholdX}
                  height={thresholdY - 30}
                  fill="#111111"
                  opacity="0.04"
                  rx="4"
                />
                <rect
                  x={thresholdX}
                  y={30}
                  width={500 - thresholdX}
                  height={thresholdY - 30}
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.18"
                  rx="4"
                />
                {/* Qualified zone label */}
                <text x={thresholdX + 8} y={44} fill="#111111" fontSize="8.5" fontWeight="700" letterSpacing="1.5" fontFamily="Urbanist, sans-serif" opacity="0.5">QUALIFIED ZONE</text>

                {/* Threshold lines */}
                <line x1={thresholdX} y1={30} x2={thresholdX} y2={370} stroke="#333333" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
                <line x1={60} y1={thresholdY} x2={500} y2={thresholdY} stroke="#333333" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />

                {/* Axes */}
                <line x1={60} y1={370} x2={510} y2={370} stroke="#CCCCCC" strokeWidth="1.5" />
                <line x1={60} y1={30}  x2={60}  y2={375} stroke="#CCCCCC" strokeWidth="1.5" />

                {/* Axis tick marks */}
                {[0, 25, 50, 75, 100].map((v) => (
                  <React.Fragment key={v}>
                    <line x1={plotX(v)} y1={368} x2={plotX(v)} y2={375} stroke="#BBBBBB" strokeWidth="1" />
                    <text x={plotX(v)} y={385} textAnchor="middle" fill="#AAAAAA" fontSize="9" fontFamily="Urbanist, sans-serif">{v}</text>
                    <line x1={55} y1={plotY(v)} x2={62} y2={plotY(v)} stroke="#BBBBBB" strokeWidth="1" />
                    <text x={50} y={plotY(v) + 3.5} textAnchor="end" fill="#AAAAAA" fontSize="9" fontFamily="Urbanist, sans-serif">{v}</text>
                  </React.Fragment>
                ))}

                {/* Axis labels */}
                <text x={285} y={400} textAnchor="middle" fill="#777777" fontSize="10" fontWeight="700" letterSpacing="1" fontFamily="Urbanist, sans-serif">CAPACITY SCORE</text>
                <text x={18} y={200} textAnchor="middle" fill="#777777" fontSize="10" fontWeight="700" letterSpacing="1" fontFamily="Urbanist, sans-serif" transform="rotate(-90, 18, 200)">ENGAGEMENT SIGNAL</text>

                {/* Scatter dots */}
                {DOTS.map((d, i) => {
                  const cx = plotX(d.x);
                  const cy = plotY(d.y);
                  const isQualified = d.x >= 70 && d.y >= 65;
                  const isLabeled = !!d.label;
                  const r = d.size ?? (isQualified ? 5.5 : 4);
                  return (
                    <g key={i} filter={isLabeled ? "url(#dotShadow)" : undefined}>
                      <circle
                        cx={cx} cy={cy} r={r}
                        fill={isLabeled ? "#111111" : isQualified ? "#555555" : "#CCCCCC"}
                        opacity={isLabeled ? 1 : isQualified ? 0.85 : 0.6}
                      />
                      {isLabeled && d.label && (
                        <>
                          <line x1={cx} y1={cy - r} x2={cx} y2={cy - 22} stroke="#555555" strokeWidth="0.8" />
                          <rect x={cx - 32} y={cy - 38} width={64} height={18} rx="4" fill="#FFFFFF" stroke="#DCDCDC" strokeWidth="1" />
                          <text x={cx} y={cy - 26} textAnchor="middle" fill="#111111" fontSize="9" fontWeight="800" fontFamily="Urbanist, sans-serif">{d.label} · {d.cap}</text>
                        </>
                      )}
                    </g>
                  );
                })}

                {/* Threshold labels */}
                <text x={thresholdX + 3} y={370 - 4} fill="#333333" fontSize="8.5" fontWeight="700" fontFamily="Urbanist, sans-serif" opacity="0.45">Score ≥ 70</text>
                <text x={65} y={thresholdY - 4} fill="#333333" fontSize="8.5" fontWeight="700" fontFamily="Urbanist, sans-serif" opacity="0.45">Signal ≥ 65</text>
              </svg>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "12,847", label: "Encounters Scored" },
                { value: "1,422",  label: "In Qualified Zone" },
                { value: "93.1",   label: "Avg Score (Qualified)" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "#FFFFFF", border: "1px solid #E0E0E0" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#333333" }} />
                  <div>
                    <div className="text-sm font-black" style={{ color: "#111111" }}>{value}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
