import { ArrowRight, CheckCircle2, Brain, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BRIEFING_LINES = [
  { label: "Giving History",    value: "$2.4M lifetime · Major gifts program since 2018", color: "#2563EB" },
  { label: "Wealth Capacity",   value: "Est. $14.2M · Top 3% of portfolio",               color: "#0891B2" },
  { label: "Interest Alignment",value: "Pediatric oncology · Research endowment 94% fit",  color: "#06B6D4" },
  { label: "Recommended Ask",   value: "$500K — Endowed Research Chair in Pediatric Care", color: "#0E7490" },
];

const PIPELINE = [
  { label: "Research", count: 142, color: "#2563EB" },
  { label: "Briefed",  count: 87,  color: "#0891B2" },
  { label: "Meeting",  count: 34,  color: "#06B6D4" },
  { label: "Proposal", count: 18,  color: "#0E7490" },
  { label: "Closed",   count: 9,   color: "#0EA5E9" },
];

export function AperionHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>

      {/* ── Background image ── */}
      <img
        src="/hero-doctor-ai.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        style={{ filter: "hue-rotate(200deg) saturate(0.8)" }}
      />

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(100deg, rgba(10,14,26,0.97) 0%, rgba(10,14,26,0.84) 38%, rgba(10,14,26,0.45) 62%, rgba(10,14,26,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.06) 0%, transparent 60%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: "55%", background: "linear-gradient(to top, rgba(10,14,26,0.96) 0%, rgba(10,14,26,0.72) 50%, transparent 100%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col" style={{ minHeight: "90vh" }}>

        {/* ── Row 1: Text ── */}
        <div className="flex flex-col lg:flex-row items-start gap-12 pt-24 pb-10 flex-1">

          <div className="flex-1 max-w-[620px]">
            <AnimatedSection>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8"
                style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)", color: "#fff", letterSpacing: "0.12em" }}
              >
                Platform 02 — Aperion
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <h1
                className="font-black uppercase leading-[0.92] text-white mb-8"
                style={{ fontSize: "clamp(48px,6vw,80px)", letterSpacing: "-0.04em" }}
              >
                Every Gift
                <br />Officer's
                <br />
                <span style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Unfair Advantage.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.14}>
              <p className="text-lg leading-relaxed mb-4 max-w-[500px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor
                briefings, intelligent opportunity matching, and proposal intelligence that makes every
                conversation count.
              </p>
              <p className="text-sm leading-relaxed mb-10 max-w-[500px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                Built for Blackbaud CRM and Salesforce NPSP. Works inside the tools your team already uses.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <div className="flex flex-wrap gap-3 mb-10">
                <button
                  className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", boxShadow: "0 8px 24px rgba(6,182,212,0.4)" }}
                >
                  Request a Demo
                </button>
                <button
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] transition-all hover:bg-white/10"
                  style={{ border: "1.5px solid rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.85)" }}
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />,  label: "Blackbaud CRM" },
                  { icon: <Brain        className="w-3.5 h-3.5 text-cyan-400" />,  label: "AI Briefings" },
                  { icon: <Zap          className="w-3.5 h-3.5 text-sky-400" />,   label: "75% Admin Saved" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {icon} {label}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right — empty, shows bg */}
          <div className="flex-1 hidden lg:block" />
        </div>

        {/* ── Row 2: AI Briefing visualization — moved down ── */}
        <AnimatedSection delay={0.22} className="pb-16">
          <div className="flex flex-col items-center">

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8 w-full max-w-5xl">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
                AI Intelligence Engine — Live
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-5xl">

              {/* Left: animated briefing card */}
              <div
                className="flex-1 rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)" }}
              >
                {/* Prospect header */}
                <div className="flex items-center gap-3 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}
                  >
                    M
                  </div>
                  <div>
                    <div className="text-white font-black text-sm leading-tight">Margaret A. Holloway</div>
                    <div className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Trustee Emeritus · Children's Hospital Foundation
                    </div>
                  </div>
                  <div
                    className="ml-auto text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{ background: "rgba(6,182,212,0.15)", color: "#06B6D4", border: "1px solid rgba(6,182,212,0.25)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
                    AI Briefing Ready
                  </div>
                </div>

                {/* Briefing rows */}
                {BRIEFING_LINES.map(({ label, value, color }, i) => (
                  <div
                    key={label}
                    className="flex items-start gap-3"
                    style={{ animation: `fadeSlideIn 0.4s ease both`, animationDelay: `${0.6 + i * 0.15}s` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: `${color}cc` }}>{label}</div>
                      <div className="text-[12px] font-semibold leading-snug" style={{ color: "rgba(255,255,255,0.7)" }}>{value}</div>
                    </div>
                  </div>
                ))}

                <div
                  className="mt-2 pt-4 text-[11px] font-bold uppercase tracking-widest"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.2)" }}
                >
                  Generated in 1.4s · Aperion AI
                </div>
              </div>

              {/* Right: stats + pipeline */}
              <div className="flex flex-col gap-5" style={{ minWidth: 280 }}>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "75%",  label: "Admin Saved",        color: "#2563EB" },
                    { value: "3×",   label: "Donor Touchpoints",  color: "#0891B2" },
                    { value: "20:1", label: "ROI by Year Two",    color: "#06B6D4" },
                  ].map(({ value, label, color }) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 px-3 py-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <span className="text-lg font-black" style={{ color }}>{value}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Pipeline */}
                <div
                  className="rounded-xl p-4 flex flex-col gap-3"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Gift Pipeline — Active
                  </div>
                  {PIPELINE.map(({ label, count, color }) => {
                    const pct = Math.round((count / 142) * 100);
                    return (
                      <div key={label} className="flex items-center gap-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider w-16 flex-shrink-0" style={{ color: "rgba(255,255,255,0.45)" }}>{label}</div>
                        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, background: color, animation: "barGrow 1s ease both", animationDelay: "0.8s" }}
                          />
                        </div>
                        <div className="text-[10px] font-black w-6 text-right flex-shrink-0" style={{ color: "rgba(255,255,255,0.55)" }}>{count}</div>
                      </div>
                    );
                  })}
                </div>

                {/* CRM badges */}
                <div className="flex gap-2">
                  {["Blackbaud CRM", "Salesforce NPSP"].map((crm) => (
                    <div
                      key={crm}
                      className="flex-1 text-center text-[10px] font-bold uppercase tracking-wider py-2 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {crm}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barGrow {
          from { width: 0; }
        }
      `}</style>
    </section>
  );
}
