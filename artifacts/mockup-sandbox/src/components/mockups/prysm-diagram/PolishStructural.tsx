// Polish A — Structural Clarity
// Same dark V3 direction. Fixes: terminal dots at card ends, external section labels,
// wider hub with more breathing room, stronger capability hierarchy.

const INPUTS = [
  { label: "EPIC EMR", sub: "FHIR encounter ingestion" },
  { label: "WINDFALL WEALTH", sub: "Net worth & capacity data" },
  { label: "DONORSEARCH", sub: "Philanthropic history" },
  { label: "CLINICAL ENCOUNTERS", sub: "70K+ physician panels" },
];
const OUTPUTS = [
  { label: "BLACKBAUD CRM", sub: "Qualified prospect push" },
  { label: "SALESFORCE NPSP", sub: "Native SF integration" },
  { label: "GIFT OFFICER QUEUE", sub: "Daily prioritized lists" },
  { label: "ROI & ANALYTICS", sub: "Pipeline & gift reporting" },
];
const CAPABILITIES = [
  "AI Prospect Scoring & Wealth Intelligence",
  "Automation-First Patient Workflows",
  "HIPAA-Compliant CTI Outreach",
  "Clinician Referral Attribution",
  "Real-Time Gift Officer Dashboards",
  "Geolocation & Physician Panel Mapping",
];

const CARD_H = 56;
const CARD_GAP = 10;
const N = 4;
const TOTAL_H = N * CARD_H + (N - 1) * CARD_GAP;
const SVG_H = 340;
const TOP = (SVG_H - TOTAL_H) / 2;
const CENTERS = Array.from({ length: N }, (_, i) => TOP + i * (CARD_H + CARD_GAP) + CARD_H / 2);
const MID = SVG_H / 2;

export function PolishStructural() {
  return (
    <div style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: "#0A0E1A", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
      <div style={{ width: "100%", maxWidth: "960px" }}>

        {/* Section labels row above the grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", marginBottom: "12px" }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#7C3AED", textTransform: "uppercase" }}>Data Inputs</div>
          <div style={{ width: "264px" }} />
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#06B6D4", textTransform: "uppercase", textAlign: "right" }}>Outputs</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>

          {/* LEFT */}
          <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
            {INPUTS.map((item, i) => (
              <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.2)", borderLeft: "3px solid #7C3AED", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3px" }}>
                <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.88)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{item.label}</div>
                <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>{item.sub}</div>
              </div>
            ))}
          </div>

          {/* CENTER with terminal dots */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 32px" }}>
            <svg width="64" height={SVG_H} style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
              <defs>
                <linearGradient id="psgl" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.75" />
                </linearGradient>
              </defs>
              {CENTERS.map((y, i) => (
                <g key={i}>
                  <line x1="4" y1={y} x2="64" y2={MID} stroke="url(#psgl)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <circle cx="2" cy={y} r="2.5" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.7" />
                </g>
              ))}
            </svg>

            <div style={{ width: "210px", position: "relative" }}>
              <div style={{ position: "absolute", inset: "-2px", background: "linear-gradient(155deg, #7C3AED, #2563EB, #06B6D4)" }} />
              <div style={{ position: "absolute", inset: "0", background: "#0D1221" }} />
              <div style={{ position: "relative", padding: "26px 22px" }}>
                <div style={{ fontSize: "24px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "3px" }}>PRYSM</div>
                <div style={{ fontSize: "7.5px", fontWeight: 700, color: "#06B6D4", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>PURPOSE BUILT</div>
                <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg,#7C3AED,#06B6D4)", marginBottom: "14px" }} />
                {CAPABILITIES.map((cap, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "7px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4", boxShadow: `0 0 5px ${i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4"}`, marginTop: "4px", flexShrink: 0 }} />
                    <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.75)", lineHeight: 1.4, fontWeight: 500 }}>{cap}</div>
                  </div>
                ))}
              </div>
            </div>

            <svg width="64" height={SVG_H} style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
              <defs>
                <linearGradient id="psgr" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {CENTERS.map((y, i) => (
                <g key={i}>
                  <line x1="0" y1={MID} x2="60" y2={y} stroke="url(#psgr)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <circle cx="62" cy={y} r="2.5" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.7" />
                </g>
              ))}
            </svg>
          </div>

          {/* RIGHT */}
          <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
            {OUTPUTS.map((item, i) => (
              <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.2)", borderRight: "3px solid #06B6D4", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "3px" }}>
                <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.88)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{item.label}</div>
                <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.35)", fontWeight: 400 }}>{item.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
