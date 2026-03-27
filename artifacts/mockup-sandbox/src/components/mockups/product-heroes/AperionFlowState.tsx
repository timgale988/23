export function AperionFlowState() {
  return (
    <div className="relative w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist']">
      <img
        src="/__mockup/images/aperion-abstract-dark.png"
        alt="Abstract gradient background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,14,26,0.88) 0%, rgba(10,14,26,0.55) 50%, rgba(10,14,26,0.80) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 20% 60%, rgba(6,182,212,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <nav className="flex items-center justify-between px-12 py-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-6">
            {["Prysm", "Aperion", "About"].map((item) => (
              <a key={item} href="#" className="text-white/35 hover:text-white text-sm font-medium transition-colors">
                {item}
              </a>
            ))}
            <button
              className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              Get Started
            </button>
          </div>
        </nav>

        <div className="flex flex-1 items-center px-12 py-6 gap-16">
          <div className="max-w-[560px]">
            <div className="mb-6 flex items-center gap-3">
              <div
                className="h-px w-14"
                style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}
              />
              <span className="text-cyan-300/70 text-xs font-semibold uppercase tracking-[0.25em]">
                Aperion — AI-Augmented Fundraising
              </span>
            </div>

            <h1
              className="text-white font-black leading-[0.92] mb-8"
              style={{ fontSize: "clamp(52px, 6.5vw, 82px)", letterSpacing: "-0.04em" }}
            >
              Free Your
              <br />
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg, #60A5FA, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Fundraisers
              </span>
              <br />
              To Fundraise.
            </h1>

            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-[480px]">
              Aperion handles the research, the briefings, the proposals — so
              your development team can stop managing paperwork and start
              building the relationships that drive transformational gifts.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <button
                className="px-9 py-4 rounded-2xl text-white font-bold text-base transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)",
                  boxShadow: "0 10px 36px rgba(6,182,212,0.4)",
                }}
              >
                Explore Aperion
              </button>
              <button className="flex items-center gap-2.5 text-white/40 hover:text-white/65 font-medium text-sm transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/18 flex items-center justify-center group-hover:border-white/35 transition-colors">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M4 2.5L10 6.5L4 10.5V2.5Z" fill="white" fillOpacity="0.45" />
                  </svg>
                </div>
                See it in action
              </button>
            </div>

            <div
              className="p-1 rounded-2xl border border-white/10 inline-flex items-stretch"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
            >
              {[
                { label: "75%", sub: "Admin Eliminated" },
                { label: "AI", sub: "Briefings in Seconds" },
                { label: "120+", sub: "Nonprofits Served" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`px-6 py-3 text-center ${i < 2 ? "border-r border-white/8" : ""}`}
                >
                  <div
                    className="text-xl font-black leading-none mb-0.5"
                    style={{
                      background: "linear-gradient(90deg, #60A5FA, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.label}
                  </div>
                  <div className="text-white/35 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-3 min-w-0">
            {[
              {
                icon: "✦",
                title: "Donor Briefing Generated",
                body: "Full profile for Margaret Chen — net worth $4.2M, philanthropic history, 3 alignment opportunities",
                time: "Just now",
                color: "#2563EB",
              },
              {
                icon: "◈",
                title: "Opportunity Match Found",
                body: "Children's Wing Campaign aligns with Holloway family's pediatric giving history",
                time: "4 min ago",
                color: "#06B6D4",
              },
              {
                icon: "◇",
                title: "Proposal Draft Ready",
                body: "First draft of $500K gift proposal for Weston endowment — ready for your review",
                time: "12 min ago",
                color: "#7C3AED",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl border border-white/8 hover:border-white/15 transition-all cursor-pointer"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                    style={{ background: `${item.color}25`, color: item.color, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="text-white font-semibold text-sm truncate">{item.title}</div>
                      <div className="text-white/25 text-xs flex-shrink-0">{item.time}</div>
                    </div>
                    <div className="text-white/45 text-xs leading-snug">{item.body}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
