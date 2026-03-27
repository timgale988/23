export function PrysmHumanSignal() {
  return (
    <div className="relative w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist']">
      <img
        src="/__mockup/images/prysm-woman-screen.png"
        alt="Healthcare professional reviewing patient intelligence"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "40% center" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(6,10,20,0.97) 0%, rgba(6,10,20,0.80) 40%, rgba(6,10,20,0.25) 70%, rgba(6,10,20,0.50) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(124,58,237,0.18) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <nav className="flex items-center justify-between px-12 py-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-6">
            {["Platform", "Results", "About"].map((item) => (
              <a key={item} href="#" className="text-white/35 hover:text-white text-sm font-medium transition-colors">
                {item}
              </a>
            ))}
            <button
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors"
            >
              Request Demo
            </button>
          </div>
        </nav>

        <div className="flex-1 flex flex-col justify-center px-12 pb-4 max-w-[580px]">
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-xs font-semibold uppercase tracking-widest">Prysm — Grateful Patient Intelligence</span>
          </div>

          <h1
            className="text-white font-black leading-[0.95] mb-7 uppercase"
            style={{ fontSize: "clamp(48px, 6vw, 76px)", letterSpacing: "-0.04em" }}
          >
            The Signal
            <br />
            Was Always
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In The Data.
            </span>
          </h1>

          <p className="text-white/55 text-lg leading-relaxed mb-9 max-w-[460px]">
            Every patient discharge contains a philanthropic signal. Prysm reads
            it in real-time — connecting clinical encounter data with wealth
            intelligence so your gift officers can act before the moment passes.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <button
              className="px-8 py-4 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.45)",
              }}
            >
              Explore Prysm
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/18 text-white font-semibold text-sm hover:bg-white/8 transition-colors">
              View Results
            </button>
          </div>

          <div className="flex items-center gap-8">
            {[
              { label: "Epic Integration", icon: "⚡" },
              { label: "HIPAA Compliant", icon: "🔒" },
              { label: "Real-Time Scoring", icon: "◉" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-sm">{item.icon}</span>
                <span className="text-white/35 text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-12 pb-8">
          <div
            className="inline-flex items-start gap-4 p-4 rounded-2xl border border-white/8 max-w-sm"
            style={{ background: "rgba(6,10,20,0.65)", backdropFilter: "blur(16px)" }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              <div className="w-2 h-2 rounded-full bg-violet-400" />
            </div>
            <div>
              <div className="text-white/75 text-sm font-semibold mb-0.5">New alert: 3 prospects ready for outreach</div>
              <div className="text-white/35 text-xs">Capacity scores 91–97 · Discharged in last 48 hours</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
