/**
 * HomeV1 — Centered Monumental
 * Spatial logic: everything stacks vertically along the center axis.
 * The headline is enormous and occupies full width. Photo is framed below it
 * in a contained 16:9 panel. Products are compact text-only cards side by side.
 * CTA collapses to a single centered column with stats as horizontal pills.
 */

const IMG = "https://237b3716-93f0-41a8-973d-2826f2b6c12d-00-3om2vrv1f62me.kirk.replit.dev/__mockup/images/person-phone.png";

export default function HomeV1Centered() {
  return (
    <div style={{ fontFamily: "'Urbanist', 'Inter', sans-serif", background: "#0A0E1A", color: "#fff", overflowX: "hidden" }}>

      {/* ── Nav stub ── */}
      <nav style={{ display: "flex", justifyContent: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>Actionable Insight AI</span>
      </nav>

      {/* ── Hero — full-width centered ── */}
      <section style={{ padding: "80px 40px 0", textAlign: "center", position: "relative" }}>
        {/* Glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>Healthcare Philanthropy Intelligence</span>
          <div style={{ width: 32, height: 1, background: "rgba(255,255,255,0.2)" }} />
        </div>

        <h1 style={{
          fontSize: "clamp(52px, 9vw, 96px)",
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          margin: "0 auto 20px",
          maxWidth: 900,
        }}>
          Boundless Insight.<br />
          <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            One Platform.
          </span>
        </h1>

        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.65 }}>
          Purpose-built intelligence software connecting clinical data to donor outcomes — through Prysm and Aperion.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 56 }}>
          <button style={{ padding: "14px 36px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer" }}>
            Explore our platforms
          </button>
          <button style={{ padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "transparent", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>
            View client results →
          </button>
        </div>

        {/* Photo in contained landscape frame */}
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ paddingTop: "52%", position: "relative" }}>
            <img
              src={IMG}
              alt="Healthcare philanthropist"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
            />
            {/* Gradient vignette */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,14,26,0.3) 0%, transparent 40%, rgba(10,14,26,0.7) 100%)" }} />
          </div>
        </div>
      </section>

      {/* ── Products — compact centered grid ── */}
      <section style={{ background: "#fff", marginTop: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {[
            { name: "Prysm", sub: "Grateful Patient Intelligence", color: "#7C3AED", desc: "Bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to surface major gift prospects automatically.", link: "Explore Prysm" },
            { name: "Aperion", sub: "AI-Augmented Fundraising", color: "#06B6D4", desc: "Eliminates 75% of administrative burden with AI donor briefings, opportunity matching, and proposal intelligence.", link: "Explore Aperion" },
          ].map((p, i) => (
            <div key={i} style={{ padding: "56px 48px", borderRight: i === 0 ? "1px solid #E8ECF2" : "none", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: i === 0 ? "linear-gradient(90deg, #7C3AED, #2563EB)" : "linear-gradient(90deg, #2563EB, #06B6D4)" }} />
              <div style={{ fontSize: 42, fontWeight: 900, color: "#0A0E1A", textTransform: "uppercase", letterSpacing: "-0.03em", marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 20 }}>{p.sub}</div>
              <p style={{ fontSize: 15, color: "#6B7A90", fontWeight: 300, lineHeight: 1.65, marginBottom: 24 }}>{p.desc}</p>
              <span style={{ fontSize: 11, fontWeight: 800, color: p.color, letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.link} →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA — centered single column + stat pills ── */}
      <section style={{ background: "#0A0E1A", padding: "80px 40px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 60%, rgba(6,182,212,0.08) 100%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Get started</span>
            <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", lineHeight: 0.92, marginBottom: 20 }}>
            Let's talk about<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              what's possible.
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.65, marginBottom: 36 }}>
            Schedule a live platform walkthrough and see how health systems at your scale have already achieved results.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 52 }}>
            <button style={{ padding: "14px 36px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer" }}>
              Request a demo →
            </button>
            <button style={{ padding: "14px 24px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
              View client results
            </button>
          </div>
          {/* Stats as horizontal pills */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Deployment", value: "90 days to first patient lists" },
              { label: "EMR integration", value: "Native Epic FHIR" },
              { label: "First-year ROI", value: "20× (Providence)" },
              { label: "Pipeline growth", value: "36× in 12 months" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "16px 20px", border: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: 6, textAlign: "left" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>{s.label}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#060810", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Actionable Insight AI</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>actionableinsight.com</span>
      </footer>
    </div>
  );
}
