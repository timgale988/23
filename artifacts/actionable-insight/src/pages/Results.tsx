import { AnimatedSection } from "@/components/ui/AnimatedSection";

const METRICS = [
  { num: "305", suffix: "%", label: "Increase in first-time\nmajor gifts" },
  { num: "448", suffix: "%", label: "Increase in prospect\nengagement" },
  { num: "$4.32", suffix: "M", label: "Realized revenue,\ninitial deployment" },
  { num: "5.2", suffix: "×", label: "Best vs. average\nconversion rate" },
];

const SIDEBAR_ROWS = [
  { key: "Total prospects identified", val: "3,098", accent: true },
  { key: "Total pipeline net worth", val: "$46.1B", accent: true },
  { key: "Qualified MG prospects", val: "461", accent: false },
  { key: "Qualified MG net worth", val: "$6.6B", accent: false },
  { key: "System conversion rate", val: "14.9%", accent: false },
  { key: "Best ministry conversion (SJB)", val: "67.5%", accent: true },
  { key: "Realized revenue", val: "$4.32M", accent: true },
  { key: "First-time MG gift increase", val: "305%", accent: false },
  { key: "Engagement increase", val: "448%", accent: false },
];

const CASE_STATS = [
  { num: "461", label: "Qualified MG\nprospects" },
  { num: "$6.6B", label: "Qualified MG\nnet worth" },
  { num: "9", label: "Hospitals\nmanaged" },
];

const PIPELINE_CARDS = [
  {
    num: "$46.1B",
    label: "Total identified wealth",
    desc: "Net worth of all 3,098 Prysm-identified prospects across nine South Division hospitals.",
  },
  {
    num: "$29.0B",
    label: "Unworked pipeline",
    desc: "1,621 identified prospects never contacted by a development officer — representing 63% of all pipeline wealth at $19.8M average net worth.",
  },
  {
    num: "$4.07B",
    label: "Incremental opportunity",
    desc: "224 additional MG qualifications achievable from existing pipeline using proven Burbank benchmarks — without identifying a single new prospect.",
  },
];

const CLIENTS = ["Providence Health", "City of Hope", "LSU Health", "UCF Health"];

const GRAD = "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)";

export default function Results() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute -bottom-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
          style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB, #06B6D4)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-[11px] tracking-[0.22em] font-bold text-white/35 uppercase">
                Client results
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-[clamp(40px,7vw,72px)] font-bold tracking-[-0.04em] uppercase text-white leading-[0.9] mb-7 max-w-[700px]">
              Proof is in
              <br />
              the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                numbers.
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[17px] text-white/50 leading-[1.7] font-light max-w-[540px]">
              Verified results from Providence Health South Division — drawn from 3,098 prospects,
              $46.1 billion in identified wealth, and direct platform attribution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#E8ECF2] bg-[#F7F8FC]">
        {METRICS.map((m, i) => (
          <div
            key={i}
            className="p-10 lg:p-11"
            style={{ borderRight: i < 3 ? "1px solid #E8ECF2" : "none" }}
          >
            <AnimatedSection delay={0.08 * i}>
              <div className="text-[clamp(36px,4vw,52px)] font-bold tracking-[-0.05em] leading-none text-[#0A0E1A] mb-2">
                {m.num}
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]"
                >
                  {m.suffix}
                </span>
              </div>
              <div
                className="text-[11px] text-[#9AA3B2] uppercase tracking-[0.09em] font-semibold leading-[1.5]"
                style={{ whiteSpace: "pre-line" }}
              >
                {m.label}
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>

      {/* ── Case study ── */}
      <section className="py-24 border-b border-[#E8ECF2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Case study
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92] mb-4">
              Providence Health
              <br />
              South Division.
            </h2>
            <p className="text-[16px] text-[#6B7A90] leading-[1.7] font-light max-w-[560px] mb-14">
              A multi-hospital Prysm deployment across nine California ministries — generating 461
              qualified major giving prospects from 3,098 identified patients and $4.32M in realized
              philanthropic revenue.
            </p>
          </AnimatedSection>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#E8ECF2]"
            style={{ border: "1px solid #E8ECF2" }}
          >
            {/* Left: narrative */}
            <div className="bg-white p-10 lg:p-[52px] relative">
              <div
                className="absolute top-0 left-0 w-full h-[3px]"
                style={{ background: GRAD }}
              />
              <div className="text-[10px] tracking-[0.22em] font-bold text-[#9AA3B2] uppercase mb-5">
                Providence Health — South Division, California
              </div>
              <div className="text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.03em] uppercase text-[#0A0E1A] leading-[0.95] mb-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                  461
                </span>{" "}
                qualified
                <br />
                major giving
                <br />
                prospects.
              </div>
              <p className="text-[15px] text-[#6B7A90] leading-[1.75] font-light mb-10">
                Providence South Division deployed Prysm across nine California hospitals to build a
                systematic grateful patient identification program from Epic EMR data. The platform
                identified 3,098 prospects representing $46.1 billion in total net worth, qualifying
                461 to major giving status — a 14.9% system-wide conversion rate with significant
                variance across ministries.
                <br />
                <br />
                St. Joseph Burbank emerged as the highest-converting ministry at 67.5% — nearly 5×
                the system average — driven by inpatient visit utilization 4.5× higher than system
                norm and mature direct physician referral relationships built over years of
                partnership with the development team.
              </p>
              <div className="grid grid-cols-3 border-t border-[#E8ECF2] pt-8">
                {CASE_STATS.map((s, i) => (
                  <div key={i} className={i < 2 ? "pr-6" : ""}>
                    <div className="text-[32px] font-bold tracking-[-0.03em] text-[#0A0E1A] leading-none mb-1">
                      {s.num}
                    </div>
                    <div
                      className="text-[10px] text-[#9AA3B2] uppercase tracking-[0.08em] font-semibold leading-[1.4]"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: data sidebar */}
            <div className="bg-[#F7F8FC] p-10 lg:p-[52px] flex flex-col gap-7">
              <div className="text-[10px] tracking-[0.18em] font-bold text-[#9AA3B2] uppercase">
                Platform data — Feb 2026
              </div>

              <div className="flex flex-col border border-[#E8ECF2] bg-white">
                {SIDEBAR_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 flex items-center justify-between gap-4"
                    style={{
                      borderBottom:
                        i < SIDEBAR_ROWS.length - 1 ? "1px solid #E8ECF2" : "none",
                    }}
                  >
                    <div className="text-[12px] text-[#6B7A90]">{row.key}</div>
                    {row.accent ? (
                      <div
                        className="text-[14px] font-bold tracking-[-0.01em] text-right text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]"
                      >
                        {row.val}
                      </div>
                    ) : (
                      <div className="text-[14px] font-bold tracking-[-0.01em] text-right text-[#0A0E1A]">
                        {row.val}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div
                className="text-[13px] text-[#6B7A90] leading-[1.65] font-light p-5 bg-white border border-[#E8ECF2]"
                style={{ borderLeftColor: "#7C3AED", borderLeftWidth: "3px" }}
              >
                St. Joseph Burbank converts at 67.5% — nearly 5× the 14.9% system average — from
                inpatient visit utilization 4.5× higher than system norm and mature direct physician
                referral relationships.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pipeline breakdown ── */}
      <section
        className="py-24 border-b"
        style={{
          background: "#0A0E1A",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-white/20" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-white/30 uppercase">
                Pipeline intelligence
              </span>
            </div>
            <h2 className="text-[clamp(32px,5vw,48px)] font-bold tracking-[-0.04em] uppercase text-white leading-[0.92] mb-4">
              $46.1 billion in
              <br />
              identified wealth.
            </h2>
            <p className="text-[16px] text-white/40 leading-[1.7] font-light max-w-[560px]">
              Prysm surfaces the full scale of philanthropic opportunity from clinical data — the
              majority of which remains unworked and available for activation.
            </p>
          </AnimatedSection>

          <div
            className="grid grid-cols-1 md:grid-cols-3 mt-14"
            style={{
              gap: "2px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {PIPELINE_CARDS.map((card, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-[#141828] p-10">
                <div
                  className="text-[clamp(32px,3.5vw,44px)] font-bold tracking-[-0.04em] leading-none mb-2.5 text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]"
                >
                  {card.num}
                </div>
                <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-white mb-2">
                  {card.label}
                </div>
                <div className="text-[13px] text-white/40 leading-[1.65] font-light">
                  {card.desc}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grad strip ── */}
      <div className="h-[3px]" style={{ background: GRAD }} />

      {/* ── Clients strip ── */}
      <section className="py-14 border-b border-[#E8ECF2] bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <div className="text-[10px] tracking-[0.22em] font-bold text-[#9AA3B2] uppercase text-center mb-7">
            Current clients
          </div>
          <div
            className="flex justify-center flex-wrap"
            style={{ borderTop: "1px solid #E8ECF2", borderLeft: "1px solid #E8ECF2" }}
          >
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="px-12 py-5 text-[12px] font-bold tracking-[0.14em] uppercase text-[#6B7A90]"
                style={{ borderRight: "1px solid #E8ECF2", borderBottom: "1px solid #E8ECF2" }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
