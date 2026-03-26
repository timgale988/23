export function MobileShowcase() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-10 py-16"
      style={{ background: "#0A0E1A", fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="max-w-5xl w-full grid gap-16" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#06B6D4" }}
          >
            — Aperion Mobile
          </span>
          <h2
            className="text-5xl font-black uppercase leading-none text-white mt-2"
          >
            YOUR PIPELINE.<br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IN YOUR POCKET.
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            Development officers access their full grateful patient pipeline,
            physician referral analytics, and real-time qualification scores
            — from anywhere.
          </p>

          <div className="mt-8 space-y-3">
            {[
              "Real-time referral counts by physician and specialty",
              "Qualification pipeline funnel with stage tracking",
              "Model score visualization per patient",
              "Contact history and next-best-action guidance",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "#7C3AED" }}
                />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-6">
            <div>
              <div
                className="text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1,330
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Physician referrals in 2025
              </div>
            </div>
            <div
              className="w-px"
              style={{ background: "#1e2a45" }}
            />
            <div>
              <div
                className="text-3xl font-black"
                style={{
                  background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $46.1B
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Total pipeline identified
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              width: 220,
              border: "6px solid #1e2a45",
              background: "#111827",
            }}
          >
            <img
              src="/__mockup/images/mobile-clinician-referrals.png"
              alt="Aperion mobile app"
              className="w-full block"
            />
          </div>

          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            style={{
              width: 240,
              marginTop: 40,
              border: "6px solid #1e2a45",
              background: "#111827",
            }}
          >
            <img
              src="/__mockup/images/dashboard-patient-engagement.png"
              alt="Patient engagement dashboard"
              className="w-full block"
              style={{ maxHeight: 360, objectFit: "cover", objectPosition: "top" }}
            />
            <div
              className="px-4 py-3"
              style={{ borderTop: "1px solid #1e2a45" }}
            >
              <div className="text-xs text-slate-500 uppercase tracking-wider">
                Patient Engagement
              </div>
              <div className="text-white text-sm font-bold mt-1">
                Full analytics dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
