const seeds = [
  { x: 58, y: 12, size: 3, opacity: 0.5, delay: "0s" },
  { x: 67, y: 8, size: 2, opacity: 0.35, delay: "0.3s" },
  { x: 72, y: 18, size: 2.5, opacity: 0.45, delay: "0.6s" },
  { x: 78, y: 6, size: 2, opacity: 0.3, delay: "0.9s" },
  { x: 82, y: 22, size: 3, opacity: 0.4, delay: "1.2s" },
  { x: 88, y: 10, size: 2, opacity: 0.25, delay: "1.5s" },
  { x: 91, y: 30, size: 1.5, opacity: 0.2, delay: "1.8s" },
  { x: 64, y: 35, size: 2, opacity: 0.3, delay: "0.4s" },
  { x: 76, y: 40, size: 2.5, opacity: 0.35, delay: "0.8s" },
  { x: 86, y: 45, size: 2, opacity: 0.2, delay: "1.3s" },
];

export function Kinetic() {
  return (
    <div className="relative w-full h-screen min-h-[750px] overflow-hidden font-['Urbanist'] bg-[#06080F]">
      <img
        src="/__mockup/images/hero-dandelion.png"
        alt="Dandelion seeds dispersing"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        style={{ objectPosition: "70% center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06080F] via-[#06080F]/85 to-[#06080F]/30" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(124,58,237,0.12) 0%, transparent 60%)",
        }}
      />

      {seeds.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size * 4}px`,
            height: `${s.size * 4}px`,
            background: `radial-gradient(circle, rgba(124,58,237,${s.opacity}) 0%, rgba(6,182,212,${s.opacity * 0.5}) 100%)`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col h-full px-14 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-400" />
            <span className="text-white font-bold text-lg tracking-tight">Actionable Insight</span>
          </div>
          <div className="flex items-center gap-2">
            {["Platform", "About", "Results"].map((item) => (
              <a key={item} href="#" className="px-4 py-2 text-white/35 hover:text-white text-sm font-medium transition-colors">
                {item}
              </a>
            ))}
            <button
              className="ml-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
            >
              Request Demo
            </button>
          </div>
        </nav>

        <div className="flex-1 flex flex-col justify-center max-w-[620px]">
          <div className="mb-5 text-white/30 text-xs font-semibold uppercase tracking-[0.25em]">
            Every seed is a patient. Every insight is a gift.
          </div>

          <h1
            className="font-black text-white leading-[0.92] mb-8"
            style={{ fontSize: "clamp(56px, 7vw, 88px)", letterSpacing: "-0.04em" }}
          >
            The Right
            <br />
            Donor. The
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #A78BFA 0%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Right Moment.
            </span>
          </h1>

          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-[480px]">
            Prysm reads the clinical signal. Aperion clears the path. Together
            they surface grateful patients at exactly the moment they're ready
            to give back — before the window closes.
          </p>

          <div className="flex items-center gap-4 mb-14">
            <button
              className="px-8 py-4 rounded-2xl text-white font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
              }}
            >
              See How It Works
            </button>
            <button className="flex items-center gap-2.5 text-white/45 hover:text-white/70 text-sm font-medium transition-colors">
              <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M4.5 2.5L10.5 6.5L4.5 10.5V2.5Z" fill="white" fillOpacity="0.5" />
                </svg>
              </div>
              Watch 2-min overview
            </button>
          </div>

          <div
            className="inline-flex items-start gap-4 p-5 rounded-2xl border border-white/8 max-w-md"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
          >
            <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            </div>
            <div>
              <div className="text-white/70 text-sm font-semibold mb-0.5">$4.32M raised in Year One</div>
              <div className="text-white/35 text-xs leading-snug">
                Providence South Division. 3,098 patients screened. 461 major gift
                prospects identified. 20× ROI in twelve months.
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {[
            { label: "Grateful Patients Surfaced", value: "Real-time" },
            { label: "Admin Burden Eliminated", value: "75%" },
            { label: "Health Systems", value: "120+" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div
                className="h-8 w-px"
                style={{ background: "linear-gradient(180deg, transparent, #7C3AED, transparent)" }}
              />
              <div>
                <div className="text-white font-bold text-base">{stat.value}</div>
                <div className="text-white/30 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
