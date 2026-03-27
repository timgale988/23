// Vibe 1 — Corporate Schematic
// Emotion: Trusted, institutional, enterprise-grade.
// Formal ruled lines, monochromatic with single violet accent, feels like technical documentation.

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

const CARD_H = 54;
const CARD_GAP = 10;
const N = 4;
const TOTAL_H = N * CARD_H + (N - 1) * CARD_GAP;
const SVG_H = 340;
const TOP = (SVG_H - TOTAL_H) / 2;
const CENTERS = Array.from({ length: N }, (_, i) => TOP + i * (CARD_H + CARD_GAP) + CARD_H / 2);
const MID = SVG_H / 2;

export function VibeCorpSchematic() {
  return (
    <div style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: "#F8F9FB", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}>
      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3.5px", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "8px" }}>Data Inputs</div>
          {INPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "white", border: "1px solid #E5E7EB", borderLeft: "2px solid #1D1D2E", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3px" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 800, color: "#1D1D2E", letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "#9CA3AF", fontWeight: 500 }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 32px" }}>
          <svg width="64" height={SVG_H} style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={y} x2="64" y2={MID} stroke="#D1D5DB" strokeWidth="1" />
            ))}
          </svg>

          <div style={{ width: "200px", position: "relative" }}>
            {/* Single top accent */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#7C3AED" }} />
            <div style={{ background: "white", border: "1px solid #E5E7EB", borderTop: "none", padding: "24px 20px" }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "#1D1D2E", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "2px" }}>PRYSM</div>
              <div style={{ fontSize: "7px", fontWeight: 700, color: "#7C3AED", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>PURPOSE BUILT</div>
              <div style={{ width: "100%", height: "1px", background: "#E5E7EB", marginBottom: "12px" }} />
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                  <div style={{ width: "4px", height: "4px", background: i < 2 ? "#7C3AED" : "#9CA3AF", marginTop: "4px", flexShrink: 0 }} />
                  <div style={{ fontSize: "9.5px", color: "#374151", lineHeight: 1.4, fontWeight: 500 }}>{cap}</div>
                </div>
              ))}
            </div>
          </div>

          <svg width="64" height={SVG_H} style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            {CENTERS.map((y, i) => (
              <line key={i} x1="0" y1={MID} x2="64" y2={y} stroke="#D1D5DB" strokeWidth="1" />
            ))}
          </svg>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3.5px", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "8px", textAlign: "right" }}>Outputs</div>
          {OUTPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: "white", border: "1px solid #E5E7EB", borderRight: "2px solid #1D1D2E", padding: "0 16px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "3px" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 800, color: "#1D1D2E", letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ fontSize: "9.5px", color: "#9CA3AF", fontWeight: 500 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
