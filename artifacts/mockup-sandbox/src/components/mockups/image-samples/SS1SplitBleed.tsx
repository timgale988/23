// SS1 — Split-Screen Bleed
// Hypothesis: The product sells itself. No browser chrome, no framing — the actual
// interface bleeds edge-to-edge on the right. Copy on left. Confidence, not explanation.

export function SS1SplitBleed() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A", minHeight: "660px", display: "grid", gridTemplateColumns: "1fr 1.2fr", overflow: "hidden" }}>

      {/* LEFT — Copy */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ width: "32px", height: "1px", background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
          <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>Prysm · Salesforce Native</span>
        </div>

        <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.93, color: "white", letterSpacing: "-1px", margin: "0 0 20px" }}>
          THE PLATFORM<br />YOUR TEAM<br />
          <span style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ALREADY KNOWS.</span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "13px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "340px" }}>
          Prysm lives inside Salesforce Health Cloud. Your gift officers see grateful patient data exactly where they already work — no new logins, no exports, no switching tools.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0", border: "1px solid rgba(255,255,255,0.07)", marginBottom: "32px" }}>
          {["Native Salesforce Health Cloud", "Epic FHIR — live encounter sync", "Blackbaud CRM integration", "HIPAA-compliant by design"].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: i < 2 ? "#7C3AED" : "#06B6D4", flexShrink: 0 }} />
              <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.65)", letterSpacing: "0.3px" }}>{item}</span>
            </div>
          ))}
        </div>

        <button style={{ padding: "13px 28px", background: "linear-gradient(90deg,#7C3AED,#2563EB)", border: "none", color: "white", fontSize: "10px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", cursor: "pointer", alignSelf: "flex-start" }}>
          Request a Demo
        </button>
      </div>

      {/* RIGHT — Full-bleed screenshot, no chrome */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/__mockup/images/dashboard-home.jpeg"
          alt="Prysm in Salesforce"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }}
        />
        {/* Left edge gradient fade into navy */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0E1A 0%, transparent 20%)" }} />
        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to top, #0A0E1A 0%, transparent 100%)" }} />

        {/* Floating stat pill */}
        <div style={{ position: "absolute", top: "32px", right: "24px", background: "rgba(10,14,26,0.88)", border: "1px solid rgba(124,58,237,0.4)", padding: "12px 18px", backdropFilter: "blur(12px)" }}>
          <div style={{ fontSize: "22px", fontWeight: 900, color: "#7C3AED", lineHeight: 1 }}>461</div>
          <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "3px" }}>Qualified Prospects</div>
        </div>
      </div>
    </div>
  );
}
