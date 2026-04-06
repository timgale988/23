import React from "react";
import { ArrowRight, CheckCircle2, Zap, Hexagon } from "lucide-react";

export function EvidenceLed() {
  return (
    <div
      className="min-h-screen w-full flex flex-col font-sans relative overflow-hidden text-white"
      style={{ backgroundColor: "#03081A" }}
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      {/* TOP SECTION */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 lg:py-24 max-w-7xl mx-auto w-full relative z-10">
        <div className="relative max-w-4xl">
          {/* Decorative Quote Mark */}
          <div
            className="absolute -top-16 -left-8 md:-top-24 md:-left-12 font-serif leading-none select-none"
            style={{
              fontSize: "140px",
              color: "#22D3EE",
              opacity: 0.15,
            }}
          >
            ❝
          </div>

          {/* Pull Quote */}
          <blockquote
            className="relative z-10 font-light italic text-white leading-tight md:leading-snug mb-10"
            style={{
              fontSize: "clamp(26px, 3.5vw, 44px)",
              letterSpacing: "-0.02em",
            }}
          >
            "Aperion gave us back 15 hours per officer, per week. In our first
            quarter, we identified three major gift opportunities we would have
            missed entirely. It's not a CRM tool — it's an unfair advantage."
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4 mb-16">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center font-medium text-lg border border-white/5"
              style={{ backgroundColor: "#0D1117", color: "#22D3EE" }}
            >
              SC
            </div>
            <div>
              <div className="text-white font-medium text-lg flex items-center gap-2">
                Sarah Chen, CFRE
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-cyan-400 font-medium tracking-wide uppercase">
                    Verified Aperion Client
                  </span>
                </div>
              </div>
              <div className="text-slate-400 text-sm mt-0.5">
                Chief Philanthropy Officer, Mercy Health System
              </div>
            </div>
          </div>

          {/* Micro-testimonials Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="rounded-lg p-5 border flex flex-col justify-between"
              style={{
                backgroundColor: "#0D1117",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-slate-300 text-sm italic mb-4">
                "Saved us 2 months of prospect research in the first week."
              </p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                — J.M., Stanford Health Care
              </p>
            </div>
            <div
              className="rounded-lg p-5 border flex flex-col justify-between"
              style={{
                backgroundColor: "#0D1117",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-slate-300 text-sm italic mb-4">
                "The briefings are better than what our research team produced manually."
              </p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                — A.R., Mayo Clinic Foundation
              </p>
            </div>
            <div
              className="rounded-lg p-5 border flex flex-col justify-between"
              style={{
                backgroundColor: "#0D1117",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-slate-300 text-sm italic mb-4">
                "We 3× our touchpoints without adding a single FTE."
              </p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                — K.T., Johns Hopkins Medicine
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #2563EB, #06B6D4, transparent)",
          opacity: 0.5,
        }}
      />

      {/* BOTTOM SECTION */}
      <div className="w-full bg-[#03081A]/50 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* LEFT COL */}
          <div className="lg:w-[55%] flex flex-col items-start">
            <div className="text-xs font-bold tracking-[0.2em] text-slate-400 mb-6 uppercase flex items-center gap-3">
              <span className="w-8 h-px bg-slate-600"></span>
              Platform 02 — Aperion
            </div>
            
            <h2
              className="font-light text-white leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
            >
              Every Gift Officer's{" "}
              <span
                className="font-medium inline-block text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #2563EB, #06B6D4, #22D3EE)",
                }}
              >
                Unfair Advantage.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              Automate prospect research, generate personalized outreach briefings, and surface high-value connections hidden in your database. 
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Blackbaud CRM</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Hexagon className="w-4 h-4 text-cyan-400" />
                <span>AI Briefings</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>75% Admin Saved</span>
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="lg:w-[45%] w-full flex flex-col items-start lg:items-end justify-center">
            <div className="w-full max-w-md flex flex-col gap-4">
              <button
                className="w-full group relative flex items-center justify-center gap-2 py-4 px-8 rounded-lg text-white font-medium text-lg transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #1D4ED8, #0891B2)",
                  boxShadow: "0 0 40px rgba(6, 182, 212, 0.2)",
                }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Request a Demo</span>
              </button>
              
              <button className="w-full py-4 px-8 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-white/5 transition-colors duration-200 border border-transparent hover:border-white/10 flex items-center justify-center gap-2">
                View Case Study <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-slate-500 text-sm mt-4">
                Trusted by 40+ healthcare philanthropy teams
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
