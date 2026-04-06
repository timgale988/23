import { Plug, Sparkles, Handshake, ChevronRight, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AperionHero() {
  return (
    <div
      className="min-h-screen w-full flex flex-col font-sans text-white overflow-hidden"
      style={{ backgroundColor: "#03081A" }}
    >
      {/* TOP STRIP — Badge + Headline */}
      <AnimatedSection className="w-full flex flex-col justify-center items-center px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-gray-300 mb-6 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Platform 02 — Aperion
        </div>

        <h1
          className="font-bold tracking-tight leading-tight mb-4 max-w-4xl"
          style={{ fontSize: "clamp(36px,4vw,56px)" }}
        >
          Here's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            exactly
          </span>{" "}
          how Aperion works.
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl">
          Three steps from CRM data to closed gift — all automated.
        </p>
      </AnimatedSection>

      {/* NUMBERED STEPS */}
      <AnimatedSection
        delay={0.1}
        className="w-full flex items-center justify-center px-4 sm:px-8 py-8"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* STEP 01 */}
          <div
            className="relative overflow-hidden border rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1 duration-300 group"
            style={{ backgroundColor: "#0D1117", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="absolute top-4 right-4 font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors"
              style={{ fontSize: 80 }}>
              01
            </div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20"
              style={{ backgroundColor: "rgba(6,182,212,0.08)" }}>
              <Plug className="w-6 h-6 text-cyan-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              Sync with Blackbaud CRM or Salesforce NPSP
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              Aperion connects to your existing CRM in minutes — no migration, no IT project.
              Patient and donor data flows in automatically.
            </p>

            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-cyan-400">✓</span> Zero setup time
            </div>
          </div>

          {/* STEP 02 */}
          <div
            className="relative overflow-hidden border rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1 duration-300 group"
            style={{ backgroundColor: "#0D1117", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="absolute top-4 right-4 font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors"
              style={{ fontSize: 80 }}>
              02
            </div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20"
              style={{ backgroundColor: "rgba(59,130,246,0.08)" }}>
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              AI prepares every briefing before every meeting
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              Before each donor conversation, Aperion assembles a complete briefing — capacity
              signals, prior giving history, relationship notes, and a suggested ask — from your
              library of 300+ entries.
            </p>

            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-blue-400">⬡</span> AI-Generated · Ready in seconds
            </div>
          </div>

          {/* STEP 03 */}
          <div
            className="relative overflow-hidden border rounded-2xl p-7 flex flex-col transition-transform hover:-translate-y-1 duration-300 group"
            style={{ backgroundColor: "#0D1117", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="absolute top-4 right-4 font-black leading-none text-white/[0.04] select-none pointer-events-none group-hover:text-white/[0.08] transition-colors"
              style={{ fontSize: 80 }}>
              03
            </div>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20"
              style={{ backgroundColor: "rgba(16,185,129,0.08)" }}>
              <Handshake className="w-6 h-6 text-emerald-400" />
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 z-10">
              Gift officers arrive prepared — and close more
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8 flex-grow z-10">
              With briefings done automatically, gift officers spend their time on relationships.
              Average teams see 3× touchpoints and 20:1 ROI within one fundraising cycle.
            </p>

            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 w-fit z-10">
              <span className="text-emerald-400 text-lg leading-none">⚡</span> 20:1 ROI · 3× touchpoints
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* BOTTOM CTA STRIP */}
      <div
        className="w-full relative overflow-hidden"
        style={{ backgroundColor: "#04081E", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <AnimatedSection delay={0.18} className="flex flex-col items-center justify-center px-6 py-16">
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "rgba(37,99,235,0.10)", filter: "blur(120px)" }}
          />

          <h2
            className="font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 relative z-10"
            style={{ fontSize: "clamp(28px,3vw,44px)" }}
          >
            Every Gift Officer's Unfair Advantage.
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 relative z-10">
            <button
              className="px-8 py-3.5 rounded-full text-white font-medium transition-all flex items-center gap-2 group"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              Request a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2">
              View Case Study
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <p className="text-gray-500 text-sm font-medium relative z-10">
            Built for Blackbaud CRM and Salesforce NPSP
          </p>
        </AnimatedSection>
      </div>

    </div>
  );
}
