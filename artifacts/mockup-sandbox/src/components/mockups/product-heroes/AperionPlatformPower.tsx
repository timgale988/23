export function AperionPlatformPower() {
  return (
    <div className="w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist'] flex flex-col relative">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1a0533 0%, #0d1a3d 40%, #06131f 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[55%] h-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 80% 30%, #7C3AED 0%, #2563EB 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-white/6 flex-shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-1">
            {["Prysm", "Aperion", "Results", "About"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  i === 1
                    ? "bg-cyan-500/15 text-cyan-300"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <button
          className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
          style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
        >
          Get Started
        </button>
      </nav>

      <div className="relative z-10 flex flex-1 overflow-hidden">
        <div className="flex flex-col justify-center px-12 py-10 w-[48%] flex-shrink-0">
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: "rgba(6,182,212,0.10)", border: "1px solid rgba(6,182,212,0.25)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-xs font-semibold uppercase tracking-widest">Platform 02 — Aperion</span>
          </div>

          <h1
            className="text-white font-black leading-[0.95] mb-6 uppercase"
            style={{ fontSize: "clamp(44px, 5.5vw, 66px)", letterSpacing: "-0.04em" }}
          >
            Less Admin.
            <br />
            More Impact.
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Always.
            </span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-[400px]">
            Aperion eliminates 75% of fundraising admin — auto-generating donor
            briefings, matching opportunities intelligently, and drafting
            proposals so your team can focus on relationships.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <button
              className="px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                boxShadow: "0 8px 28px rgba(6,182,212,0.35)",
              }}
            >
              Explore Aperion
            </button>
            <button className="flex items-center gap-2 text-white/35 hover:text-white/60 text-sm font-medium transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="white" strokeOpacity="0.2" strokeWidth="1.2"/>
                <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="white" fillOpacity="0.35"/>
              </svg>
              Watch demo
            </button>
          </div>

          <div className="space-y-3">
            {[
              { label: "AI Donor Briefings", desc: "Generated in seconds, not hours" },
              { label: "Opportunity Matching", desc: "Intelligent alignment of gifts to priorities" },
              { label: "Proposal Intelligence", desc: "First drafts ready before the meeting" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className="text-white text-sm font-semibold">{item.label} </span>
                  <span className="text-white/40 text-sm">— {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, rgba(13,26,61,0.95), transparent)" }}
          />

          <div className="relative w-full max-w-[540px]">
            <div
              className="absolute -inset-4 rounded-3xl opacity-50"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)", filter: "blur(30px)" }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/__mockup/images/aperion-data-analysis.png"
                alt="Aperion data analysis platform"
                className="w-full h-auto block"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a3d]/60 via-transparent to-transparent" />

              <div
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-white/10"
                style={{ background: "rgba(13,26,61,0.75)", backdropFilter: "blur(16px)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Aperion Generated</div>
                    <div className="text-white font-semibold text-sm">Donor briefing ready: James Holloway</div>
                    <div className="text-white/35 text-xs mt-0.5">Major gift prospect · $250K–$500K capacity</div>
                  </div>
                  <button
                    className="px-3 py-2 rounded-lg text-white text-xs font-semibold flex-shrink-0 ml-4"
                    style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                  >
                    View Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
