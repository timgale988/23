import { ArrowRight, Bot, Zap, BrainCircuit, BarChart3, Clock, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AperionHero() {
  return (
    <section className="min-h-[90vh] flex flex-col w-full text-slate-50 font-sans" style={{ background: "#040814" }}>

      {/* BAND 1: Monumental Header (~40%) */}
      <div className="flex-none pt-24 pb-16 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(59,130,246,0.10)", filter: "blur(120px)" }}
        />

        <AnimatedSection className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest mb-8"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "#60A5FA" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#3B82F6" }} />
            PLATFORM 02 — APERION
          </div>

          <h1
            className="font-medium tracking-tight mb-8 leading-[1.1]"
            style={{ fontSize: "clamp(42px, 7vw, 96px)" }}
          >
            Every Gift Officer's{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60A5FA, #67E8F9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Unfair Advantage.
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: "#94A3B8" }}>
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor
            briefings, intelligent opportunity matching, and proposal intelligence.
          </p>
        </AnimatedSection>
      </div>

      {/* BAND 2: Feature Triptych (~60%) */}
      <div className="flex-1 flex flex-col">

        {/* 3-Column Grid */}
        <div
          className="flex-1 grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Column 1 — AI Briefings */}
          <AnimatedSection
            delay={0.05}
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden group"
            style={{
              background: "#060C1E",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="absolute top-0 right-0 p-8 pointer-events-none"
              style={{ opacity: 0.05, transform: "translate(16px, -16px)" }}
            >
              <Bot size={120} />
            </div>

            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{
                  background: "rgba(59,130,246,0.10)",
                  border: "1px solid rgba(59,130,246,0.20)",
                  color: "#60A5FA",
                }}
              >
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">AI Briefings</h3>
              <p className="leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
                Instantly synthesize years of engagement history, wealth screening, and philanthropic
                data into actionable pre-meeting intelligence.
              </p>
            </div>

            <div className="mt-auto inline-flex items-baseline gap-2">
              <span className="text-3xl font-medium text-white">75%</span>
              <span className="text-sm uppercase tracking-wider" style={{ color: "#94A3B8" }}>Admin Time Saved</span>
            </div>
          </AnimatedSection>

          {/* Column 2 — Opportunity Matching */}
          <AnimatedSection
            delay={0.10}
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden group"
            style={{
              background: "#08101F",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="absolute top-0 right-0 p-8 pointer-events-none"
              style={{ opacity: 0.05, transform: "translate(16px, -16px)" }}
            >
              <Zap size={120} />
            </div>

            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{
                  background: "rgba(6,182,212,0.10)",
                  border: "1px solid rgba(6,182,212,0.20)",
                  color: "#22D3EE",
                }}
              >
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Opportunity Matching</h3>
              <p className="leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
                Identify hidden giving capacity and surface the exact right moment to ask, based on
                predictive behavioral models.
              </p>
            </div>

            <div className="mt-auto inline-flex items-baseline gap-2">
              <span className="text-3xl font-medium text-white">3×</span>
              <span className="text-sm uppercase tracking-wider" style={{ color: "#94A3B8" }}>Meaningful Touchpoints</span>
            </div>
          </AnimatedSection>

          {/* Column 3 — Proposal Intelligence */}
          <AnimatedSection
            delay={0.15}
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden group"
            style={{ background: "#0A0F28" }}
          >
            <div
              className="absolute top-0 right-0 p-8 pointer-events-none"
              style={{ opacity: 0.05, transform: "translate(16px, -16px)" }}
            >
              <BrainCircuit size={120} />
            </div>

            <div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                style={{
                  background: "rgba(99,102,241,0.10)",
                  border: "1px solid rgba(99,102,241,0.20)",
                  color: "#818CF8",
                }}
              >
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Proposal Intelligence</h3>
              <p className="leading-relaxed mb-8" style={{ color: "#94A3B8" }}>
                Draft highly personalized, multi-million dollar proposals that align donor passions
                with institutional priorities in minutes.
              </p>
            </div>

            <div className="mt-auto inline-flex items-baseline gap-2">
              <span className="text-3xl font-medium text-white">20:1</span>
              <span className="text-sm uppercase tracking-wider" style={{ color: "#94A3B8" }}>Average ROI</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Footer CTAs */}
        <AnimatedSection
          delay={0.20}
          className="py-12 px-6 flex flex-col items-center justify-center gap-8"
          style={{ background: "#040814", borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              className="h-14 px-8 rounded-full text-white font-medium text-lg transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                boxShadow: "0 0 30px -5px rgba(59,130,246,0.4)",
                border: "none",
              }}
            >
              Request a Demo
            </button>
            <button
              className="flex items-center gap-2 h-14 px-8 rounded-full font-medium text-lg transition-all hover:bg-white/5 group"
              style={{ color: "#CBD5E1", background: "transparent", border: "none" }}
            >
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm" style={{ color: "#64748B" }}>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>75% admin time</span>
            </div>
            <div className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "#334155" }} />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>20:1 ROI</span>
            </div>
            <div className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "#334155" }} />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>3× touchpoints</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
