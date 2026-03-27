import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

/* ─── existing case-study data ─── */
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

/* ─── dashboard data ─── */
const GROWTH_DATA = [
  { year: "2021", referrals: 40 },
  { year: "2022", referrals: 71 },
  { year: "2023", referrals: 100 },
  { year: "2024", referrals: 392 },
  { year: "2025", referrals: 1330 },
];
const GROWTH_COLORS = ["#7C3AED", "#5B4AE8", "#2563EB", "#0891B2", "#06B6D4"];

const GROWTH_STATS = [
  { value: "3,225%", label: "Physician referral growth", sub: "40 → 1,330 (2021–2025)" },
  { value: "4,469%", label: "Introductory contact growth", sub: "39 → 1,782 (2021–2025)" },
  { value: "36×", label: "Pipeline value increase", sub: "$437M → $15.8B (2021–2025)" },
];

const HOSPITALS = [
  { name: "St. Joseph Burbank", rate: 53.1, n: 224, region: "SoCal — Los Angeles", benchmark: 20.1 },
  { name: "St. Jude Fullerton", rate: 23.8, n: 244, region: "SoCal — Orange County", benchmark: 16.9 },
  { name: "St. Joseph Orange", rate: 20.1, n: 398, region: "SoCal — Orange County", benchmark: 16.9 },
  { name: "Santa Rosa Memorial", rate: 18.9, n: 132, region: "Northern California", benchmark: 8.3 },
  { name: "Tarzana Medical Center", rate: 12.9, n: 93, region: "SoCal — Los Angeles", benchmark: 20.1 },
  { name: "PLCM Torrance", rate: 10.2, n: 384, region: "SoCal — Los Angeles", benchmark: 20.1 },
  { name: "Holy Cross", rate: 9.7, n: 124, region: "SoCal — Los Angeles", benchmark: 20.1 },
  { name: "Mission Hospital", rate: 7.7, n: 339, region: "SoCal — Orange County", benchmark: 16.9 },
  { name: "Swedish (all facilities)", rate: 2.2, n: 365, region: "Pacific Northwest", benchmark: 2.2 },
];

const CONTACT_METHODS = [
  { label: "Hospital Inpatient Visit", rate: 38.3, n: 222, effort: "High" },
  { label: "Phone Call", rate: 25.7, n: 723, effort: "Low" },
  { label: "Virtual Salon Event", rate: 11.1, n: 18, effort: "Medium" },
  { label: "Email", rate: 10.9, n: 439, effort: "Low" },
  { label: "Letter", rate: 7.7, n: 1462, effort: "Minimal" },
];

const REFERRAL_SOURCES = [
  { label: "Board Member", rate: 42.9, n: 35 },
  { label: "Clinician Direct", rate: 34.1, n: 314 },
  { label: "Nurse Identified", rate: 33.3, n: 18 },
  { label: "Fundraiser", rate: 12.5, n: 1026 },
  { label: "List Review", rate: 11.8, n: 1641 },
  { label: "Circle of Caring", rate: 0.0, n: 53 },
];

const SPECIALTIES = [
  { label: "Orthopedic Surgery", rate: 25.0, n: 24, nw: "$0.2B" },
  { label: "Neurology", rate: 24.2, n: 66, nw: "$0.9B" },
  { label: "Hem. & Oncology", rate: 17.8, n: 169, nw: "$2.2B" },
  { label: "Rehabilitation", rate: 17.8, n: 185, nw: "$2.3B" },
  { label: "Cardiology", rate: 17.1, n: 444, nw: "$8.0B" },
  { label: "Internal Medicine", rate: 13.9, n: 209, nw: "$3.7B" },
  { label: "Gastroenterology", rate: 9.7, n: 31, nw: "$1.0B" },
  { label: "Family Medicine", rate: 9.5, n: 285, nw: "$3.0B" },
  { label: "OB-GYN", rate: 3.7, n: 81, nw: "$1.6B" },
];

const GRAD = "linear-gradient(90deg, #7C3AED, #2563EB, #06B6D4)";

/* ─── helpers ─── */
function hospitalBarColor(rate: number): string {
  if (rate >= 40) return "#7C3AED";
  if (rate >= 20) return "#2563EB";
  if (rate >= 10) return "#0891B2";
  return "#9AA3B2";
}

const CustomGrowthTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#1A2035", border: "1px solid rgba(255,255,255,0.1)", padding: "12px 18px" }}>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px" }}>
        {label}
      </div>
      <div style={{ fontSize: "26px", fontWeight: 700, color: "#fff", lineHeight: 1 }}>
        {payload[0].value.toLocaleString()}
      </div>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
        physician referrals
      </div>
    </div>
  );
};

/* ─── page ─── */
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
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
            <div className="bg-white p-10 lg:p-[52px] relative">
              <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: GRAD }} />
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

            <div className="bg-[#F7F8FC] p-10 lg:p-[52px] flex flex-col gap-7">
              <div className="text-[10px] tracking-[0.18em] font-bold text-[#9AA3B2] uppercase">
                Platform data — Feb 2026
              </div>
              <div className="flex flex-col border border-[#E8ECF2] bg-white">
                {SIDEBAR_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 flex items-center justify-between gap-4"
                    style={{ borderBottom: i < SIDEBAR_ROWS.length - 1 ? "1px solid #E8ECF2" : "none" }}
                  >
                    <div className="text-[12px] text-[#6B7A90]">{row.key}</div>
                    {row.accent ? (
                      <div className="text-[14px] font-bold tracking-[-0.01em] text-right text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
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

      {/* ── Growth trajectory ── */}
      <section className="py-24 border-b" style={{ background: "#0A0E1A", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-white/20" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-white/30 uppercase">
                Pipeline growth · 2021–2025
              </span>
            </div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.04em] uppercase text-white leading-[0.92] mb-3">
              From 40 referrals to 1,330
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
                in four years.
              </span>
            </h2>
            <p className="text-[15px] text-white/40 font-light leading-relaxed max-w-[520px] mb-14">
              Physician referrals scaled exponentially as the Prysm program matured — with 2025 alone
              delivering more referrals than the prior three years combined.
            </p>
          </AnimatedSection>

          {/* Bar chart */}
          <AnimatedSection delay={0.1} className="mb-10">
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={GROWTH_DATA} barCategoryGap="28%" margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 11 }}
                    tickFormatter={(v) => v >= 1000 ? `${v / 1000}k` : String(v)}
                  />
                  <Tooltip content={<CustomGrowthTooltip />} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="referrals" radius={[2, 2, 0, 0]}>
                    {GROWTH_DATA.map((_, i) => (
                      <Cell key={i} fill={GROWTH_COLORS[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          {/* Growth stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] border border-white/[0.06]">
            {GROWTH_STATS.map((s, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-[#141828] px-8 py-7">
                <div className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.04em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] mb-2">
                  {s.value}
                </div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-white mb-1">{s.label}</div>
                <div className="text-[12px] text-white/35 font-light">{s.sub}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hospital benchmarks ── */}
      <section className="py-24 border-b border-[#E8ECF2] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Ministry conversion benchmarks
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92]">
                Conversion rates across
                <br />
                all nine hospitals.
              </h2>
              <p className="text-[14px] text-[#6B7A90] font-light leading-relaxed max-w-[420px]">
                Vertical line marks each ministry's regional benchmark. Hospitals above benchmark are
                performing above the standard for their market. St. Joseph Burbank at 53.1% represents
                what is achievable when physician relationships, officer experience, and institutional
                culture fully align.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="border border-[#E8ECF2]">
              {/* Table header */}
              <div className="grid bg-[#0A0E1A] text-white px-6 py-3" style={{ gridTemplateColumns: "1fr 100px 100px 90px 120px" }}>
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/50">Hospital</div>
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/50 text-right">Prospects</div>
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/50 text-right">Q-Major</div>
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/50 text-right">Rate</div>
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-white/50 text-right">vs. Benchmark</div>
              </div>

              {HOSPITALS.map((h, i) => {
                const maxRate = 56;
                const barPct = (h.rate / maxRate) * 100;
                const benchPct = (h.benchmark / maxRate) * 100;
                const delta = h.rate - h.benchmark;
                const above = delta > 0.5;
                const color = hospitalBarColor(h.rate);
                return (
                  <div
                    key={i}
                    className="border-b border-[#E8ECF2] last:border-0 px-6 pt-4 pb-4 hover:bg-[#F7F8FC] transition-colors"
                  >
                    <div className="grid items-center gap-2 mb-3" style={{ gridTemplateColumns: "1fr 100px 100px 90px 120px" }}>
                      <div>
                        <div className="text-[13px] font-bold text-[#0A0E1A]">{h.name}</div>
                        <div className="text-[10px] text-[#9AA3B2] tracking-wider uppercase mt-0.5">{h.region}</div>
                      </div>
                      <div className="text-[13px] font-semibold text-[#6B7A90] text-right">{h.n.toLocaleString()}</div>
                      <div className="text-[13px] font-semibold text-[#6B7A90] text-right">{Math.round(h.n * h.rate / 100)}</div>
                      <div className="text-[15px] font-bold text-[#0A0E1A] text-right">{h.rate}%</div>
                      <div className={`text-[13px] font-bold text-right ${above ? "text-[#059669]" : "text-[#9AA3B2]"}`}>
                        {delta > 0 ? "+" : ""}{delta.toFixed(1)}pp
                      </div>
                    </div>
                    {/* bar */}
                    <div className="relative h-4 bg-[#F7F8FC] rounded-sm overflow-visible">
                      <div
                        className="absolute left-0 top-0 h-full rounded-sm transition-all duration-700"
                        style={{ width: `${barPct}%`, background: color }}
                      />
                      <div
                        className="absolute top-[-3px] bottom-[-3px] w-[2px] bg-[#0A0E1A]/30"
                        style={{ left: `${benchPct}%` }}
                        title={`Regional benchmark: ${h.benchmark}%`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-6 mt-4 text-[11px] text-[#9AA3B2]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#7C3AED]" />
                <span>40%+</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#2563EB]" />
                <span>20–40%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#0891B2]" />
                <span>10–20%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#9AA3B2]" />
                <span>&lt;10%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[2px] h-4 bg-[#0A0E1A]/30" />
                <span>Regional benchmark</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Engagement intelligence ── */}
      <section className="py-24 border-b border-[#E8ECF2] bg-[#F7F8FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Engagement intelligence
              </span>
            </div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92]">
              How the program identifies
              <br />
              and qualifies prospects.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-px bg-[#E8ECF2] border border-[#E8ECF2]">
            {/* Contact methods */}
            <div className="bg-white p-10">
              <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9AA3B2] mb-1">Contact method</div>
              <div className="text-[18px] font-bold text-[#0A0E1A] tracking-tight mb-1">Conversion by outreach type</div>
              <p className="text-[13px] text-[#6B7A90] font-light leading-relaxed mb-8">
                Methods operate as a multi-stage funnel, not competing channels. Letters cast the wide net
                cheaply. Phone is the efficiency sweet spot. Inpatient visits deliver the highest conversion
                at proportionally higher time investment.
              </p>
              {CONTACT_METHODS.map((c, i) => {
                const pct = (c.rate / 40) * 100;
                return (
                  <div key={i} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-semibold text-[#0A0E1A]">{c.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-[#9AA3B2]">n={c.n.toLocaleString()}</span>
                        <span className="text-[14px] font-bold text-[#0A0E1A] w-10 text-right">{c.rate}%</span>
                      </div>
                    </div>
                    <div className="h-4 bg-[#F7F8FC] relative rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm"
                        style={{
                          width: `${pct}%`,
                          background: c.rate >= 30 ? "#7C3AED" : c.rate >= 20 ? "#2563EB" : "#0891B2",
                        }}
                      />
                    </div>
                    <div className="text-[10px] text-[#9AA3B2] mt-1">Effort: {c.effort}</div>
                  </div>
                );
              })}
            </div>

            {/* Referral sources */}
            <div className="bg-white p-10">
              <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#9AA3B2] mb-1">Referral source</div>
              <div className="text-[18px] font-bold text-[#0A0E1A] tracking-tight mb-1">Conversion by referral origin</div>
              <p className="text-[13px] text-[#6B7A90] font-light leading-relaxed mb-8">
                Direct referrals convert at 34.1% vs. 11.8% for list review — not because one source is
                better, but because list review is how you build physician trust that eventually becomes
                direct referral behavior. The ratio between them tracks program maturity.
              </p>
              {REFERRAL_SOURCES.map((r, i) => {
                const pct = (r.rate / 45) * 100;
                return (
                  <div key={i} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] font-semibold text-[#0A0E1A]">{r.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-[#9AA3B2]">n={r.n.toLocaleString()}</span>
                        <span className="text-[14px] font-bold text-[#0A0E1A] w-10 text-right">{r.rate}%</span>
                      </div>
                    </div>
                    <div className="h-4 bg-[#F7F8FC] relative rounded-sm overflow-hidden">
                      <div
                        className="h-full rounded-sm"
                        style={{
                          width: `${pct}%`,
                          background: r.rate >= 35 ? "#7C3AED" : r.rate >= 20 ? "#2563EB" : r.rate > 0 ? "#0891B2" : "#E8ECF2",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clinical pathway performance ── */}
      <section className="py-24 border-b border-[#E8ECF2] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-[60px]">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#7C3AED]" />
              <span className="text-[10px] tracking-[0.22em] font-bold text-[#7C3AED] uppercase">
                Clinical pathway performance
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.04em] uppercase text-[#0A0E1A] leading-[0.92]">
                Conversion rate by
                <br />
                clinical specialty.
              </h2>
              <p className="text-[14px] text-[#6B7A90] font-light leading-relaxed max-w-[400px]">
                Specialties like Cardiology, Neurology, and Orthopedics represent physician-patient
                relationships that drive fundraising. High-volume treatment settings (Radiology, ER)
                are excluded — they reflect access points, not clinical relationships.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-px bg-[#E8ECF2] border border-[#E8ECF2]">
              {/* Bar chart side */}
              <div className="bg-white p-10">
                {SPECIALTIES.map((s, i) => {
                  const pct = (s.rate / 27) * 100;
                  return (
                    <div key={i} className="mb-5 last:mb-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[13px] font-semibold text-[#0A0E1A]">{s.label}</span>
                        <span className="text-[14px] font-bold text-[#0A0E1A]">{s.rate}%</span>
                      </div>
                      <div className="h-4 bg-[#F7F8FC] rounded-sm overflow-hidden">
                        <div
                          className="h-full rounded-sm"
                          style={{
                            width: `${pct}%`,
                            background: s.rate >= 20 ? "#7C3AED" : s.rate >= 15 ? "#2563EB" : s.rate >= 10 ? "#0891B2" : "#9AA3B2",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table side */}
              <div className="bg-[#F7F8FC] p-10">
                <div className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#9AA3B2] mb-6">
                  Specialty detail
                </div>
                <div className="border border-[#E8ECF2] bg-white">
                  <div className="grid bg-[#0A0E1A] px-5 py-3 text-white" style={{ gridTemplateColumns: "1fr 50px 60px 60px" }}>
                    {["Specialty", "N", "Rate", "Pipeline"].map((h) => (
                      <div key={h} className="text-[9px] tracking-[0.18em] uppercase font-bold text-white/50 text-right first:text-left">{h}</div>
                    ))}
                  </div>
                  {SPECIALTIES.map((s, i) => (
                    <div
                      key={i}
                      className="grid px-5 py-3 border-b border-[#E8ECF2] last:border-0 hover:bg-[#F7F8FC] transition-colors items-center"
                      style={{ gridTemplateColumns: "1fr 50px 60px 60px" }}
                    >
                      <div className="text-[12px] font-semibold text-[#0A0E1A]">{s.label}</div>
                      <div className="text-[12px] text-[#6B7A90] text-right">{s.n}</div>
                      <div
                        className="text-[12px] font-bold text-right"
                        style={{ color: s.rate >= 20 ? "#7C3AED" : s.rate >= 15 ? "#2563EB" : "#0A0E1A" }}
                      >
                        {s.rate}%
                      </div>
                      <div className="text-[12px] text-[#6B7A90] text-right">{s.nw}</div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 p-4 bg-white border border-[#E8ECF2] text-[12px] text-[#6B7A90] leading-relaxed font-light"
                  style={{ borderLeftColor: "#7C3AED", borderLeftWidth: "3px" }}
                >
                  Cardiology alone represents <strong className="text-[#0A0E1A]">444 prospects and $8.0B in pipeline net worth</strong> — the
                  single largest wealth concentration in the South Division program.
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pipeline breakdown ── */}
      <section
        className="py-24 border-b"
        style={{ background: "#0A0E1A", borderColor: "rgba(255,255,255,0.06)" }}
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
            style={{ gap: "2px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {PIPELINE_CARDS.map((card, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-[#141828] p-10">
                <div className="text-[clamp(32px,3.5vw,44px)] font-bold tracking-[-0.04em] leading-none mb-2.5 text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4]">
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
