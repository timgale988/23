// SS3 — Sequential Pipeline Gallery
// Hypothesis: The product is a workflow, not a tool. Show the journey across 4 stages
// with a screenshot + stage label for each. The homepage section becomes a story arc.

const STAGES = [
  {
    num: "01",
    label: "Identify",
    desc: "EMR data surfaces patients with high gratitude signals and gift capacity",
    color: "#7C3AED",
    img: "/__mockup/images/dashboard-home.jpeg",
  },
  {
    num: "02",
    label: "Qualify",
    desc: "AI model scores each patient across 40+ philanthropic indicators",
    color: "#2563EB",
    img: "/__mockup/images/dashboard-patient-engagement.png",
  },
  {
    num: "03",
    label: "Engage",
    desc: "Gift officers receive prioritized daily call lists with AI briefings",
    color: "#0EA5E9",
    img: "/__mockup/images/crm-patient-record.png",
  },
  {
    num: "04",
    label: "Convert",
    desc: "Physician referrals and relationship data close the gift loop",
    color: "#06B6D4",
    img: "/__mockup/images/mobile-clinician-referrals.png",
  },
];

export function SS3PipelineGallery() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A", minHeight: "660px", display: "flex", flexDirection: "column", padding: "48px 48px 40px" }}>

      <div style={{ marginBottom: "36px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#7C3AED", fontWeight: 800 }}>— The Grateful Patient Pipeline</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.93, color: "white", marginTop: "8px", letterSpacing: "-0.5px" }}>
            Four stages.<br />
            <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One system.</span>
          </h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {STAGES.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color }} />
              {i < STAGES.length - 1 && <div style={{ width: "24px", height: "1px", background: `linear-gradient(90deg, ${s.color}, ${STAGES[i+1].color})`, opacity: 0.5 }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Stage cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", flex: 1 }}>
        {STAGES.map((stage, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
            {/* Top accent */}
            <div style={{ height: "3px", background: stage.color }} />

            {/* Screenshot thumbnail */}
            <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: "180px" }}>
              <img
                src={stage.img}
                alt={stage.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 40%, rgba(10,14,26,0.95) 100%)` }} />
              <div style={{ position: "absolute", top: "10px", left: "10px", width: "24px", height: "24px", borderRadius: "50%", background: stage.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "8px", fontWeight: 900, color: "white" }}>{stage.num}</span>
              </div>
            </div>

            {/* Label + description */}
            <div style={{ padding: "14px 14px 16px", background: "#0D1221" }}>
              <div style={{ fontSize: "13px", fontWeight: 900, color: "white", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{stage.label}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", lineHeight: 1.5 }}>{stage.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
