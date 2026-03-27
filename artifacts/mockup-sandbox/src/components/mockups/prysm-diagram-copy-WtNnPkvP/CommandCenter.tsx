const SOURCES = ["EPIC EMR", "WINDFALL WEALTH", "DONORSEARCH", "CLINICAL DATA"];
const DESTINATIONS = ["BLACKBAUD CRM", "SALESFORCE NPSP", "GIFT OFFICER QUEUE", "ROI ANALYTICS"];

const CAPS = [
  { icon: "⬡", label: "AI Prospect Scoring", color: "#A78BFA" },
  { icon: "⚡", label: "Automation-First", color: "#60A5FA" },
  { icon: "☎", label: "CTI Outreach", color: "#38BDF8" },
  { icon: "⊕", label: "Clinician Referrals", color: "#34D399" },
  { icon: "◈", label: "Wealth Intelligence", color: "#818CF8" },
  { icon: "◎", label: "Real-Time Analytics", color: "#06B6D4" },
  { icon: "◉", label: "HIPAA Compliance", color: "#4ADE80" },
  { icon: "⌖", label: "Geolocation Mapping", color: "#38BDF8" },
];

export function CommandCenter() {
  return (
    <div style={{
      fontFamily: "'Urbanist', system-ui, sans-serif",
      background: "#0A0E1A",
      minHeight: "560px",
      display: "flex",
      flexDirection: "column",
      padding: "36px 40px",
    }}>

      {/* Top — Data Sources */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
        <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: "rgba(124,58,237,0.6)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Data In</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(124,58,237,0.3), transparent)" }} />
        <div style={{ display: "flex", gap: "8px" }}>
          {SOURCES.map((s, i) => (
            <div key={i} style={{
              border: "1px solid rgba(124,58,237,0.35)",
              padding: "5px 12px",
              fontSize: "8.5px",
              fontWeight: 700,
              color: "rgba(196,181,253,0.9)",
              letterSpacing: "0.5px",
              background: "rgba(124,58,237,0.07)",
            }}>{s}</div>
          ))}
        </div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3))" }} />
      </div>

      {/* Gradient divider line */}
      <div style={{ height: "1px", background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", marginBottom: "28px", opacity: 0.5 }} />

      {/* Center — Brand + Capabilities */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "4px", color: "rgba(103,232,249,0.6)", textTransform: "uppercase", marginBottom: "8px" }}>Grateful Patient Intelligence Platform</div>
          <div style={{
            fontSize: "52px",
            fontWeight: 900,
            letterSpacing: "-2px",
            lineHeight: 1,
            background: "linear-gradient(135deg, #C4B5FD 0%, #93C5FD 50%, #67E8F9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>PRYSM</div>
        </div>

        {/* 4×2 capability grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", width: "100%", maxWidth: "760px" }}>
          {CAPS.map((cap, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "14px 12px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${cap.color}, transparent)` }} />
              <div style={{ fontSize: "16px", lineHeight: 1, color: cap.color }}>{cap.icon}</div>
              <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.3px", textTransform: "uppercase", lineHeight: 1.3 }}>{cap.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", marginTop: "28px", marginBottom: "20px", opacity: 0.5 }} />

      {/* Bottom — Outputs */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ fontSize: "8px", fontWeight: 800, letterSpacing: "3px", color: "rgba(6,182,212,0.6)", textTransform: "uppercase", whiteSpace: "nowrap" }}>Data Out</div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(6,182,212,0.3), transparent)" }} />
        <div style={{ display: "flex", gap: "8px" }}>
          {DESTINATIONS.map((d, i) => (
            <div key={i} style={{
              border: "1px solid rgba(6,182,212,0.35)",
              padding: "5px 12px",
              fontSize: "8.5px",
              fontWeight: 700,
              color: "rgba(103,232,249,0.9)",
              letterSpacing: "0.5px",
              background: "rgba(6,182,212,0.07)",
            }}>{d}</div>
          ))}
        </div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3))" }} />
      </div>
    </div>
  );
}
