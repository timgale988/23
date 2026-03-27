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

export function PrysmDiagramCopyUTzES3C1() {
  return (
    <div
      style={{ fontFamily: "'Urbanist', system-ui, sans-serif", background: "#F7F8FC", minHeight: "560px", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px" }}
    >
      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0", alignItems: "center" }}>

        {/* LEFT — INPUTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "3px", color: "#7C3AED", textTransform: "uppercase", marginBottom: "6px" }}>Data Inputs</div>
          {INPUTS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid rgba(124,58,237,0.2)",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                borderLeft: "3px solid #7C3AED",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#0A0E1A", letterSpacing: "0.8px" }}>{item.label}</div>
              <div style={{ fontSize: "10px", color: "#6B7A90" }}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* CENTER — PRYSM NODE */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 32px" }}>
          {/* Left connector lines */}
          <svg width="64" height="320" style={{ position: "absolute", left: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox="0 0 64 320">
            {[56, 112, 192, 264].map((y, i) => (
              <line key={i} x1="0" y1={y} x2="64" y2="160" stroke="url(#gl)" strokeWidth="1.5" strokeDasharray="4 4" />
            ))}
            <defs>
              <linearGradient id="gl" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Prysm hub */}
          <div style={{
            background: "#0A0E1A",
            border: "2px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: "0",
            padding: "28px 24px",
            width: "180px",
            position: "relative",
            boxShadow: "0 0 0 2px #0A0E1A, 0 0 0 3.5px transparent",
            outline: "2px solid transparent",
          }}>
            {/* Gradient border via outline trick */}
            <div style={{
              position: "absolute",
              inset: "-2px",
              background: "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
              zIndex: -1,
              borderRadius: "0",
            }} />
            <div style={{
              position: "absolute",
              inset: "0",
              background: "#0A0E1A",
              zIndex: 0,
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "22px", fontWeight: 900, color: "white", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: "4px" }}>PRYSM</div>
              <div style={{ fontSize: "7px", fontWeight: 800, color: "rgba(103,232,249,0.85)", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "16px" }}>PURPOSE BUILT</div>
              <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg,#7C3AED,#06B6D4)", marginBottom: "14px" }} />
              {CAPABILITIES.map((cap, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "5px" }}>
                  <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: i < 2 ? "#7C3AED" : i < 4 ? "#2563EB" : "#06B6D4", marginTop: "4px", flexShrink: 0 }} />
                  <div style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.75)", lineHeight: 1.3, fontWeight: 600 }}>{cap}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right connector lines */}
          <svg width="64" height="320" style={{ position: "absolute", right: "-32px", top: "50%", transform: "translateY(-50%)" }} viewBox="0 0 64 320">
            {[56, 112, 192, 264].map((y, i) => (
              <line key={i} x1="0" y1="160" x2="64" y2={y} stroke="url(#gr)" strokeWidth="1.5" strokeDasharray="4 4" />
            ))}
            <defs>
              <linearGradient id="gr" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* RIGHT — OUTPUTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "3px", color: "#06B6D4", textTransform: "uppercase", marginBottom: "6px", textAlign: "right" }}>Outputs</div>
          {OUTPUTS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid rgba(6,182,212,0.2)",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                borderRight: "3px solid #06B6D4",
              }}
            >
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#0A0E1A", letterSpacing: "0.8px", textAlign: "right" }}>{item.label}</div>
              <div style={{ fontSize: "10px", color: "#6B7A90", textAlign: "right" }}>{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
