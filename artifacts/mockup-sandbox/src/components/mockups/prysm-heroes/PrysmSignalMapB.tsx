import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Activity } from 'lucide-react';

export function PrysmSignalMapB() {
  return (
    <div className="w-full min-h-[720px] bg-white flex flex-col lg:flex-row overflow-hidden font-sans max-w-[1280px] mx-auto border border-gray-100 shadow-sm">
      {/* LEFT COLUMN */}
      <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center bg-white relative z-10">
        <div className="max-w-xl">
          {/* Small violet pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-violet-700 uppercase">
              Platform 01 — Prysm
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-[1.1] text-slate-900 tracking-tight mb-6">
            Grateful Patients Become <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
              Transformational Donors.
            </span>
          </h1>

          {/* Body text */}
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
            Prysm integrates directly with your Epic EMR and CRM to identify high-capacity prospects in real-time. Uncover hidden philanthropic potential before the patient leaves the hospital.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2">
              Request a Demo
            </button>
            <button className="px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              View Client Results
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 items-center border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Activity className="w-4 h-4 text-violet-500" />
              Epic Integration
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Shield className="w-4 h-4 text-violet-500" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-violet-500" />
              Real-Time Scoring
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - Editorial Light */}
      <div className="flex-1 border-l border-gray-100 flex flex-col items-center justify-center p-4 relative bg-white overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ background: 'radial-gradient(ellipse at 40% 45%, rgba(124,58,237,0.07) 0%, transparent 60%)' }}
        />

        <div className="w-full max-w-[620px] relative z-10">
          <svg viewBox="0 0 620 520" className="w-full h-[520px] overflow-visible">
            <defs>
              <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="inputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(124,58,237,0.1)" />
                <stop offset="100%" stopColor="rgba(124,58,237,0.4)" />
              </linearGradient>
              <linearGradient id="outputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(6,182,212,0.4)" />
                <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
              </linearGradient>
              <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" floodColor="#0F172A" />
              </filter>
            </defs>

            {/* Category Labels */}
            <text x="93" y="75" fill="#94A3B8" fontSize="9" fontWeight="800" letterSpacing="4" textAnchor="middle">DATA INPUTS</text>
            <text x="527" y="75" fill="#94A3B8" fontSize="9" fontWeight="800" letterSpacing="4" textAnchor="middle">DELIVERY LAYER</text>

            {/* Connection Lines (Inputs) */}
            <path d="M 180 121 C 240 121, 260 260, 310 260" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="2" />
            <path d="M 180 211 C 240 211, 260 260, 310 260" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="2" />
            <path d="M 180 296 C 240 296, 260 260, 310 260" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="2" />
            <path d="M 180 381 C 240 381, 260 260, 310 260" fill="none" stroke="rgba(124,58,237,0.3)" strokeWidth="2" />

            {/* Connection Lines (Outputs) */}
            <path d="M 310 260 C 360 260, 380 121, 440 121" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
            <path d="M 310 260 C 360 260, 380 211, 440 211" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
            <path d="M 310 260 C 360 260, 380 296, 440 296" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
            <path d="M 310 260 C 360 260, 380 381, 440 381" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />

            {/* Data Packets (Inputs - Violet) */}
            <circle cx="210" cy="155" r="4" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="250" cy="245" r="4" fill="#8B5CF6" />
            <circle cx="230" cy="280" r="4" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="190" cy="360" r="4" fill="#8B5CF6" />

            {/* Data Packets (Outputs - Cyan) */}
            <circle cx="390" cy="155" r="4" fill="#06B6D4" />
            <circle cx="350" cy="245" r="4" fill="#06B6D4" className="animate-pulse" />
            <circle cx="380" cy="285" r="4" fill="#06B6D4" />
            <circle cx="410" cy="355" r="4" fill="#06B6D4" className="animate-pulse" />

            {/* INPUT NODE CARDS */}
            <g transform="translate(10, 95)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(124,58,237,0.22)" strokeWidth="1.5" />
              <circle cx="22" cy="26" r="14" fill="rgba(124,58,237,0.1)" />
              <circle cx="22" cy="26" r="5" fill="#7C3AED" />
              <text x="44" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700">EPIC EMR</text>
              <text x="44" y="38" fill="#94A3B8" fontSize="10" fontWeight="500">FHIR Integration</text>
            </g>
            <g transform="translate(10, 185)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(124,58,237,0.22)" strokeWidth="1.5" />
              <circle cx="22" cy="26" r="14" fill="rgba(124,58,237,0.1)" />
              <circle cx="22" cy="26" r="5" fill="#7C3AED" />
              <text x="44" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700">WINDFALL</text>
              <text x="44" y="38" fill="#94A3B8" fontSize="10" fontWeight="500">Wealth Screening</text>
            </g>
            <g transform="translate(10, 270)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(124,58,237,0.22)" strokeWidth="1.5" />
              <circle cx="22" cy="26" r="14" fill="rgba(124,58,237,0.1)" />
              <circle cx="22" cy="26" r="5" fill="#7C3AED" />
              <text x="44" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700">DONORSEARCH</text>
              <text x="44" y="38" fill="#94A3B8" fontSize="10" fontWeight="500">Giving History</text>
            </g>
            <g transform="translate(10, 355)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(124,58,237,0.22)" strokeWidth="1.5" />
              <circle cx="22" cy="26" r="14" fill="rgba(124,58,237,0.1)" />
              <circle cx="22" cy="26" r="5" fill="#7C3AED" />
              <text x="44" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700">70K+ PHYSICIANS</text>
              <text x="44" y="38" fill="#94A3B8" fontSize="10" fontWeight="500">Physician Panels</text>
            </g>

            {/* OUTPUT NODE CARDS */}
            <g transform="translate(440, 95)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
              <circle cx="148" cy="26" r="14" fill="rgba(6,182,212,0.1)" />
              <circle cx="148" cy="26" r="5" fill="#06B6D4" />
              <text x="134" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700" textAnchor="end">BLACKBAUD CRM</text>
              <text x="134" y="38" fill="#94A3B8" fontSize="10" fontWeight="500" textAnchor="end">Prospect Push</text>
            </g>
            <g transform="translate(440, 185)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
              <circle cx="148" cy="26" r="14" fill="rgba(6,182,212,0.1)" />
              <circle cx="148" cy="26" r="5" fill="#06B6D4" />
              <text x="134" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700" textAnchor="end">SALESFORCE NPSP</text>
              <text x="134" y="38" fill="#94A3B8" fontSize="10" fontWeight="500" textAnchor="end">Native Integration</text>
            </g>
            <g transform="translate(440, 270)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
              <circle cx="148" cy="26" r="14" fill="rgba(6,182,212,0.1)" />
              <circle cx="148" cy="26" r="5" fill="#06B6D4" />
              <text x="134" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700" textAnchor="end">GIFT OFFICERS</text>
              <text x="134" y="38" fill="#94A3B8" fontSize="10" fontWeight="500" textAnchor="end">Daily Queue</text>
            </g>
            <g transform="translate(440, 355)" filter="url(#shadowFilter)">
              <rect width="170" height="52" rx="12" fill="white" stroke="rgba(6,182,212,0.22)" strokeWidth="1.5" />
              <circle cx="148" cy="26" r="14" fill="rgba(6,182,212,0.1)" />
              <circle cx="148" cy="26" r="5" fill="#06B6D4" />
              <text x="134" y="22" fill="#0A0E1A" fontSize="13" fontWeight="700" textAnchor="end">ROI ANALYTICS</text>
              <text x="134" y="38" fill="#94A3B8" fontSize="10" fontWeight="500" textAnchor="end">Live Reports</text>
            </g>

            {/* CENTRAL NODE */}
            <circle cx="310" cy="260" r="110" fill="none" stroke="rgba(124,58,237,0.2)" strokeWidth="1.5" strokeDasharray="5 5" className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '310px 260px' }} />
            <circle cx="310" cy="260" r="90" fill="url(#centerGrad)" stroke="white" strokeWidth="6" filter="url(#shadowFilter)" />
            <text x="310" y="254" fill="white" fontSize="24" fontWeight="900" letterSpacing="3" textAnchor="middle">PRYSM</text>
            <text x="310" y="274" fill="rgba(255,255,255,0.7)" fontSize="12" fontWeight="600" letterSpacing="2" textAnchor="middle">AI ENGINE</text>

            {/* FLOATING STAT BADGES */}
            {/* Badge 1 - Violet */}
            <g transform="translate(175, 150)" filter="url(#shadowFilter)">
              <rect width="110" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
              <rect width="32" height="32" rx="8" fill="rgba(124,58,237,0.1)" />
              <text x="16" y="21" fill="#7C3AED" fontSize="12" fontWeight="900" textAnchor="middle">93.1</text>
              <text x="40" y="20" fill="#475569" fontSize="10" fontWeight="600">Avg AI Score</text>
            </g>

            {/* Badge 2 - Cyan */}
            <g transform="translate(330, 160)" filter="url(#shadowFilter)">
              <rect width="100" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
              <rect width="32" height="32" rx="8" fill="rgba(6,182,212,0.1)" />
              <text x="16" y="21" fill="#0891B2" fontSize="12" fontWeight="900" textAnchor="middle">305%</text>
              <text x="40" y="20" fill="#475569" fontSize="10" fontWeight="600">More Gifts</text>
            </g>

            {/* Badge 3 - Green */}
            <g transform="translate(260, 335)" filter="url(#shadowFilter)">
              <rect width="115" height="32" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="1" />
              <rect width="36" height="32" rx="8" fill="rgba(16,185,129,0.1)" />
              <text x="18" y="21" fill="#059669" fontSize="11" fontWeight="900" textAnchor="middle">$4.3M</text>
              <text x="44" y="20" fill="#475569" fontSize="10" fontWeight="600">Year 1 Revenue</text>
            </g>
          </svg>

          {/* BOTTOM METRICS ROW */}
          <div className="flex justify-center mt-4 w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-full px-5 py-2.5 flex items-center gap-4 text-xs font-semibold text-slate-600 shadow-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                12,847 encounters processed
              </div>
              <div className="w-px h-3 bg-slate-300"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                1,422 prospects qualified
              </div>
              <div className="w-px h-3 bg-slate-300"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                47 ready today
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
