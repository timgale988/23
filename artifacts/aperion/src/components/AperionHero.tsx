import { ArrowRight, CheckCircle2, Brain, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BRIEFING_LINES = [
  { label: "Giving History",    value: "$2.4M lifetime · Major gifts program since 2018", color: "#7C3AED" },
  { label: "Wealth Capacity",   value: "Est. $14.2M · Top 3% of portfolio",               color: "#6366F1" },
  { label: "Interest Alignment",value: "Pediatric oncology · Research endowment 94% fit",  color: "#8B5CF6" },
  { label: "Recommended Ask",   value: "$500K — Endowed Research Chair in Pediatric Care", color: "#7C3AED" },
];

const PIPELINE = [
  { label: "Research", count: 142, color: "#7C3AED" },
  { label: "Briefed",  count: 87,  color: "#6366F1" },
  { label: "Meeting",  count: 34,  color: "#8B5CF6" },
  { label: "Proposal", count: 18,  color: "#A78BFA" },
  { label: "Closed",   count: 9,   color: "#C4B5FD" },
];

export function AperionHero() {
  return (
    <>
      {/* ── Dark hero section ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "72vh" }}>

        <img
          src="/aperion/hero-doctor-ai.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          style={{ filter: "hue-rotate(200deg) saturate(0.8)" }}
        />

        {/* Full-coverage left-to-right: dark navy → medium blue */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(15,30,100,0.97) 0%, rgba(25,55,140,0.93) 30%, rgba(37,99,235,0.82) 65%, rgba(28,80,190,0.72) 100%)" }}
        />
        {/* Radial blue glow — left anchor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 12% 50%, rgba(37,99,235,0.25) 0%, transparent 50%)" }}
        />
        {/* Bottom veil */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: "40%", background: "linear-gradient(to top, rgba(10,20,80,0.97) 0%, rgba(20,45,130,0.60) 60%, transparent 100%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center" style={{ minHeight: "72vh" }}>
          <div className="max-w-[620px] py-24">
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
        </div>
      </section>

      {/* ── Section divider ── */}
      <div style={{ height: "8px", background: "#E5E7EB" }} />

      {/* ── Dark visualization section ── */}
      <section style={{ background: "#0A0E1A" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

          {/* Divider header */}
          <AnimatedSection className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5))" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#22D3EE" }}>
              AI Intelligence Engine — Live
            </span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(34,211,238,0.5), transparent)" }} />
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-start gap-8">

            {/* Briefing card */}
            <AnimatedSection delay={0.08} className="flex-1">
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.08)" }}>

                <div className="flex items-center gap-3 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-base flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}
                  >
                    M
                  </div>
                  <div>
                    <div className="font-black text-sm leading-tight text-white">Margaret A. Holloway</div>
                    <div className="text-[11px] font-semibold" style={{ color: "#6B7280" }}>
                      Trustee Emeritus · Children's Hospital Foundation
                    </div>
                  </div>
                  <div
                    className="ml-auto text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1.5"
                    style={{ background: "rgba(34,211,238,0.10)", color: "#22D3EE", border: "1px solid rgba(34,211,238,0.25)" }}
                  >
                    <span className="w-2 h-2 rounded-full inline-block animate-pulse" style={{ background: "#22D3EE" }} />
                    AI Briefing Ready
                  </div>
                </div>

                {BRIEFING_LINES.map(({ label, value }, i) => {
                  const accentColors = ["#22D3EE", "#60A5FA", "#818CF8", "#38BDF8"];
                  const c = accentColors[i % accentColors.length];
                  return (
                    <div
                      key={label}
                      className="flex items-start gap-3"
                      style={{ animation: `fadeSlideIn 0.4s ease both`, animationDelay: `${0.3 + i * 0.12}s` }}
                    >
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: c }} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: c }}>{label}</div>
                        <div className="text-[12px] font-semibold leading-snug" style={{ color: "#D1D5DB" }}>{value}</div>
                      </div>
                    </div>
                  );
                })}

                <div className="mt-2 pt-4 text-[11px] font-bold uppercase tracking-widest" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "#6B7280" }}>
                  Generated in 1.4s · Aperion AI
                </div>
              </div>
            </AnimatedSection>

            {/* Stats + pipeline */}
            <AnimatedSection delay={0.14} className="flex flex-col gap-5" style={{ minWidth: 280 }}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "75%",  label: "Admin Saved",       color: "#60A5FA" },
                  { value: "3×",   label: "Donor Touchpoints", color: "#22D3EE" },
                  { value: "20:1", label: "ROI by Year Two",   color: "#60A5FA" },
                ].map(({ value, label, color }) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 px-3 py-4 rounded-xl"
                    style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-xl font-black" style={{ color }}>{value}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wide" style={{ color: "#6B7280" }}>{label}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: "#0D1117", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: "#22D3EE" }}>
                  Gift Pipeline — Active
                </div>
                {PIPELINE.map(({ label, count, color }) => {
                  const pct = Math.round((count / 142) * 100);
                  return (
                    <div key={label} className="flex items-center gap-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider w-16 flex-shrink-0" style={{ color: "#6B7280" }}>{label}</div>
                      <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, background: color, animation: "barGrow 1s ease both", animationDelay: "0.5s" }}
                        />
                      </div>
                      <div className="text-[10px] font-black w-6 text-right flex-shrink-0" style={{ color: "#9CA3AF" }}>{count}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-2">
                {["Blackbaud CRM", "Salesforce NPSP"].map((crm) => (
                  <div
                    key={crm}
                    className="flex-1 text-center text-[10px] font-bold uppercase tracking-wider py-2 rounded-lg"
                    style={{ background: "#0D1117", color: "#9CA3AF", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    {crm}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barGrow {
          from { width: 0; }
        }
      `}</style>
    </>
  );
}
