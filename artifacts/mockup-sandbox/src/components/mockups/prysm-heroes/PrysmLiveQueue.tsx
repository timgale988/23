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
      Every morning, Prysm delivers a prioritized queue of fully qualified prospects directly to each gift officer — scored, researched, and ready for outreach.
    </p>
    <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
      <button className="px-7 py-3.5 rounded-lg text-white font-bold text-sm transition-all hover:opacity-80" style={{ background: "#111111" }}>Request a Demo</button>
      <button className="px-7 py-3.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-50 transition-all" style={{ border: "1.5px solid #DCDCDC", color: "#333333" }}>
        View Client Results
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
    <div className="pt-6 border-t grid grid-cols-2 gap-x-6 gap-y-3" style={{ borderColor: "#EBEBEB" }}>
      {["Epic EHR Certified", "HIPAA Compliant", "Real-Time Scoring", "SOC 2 Type II"].map((label) => (
        <div key={label} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#555" }} />
          <span className="text-xs font-semibold" style={{ color: "#707070" }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
);

const PROSPECTS = [
  {
    initials: "SC",
    name: "Sarah Chen",
    system: "UCSF Medical Center",
    dept: "Cardiac Surgery",
    score: 94,
    capacity: "$420K",
    days: 3,
    status: "Ready for Outreach",
    statusDark: true,
  },
  {
    initials: "RW",
    name: "Robert Walsh",
    system: "Mount Sinai",
    dept: "Oncology",
    score: 91,
    capacity: "$285K",
    days: 5,
    status: "Brief Generated",
    statusDark: false,
  },
  {
    initials: "MT",
    name: "Michelle Torres",
    system: "Johns Hopkins",
    dept: "Neurology",
    score: 87,
    capacity: "$510K",
    days: 8,
    status: "In Cultivation",
    statusDark: false,
  },
  {
    initials: "DP",
    name: "David Park",
    system: "Cleveland Clinic",
    dept: "Orthopedics",
    score: 85,
    capacity: "$198K",
    days: 1,
    status: "New Match",
    statusDark: false,
  },
];

export function PrysmLiveQueue() {
  return (
    <section className="w-full min-h-[720px] font-['Urbanist'] flex items-center justify-center py-10 px-4 overflow-hidden" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}>
        <LeftColumn />

        {/* RIGHT — Live Queue */}
        <div className="flex-1 relative flex flex-col justify-center p-6 lg:p-8 min-h-[500px]" style={{ background: "#F0F0F0" }}>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          <div className="relative z-10 flex flex-col gap-4">

            {/* Queue header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#999" }}>Gift Officer Queue</div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: "#555" }}>47 prospects ready · Updated just now</div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#111111" }} />
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#333" }}>Live</span>
              </div>
            </div>

            {/* Column headers */}
            <div className="grid items-center px-4 py-2 rounded-lg" style={{ gridTemplateColumns: "2fr 1fr 1fr 1.2fr", background: "#E8E8E8" }}>
              {["Prospect", "Score", "Capacity", "Status"].map((h) => (
                <div key={h} className="text-[9px] font-black uppercase tracking-widest" style={{ color: "#999" }}>{h}</div>
              ))}
            </div>

            {/* Prospect rows */}
            <div className="flex flex-col gap-2">
              {PROSPECTS.map((p, i) => (
                <div
                  key={p.name}
                  className="grid items-center px-4 py-3.5 rounded-xl"
                  style={{
                    gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
                    background: "#FFFFFF",
                    border: `1px solid ${i === 0 ? "#CCCCCC" : "#E8E8E8"}`,
                    boxShadow: i === 0 ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {/* Prospect identity */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0"
                      style={{ background: i === 0 ? "#111111" : "#F0F0F0", color: i === 0 ? "#FFFFFF" : "#555555" }}
                    >
                      {p.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-black truncate" style={{ color: "#111111" }}>{p.name}</div>
                      <div className="text-[10px] truncate" style={{ color: "#AAAAAA" }}>{p.system} · {p.dept}</div>
                    </div>
                  </div>

                  {/* Score */}
                  <div>
                    <div className="text-sm font-black" style={{ color: "#111111" }}>{p.score}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>/ 100</div>
                  </div>

                  {/* Capacity */}
                  <div>
                    <div className="text-sm font-black" style={{ color: "#111111" }}>{p.capacity}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>Est.</div>
                  </div>

                  {/* Status */}
                  <div>
                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded-full"
                      style={{
                        background: p.statusDark ? "#111111" : "#F0F0F0",
                        color: p.statusDark ? "#FFFFFF" : "#555555",
                      }}
                    >
                      {p.status}
                    </span>
                    <div className="text-[9px] mt-1" style={{ color: "#AAAAAA" }}>{p.days}d since discharge</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-3 gap-3 mt-1">
              {[
                { value: "12,847", label: "Encounters Processed" },
                { value: "1,422",  label: "Prospects Qualified" },
                { value: "47",     label: "New Today" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "#FFFFFF", border: "1px solid #E0E0E0" }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#333333" }} />
                  <div>
                    <div className="text-sm font-black" style={{ color: "#111111" }}>{value}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "#AAAAAA" }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
