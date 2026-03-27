const prospects = [
  { name: "Margaret Chen", dept: "Cardiology", score: 97, days: 2, gift: "$250K–$500K", status: "hot" },
  { name: "Robert Ashford", dept: "Oncology", score: 94, days: 5, gift: "$100K–$250K", status: "hot" },
  { name: "Diana Weston", dept: "Neurology", score: 91, days: 8, gift: "$500K+", status: "warm" },
  { name: "James Holloway", dept: "Orthopedics", score: 88, days: 11, gift: "$50K–$100K", status: "warm" },
];

const alerts = [
  { time: "2m ago", msg: "Prysm surfaced 3 new grateful patient matches", type: "match" },
  { time: "18m ago", msg: "Donor briefing ready: R. Ashford major gift", type: "brief" },
  { time: "1h ago", msg: "Capacity score update: Chen elevated to 97", type: "update" },
];

export function LiveDashboard() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-[#080B14] overflow-hidden font-['Urbanist'] flex flex-col">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/6 flex-shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-base tracking-tight">Prysm</span>
            <span className="ml-1 px-2 py-0.5 rounded text-xs font-semibold bg-violet-500/20 text-violet-300">LIVE PREVIEW</span>
          </div>
          <div className="flex items-center gap-1">
            {["Dashboard", "Prospects", "Briefings", "Reports"].map((item, i) => (
              <button
                key={item}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  i === 0 ? "bg-white/8 text-white" : "text-white/35 hover:text-white/60"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-xs font-semibold">Epic Connected</span>
          </div>
          <button
            className="px-4 py-2 rounded-lg text-white text-xs font-semibold"
            style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
          >
            Request Demo →
          </button>
        </div>
      </header>

      <div className="relative z-10 flex flex-1 overflow-hidden px-6 py-4 gap-4">
        <div className="flex flex-col gap-3 w-[200px] flex-shrink-0">
          {[
            { label: "New Prospects", value: "1,284", change: "+18%", color: "#7C3AED" },
            { label: "Briefings Ready", value: "47", change: "+31%", color: "#2563EB" },
            { label: "Gifts Influenced", value: "$4.2M", change: "+22%", color: "#06B6D4" },
            { label: "Hours Saved", value: "312", change: "this month", color: "#9333EA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-white/8"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className="text-white/40 text-xs mb-2">{stat.label}</div>
              <div className="text-white font-black text-2xl mb-1">{stat.value}</div>
              <div className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 2L8.5 7H1.5L5 2Z" fill="#22C55E"/>
                </svg>
                <span className="text-green-400 text-xs font-semibold">{stat.change}</span>
              </div>
              <div className="mt-2 h-0.5 rounded-full bg-white/6 overflow-hidden">
                <div className="h-full rounded-full w-3/4" style={{ background: stat.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <div
            className="rounded-xl border border-white/8 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="px-4 py-3 border-b border-white/6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white font-semibold text-xs uppercase tracking-widest">Top Grateful Patient Prospects</span>
              </div>
              <span className="text-white/30 text-xs">Sorted by Prysm score · Updated now</span>
            </div>
            {prospects.map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-4 py-3 border-b border-white/4 hover:bg-white/3 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
                  >
                    {p.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{p.name}</div>
                    <div className="text-white/35 text-xs">{p.dept} · Discharged {p.days}d ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <div className="text-white/35 text-xs">Capacity</div>
                    <div className="text-white text-xs font-semibold">{p.gift}</div>
                  </div>
                  <div
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      borderColor: p.status === "hot" ? "#06B6D4" : "#7C3AED",
                      color: p.status === "hot" ? "#06B6D4" : "#A78BFA",
                    }}
                  >
                    {p.score}
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-500/15 text-violet-300 hover:bg-violet-500/25 transition-colors opacity-0 group-hover:opacity-100">
                    Brief →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            <div
              className="rounded-xl border border-white/8 p-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Pipeline Activity</div>
              <div className="space-y-2">
                {[
                  { stage: "New Prospects", count: 284, pct: 85 },
                  { stage: "Briefing Ready", count: 47, pct: 55 },
                  { stage: "In Outreach", count: 31, pct: 35 },
                  { stage: "Gift Stage", count: 12, pct: 18 },
                ].map((row) => (
                  <div key={row.stage} className="flex items-center gap-3">
                    <span className="text-white/40 text-xs w-28 flex-shrink-0">{row.stage}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/6 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${row.pct}%`,
                          background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                        }}
                      />
                    </div>
                    <span className="text-white/55 text-xs w-6 text-right">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="rounded-xl border border-white/8 p-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Live Feed</div>
              <div className="space-y-3">
                {alerts.map((a, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: a.type === "match"
                          ? "rgba(124,58,237,0.2)"
                          : a.type === "brief"
                            ? "rgba(37,99,235,0.2)"
                            : "rgba(6,182,212,0.2)",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: a.type === "match" ? "#7C3AED" : a.type === "brief" ? "#2563EB" : "#06B6D4",
                        }}
                      />
                    </div>
                    <div>
                      <div className="text-white/65 text-xs leading-snug">{a.msg}</div>
                      <div className="text-white/25 text-xs mt-0.5">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
