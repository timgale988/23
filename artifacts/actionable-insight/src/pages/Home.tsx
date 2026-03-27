import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const products = [
  {
    name: "Prysm",
    sub: "Grateful Patient Intelligence",
    href: "/prysm",
    color: "#7C3AED",
    gradFrom: "#7C3AED",
    gradTo: "#2563EB",
    desc: "Prysm bridges Epic EMR with Blackbaud CRM and Salesforce NPSP to automatically surface major gift prospects from clinical encounter data — identifying grateful patients before the window of opportunity closes.",
    link: "Explore Prysm",
  },
  {
    name: "Aperion",
    sub: "AI-Augmented Fundraising",
    href: "/aperion",
    color: "#06B6D4",
    gradFrom: "#2563EB",
    gradTo: "#06B6D4",
    desc: "Aperion eliminates 75% of administrative burden — replacing it with AI-prepared donor briefings, intelligent opportunity matching, and proposal intelligence that makes every gift officer conversation count.",
    link: "Explore Aperion",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero — full-bleed photo, text bottom-anchored ── */}
      {/* -mt-20 cancels Layout's pt-20 so the photo bleeds behind the navbar */}
      <section className="relative -mt-20 overflow-hidden" style={{ height: "calc(85vh + 5rem)", minHeight: 600 }}>

        {/* Photo fill */}
        <img
          src={`${import.meta.env.BASE_URL}images/person-phone.png`}
          alt="Healthcare philanthropist reviewing patient intelligence"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />

        {/* Dark gradient rising from bottom — text stays legible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,14,26,1) 0%, rgba(10,14,26,0.88) 30%, rgba(10,14,26,0.15) 65%, rgba(10,14,26,0.45) 100%)",
          }}
        />

        {/* Violet tint bleeding in from left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(124,58,237,0.28) 0%, transparent 55%)",
          }}
        />

        {/* Grid texture — very subtle */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Text — anchored to bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-14 text-white">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-px bg-white/30" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-white/45 uppercase">
                Healthcare Philanthropy Intelligence
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1
              className="font-black uppercase leading-[0.92] tracking-[-0.04em] text-white mb-7"
              style={{ fontSize: "clamp(44px, 7vw, 82px)", maxWidth: 700 }}
            >
              Boundless Insight.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)",
                }}
              >
                One Platform.
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/prysm">
                <Button
                  size="lg"
                  className="rounded-none text-xs tracking-widest uppercase font-bold px-9 h-13 border-0 text-white hover:opacity-90"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)",
                    height: 52,
                  }}
                >
                  Explore our platforms
                </Button>
              </Link>
              <Link href="/results">
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-none text-xs tracking-widest uppercase font-bold px-8 text-white/80 group"
                  style={{
                    height: 52,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  View client results
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Products — full-width horizontal stacked rows ── */}
      <section className="bg-white">
        {products.map((p, i) => (
          <div
            key={p.name}
            className="flex border-b border-[#E8ECF2]"
            style={{ minHeight: 160 }}
          >
            {/* Left column: name + subtitle */}
            <div
              className="relative flex-shrink-0 flex flex-col justify-center border-r border-[#E8ECF2] px-10 py-10"
              style={{ width: "28%" }}
            >
              {/* Left edge gradient bar */}
              <div
                className="absolute top-0 left-0 bottom-0 w-[3px]"
                style={{
                  background: `linear-gradient(to bottom, ${p.gradFrom}, ${p.gradTo})`,
                }}
              />
              <AnimatedSection delay={i * 0.08}>
                <div
                  className="font-black uppercase tracking-tight text-[#0A0E1A] mb-1"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "-0.03em" }}
                >
                  {p.name}
                </div>
                <div
                  className="text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: p.color }}
                >
                  {p.sub}
                </div>
              </AnimatedSection>
            </div>

            {/* Right column: description + link */}
            <div className="flex-1 flex flex-col justify-center gap-5 px-12 py-10">
              <AnimatedSection delay={i * 0.08 + 0.06}>
                <p className="text-[#6B7A90] font-light text-[15px] leading-[1.72]">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="inline-flex items-center mt-4 text-[11px] font-extrabold tracking-[0.18em] uppercase group/link hover:opacity-70 transition-opacity"
                  style={{ color: p.color }}
                >
                  {p.link}
                  <ArrowRight className="ml-2 w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA — centered, stripped, no stats table ── */}
      <section className="relative py-28 lg:py-36 bg-[#0A0E1A] text-white overflow-hidden">
        {/* Radial center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-2xl mx-auto px-6 sm:px-10 relative z-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-7 h-px bg-white/20" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-white/30 uppercase">
                Get started
              </span>
            </div>

            <h2
              className="font-black uppercase leading-[0.92] tracking-[-0.04em] text-white mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 70px)" }}
            >
              Let's talk about
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)",
                }}
              >
                what's possible.
              </span>
            </h2>

            <p className="text-lg text-white/45 font-light leading-relaxed mb-12 max-w-xl">
              Schedule a live platform walkthrough. We'll show you exactly how Prysm
              connects to your Epic environment, what the first 90 days look like, and
              the outcomes health systems at your scale have already achieved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="rounded-none text-xs tracking-widest uppercase font-bold px-10 border-0 text-white hover:opacity-90"
                style={{
                  height: 56,
                  background: "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)",
                }}
              >
                Request a demo <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
              <Link href="/results">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none text-xs tracking-widest uppercase font-bold px-9 border-white/15 text-white/55 hover:text-white hover:border-white/35 bg-transparent"
                  style={{ height: 56 }}
                >
                  View client results
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
