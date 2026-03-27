// SS2 — Feature Callout Overlay
// Hypothesis: Annotation is education. The screenshot itself is the canvas — callout boxes
// point directly to key interface elements. Shows what matters without requiring a live demo.

const CALLOUTS = [
  { x: "12%", y: "22%", line: "to right", label: "Patient model score", sub: "AI-ranked 0–100", color: "#7C3AED" },
  { x: "55%", y: "14%", line: "down", label: "Physician referral attribution", sub: "Linked to encounter", color: "#2563EB" },
  { x: "75%", y: "60%", line: "to left", label: "Gift capacity range", sub: "$50K – $500K+", color: "#06B6D4" },
];

export function SS2CalloutOverlay() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: "#0D1117", minHeight: "660px", display: "flex", flexDirection: "column", padding: "40px 48px" }}>

      <div style={{ marginBottom: "28px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#7C3AED", fontWeight: 800 }}>— What you see inside Prysm</span>
          <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "white", marginTop: "8px", letterSpacing: "-0.5px" }}>
            Every signal.<br />
            <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One screen.</span>
          </h2>
        </div>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", maxWidth: "260px", lineHeight: 1.6, textAlign: "right" }}>
          Gift officers see patient model score, wealth capacity, physician referral, and contact history in a single unified record.
        </p>
      </div>

      {/* Screenshot with callouts */}
      <div style={{ position: "relative", flex: 1 }}>
        {/* Browser shell */}
        <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #1e2a45" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 14px", background: "#161B27", borderBottom: "1px solid #1e2a45" }}>
            {["#ef4444","#eab308","#22c55e"].map((c, i) => <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c, opacity: 0.7 }} />)}
            <div style={{ marginLeft: "12px", fontSize: "10px", color: "#6b7280", background: "#0D1117", padding: "3px 14px", borderRadius: "4px" }}>Grateful Patients · Patient Record</div>
          </div>
          <div style={{ position: "relative" }}>
            <img src="/__mockup/images/crm-patient-record.png" alt="Patient record" style={{ width: "100%", display: "block", maxHeight: "400px", objectFit: "cover", objectPosition: "top" }} />

            {/* Callout: Patient score — left side */}
            <div style={{ position: "absolute", top: "15%", left: "2%", display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ background: "rgba(10,14,26,0.92)", border: "1px solid #7C3AED", padding: "8px 12px", backdropFilter: "blur(8px)", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: "9px", fontWeight: 800, color: "#7C3AED", letterSpacing: "2px", textTransform: "uppercase" }}>Model Score</div>
                <div style={{ fontSize: "18px", fontWeight: 900, color: "white", lineHeight: 1.1 }}>85.0</div>
                <div style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.4)" }}>AI prospect rank</div>
              </div>
              <div style={{ width: "40px", height: "1px", background: "#7C3AED", opacity: 0.7 }} />
            </div>

            {/* Callout: Capacity — right side */}
            <div style={{ position: "absolute", top: "12%", right: "2%", display: "flex", alignItems: "center", gap: "8px", flexDirection: "row-reverse" }}>
              <div style={{ background: "rgba(10,14,26,0.92)", border: "1px solid #06B6D4", padding: "8px 12px", backdropFilter: "blur(8px)", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: "9px", fontWeight: 800, color: "#06B6D4", letterSpacing: "2px", textTransform: "uppercase" }}>Gift Capacity</div>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "white", lineHeight: 1.1 }}>$5M+</div>
                <div style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.4)" }}>Windfall wealth data</div>
              </div>
              <div style={{ width: "40px", height: "1px", background: "#06B6D4", opacity: 0.7 }} />
            </div>

            {/* Callout: Physician referral — bottom */}
            <div style={{ position: "absolute", bottom: "10%", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <div style={{ width: "1px", height: "30px", background: "#2563EB", opacity: 0.7 }} />
              <div style={{ background: "rgba(10,14,26,0.92)", border: "1px solid #2563EB", padding: "8px 14px", backdropFilter: "blur(8px)", whiteSpace: "nowrap" }}>
                <div style={{ fontSize: "9px", fontWeight: 800, color: "#2563EB", letterSpacing: "2px", textTransform: "uppercase" }}>Physician Referral</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.3 }}>Smith, John · Internal Med</div>
                <div style={{ fontSize: "8.5px", color: "rgba(255,255,255,0.4)" }}>Attributed from encounter data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
