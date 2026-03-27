export function Editorial() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-white overflow-hidden font-['Urbanist'] flex flex-col">
      <nav className="flex items-center justify-between px-12 py-5 border-b border-black/8 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-[#0A0E1A] font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-7">
          {["Prysm", "Aperion", "Results", "About"].map((item) => (
            <a key={item} href="#" className="text-black/35 hover:text-black text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
          <button className="px-5 py-2.5 rounded-full bg-[#0A0E1A] text-white text-sm font-semibold hover:bg-black transition-colors">
            Request Demo
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col justify-between p-12 flex-1">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px w-16"
                style={{ background: "linear-gradient(90deg, #7C3AED, #06B6D4)" }}
              />
              <span className="text-black/35 text-xs font-semibold uppercase tracking-widest">Healthcare Philanthropy Intelligence</span>
            </div>

            <h1
              className="font-black text-[#0A0E1A] leading-[0.88] mb-0"
              style={{ fontSize: "clamp(72px, 9vw, 116px)", letterSpacing: "-0.05em" }}
            >
              STOP
              <br />
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  LOSING
                </span>
              </span>
              <br />
              DONORS
              <br />
              TO DATA.
            </h1>
          </div>

          <div className="flex items-end justify-between">
            <div className="max-w-xs">
              <p className="text-black/50 text-base leading-relaxed mb-6">
                Prysm surfaces grateful patients before the window closes. Aperion
                writes the briefing, finds the match, and clears the path. Your
                team does the work that actually matters.
              </p>
              <div className="flex items-center gap-3">
                <button
                  className="px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
                >
                  See It Work
                </button>
                <button className="px-7 py-3.5 rounded-full border border-black/15 text-[#0A0E1A] font-semibold text-sm hover:bg-black/3 transition-colors">
                  Read Results
                </button>
              </div>
            </div>

            <div className="flex items-end gap-8 pb-1">
              {[
                { value: "75%", label: "Admin Eliminated" },
                { value: "$180M+", label: "Gifts Influenced" },
                { value: "120+", label: "Health Systems" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <div
                    className="text-2xl font-black leading-none mb-1"
                    style={{
                      background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-black/30 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[340px] flex-shrink-0 border-l border-black/8 flex flex-col">
          <div
            className="flex-1 flex flex-col justify-center items-center p-10"
            style={{ background: "#0A0E1A" }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 text-center">
              <div className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-6">Prysm · Live</div>
              <div
                className="text-[80px] font-black leading-none mb-2"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1,284
              </div>
              <div className="text-white/50 text-sm mb-8">Prospects identified this month</div>
              <div className="space-y-3">
                {[
                  { label: "Outreach Ready", val: 47, color: "#7C3AED" },
                  { label: "In Pipeline", val: 31, color: "#2563EB" },
                  { label: "Gift Stage", val: 12, color: "#06B6D4" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <span className="text-white/40 text-xs">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${(row.val / 47) * 100}%`, background: row.color }}
                        />
                      </div>
                      <span className="text-white/60 text-xs font-semibold w-6 text-right">{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-black/8">
            <div className="text-black/30 text-xs font-semibold uppercase tracking-widest mb-3">Integrated With</div>
            <div className="flex items-center gap-3 flex-wrap">
              {["Epic", "Blackbaud", "Salesforce", "Windfall"].map((sys) => (
                <span key={sys} className="px-2.5 py-1 rounded border border-black/10 text-black/40 text-xs font-semibold">
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
