import React, { useState } from 'react';
import { Minus, Plus, ArrowRight, Activity, Database, TrendingUp, Users } from 'lucide-react';

export function ROIEstimator() {
  const [officers, setOfficers] = useState(12);

  // Derived metrics based on officer count
  // 12 officers = 540 hrs, so multiplier is 45
  const reclaimedHours = officers * 45;
  // 12 officers = $2.4M, so multiplier is 0.2
  const pipelineAdded = (officers * 0.2).toFixed(1);

  return (
    <div className="min-h-[100dvh] w-full flex flex-col lg:flex-row font-sans text-slate-200">
      {/* LEFT COLUMN */}
      <div className="flex-1 lg:w-[52%] bg-[#03081A] p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative z-10">
        
        <div className="max-w-xl mx-auto lg:mx-0 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <Activity className="w-3.5 h-3.5" />
            Calculate Your Aperion ROI
          </div>

          <h1 className="text-white font-bold leading-[1.1] mb-6 tracking-tight text-[clamp(38px,4vw,58px)]">
            How much capacity is your team leaving on the table?
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            The average gift officer spends 75% of their week on administrative work. Aperion reclaims that time — turning it into more meetings, better briefings, and more closed gifts.
          </p>

          {/* ESTIMATOR WIDGET */}
          <div className="bg-[#0D1117] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-cyan-900/10 relative overflow-hidden">
            {/* Subtle glow behind the card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <label className="text-xs font-bold text-slate-500 tracking-widest uppercase mb-4 block">
                  Number of Gift Officers
                </label>
                <div className="flex items-center justify-center gap-6">
                  <button 
                    onClick={() => setOfficers(Math.max(1, officers - 1))}
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 tabular-nums tracking-tighter w-32 text-center font-mono">
                    {officers}
                  </div>
                  <button 
                    onClick={() => setOfficers(officers + 1)}
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 text-sm md:text-base">Weekly hours reclaimed:</span>
                  <span className="text-cyan-400 font-mono font-bold text-lg">{reclaimedHours} hrs/week</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 text-sm md:text-base">Annual capacity unlocked:</span>
                  <span className="text-white font-mono font-bold text-lg">~${pipelineAdded}M additional pipeline</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400 text-sm md:text-base">Projected ROI:</span>
                  <span className="text-emerald-400 font-mono font-bold text-lg">20:1 within 12 months</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 text-center mt-6 mb-6">
                * Based on 75% admin reduction across {officers} officers at 40hr/week avg
              </p>

              <button className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Get Your Custom ROI Report <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 lg:w-[48%] bg-[#060C1E] p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center relative border-l border-white/5">
        
        {/* Decorative background grid/noise could go here */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
        
        <div className="max-w-lg mx-auto lg:mx-0 w-full relative z-10">
          <div className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">
            Platform 02 — Aperion
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 pb-2">
            Every Gift Officer's Unfair Advantage.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">75%</div>
              <div className="text-sm text-slate-400">Admin Time Saved</div>
            </div>
            
            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">300+</div>
              <div className="text-sm text-slate-400">Library Entries Used</div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">20:1</div>
              <div className="text-sm text-slate-400">Demonstrated ROI</div>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-white tracking-tight">3×</div>
              <div className="text-sm text-slate-400">Donor Touchpoints</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center">
              Request a Demo
            </button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ROIEstimator;
