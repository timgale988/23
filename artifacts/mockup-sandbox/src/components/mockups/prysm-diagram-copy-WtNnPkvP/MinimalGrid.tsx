const INPUTS = [
  { name: "Epic EMR", desc: "FHIR encounter ingestion" },
  { name: "Windfall Wealth", desc: "Net worth & capacity data" },
  { name: "DonorSearch", desc: "Philanthropic history & giving" },
  { name: "Clinical Encounters", desc: "70,000+ physician panels" },
];

const OUTPUTS = [
  { name: "Blackbaud CRM", desc: "Qualified prospect push" },
  { name: "Salesforce NPSP", desc: "Native SF integration" },
  { name: "Gift Officer Queue", desc: "Daily prioritized lists" },
  { name: "ROI & Analytics", desc: "Pipeline & gift reporting" },
];

const CAPS = [
  "AI Prospect Scoring",
  "Automation-First Workflows",
  "HIPAA-Compliant CTI Calling",
  "Clinician Engagement & Referrals",
  "Wealth Intelligence Integration",
  "Real-Time Dashboards",
  "Geolocation Mapping",
  "Daily Patient Prioritization",
];

export function MinimalGrid() {
  return (
    <div style={{
      fontFamily: "'Urbanist', system-ui, sans-serif",
      background: "white",
      minHeight: "560px",
      display: "grid",
      gridTemplateColumns: "1fr 1px 1.2fr 1px 1fr",
    }}>

      {/* LEFT — Inputs */}
      <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#7C3AED", textTransform: "uppercase", marginBottom: "24px" }}>Data Inputs</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {INPUTS.map((item, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: i < INPUTS.length - 1 ? "1px solid #E8ECF2" : "none" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#0A0E1A", letterSpacing: "0.3px", marginBottom: "3px", textTransform: "uppercase" }}>{item.name}</div>
              <div style={{ fontSize: "11px", color: "#9AA3B2" }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: "24px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, color: "#7C3AED", letterSpacing: "1px" }}>→ Continuously ingested</div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ background: "#E8ECF2" }} />

      {/* CENTER — Prysm */}
      <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", alignItems: "center", background: "#F7F8FC" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: "#9AA3B2", textTransform: "uppercase", marginBottom: "12px" }}>Platform</div>
          <div style={{
            fontSize: "40px",
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "#0A0E1A",
            lineHeight: 1,
            marginBottom: "4px",
          }}>PRYSM</div>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: "#2563EB", textTransform: "uppercase" }}>Purpose Built</div>
          <div style={{ height: "2px", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", marginTop: "16px", width: "100%" }} />
        </div>

        <div style={{ width: "100%", marginBottom: "auto" }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: "#9AA3B2", textTransform: "uppercase", marginBottom: "12px" }}>Core Capabilities</div>
          {CAPS.map((cap, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", borderBottom: i < CAPS.length - 1 ? "1px solid #E8ECF2" : "none" }}>
              <div style={{
                fontSize: "8px",
                fontWeight: 800,
                color: "white",
                background: i < 3 ? "#7C3AED" : i < 6 ? "#2563EB" : "#06B6D4",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontSize: "10.5px", fontWeight: 600, color: "#0A0E1A" }}>{cap}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ background: "#E8ECF2" }} />

      {/* RIGHT — Outputs */}
      <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "#06B6D4", textTransform: "uppercase", marginBottom: "24px", textAlign: "right" }}>Outputs</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {OUTPUTS.map((item, i) => (
            <div key={i} style={{ padding: "16px 0", borderBottom: i < OUTPUTS.length - 1 ? "1px solid #E8ECF2" : "none", textAlign: "right" }}>
              <div style={{ fontSize: "11px", fontWeight: 800, color: "#0A0E1A", letterSpacing: "0.3px", marginBottom: "3px", textTransform: "uppercase" }}>{item.name}</div>
              <div style={{ fontSize: "11px", color: "#9AA3B2" }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: "24px", textAlign: "right" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, color: "#06B6D4", letterSpacing: "1px" }}>Qualified & enriched →</div>
        </div>
      </div>

    </div>
  );
}
