import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

const TIMELINE = [
  { date: "Foundation", title: "Rutgers Health — Platform Origins",         color: "#7C3AED", desc: "The core Prysm methodology was developed and validated at Rutgers Health, establishing the foundational framework for connecting Epic clinical data with philanthropic identification at scale." },
  { date: "Formation",  title: "Actionable Insight AI Founded",            color: "#4F46E5", desc: "Partnership formation brought the Prysm platform under the Actionable Insight AI umbrella — combining deep domain expertise in healthcare philanthropy with a technology-first operating model." },
  { date: "Scale",      title: "Providence Health — South Division",       color: "#2563EB", desc: "Prysm deployed across nine Providence Health California ministries, generating 3,098 identified prospects, 461 qualified major giving opportunities, and $4.32M in realized philanthropic revenue." },
  { date: "Expansion",  title: "Aperion — Broader Nonprofit",              color: "#06B6D4", desc: "Launch of Aperion extends the Actionable Insight AI mission into the broader nonprofit sector — bringing AI-augmented fundraising intelligence to development offices beyond health systems." },
];

const VALUES = [
  { num: "01", title: "The relationship is irreplaceable",   desc: "Technology should make the fundraiser more effective — never replace them. The moment of generosity happens between two humans. Our platforms exist to make that moment as informed and meaningful as possible." },
  { num: "02", title: "Purpose-built beats adapted",         desc: "Prysm was built for health system philanthropy. Aperion was built for nonprofit fundraising. The specificity is the advantage. General platforms adjusted for the sector are not the same as platforms designed for it from the ground up." },
  { num: "03", title: "Outcomes over outputs",               desc: "We measure our work in realized revenue, qualified prospects, and fundraiser effectiveness — not platform utilization, feature releases, or API calls." },
  { num: "04", title: "Compliance by design",               desc: "In health systems, HIPAA compliance is not a feature — it is foundational architecture. Every data flow, integration, and access control is designed with PHI protection as a first principle, not a retrofit." },
  { num: "05", title: "Operational support included",        desc: "Our platforms are delivered with playbooks, onboarding, training, and ongoing client success built in. The technology is the platform — the partnership is how it works. We do not separate them." },
  { num: "06", title: "Talent deserves better tools",        desc: "The retention crisis in development offices is a design problem. Fundraising professionals leave the sector because the role doesn't match the promise. We build the tools that close that gap." },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-gray-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">About Actionable Insight AI</p>
              <h1
                className="font-black uppercase text-[#0A0E1A] leading-[0.92] mb-8"
                style={{ fontSize: "clamp(44px,6vw,80px)", letterSpacing: "-0.04em" }}
              >
                Built for the mission.
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Proven in practice.
                </span>
              </h1>
              <p className="text-gray-500 text-xl leading-relaxed max-w-[560px]">
                We build the platforms that free fundraisers from administrative work — and give them
                the intelligence to spend their time where it matters most: with donors.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Mission + Vision ── */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="py-14 lg:py-20 md:pr-14 relative">
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB)" }}
              />
              <AnimatedSection>
                <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Our Mission</p>
                <h2
                  className="font-black text-[#0A0E1A] leading-snug mb-7"
                  style={{ fontSize: "clamp(22px,2.8vw,32px)", letterSpacing: "-0.025em" }}
                >
                  Eliminate the work that keeps fundraisers from{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    the work that matters.
                  </span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Fundraisers are hired for their ability to build relationships, inspire generosity,
                  and connect donors to causes that move them. Instead, they spend the majority of
                  their working hours on research, data entry, CRM administration, and meeting
                  preparation — tasks that technology should handle, but historically hasn't.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Actionable Insight AI builds platforms that transfer that burden from people to
                  software. Our mission is to give every fundraiser the tools that make them materially
                  more effective, and the freedom to do the work they entered the profession to do.
                </p>
              </AnimatedSection>
            </div>

            <div className="py-14 lg:py-20 md:pl-14 relative">
              <div
                className="absolute top-0 left-0 right-0 h-1 md:left-auto md:right-0"
                style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
              />
              <AnimatedSection delay={0.1}>
                <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-5">Our Vision</p>
                <h2
                  className="font-black text-[#0A0E1A] leading-snug mb-7"
                  style={{ fontSize: "clamp(22px,2.8vw,32px)", letterSpacing: "-0.025em" }}
                >
                  A world where every fundraiser spends 85% of their time{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg,#2563EB,#06B6D4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    building relationships.
                  </span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  The talent and retention crisis in development offices is not a compensation problem.
                  It is an experience problem. The best fundraising professionals leave the sector
                  because the role they were promised — strategic, relationship-driven, meaningful —
                  is buried under administrative work that no one entered the profession to do.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  We envision a nonprofit sector where intelligent platforms handle the data layer
                  completely, and where fundraisers operate as the high-performance advisors they
                  were trained to be.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <AnimatedSection>
              <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Our Story</p>
              <h2
                className="font-black uppercase text-[#0A0E1A] leading-[0.92] mb-10"
                style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.04em" }}
              >
                Built from
                <br />
                the inside out.
              </h2>
              <div className="space-y-5 text-gray-500 leading-relaxed">
                <p>
                  Actionable Insight AI was not built by technologists who discovered philanthropy.
                  It was built by practitioners who understood the problem from the inside — and spent
                  years developing the solution before bringing it to market.
                </p>
                <p>
                  The company's roots are in healthcare philanthropy, where the intersection of
                  clinical data and major gift fundraising presented a specific, solvable problem:
                  health systems were sitting on the most powerful source of philanthropic
                  intelligence available — patient gratitude — and had no systematic way to act on it.
                </p>
                <p>
                  Prysm was the answer to that problem. Developed and refined through real
                  deployments at academic medical centers and major health systems, it became the
                  foundation for what Actionable Insight AI is today: a platform company that builds
                  intelligent infrastructure for fundraising organizations that are serious about
                  performance.
                </p>
                <p>
                  With the launch of Aperion, that mission expanded beyond healthcare. The same
                  administrative burden that plagues health system development offices exists
                  everywhere in the nonprofit sector — and the same AI-driven solution applies.
                </p>
              </div>
            </AnimatedSection>

            {/* Timeline */}
            <AnimatedSection delay={0.1}>
              <div className="relative pl-8 border-l border-gray-200">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="relative pb-10 last:pb-0">
                    <div
                      className="absolute -left-[21px] top-[5px] w-[9px] h-[9px] rounded-full ring-4 ring-white"
                      style={{ background: item.color }}
                    />
                    <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1.5">{item.date}</div>
                    <div className="text-base font-bold text-[#0A0E1A] mb-2">{item.title}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">What We Build</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.92]"
              style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.04em" }}
            >
              Two platforms.
              <br />
              One mission.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Prysm",
                sub: "Grateful Patient Intelligence",
                href: "/prysm",
                color: "#7C3AED",
                grad: "linear-gradient(90deg,#7C3AED,#2563EB)",
                sector: "Healthcare philanthropy",
                desc: "Purpose-built for health system philanthropy. Prysm connects Epic EMR with Blackbaud CRM to automatically surface major gift prospects from clinical encounter data — compliantly, in real time, and at the moment patient gratitude is highest.",
              },
              {
                name: "Aperion",
                sub: "AI-Augmented Fundraising",
                href: "/aperion",
                color: "#06B6D4",
                grad: "linear-gradient(90deg,#2563EB,#06B6D4)",
                sector: "Nonprofit sector",
                desc: "Built for the broader nonprofit sector. Aperion replaces 75% of a fundraiser's administrative burden with AI-generated donor briefings, intelligent opportunity matching, and proposal intelligence — so development professionals counsel donors, not spreadsheets.",
              },
            ].map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08} className="bg-white border border-gray-200 rounded-2xl p-10 relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: p.grad }} />
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p.color }}>{p.name}</div>
                <h3
                  className="font-black uppercase text-[#0A0E1A] leading-[0.93] mb-5"
                  style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.03em" }}
                >
                  {p.sub}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-7">{p.desc}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{p.sector}</div>
                  <Link href={p.href}>
                    <div
                      className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-all hover:gap-2.5"
                      style={{ color: p.color }}
                    >
                      Explore {p.name} <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">What We Believe</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.92]"
              style={{ fontSize: "clamp(32px,4vw,52px)", letterSpacing: "-0.04em" }}
            >
              The principles that
              <br />
              shape the work.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <AnimatedSection key={i} delay={0.07 * i} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-md transition-all">
                <div
                  className="text-xs font-black uppercase tracking-widest mb-4"
                  style={{
                    background: "linear-gradient(90deg,#7C3AED,#06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {v.num}
                </div>
                <h3 className="text-base font-black uppercase text-[#0A0E1A] tracking-tight mb-3 leading-[1.15]">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)" }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Work with us</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-7"
              style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.04em" }}
            >
              Let's build something
              <br />
              <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                meaningful together.
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              If you're a health system or nonprofit development program ready to operate at a higher
              level, we'd like to talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-10 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 28px rgba(124,58,237,0.4)" }}
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
