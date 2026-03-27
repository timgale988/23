import React from 'react';
import { ArrowRight, Shield, Activity, CheckCircle2 } from 'lucide-react';

export function PrysmSignalMapB() {
  return (
    <div className="w-full min-h-[720px] bg-white flex flex-col lg:flex-row overflow-hidden font-sans max-w-[1280px] mx-auto border border-gray-100 shadow-sm">

      {/* LEFT COLUMN */}
      <div className="w-full lg:w-[46%] flex-shrink-0 p-10 lg:p-12 flex flex-col justify-center bg-white relative z-10 overflow-hidden">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-7 w-max">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
          </span>
          <span className="text-xs font-bold tracking-wide text-violet-700 uppercase">Platform 01 — Prysm</span>
        </div>

        {/* H1 — tighter size so it stays 2–3 lines */}
        <h1
          className="font-extrabold uppercase text-slate-900 tracking-tight mb-5 leading-[1.05]"
          style={{ fontSize: "clamp(28px, 3.4vw, 46px)" }}
        >
          Grateful Patients Become
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
            Transformational Donors.
          </span>
        </h1>

        {/* Body */}
        <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-sm">
          Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <button className="px-7 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 text-white font-bold text-sm shadow-md shadow-violet-500/20 hover:shadow-violet-500/30 transition-all">
            Request a Demo
          </button>
          <button className="px-7 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2">
            View Client Results <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-5 items-center border-t border-slate-100 pt-6">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Activity className="w-3.5 h-3.5 text-violet-400" /> Epic Integration
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Shield className="w-3.5 h-3.5 text-violet-400" /> HIPAA Compliant
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" /> Real-Time Scoring
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex-1 border-l border-gray-100 flex flex-col items-center justify-center px-4 py-5 relative bg-white overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 45% 48%, rgba(124,58,237,0.07) 0%, transparent 65%)' }}
        />

        {/* KPI strip — 3 stat chips above the diagram, no SVG overlap */}
        <div className="relative z-10 flex items-center gap-3 mb-4 w-full justify-center">
          {[
            { value: "93.1", label: "Avg AI Score", color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
            { value: "305%", label: "More Major Gifts", color: "#0891B2", bg: "rgba(6,182,212,0.08)" },
            { value: "$4.32M", label: "Year 1 Revenue", color: "#059669", bg: "rgba(16,185,129,0.08)" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-gray-100 bg-white shadow-sm"
            >
              <span className="text-base font-black" style={{ color: s.color }}>{s.value}</span>
              <span className="text-[11px] font-semibold text-slate-400 leading-tight">{s.label}</span>
            </div>
          ))}
        </div>

        {/* SVG — fills right column cleanly */}
        <div className="relative w-full z-10" style={{ height: "430px" }}>
          <svg viewBox="0 0 600 430" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="centerGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
              <filter id="shadowB" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.09" floodColor="#0F172A" />
              </filter>
            </defs>

            {/* Category labels */}
            <text x="90" y="22" fill="#CBD5E1" fontSize="9" fontWeight="800" letterSpacing="3" textAnchor="middle">DATA INPUTS</text>
            <text x="510" y="22" fill="#CBD5E1" fontSize="9" fontWeight="800" letterSpacing="3" textAnchor="middle">DELIVERY LAYER</text>

            {/* Connection lines — inputs */}
            <path d="M 175 72 C 240 72, 255 215, 300 215" fill="none" stroke="rgba(124,58,237,0.28)" strokeWidth="2" />
            <path d="M 175 152 C 240 152, 255 215, 300 215" fill="none" stroke="rgba(124,58,237,0.28)" strokeWidth="2" />
            <path d="M 175 228 C 240 228, 255 215, 300 215" fill="none" stroke="rgba(124,58,237,0.28)" strokeWidth="2" />
            <path d="M 175 305 C 240 305, 255 215, 300 215" fill="none" stroke="rgba(124,58,237,0.28)" strokeWidth="2" />

            {/* Connection lines — outputs */}
            <path d="M 300 215 C 355 215, 370 72, 425 72" fill="none" stroke="rgba(6,182,212,0.28)" strokeWidth="2" />
            <path d="M 300 215 C 355 215, 370 152, 425 152" fill="none" stroke="rgba(6,182,212,0.28)" strokeWidth="2" />
            <path d="M 300 215 C 355 215, 370 228, 425 228" fill="none" stroke="rgba(6,182,212,0.28)" strokeWidth="2" />
            <path d="M 300 215 C 355 215, 370 305, 425 305" fill="none" stroke="rgba(6,182,212,0.28)" strokeWidth="2" />

            {/* Data packets */}
            <circle cx="215" cy="108" r="4" fill="#7C3AED" opacity="0.6" />
            <circle cx="238" cy="186" r="4" fill="#7C3AED" opacity="0.6" />
            <circle cx="370" cy="100" r="4" fill="#06B6D4" opacity="0.6" />
            <circle cx="358" cy="232" r="4" fill="#06B6D4" opacity="0.6" />

            {/* INPUT NODES — 4 cards, y spaced 80px apart starting at y=46 */}
            {[
              { y: 46,  label: "EPIC EMR",       sub: "FHIR Integration" },
              { y: 126, label: "WINDFALL",        sub: "Wealth Screening" },
              { y: 202, label: "DONORSEARCH",     sub: "Giving History" },
              { y: 279, label: "70K+ PHYSICIANS", sub: "Physician Panels" },
            ].map(({ y, label, sub }) => (
              <g key={label} transform={`translate(5, ${y})`} filter="url(#shadowB)">
                <rect width="170" height="48" rx="10" fill="white" stroke="rgba(124,58,237,0.18)" strokeWidth="1.5" />
                <circle cx="20" cy="24" r="13" fill="rgba(124,58,237,0.08)" />
                <circle cx="20" cy="24" r="5" fill="#7C3AED" />
                <text x="40" y="20" fill="#0A0E1A" fontSize="12" fontWeight="700">{label}</text>
                <text x="40" y="35" fill="#94A3B8" fontSize="10" fontWeight="500">{sub}</text>
              </g>
            ))}

            {/* OUTPUT NODES — same y spacing */}
            {[
              { y: 46,  label: "BLACKBAUD CRM",  sub: "Prospect Push" },
              { y: 126, label: "SALESFORCE NPSP", sub: "Native Integration" },
              { y: 202, label: "GIFT OFFICERS",   sub: "Daily Queue" },
              { y: 279, label: "ROI ANALYTICS",   sub: "Live Reports" },
            ].map(({ y, label, sub }) => (
              <g key={label} transform={`translate(425, ${y})`} filter="url(#shadowB)">
                <rect width="170" height="48" rx="10" fill="white" stroke="rgba(6,182,212,0.18)" strokeWidth="1.5" />
                <circle cx="150" cy="24" r="13" fill="rgba(6,182,212,0.08)" />
                <circle cx="150" cy="24" r="5" fill="#06B6D4" />
                <text x="136" y="20" fill="#0A0E1A" fontSize="12" fontWeight="700" textAnchor="end">{label}</text>
                <text x="136" y="35" fill="#94A3B8" fontSize="10" fontWeight="500" textAnchor="end">{sub}</text>
              </g>
            ))}

            {/* CENTRAL NODE */}
            <circle cx="300" cy="215" r="105" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="300" cy="215" r="82" fill="url(#centerGradB)" stroke="white" strokeWidth="5" filter="url(#shadowB)" />
            <text x="300" y="210" textAnchor="middle" fill="white" fontSize="21" fontWeight="900" letterSpacing="2.5">PRYSM</text>
            <text x="300" y="229" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" fontWeight="600" letterSpacing="2">AI ENGINE</text>
          </svg>
        </div>

        {/* Bottom metric pills — 3 separate pills */}
        <div className="relative z-10 flex items-center gap-2.5 mt-3 justify-center flex-wrap">
          {[
            { dot: "#3B82F6", text: "12,847 encounters" },
            { dot: "#7C3AED", text: "1,422 qualified" },
            { dot: "#06B6D4", text: "47 ready today" },
          ].map(({ dot, text }) => (
            <div key={text} className="bg-slate-50 border border-slate-200 rounded-full px-3.5 py-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 shadow-sm whitespace-nowrap">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
