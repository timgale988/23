import { ArrowRight, Check, Hexagon, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function AperionHero() {
  return (
    <div
      className="flex flex-col lg:flex-row w-full text-white font-sans overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* LEFT COLUMN — Data */}
      <div
        className="w-full lg:w-[42%] flex flex-col justify-between relative"
        style={{ backgroundColor: "#03071A", padding: "clamp(40px,6vw,80px)" }}
      >
        <AnimatedSection className="flex-1 flex flex-col justify-center">
          <div style={{ marginTop: "clamp(32px,5vw,0px)" }} />
          {/* Giant number */}
          <div style={{ marginBottom: 8, marginLeft: "clamp(-8px,-1vw,-16px)" }}>
            <span
              className="font-bold leading-none tracking-tighter"
              style={{
                fontSize: "clamp(110px,16vw,220px)",
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              75%
            </span>
          </div>

          <div
            className="font-semibold uppercase"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.16em",
              color: "#6B7280",
              marginBottom: "clamp(40px,6vw,80px)",
            }}
          >
            of administrative time eliminated
          </div>

          <div
            className="w-full"
            style={{ height: 1, background: "rgba(255,255,255,0.10)", marginBottom: "clamp(40px,6vw,64px)" }}
          />

          <div className="flex flex-col" style={{ gap: "clamp(32px,4vw,40px)" }}>
            <div>
              <div
                className="font-light tracking-tight"
                style={{ fontSize: "clamp(32px,4vw,48px)", marginBottom: 6 }}
              >
                20:1 ROI
              </div>
              <div
                className="uppercase font-medium"
                style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "#6B7280" }}
              >
                Average first-year return
              </div>
            </div>

            <div>
              <div
                className="font-light tracking-tight"
                style={{ fontSize: "clamp(32px,4vw,48px)", marginBottom: 6 }}
              >
                3× touchpoints
              </div>
              <div
                className="uppercase font-medium"
                style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "#6B7280" }}
              >
                Increase in donor engagement
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Badge footer */}
        <div style={{ marginTop: "clamp(48px,6vw,80px)" }}>
          <span
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: "0.62rem", color: "#4B5563" }}
          >
            Platform 02 — Aperion
          </span>
        </div>

        {/* Vertical rule (desktop) */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0"
          style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
        />
      </div>

      {/* RIGHT COLUMN — Story */}
      <div
        className="w-full lg:w-[58%] flex flex-col justify-center"
        style={{
          backgroundColor: "#04081E",
          padding: "clamp(40px,6vw,112px)",
        }}
      >
        <AnimatedSection delay={0.08}>
          <div style={{ maxWidth: 560 }}>
            {/* Badge */}
            <div
              className="inline-flex items-center font-mono tracking-wide"
              style={{
                borderRadius: 9999,
                border: "1px solid rgba(59,130,246,0.2)",
                background: "rgba(59,130,246,0.08)",
                padding: "4px 12px",
                fontSize: "0.7rem",
                color: "#60A5FA",
                marginBottom: 32,
              }}
            >
              PLATFORM 02 — APERION
            </div>

            {/* Headline */}
            <h1
              className="font-medium tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(36px,4vw,58px)", marginBottom: 24 }}
            >
              Every Gift Officer's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Unfair Advantage.
              </span>
            </h1>

            {/* Description */}
            <p
              className="font-light leading-relaxed"
              style={{ fontSize: "clamp(16px,1.5vw,20px)", color: "#9CA3AF", marginBottom: 48 }}
            >
              Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor
              briefings, intelligent opportunity matching, and proposal intelligence.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center"
              style={{ gap: 16, marginBottom: 80 }}
            >
              <button
                className="font-medium tracking-wide transition-opacity hover:opacity-90"
                style={{
                  padding: "16px 32px",
                  borderRadius: 9999,
                  background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Request a Demo
              </button>
              <button
                className="flex items-center gap-2 font-medium tracking-wide transition-colors hover:bg-white/5"
                style={{
                  padding: "16px 32px",
                  borderRadius: 9999,
                  color: "#fff",
                  fontSize: "0.875rem",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap items-center" style={{ gap: "8px 32px" }}>
              <span className="flex items-center gap-2 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                <Check className="w-4 h-4" style={{ color: "#34D399" }} />
                Blackbaud CRM
              </span>
              <span className="flex items-center gap-2 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                <Hexagon className="w-4 h-4" style={{ color: "#60A5FA" }} />
                AI Briefings
              </span>
              <span className="flex items-center gap-2 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                <Zap className="w-4 h-4" style={{ color: "#FBBF24" }} />
                75% Admin Saved
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
