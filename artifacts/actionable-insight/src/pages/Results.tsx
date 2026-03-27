import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const METRICS = [
  { num: "305", suffix: "%", label: "Increase in first-time\nmajor gifts" },
  { num: "448", suffix: "%", label: "Increase in prospect\nengagement" },
  { num: "$4.32", suffix: "M", label: "Realized revenue,\ninitial deployment" },
  { num: "5.2", suffix: "×", label: "Best vs. average\nconversion rate" },
];

const SIDEBAR_ROWS = [
  { key: "Total prospects identified",      val: "3,098",  accent: true  },
  { key: "Total pipeline net worth",        val: "$46.1B", accent: true  },
  { key: "Qualified MG prospects",          val: "461",    accent: false },
  { key: "Qualified MG net worth",          val: "$6.6B",  accent: false },
  { key: "System conversion rate",          val: "14.9%",  accent: false },
  { key: "Best ministry conversion (SJB)",  val: "67.5%",  accent: true  },
  { key: "Realized revenue",               val: "$4.32M", accent: true  },
  { key: "First-time MG gift increase",     val: "305%",   accent: false },
  { key: "Engagement increase",             val: "448%",   accent: false },
];

const CASE_STATS = [
  { num: "461",  label: "Qualified MG\nprospects" },
  { num: "$6.6B",label: "Qualified MG\nnet worth" },
  { num: "9",    label: "Hospitals\nmanaged" },
];

const PIPELINE_CARDS = [
  { num: "$46.1B", label: "Total identified wealth",       desc: "Net worth of all 3,098 Prysm-identified prospects across nine South Division hospitals." },
  { num: "$29.0B", label: "Unworked pipeline",             desc: "1,621 identified prospects never contacted by a development officer — representing 63% of all pipeline wealth at $19.8M average net worth." },
  { num: "$4.07B", label: "Incremental opportunity",       desc: "224 additional MG qualifications achievable from existing pipeline using proven Burbank benchmarks — without identifying a single new prospect." },
];

const GROWTH_DATA = [
  { year: "2021", referrals: 40   },
  { year: "2022", referrals: 71   },
  { year: "2023", referrals: 100  },
  { year: "2024", referrals: 392  },
  { year: "2025", referrals: 1330 },
];
const GROWTH_COLORS = ["#7C3AED","#5B4AE8","#2563EB","#0891B2","#06B6D4"];

const GROWTH_STATS = [
  { value: "3,225%", label: "Physician referral growth",       sub: "40 → 1,330 (2021–2025)"   },
  { value: "4,469%", label: "Introductory contact growth",     sub: "39 → 1,782 (2021–2025)"   },
  { value: "36×",    label: "Pipeline value increase",         sub: "$437M → $15.8B (2021–2025)" },
];

const HOSPITALS = [
  { name: "St. Joseph Burbank",       rate: 53.1, n: 224, region: "SoCal — Los Angeles",      benchmark: 20.1 },
  { name: "St. Jude Fullerton",       rate: 23.8, n: 244, region: "SoCal — Orange County",    benchmark: 16.9 },
  { name: "St. Joseph Orange",        rate: 20.1, n: 398, region: "SoCal — Orange County",    benchmark: 16.9 },
  { name: "Santa Rosa Memorial",      rate: 18.9, n: 132, region: "Northern California",       benchmark: 8.3  },
  { name: "Tarzana Medical Center",   rate: 12.9, n: 93,  region: "SoCal — Los Angeles",      benchmark: 20.1 },
  { name: "PLCM Torrance",            rate: 10.2, n: 384, region: "SoCal — Los Angeles",      benchmark: 20.1 },
  { name: "Holy Cross",               rate: 9.7,  n: 124, region: "SoCal — Los Angeles",      benchmark: 20.1 },
  { name: "Mission Hospital",         rate: 7.7,  n: 339, region: "SoCal — Orange County",    benchmark: 16.9 },
  { name: "Swedish (all facilities)", rate: 2.2,  n: 365, region: "Pacific Northwest",         benchmark: 2.2  },
];

const CONTACT_METHODS = [
  { label: "Hospital Inpatient Visit", rate: 38.3, n: 222,  effort: "High"    },
  { label: "Phone Call",               rate: 25.7, n: 723,  effort: "Low"     },
  { label: "Virtual Salon Event",      rate: 11.1, n: 18,   effort: "Medium"  },
  { label: "Email",                    rate: 10.9, n: 439,  effort: "Low"     },
  { label: "Letter",                   rate: 7.7,  n: 1462, effort: "Minimal" },
];

const REFERRAL_SOURCES = [
  { label: "Board Member",    rate: 42.9, n: 35   },
  { label: "Clinician Direct",rate: 34.1, n: 314  },
  { label: "Nurse Identified",rate: 33.3, n: 18   },
  { label: "Fundraiser",      rate: 12.5, n: 1026 },
  { label: "List Review",     rate: 11.8, n: 1641 },
  { label: "Circle of Caring",rate: 0.0,  n: 53   },
];

function hospitalBarColor(rate: number): string {
  if (rate >= 40) return "#7C3AED";
  if (rate >= 20) return "#2563EB";
  if (rate >= 10) return "#0891B2";
  return "#9AA3B2";
}

const CustomGrowthTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0A0E1A] border border-white/10 px-4 py-3 rounded-xl">
      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{label}</div>
      <div className="text-2xl font-black text-white leading-none">{payload[0].value.toLocaleString()}</div>
      <div className="text-xs text-white/40 mt-1">physician referrals</div>
    </div>
  );
};

export default function Results() {
  return (
    <div className="overflow-hidden bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-gray-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Client Results</p>
            <h1
              className="font-black uppercase text-[#0A0E1A] leading-[0.92] mb-7"
              style={{ fontSize: "clamp(44px,7vw,80px)", letterSpacing: "-0.04em" }}
            >
              Proof is in
              <br />
              the{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                numbers.
              </span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[520px]">
              Verified results from Providence Health South Division — drawn from 3,098 prospects,
              $46.1 billion in identified wealth, and direct platform attribution.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {METRICS.map((m, i) => (
              <div key={i} className="py-10 px-8 lg:px-10">
                <AnimatedSection delay={0.07 * i}>
                  <div
                    className="font-black leading-none mb-2"
                    style={{ fontSize: "clamp(36px,4vw,52px)", letterSpacing: "-0.05em" }}
                  >
                    <span className="text-[#0A0E1A]">{m.num}</span>
                    <span
                      style={{
                        background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {m.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold leading-snug" style={{ whiteSpace: "pre-line" }}>
                    {m.label}
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case study ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Case Study</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.92] mb-4"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
            >
              Providence Health
              <br />
              South Division.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-[540px]">
              A multi-hospital Prysm deployment across nine California ministries — generating 461 qualified
              major giving prospects from 3,098 identified patients and $4.32M in realized philanthropic revenue.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left panel */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)" }}
              />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Providence Health — South Division, California</p>
              <div className="font-black uppercase text-[#0A0E1A] leading-[0.95] mb-5" style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-0.04em" }}>
                <span
                  style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  461
                </span>{" "}
                qualified
                <br />major giving
                <br />prospects.
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
                Providence South Division deployed Prysm across nine California hospitals to build a
                systematic grateful patient identification program from Epic EMR data. The platform
                identified 3,098 prospects representing $46.1 billion in total net worth, qualifying
                461 to major giving status — a 14.9% system-wide conversion rate.
                <br /><br />
                St. Joseph Burbank emerged as the highest-converting ministry at 67.5% — nearly 5×
                the system average — driven by inpatient visit utilization 4.5× higher than system
                norm.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                {CASE_STATS.map((s, i) => (
                  <div key={i}>
                    <div className="font-black text-2xl lg:text-3xl text-[#0A0E1A] leading-none mb-1" style={{ letterSpacing: "-0.03em" }}>{s.num}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold leading-snug" style={{ whiteSpace: "pre-line" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10 flex flex-col gap-5">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Platform Data — Feb 2026</p>
              <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
                {SIDEBAR_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className="px-5 py-3.5 flex items-center justify-between gap-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="text-sm text-gray-500">{row.key}</div>
                    {row.accent ? (
                      <div
                        className="text-sm font-bold"
                        style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                      >
                        {row.val}
                      </div>
                    ) : (
                      <div className="text-sm font-bold text-[#0A0E1A]">{row.val}</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed p-4 bg-white border border-gray-200 rounded-xl border-l-2 border-l-violet-500">
                St. Joseph Burbank converts at 67.5% — nearly 5× the 14.9% system average — from
                inpatient visit utilization 4.5× higher than system norm and mature direct physician
                referral relationships.
              </div>
            </div>
          </div>

          {/* Pipeline cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            {PIPELINE_CARDS.map((card, i) => (
              <AnimatedSection key={i} delay={0.1 * i} className="bg-gray-50 border border-gray-200 rounded-2xl p-7">
                <div
                  className="font-black text-3xl leading-none mb-3"
                  style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em" }}
                >
                  {card.num}
                </div>
                <div className="text-xs font-bold text-[#0A0E1A] uppercase tracking-wider mb-2">{card.label}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{card.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth trajectory — keep dark for visual contrast ── */}
      <section className="py-20 lg:py-28 border-b bg-[#0A0E1A]" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">Pipeline Growth · 2021–2025</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-4"
              style={{ fontSize: "clamp(28px,4vw,48px)", letterSpacing: "-0.04em" }}
            >
              From 40 referrals to 1,330
              <br />
              <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                in four years.
              </span>
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-[520px]">
              Physician referrals scaled exponentially as the Prysm program matured — with 2025 alone
              delivering more referrals than the prior three years combined.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mb-10">
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={GROWTH_DATA} barCategoryGap="28%" margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "rgba(255,255,255,0.25)", fontSize: 11 }} tickFormatter={(v) => v >= 1000 ? `${v/1000}k` : String(v)} />
                  <Tooltip content={<CustomGrowthTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="referrals" radius={[4, 4, 0, 0]}>
                    {GROWTH_DATA.map((_, i) => <Cell key={i} fill={GROWTH_COLORS[i]} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GROWTH_STATS.map((s, i) => (
              <AnimatedSection key={i} delay={0.08 * i} className="bg-[#141828] border border-white/[0.06] rounded-2xl px-7 py-6">
                <div
                  className="font-black leading-none mb-2"
                  style={{ fontSize: "clamp(28px,3.5vw,40px)", background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white mb-1">{s.label}</div>
                <div className="text-xs text-white/35">{s.sub}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hospital benchmarks ── */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Ministry Conversion Benchmarks</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="font-black uppercase text-[#0A0E1A] leading-[0.92]"
                style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.04em" }}
              >
                Conversion rates across
                <br />
                all nine hospitals.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[420px]">
                Vertical line marks each ministry's regional benchmark. St. Joseph Burbank at 53.1%
                represents what's achievable when physician relationships and program culture align.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-gray-200 overflow-hidden">
              <div className="grid bg-[#0A0E1A] text-white px-6 py-3 rounded-t-2xl" style={{ gridTemplateColumns: "1fr 100px 100px 90px 120px" }}>
                <div className="text-[10px] tracking-widest uppercase font-bold text-white/40">Hospital</div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-white/40 text-right">Prospects</div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-white/40 text-right">Q-Major</div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-white/40 text-right">Rate</div>
                <div className="text-[10px] tracking-widest uppercase font-bold text-white/40 text-right">vs. Benchmark</div>
              </div>
              {HOSPITALS.map((h, i) => {
                const maxRate = 56;
                const barPct = (h.rate / maxRate) * 100;
                const benchPct = (h.benchmark / maxRate) * 100;
                const delta = h.rate - h.benchmark;
                const above = delta > 0.5;
                return (
                  <div key={i} className="border-b border-gray-100 last:border-0 px-6 pt-4 pb-4 hover:bg-gray-50 transition-colors">
                    <div className="grid items-center gap-2 mb-3" style={{ gridTemplateColumns: "1fr 100px 100px 90px 120px" }}>
                      <div>
                        <div className="text-sm font-bold text-[#0A0E1A]">{h.name}</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{h.region}</div>
                      </div>
                      <div className="text-sm font-semibold text-gray-400 text-right">{h.n.toLocaleString()}</div>
                      <div className="text-sm font-semibold text-gray-400 text-right">{Math.round(h.n * h.rate / 100)}</div>
                      <div className="text-[15px] font-bold text-[#0A0E1A] text-right">{h.rate}%</div>
                      <div className={`text-sm font-bold text-right ${above ? "text-emerald-600" : "text-gray-300"}`}>
                        {delta > 0 ? "+" : ""}{delta.toFixed(1)}pp
                      </div>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-visible">
                      <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${barPct}%`, background: hospitalBarColor(h.rate) }} />
                      <div className="absolute top-[-3px] bottom-[-3px] w-[2px] bg-gray-400/30" style={{ left: `${benchPct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-5 mt-4 text-xs text-gray-400">
              {[["#7C3AED","40%+"],["#2563EB","20–40%"],["#0891B2","10–20%"],["#9AA3B2","<10%"]].map(([c,l])=>(
                <div key={l} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{background:c}} />
                  <span>{l}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="w-[2px] h-4 bg-gray-300" />
                <span>Regional benchmark</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Engagement intelligence ── */}
      <section className="py-20 lg:py-24 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-5">Engagement Intelligence</p>
            <h2
              className="font-black uppercase text-[#0A0E1A] leading-[0.92]"
              style={{ fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-0.04em" }}
            >
              How contact method and referral source
              <br />
              drive conversion.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact methods */}
            <AnimatedSection className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contact Method — Qualification Rate</p>
              </div>
              {CONTACT_METHODS.map((m, i) => (
                <div key={i} className="px-6 py-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-[#0A0E1A]">{m.label}</span>
                      <span className="ml-2 text-xs text-gray-400">n={m.n.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ background: m.effort === "High" ? "rgba(124,58,237,0.08)" : "rgba(107,122,144,0.08)", color: m.effort === "High" ? "#7C3AED" : "#9AA3B2" }}
                      >
                        {m.effort}
                      </span>
                      <span className="text-[15px] font-black text-[#0A0E1A]" style={{ letterSpacing: "-0.02em" }}>{m.rate}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${(m.rate / 40) * 100}%`, background: "linear-gradient(90deg,#7C3AED,#06B6D4)" }} />
                  </div>
                </div>
              ))}
            </AnimatedSection>

            {/* Referral sources */}
            <AnimatedSection delay={0.1} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Referral Source — Qualification Rate</p>
              </div>
              {REFERRAL_SOURCES.map((r, i) => (
                <div key={i} className="px-6 py-4 border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm font-semibold text-[#0A0E1A]">{r.label}</span>
                      <span className="ml-2 text-xs text-gray-400">n={r.n.toLocaleString()}</span>
                    </div>
                    <span className="text-[15px] font-black text-[#0A0E1A]" style={{ letterSpacing: "-0.02em" }}>{r.rate}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${(r.rate / 45) * 100}%`, background: "linear-gradient(90deg,#2563EB,#06B6D4)" }} />
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)" }} />
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">Get started</p>
            <h2
              className="font-black uppercase text-white leading-[0.92] mb-7"
              style={{ fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.04em" }}
            >
              Ready to achieve
              <br />
              <span style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                these results?
              </span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-10">
              Schedule a live platform walkthrough and see exactly how Prysm works in your Epic environment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                className="px-10 py-4 rounded-xl text-white font-bold text-base transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)", boxShadow: "0 8px 28px rgba(124,58,237,0.4)" }}
              >
                Request a Demo
              </button>
              <button className="px-10 py-4 rounded-xl border border-white/15 text-white/60 font-bold text-base hover:text-white hover:border-white/30 transition-all">
                Download Case Study
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
