import { Check, Hexagon, Zap, ArrowRight } from "lucide-react";

export function AperionHero() {
  return (
    <section className="w-full flex flex-col font-sans text-slate-300">

      {/* ── ROW 1: Badge + Headline | Stats — has background image ── */}
      <div className="relative overflow-hidden w-full px-6 py-16 md:py-24 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end" style={{ minHeight: "55vh" }}>

        {/* Background image — scoped to Row 1 only */}
        <img
          src="/images/hero-doctor-aperion.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ objectPosition: "60% center" }}
        />
        {/* Top-dark → bottom-transparent vertical gradient over the image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #04081E 0%, rgba(4,8,30,0.85) 30%, rgba(4,8,30,0.50) 65%, rgba(4,8,30,0.10) 100%)",
          }}
        />

        {/* LEFT: Badge & Headline */}
        <div className="relative z-10 lg:col-span-7 flex flex-col items-start justify-end h-full">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
              Platform 02 — Aperion
            </span>
          </div>

          <h1
            className="font-light tracking-tight text-white leading-[1.1]"
            style={{ fontSize: "clamp(40px,5.5vw,72px)" }}
          >
            Every Gift Officer's
            <br />
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #60A5FA, #22D3EE)" }}
            >
              Unfair Advantage.
            </span>
          </h1>
        </div>

        {/* RIGHT: 2×2 Stats */}
        <div className="relative z-10 lg:col-span-5 flex justify-start lg:justify-end pb-2">
          <div
            className="grid grid-cols-2 gap-x-12 gap-y-10 w-full max-w-md pl-8 lg:pl-12"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.10)" }}
          >
            {[
              { value: "75%",  label: "Admin Time" },
              { value: "300+", label: "Opp Entries" },
              { value: "20:1", label: "ROI" },
              { value: "3×",   label: "Touchpoints" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-white font-light mb-1" style={{ fontSize: "clamp(28px,3vw,40px)" }}>
                  {value}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-widest font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL RULE ── */}
      <div className="w-full" style={{ height: 1, background: "rgba(255,255,255,0.10)", backgroundColor: "#04081E" }} />

      {/* ── ROW 2: Description + Tags | CTAs — solid dark background, no image ── */}
      <div
        className="w-full px-6 py-16 md:py-20 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12"
        style={{ backgroundColor: "#04081E" }}
      >
        {/* LEFT: Description & Tags */}
        <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-12">
          <p className="text-slate-400 leading-relaxed font-light max-w-2xl mb-12 lg:mb-0" style={{ fontSize: "clamp(17px,1.5vw,22px)" }}>
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor
            briefings, intelligent opportunity matching, and proposal intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-auto pt-10 lg:pt-0">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Check className="w-4 h-4 text-emerald-400" />
              Blackbaud CRM
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Hexagon className="w-4 h-4 text-purple-400" />
              AI Briefings
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Zap className="w-4 h-4 text-amber-400" />
              75% Admin Saved
            </div>
          </div>
        </div>

        {/* RIGHT: CTAs */}
        <div
          className="lg:col-span-5 flex flex-col justify-start border-t lg:border-t-0 pt-10 lg:pt-0 lg:pl-12"
          style={{ borderColor: "rgba(255,255,255,0.10)", borderLeftWidth: "1px" }}
        >
          <div className="max-w-sm w-full">
            <button
              className="w-full group relative px-8 py-5 text-white font-medium text-lg overflow-hidden transition-all mb-4 flex items-center justify-between"
              style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)", borderRadius: 0 }}
            >
              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(90deg, #1D4ED8, #0891B2)" }}
              />
            </button>

            <button
              className="w-full group px-8 py-5 text-white font-medium text-lg transition-all hover:bg-white/5 flex items-center justify-between mb-8"
              style={{ border: "1px solid rgba(255,255,255,0.20)", borderRadius: 0 }}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </button>

            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: "#374151" }} />
              Works with: Blackbaud CRM | Salesforce NPSP
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
