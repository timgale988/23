import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BLIPS = [
  { cx: 52,  cy: 38,  r: 4.5, angle: 38  },
  { cx: 72,  cy: 62,  r: 3.5, angle: 62  },
  { cx: 34,  cy: 68,  r: 5,   angle: 110 },
  { cx: 58,  cy: 78,  r: 3,   angle: 130 },
  { cx: 80,  cy: 44,  r: 3.5, angle: 22  },
  { cx: 24,  cy: 50,  r: 3,   angle: 155 },
];

export function RadarHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>

      {/* ── Background image ── */}
      <img
        src="/hero-doctor-ai.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      {/* ── Gradient overlays ── */}
      {/* Full-coverage left-to-right: dark violet → medium indigo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(90deg, rgba(45,20,100,0.97) 0%, rgba(55,30,130,0.93) 30%, rgba(37,99,235,0.82) 65%, rgba(30,80,180,0.72) 100%)" }}
      />
      {/* Radial purple glow — left anchor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 12% 50%, rgba(124,58,237,0.28) 0%, transparent 50%)" }}
      />
      {/* Bottom veil — deep indigo base for radar section */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: "55%", background: "linear-gradient(to top, rgba(15,23,74,0.97) 0%, rgba(25,45,120,0.70) 50%, transparent 100%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col" style={{ minHeight: "90vh" }}>

        {/* ── Row 1: Text + spacer ── */}
        <div className="flex flex-col lg:flex-row items-start gap-12 pt-24 pb-10 flex-1">

          {/* Left — headline + CTAs */}
          <div className="flex-1 max-w-[600px]">
            <AnimatedSection>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8"
                style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB)", color: "#fff", letterSpacing: "0.12em" }}
              >
                Platform 01 — Prysm
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h1
                className="font-black uppercase leading-[0.92] text-white mb-8"
                style={{ fontSize: "clamp(48px,6vw,80px)", letterSpacing: "-0.04em" }}
              >
                Grateful Patients
                <br />Become
                <br />
                <span style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Transformational Donors.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <p className="text-lg leading-relaxed mb-10 max-w-[480px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Prysm's AI radar continuously scans every patient encounter — detecting grateful patient
                signals, scoring wealth capacity, and routing qualified prospects to gift officers before
                the window of opportunity closes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 24px rgba(124,58,237,0.45)" }}
                >
                  Request a Demo
                </button>
                <Link href="/results">
                  <button
                    className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] transition-all hover:bg-white/10"
                    style={{ border: "1.5px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)" }}
                  >
                    View Client Results <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />,   label: "Epic Integration" },
                  { icon: <ShieldCheck  className="w-3.5 h-3.5 text-violet-400" />, label: "HIPAA Compliant" },
                  { icon: <Activity     className="w-3.5 h-3.5 text-cyan-400" />,   label: "Real-Time Scoring" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {icon} {label}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — intentionally empty: shows the doctor image through the gradient */}
          <div className="flex-1 hidden lg:block" />
        </div>

        {/* ── Row 2: Radar graphic — moved down ── */}
        <AnimatedSection delay={0.22} className="pb-16">
          <div className="flex flex-col items-center">

            {/* Divider label */}
            <div className="flex items-center gap-4 mb-8 w-full max-w-2xl">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                AI Prospect Radar — Live
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 w-full">

              {/* Radar SVG */}
              <div className="relative flex-shrink-0" style={{ width: 340, height: 340 }}>
                {/* Outer glow */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
                />

                <svg viewBox="0 0 200 200" width="340" height="340" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="radarBgDark" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1a1040" />
                      <stop offset="100%" stopColor="#0d0a1e" />
                    </radialGradient>
                    <linearGradient id="sweepGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.35" />
                    </linearGradient>
                    <linearGradient id="radarHubGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                    <clipPath id="radarClipDark">
                      <circle cx="100" cy="100" r="90" />
                    </clipPath>
                    <filter id="blipGlowDark">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <circle cx="100" cy="100" r="90" fill="url(#radarBgDark)" opacity="0.85" />

                  {/* Concentric rings */}
                  {[22, 44, 66, 88].map((r) => (
                    <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#7C3AED" strokeWidth="0.6" opacity="0.28" />
                  ))}

                  {/* Cross-hair */}
                  <line x1="100" y1="10" x2="100" y2="190" stroke="#7C3AED" strokeWidth="0.4" opacity="0.2" />
                  <line x1="10"  y1="100" x2="190" y2="100" stroke="#7C3AED" strokeWidth="0.4" opacity="0.2" />
                  <line x1="36"  y1="36"  x2="164" y2="164" stroke="#7C3AED" strokeWidth="0.4" opacity="0.12" />
                  <line x1="164" y1="36"  x2="36"  y2="164" stroke="#7C3AED" strokeWidth="0.4" opacity="0.12" />

                  {/* Sweep + wake */}
                  <g clipPath="url(#radarClipDark)">
                    <path
                      d="M 100 100 L 100 12 A 88 88 0 0 1 175 143 Z"
                      fill="url(#sweepGradDark)"
                      opacity="0.8"
                      style={{ transformOrigin: "100px 100px", animation: "radarSweep 3.6s linear infinite" }}
                    />
                    <line
                      x1="100" y1="100" x2="100" y2="12"
                      stroke="#7C3AED" strokeWidth="1.4" opacity="0.85"
                      style={{ transformOrigin: "100px 100px", animation: "radarSweep 3.6s linear infinite" }}
                    />
                  </g>

                  {/* Blips */}
                  {BLIPS.map((b, i) => (
                    <g key={i}>
                      <circle
                        cx={b.cx * 2} cy={b.cy * 2} r={b.r + 4}
                        fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0"
                        style={{ animation: "blipPing 3.6s ease-out infinite", animationDelay: `${(b.angle / 360) * 3.6}s` }}
                      />
                      <circle
                        cx={b.cx * 2} cy={b.cy * 2} r={b.r}
                        fill="#06B6D4" opacity="0"
                        filter="url(#blipGlowDark)"
                        style={{ animation: "blipAppear 3.6s ease-out infinite", animationDelay: `${(b.angle / 360) * 3.6}s` }}
                      />
                    </g>
                  ))}

                  {/* Center hub */}
                  <circle cx="100" cy="100" r="18" fill="rgba(124,58,237,0.15)" stroke="#7C3AED" strokeWidth="1" opacity="0.5" />
                  <circle cx="100" cy="100" r="12" fill="url(#radarHubGradDark)" />
                  <text x="100" y="97.5" textAnchor="middle" fill="white" fontSize="4" fontWeight="800" letterSpacing="0.5">PRYSM</text>
                  <text x="100" y="104"  textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="2.8" fontWeight="600" letterSpacing="0.5">AI ENGINE</text>

                  <circle cx="100" cy="100" r="90" fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0.3" />
                </svg>

                {/* Floating prospect cards */}
                {[
                  { top: "4%",  left: "72%", name: "H. Chen",   score: 93, cap: "$285K" },
                  { top: "60%", left: "-8%", name: "M. Torres", score: 91, cap: "$510K" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="absolute flex items-center gap-2 rounded-xl px-3 py-2 whitespace-nowrap"
                    style={{
                      top: p.top, left: p.left, zIndex: 10,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0" style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}>
                      {p.name[0]}
                    </div>
                    <div>
                      <div className="text-[11px] font-black text-white leading-tight">{p.name}</div>
                      <div className="text-[9px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>{p.cap} · Score {p.score}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats + source labels — right of radar */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "12,847", label: "Encounters / Mo",  color: "#7C3AED" },
                    { value: "1,422",  label: "Prospects Found",  color: "#2563EB" },
                    { value: "47",     label: "Ready Today",      color: "#06B6D4" },
                  ].map(({ value, label, color }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 px-4 py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <span className="text-xl font-black" style={{ color }}>{value}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Epic EMR",    color: "#7C3AED", desc: "FHIR encounter signals ingested in real time" },
                    { label: "Windfall",    color: "#2563EB", desc: "Wealth capacity scored automatically" },
                    { label: "DonorSearch", color: "#0891B2", desc: "Philanthropic history cross-referenced" },
                  ].map(({ label, color, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ background: color }} />
                      <div>
                        <div className="text-[11px] font-black uppercase tracking-wider" style={{ color }}>{label}</div>
                        <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blipPing {
          0%   { opacity: 0; }
          10%  { opacity: 0.5; }
          60%  { opacity: 0.1; }
          100% { opacity: 0; }
        }
        @keyframes blipAppear {
          0%   { opacity: 0; }
          8%   { opacity: 0.95; }
          70%  { opacity: 0.75; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
