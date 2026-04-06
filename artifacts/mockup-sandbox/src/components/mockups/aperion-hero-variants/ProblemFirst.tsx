import React from "react";
import { ArrowRight, CheckCircle2, Clock, Database, RefreshCcw, Zap, Hexagon } from "lucide-react";

export default function ProblemFirst() {
  return (
    <div className="min-h-screen w-full flex flex-col font-sans text-white">
      {/* ACT 1: THE PROBLEM */}
      <section 
        className="relative flex flex-col justify-center items-center px-6 py-16 md:py-24"
        style={{ backgroundColor: "#02060F", minHeight: "35vh" }}
      >
        <div className="max-w-4xl mx-auto text-center z-10">
          <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.2em] mb-6 uppercase">
            The Reality for Most Gift Officers Today
          </p>
          
          <h1 
            className="font-medium text-gray-200 leading-tight mb-10 mx-auto"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", maxWidth: "800px" }}
          >
            75% of your gift officers' time is spent on work that shouldn't require a gift officer.
          </h1>
          
          {/* Pain Point Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <div 
              className="flex items-center gap-3 px-4 py-2.5 rounded-full border bg-black/50 backdrop-blur-sm"
              style={{ borderColor: "rgba(239,68,68,0.3)" }}
            >
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300 font-medium">12+ hrs/week on donor research</span>
            </div>
            
            <div 
              className="flex items-center gap-3 px-4 py-2.5 rounded-full border bg-black/50 backdrop-blur-sm"
              style={{ borderColor: "rgba(239,68,68,0.3)" }}
            >
              <Database className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300 font-medium">Manually pulling data from 3+ systems</span>
            </div>
            
            <div 
              className="flex items-center gap-3 px-4 py-2.5 rounded-full border bg-black/50 backdrop-blur-sm"
              style={{ borderColor: "rgba(239,68,68,0.3)" }}
            >
              <RefreshCcw className="w-4 h-4 text-red-400" />
              <span className="text-sm text-gray-300 font-medium">Missed follow-ups from capacity limits</span>
            </div>
          </div>
        </div>
      </section>

      {/* ACT 2: THE PIVOT */}
      <section 
        className="relative flex flex-col justify-center items-center py-12 px-6"
        style={{ backgroundColor: "#02060F" }}
      >
        <div className="w-full max-w-5xl mx-auto flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div 
              className="w-full h-[1px]" 
              style={{ background: "linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.5), rgba(6, 182, 212, 0.5), transparent)" }}
            ></div>
          </div>
          <div className="relative bg-[#02060F] px-6 py-2">
            <p className="text-sm font-medium tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 uppercase">
              Introducing Aperion
            </p>
          </div>
        </div>
      </section>

      {/* ACT 3: THE SOLUTION */}
      <section 
        className="relative flex-1 flex flex-col justify-center items-center px-6 py-16 md:py-24"
        style={{ backgroundColor: "#04081E" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 text-blue-300 text-xs font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            PLATFORM 02 — APERION
          </div>
          
          <h2 
            className="font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Every Gift Officer's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 inline-block">
              Unfair Advantage.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100/70 mb-10 max-w-2xl font-light leading-relaxed">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-500 hover:to-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
              Request a Demo
            </button>
            <button className="px-8 py-4 rounded-full border border-blue-500/30 text-blue-200 font-medium hover:bg-blue-500/10 transition-all flex items-center gap-2 group">
              View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Trust Tags */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-blue-200/60 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Blackbaud CRM Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Hexagon className="w-4 h-4 text-cyan-400" />
              <span>AI Briefings</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>75% Admin Saved</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
