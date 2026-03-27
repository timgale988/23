// Polish B — Depth & Presence
// Same dark V3 direction. Fixes: layered card depth with inset shadow, thicker connector
// lines with soft glow, grain texture on background, hub border feels like lit neon.

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

export function PolishDepth() {
  return (
    <div style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: "#080C18", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px", position: "relative", overflow: "hidden" }}>

      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", top: "10%", left: "20%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "20%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", position: "relative" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#7C3AED", textTransform: "uppercase", marginBottom: "8px" }}>Data Inputs</div>
          {INPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(124,58,237,0.04) 100%)", border: "1px solid rgba(124,58,237,0.25)", borderLeft: "3px solid #7C3AED", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 8px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.32)", fontWeight: 400 }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 32px" }}>
          <svg width="64" height={SVG_H} style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)", filter: "drop-shadow(0 0 3px rgba(124,58,237,0.5))" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="dpgl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={y} x2="64" y2={MID} stroke="url(#dpgl)" strokeWidth="2" strokeDasharray="5 4" />
            ))}
          </svg>

          <div style={{ width: "210px", position: "relative" }}>
            {/* Multi-layer neon border effect */}
            <div style={{ position: "absolute", inset: "-6px", background: "linear-gradient(155deg, rgba(124,58,237,0.35), rgba(6,182,212,0.3))", filter: "blur(8px)" }} />
            <div style={{ position: "absolute", inset: "-2px", background: "linear-gradient(155deg, #7C3AED, #2563EB, #06B6D4)" }} />
            <div style={{ position: "absolute", inset: "0", background: "#0D1221", boxShadow: "inset 0 0 20px rgba(0,0,0,0.6)" }} />
            <div style={{ position: "relative", padding: "26px 22px" }}>
              <div style={{ fontSize: "24px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "3px", textShadow: "0 0 20px rgba(124,58,237,0.4)" }}>PRYSM</div>
              <div style={{ fontSize: "7.5px", fontWeight: 700, color: "#06B6D4", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>PURPOSE BUILT</div>
              <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg,#7C3AED,#06B6D4)", marginBottom: "14px", boxShadow: "0 0 6px rgba(124,58,237,0.5)" }} />
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "7px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4", boxShadow: `0 0 6px ${i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4"}`, marginTop: "4px", flexShrink: 0 }} />
                  <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.72)", lineHeight: 1.4, fontWeight: 500 }}>{cap}</div>
                </div>
              ))}
            </div>
          </div>

          <svg width="64" height={SVG_H} style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)", filter: "drop-shadow(0 0 3px rgba(6,182,212,0.5))" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="dpgr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={MID} x2="64" y2={y} stroke="url(#dpgr)" strokeWidth="2" strokeDasharray="5 4" />
            ))}
          </svg>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#06B6D4", textTransform: "uppercase", marginBottom: "8px", textAlign: "right" }}>Outputs</div>
          {OUTPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "linear-gradient(135deg, rgba(6,182,212,0.04) 0%, rgba(6,182,212,0.1) 100%)", border: "1px solid rgba(6,182,212,0.25)", borderRight: "3px solid #06B6D4", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "3px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 8px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "0.8px", textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.32)", fontWeight: 400 }}>{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
