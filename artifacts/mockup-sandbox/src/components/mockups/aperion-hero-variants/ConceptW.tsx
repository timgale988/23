import React, { useState } from "react";
import { ArrowRight, Zap, FileText, Calendar, Search, Mail, User, ChevronRight } from "lucide-react";

// Concept W — "Live Briefing Preview" (streamlined)

const TABS = [
  { id: "profile",  label: "Profile",      icon: <User className="w-3.5 h-3.5" />,     step: "01" },
  { id: "briefing", label: "AI Briefing",  icon: <Zap className="w-3.5 h-3.5" />,      step: "02" },
  { id: "prep",     label: "Meeting Prep", icon: <Calendar className="w-3.5 h-3.5" />, step: "03" },
  { id: "followup", label: "Follow-Up",    icon: <Mail className="w-3.5 h-3.5" />,     step: "04" },
];

function ProfilePanel() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Gift Capacity", value: "$250K–500K", accent: false },
          { label: "Likelihood Score", value: "87 / 100", accent: true },
          { label: "Stage", value: "Cultivation", accent: false },
          { label: "Last Contact", value: "14 days ago", accent: false },
        ].map(({ label, value, accent }) => (
          <div key={label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1.5 uppercase tracking-wide">{label}</div>
            <div className={`font-bold text-base ${accent ? "text-emerald-400" : "text-white"}`}>{value}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Philanthropic Interests</div>
        <div className="flex flex-wrap gap-2">
          {["Oncology Research", "Medical Education", "Patient Experience"].map(i => (
            <span key={i} className="px-3 py-1.5 rounded-full text-xs font-semibold text-violet-300"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.22)" }}>{i}</span>
          ))}
        </div>
      </div>
      <div className="rounded-xl p-4 text-sm text-slate-400 leading-relaxed"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        Foundation gave <span className="text-white font-semibold">$150K to City of Hope</span> last cycle.
        Margaret served on the oncology wing naming committee in 2023.
      </div>
    </div>
  );
}

function BriefingPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest">
        <Zap className="w-3 h-3" /> Generated in 4 seconds
      </div>
      <p className="text-slate-300 text-sm leading-relaxed">
        Margaret recently served on the hospital's oncology wing naming committee and expressed
        strong interest in endowing a research fellowship. Her foundation made a $150K grant
        to City of Hope last cycle, suggesting capacity for a transformational ask.
      </p>
      <div className="rounded-xl p-4" style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.18)" }}>
        <div className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-wide">Suggested Ask</div>
        <div className="text-white font-bold text-lg leading-snug">$250,000 — Oncology Research Fellowship</div>
        <div className="text-slate-400 text-xs mt-1.5">Aligned with giving history + stated interests</div>
      </div>
      <div>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">Conversation Starters</div>
        <div className="space-y-2">
          {[
            "Ask about her experience on the naming committee",
            "Reference the Hopkins fellowship model she mentioned",
            "Lead with the patient impact story from Dr. Ramirez",
          ].map(s => (
            <div key={s} className="flex items-start gap-2.5 text-sm text-slate-300">
              <ChevronRight className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrepPanel() {
  const items = [
    { done: true,  task: "Reviewed 3-year giving history" },
    { done: true,  task: "Pulled news on Chen Family Foundation" },
    { done: true,  task: "Identified overlap: oncology + patient experience" },
    { done: false, task: "Send pre-meeting note (draft ready)" },
    { done: false, task: "Confirm location: 233 Market St" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Pre-Meeting Checklist</div>
      {items.map(({ done, task }) => (
        <div key={task} className="flex items-center gap-3 py-0.5">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-500/20 border border-emerald-500/40" : "border border-slate-700"}`}>
            {done && <span className="text-emerald-400 text-[11px] font-bold">✓</span>}
          </div>
          <span className={`text-sm ${done ? "text-slate-500 line-through" : "text-slate-200"}`}>{task}</span>
        </div>
      ))}
      <div className="mt-5 rounded-xl p-4 flex items-center gap-3 text-sm"
        style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)" }}>
        <Zap className="w-4 h-4 text-violet-400 shrink-0" />
        <span className="text-slate-300">Manual prep: ~45 min. <span className="text-violet-300 font-semibold">Aperion: 4 seconds.</span></span>
      </div>
    </div>
  );
}

function FollowUpPanel() {
  return (
    <div className="space-y-4">
      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">AI-Drafted Follow-Up</div>
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="px-4 py-3 space-y-1" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="text-xs text-slate-500">To: margaret.chen@chenfoundation.org</div>
          <div className="text-xs text-slate-500">Subject: Thank you — Oncology Fellowship Next Steps</div>
        </div>
        <div className="px-4 py-4 text-sm text-slate-300 leading-relaxed"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          Dear Margaret, Thank you for the thoughtful conversation this afternoon. Your passion
          for advancing oncology research aligns perfectly with our fellowship endowment opportunity...
        </div>
        <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
            Edit & Send <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[{ label: "Next Touchpoint", value: "7 days" }, { label: "Proposal Target", value: "Q2 2025" }].map(({ label, value }) => (
          <div key={label} className="rounded-xl p-4 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1.5">{label}</div>
            <div className="font-bold text-white">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PANELS: Record<string, React.ReactNode> = {
  profile: <ProfilePanel />,
  briefing: <BriefingPanel />,
  prep: <PrepPanel />,
  followup: <FollowUpPanel />,
};

export function ConceptW() {
  const [activeTab, setActiveTab] = useState("briefing");

  return (
    <div className="min-h-[100dvh] w-full font-sans flex flex-col lg:flex-row" style={{ background: "#03081A", color: "#E2E8F0" }}>

      {/* ── LEFT: Value Prop ── */}
      <div className="lg:w-[36%] flex flex-col justify-between p-8 md:p-10 border-r" style={{ borderColor: "rgba(255,255,255,0.07)", background: "#040920" }}>
        <div>
          {/* Badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Platform 02 — Aperion</span>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-white leading-[1.08] mb-5" style={{ fontSize: "clamp(28px,2.8vw,42px)", letterSpacing: "-0.03em" }}>
            Every meeting,<br />
            <span style={{ background: "linear-gradient(90deg,#60A5FA,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              fully briefed.
            </span>
          </h1>

          <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
            Aperion generates a complete donor intelligence package before every meeting — in seconds, not hours.
          </p>

          {/* Stats */}
          <div className="space-y-3 mb-8">
            {[
              { stat: "4 sec",  label: "to generate a full briefing" },
              { stat: "45 min", label: "saved per meeting" },
              { stat: "3×",     label: "more donor touchpoints" },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-4 py-2.5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <span className="font-black text-cyan-400 w-16 tabular-nums text-right shrink-0" style={{ fontSize: "18px" }}>{stat}</span>
                <span className="text-slate-400 text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Workflow label */}
          <p className="text-xs text-slate-600 uppercase tracking-widest">
            Tap any tab to explore the full briefing →
          </p>
        </div>

        {/* CTA */}
        <button
          className="mt-8 w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:opacity-90"
          style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
        >
          See Your Briefings <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── RIGHT: Live Preview ── */}
      <div className="flex-1 flex flex-col p-8 md:p-10 gap-5 overflow-hidden">

        {/* Preview header — donor context always visible */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{ background: "linear-gradient(135deg,#7C3AED,#2563EB)" }}>
              MC
            </div>
            <div>
              <div className="font-semibold text-white text-sm leading-tight">Margaret Chen</div>
              <div className="text-xs text-slate-500">Chen Family Foundation · Cultivation</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.18)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI Generated
          </div>
        </div>

        {/* Tabs — numbered steps */}
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
          {TABS.map(({ id, label, icon, step }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: active ? "rgba(255,255,255,0.10)" : "transparent",
                  color: active ? "#fff" : "#475569",
                  boxShadow: active ? "0 1px 4px rgba(0,0,0,0.3)" : "none",
                }}
              >
                <span className={`${active ? "text-cyan-400" : "text-slate-600"} transition-colors`}>{icon}</span>
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Panel content */}
        <div className="flex-1 rounded-2xl p-6 overflow-y-auto" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {PANELS[activeTab]}
        </div>

        <p className="text-[11px] text-slate-600 text-center">
          Simulated output. Actual briefings pull from your CRM, public records, and Aperion's 300+ data sources.
        </p>
      </div>
    </div>
  );
}

export default ConceptW;
