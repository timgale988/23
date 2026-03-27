export function TrustFirst() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-[#F7F8FC] overflow-hidden font-['Urbanist'] flex flex-col">
      <nav className="flex items-center justify-between px-12 py-5 border-b border-[#E8ECF2] flex-shrink-0 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-[#0A0E1A] font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-7">
          {["Prysm", "Aperion", "About", "Case Studies"].map((item) => (
            <a key={item} href="#" className="text-[#6B7A90] hover:text-[#0A0E1A] text-sm font-medium transition-colors">
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

      <div className="flex flex-1 overflow-hidden">
        <div
          className="w-[55%] flex flex-col justify-between p-12 relative overflow-hidden"
          style={{ background: "#0A0E1A" }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-0 left-0 w-64 h-64 opacity-15"
            style={{
              background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          <div className="relative z-10">
            <div
              className="text-5xl font-black mb-1 leading-none"
              style={{ color: "rgba(124,58,237,0.25)" }}
            >
              "
            </div>
            <blockquote className="text-white text-2xl font-semibold leading-[1.35] mb-8" style={{ letterSpacing: "-0.01em" }}>
              Prysm surfaced $2.3 million in major gift
              opportunities we would have missed entirely.
              Our team finally feels{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #A78BFA, #38BDF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ahead of the work.
              </span>
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
              >
                SL
              </div>
              <div>
                <div className="text-white font-bold text-base">Sarah Linfield</div>
                <div className="text-white/50 text-sm">VP of Philanthropy · Northwest Medical Center</div>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="h-px bg-white/10 mb-8" />
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Health Systems", value: "120+" },
                { label: "Gifts Influenced", value: "$180M+" },
                { label: "Admin Hours Saved", value: "75%" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-3xl font-black mb-1"
                    style={{
                      background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-12 py-10 bg-[#F7F8FC]">
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-violet-600 text-xs font-semibold tracking-widest uppercase">Healthcare Philanthropy AI</span>
          </div>

          <h1
            className="text-[50px] font-black text-[#0A0E1A] leading-[1.0] mb-6 uppercase"
            style={{ letterSpacing: "-0.04em" }}
          >
            The Work
            <br />
            That Matters,
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Finally First.
            </span>
          </h1>

          <p className="text-[#6B7A90] text-base leading-relaxed mb-8 max-w-sm">
            Prysm and Aperion eliminate administrative burden so your
            fundraisers spend their time on relationships — not reports.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              "Grateful patient identification in real-time",
              "AI-generated donor briefings in seconds",
              "Epic, Blackbaud & Salesforce integrated",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[#0A0E1A] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB, #06B6D4)" }}
            >
              Schedule a Demo
            </button>
            <button className="px-7 py-3.5 rounded-xl border border-[#E8ECF2] text-[#0A0E1A] font-semibold text-sm hover:bg-white transition-colors">
              Read Case Studies
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8ECF2] flex items-center gap-4">
            <span className="text-[#6B7A90] text-xs">Trusted by</span>
            {["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins", "+117 more"].map((org) => (
              <span key={org} className="text-[#0A0E1A] text-xs font-semibold opacity-50">{org}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
