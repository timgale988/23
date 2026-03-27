// SS4 — Evidence Wall
// Hypothesis: Data IS the product. Don't show the interface — show the outcomes.
// The dashboard screenshot is a blurred/tinted background. Key proof numbers
// float over it in large type. The platform disappears; the results take center stage.

const METRICS = [
  { val: "461", label: "Qualified Major Giving Prospects", sub: "from 3,098 patients screened", color: "#7C3AED" },
  { val: "$46.1B", label: "Total Pipeline Net Worth", sub: "across 9 California ministries", color: "#2563EB" },
  { val: "305%", label: "First-Time Major Gift Increase", sub: "Year 1 vs. prior program", color: "#06B6D4" },
  { val: "$4.32M", label: "Realized Philanthropic Revenue", sub: "direct platform attribution", color: "#0EA5E9" },
];

export function SS4EvidenceWall() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", minHeight: "660px", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Blurred dashboard as full background */}
      <img
        src="/__mockup/images/dashboard-patient-engagement.png"
        alt="background"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "blur(3px) brightness(0.2) saturate(1.4)", transform: "scale(1.05)" }}
      />

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,14,26,0.92) 0%, rgba(10,14,26,0.78) 50%, rgba(10,14,26,0.88) 100%)" }} />

      {/* Content */}
      <div style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", padding: "48px 48px 40px" }}>

        <div style={{ marginBottom: "40px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#7C3AED", fontWeight: 800 }}>— Verified Results · Providence Health South Division</span>
          <h2 style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.93, color: "white", marginTop: "10px", letterSpacing: "-1px" }}>
            What the platform<br />
            <span style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>actually delivers.</span>
          </h2>
        </div>

        {/* Evidence metrics in a 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", flex: 1 }}>
          {METRICS.map(({ val, label, sub, color }, i) => (
            <div key={i} style={{ padding: "32px 36px", background: "rgba(10,14,26,0.6)", display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "6px", backdropFilter: "blur(4px)", position: "relative", overflow: "hidden" }}>
              {/* Subtle color wash in corner */}
              <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", borderRadius: "0 0 0 120px", background: color, opacity: 0.06 }} />
              <div style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-2px", color, fontVariantNumeric: "tabular-nums" }}>{val}</div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.85)", textTransform: "uppercase", letterSpacing: "0.5px", lineHeight: 1.3 }}>{label}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", lineHeight: 1.4 }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Bottom citation bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.25)", letterSpacing: "1.5px", textTransform: "uppercase" }}>Providence Health South Division · 9 hospitals · 2021–2025 · Direct platform attribution</span>
          <button style={{ padding: "8px 20px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}>Full Case Study →</button>
        </div>
      </div>
    </div>
  );
}
