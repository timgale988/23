/**
 * HomeV3 — Data-First / Editorial Asymmetric
 * Spatial logic: opposite weight distribution from current design.
 * Hero: narrow left column (eyebrow + vertical rule) anchors a massive 3-line
 * headline that dominates the right 75%. Photo is a tall portrait frame, right.
 * Products: numbered cards (01, 02) with large outlined numerals as visual anchors.
 * CTA: stats take the LEFT column as big proof numbers; headline + CTAs on RIGHT.
 */

const IMG = "https://237b3716-93f0-41a8-973d-2826f2b6c12d-00-3om2vrv1f62me.kirk.replit.dev/__mockup/images/person-phone.png";

export default function HomeV3DataFirst() {
  return (
    <div style={{ fontFamily: "'Urbanist', 'Inter', sans-serif", background: "#0A0E1A", color: "#fff", overflowX: "hidden" }}>

      {/* ── Nav stub ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 40px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase" }}>Actionable Insight AI</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Prysm", "Aperion", "Results", "About"].map(n => (
            <span key={n} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", cursor: "pointer" }}>{n}</span>
          ))}
        </div>
      </nav>

      {/* ── Hero — left rail + massive headline + portrait photo ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 2.6fr 1fr", minHeight: "82vh", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* Left rail */}
        <div style={{ padding: "60px 24px 60px 40px", borderRight: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 10, fontWeight: 700, letterSpacing: "0.24em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 24 }}>
            Healthcare Philanthropy Intelligence
          </div>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))" }} />
        </div>

        {/* Center — headline + description + CTAs */}
        <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", zIndex: 1 }}>
          <h1 style={{
            fontSize: "clamp(48px, 7vw, 86px)",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}>
            Boundless<br />Insight.<br />
            <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              One Platform.
            </span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300, lineHeight: 1.7, maxWidth: 460, marginBottom: 36 }}>
            Actionable Insight AI connects clinical data to donor outcomes through two integrated platforms: Prysm and Aperion.
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ padding: "14px 32px", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer" }}>
              Explore platforms
            </button>
            <button style={{ padding: "14px 24px", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}>
              Client results →
            </button>
          </div>
        </div>

        {/* Right — tall portrait photo */}
        <div style={{ position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
          <img
            src={IMG}
            alt="Healthcare philanthropist"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%" }}
          />
          {/* Bleed left */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,14,26,0.6) 0%, transparent 40%)" }} />
          {/* Bleed top/bottom */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,14,26,0.5) 0%, transparent 25%, transparent 75%, rgba(10,14,26,0.5) 100%)" }} />
        </div>
      </section>

      {/* ── Products — numbered cards ── */}
      <section style={{ background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {[
            { num: "01", name: "Prysm", sub: "Grateful Patient Intelligence", color: "#7C3AED", gradFrom: "#7C3AED", gradTo: "#2563EB", desc: "Bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically surface major gift prospects from clinical encounter data.", link: "Explore Prysm" },
            { num: "02", name: "Aperion", sub: "AI-Augmented Fundraising", color: "#06B6D4", gradFrom: "#2563EB", gradTo: "#06B6D4", desc: "Eliminates 75% of administrative burden with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.", link: "Explore Aperion" },
          ].map((p, i) => (
            <div key={i} style={{ padding: "52px 44px", borderRight: i === 0 ? "1px solid #E8ECF2" : "none", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})` }} />
              {/* Large outlined numeral */}
              <div style={{
                fontSize: 80,
                fontWeight: 900,
                color: "transparent",
                WebkitTextStroke: `1px ${p.color}22`,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 8,
                userSelect: "none",
              }}>{p.num}</div>
              <div style={{ fontSize: 40, fontWeight: 900, color: "#0A0E1A", textTransform: "uppercase", letterSpacing: "-0.03em", marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 18 }}>{p.sub}</div>
              <p style={{ fontSize: 15, color: "#6B7A90", fontWeight: 300, lineHeight: 1.65, marginBottom: 24 }}>{p.desc}</p>
              <span style={{ fontSize: 11, fontWeight: 800, color: p.color, letterSpacing: "0.18em", textTransform: "uppercase" }}>{p.link} →</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA — stats LEFT (big numbers), CTA content RIGHT ── */}
      <section style={{ background: "#0A0E1A", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, transparent 50%, rgba(6,182,212,0.06) 100%)", pointerEvents: "none" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative", zIndex: 1 }}>

          {/* Left — big proof numbers */}
          <div style={{ padding: "72px 48px", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 40 }}>Proven outcomes</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {[
                { figure: "20×", desc: "First-year ROI — Providence Health" },
                { figure: "36×", desc: "Pipeline value growth in 12 months" },
                { figure: "90d", desc: "From contract to first patient lists" },
                { figure: "305%", desc: "Increase in first-time major gifts" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                  <div style={{
                    fontSize: 38,
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth: 80,
                  }}>{s.figure}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.5, paddingTop: 4 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA content */}
          <div style={{ padding: "72px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
              <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.2)" }} />
              <span style={{ fontSize: 10, letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>Get started</span>
            </div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              lineHeight: 0.92,
              marginBottom: 20,
            }}>
              Let's talk about<br />
              <span style={{ background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                what's possible.
              </span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", fontWeight: 300, lineHeight: 1.7, marginBottom: 40 }}>
              Schedule a live walkthrough. See how Prysm connects to your Epic environment and what the first 90 days look like.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button style={{ padding: "15px 32px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)", border: "none", color: "#fff", cursor: "pointer", textAlign: "left" }}>
                Request a demo →
              </button>
              <button style={{ padding: "15px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", background: "transparent", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.45)", cursor: "pointer", textAlign: "left" }}>
                View client results
              </button>
            </div>
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
