import React from "react";

export function PrysmSignalMap() {
  return (
    <section
      className="w-full min-h-[720px] font-['Urbanist'] flex items-center justify-center py-10 px-4 overflow-hidden relative"
      style={{ background: "#F8FAFC" }}
    >
      <div
        className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 4px 32px rgba(10,37,64,0.10), 0 1px 4px rgba(10,37,64,0.06)" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center relative z-10 bg-white border-r border-slate-100">

          {/* Institutional top rule */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-[28px]" style={{ background: "#0A2540" }} />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "#0A2540" }}
            >
              Platform 01 — Prysm
            </span>
          </div>

          <h1
            className="font-black uppercase leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px,4.2vw,54px)", color: "#0A2540" }}
          >
            Grateful Patients Become{" "}
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #1E4D91, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Transformational Donors.
            </span>
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-[420px]">
            Prysm integrates directly with Epic EHR, Blackbaud CRM, and
            Salesforce NPSP — automatically identifying, scoring, and routing
            grateful patient prospects to your gift officers before the
            engagement window closes.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
            <button
              className="px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #1E4D91, #2563EB)",
                boxShadow: "0 4px 16px rgba(30,77,145,0.28)",
              }}
            >
              Request a Demo
            </button>
            <button
              className="px-7 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-slate-50 flex items-center gap-2"
              style={{ border: "1.5px solid #CBD5E1", color: "#334155" }}
            >
              View Client Results
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Trust strip */}
          <div
            className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-x-6 gap-y-3"
          >
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="#1E4D91" strokeWidth="1.5"/>
                    <path d="M4 7h6M4 4.5h6M4 9.5h4" stroke="#1E4D91" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Epic EHR Certified",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.5L2 3.5v4c0 2.8 2.2 4.8 5 5.5 2.8-.7 5-2.7 5-5.5v-4L7 1.5z" stroke="#1E4D91" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke="#1E4D91" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "HIPAA Compliant",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#1E4D91" strokeWidth="1.5"/>
                    <path d="M7 4v3.5l2 2" stroke="#1E4D91" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Real-Time Scoring",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="#1E4D91" strokeWidth="1.5"/>
                    <path d="M1.5 6h11" stroke="#1E4D91" strokeWidth="1.3"/>
                    <path d="M5 9h4" stroke="#1E4D91" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "SOC 2 Type II",
              },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex-shrink-0">{icon}</span>
                <span className="text-xs font-semibold text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="flex-1 relative flex flex-col items-center justify-center p-6 lg:p-8 min-h-[500px] lg:min-h-0"
          style={{ background: "linear-gradient(160deg, #F0F4FA 0%, #EBF1FA 100%)" }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1E4D91 1px, transparent 1px), linear-gradient(90deg, #1E4D91 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* SVG Diagram */}
          <div className="relative w-full z-10" style={{ height: "480px" }}>
            <svg viewBox="0 0 580 480" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="smHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0A2540" />
                  <stop offset="100%" stopColor="#1E4D91" />
                </linearGradient>
                <linearGradient id="smInputLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(30,77,145,0.12)" />
                  <stop offset="100%" stopColor="rgba(30,77,145,0.55)" />
                </linearGradient>
                <linearGradient id="smOutputLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(37,99,235,0.55)" />
                  <stop offset="100%" stopColor="rgba(37,99,235,0.10)" />
                </linearGradient>
                <filter id="smShadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0A2540" floodOpacity="0.07" />
                </filter>
                <filter id="smHubGlow">
                  <feGaussianBlur stdDeviation="14" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Outer orbit ring */}
              <circle cx="290" cy="240" r="148" fill="none" stroke="#1E4D91" strokeWidth="0.75" strokeDasharray="6 10" opacity="0.14" />
              <circle cx="290" cy="240" r="110" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="3 8" opacity="0.09" />

              {/* INPUT CONNECTOR LINES */}
              <path d="M 158 98 C 218 98, 255 240, 290 240"  fill="none" stroke="url(#smInputLine)" strokeWidth="1.8" />
              <path d="M 158 188 C 218 188, 255 240, 290 240" fill="none" stroke="url(#smInputLine)" strokeWidth="1.8" />
              <path d="M 158 268 C 218 268, 255 240, 290 240" fill="none" stroke="url(#smInputLine)" strokeWidth="1.8" />
              <path d="M 158 355 C 218 355, 255 240, 290 240" fill="none" stroke="url(#smInputLine)" strokeWidth="1.8" />

              {/* OUTPUT CONNECTOR LINES */}
              <path d="M 290 240 C 340 240, 365 98, 424 98"  fill="none" stroke="url(#smOutputLine)" strokeWidth="1.8" />
              <path d="M 290 240 C 340 240, 365 188, 424 188" fill="none" stroke="url(#smOutputLine)" strokeWidth="1.8" />
              <path d="M 290 240 C 340 240, 365 268, 424 268" fill="none" stroke="url(#smOutputLine)" strokeWidth="1.8" />
              <path d="M 290 240 C 340 240, 365 355, 424 355" fill="none" stroke="url(#smOutputLine)" strokeWidth="1.8" />

              {/* DIRECTION ARROWHEADS on output lines */}
              {[98, 188, 268, 355].map((y) => (
                <path
                  key={y}
                  d={`M ${362 + (y === 240 ? 0 : 0)} ${y - 4} L ${370 + (y === 240 ? 0 : 0)} ${y} L ${362 + (y === 240 ? 0 : 0)} ${y + 4}`}
                  fill="none"
                  stroke="rgba(37,99,235,0.45)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}

              {/* CENTRAL HUB */}
              <g filter="url(#smHubGlow)">
                <circle cx="290" cy="240" r="78" fill="url(#smHubGrad)" />
              </g>
              {/* Hub accent ring */}
              <circle cx="290" cy="240" r="78" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <circle cx="290" cy="240" r="70" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

              <text x="290" y="232" textAnchor="middle" fill="white" fontSize="20" fontWeight="900" letterSpacing="4" fontFamily="Urbanist, sans-serif">PRYSM</text>
              <text x="290" y="252" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="10" fontWeight="600" letterSpacing="2.5" fontFamily="Urbanist, sans-serif">AI ENGINE</text>

              {/* INPUT NODES */}
              {[
                { y: 79,  label: "Epic EHR",        sub: "EMR Integration" },
                { y: 169, label: "Windfall",         sub: "Wealth Screening" },
                { y: 249, label: "DonorSearch",      sub: "Philanthropic Data" },
                { y: 336, label: "70K+ Physicians",  sub: "Referral Network" },
              ].map(({ y, label, sub }) => (
                <g key={label} transform={`translate(8, ${y})`} filter="url(#smShadow)">
                  <rect width="150" height="44" rx="8" fill="white" stroke="rgba(30,77,145,0.16)" strokeWidth="1.5" />
                  <circle cx="17" cy="22" r="6" fill="rgba(30,77,145,0.10)" />
                  <circle cx="17" cy="22" r="3.5" fill="#1E4D91" />
                  <text x="32" y="17" fill="#0A2540" fontSize="11.5" fontWeight="800" fontFamily="Urbanist, sans-serif">{label}</text>
                  <text x="32" y="30" fill="#94A3B8" fontSize="9.5" fontWeight="500" fontFamily="Urbanist, sans-serif">{sub}</text>
                </g>
              ))}

              {/* OUTPUT NODES */}
              {[
                { y: 79,  label: "Blackbaud CRM",    sub: "Gift Management" },
                { y: 169, label: "Salesforce NPSP",  sub: "Fundraiser CRM" },
                { y: 249, label: "Gift Officers",    sub: "Prospect Routing" },
                { y: 336, label: "ROI Analytics",    sub: "Board Reporting" },
              ].map(({ y, label, sub }) => (
                <g key={label} transform={`translate(424, ${y})`} filter="url(#smShadow)">
                  <rect width="150" height="44" rx="8" fill="white" stroke="rgba(37,99,235,0.16)" strokeWidth="1.5" />
                  <circle cx="133" cy="22" r="6" fill="rgba(37,99,235,0.10)" />
                  <circle cx="133" cy="22" r="3.5" fill="#2563EB" />
                  <text x="118" y="17" textAnchor="end" fill="#0A2540" fontSize="11.5" fontWeight="800" fontFamily="Urbanist, sans-serif">{label}</text>
                  <text x="118" y="30" textAnchor="end" fill="#94A3B8" fontSize="9.5" fontWeight="500" fontFamily="Urbanist, sans-serif">{sub}</text>
                </g>
              ))}

              {/* FLOATING METRIC CHIPS */}
              {[
                { x: 192, y: 148, text: "93.1 avg score",  color: "#1E4D91" },
                { x: 308, y: 156, text: "3.05× more gifts", color: "#2563EB" },
                { x: 185, y: 290, text: "$285K avg capacity", color: "#0284C7" },
              ].map(({ x, y, text, color }) => (
                <g key={text} transform={`translate(${x}, ${y})`} filter="url(#smShadow)">
                  <rect
                    width={text.length * 6.8 + 16}
                    height="22"
                    rx="5"
                    fill="white"
                    stroke="rgba(30,77,145,0.12)"
                    strokeWidth="1"
                  />
                  <text
                    x={(text.length * 6.8 + 16) / 2}
                    y="15"
                    textAnchor="middle"
                    fill={color}
                    fontSize="10"
                    fontWeight="700"
                    fontFamily="Urbanist, sans-serif"
                  >
                    {text}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* METRICS STRIP */}
          <div className="relative z-10 w-full border-t border-slate-200/70 pt-4 mt-2 grid grid-cols-3 gap-3">
            {[
              { value: "12,847", label: "Encounters Processed", dot: "#1E4D91" },
              { value: "1,422",  label: "Prospects Qualified",   dot: "#2563EB" },
              { value: "47",     label: "New Today",             dot: "#0284C7" },
            ].map(({ value, label, dot }) => (
              <div
                key={label}
                className="bg-white rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 1px 4px rgba(10,37,64,0.07)", border: "1px solid rgba(30,77,145,0.08)" }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dot }} />
                <div>
                  <div className="text-sm font-black" style={{ color: "#0A2540" }}>{value}</div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
