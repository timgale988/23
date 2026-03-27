import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, Stethoscope, Lock, Zap, Circle, Phone, Mic } from 'lucide-react';

const WAVEFORM = [18, 32, 24, 44, 28, 52, 20, 40, 36, 56, 24, 42, 30, 50, 22, 46, 34, 54, 26, 44, 20, 38, 48, 30, 52, 22, 40, 28, 56, 24];

const MATCH_SOURCES = [
  { label: "Epic EMR", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  { label: "Windfall", color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  { label: "DonorSearch", color: "#0891B2", bg: "rgba(8,145,178,0.08)" },
];

export function PrysmCardStack() {
  return (
    <div className="w-full bg-white flex justify-center py-16 overflow-hidden font-sans text-slate-900">
      <div className="max-w-[1280px] w-full min-h-[720px] flex flex-col lg:flex-row items-center gap-12 px-8 xl:px-0">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-start pr-0 lg:pr-8">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-bold uppercase tracking-wider mb-6 border border-violet-100 shadow-sm">
            Platform 01 — Prysm
          </div>

          <h1 className="text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-5 text-[#0A0E1A]">
            Grateful Patients Become
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500">
              Transformational Donors.
            </span>
          </h1>

          <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
            Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mb-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold text-sm shadow-[0_8px_20px_-6px_rgba(124,58,237,0.5)] hover:shadow-[0_12px_24px_-6px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 group">
              View Client Results
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Epic Integration
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-500" /> HIPAA Compliant
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <Activity className="w-3.5 h-3.5 text-cyan-500" /> Real-Time Scoring
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 relative w-full min-h-[600px] flex flex-col items-center justify-center">

          {/* Radial glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(255,255,255,0) 70%)' }}
          />

          {/* Card stack */}
          <div className="relative w-[380px] h-[300px] flex items-center justify-center z-10">

            {/* BACK CARD */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_16px_50px_rgba(0,0,0,0.10)] flex flex-col"
              style={{ transform: 'rotate(-8deg) translate(-18px, 18px) scale(0.91)', opacity: 0.5, zIndex: 1 }}
            >
              <div className="h-[52px] rounded-t-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">R</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="bg-white text-violet-700 font-black rounded-lg px-2 py-0.5 text-xs">87.4</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-[15px] text-[#0A0E1A] mb-1">R. Thompson</div>
                <div className="text-slate-400 text-xs mb-3">LSU Health</div>
                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$420K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">3 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Oncology</div>
                </div>
              </div>
            </div>

            {/* MIDDLE CARD */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.11)] flex flex-col"
              style={{ transform: 'rotate(-3deg) translate(-7px, 9px) scale(0.96)', opacity: 0.82, zIndex: 2 }}
            >
              <div className="h-[52px] rounded-t-2xl bg-gradient-to-r from-violet-600 to-blue-600 flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">M</div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="bg-white text-violet-700 font-black rounded-lg px-2 py-0.5 text-xs">81.2</div>
              </div>
              <div className="p-4">
                <div className="font-bold text-[15px] text-[#0A0E1A] mb-1">M. Johnson</div>
                <div className="text-slate-400 text-xs mb-3">City of Hope</div>
                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$190K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">12 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Neurology</div>
                </div>
              </div>
            </div>

            {/* FRONT CARD — H. Chen with match data */}
            <div
              className="absolute w-[370px] rounded-2xl bg-white shadow-[0_25px_65px_rgba(0,0,0,0.15)] flex flex-col"
              style={{ transform: 'rotate(0deg)', zIndex: 10 }}
            >
              {/* Card header */}
              <div className="h-[52px] rounded-t-2xl bg-gradient-to-r from-[#7C3AED] to-[#2563EB] flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">H</div>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-wider">Prospect Record</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white/50 text-[8px] font-bold uppercase tracking-widest mb-0.5">AI Score</span>
                  <div className="bg-white text-[#7C3AED] font-black rounded-lg px-2 py-0.5 text-xs leading-none">93.1</div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-3">
                {/* Name + org */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-[16px] text-[#0A0E1A] leading-tight">H. Chen</div>
                    <div className="text-slate-400 text-xs mt-0.5">Providence Health</div>
                  </div>
                  {/* Mini score ring */}
                  <div className="flex flex-col items-center">
                    <svg width="36" height="36" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#F1F5F9" strokeWidth="3" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="#7C3AED" strokeWidth="3"
                        strokeDasharray="88" strokeDashoffset="14" strokeLinecap="round"
                        style={{ transformOrigin: '18px 18px', transform: 'rotate(-90deg)' }} />
                      <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="800" fill="#7C3AED">93</text>
                    </svg>
                  </div>
                </div>

                {/* Data chips */}
                <div className="flex gap-2">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">$285K</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">8 days</div>
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-600">Cardiac</div>
                </div>

                {/* Physician referral */}
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Stethoscope className="w-3.5 h-3.5 flex-shrink-0" />
                  Dr. Martinez referral
                </div>

                {/* ── MATCH SOURCE INDICATORS ── */}
                <div className="border-t border-slate-100 pt-2.5">
                  <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-1.5">Data Match Sources</div>
                  <div className="flex gap-1.5">
                    {MATCH_SOURCES.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ color: s.color, background: s.bg }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <circle cx="4" cy="4" r="3.5" stroke={s.color} strokeWidth="1" />
                          <path d="M2 4l1.5 1.5L6 2.5" stroke={s.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {s.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status row */}
                <div className="flex justify-between items-center">
                  <div className="bg-green-50 border border-green-100 text-green-600 rounded-full text-xs px-3 py-1 font-semibold">Ready to Contact</div>
                  <div className="text-violet-600 text-xs font-bold cursor-pointer hover:text-violet-700">View Profile →</div>
                </div>
              </div>
            </div>

          </div>{/* end stack */}

          {/* ── CONVERSATION WAVE WIDGET ── */}
          <div
            className="relative z-10 mt-8 mx-auto rounded-2xl border border-slate-100 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden"
            style={{ width: "370px" }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-xs font-bold">Call in Progress</span>
                <span className="text-white/60 text-[10px] font-mono">02:34</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70 text-[10px] font-semibold">H. Chen</span>
              </div>
            </div>

            {/* Wave body */}
            <div className="px-4 py-3 flex flex-col gap-2">
              {/* Gift officer wave — left-aligned */}
              <div className="flex items-end gap-1 h-10">
                <div className="flex items-center gap-1 text-[9px] font-bold text-violet-400 uppercase tracking-widest mr-1 flex-shrink-0">
                  <Mic className="w-2.5 h-2.5" />
                  Officer
                </div>
                <div className="flex items-end gap-[2px] flex-1">
                  {WAVEFORM.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-full flex-1"
                      style={{
                        height: `${h * 0.65}px`,
                        background: 'linear-gradient(to top, #7C3AED, #2563EB)',
                        animation: `pulse ${0.8 + (i % 5) * 0.15}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.04}s`,
                        opacity: i > 20 ? 0.3 : 0.85,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Prospect wave — right-side feel, cyan */}
              <div className="flex items-end gap-1 h-10">
                <div className="flex items-center gap-1 text-[9px] font-bold text-cyan-400 uppercase tracking-widest mr-1 flex-shrink-0">
                  <Mic className="w-2.5 h-2.5" />
                  Prospect
                </div>
                <div className="flex items-end gap-[2px] flex-1">
                  {[...WAVEFORM].reverse().map((h, i) => (
                    <div
                      key={i}
                      className="rounded-full flex-1"
                      style={{
                        height: `${h * 0.55}px`,
                        background: 'linear-gradient(to top, #06B6D4, #0284C7)',
                        animation: `pulse ${0.7 + (i % 4) * 0.18}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.06 + 0.2}s`,
                        opacity: i < 10 ? 0.3 : 0.8,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer context */}
            <div className="px-4 py-2 border-t border-slate-50 bg-slate-50 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-400">Context: Cardiac ICU stay · Dr. Martinez referral</span>
              <span className="text-[10px] font-bold text-green-500">● Live</span>
            </div>
          </div>

          {/* Status chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-5 z-10 relative">
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Circle className="w-2.5 h-2.5 fill-green-500 text-green-500" />
              <span className="text-green-600">47 prospects ready</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Zap className="w-3.5 h-3.5 text-violet-500" />
              <span className="text-violet-600">Epic sync: 2m ago</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white shadow-sm border border-slate-100 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Lock className="w-3 h-3 text-blue-500" />
              <span className="text-blue-600">HIPAA compliant</span>
            </div>
          </div>

        </div>{/* end right column */}
      </div>

      {/* Waveform pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
