import React from "react";

const LeftColumn = () => (
  <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center relative z-10 border-r" style={{ background: "#FFFFFF", borderColor: "#E8E8E8" }}>
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px w-7" style={{ background: "#111111" }} />
      <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#111111" }}>Platform 01 — Prysm</span>
    </div>
    <h1 className="font-black uppercase leading-[1.0] tracking-tight mb-6" style={{ fontSize: "clamp(32px,3.8vw,50px)", color: "#111111" }}>
      Grateful Patients Become<br />
      <span style={{ color: "#444444" }}>Transformational Donors.</span>
    </h1>
    <p className="text-base leading-relaxed mb-10 max-w-[400px]" style={{ color: "#707070" }}>
      Prysm moves each patient encounter through a 5-stage intelligence pipeline — from raw EMR signal to a fully qualified prospect in a gift officer's queue.
    </p>
    <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
      <button className="px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all hover:opacity-80" style={{ background: "#111111" }}>Request a Demo</button>
      <button className="px-7 py-3.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-50 transition-all" style={{ border: "1.5px solid #DCDCDC", color: "#333333" }}>
        View Client Results
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
    <div className="pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-3" style={{ borderColor: "#EBEBEB" }}>
      {[
        { label: "Epic EHR Certified" },
        { label: "HIPAA Compliant" },
        { label: "Real-Time Scoring" },
        { label: "SOC 2 Type II" },
      ].map(({ label }) => (
        <div key={label} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#555" }} />
          <span className="text-xs font-semibold" style={{ color: "#707070" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const STAGES = [
  { id: 1, label: "Patient\nEncounter", sub: "Epic EHR", active: false },
  { id: 2, label: "Signal\nDetected", sub: "Prysm AI", active: false },
  { id: 3, label: "Wealth\nScored", sub: "Windfall + DonorSearch", active: true },
  { id: 4, label: "Prospect\nQualified", sub: "Score ≥ 70", active: false },
  { id: 5, label: "Queue\nAssigned", sub: "Gift Officer", active: false },
];

export function PrysmJourney() {
  return (
    <section className="w-full min-h-[720px] font-['Urbanist'] flex items-center justify-center py-10 px-4 overflow-hidden" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}>
        <LeftColumn />

        {/* RIGHT — Journey Pipeline */}
        <div className="flex-1 relative flex flex-col justify-center p-8 lg:p-10 min-h-[500px]" style={{ background: "#F0F0F0" }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 flex flex-col gap-8">

            {/* Section label */}
            <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#999" }}>Intelligence Pipeline — 5 Stages</div>

            {/* Pipeline stages */}
            <div className="flex items-start gap-0">
              {STAGES.map((stage, i) => (
                <React.Fragment key={stage.id}>
                  <div className="flex flex-col items-center flex-1">
                    {/* Stage number + circle */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm mb-2 flex-shrink-0"
                      style={{
                        background: stage.active ? "#111111" : "#FFFFFF",
                        color: stage.active ? "#FFFFFF" : "#AAAAAA",
                        border: stage.active ? "none" : "1.5px solid #DCDCDC",
                        boxShadow: stage.active ? "0 4px 12px rgba(0,0,0,0.18)" : "none",
                      }}
                    >
                      {stage.id}
                    </div>
                    {/* Label */}
                    <div className="text-center">
                      <div className="text-[11px] font-black uppercase tracking-wide leading-tight whitespace-pre-line" style={{ color: stage.active ? "#111111" : "#333333" }}>
                        {stage.label}
                      </div>
                      <div className="text-[9px] font-semibold mt-0.5 leading-tight" style={{ color: "#AAAAAA" }}>{stage.sub}</div>
                    </div>
                    {/* Active indicator */}
                    {stage.active && (
                      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: "#111111", color: "#FFFFFF" }}>
                        Now
                      </div>
                    )}
                  </div>
                  {i < STAGES.length - 1 && (
                    <div className="flex items-center mt-5 flex-shrink-0 px-0.5">
                      <div className="h-px w-6" style={{ background: i < 2 ? "#333333" : "#CCCCCC" }} />
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" className="flex-shrink-0">
                        <path d="M1 1l4 3-4 3" stroke={i < 2 ? "#333333" : "#CCCCCC"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Active prospect example */}
            <div className="rounded-xl p-4" style={{ background: "#FFFFFF", border: "1px solid #E0E0E0", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#999" }}>Currently Processing</div>
                <div className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "#111111", color: "#FFFFFF" }}>Stage 3 of 5</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0" style={{ background: "#EBEBEB", color: "#333" }}>SC</div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sm" style={{ color: "#111111" }}>Sarah Chen</div>
                  <div className="text-[11px] font-medium" style={{ color: "#AAAAAA" }}>UCSF Medical Center · Cardiac Surgery · Discharged 3 days ago</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-black" style={{ color: "#111111" }}>$420K</div>
                  <div className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>Est. Capacity</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 rounded-full overflow-hidden" style={{ background: "#F0F0F0" }}>
                <div className="h-full rounded-full" style={{ width: "60%", background: "#111111" }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[9px]" style={{ color: "#AAAAAA" }}>Encounter detected</span>
                <span className="text-[9px] font-bold" style={{ color: "#333" }}>Wealth scoring in progress…</span>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "12,847", label: "Encounters / Mo" },
                { value: "1,422",  label: "Qualified" },
                { value: "~4 min", label: "Avg Pipeline Time" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl px-4 py-3" style={{ background: "#FFFFFF", border: "1px solid #E0E0E0" }}>
                  <div className="text-sm font-black" style={{ color: "#111111" }}>{value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wide mt-0.5" style={{ color: "#AAAAAA" }}>{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
