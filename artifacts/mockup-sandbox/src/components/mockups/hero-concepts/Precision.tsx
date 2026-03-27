export function Precision() {
  return (
    <div className="w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist'] bg-[#0A0E1A] flex flex-col">
      <nav className="flex items-center justify-between px-12 py-5 border-b border-white/8 flex-shrink-0 z-10 relative">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Platform</a>
          <a href="#" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Solutions</a>
          <a href="#" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Resources</a>
          <a href="#" className="text-white/55 hover:text-white text-sm font-medium transition-colors">Company</a>
        </div>
        <button
          className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
          style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
        >
          Get Started
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-16 py-12 relative">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/8">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="#06B6D4" />
              </svg>
              <span className="text-cyan-300 text-xs font-semibold tracking-widest uppercase">AI-Augmented Fundraising</span>
            </div>

            <h1
              className="text-[58px] font-black text-white leading-[1.0] mb-6 uppercase"
              style={{ letterSpacing: "-0.04em" }}
            >
              Intelligence
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #7C3AED 0%, #2563EB 60%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                That Drives
              </span>
              <br />
              Impact
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-[480px]">
              Prysm bridges your clinical data with your CRM — surfacing
              grateful patient prospects in real-time so your fundraisers
              never miss a moment of connection.
            </p>

            <div className="flex items-center gap-3 mb-12">
              <button
                className="px-7 py-3.5 rounded-lg text-white font-semibold text-sm transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
              >
                Schedule a Demo
              </button>
              <button className="px-7 py-3.5 rounded-lg border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {["#7C3AED", "#2563EB", "#06B6D4", "#9333EA"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0A0E1A] flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Trusted by 120+ health systems</div>
                <div className="text-white/40 text-xs">Epic · Blackbaud · Salesforce integrated</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[520px] flex-shrink-0 relative">
          <img
            src="/__mockup/images/hero-tech-ai.png"
            alt="AI-powered technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 via-transparent to-transparent" />

          <div className="absolute bottom-10 left-8 right-8">
            <div
              className="rounded-2xl p-5 border border-white/10"
              style={{ background: "rgba(10,14,26,0.75)", backdropFilter: "blur(16px)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-xs font-semibold uppercase tracking-widest">Live Prospect Alert</span>
              </div>
              <div className="text-white font-semibold text-sm mb-1">New grateful patient match identified</div>
              <div className="text-white/50 text-xs">Patient discharged · Capacity score: 94 · Ready for outreach</div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  className="px-3 py-1.5 rounded-md text-white text-xs font-semibold"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
                >
                  View Profile
                </button>
                <button className="px-3 py-1.5 rounded-md border border-white/15 text-white/70 text-xs font-medium">
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
