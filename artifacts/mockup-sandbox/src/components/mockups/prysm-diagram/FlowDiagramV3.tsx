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
const TOP_OFFSET = (SVG_H - TOTAL_H) / 2;
const CARD_CENTERS = Array.from({ length: N }, (_, i) => TOP_OFFSET + i * (CARD_H + CARD_GAP) + CARD_H / 2);
const HUB_Y = SVG_H / 2;

export function FlowDiagramV3() {
  return (
    <div
      style={{
        fontFamily: "'Urbanist', system-ui, sans-serif",
        background: "#0A0E1A",
        minHeight: "560px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 32px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "0",
          alignItems: "center",
        }}
      >
        {/* LEFT — INPUTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div
            style={{
              fontSize: "9px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#7C3AED",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Data Inputs
          </div>
          {INPUTS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(124,58,237,0.07)",
                border: "1px solid rgba(124,58,237,0.22)",
                borderLeft: "3px solid #7C3AED",
                padding: "14px 16px",
                height: `${CARD_H}px`,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "3px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.8px",
                }}
              >
                {item.label}
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* CENTER — CONNECTOR + HUB */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "0 28px" }}>
          {/* Left connectors */}
          <svg
            width="60"
            height={SVG_H}
            style={{ position: "absolute", left: "-30px", top: "50%", transform: "translateY(-50%)" }}
            viewBox={`0 0 60 ${SVG_H}`}
          >
            <defs>
              <linearGradient id="v3gl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            {CARD_CENTERS.map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={y}
                x2="60"
                y2={HUB_Y}
                stroke="url(#v3gl)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              />
            ))}
          </svg>

          {/* Hub */}
          <div style={{ position: "relative", width: "200px" }}>
            {/* Outer glow layer */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                background: "linear-gradient(160deg, rgba(124,58,237,0.3), rgba(37,99,235,0.2), rgba(6,182,212,0.25))",
                filter: "blur(12px)",
                zIndex: 0,
              }}
            />
            {/* Gradient border */}
            <div
              style={{
                position: "absolute",
                inset: "-2px",
                background: "linear-gradient(160deg, #7C3AED, #2563EB, #06B6D4)",
                zIndex: 1,
              }}
            />
            {/* Dark fill */}
            <div
              style={{
                position: "absolute",
                inset: "0",
                background: "#0D1221",
                zIndex: 2,
              }}
            />
            <div style={{ position: "relative", zIndex: 3, padding: "26px 20px" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-0.5px",
                  lineHeight: 1,
                  marginBottom: "3px",
                }}
              >
                PRYSM
              </div>
              <div
                style={{
                  fontSize: "7.5px",
                  fontWeight: 700,
                  color: "#06B6D4",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                PURPOSE BUILT
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
                  marginBottom: "12px",
                }}
              />
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "7px",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background:
                        i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4",
                      marginTop: "4px",
                      flexShrink: 0,
                      boxShadow:
                        i < 2
                          ? "0 0 4px #7C3AED"
                          : i < 4
                          ? "0 0 4px #2563EB"
                          : "0 0 4px #06B6D4",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "9.5px",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.4,
                      fontWeight: 600,
                    }}
                  >
                    {cap}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right connectors */}
          <svg
            width="60"
            height={SVG_H}
            style={{ position: "absolute", right: "-30px", top: "50%", transform: "translateY(-50%)" }}
            viewBox={`0 0 60 ${SVG_H}`}
          >
            <defs>
              <linearGradient id="v3gr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {CARD_CENTERS.map((y, i) => (
              <line
                key={i}
                x1="0"
                y1={HUB_Y}
                x2="60"
                y2={y}
                stroke="url(#v3gr)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              />
            ))}
          </svg>
        </div>

        {/* RIGHT — OUTPUTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: `${CARD_GAP}px` }}>
          <div
            style={{
              fontSize: "9px",
              fontWeight: 800,
              letterSpacing: "3px",
              color: "#06B6D4",
              textTransform: "uppercase",
              marginBottom: "8px",
              textAlign: "right",
            }}
          >
            Outputs
          </div>
          {OUTPUTS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(6,182,212,0.07)",
                border: "1px solid rgba(6,182,212,0.22)",
                borderRight: "3px solid #06B6D4",
                padding: "14px 16px",
                height: `${CARD_H}px`,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "3px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.8px",
                  textAlign: "right",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.38)",
                  fontWeight: 500,
                  textAlign: "right",
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
