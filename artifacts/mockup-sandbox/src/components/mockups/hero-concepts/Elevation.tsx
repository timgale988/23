export function Elevation() {
  return (
    <div className="relative w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist']">
      <img
        src="/__mockup/images/hero-balloon-sunset.png"
        alt="Hot air balloon over mountain horizon at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/30 via-[#0A0E1A]/55 to-[#0A0E1A]/90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-xl tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Prysm</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Aperion</a>
            <a href="#" className="text-white/70 hover:text-white text-sm font-medium transition-colors">About</a>
            <button className="px-5 py-2 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              Request Demo
            </button>
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-sm font-medium tracking-wide uppercase">Healthcare Philanthropy Intelligence</span>
          </div>

          <h1
            className="text-7xl font-black text-white leading-none mb-6 uppercase tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Elevate
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Mission
            </span>
          </h1>

          <p className="text-white/65 text-xl max-w-2xl leading-relaxed mb-10">
            AI-powered fundraising intelligence that identifies grateful patient
            prospects in real-time — so your team can focus on the relationships
            that matter most.
          </p>

          <div className="flex items-center gap-4">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
              }}
            >
              Request a Demo
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-colors flex items-center gap-2">
              Watch Overview
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.4" />
                <path d="M7 5.5L11 8L7 10.5V5.5Z" fill="white" />
              </svg>
            </button>
          </div>

          <div className="mt-14 flex items-center gap-10 text-center">
            {[
              { value: "75%", label: "Admin Time Eliminated" },
              { value: "3×", label: "Faster Prospect ID" },
              { value: "120+", label: "Health Systems Served" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-3xl font-black"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-white/50 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pb-4">
          <span className="text-white/30 text-xs">Scroll to explore</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V13M8 13L4 9M8 13L12 9" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
