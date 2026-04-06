import React, { useState } from "react";
import { ArrowRight, Zap, FileText, Calendar, Search, Mail, BarChart2 } from "lucide-react";

// Concept W — "Live Briefing Preview"
// Design hypothesis: Show don't tell. Hero IS the product demo.
// Instead of a calculator, show an actual AI-generated donor briefing mock.
// The interaction is tabbing between briefing sections, not inputting numbers.
// Framing: "This is what Aperion delivers before every meeting."

const donor = {
  name: "Margaret Chen",
  org: "Chen Family Foundation",
  capacity: "$250K–500K",
  stage: "Cultivation",
  lastContact: "14 days ago",
  interests: ["Oncology Research", "Medical Education", "Patient Experience"],
};

const sections = [
  {
    id: "profile",
    icon: <Search className="w-4 h-4" />,
    tab: "Profile",
    content: (
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-white font-bold text-xl">{donor.name}</div>
            <div className="text-slate-400 text-sm">{donor.org}</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{donor.stage}</div>
            <div className="text-slate-500 text-xs mt-0.5">Last contact: {donor.lastContact}</div>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Philanthropic Interests</div>
          <div className="flex flex-wrap gap-2">
            {donor.interests.map(i => (
              <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold text-violet-300" style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>{i}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1">Gift Capacity</div>
            <div className="font-bold text-white">{donor.capacity}</div>
          </div>
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1">Likelihood Score</div>
            <div className="font-bold text-emerald-400">87 / 100</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "briefing",
    icon: <FileText className="w-4 h-4" />,
    tab: "AI Briefing",
    content: (
      <div className="space-y-4">
        <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1 flex items-center gap-2">
          <Zap className="w-3 h-3" /> Generated for your 2pm meeting
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          Margaret recently served on the hospital's oncology wing naming committee and expressed strong interest in endowing a research fellowship. Her foundation made a $150K grant to City of Hope last cycle, suggesting capacity for a transformational ask.
        </p>
        <div className="rounded-lg p-4" style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.15)" }}>
          <div className="text-xs font-bold text-cyan-400 mb-2">Suggested Ask</div>
          <div className="text-white font-bold text-lg">$250,000 — Oncology Research Fellowship</div>
          <div className="text-slate-400 text-xs mt-1">Aligned with her stated interest and foundation giving history</div>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Conversation Starters</div>
          <ul className="space-y-1.5">
            {["Ask about her experience on the naming committee", "Reference the Hopkins fellowship model she mentioned", "Lead with the patient impact story from Dr. Ramirez"].map(s => (
              <li key={s} className="text-sm text-slate-400 flex items-start gap-2"><span className="text-cyan-500 mt-0.5">›</span>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "prep",
    icon: <Calendar className="w-4 h-4" />,
    tab: "Meeting Prep",
    content: (
      <div className="space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Pre-Meeting Checklist</div>
        {[
          { done: true, task: "Reviewed 3-year giving history" },
          { done: true, task: "Pulled news on Chen Family Foundation" },
          { done: true, task: "Identified overlap: oncology + patient experience" },
          { done: false, task: "Send pre-meeting note (draft ready)" },
          { done: false, task: "Confirm location: her office at 233 Market St" },
        ].map(({ done, task }) => (
          <div key={task} className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-emerald-500" : "border border-slate-600"}`}>
              {done && <span className="text-white text-[10px] font-bold">✓</span>}
            </div>
            <span className={`text-sm ${done ? "text-slate-400 line-through" : "text-slate-200"}`}>{task}</span>
          </div>
        ))}
        <div className="mt-4 rounded-lg p-3 text-sm" style={{ background: "rgba(124,58,237,0.10)", border: "1px solid rgba(124,58,237,0.20)" }}>
          <span className="text-violet-300 font-semibold">Time saved: </span>
          <span className="text-slate-300">Aperion prepared this briefing in 4 seconds. Manual prep: ~45 min.</span>
        </div>
      </div>
    ),
  },
  {
    id: "followup",
    icon: <Mail className="w-4 h-4" />,
    tab: "Follow-Up",
    content: (
      <div className="space-y-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">AI-Drafted Follow-Up Email</div>
        <div className="rounded-lg p-4 space-y-3 text-sm" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-slate-500 text-xs">To: margaret.chen@chenfoundation.org</div>
          <div className="text-slate-500 text-xs">Subject: Thank you — Oncology Fellowship Next Steps</div>
          <div className="border-t pt-3 text-slate-300 leading-relaxed" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            Dear Margaret, Thank you for the thoughtful conversation this afternoon. Your passion for advancing oncology research aligns perfectly with our fellowship endowment opportunity...
          </div>
          <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Edit & Send ›</button>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1">Next Touchpoint</div>
            <div className="font-bold text-white text-sm">7 days</div>
          </div>
          <div className="flex-1 rounded-lg p-3 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs text-slate-500 mb-1">Proposal Target</div>
            <div className="font-bold text-white text-sm">Q2 2025</div>
          </div>
        </div>
      </div>
    ),
  },
];

export function ConceptW() {
  const [activeTab, setActiveTab] = useState("briefing");
  const active = sections.find(s => s.id === activeTab) || sections[0];

  return (
    <div className="min-h-[100dvh] w-full font-sans flex flex-col lg:flex-row" style={{ background: "#03081A", color: "#E2E8F0" }}>

      {/* LEFT: Value prop */}
      <div className="lg:w-[38%] p-8 md:p-12 flex flex-col justify-between border-r" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#04091F" }}>
        <div>
          <div className="flex items-center gap-2 mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">Platform 02 — Aperion</span>
          </div>

          <h1 className="font-bold text-white leading-[1.08] mb-5" style={{ fontSize: "clamp(30px,3vw,44px)", letterSpacing: "-0.03em" }}>
            Every meeting,<br />
            <span style={{ background: "linear-gradient(90deg,#60A5FA,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              fully briefed.
            </span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Aperion generates complete donor intelligence packages before every meeting — profile, suggested ask, conversation starters, and a follow-up draft. In seconds, not hours.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { stat: "4 sec", label: "to generate a full briefing" },
              { stat: "45 min", label: "saved per meeting" },
              { stat: "3×", label: "more donor touchpoints" },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-3">
                <span className="font-bold text-cyan-400 w-16 tabular-nums text-right">{stat}</span>
                <span className="text-slate-400 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}>
          See Your Briefings <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* RIGHT: Live briefing */}
      <div className="flex-1 p-8 md:p-10 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <BarChart2 className="w-3.5 h-3.5" />
            Aperion Donor Briefing — Live Preview
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400" style={{ background: "rgba(16,185,129,0.10)", border: "1px solid rgba(16,185,129,0.20)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI Generated
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: activeTab === s.id ? "rgba(255,255,255,0.10)" : "transparent",
                color: activeTab === s.id ? "#fff" : "#64748B",
              }}
            >
              {s.icon} <span className="hidden sm:inline">{s.tab}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {active.content}
        </div>

        <p className="text-xs text-slate-600 text-center mt-4">
          Simulated output. Actual briefings pull from your CRM, public records, and Aperion's 300+ data sources.
        </p>
      </div>
    </div>
  );
}

export default ConceptW;
