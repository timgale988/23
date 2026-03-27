const beforeItems = [
  { icon: "⏱", text: "4–6 hrs/day on manual research & report prep" },
  { icon: "🔍", text: "Prospects discovered weeks after discharge" },
  { icon: "📋", text: "Briefings written from scratch, inconsistently" },
  { icon: "💸", text: "Major gifts missed due to timing gaps" },
];

const afterItems = [
  { icon: "⚡", text: "75% of admin work automated away" },
  { icon: "🎯", text: "Grateful patients surfaced within 48 hours" },
  { icon: "🤖", text: "AI-generated donor briefings in seconds" },
  { icon: "📈", text: "3× faster prospect-to-conversation pipeline" },
];

export function JourneyMap() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-[#0A0E1A] overflow-hidden font-['Urbanist'] flex flex-col">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-white/6 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-6">
          {["Platform", "About", "Resources"].map((item) => (
            <a key={item} href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
          <button
            className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            Request Demo
          </button>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-12 py-10">
        <div className="text-center mb-10">
          <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-3">The Transformation</p>
          <h1
            className="text-5xl font-black text-white"
            style={{ letterSpacing: "-0.035em" }}
          >
            Stop Running Behind.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Start Leading.
            </span>
          </h1>
        </div>

        <div className="w-full max-w-4xl flex items-stretch gap-0 rounded-2xl overflow-hidden border border-white/10">
          <div className="flex-1 bg-[#0D0F1A] border-r border-white/8 p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Without Actionable Insight</div>
                <div className="text-white/30 text-xs">The current reality for most teams</div>
              </div>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-white/55 text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-red-500/8 border border-red-500/15">
              <div className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">Outcome</div>
              <div className="text-white/60 text-sm">Fundraisers burn out. Opportunities slip. Donors go untouched.</div>
            </div>
          </div>

          <div className="w-16 flex flex-col items-center justify-center bg-[#0D0F1A] flex-shrink-0 z-10 relative">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent absolute" />
            <div
              className="w-10 h-10 rounded-full border-2 border-white/15 flex items-center justify-center z-10 relative"
              style={{ background: "#0D0F1A" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="flex-1 bg-[#0A0E1A] p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">With Actionable Insight</div>
                <div className="text-white/30 text-xs">Your new operating model</div>
              </div>
            </div>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-sm leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
            <div
              className="mt-6 p-4 rounded-xl border"
              style={{ background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.2)" }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#A78BFA" }}
              >
                Outcome
              </div>
              <div className="text-white/75 text-sm">Fundraisers focus on donors. Gifts grow. Missions advance.</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <button
            className="px-8 py-3.5 rounded-xl text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB, #06B6D4)" }}
          >
            See the Platform
          </button>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM6.5 10.5L10.5 8L6.5 5.5V10.5Z" fill="white" fillOpacity="0.3"/>
            </svg>
            Watch 2-min overview
          </div>
        </div>
      </div>
    </div>
  );
}
