export function AperionTimeEconomy() {
  const before = [
    { label: "Research & Prep",  hrs: 14, color: "#EF4444" },
    { label: "Brief Writing",    hrs: 9,  color: "#F97316" },
    { label: "CRM Data Entry",   hrs: 6,  color: "#EAB308" },
    { label: "Relationships",    hrs: 8,  color: "#22C55E" },
    { label: "Strategy",         hrs: 3,  color: "#22C55E" },
  ];
  const after = [
    { label: "Research & Prep",  hrs: 1,  color: "#E2E8F0" },
    { label: "Brief Writing",    hrs: 0,  color: "#E2E8F0" },
    { label: "CRM Data Entry",   hrs: 1,  color: "#E2E8F0" },
    { label: "Relationships",    hrs: 26, color: "#2563EB" },
    { label: "Strategy",         hrs: 12, color: "#06B6D4" },
  ];
  const total = 40;

  return (
    <div className="w-full min-h-[750px] bg-white font-['Urbanist'] flex flex-col" style={{ color: "#0A0E1A" }}>
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-100">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }} />
            <span className="font-bold text-lg tracking-tight">Actionable<span style={{ color: "#2563EB" }}> Insight</span></span>
          </div>
          {["Prysm", "Aperion", "Results", "About"].map((item, i) => (
            <a key={item} href="#" className={`text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors ${i === 1 ? "bg-blue-50 text-blue-600" : "text-gray-400 hover:text-gray-700"}`}>{item}</a>
          ))}
        </div>
        <button className="px-5 py-2.5 rounded-xl text-white text-sm font-bold" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>
          Reclaim Your Week
        </button>
      </nav>

      <div className="flex flex-1 px-12 py-10 gap-14 items-center max-w-[1280px] w-full mx-auto">

        {/* LEFT */}
        <div className="w-[44%] flex-shrink-0 flex flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit"
            style={{ background: "rgba(37,99,235,0.07)", color: "#2563EB", border: "1px solid rgba(37,99,235,0.15)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Platform 02 — Aperion
          </div>

          <h1 className="font-black leading-[0.95] uppercase mb-5" style={{ fontSize: "clamp(36px,4.5vw,54px)", letterSpacing: "-0.04em" }}>
            You Spend{" "}
            <span style={{ background: "linear-gradient(90deg,#EF4444,#F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              29 Hours
            </span>
            <br />
            A Week On Admin.
            <br />
            <span style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Aperion Fixes That.
            </span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-[400px]">
            The average fundraiser spends 73% of their week on research, writing, and data entry — not building relationships. Aperion automates every minute of that.
          </p>

          <div className="flex gap-3 mb-10">
            <button className="px-7 py-3.5 rounded-xl text-white font-bold text-sm hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>
              See How It Works
            </button>
            <button className="px-7 py-3.5 rounded-xl border-2 font-bold text-sm text-gray-700 hover:bg-gray-50 transition-colors" style={{ borderColor: "#E5E7EB" }}>
              Calculate My Time Saved
            </button>
          </div>

          {/* Time stat */}
          <div className="p-4 rounded-2xl border border-gray-100 bg-gray-50 flex items-center gap-4">
            <div className="text-4xl font-black" style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>29h</div>
            <div>
              <div className="text-sm font-bold text-gray-800">Per week reclaimed per officer</div>
              <div className="text-xs text-gray-400 mt-0.5">Based on median Aperion client data · 40-hr work week</div>
            </div>
          </div>
        </div>

        {/* RIGHT — time allocation bars */}
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Without Aperion", data: before, badgeColor: "#EF4444", badgeBg: "#FEF2F2", badge: "40h / week" },
              { title: "With Aperion",    data: after,  badgeColor: "#2563EB", badgeBg: "#EFF6FF", badge: "40h / week" },
            ].map(({ title, data, badgeColor, badgeBg, badge }) => (
              <div key={title} className="p-5 rounded-2xl border" style={{ borderColor: title === "Without Aperion" ? "#FEE2E2" : "#DBEAFE", background: title === "Without Aperion" ? "#FFFBFB" : "#F8FAFF" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: badgeColor }}>{title}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: badgeBg, color: badgeColor }}>{badge}</span>
                </div>
                <div className="space-y-2.5">
                  {data.map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[11px] font-semibold text-gray-500">{row.label}</span>
                        <span className="text-[11px] font-bold" style={{ color: row.color === "#E2E8F0" ? "#94A3B8" : row.color }}>
                          {row.hrs}h
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div className="h-full rounded-full transition-all"
                          style={{ width: `${(row.hrs / total) * 100}%`, background: row.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t" style={{ borderColor: title === "Without Aperion" ? "#FEE2E2" : "#DBEAFE" }}>
                  <div className="text-[11px] font-semibold" style={{ color: badgeColor }}>
                    {title === "Without Aperion"
                      ? "8h on relationships (20% of week)"
                      : "38h on relationships (95% of week)"}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-4 p-4 rounded-xl bg-blue-600 flex items-center justify-between">
            <div className="text-white/90 text-sm font-semibold">Aperion users close <span className="font-black text-white">20× more</span> major gifts in their first year</div>
            <div className="text-white/50 text-xs font-semibold whitespace-nowrap ml-4">Median client result</div>
          </div>
        </div>

      </div>
    </div>
  );
}
