import React from "react";

export function PrysmSignalMap() {
  return (
    <section
      className="w-full min-h-[720px] font-['Urbanist'] flex items-center justify-center py-10 px-4 overflow-hidden"
      style={{ background: "#F5F5F5" }}
    >
      <div
        className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}
      >
        {/* LEFT COLUMN */}
        <div
          className="flex-1 p-10 lg:p-14 flex flex-col justify-center relative z-10 border-r"
          style={{ background: "#FFFFFF", borderColor: "#E8E8E8" }}
        >
          {/* Institutional rule + label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-7" style={{ background: "#111111" }} />
            <span
              className="text-[11px] font-bold uppercase tracking-[0.18em]"
              style={{ color: "#111111" }}
            >
              Platform 01 — Prysm
            </span>
          </div>

          <h1
            className="font-black uppercase leading-[1.0] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px,4.2vw,54px)", color: "#111111" }}
          >
            Grateful Patients Become
            <br />
            <span style={{ color: "#444444" }}>Transformational Donors.</span>
          </h1>

          <p
            className="text-base leading-relaxed mb-10 max-w-[420px]"
            style={{ color: "#707070" }}
          >
            Prysm integrates directly with Epic EHR, Blackbaud CRM, and
            Salesforce NPSP — automatically identifying, scoring, and routing
            grateful patient prospects to your gift officers before the
            engagement window closes.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
            <button
              className="px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all hover:opacity-80"
              style={{ background: "#111111" }}
            >
              Request a Demo
            </button>
            <button
              className="px-7 py-3.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-50 transition-all"
              style={{ border: "1.5px solid #DCDCDC", color: "#333333" }}
            >
              View Client Results
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Trust strip — 2×2 grid */}
          <div className="pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-3" style={{ borderColor: "#EBEBEB" }}>
            {[
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="#555" strokeWidth="1.5"/>
                    <path d="M4 7h6M4 4.5h6M4 9.5h4" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Epic EHR Certified",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.5L2 3.5v4c0 2.8 2.2 4.8 5 5.5 2.8-.7 5-2.7 5-5.5v-4L7 1.5z" stroke="#555" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M4.5 7l1.8 1.8 3.2-3.2" stroke="#555" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "HIPAA Compliant",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="5.5" stroke="#555" strokeWidth="1.5"/>
                    <path d="M7 4v3.5l2 2" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "Real-Time Scoring",
              },
              {
                icon: (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1.5" y="3" width="11" height="8" rx="1.5" stroke="#555" strokeWidth="1.5"/>
                    <path d="M1.5 6h11" stroke="#555" strokeWidth="1.3"/>
                    <path d="M5 9h4" stroke="#555" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
                label: "SOC 2 Type II",
              },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="flex-shrink-0">{icon}</span>
                <span className="text-xs font-semibold" style={{ color: "#707070" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="flex-1 relative flex flex-col items-center justify-center p-6 lg:p-8 min-h-[500px] lg:min-h-0"
          style={{ background: "#F0F0F0" }}
        >
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.045] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* SVG Diagram */}
          <div className="relative w-full z-10" style={{ height: "480px" }}>
            <svg viewBox="0 0 580 480" className="w-full h-full overflow-visible">
              <defs>
                <filter id="smShadowMono">
                  <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.06" />
                </filter>
              </defs>

              {/* Outer orbit rings */}
              <circle cx="290" cy="240" r="148" fill="none" stroke="#AAAAAA" strokeWidth="0.75" strokeDasharray="5 9" opacity="0.5" />
              <circle cx="290" cy="240" r="110" fill="none" stroke="#BBBBBB" strokeWidth="0.5" strokeDasharray="3 7" opacity="0.4" />

              {/* INPUT CONNECTOR LINES */}
              {[98, 188, 268, 355].map((y) => (
                <path
                  key={`in-${y}`}
                  d={`M 158 ${y + 22} C 218 ${y + 22}, 255 240, 290 240`}
                  fill="none"
                  stroke="#BBBBBB"
                  strokeWidth="1.5"
                />
              ))}

              {/* OUTPUT CONNECTOR LINES */}
              {[98, 188, 268, 355].map((y) => (
                <path
                  key={`out-${y}`}
                  d={`M 290 240 C 340 240, 365 ${y + 22}, 424 ${y + 22}`}
                  fill="none"
                  stroke="#BBBBBB"
                  strokeWidth="1.5"
                />
              ))}

              {/* Direction chevrons on output lines */}
              {[98, 188, 268, 355].map((y) => (
                <path
                  key={`arr-${y}`}
                  d={`M 360 ${y + 18} L 367 ${y + 22} L 360 ${y + 26}`}
                  fill="none"
                  stroke="#AAAAAA"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ))}

              {/* CENTRAL HUB */}
              <circle cx="290" cy="240" r="78" fill="#111111" filter="url(#smShadowMono)" />
              <circle cx="290" cy="240" r="78" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <circle cx="290" cy="240" r="70" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              <text x="290" y="233" textAnchor="middle" fill="#FFFFFF" fontSize="19" fontWeight="900" letterSpacing="4" fontFamily="Urbanist, sans-serif">PRYSM</text>
              <text x="290" y="253" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="10" fontWeight="600" letterSpacing="2.5" fontFamily="Urbanist, sans-serif">AI ENGINE</text>

              {/* INPUT NODES */}
              {[
                { y: 98,  label: "Epic EHR",       sub: "EMR Integration" },
                { y: 188, label: "Windfall",        sub: "Wealth Screening" },
                { y: 268, label: "DonorSearch",     sub: "Philanthropic Data" },
                { y: 355, label: "70K+ Physicians", sub: "Referral Network" },
              ].map(({ y, label, sub }) => (
                <g key={label} transform={`translate(8, ${y})`} filter="url(#smShadowMono)">
                  <rect width="150" height="44" rx="8" fill="#FFFFFF" stroke="#DCDCDC" strokeWidth="1.5" />
                  <circle cx="17" cy="22" r="4" fill="#333333" />
                  <text x="30" y="17" fill="#111111" fontSize="11.5" fontWeight="800" fontFamily="Urbanist, sans-serif">{label}</text>
                  <text x="30" y="30" fill="#AAAAAA" fontSize="9.5" fontWeight="500" fontFamily="Urbanist, sans-serif">{sub}</text>
                </g>
              ))}

              {/* OUTPUT NODES */}
              {[
                { y: 98,  label: "Blackbaud CRM",   sub: "Gift Management" },
                { y: 188, label: "Salesforce NPSP", sub: "Fundraiser CRM" },
                { y: 268, label: "Gift Officers",   sub: "Prospect Routing" },
                { y: 355, label: "ROI Analytics",   sub: "Board Reporting" },
              ].map(({ y, label, sub }) => (
                <g key={label} transform={`translate(424, ${y})`} filter="url(#smShadowMono)">
                  <rect width="150" height="44" rx="8" fill="#FFFFFF" stroke="#DCDCDC" strokeWidth="1.5" />
                  <circle cx="133" cy="22" r="4" fill="#666666" />
                  <text x="118" y="17" textAnchor="end" fill="#111111" fontSize="11.5" fontWeight="800" fontFamily="Urbanist, sans-serif">{label}</text>
                  <text x="118" y="30" textAnchor="end" fill="#AAAAAA" fontSize="9.5" fontWeight="500" fontFamily="Urbanist, sans-serif">{sub}</text>
                </g>
              ))}

              {/* FLOATING METRIC CHIPS */}
              {[
                { x: 192, y: 148, text: "93.1 avg score" },
                { x: 308, y: 156, text: "3.05× more gifts" },
                { x: 185, y: 290, text: "$285K avg capacity" },
              ].map(({ x, y, text }) => (
                <g key={text} transform={`translate(${x}, ${y})`} filter="url(#smShadowMono)">
                  <rect
                    width={text.length * 6.6 + 16}
                    height="22"
                    rx="5"
                    fill="#FFFFFF"
                    stroke="#DCDCDC"
                    strokeWidth="1"
                  />
                  <text
                    x={(text.length * 6.6 + 16) / 2}
                    y="15"
                    textAnchor="middle"
                    fill="#333333"
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
          <div
            className="relative z-10 w-full pt-4 mt-2 grid grid-cols-3 gap-3"
            style={{ borderTop: "1px solid #DCDCDC" }}
          >
            {[
              { value: "12,847", label: "Encounters Processed", dot: "#333333" },
              { value: "1,422",  label: "Prospects Qualified",   dot: "#666666" },
              { value: "47",     label: "New Today",             dot: "#999999" },
            ].map(({ value, label, dot }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E0E0E0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dot }} />
                <div>
                  <div className="text-sm font-black" style={{ color: "#111111" }}>{value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
