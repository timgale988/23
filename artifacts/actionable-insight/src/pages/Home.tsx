import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const INTEGRATIONS = ["Epic EMR", "Blackbaud CRM", "Salesforce NPSP", "Windfall", "DonorSearch"];
const CLIENTS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health", "Rutgers Health"];

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-gray-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">

            {/* Left — Text */}
            <div className="flex-1 max-w-[560px]">
              <AnimatedSection>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
                  style={{ background: "rgba(124,58,237,0.07)", color: "#7C3AED", border: "1px solid rgba(124,58,237,0.18)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  Healthcare Philanthropy Intelligence
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <h1
                  className="font-black uppercase leading-[0.92] text-[#0A0E1A] mb-7"
                  style={{ fontSize: "clamp(50px, 6.5vw, 82px)", letterSpacing: "-0.04em" }}
                >
                  Turn Every
                  <br />
                  Discharge
                  <br />
                  Into a{" "}
                  <span
                    className="italic"
                    style={{
                      background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Gift.
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <p className="text-gray-500 text-lg leading-relaxed mb-9 max-w-[440px]">
                  Actionable Insight's AI platforms help health system and nonprofit development
                  teams identify prospects, build relationships, and raise more — with less
                  administrative burden.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <div className="flex flex-wrap items-center gap-3 mb-10">
                  <Link href="/prysm">
                    <button
                      className="px-8 py-4 rounded-xl text-white font-bold text-[15px] transition-all hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                        boxShadow: "0 8px 24px rgba(124,58,237,0.35)",
                      }}
                    >
                      Explore Prysm
                    </button>
                  </Link>
                  <Link href="/aperion">
                    <button
                      className="px-8 py-4 rounded-xl border-2 font-bold text-[15px] text-[#0A0E1A] hover:bg-gray-50 transition-colors"
                      style={{ borderColor: "#E5E7EB" }}
                    >
                      Explore Aperion
                    </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-5">
                  {[
                    { icon: "⚡", label: "Epic & Blackbaud Native" },
                    { icon: "🔒", label: "HIPAA Compliant" },
                    { icon: "◎", label: "Live in 30 Days" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <span>{item.icon}</span>
                      <span className="text-xs font-semibold text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Hero image */}
            <AnimatedSection delay={0.1} className="flex-1 w-full min-w-0">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-3xl opacity-20"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", filter: "blur(48px)" }}
                />
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 32px 80px rgba(10,14,26,0.18), 0 4px 16px rgba(10,14,26,0.08)" }}
                >
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0E1A]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white/40 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      app.actionableinsight.com
                    </div>
                  </div>

                  {/* Image with overlaid UI */}
                  <div className="relative">
                    <img
                      src="/images/hero-mesh.png"
                      alt="Actionable Insight — connected intelligence platform"
                      className="w-full object-cover"
                      style={{ height: "360px", objectPosition: "center" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(6,10,20,0.25) 0%, rgba(6,10,20,0.72) 100%)" }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-0.5">Prysm</div>
                          <div className="text-white font-bold text-sm">Prospect Intelligence Feed</div>
                        </div>
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest"
                          style={{ background: "rgba(124,58,237,0.25)", color: "#C4B5FD", border: "1px solid rgba(124,58,237,0.3)" }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                          Live · Epic Synced
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 mb-3">
                        {[
                          { label: "New Prospects", value: "84", delta: "+12 today", color: "#A78BFA" },
                          { label: "Ready for Outreach", value: "31", delta: "48hr window", color: "#67E8F9" },
                          { label: "Avg Score", value: "91", delta: "↑ trending", color: "#93C5FD" },
                        ].map((s) => (
                          <div key={s.label} className="p-3 rounded-xl backdrop-blur-sm bg-white/[0.09] border border-white/[0.12]">
                            <div className="text-white/50 text-[10px] mb-1">{s.label}</div>
                            <div className="text-white font-black text-2xl leading-none mb-1">{s.value}</div>
                            <div className="text-[10px] font-semibold" style={{ color: s.delta.startsWith("+") || s.delta.includes("↑") ? s.color : "rgba(255,255,255,0.4)" }}>{s.delta}</div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1.5">
                        {[
                          { name: "Margaret W.", dept: "Cardiac ICU", cap: "$500K+", tag: "Priority", tagColor: "#C4B5FD", tagBg: "rgba(124,58,237,0.28)" },
                          { name: "Robert T.", dept: "Orthopedic Surgery", cap: "$250K", tag: "Outreach", tagColor: "#67E8F9", tagBg: "rgba(6,182,212,0.22)" },
                        ].map((p) => (
                          <div key={p.name} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl backdrop-blur-sm bg-white/[0.06] border border-white/[0.09]">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                              style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}
                            >
                              {p.name[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-semibold text-xs">{p.name}</div>
                              <div className="text-white/35 text-[10px] truncate">{p.dept}</div>
                            </div>
                            <div className="text-white font-bold text-xs flex-shrink-0">{p.cap}</div>
                            <div className="px-2 py-0.5 rounded-md text-[10px] font-bold flex-shrink-0" style={{ background: p.tagBg, color: p.tagColor }}>
                              {p.tag}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating ROI card */}
                <div
                  className="absolute -bottom-4 -right-4 px-5 py-4 rounded-2xl shadow-xl bg-white"
                  style={{ border: "1px solid #E5E7EB", boxShadow: "0 12px 32px rgba(10,14,26,0.12)" }}
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Year-One ROI</div>
                  <div
                    className="text-3xl font-black leading-none"
                    style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    20×
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-b border-gray-100 py-5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest flex-shrink-0">Trusted by</span>
            {CLIENTS.map((c) => (
              <span key={c} className="text-sm font-bold text-gray-300 hover:text-gray-500 transition-colors">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-4">Our Platforms</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.95]"
              style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.04em" }}
            >
              Two Platforms.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                One Mission.
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Prysm",
                sub: "Grateful Patient Intelligence",
                href: "/prysm",
                color: "#7C3AED",
                gradFrom: "#7C3AED",
                gradTo: "#2563EB",
                desc: "Prysm bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically surface major gift prospects from clinical encounter data — identifying grateful patients before the window of opportunity closes.",
                stat: "305%",
                statLabel: "More first-time major gifts",
              },
              {
                name: "Aperion",
                sub: "AI-Augmented Fundraising",
                href: "/aperion",
                color: "#06B6D4",
                gradFrom: "#2563EB",
                gradTo: "#06B6D4",
                desc: "Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every gift officer conversation count.",
                stat: "75%",
                statLabel: "Admin time eliminated",
              },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})` }}
                  />
                  <div className="mb-2">
                    <div
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                      style={{ background: `${p.color}12`, color: p.color }}
                    >
                      {p.name}
                    </div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">{p.sub}</div>
                  </div>

                  <p className="text-gray-500 text-base leading-relaxed mb-8">{p.desc}</p>

                  <div className="flex items-end justify-between mt-auto">
                    <Link href={p.href}>
                      <div
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3"
                        style={{ color: p.color }}
                      >
                        Explore {p.name}
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                    <div className="text-right">
                      <div
                        className="text-3xl font-black leading-none"
                        style={{ background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      >
                        {p.stat}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{p.statLabel}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-16 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-8">Native integrations with the systems you already use</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {INTEGRATIONS.map((name) => (
                <div
                  key={name}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 shadow-sm"
                >
                  {name}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
            {[
              { value: "$4.32M", label: "Realized Revenue, Year One" },
              { value: "461", label: "Qualified Major Gift Prospects" },
              { value: "305%", label: "Increase in First-Time Major Gifts" },
              { value: "20×", label: "Average ROI on Investment" },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.07} className="bg-white p-8 lg:p-10 text-center">
                <div
                  className="font-black text-[clamp(32px,4vw,52px)] leading-none mb-2"
                  style={{
                    background: "linear-gradient(135deg,#7C3AED,#2563EB,#06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider leading-snug">{s.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 lg:py-36 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)" }}
        />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Get started</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-7"
              style={{ fontSize: "clamp(40px, 6vw, 70px)", letterSpacing: "-0.04em" }}
            >
              Let's talk about
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                what's possible.
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Schedule a live platform walkthrough. We'll show you how Prysm connects to your
              Epic environment and what the first 90 days look like.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-10 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#2563EB)",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.4)",
                }}
              >
                Request a Demo
              </button>
              <Link href="/results">
                <button className="px-10 py-4 rounded-xl border border-white/15 text-white/60 font-bold text-base hover:text-white hover:border-white/30 transition-all">
                  View Client Results
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
