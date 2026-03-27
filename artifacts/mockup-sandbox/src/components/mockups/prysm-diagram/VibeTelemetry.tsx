// Vibe 3 — Terminal / Telemetry
// Emotion: Live system, real-time data, infrastructure-grade.
// Near-black with subtle scan lines, phosphor green mixed with cyan, dense and data-forward.

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

const GREEN = "#22C55E";
const CYAN = "#06B6D4";
const BG = "#060912";
const CARD_BG = "#0B1120";

export function VibeTelemetry() {
  return (
    <div style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: BG, minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px", position: "relative", overflow: "hidden" }}>
      {/* Scan line overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,100,0.012) 2px, rgba(0,255,100,0.012) 4px)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", position: "relative" }}>

        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3.5px", color: GREEN, textTransform: "uppercase", marginBottom: "8px" }}>▸ DATA IN</div>
          {INPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: CARD_BG, border: `1px solid rgba(34,197,94,0.18)`, borderLeft: `2px solid ${GREEN}`, padding: "0 14px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3px" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 800, color: "rgba(34,197,94,0.9)", letterSpacing: "1.2px", textTransform: "uppercase", fontVariantNumeric: "tabular-nums" }}>{item.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", fontWeight: 400, letterSpacing: "0.3px" }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 32px" }}>
          <svg width="64" height={SVG_H} style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="tgl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={GREEN} stopOpacity="0.08" />
                <stop offset="100%" stopColor={GREEN} stopOpacity="0.55" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <g key={i}>
                <line x1="0" y1={y} x2="64" y2={MID} stroke="url(#tgl)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy={y} r="2" fill={GREEN} opacity="0.5" />
              </g>
            ))}
            <circle cx="64" cy={MID} r="3" fill={GREEN} opacity="0.4" />
          </svg>

          <div style={{ width: "200px", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-1px", background: `linear-gradient(160deg, ${GREEN}44, ${CYAN}44)` }} />
            <div style={{ position: "absolute", inset: "0", background: "#060D1C" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,100,0.018) 3px, rgba(0,255,100,0.018) 6px)", pointerEvents: "none" }} />
            <div style={{ position: "relative", padding: "24px 18px" }}>
              <div style={{ fontSize: "10px", fontWeight: 700, color: GREEN, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "4px" }}>SYS::PRYSM</div>
              <div style={{ fontSize: "7px", fontWeight: 600, color: "rgba(6,182,212,0.7)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "14px" }}>PLATFORM ACTIVE</div>
              <div style={{ width: "100%", height: "1px", background: `linear-gradient(90deg,${GREEN},${CYAN})`, marginBottom: "12px", opacity: 0.4 }} />
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "5px" }}>
                  <span style={{ fontSize: "8px", color: i < 2 ? GREEN : i < 4 ? CYAN : "rgba(34,197,94,0.5)", marginTop: "2px", flexShrink: 0 }}>›</span>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", lineHeight: 1.4, fontWeight: 500, letterSpacing: "0.2px" }}>{cap}</div>
                </div>
              ))}
            </div>
          </div>

          <svg width="64" height={SVG_H} style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox={`0 0 64 ${SVG_H}`}>
            <defs>
              <linearGradient id="tgr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={CYAN} stopOpacity="0.55" />
                <stop offset="100%" stopColor={CYAN} stopOpacity="0.08" />
              </linearGradient>
            </defs>
            {CENTERS.map((y, i) => (
              <g key={i}>
                <line x1="0" y1={MID} x2="64" y2={y} stroke="url(#tgr)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="64" cy={y} r="2" fill={CYAN} opacity="0.5" />
              </g>
            ))}
            <circle cx="0" cy={MID} r="3" fill={CYAN} opacity="0.4" />
          </svg>
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3.5px", color: CYAN, textTransform: "uppercase", marginBottom: "8px", textAlign: "right" }}>DATA OUT ◂</div>
          {OUTPUTS.map((item, i) => (
            <div key={i} style={{ height: `${CARD_H}px`, boxSizing: "border-box", background: CARD_BG, border: `1px solid rgba(6,182,212,0.18)`, borderRight: `2px solid ${CYAN}`, padding: "0 14px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "3px" }}>
              <div style={{ fontSize: "9.5px", fontWeight: 800, color: "rgba(6,182,212,0.9)", letterSpacing: "1.2px", textTransform: "uppercase" }}>{item.label}</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
