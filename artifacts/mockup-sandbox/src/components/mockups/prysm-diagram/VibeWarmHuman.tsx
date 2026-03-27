// Vibe 2 — Warm & Human
// Emotion: Mission-led, approachable, healthcare professionals not engineers.
// Warm off-white, amber-gold accent alongside violet, generous spacing, softer presence.

const INPUTS = [
  { label: "Epic EMR", sub: "FHIR encounter ingestion" },
  { label: "Windfall Wealth", sub: "Net worth & capacity data" },
  { label: "DonorSearch", sub: "Philanthropic history" },
  { label: "Clinical Encounters", sub: "70K+ physician panels" },
];
const OUTPUTS = [
  { label: "Blackbaud CRM", sub: "Qualified prospect push" },
  { label: "Salesforce NPSP", sub: "Native SF integration" },
  { label: "Gift Officer Queue", sub: "Daily prioritized lists" },
  { label: "ROI & Analytics", sub: "Pipeline & gift reporting" },
];
const CAPABILITIES = [
  "AI Prospect Scoring & Wealth Intelligence",
  "Automation-First Patient Workflows",
  "HIPAA-Compliant CTI Outreach",
  "Clinician Referral Attribution",
  "Real-Time Gift Officer Dashboards",
  "Geolocation & Physician Panel Mapping",
];

const CARD_H = 54;
const CARD_GAP = 10;
const N = 4;
const TOTAL_H = N * CARD_H + (N - 1) * CARD_GAP;
const SVG_H = 340;
const TOP = (SVG_H - TOTAL_H) / 2;
const CENTERS = Array.from({ length: N }, (_, i) => TOP + i * (CARD_H + CARD_GAP) + CARD_H / 2);
const MID = SVG_H / 2;

const WARM_BG = "#FDFAF5";
const WARM_AMBER = "#D97706";
const WARM_VIOLET = "#7C3AED";
const CARD_BG = "#FFFDF8";
const BORDER = "#E8DFC8";

export function VibeWarmHuman() {
  return (
    <div style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: WARM_BG, minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: WARM_AMBER, textTransform: "uppercase", marginBottom: "8px" }}>Data Inputs</div>
          {INPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: CARD_BG, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${WARM_AMBER}`, padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3px", borderRadius: "0 4px 4px 0" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#292524" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "#A8A29E", fontWeight: 400 }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 32px" }}>
          <svg width="64" height={SVG_H} style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="wgl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={WARM_AMBER} stopOpacity="0.15" />
                <stop offset="100%" stopColor={WARM_AMBER} stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={y} x2="64" y2={MID} stroke="url(#wgl)" strokeWidth="1.5" strokeDasharray="4 4" />
            ))}
          </svg>

          <div style={{ width: "200px", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-2px", background: `linear-gradient(160deg, ${WARM_AMBER}, ${WARM_VIOLET})`, borderRadius: "6px" }} />
            <div style={{ position: "absolute", inset: "0", background: "#2D1B4E", borderRadius: "4px" }} />
            <div style={{ position: "relative", padding: "24px 20px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "2px" }}>PRYSM</div>
              <div style={{ fontSize: "7px", fontWeight: 700, color: WARM_AMBER, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>PURPOSE BUILT</div>
              <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg, ${WARM_AMBER}, ${WARM_VIOLET})`, marginBottom: "12px" }} />
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "6px" }}>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: i % 2 === 0 ? WARM_AMBER : WARM_VIOLET, marginTop: "4px", flexShrink: 0 }} />
                  <div style={{ fontSize: "9.5px", color: "rgba(255,255,255,0.78)", lineHeight: 1.4, fontWeight: 500 }}>{cap}</div>
                </div>
              ))}
            </div>
          </div>

          <svg width="64" height={SVG_H} style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="wgr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={WARM_VIOLET} stopOpacity="0.6" />
                <stop offset="100%" stopColor={WARM_VIOLET} stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={MID} x2="64" y2={y} stroke="url(#wgr)" strokeWidth="1.5" strokeDasharray="4 4" />
            ))}
          </svg>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: WARM_VIOLET, textTransform: "uppercase", marginBottom: "8px", textAlign: "right" }}>Outputs</div>
          {OUTPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: CARD_BG, border: `1px solid ${BORDER}`, borderRight: `3px solid ${WARM_VIOLET}`, padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "3px", borderRadius: "4px 0 0 4px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#292524" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "#A8A29E", fontWeight: 400 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
