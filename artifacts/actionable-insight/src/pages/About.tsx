import { Link } from "wouter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const TIMELINE = [
  {
    date: "Foundation",
    title: "Rutgers Health — Platform Origins",
    desc: "The core Prysm methodology was developed and validated at Rutgers Health, establishing the foundational framework for connecting Epic clinical data with philanthropic identification at scale.",
    color: "#7C3AED",
  },
  {
    date: "Formation",
    title: "Actionable Insight AI Founded",
    desc: "Partnership formation brought the Prysm platform under the Actionable Insight AI umbrella — combining deep domain expertise in healthcare philanthropy with a technology-first operating model.",
    color: "#4F46E5",
  },
  {
    date: "Scale",
    title: "Providence Health — South Division",
    desc: "Prysm deployed across nine Providence Health California ministries, generating 3,098 identified prospects, 461 qualified major giving opportunities, and $4.32M in realized philanthropic revenue.",
    color: "#2563EB",
  },
  {
    date: "Expansion",
    title: "Aperion — Broader Nonprofit",
    desc: "Launch of Aperion extends the Actionable Insight AI mission into the broader nonprofit sector — bringing AI-augmented fundraising intelligence to development offices beyond health systems.",
    color: "#06B6D4",
  },
];

const VALUES = [
  {
    num: "01",
    title: "The relationship is irreplaceable",
    desc: "Technology should make the fundraiser more effective — never replace them. The moment of generosity happens between two humans. Our platforms exist to make that moment as informed and meaningful as possible.",
  },
  {
    num: "02",
    title: "Purpose-built beats adapted",
    desc: "Prysm was built for health system philanthropy. Aperion was built for nonprofit fundraising. The specificity is the advantage. General platforms adjusted for the sector are not the same as platforms designed for it from the ground up.",
  },
  {
    num: "03",
    title: "Outcomes over outputs",
    desc: "We measure our work in realized revenue, qualified prospects, and fundraiser effectiveness — not platform utilization, feature releases, or API calls. If the number that matters to our clients isn't moving, nothing else we report means anything.",
  },
  {
    num: "04",
    title: "Compliance by design",
    desc: "In health systems, HIPAA compliance is not a feature — it is foundational architecture. Every data flow, integration, and access control is designed with PHI protection as a first principle, not a retrofit.",
  },
  {
    num: "05",
    title: "Operational support included",
    desc: "Our platforms are delivered with playbooks, onboarding, training, and ongoing client success built in. The technology is the platform — the partnership is how it works. We do not separate them.",
  },
  {
    num: "06",
    title: "Talent deserves better tools",
    desc: "The retention crisis in development offices is a design problem. Fundraising professionals leave the sector because the role doesn't match the promise. We build the tools that close that gap — and give the profession back its dignity.",
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 bg-[#0A0E1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/12 via-[#0A0E1A] to-[#06B6D4]/8" />
          <div className="absolute top-[-60px] right-[-40px] w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#7C3AED] via-[#2563EB] to-[#06B6D4] opacity-10 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-[11px] tracking-[0.22em] font-bold text-white/35 uppercase">
                About Actionable Insight AI
              </span>
            </div>
            <h1 className="text-[clamp(44px,6vw,80px)] font-bold text-white leading-[0.92] tracking-[-0.04em] uppercase mb-8 max-w-[760px]">
              Built for the mission.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                Proven in practice.
              </span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed max-w-[560px]">
              We build the platforms that free fundraisers from administrative work — and give them
              the intelligence to spend their time where it matters most: with donors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission + Vision ── */}
      <section className="grid md:grid-cols-2 border-b border-[#E8ECF2]">
        {/* Mission */}
        <div className="relative p-16 lg:p-20 border-b md:border-b-0 md:border-r border-[#E8ECF2]">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]" />
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Our mission
              </span>
            </div>
            <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.025em] text-[#0A0E1A] leading-[1.18] mb-7">
              Eliminate the work that keeps fundraisers from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                the work that matters.
              </span>
            </h2>
            <p className="text-base text-[#6B7A90] font-light leading-relaxed mb-5">
              Fundraisers are hired for their ability to build relationships, inspire generosity,
              and connect donors to causes that move them. Instead, they spend the majority of their
              working hours on research, data entry, CRM administration, and meeting preparation —
              tasks that technology should handle, but historically hasn't.
            </p>
            <p className="text-base text-[#6B7A90] font-light leading-relaxed">
              Actionable Insight AI builds platforms that transfer that burden from people to
              software. Our mission is to give every fundraiser — in health systems and across the
              nonprofit sector — the tools that make them materially more effective, and the freedom
              to do the work they entered the profession to do.
            </p>
          </AnimatedSection>
        </div>

        {/* Vision */}
        <div className="relative p-16 lg:p-20">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#06B6D4]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#06B6D4] uppercase">
                Our vision
              </span>
            </div>
            <h2 className="text-[clamp(26px,3vw,34px)] font-bold tracking-[-0.025em] text-[#0A0E1A] leading-[1.18] mb-7">
              A world where every fundraiser spends 85% of their time{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                building relationships.
              </span>
            </h2>
            <p className="text-base text-[#6B7A90] font-light leading-relaxed mb-5">
              The talent and retention crisis in development offices is not a compensation problem.
              It is an experience problem. The best fundraising professionals leave the sector
              because the role they were promised — strategic, relationship-driven, meaningful — is
              buried under administrative work that no one entered the profession to do.
            </p>
            <p className="text-base text-[#6B7A90] font-light leading-relaxed">
              We envision a nonprofit sector where intelligent platforms handle the data layer
              completely, and where fundraisers operate as the high-performance advisors they were
              trained to be. That is not a distant aspiration. It is a deployable reality, and it is
              what Actionable Insight AI is building toward — one client at a time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 lg:py-32 border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#7C3AED]" />
                <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                  Our story
                </span>
              </div>
              <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92] mb-10">
                Built from
                <br />
                the inside out.
              </h2>
              <div className="space-y-5 text-base text-[#6B7A90] font-light leading-[1.8]">
                <p>
                  Actionable Insight AI was not built by technologists who discovered philanthropy.
                  It was built by practitioners who understood the problem from the inside — and
                  spent years developing the solution before bringing it to market.
                </p>
                <p>
                  The company's roots are in healthcare philanthropy, where the intersection of
                  clinical data and major gift fundraising presented a specific, solvable problem:
                  health systems were sitting on the most powerful source of philanthropic
                  intelligence available — patient gratitude — and had no systematic way to act on
                  it.
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
                  Actionable Insight AI now serves both markets simultaneously, with purpose-built
                  platforms for each.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="border-l border-[#E8ECF2] pl-10 mt-2">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="relative pb-10 last:pb-0">
                    <div
                      className="absolute left-[-42px] top-[5px] w-[9px] h-[9px] rounded-full"
                      style={{ background: item.color }}
                    />
                    <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#9AA3B2] mb-1.5">
                      {item.date}
                    </div>
                    <div className="text-base font-bold text-[#0A0E1A] tracking-tight mb-2">
                      {item.title}
                    </div>
                    <p className="text-sm text-[#6B7A90] font-light leading-[1.65]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-24 lg:py-32 bg-[#F7F8FC] border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                What we build
              </span>
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92]">
              Two platforms.
              <br />
              One mission.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-px bg-[#E8ECF2] border border-[#E8ECF2]">
            {/* Prysm */}
            <AnimatedSection className="bg-white p-12 lg:p-14 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
              <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#7C3AED] mb-4">
                Prysm
              </div>
              <h3 className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.03em] uppercase text-[#0A0E1A] leading-[0.93] mb-5">
                Grateful Patient
                <br />
                Intelligence
              </h3>
              <p className="text-[15px] text-[#6B7A90] font-light leading-[1.72] mb-8">
                Purpose-built for health system philanthropy. Prysm connects Epic EMR with
                Blackbaud CRM to automatically surface major gift prospects from clinical encounter
                data — compliantly, in real time, and at the moment patient gratitude is highest.
              </p>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-bold text-[#9AA3B2]">
                <div className="w-4 h-px bg-[#9AA3B2]" />
                Healthcare philanthropy
              </div>
              <Link
                href="/prysm"
                className="inline-flex items-center mt-8 text-[#7C3AED] text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity"
              >
                Explore Prysm →
              </Link>
            </AnimatedSection>

            {/* Aperion */}
            <AnimatedSection delay={0.1} className="bg-white p-12 lg:p-14 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] to-[#06B6D4]" />
              <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#06B6D4] mb-4">
                Aperion
              </div>
              <h3 className="text-[clamp(28px,3vw,38px)] font-bold tracking-[-0.03em] uppercase text-[#0A0E1A] leading-[0.93] mb-5">
                AI-Augmented
                <br />
                Fundraising
              </h3>
              <p className="text-[15px] text-[#6B7A90] font-light leading-[1.72] mb-8">
                Built for the broader nonprofit sector. Aperion replaces 75% of a fundraiser's
                administrative burden with AI-generated donor briefings, intelligent opportunity
                matching, and proposal intelligence — so development professionals counsel donors,
                not spreadsheets.
              </p>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase font-bold text-[#9AA3B2]">
                <div className="w-4 h-px bg-[#9AA3B2]" />
                Nonprofit sector
              </div>
              <Link
                href="/aperion"
                className="inline-flex items-center mt-8 text-[#06B6D4] text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity"
              >
                Explore Aperion →
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-white/20" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-white/30 uppercase">
                What we believe
              </span>
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.04em] uppercase text-white leading-[0.92]">
              The principles that
              <br />
              shape the work.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
            {VALUES.map((v, i) => (
              <AnimatedSection
                key={i}
                delay={0.07 * i}
                className="bg-[#141828] p-10 lg:p-11"
              >
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#7C3AED] mb-4">
                  {v.num}
                </div>
                <h3 className="text-[17px] font-bold tracking-[-0.01em] uppercase text-white mb-3 leading-[1.1]">
                  {v.title}
                </h3>
                <p className="text-sm text-white/45 font-light leading-[1.7]">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grad strip ── */}
      <div className="h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]" />
    </div>
  );
}
