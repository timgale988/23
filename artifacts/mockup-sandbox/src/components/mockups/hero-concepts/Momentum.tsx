export function Momentum() {
  return (
    <div className="relative w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist']">
      <img
        src="/__mockup/images/hero-painting.png"
        alt="Vibrant abstract painting with bold brushstrokes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0E1A]/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.45) 0%, rgba(10,14,26,0.1) 50%, rgba(6,182,212,0.35) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-14 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-violet-400 to-cyan-400" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-2">
            {["Prysm", "Aperion", "About", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg text-white/65 hover:text-white hover:bg-white/10 text-sm font-medium transition-all"
              >
                {item}
              </a>
            ))}
            <button
              className="ml-2 px-5 py-2 rounded-lg text-white text-sm font-semibold border border-white/25 hover:bg-white/15 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>

        <div className="flex flex-1">
          <div className="flex flex-col justify-center max-w-[620px]">
            <div className="mb-6 flex items-center gap-3">
              <div
                className="h-px flex-shrink-0 w-12"
                style={{ background: "linear-gradient(90deg, #7C3AED, #06B6D4)" }}
              />
              <span className="text-white/60 text-sm font-medium uppercase tracking-widest">
                Redefining Healthcare Philanthropy
              </span>
            </div>

            <h1
              className="text-[72px] font-black text-white leading-[0.95] mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              Where
              <br />
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg, #A78BFA 0%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Data Meets
              </span>
              <br />
              <span className="uppercase">Human Purpose</span>
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-[500px]">
              Aperion eliminates 75% of administrative burden — freeing your
              fundraisers to spend less time on reports and more time building
              the relationships that transform lives.
            </p>

            <div className="flex items-center gap-4 mb-14">
              <button
                className="px-8 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
                  boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
                }}
              >
                See It In Action
              </button>
              <button className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3L11 7L5 11V3Z" fill="white" fillOpacity="0.7" />
                  </svg>
                </div>
                Watch the Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: "◈", label: "Prysm", desc: "Grateful Patient Intelligence" },
                { icon: "◇", label: "Aperion", desc: "AI-Augmented Fundraising" },
                { icon: "◉", label: "Outcomes", desc: "Over Outputs. Always." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-2xl mb-2" style={{ color: "#A78BFA" }}>{item.icon}</div>
                  <div className="text-white font-semibold text-sm mb-0.5">{item.label}</div>
                  <div className="text-white/45 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-end pl-16 pb-8">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)", filter: "blur(24px)" }}
              />
              <div
                className="relative rounded-2xl p-6 w-64 border border-white/15"
                style={{ background: "rgba(10,14,26,0.7)", backdropFilter: "blur(20px)" }}
              >
                <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Impact This Month</div>
                <div className="space-y-4">
                  {[
                    { label: "Prospects Identified", value: "1,284", trend: "+18%", color: "#7C3AED" },
                    { label: "Briefings Generated", value: "847", trend: "+31%", color: "#2563EB" },
                    { label: "Gifts Influenced", value: "$4.2M", trend: "+22%", color: "#06B6D4" },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white/60 text-xs">{metric.label}</span>
                        <span className="text-green-400 text-xs font-semibold">{metric.trend}</span>
                      </div>
                      <div className="text-white font-bold text-lg mb-1.5">{metric.value}</div>
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: "72%",
                            background: `linear-gradient(90deg, ${metric.color}, transparent)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
