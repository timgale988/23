export function AgencyClean() {
  const healthSystems = [
    "Advocate Aurora Health",
    "HCA Healthcare",
    "Intermountain Health",
    "UCSF Health",
    "Mass General Brigham",
    "Cedars-Sinai",
  ];

  return (
    <div
      className="w-full min-h-screen font-['Urbanist'] bg-white flex flex-col"
      style={{ color: "#0A0E1A" }}
    >
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
            />
            <span className="font-extrabold text-lg tracking-tight text-[#0A0E1A]">
              Actionable<span className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg,#7C3AED,#2563EB)" }}
              > Insight</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            {["Platform", "Prysm", "Aperion", "Results", "About"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-[#0A0E1A] hover:bg-gray-50 transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-gray-500 hover:text-[#0A0E1A] px-4 py-2 transition-colors">
            Sign In
          </a>
          <button
            className="px-5 py-2.5 rounded-full text-white text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #2563EB)",
              boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
            }}
          >
            Request a Demo
          </button>
        </div>
      </nav>

      <div className="flex flex-1 px-10 pt-14 pb-10 gap-12 items-start max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col pt-2 w-[46%] flex-shrink-0">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit"
            style={{
              background: "rgba(124,58,237,0.07)",
              color: "#7C3AED",
              border: "1px solid rgba(124,58,237,0.18)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Healthcare Philanthropy Intelligence
          </div>

          <h1
            className="font-black leading-[0.93] uppercase mb-6 text-[#0A0E1A]"
            style={{
              fontSize: "clamp(52px,6vw,78px)",
              letterSpacing: "-0.04em",
            }}
          >
            Turn Every
            <br />
            Discharge
            <br />
            Into a{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gift.
            </span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-[420px]" style={{ fontWeight: 400 }}>
            Actionable Insight's AI platform helps health system development
            teams identify grateful patients, build donor relationships, and
            raise more — with less manual work.
          </p>

          <div className="flex items-center gap-3 mb-10">
            <button
              className="px-8 py-4 rounded-2xl text-white font-bold text-[15px] transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
              }}
            >
              See the Platform
            </button>
            <button
              className="flex items-center gap-2.5 px-6 py-4 rounded-2xl border-2 font-bold text-[15px] text-[#0A0E1A] hover:bg-gray-50 transition-colors"
              style={{ borderColor: "#E5E7EB" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="#7C3AED" strokeWidth="1.5" />
                <path d="M7 6L13 9L7 12V6Z" fill="#7C3AED" />
              </svg>
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 mb-4">
            {[
              { icon: "⚡", label: "Epic & Blackbaud Native" },
              { icon: "🔒", label: "HIPAA Compliant" },
              { icon: "◎", label: "Live in 30 Days" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <span className="text-base">{item.icon}</span>
                <span className="text-xs font-semibold text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative min-w-0">
          <div
            className="absolute -inset-6 rounded-3xl opacity-20"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", filter: "blur(40px)" }}
          />

          <div
            className="relative rounded-2xl border overflow-hidden"
            style={{
              borderColor: "#E5E7EB",
              boxShadow: "0 32px 80px rgba(10,14,26,0.12), 0 4px 16px rgba(10,14,26,0.06)",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div
                className="flex-1 mx-4 px-3 py-1 rounded-md text-xs font-medium text-gray-400 flex items-center gap-1.5"
                style={{ background: "white", border: "1px solid #E5E7EB" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4" stroke="#9CA3AF" strokeWidth="1"/>
                  <path d="M3.5 5L4.5 6L6.5 4" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                app.actionableinsight.com/prysm/dashboard
              </div>
            </div>

            <div className="bg-[#060A14] p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5">Prysm Dashboard</div>
                  <div className="text-white font-bold text-base">Prospect Intelligence Feed</div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-violet-300 text-xs font-semibold">Live · Epic Synced</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "New Prospects", value: "84", delta: "+12 today", color: "#7C3AED" },
                  { label: "Ready for Outreach", value: "31", delta: "In 48hr window", color: "#06B6D4" },
                  { label: "Avg Capacity Score", value: "91", delta: "↑ vs last month", color: "#2563EB" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-white/40 text-xs mb-1">{stat.label}</div>
                    <div className="font-black text-2xl text-white leading-none mb-1">{stat.value}</div>
                    <div className="text-xs font-medium" style={{ color: stat.color }}>{stat.delta}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {[
                  { name: "Margaret W.", dept: "Cardiac ICU", score: 97, capacity: "$500K+", tag: "Priority" },
                  { name: "Robert T.", dept: "Orthopedic Surgery", score: 94, capacity: "$250K", tag: "Outreach" },
                  { name: "Linda H.", dept: "Cancer Center", score: 89, capacity: "$100K", tag: "Qualify" },
                ].map((prospect) => (
                  <div
                    key={prospect.name}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}
                    >
                      {prospect.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm">{prospect.name}</div>
                      <div className="text-white/35 text-xs truncate">{prospect.dept}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-white font-bold text-sm">{prospect.capacity}</div>
                      <div className="text-white/35 text-xs">Score {prospect.score}</div>
                    </div>
                    <div
                      className="px-2 py-1 rounded-lg text-xs font-bold flex-shrink-0"
                      style={{
                        background: prospect.tag === "Priority" ? "rgba(124,58,237,0.2)" : prospect.tag === "Outreach" ? "rgba(6,182,212,0.15)" : "rgba(37,99,235,0.15)",
                        color: prospect.tag === "Priority" ? "#A78BFA" : prospect.tag === "Outreach" ? "#67E8F9" : "#93C5FD",
                      }}
                    >
                      {prospect.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="absolute -bottom-3 -right-3 p-4 rounded-2xl border shadow-xl"
            style={{
              background: "white",
              borderColor: "#E5E7EB",
              boxShadow: "0 12px 32px rgba(10,14,26,0.12)",
            }}
          >
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Year-One ROI</div>
            <div
              className="text-3xl font-black leading-none"
              style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              20×
            </div>
            <div className="text-xs text-gray-400 mt-0.5">Average return</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-6 px-10 max-w-[1400px] w-full mx-auto">
        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest flex-shrink-0 whitespace-nowrap">
            Trusted by
          </span>
          <div className="flex items-center gap-8 overflow-hidden">
            {healthSystems.map((name) => (
              <span
                key={name}
                className="text-sm font-bold text-gray-300 whitespace-nowrap hover:text-gray-500 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
