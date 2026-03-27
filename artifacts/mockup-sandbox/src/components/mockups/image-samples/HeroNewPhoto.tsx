export function HeroNewPhoto() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/__mockup/images/person-phone.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          opacity: 0.35,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,14,26,0.97) 0%, rgba(10,14,26,0.75) 50%, rgba(10,14,26,0.5) 100%)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: "linear-gradient(to top, #0A0E1A 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-16 py-20 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="h-px w-12"
            style={{
              background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#06B6D4" }}
          >
            Actionable Insight AI
          </span>
        </div>

        <h1
          className="font-black uppercase leading-none text-white"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          TURNING<br />
          GRATITUDE INTO{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            GIVING.
          </span>
        </h1>

        <p
          className="mt-6 text-slate-300 leading-relaxed max-w-xl"
          style={{ fontSize: "1.05rem" }}
        >
          Healthcare philanthropy intelligence that identifies grateful patients
          the moment care creates connection — and converts those relationships
          into transformational philanthropic revenue.
        </p>

        <div className="flex gap-4 mt-10">
          <button
            className="px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider text-white"
            style={{
              background: "linear-gradient(90deg, #7C3AED, #2563EB)",
            }}
          >
            See Results
          </button>
          <button
            className="px-8 py-3.5 rounded text-sm font-bold uppercase tracking-wider"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#cbd5e1",
            }}
          >
            Explore Prysm
          </button>
        </div>

        <div
          className="mt-16 grid grid-cols-3 gap-0"
          style={{
            maxWidth: 560,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(16px)",
          }}
        >
          {[
            { val: "305%", label: "Increase in First-Time Major Gifts" },
            { val: "$4.32M", label: "Realized Revenue, Year 1" },
            { val: "461", label: "Qualified Major Giving Prospects" },
          ].map(({ val, label }, i) => (
            <div
              key={label}
              className="px-6 py-5"
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                className="text-2xl font-black"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(90deg, #7C3AED, #2563EB)"
                      : i === 1
                      ? "linear-gradient(90deg, #2563EB, #06B6D4)"
                      : "linear-gradient(90deg, #06B6D4, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {val}
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
