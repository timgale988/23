import React from "react";
import { ArrowRight } from "lucide-react";

export function HeroV3Journal() {
  return (
    <div className="w-full min-h-[600px] flex flex-col items-center justify-center font-sans relative py-12 px-4 sm:px-8 lg:px-16" style={{ backgroundColor: "#FAF9F6", color: "#1A1208" }}>
      <div className="max-w-7xl w-full mx-auto flex flex-col h-full">
        
        {/* Top Bar */}
        <div className="w-full flex justify-between items-center border-b border-gray-300 pb-3 mb-10">
          <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Healthcare Philanthropy Intelligence <span className="mx-2">—</span> Issue 01, 2025 <span className="mx-2">—</span> Actionable Insight
          </div>
          <a href="#briefing" className="text-sm font-medium hover:text-[#7C3AED] transition-colors border-b border-transparent hover:border-[#7C3AED]">
            Request a Briefing
          </a>
        </div>

        {/* Main 2-Column Content */}
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch flex-grow">
          
          {/* Left Text Column (58%) */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#7C3AED] mb-4">
              Strategic Briefing
            </span>
            
            <h1 
              className="font-bold leading-[1.1] mb-6 text-[#1A1208]"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 58px)" 
              }}
            >
              Grateful Patients Are Your Health System's Greatest Untapped Philanthropic Asset.
            </h1>
            
            <div className="text-sm text-gray-400 mb-6 italic">
              By Actionable Insight Intelligence Unit • Read time: 4 min
            </div>
            
            <p className="text-gray-600 text-[16px] leading-relaxed mb-10 max-w-2xl">
              Artificial intelligence has revolutionized the identification and cultivation of prospective donors within your existing patient population. By bridging the gap between clinical encounters and philanthropic intent, health systems are seeing an unprecedented 20x ROI and a 305% increase in major gifts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a href="#prysm" className="group flex items-center text-[#7C3AED] font-medium border-b border-transparent hover:border-[#7C3AED] transition-all pb-1 w-fit">
                Explore Prysm Platform 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#aperion" className="group flex items-center text-[#7C3AED] font-medium border-b border-transparent hover:border-[#7C3AED] transition-all pb-1 w-fit">
                Explore Aperion Platform
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-200">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-3">Trusted by leading institutions</span>
              <p className="text-sm text-gray-500 font-serif">
                Providence Health • City of Hope • LSU Health • UCF Health • Rutgers Health
              </p>
            </div>
          </div>
          
          {/* Right Photo Column (42%) */}
          <div className="w-full lg:w-[42%] relative h-[400px] lg:h-auto min-h-[480px]">
            <div className="absolute inset-0 border border-gray-200 p-2 bg-white shadow-sm">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <img 
                  src="/__mockup/images/hero-balloon-orange.png" 
                  alt="Abstract conceptual art representing elevation and insight" 
                  className="w-full h-full object-cover grayscale-[20%]"
                  style={{ objectPosition: "center 49%" }}
                />
                {/* Amber Overlay */}
                <div 
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{ backgroundColor: "rgba(180, 100, 0, 0.12)" }}
                ></div>
                
                {/* Subtle grain/texture overlay could go here if needed */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  Fig. 1 — Elevation
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Rule & Attribution */}
        <div className="w-full mt-16 pt-4 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-medium tracking-wide">
          <div className="flex gap-4 mb-2 sm:mb-0">
            <span>HIPAA Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>Epic EMR Native</span>
            <span className="hidden sm:inline">•</span>
            <span>Live in 30 Days</span>
          </div>
          <div>© 2025 Actionable Insight</div>
        </div>

      </div>
    </div>
  );
}
