export function PrysmClinicalDepth() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-[#060A14] overflow-hidden font-['Urbanist'] flex flex-col">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.9) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-white/6 flex-shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {["Prysm", "Aperion", "Results", "About"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-violet-500/15 text-violet-300"
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
          style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
        >
          Request Demo
        </button>
      </nav>

      <div className="relative z-10 flex flex-1 overflow-hidden">
        <div className="flex flex-col justify-center px-12 py-10 w-[48%] flex-shrink-0">
          <div className="mb-5 flex items-center gap-2">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(124,58,237,0.15)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
            >
              Platform 01 — Prysm
            </div>
          </div>

          <h1
            className="text-white font-black leading-[0.95] mb-6 uppercase"
            style={{ fontSize: "clamp(44px, 5.5vw, 68px)", letterSpacing: "-0.04em" }}
          >
            Grateful
            <br />
            Patients
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Become Donors.
            </span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-[400px]">
            Prysm connects Epic EMR with Blackbaud and Salesforce — automatically
            scoring every discharged patient against wealth and philanthropic data
            before the window of opportunity closes.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <button
              className="px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                boxShadow: "0 8px 28px rgba(124,58,237,0.4)",
              }}
            >
              See How Prysm Works
            </button>
            <button className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm font-medium transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="white" strokeOpacity="0.25" strokeWidth="1.2"/>
                <path d="M6.5 5.5L11 8L6.5 10.5V5.5Z" fill="white" fillOpacity="0.4"/>
              </svg>
              Watch 2-min overview
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "3×", label: "Faster Prospect ID" },
              { value: "48hr", label: "Post-Discharge Alert" },
              { value: "20×", label: "Avg ROI Year One" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-xl border border-white/8 bg-white/3">
                <div
                  className="text-2xl font-black mb-1 leading-none"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/35 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8">
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, #060A14, transparent)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative w-full max-w-[580px]">
            <div
              className="absolute -inset-2 rounded-2xl opacity-40"
              style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", filter: "blur(20px)" }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-white/12 shadow-2xl">
              <img
                src="/__mockup/images/prysm-dashboard.png"
                alt="Prysm analytics dashboard"
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060A14]/50 via-transparent to-transparent" />

              <div
                className="absolute top-4 right-4 px-3 py-2 rounded-lg border border-white/15 text-xs"
                style={{ background: "rgba(6,10,20,0.8)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-300 font-semibold uppercase tracking-widest" style={{ fontSize: "9px" }}>Epic Connected</span>
                </div>
                <div className="text-white font-bold text-sm">1,284 Prospects</div>
                <div className="text-white/40 text-xs">Identified this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
