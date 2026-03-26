export function HeroPhoto() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A" }}
    >
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", minHeight: "100vh" }}>
        <div className="flex flex-col justify-center px-14 py-20">
          <span
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#06B6D4" }}
          >
            — Actionable Insight AI
          </span>
          <h1
            className="text-7xl font-black uppercase leading-none text-white"
          >
            INTELLIGENCE<br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MEETS<br />MISSION.
            </span>
          </h1>
          <p className="text-slate-400 text-base mt-6 leading-relaxed max-w-sm">
            Healthcare philanthropy intelligence that identifies grateful patients
            and converts clinical relationships into philanthropic revenue.
          </p>
          <div className="flex gap-4 mt-10">
            <button
              className="px-7 py-3 rounded text-sm font-bold uppercase tracking-wider text-white"
              style={{
                background:
                  "linear-gradient(90deg, #7C3AED, #2563EB)",
              }}
            >
              See Results
            </button>
            <button
              className="px-7 py-3 rounded text-sm font-bold uppercase tracking-wider text-slate-300"
              style={{ border: "1px solid #1e2a45" }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <img
            src="/__mockup/images/clinician-tablet.jpeg"
            alt="Healthcare professional using tablet"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0A0E1A 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #0A0E1A 0%, transparent 30%)",
            }}
          />
          <div
            className="absolute bottom-10 left-10 right-10 rounded-xl p-5"
            style={{
              background: "rgba(10,14,26,0.85)",
              border: "1px solid #1e2a45",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">
              Providence Health South Division — Live Data
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "461", label: "Qualified Prospects" },
                { val: "$4.32M", label: "Year 1 Revenue" },
                { val: "305%", label: "First-Time Major Gifts" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div
                    className="text-2xl font-black"
                    style={{
                      background:
                        "linear-gradient(90deg, #7C3AED, #06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {val}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
