const STATS = [
  { val: "305%", label: "Increase in first-time major gifts", color: "#7C3AED" },
  { val: "$4.32M", label: "Realized revenue, year one", color: "#2563EB" },
  { val: "461", label: "Qualified prospects from 3,098 patients", color: "#06B6D4" },
];

const PROOF_ROWS = [
  { label: "Health system", value: "Providence Health South Division" },
  { label: "Ministries deployed", value: "9 California hospitals" },
  { label: "Pipeline identified", value: "$46.1 billion net worth" },
  { label: "Deployment period", value: "2021 – 2025" },
  { label: "Platform", value: "Prysm — Grateful Patient Intelligence" },
];

export function ProofLed() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A", minHeight: "800px", color: "white" }}>
      {/* Nav */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ fontSize: "13px", fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase" }}>
          Actionable Insight <span style={{ color: "#7C3AED" }}>AI</span>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Prysm", "Aperion", "Results", "About"].map(l => (
            <span key={l} style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>

      {/* Proof strip */}
      <div style={{ padding: "64px 48px 0" }}>
        <div style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "40px" }}>
          — Verified client outcome · Providence Health South Division · 2021–2025
        </div>

        {/* Giant stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", borderTop: "1px solid rgba(255,255,255,0.08)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
          {STATS.map(({ val, label, color }, i) => (
            <div key={i} style={{ padding: "40px 36px", borderRight: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontSize: "clamp(48px,5vw,80px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", color, marginBottom: "12px" }}>{val}</div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Headline below stats */}
      <div style={{ padding: "48px 48px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
          <div>
            <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-1.5px", textTransform: "uppercase", margin: "0 0 20px" }}>
              This is what{" "}
              <span style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                grateful patient intelligence
              </span>{" "}
              looks like.
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "420px" }}>
              Actionable Insight AI builds purpose-built intelligence platforms for nonprofit health system philanthropy — connecting clinical data to major gift outcomes at a scale no other platform achieves.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button style={{ padding: "12px 28px", background: "linear-gradient(90deg,#7C3AED,#2563EB)", border: "none", color: "white", fontSize: "10px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}>
                See Full Case Study
              </button>
              <button style={{ padding: "12px 28px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontSize: "10px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}>
                Explore Platforms
              </button>
            </div>
          </div>

          {/* Evidence table */}
          <div style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {PROOF_ROWS.map(({ label, value }, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < PROOF_ROWS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>{label}</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.8)", textAlign: "right" }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
