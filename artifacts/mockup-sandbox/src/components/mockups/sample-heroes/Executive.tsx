export function Executive() {
  return (
    <div className="w-full h-screen min-h-[750px] bg-[#F7F8FC] overflow-hidden font-['Urbanist'] flex flex-col">
      <nav className="flex items-center justify-between px-12 py-5 bg-white border-b border-[#E8ECF2] flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
          <span className="text-[#0A0E1A] font-bold text-lg tracking-tight">Actionable Insight</span>
        </div>
        <div className="flex items-center gap-8">
          {["Prysm", "Aperion", "Results", "About"].map((item) => (
            <a key={item} href="#" className="text-[#6B7A90] hover:text-[#0A0E1A] text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-lg border border-[#E8ECF2] text-[#0A0E1A] text-sm font-medium hover:bg-white transition-colors">
            Sign In
          </button>
          <button
            className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
          >
            Schedule a Call
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-14 py-12">
          <div className="max-w-[520px]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8ECF2] bg-white">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-[#6B7A90] text-xs font-semibold">HIPAA Compliant · SOC 2 Certified</span>
              </div>
            </div>

            <h1
              className="text-[#0A0E1A] font-black leading-[1.0] mb-6 uppercase"
              style={{ fontSize: "clamp(40px, 5vw, 62px)", letterSpacing: "-0.04em" }}
            >
              Your Fundraisers
              <br />
              Deserve Better
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Intelligence.
              </span>
            </h1>

            <p className="text-[#6B7A90] text-lg leading-relaxed mb-8">
              Prysm and Aperion give your development team real-time grateful
              patient intelligence and AI-generated briefings — so they spend
              less time researching and more time building relationships.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { platform: "Prysm", desc: "Grateful Patient Intelligence for health systems" },
                { platform: "Aperion", desc: "AI fundraising automation for nonprofits" },
              ].map((item) => (
                <div
                  key={item.platform}
                  className="p-4 rounded-xl bg-white border border-[#E8ECF2] hover:border-violet-200 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ color: "#7C3AED" }}
                  >
                    {item.platform}
                  </div>
                  <div className="text-[#6B7A90] text-xs leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-10">
              <button
                className="px-7 py-3.5 rounded-xl text-white font-bold text-sm transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }}
              >
                Schedule a Demo
              </button>
              <button className="px-7 py-3.5 rounded-xl border border-[#E8ECF2] text-[#0A0E1A] font-semibold text-sm hover:bg-white transition-colors">
                View Case Studies
              </button>
            </div>

            <div className="pt-6 border-t border-[#E8ECF2]">
              <p className="text-[#9AA3B2] text-xs mb-3">Integrated with the systems you already use</p>
              <div className="flex items-center gap-3 flex-wrap">
                {["Epic EMR", "Blackbaud CRM", "Salesforce NPSP", "Windfall", "DonorSearch"].map((sys) => (
                  <span
                    key={sys}
                    className="px-3 py-1.5 rounded-full border border-[#E8ECF2] bg-white text-[#6B7A90] text-xs font-medium"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[46%] relative flex-shrink-0">
          <img
            src="/__mockup/images/hero-executive.png"
            alt="Healthcare philanthropy professional"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8FC]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F8FC]/40 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "120+", label: "Health Systems", color: "#7C3AED" },
                { value: "75%", label: "Admin Saved", color: "#2563EB" },
                { value: "$180M+", label: "Gifts Influenced", color: "#06B6D4" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-white/60 text-center"
                  style={{ background: "rgba(247,248,252,0.85)", backdropFilter: "blur(12px)" }}
                >
                  <div
                    className="text-xl font-black mb-0.5"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#6B7A90] text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
