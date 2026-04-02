import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BLIPS = [
  { cx: 52,  cy: 38,  r: 4.5, label: "H. Chen",     cap: "$285K", score: 93, angle: 38  },
  { cx: 72,  cy: 62,  r: 3.5, label: "R. Walsh",    cap: "$420K", score: 87, angle: 62  },
  { cx: 34,  cy: 68,  r: 5,   label: "M. Torres",   cap: "$510K", score: 91, angle: 110 },
  { cx: 58,  cy: 78,  r: 3,   label: "D. Park",     cap: "$198K", score: 84, angle: 130 },
  { cx: 80,  cy: 44,  r: 3.5, label: "S. Nguyen",   cap: "$330K", score: 88, angle: 22  },
  { cx: 24,  cy: 50,  r: 3,   label: "C. Okafor",   cap: "$175K", score: 79, angle: 155 },
];

export function RadarHero() {
  return (
    <section className="border-b border-gray-100 py-20 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="flex-1 max-w-[560px]">
            <AnimatedSection>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-7"
                style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB)", color: "#fff", letterSpacing: "0.12em" }}
              >
                Platform 01 — Prysm
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h1
                className="font-black uppercase leading-[0.92] text-[#0A0E1A] mb-7"
                style={{ fontSize: "clamp(44px,5.5vw,72px)", letterSpacing: "-0.04em" }}
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
              <p className="text-gray-500 text-lg leading-relaxed mb-9">
                Prysm's AI radar continuously scans every patient encounter — detecting grateful patient
                signals, scoring wealth capacity, and routing qualified prospects to gift officers before
                the window of opportunity closes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 24px rgba(124,58,237,0.35)" }}
                >
                  Request a Demo
                </button>
                <Link href="/results">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 font-bold text-[15px] text-[#0A0E1A] hover:bg-gray-50 transition-colors" style={{ borderColor: "#E5E7EB" }}>
                    View Client Results <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Epic Integration
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-500" /> HIPAA Compliant
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                  <Activity className="w-3.5 h-3.5 text-cyan-500" /> Real-Time Scoring
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — Radar */}
          <AnimatedSection delay={0.1} className="flex-1 w-full flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[520px] aspect-square">

              {/* Outer glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 68%)" }}
              />

              <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%"   stopColor="#F5F3FF" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </radialGradient>
                  <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.22" />
                  </linearGradient>
                  <clipPath id="radarClip">
                    <circle cx="100" cy="100" r="90" />
                  </clipPath>

                  {/* Blip pulse filter */}
                  <filter id="blipGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Radar background */}
                <circle cx="100" cy="100" r="90" fill="url(#radarBg)" />

                {/* Concentric rings */}
                {[22, 44, 66, 88].map((r) => (
                  <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#7C3AED" strokeWidth="0.5" opacity="0.18" />
                ))}

                {/* Cross-hair lines */}
                <line x1="100" y1="10" x2="100" y2="190" stroke="#7C3AED" strokeWidth="0.4" opacity="0.12" />
                <line x1="10"  y1="100" x2="190" y2="100" stroke="#7C3AED" strokeWidth="0.4" opacity="0.12" />
                <line x1="36"  y1="36"  x2="164" y2="164" stroke="#7C3AED" strokeWidth="0.4" opacity="0.08" />
                <line x1="164" y1="36"  x2="36"  y2="164" stroke="#7C3AED" strokeWidth="0.4" opacity="0.08" />

                {/* Sweep arm + wake — animated rotation */}
                <g clipPath="url(#radarClip)">
                  {/* Sweep fill (pie wedge — 90° arc) */}
                  <path
                    d="M 100 100 L 100 12 A 88 88 0 0 1 175 143 Z"
                    fill="url(#sweepGrad)"
                    opacity="0.7"
                    style={{
                      transformOrigin: "100px 100px",
                      animation: "radarSweep 3.6s linear infinite",
                    }}
                  />
                  {/* Leading edge line */}
                  <line
                    x1="100" y1="100" x2="100" y2="12"
                    stroke="#7C3AED" strokeWidth="1.2" opacity="0.6"
                    style={{
                      transformOrigin: "100px 100px",
                      animation: "radarSweep 3.6s linear infinite",
                    }}
                  />
                </g>

                {/* Blips — prospect signals */}
                {BLIPS.map((b) => (
                  <g key={b.label}>
                    {/* Ping ring */}
                    <circle
                      cx={b.cx * 2}
                      cy={b.cy * 2}
                      r={b.r + 3}
                      fill="none"
                      stroke="#7C3AED"
                      strokeWidth="0.8"
                      opacity="0"
                      style={{
                        animation: `blipPing 3.6s ease-out infinite`,
                        animationDelay: `${(b.angle / 360) * 3.6}s`,
                      }}
                    />
                    {/* Core dot */}
                    <circle
                      cx={b.cx * 2}
                      cy={b.cy * 2}
                      r={b.r}
                      fill="#7C3AED"
                      opacity="0"
                      filter="url(#blipGlow)"
                      style={{
                        animation: `blipAppear 3.6s ease-out infinite`,
                        animationDelay: `${(b.angle / 360) * 3.6}s`,
                      }}
                    />
                  </g>
                ))}

                {/* Center hub */}
                <circle cx="100" cy="100" r="18" fill="white" stroke="#7C3AED" strokeWidth="1.5" opacity="0.3" />
                <circle cx="100" cy="100" r="12" style={{ fill: "url(#radarHubGrad, #7C3AED)" }} />
                <defs>
                  <linearGradient id="radarHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="12" fill="url(#radarHubGrad)" />
                <text x="100" y="97.5" textAnchor="middle" fill="white" fontSize="4" fontWeight="800" letterSpacing="0.5">PRYSM</text>
                <text x="100" y="104" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="2.8" fontWeight="600" letterSpacing="0.5">AI ENGINE</text>

                {/* Outer ring border */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#7C3AED" strokeWidth="0.8" opacity="0.22" />
              </svg>

              {/* Floating prospect cards — positioned outside the SVG */}
              {[
                { top: "6%",  left: "68%", name: "H. Chen",   score: 93, cap: "$285K" },
                { top: "28%", left: "82%", name: "S. Nguyen", score: 88, cap: "$330K" },
                { top: "62%", left: "4%",  name: "M. Torres", score: 91, cap: "$510K" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="absolute flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-md border border-gray-100 whitespace-nowrap"
                  style={{ top: p.top, left: p.left, zIndex: 10 }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0" style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}>
                    {p.name[0]}
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-[#0A0E1A] leading-tight">{p.name}</div>
                    <div className="text-[9px] text-gray-400 font-semibold">{p.cap} · Score {p.score}</div>
                  </div>
                </div>
              ))}

              {/* Input source labels */}
              {[
                { label: "Epic EMR",    deg: 270, dist: 106, color: "#7C3AED" },
                { label: "Windfall",    deg: 210, dist: 106, color: "#2563EB" },
                { label: "DonorSearch", deg: 150, dist: 106, color: "#0891B2" },
              ].map(({ label, deg, dist, color }) => {
                const rad = (deg * Math.PI) / 180;
                const x = 50 + dist * Math.cos(rad);
                const y = 50 + dist * Math.sin(rad);
                return (
                  <div
                    key={label}
                    className="absolute text-[10px] font-black uppercase tracking-wider"
                    style={{ color, left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>

            {/* Live stats strip */}
            <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
              {[
                { value: "12,847", label: "Encounters / Mo",  color: "#7C3AED" },
                { value: "1,422",  label: "Prospects Found",  color: "#2563EB" },
                { value: "47",     label: "Ready Today",      color: "#06B6D4" },
              ].map(({ value, label, color }) => (
                <div key={label} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                  <span className="text-base font-black" style={{ color }}>{value}</span>
                  <span className="text-[11px] font-semibold text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blipPing {
          0%   { opacity: 0; r: 4; }
          10%  { opacity: 0.45; }
          60%  { opacity: 0.1; r: 12; }
          100% { opacity: 0; r: 14; }
        }
        @keyframes blipAppear {
          0%   { opacity: 0; }
          8%   { opacity: 0.9; }
          70%  { opacity: 0.7; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
