import React from "react";
import { ArrowRight, Bot, Zap, BrainCircuit, BarChart3, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureTriptych() {
  return (
    <section className="min-h-[90vh] flex flex-col w-full bg-[#040814] text-slate-50 font-sans selection:bg-cyan-500/30">
      {/* BAND 1: Monumental Header (~40%) */}
      <div className="flex-none pt-24 pb-16 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-widest text-blue-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            PLATFORM 02 — APERION
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-[1.1]">
            Every Gift Officer's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Unfair Advantage.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
            Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence.
          </p>
        </div>
      </div>

      {/* BAND 2: Feature Triptych (~60%) */}
      <div className="flex-1 flex flex-col">
        {/* 3-Column Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 border-y border-white/5">
          {/* Column 1 */}
          <div className="bg-[#060C1E] p-8 md:p-12 lg:p-16 flex flex-col justify-between group hover:bg-[#070e24] transition-colors duration-500 relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:opacity-10 transition-opacity duration-500">
              <Bot size={120} />
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-8 border border-blue-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">AI Briefings</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Instantly synthesize years of engagement history, wealth screening, and philanthropic data into actionable pre-meeting intelligence.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-3xl font-medium text-white">75%</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Admin Time Saved</span>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-[#08101F] p-8 md:p-12 lg:p-16 flex flex-col justify-between group hover:bg-[#0a1326] transition-colors duration-500 relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:opacity-10 transition-opacity duration-500">
              <Zap size={120} />
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-8 border border-cyan-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Opportunity Matching</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Identify hidden giving capacity and surface the exact right moment to ask, based on predictive behavioral models.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-3xl font-medium text-white">3×</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Meaningful Touchpoints</span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-[#0A0F28] p-8 md:p-12 lg:p-16 flex flex-col justify-between group hover:bg-[#0d1330] transition-colors duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:opacity-10 transition-opacity duration-500">
              <BrainCircuit size={120} />
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-8 border border-indigo-500/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Proposal Intelligence</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Draft highly personalized, multi-million dollar proposals that align donor passions with institutional priorities in minutes.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-3xl font-medium text-white">20:1</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider">Average ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="bg-[#040814] py-12 px-6 flex flex-col items-center justify-center gap-8 border-t border-white/5 relative z-20">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium text-lg border-0 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] transition-all">
              Request a Demo
            </Button>
            <Button size="lg" variant="ghost" className="h-14 px-8 rounded-full text-slate-300 hover:text-white hover:bg-white/5 font-medium text-lg group">
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>75% admin time</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>20:1 ROI</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span>3× touchpoints</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureTriptych;
