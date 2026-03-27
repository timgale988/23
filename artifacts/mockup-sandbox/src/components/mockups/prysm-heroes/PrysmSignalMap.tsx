import React from "react";
import { ArrowRight, CheckCircle2, Shield, Activity, Database, Users, LineChart } from "lucide-react";

export function PrysmSignalMap() {
  return (
    <section className="w-full min-h-[720px] bg-white text-[#0A0E1A] font-sans flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row items-stretch border border-gray-100 rounded-2xl shadow-xl overflow-hidden bg-white">
        
        {/* LEFT COLUMN */}
        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center relative z-10 bg-white">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-100/50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase w-max mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse"></span>
            <span>Platform 01 — Prysm</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight mb-6 text-[#0A0E1A]">
            Grateful Patients Become <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#2563EB]">
              Transformational Donors.
            </span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
            Prysm connects Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically identify, qualify, and engage grateful patients as major gift prospects — before the window of opportunity closes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white font-semibold text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all hover:-translate-y-0.5">
              Request a Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-gray-300 hover:bg-gray-50 transition-all group flex items-center justify-center gap-2">
              View Client Results
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Database className="w-4 h-4 mr-2 text-violet-500" /> Epic Integration
            </div>
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Shield className="w-4 h-4 mr-2 text-violet-500" /> HIPAA Compliant
            </div>
            <div className="flex items-center text-xs text-gray-500 font-medium">
              <Activity className="w-4 h-4 mr-2 text-violet-500" /> Real-Time Scoring
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 bg-[#F1F5F9] relative flex flex-col items-center justify-center p-8 lg:p-12 border-l border-gray-100 min-h-[500px] lg:min-h-0">
          {/* Radial gradient background */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'radial-gradient(circle at center, rgba(124,58,237,0.06) 0%, transparent 70%)'
            }}
          />

          <div className="relative w-full max-w-[540px] aspect-[54/48] flex items-center justify-center z-10">
            <svg viewBox="0 0 540 480" className="w-full h-full drop-shadow-xl overflow-visible">
              <defs>
                <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="inputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(124,58,237,0.2)" />
                  <stop offset="100%" stopColor="rgba(124,58,237,0.8)" />
                </linearGradient>
                <linearGradient id="outputLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(6,182,212,0.8)" />
                  <stop offset="100%" stopColor="rgba(6,182,212,0.2)" />
                </linearGradient>
                
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.05" />
                </filter>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ORBITAL RING */}
              <circle cx="270" cy="240" r="120" fill="none" stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />

              {/* INPUT LINES */}
              <path d="M 85 120 C 180 120, 200 240, 270 240" fill="none" stroke="url(#inputLineGrad)" strokeWidth="1.5" />
              <path d="M 85 195 C 180 195, 200 240, 270 240" fill="none" stroke="url(#inputLineGrad)" strokeWidth="1.5" />
              <path d="M 85 265 C 180 265, 200 240, 270 240" fill="none" stroke="url(#inputLineGrad)" strokeWidth="1.5" />
              <path d="M 85 340 C 180 340, 200 240, 270 240" fill="none" stroke="url(#inputLineGrad)" strokeWidth="1.5" />

              {/* OUTPUT LINES */}
              <path d="M 270 240 C 340 240, 360 120, 455 120" fill="none" stroke="url(#outputLineGrad)" strokeWidth="1.5" />
              <path d="M 270 240 C 340 240, 360 195, 455 195" fill="none" stroke="url(#outputLineGrad)" strokeWidth="1.5" />
              <path d="M 270 240 C 340 240, 360 265, 455 265" fill="none" stroke="url(#outputLineGrad)" strokeWidth="1.5" />
              <path d="M 270 240 C 340 240, 360 340, 455 340" fill="none" stroke="url(#outputLineGrad)" strokeWidth="1.5" />

              {/* FLOATING DATA PACKETS */}
              <circle cx="150" cy="155" r="4" fill="#7C3AED" />
              <circle cx="180" cy="215" r="4" fill="#7C3AED" />
              <circle cx="210" cy="255" r="4" fill="#7C3AED" />
              <circle cx="390" cy="165" r="4" fill="#06B6D4" />
              <circle cx="350" cy="250" r="4" fill="#06B6D4" />
              <circle cx="410" cy="305" r="4" fill="#06B6D4" />

              {/* CENTRAL NODE */}
              <g filter="url(#glow)">
                <circle cx="270" cy="240" r="68" fill="url(#centerGrad)" stroke="white" strokeWidth="4" />
                <text x="270" y="235" textAnchor="middle" fill="white" fontSize="18" fontWeight="800" letterSpacing="2">PRYSM</text>
                <text x="270" y="255" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontWeight="600" letterSpacing="1">AI ENGINE</text>
              </g>

              {/* INPUT NODES */}
              <g transform="translate(15, 105)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(124,58,237,0.2)" />
                <circle cx="15" cy="15" r="6" fill="#7C3AED" opacity="0.2" />
                <circle cx="15" cy="15" r="3" fill="#7C3AED" />
                <text x="30" y="19" fill="#0A0E1A" fontSize="11" fontWeight="600">EPIC EMR</text>
              </g>
              <g transform="translate(15, 180)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(124,58,237,0.2)" />
                <circle cx="15" cy="15" r="6" fill="#7C3AED" opacity="0.2" />
                <circle cx="15" cy="15" r="3" fill="#7C3AED" />
                <text x="30" y="19" fill="#0A0E1A" fontSize="11" fontWeight="600">WINDFALL</text>
              </g>
              <g transform="translate(15, 250)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(124,58,237,0.2)" />
                <circle cx="15" cy="15" r="6" fill="#7C3AED" opacity="0.2" />
                <circle cx="15" cy="15" r="3" fill="#7C3AED" />
                <text x="30" y="19" fill="#0A0E1A" fontSize="11" fontWeight="600">DONORSEARCH</text>
              </g>
              <g transform="translate(15, 325)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(124,58,237,0.2)" />
                <circle cx="15" cy="15" r="6" fill="#7C3AED" opacity="0.2" />
                <circle cx="15" cy="15" r="3" fill="#7C3AED" />
                <text x="30" y="19" fill="#0A0E1A" fontSize="11" fontWeight="600">70K+ PHYSICIANS</text>
              </g>

              {/* OUTPUT NODES */}
              <g transform="translate(385, 105)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(6,182,212,0.2)" />
                <circle cx="125" cy="15" r="6" fill="#06B6D4" opacity="0.2" />
                <circle cx="125" cy="15" r="3" fill="#06B6D4" />
                <text x="110" y="19" textAnchor="end" fill="#0A0E1A" fontSize="11" fontWeight="600">BLACKBAUD CRM</text>
              </g>
              <g transform="translate(385, 180)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(6,182,212,0.2)" />
                <circle cx="125" cy="15" r="6" fill="#06B6D4" opacity="0.2" />
                <circle cx="125" cy="15" r="3" fill="#06B6D4" />
                <text x="110" y="19" textAnchor="end" fill="#0A0E1A" fontSize="11" fontWeight="600">SALESFORCE NPSP</text>
              </g>
              <g transform="translate(385, 250)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(6,182,212,0.2)" />
                <circle cx="125" cy="15" r="6" fill="#06B6D4" opacity="0.2" />
                <circle cx="125" cy="15" r="3" fill="#06B6D4" />
                <text x="110" y="19" textAnchor="end" fill="#0A0E1A" fontSize="11" fontWeight="600">GIFT OFFICERS</text>
              </g>
              <g transform="translate(385, 325)" filter="url(#shadow)">
                <rect width="140" height="30" rx="6" fill="white" stroke="rgba(6,182,212,0.2)" />
                <circle cx="125" cy="15" r="6" fill="#06B6D4" opacity="0.2" />
                <circle cx="125" cy="15" r="3" fill="#06B6D4" />
                <text x="110" y="19" textAnchor="end" fill="#0A0E1A" fontSize="11" fontWeight="600">ROI ANALYTICS</text>
              </g>

              {/* FLOATING STATS */}
              <g transform="translate(190, 150)" filter="url(#shadow)">
                <rect width="80" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                <text x="40" y="14" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="600">93.1 avg score</text>
              </g>
              <g transform="translate(300, 160)" filter="url(#shadow)">
                <rect width="90" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                <text x="45" y="14" textAnchor="middle" fill="#06B6D4" fontSize="9" fontWeight="700">305% more gifts</text>
              </g>
              <g transform="translate(180, 280)" filter="url(#shadow)">
                <rect width="85" height="20" rx="4" fill="white" stroke="#E2E8F0" />
                <text x="42.5" y="14" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="600">$285K capacity</text>
              </g>
            </svg>
          </div>

          {/* BOTTOM METRICS */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 relative z-10 w-full max-w-[540px]">
            <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-[10px] lg:text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
              12,847 encounters processed
            </div>
            <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-[10px] lg:text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-2"></span>
              1,422 prospects qualified
            </div>
            <div className="bg-white border border-gray-100 rounded-full px-3 py-1.5 text-[10px] lg:text-xs font-semibold text-gray-600 shadow-sm flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2"></span>
              47 ready today
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
