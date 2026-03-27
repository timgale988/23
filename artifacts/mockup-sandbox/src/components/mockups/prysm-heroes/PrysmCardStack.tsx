import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, User, HeartPulse, Stethoscope, Lock, Zap, Circle } from 'lucide-react';

export function PrysmCardStack() {
  return (
    <div className="w-full bg-white flex justify-center py-20 overflow-hidden font-sans text-slate-900">
      <div className="max-w-[1280px] w-full min-h-[720px] flex flex-col lg:flex-row items-center gap-12 px-8 xl:px-0">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-start pr-0 lg:pr-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-6 border border-violet-100 shadow-sm">
            Platform 01 — Prysm
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-6 text-[#0A0E1A]">
            Grateful Patients Become
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
              Transformational Donors.
            </span>
          </h1>
          
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
            Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group">
              View Client Results
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Epic Integration
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <ShieldCheck className="w-4 h-4 text-violet-500" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Activity className="w-4 h-4 text-cyan-500" />
              Real-Time Scoring
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 relative w-full min-h-[600px] flex flex-col items-center justify-center">
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(255,255,255,0) 70%)' }} />
          
          {/* Stack Container */}
          <div className="relative w-[340px] h-[280px] flex items-center justify-center z-10">
            
            {/* BACK CARD */}
            <div className="absolute w-[340px] h-[200px] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-500"
                 style={{ transform: 'rotate(-8deg) translate(-20px, 16px) scale(0.92)', opacity: 0.6, zIndex: 1 }}>
              <div className="h-[56px] rounded-t-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[14px]">R</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/60 text-[8px] font-bold uppercase tracking-wider mb-0.5">AI Score</span>
                  <div className="bg-white text-violet-700 font-black rounded-lg px-2 py-0.5 text-xs leading-none">87.4</div>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="font-bold text-[15px] text-[#0A0E1A]">R. Thompson</div>
                    <div className="text-slate-400 text-xs">LSU Health</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$420K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">3 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Oncology</div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-auto">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Dr. Sarah Jenkins referral
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="bg-green-50 border border-green-100 text-green-600 rounded-full text-xs px-3 py-1 font-semibold">Ready to Contact</div>
                  <div className="text-violet-600 text-xs font-bold">View Profile →</div>
                </div>
              </div>
            </div>

            {/* MIDDLE CARD */}
            <div className="absolute w-[340px] h-[200px] rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex flex-col transition-all duration-500"
                 style={{ transform: 'rotate(-3deg) translate(-8px, 8px) scale(0.96)', opacity: 0.85, zIndex: 2 }}>
              <div className="h-[56px] rounded-t-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[14px]">M</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/60 text-[8px] font-bold uppercase tracking-wider mb-0.5">AI Score</span>
                  <div className="bg-white text-violet-700 font-black rounded-lg px-2 py-0.5 text-xs leading-none">81.2</div>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="font-bold text-[15px] text-[#0A0E1A]">M. Johnson</div>
                    <div className="text-slate-400 text-xs">City of Hope</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$190K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">12 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Neurology</div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-auto">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Dr. Patel referral
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="bg-yellow-50 border border-yellow-100 text-yellow-600 rounded-full text-xs px-3 py-1 font-semibold">Review Pending</div>
                  <div className="text-violet-600 text-xs font-bold">View Profile →</div>
                </div>
              </div>
            </div>

            {/* FRONT CARD */}
            <div className="absolute w-[340px] h-[200px] rounded-2xl bg-white shadow-[0_25px_65px_rgba(0,0,0,0.15)] flex flex-col transition-all duration-500 z-10"
                 style={{ transform: 'rotate(0deg) translate(0px, 0px) scale(1)' }}>
              <div className="h-[56px] rounded-t-2xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-[28px] h-[28px] rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[14px]">H</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/60 text-[8px] font-bold uppercase tracking-wider mb-0.5">AI Score</span>
                  <div className="bg-white text-[#7C3AED] font-black rounded-lg px-2 py-0.5 text-xs leading-none">93.1</div>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="font-bold text-[15px] text-[#0A0E1A]">H. Chen</div>
                    <div className="text-slate-400 text-xs">Providence Health</div>
                  </div>
                </div>
                <div className="flex gap-2 mb-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$285K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">8 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Cardiac</div>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-auto">
                  <Stethoscope className="w-3.5 h-3.5" />
                  Dr. Martinez referral
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="bg-green-50 border border-green-100 text-green-600 rounded-full text-xs px-3 py-1 font-semibold">Ready to Contact</div>
                  <div className="text-violet-600 text-xs font-bold hover:text-violet-700 cursor-pointer">View Profile →</div>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Data Indicators */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 z-10 relative">
            <div className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700">
              <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
              <span className="text-green-600">47 prospects ready</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700">
              <Zap className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-600">Epic sync: 2m ago</span>
            </div>
            <div className="flex items-center gap-2 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700">
              <Lock className="w-3 h-3 text-blue-500" />
              <span className="text-blue-600">HIPAA compliant</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
