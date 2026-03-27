/**
 * HomeV2 — Photo-Immersive / Bottom-Anchored
 * Spatial logic: The photo is the canvas. It fills the hero to full bleed.
 * Text is anchored to the bottom-left as a glass panel rising from the bottom.
 * Products stack full-width horizontally — one per row, alternating emphasis.
 * CTA strips away the stats table entirely; only headline + 2 buttons remain.
 */

const IMG = "https://237b3716-93f0-41a8-973d-2826f2b6c12d-00-3om2vrv1f62me.kirk.replit.dev/__mockup/images/person-phone.png";

export default function HomeV2Immersive() {
  return (
    <div style={{ fontFamily: "'Urbanist', 'Inter', sans-serif", background: "#0A0E1A", color: "#fff", overflowX: "hidden" }}>

      {/* ── Nav stub ── */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 40px",
      }}>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>Actionable Insight AI</span>
        <div style={{ display: "flex", gap: 32 }}>
          {["Prysm", "Aperion", "Results", "About"].map(n => (
            <span key={n} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", cursor: "pointer" }}>{n}</span>
          ))}
        </div>
      </nav>

      {/* ── Hero — full-bleed photo, text bottom-anchored ── */}
      <section style={{ position: "relative", height: "85vh", minHeight: 520, overflow: "hidden" }}>
        {/* Photo fill */}
        <img
          src={IMG}
          alt="Healthcare philanthropist"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
        />
        {/* Dark gradient rising from bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,26,1) 0%, rgba(10,14,26,0.85) 35%, rgba(10,14,26,0.2) 65%, rgba(10,14,26,0.4) 100%)" }} />
        {/* Subtle violet tint left edge */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(124,58,237,0.25) 0%, transparent 50%)" }} />

        {/* Text — anchored bottom-left */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 40px 52px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.3)" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>Healthcare Philanthropy Intelligence</span>
          </div>
          <h1 style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            marginBottom: 28,
            maxWidth: 680,
          }}>
            Boundless Insight.<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One Platform.
            </span>
          </h1>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button style={{ padding: "14px 32px", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer" }}>
              Explore our platforms
            </button>
            <button style={{ padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.8)", cursor: "pointer", backdropFilter: "blur(8px)" }}>
              View client results →
            </button>
          </div>
        </div>
      </section>

      {/* ── Products — full-width stacked alternating cards ── */}
      <section style={{ background: "#fff" }}>
        {[
          { name: "Prysm", sub: "Grateful Patient Intelligence", color: "#7C3AED", gradFrom: "#7C3AED", gradTo: "#2563EB", desc: "Prysm bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically surface major gift prospects from clinical encounter data — identifying grateful patients before the window of opportunity closes.", link: "Explore Prysm" },
          { name: "Aperion", sub: "AI-Augmented Fundraising", color: "#06B6D4", gradFrom: "#2563EB", gradTo: "#06B6D4", desc: "Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every gift officer conversation count.", link: "Explore Aperion" },
        ].map((p, i) => (
          <div key={i} style={{ display: "flex", borderBottom: "1px solid #E8ECF2", minHeight: 140 }}>
            {/* Left: Product name */}
            <div style={{
              width: "28%",
              padding: "40px 40px",
              borderRight: "1px solid #E8ECF2",
              position: "relative",
              flexShrink: 0,
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, bottom: 0, background: `linear-gradient(to bottom, ${p.gradFrom}, ${p.gradTo})` }} />
              <div style={{ fontSize: 36, fontWeight: 900, color: "#0A0E1A", textTransform: "uppercase", letterSpacing: "-0.03em", marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: "0.2em", textTransform: "uppercase" }}>{p.sub}</div>
            </div>
            {/* Right: Description + link */}
            <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
              <p style={{ fontSize: 15, color: "#6B7A90", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              <span style={{ fontSize: 11, fontWeight: 800, color: p.color, letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.link} →</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA — stripped down, centered, no table ── */}
      <section style={{ background: "#0A0E1A", padding: "100px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{
          position: "relative",
          maxWidth: 700,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>Get started</span>
          </div>
          <h2 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            lineHeight: 0.92,
            marginBottom: 24,
          }}>
            Let's talk about<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              what's possible.
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.7, marginBottom: 48, maxWidth: 540 }}>
            Schedule a live platform walkthrough. We'll show you exactly how Prysm connects to your Epic environment, what the first 90 days look like, and the outcomes health systems at your scale have already achieved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{ padding: "16px 40px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer" }}>
              Request a demo →
            </button>
            <button style={{ padding: "16px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
              View client results
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#060810", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Actionable Insight AI</span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>Two platforms. One mission.</span>
      </footer>
    </div>
  );
}
