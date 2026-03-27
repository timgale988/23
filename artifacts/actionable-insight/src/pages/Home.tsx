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

            {/* Right — Prysm dashboard mockup */}
            <AnimatedSection delay={0.1} className="flex-1 w-full min-w-0">
              <div className="relative">

                {/* Background glow */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-20 pointer-events-none"
                  style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)", filter: "blur(40px)" }}
                />

                {/* Browser chrome wrapper */}
                <div
                  className="relative rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: "#E5E7EB",
                    boxShadow: "0 32px 80px rgba(10,14,26,0.12), 0 4px 16px rgba(10,14,26,0.06)",
                  }}
                >
                  {/* Chrome bar */}
                  <div
                    className="flex items-center gap-2 px-4 py-3 border-b"
                    style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div
                      className="flex-1 mx-4 px-3 py-1 rounded-md text-xs font-medium text-gray-400 flex items-center gap-1.5"
                      style={{ background: "white", border: "1px solid #E5E7EB" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4" stroke="#9CA3AF" strokeWidth="1" />
                        <path d="M3.5 5L4.5 6L6.5 4" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                      app.actionableinsight.com/prysm/dashboard
                    </div>
                  </div>

                  {/* Dashboard body */}
                  <div className="bg-[#060A14] p-5">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-0.5">Prysm Dashboard</div>
                        <div className="text-white font-bold text-base">Prospect Intelligence Feed</div>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                        style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                        <span className="text-violet-300 text-xs font-semibold">Live · Epic Synced</span>
                      </div>
                    </div>

                    {/* KPI strip */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: "New Prospects",      value: "84", delta: "+12 today",        color: "#7C3AED" },
                        { label: "Ready for Outreach", value: "31", delta: "In 48hr window",   color: "#06B6D4" },
                        { label: "Avg Capacity Score", value: "91", delta: "↑ vs last month",  color: "#2563EB" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          className="p-3 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        >
                          <div className="text-white/40 text-xs mb-1">{s.label}</div>
                          <div className="font-black text-2xl text-white leading-none mb-1">{s.value}</div>
                          <div className="text-xs font-medium" style={{ color: s.color }}>{s.delta}</div>
                        </div>
                      ))}
                    </div>

                    {/* Prospect rows */}
                    <div className="space-y-2">
                      {[
                        { name: "Margaret W.", dept: "Cardiac ICU",        score: 97, capacity: "$500K+", tag: "Priority" },
                        { name: "Robert T.",   dept: "Orthopedic Surgery", score: 94, capacity: "$250K",  tag: "Outreach" },
                        { name: "Linda H.",    dept: "Cancer Center",      score: 89, capacity: "$100K",  tag: "Qualify" },
                      ].map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center gap-3 p-3 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                            style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}
                          >
                            {p.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-sm">{p.name}</div>
                            <div className="text-white/35 text-xs truncate">{p.dept}</div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-white font-bold text-sm">{p.capacity}</div>
                            <div className="text-white/35 text-xs">Score {p.score}</div>
                          </div>
                          <div
                            className="px-2 py-1 rounded-lg text-xs font-bold flex-shrink-0"
                            style={{
                              background: p.tag === "Priority" ? "rgba(124,58,237,0.2)" : p.tag === "Outreach" ? "rgba(6,182,212,0.15)" : "rgba(37,99,235,0.15)",
                              color:      p.tag === "Priority" ? "#A78BFA"              : p.tag === "Outreach" ? "#67E8F9"              : "#93C5FD",
                            }}
                          >
                            {p.tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating ROI badge */}
                <div
                  className="absolute -bottom-3 -right-3 p-4 rounded-2xl border shadow-xl"
                  style={{ background: "white", borderColor: "#E5E7EB", boxShadow: "0 12px 32px rgba(10,14,26,0.12)" }}
                >
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Year-One ROI</div>
                  <div
                    className="text-3xl font-black leading-none"
                    style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    20×
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5">Average return</div>
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
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-gray-50">
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

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                num: "01",
                name: "Prysm",
                sub: "Grateful Patient Intelligence",
                href: "/prysm",
                color: "#7C3AED",
                gradFrom: "#7C3AED",
                gradTo: "#2563EB",
                shadowColor: "rgba(124,58,237,0.18)",
                img: "/images/dash-purple.jpeg",
                imgPos: "center 18%",
                desc: "Prysm bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically surface major gift prospects from clinical encounter data — identifying grateful patients before the window closes.",
                stat: "305%",
                statLabel: "More first-time major gifts",
                tags: ["Epic Native", "Real-Time Scoring", "HIPAA Compliant"],
              },
              {
                num: "02",
                name: "Aperion",
                sub: "AI-Augmented Fundraising",
                href: "/aperion",
                color: "#0891B2",
                gradFrom: "#2563EB",
                gradTo: "#06B6D4",
                shadowColor: "rgba(6,182,212,0.15)",
                img: "/images/dash-donut.jpeg",
                imgPos: "center 28%",
                desc: "Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every conversation count.",
                stat: "75%",
                statLabel: "Admin time eliminated",
                tags: ["AI Briefings", "Nonprofit-First", "Blackbaud Native"],
              },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <Link href={p.href}>
                  <div
                    className="group relative bg-white rounded-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                    style={{
                      overflow: "hidden",
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 4px 16px rgba(10,14,26,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 56px ${p.shadowColor}, 0 4px 16px rgba(10,14,26,0.06)`;
                      (e.currentTarget as HTMLDivElement).style.borderColor = p.gradFrom + "44";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(10,14,26,0.06)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#E5E7EB";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    {/* Colored top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 z-10"
                      style={{ background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})` }}
                    />

                    {/* Dashboard image — taller, sharper */}
                    <div className="relative flex-shrink-0" style={{ height: "270px" }}>
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: p.imgPos,
                          filter: "contrast(1.09) saturate(1.14) brightness(1.02)",
                        }}
                      />
                      {/* Light vignette — much lighter than before so dashboard is visible */}
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.92) 100%)` }}
                      />
                      {/* Platform number badge — top left */}
                      <div className="absolute top-4 left-4 z-10">
                        <div
                          className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                          style={{ background: `linear-gradient(90deg,${p.gradFrom},${p.gradTo})`, color: "#fff", letterSpacing: "0.14em" }}
                        >
                          Platform {p.num} — {p.name}
                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="flex flex-col flex-1 px-8 pb-8 pt-5">
                      {/* Platform sub-label */}
                      <div
                        className="text-xs font-bold uppercase tracking-widest mb-3"
                        style={{ color: p.color }}
                      >
                        {p.sub}
                      </div>

                      <p className="text-gray-500 text-[15px] leading-relaxed mb-5 flex-1">{p.desc}</p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-md"
                            style={{
                              background: `${p.gradFrom}10`,
                              color: p.color,
                              border: `1px solid ${p.gradFrom}22`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom row: CTA + stat */}
                      <div className="flex items-end justify-between border-t border-gray-100 pt-5">
                        <div
                          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                          style={{ color: p.color }}
                        >
                          Explore {p.name}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="text-right">
                          <div
                            className="font-black leading-none"
                            style={{
                              fontSize: "clamp(28px,3vw,38px)",
                              background: `linear-gradient(90deg, ${p.gradFrom}, ${p.gradTo})`,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              letterSpacing: "-0.03em",
                            }}
                          >
                            {p.stat}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 max-w-[120px] leading-snug text-right">{p.statLabel}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section Break 1 — Painting ── */}
      <section className="relative overflow-hidden" style={{ height: "300px" }}>
        <img
          src="/images/hero-painting.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,14,26,0.52)" }} />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Actionable Insight</p>
            <blockquote
              className="text-white font-black uppercase leading-[0.94] max-w-3xl"
              style={{ fontSize: "clamp(22px,3.5vw,42px)", letterSpacing: "-0.04em" }}
            >
              Built for the moment when{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                gratitude
              </span>{" "}
              can become{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                generosity.
              </span>
            </blockquote>
          </AnimatedSection>
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

      {/* ── Section Break 2 — Balloon Sunset ── */}
      <section className="relative overflow-hidden" style={{ height: "260px" }}>
        <img
          src="/images/hero-balloon-sunset.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(124,58,237,0.55), rgba(6,182,212,0.45))" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,14,26,0.28)" }}
        />
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
