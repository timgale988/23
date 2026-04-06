import { useState } from "react";
import { Shield, ChevronRight } from "lucide-react";

export function RadarHero() {
  const [discharges, setDischarges] = useState(50000);

  const grateful  = Math.round(discharges * 0.23);
  const qualified = Math.round(grateful * 0.11);
  const value     = Math.round(qualified * 18500);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ minHeight: "100svh", backgroundColor: "#0A0E1A" }}
    >
      {/* Background glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: 800, height: 400,
          background: "rgba(124,58,237,0.20)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 300,
          background: "rgba(6,182,212,0.10)",
          filter: "blur(100px)",
        }}
      />

      <div className="relative z-10 w-full max-w-[800px] mx-auto px-6 md:px-8 flex flex-col items-center text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider mb-8"
          style={{
            border: "1px solid rgba(124,58,237,0.30)",
            background: "rgba(124,58,237,0.10)",
            color: "#7C3AED",
          }}
        >
          GRATEFUL PATIENT OPPORTUNITY CALCULATOR
        </div>

        {/* Headline */}
        <h1
          className="text-white font-bold mb-12"
          style={{ fontSize: "clamp(26px,3.5vw,40px)", lineHeight: 1.2 }}
        >
          What is your health system's estimated philanthropic opportunity?
        </h1>

        {/* Calculator Card */}
        <div
          className="w-full rounded-3xl p-8 md:p-12 flex flex-col items-center mb-12"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.40)",
          }}
        >
          {/* Live dollar figure */}
          <div className="mb-2 flex items-center justify-center">
            <span
              className="font-black"
              style={{
                fontSize: "clamp(52px,7vw,100px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ${value.toLocaleString()}
            </span>
          </div>

          <div className="text-gray-400 font-medium text-sm uppercase tracking-widest mb-10">
            estimated annual philanthropic opportunity
          </div>

          {/* Slider */}
          <div className="w-full max-w-md mx-auto mb-10">
            <div className="flex justify-between items-end mb-4">
              <span className="text-gray-300 font-semibold text-lg">{discharges.toLocaleString()}</span>
              <span className="text-gray-500 text-sm">annual discharges</span>
            </div>
            <input
              type="range"
              min={10000}
              max={250000}
              step={5000}
              value={discharges}
              onChange={(e) => setDischarges(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer outline-none"
              style={{ accentColor: "#7C3AED", background: "rgba(255,255,255,0.10)" }}
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
              <span>10K</span>
              <span>250K+</span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {[
              { value: qualified.toLocaleString(), label: "Qualified Prospects",        accent: "text-white" },
              { value: grateful.toLocaleString(),  label: "Grateful Patients Identified", accent: "text-white" },
              { value: "$18,500",                  label: "Avg Major Gift",             accent: "text-[#06B6D4]" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all hover:bg-white/[0.02]"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span className={`font-bold text-xl mb-1 ${stat.accent}`}>{stat.value}</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[400px] mb-12" style={{ height: 1, background: "rgba(255,255,255,0.10)" }} />

        {/* Sub-CTA headline */}
        <h2 className="text-white font-bold text-2xl mb-8">
          See exactly how Prysm finds them.
        </h2>

        {/* CTA Button */}
        <a
          href="#book"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            boxShadow: "0 0 30px rgba(124,58,237,0.40)",
          }}
        >
          <span>Book a Free Opportunity Assessment</span>
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-full border border-white/20" />
        </a>

        {/* Social proof */}
        <div className="mt-16 w-full flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-6 text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant &amp; Epic Native</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-600 font-semibold text-sm">
            <span>Providence Health</span>
            <span>City of Hope</span>
            <span>LSU Health</span>
            <span>UCF Health</span>
            <span>Rutgers Health</span>
          </div>
        </div>

      </div>
    </section>
  );
}
