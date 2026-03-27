import { useState } from "react";

const suggestions = [
  "Show me top grateful patient prospects this week",
  "Generate a donor briefing for John Harrison",
  "Which patients have capacity score above 90?",
  "Summarize open major gift opportunities",
];

const results = [
  { name: "Margaret Chen", score: 97, dept: "Cardiology", gift: "$250K–$500K", ready: true },
  { name: "Robert Ashford", score: 94, dept: "Oncology", gift: "$100K–$250K", ready: true },
  { name: "Diana Weston", score: 91, dept: "Neurology", gift: "$500K+", ready: false },
];

export function CommandCenter() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [showResults, setShowResults] = useState(true);

  return (
    <div className="w-full h-screen min-h-[750px] bg-[#060810] overflow-hidden font-['Urbanist'] flex flex-col relative">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.9) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-20"
        style={{
          background: "radial-gradient(ellipse, #7C3AED 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-10 py-5 border-b border-white/6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-2">
          {["Prysm", "Aperion", "About"].map((item) => (
            <a key={item} href="#" className="px-4 py-2 text-white/45 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
          <button className="ml-2 px-4 py-2 rounded-lg border border-white/15 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-start flex-1 px-10 pt-10 pb-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-400/20 bg-violet-500/8 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">Prysm AI · Live</span>
          </div>
          <h1
            className="text-5xl font-black text-white mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Ask. Understand.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Act.
            </span>
          </h1>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Your AI fundraising intelligence — right here. Try it.
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div
            className="relative rounded-2xl border border-white/12 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="5.5" stroke="#7C3AED" strokeWidth="1.5"/>
                <path d="M12 12L15.5 15.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask Prysm anything about your prospects…"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none"
              />
              <div
                className="px-3 py-1.5 rounded-lg text-white text-xs font-semibold cursor-pointer"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
                onClick={() => setShowResults(true)}
              >
                Ask
              </div>
            </div>

            <div className="px-4 py-2 flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setQuery(s); setActive(i); setShowResults(true); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    active === i
                      ? "border-violet-500/50 bg-violet-500/15 text-violet-300"
                      : "border-white/10 text-white/35 hover:border-white/20 hover:text-white/55"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {showResults && (
            <div
              className="mt-3 rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
            >
              <div className="px-5 py-3 border-b border-white/6 flex items-center justify-between">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  {results.length} Prospects · Sorted by Capacity Score
                </span>
                <span className="text-cyan-400 text-xs font-medium">Updated 2 min ago</span>
              </div>
              {results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 hover:bg-white/3 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{r.name}</div>
                      <div className="text-white/40 text-xs">{r.dept} · Discharged 3 days ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-right">
                      <div className="text-white/40 text-xs mb-0.5">Capacity</div>
                      <div className="text-white font-bold text-sm">{r.gift}</div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black border-2 flex-shrink-0"
                      style={{
                        borderColor: r.score >= 95 ? "#06B6D4" : "#7C3AED",
                        color: r.score >= 95 ? "#06B6D4" : "#A78BFA",
                      }}
                    >
                      {r.score}
                    </div>
                    <button
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        r.ready
                          ? "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                          : "bg-white/5 text-white/30"
                      }`}
                    >
                      {r.ready ? "Outreach Ready" : "Cooling Off"}
                    </button>
                  </div>
                </div>
              ))}
              <div className="px-5 py-3 flex items-center justify-center">
                <button
                  className="text-violet-400 text-xs font-semibold hover:text-violet-300 transition-colors"
                >
                  View all 1,284 prospects →
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto pt-6 flex items-center gap-8 text-center">
          {[
            { v: "Epic", label: "EMR Integration" },
            { v: "Blackbaud", label: "CRM Sync" },
            { v: "HIPAA", label: "Compliant by Design" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/35 text-xs">{item.v} · {item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
