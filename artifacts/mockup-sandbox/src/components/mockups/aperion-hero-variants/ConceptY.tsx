import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// Concept Y — "Live Witness"
// Proof axis: demonstration over assertion.
// The conventional choice was static stats. This replaces them with a live AI briefing
// simulation — a typewriter-driven donor card that plays out in real time.
// You don't read "4 seconds." You watch it happen.

const BRIEFING_LINES = [
  { label: "Donor", value: "Margaret Chen · Chen Family Foundation" },
  { label: "Capacity", value: "$2.4M estimated lifetime value" },
  { label: "Affinity", value: "Cardiology · Patient care excellence" },
  { label: "Last Contact", value: "214 days ago — follow-up overdue" },
  { label: "AI Insight", value: "Sister's bypass surgery, 2019. Personal giving driver." },
  { label: "Ask Range", value: "$180K–$240K · Capital campaign aligned" },
  { label: "Open With", value: '"The cardiology wing naming is still available…"' },
];

function TypedLine({ text, delay, onDone }: { text: string; delay: number; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(iv);
        onDone?.();
      }
    }, 18);
    return () => clearInterval(iv);
  }, [started, text]);

  return <span>{displayed}{started && displayed.length < text.length ? <span className="animate-pulse">|</span> : null}</span>;
}

export function ConceptY() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const [restarting, setRestarting] = useState(false);

  useEffect(() => {
    if (visibleLines === 0) return;
    const t = setInterval(() => setElapsed(e => e + 100), 100);
    return () => clearInterval(t);
  }, [visibleLines > 0]);

  useEffect(() => {
    const t = setTimeout(() => setVisibleLines(1), 400);
    return () => clearTimeout(t);
  }, [restarting]);

  function restart() {
    setVisibleLines(0);
    setElapsed(0);
    setDone(false);
    setRestarting(r => !r);
  }

  const cumDelays = BRIEFING_LINES.reduce<number[]>((acc, line) => {
    const prev = acc.length ? acc[acc.length - 1] : 0;
    return [...acc, prev + line.value.length * 18 + 120];
  }, []);

  return (
    <div
      className="min-h-[100dvh] w-full font-sans flex flex-col"
      style={{ background: "#03081A", color: "#E2E8F0" }}
    >
      {/* Top bar */}
      <div
        className="w-full px-10 py-5 flex items-center justify-between border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
            Platform 02 — Aperion
          </span>
        </div>
        <span className="text-xs text-slate-500 uppercase tracking-widest">Live Briefing Demo</span>
      </div>

      {/* Body */}
      <div className="flex-1 grid lg:grid-cols-12 gap-0 divide-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>

        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col justify-center px-10 py-14 border-r" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <h1
            className="font-light text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(34px,3.8vw,52px)", letterSpacing: "-0.03em" }}
          >
            What used to take<br />
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg,#60A5FA,#22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              3 hours.
            </span>
            <br />
            Now takes 4 seconds.
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
            Watch Aperion generate a complete donor intelligence briefing in real time — including
            capacity estimate, giving history, affinity signals, and a suggested opening.
          </p>

          <div className="flex flex-col gap-3 max-w-xs">
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between transition-all"
              style={{ background: "linear-gradient(90deg,#2563EB,#06B6D4)" }}
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="py-4 px-7 font-medium text-white flex items-center justify-between border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* RIGHT: Live briefing simulation */}
        <div className="lg:col-span-7 flex flex-col justify-center px-10 py-14">
          {/* Terminal-style header */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(96,165,250,0.18)", background: "rgba(15,23,42,0.6)" }}
          >
            {/* Window chrome */}
            <div
              className="px-5 py-3 flex items-center justify-between border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-slate-500 font-mono">aperion — donor briefing</span>
              <div className="flex items-center gap-2">
                {!done && visibleLines > 0 && (
                  <span className="text-xs text-cyan-400 font-mono animate-pulse">● generating…</span>
                )}
                {done && (
                  <span className="text-xs text-emerald-400 font-mono">
                    ✓ generated in {(elapsed / 1000).toFixed(1)}s
                  </span>
                )}
              </div>
            </div>

            {/* Briefing lines */}
            <div className="px-6 py-6 space-y-3 min-h-[340px]">
              {visibleLines === 0 && (
                <div className="text-slate-600 text-sm font-mono italic">
                  Briefing will generate automatically…
                </div>
              )}
              {BRIEFING_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="flex gap-3 font-mono text-sm">
                  <span className="text-blue-400 shrink-0 w-28 text-right">{line.label}</span>
                  <span className="text-slate-300">
                    {i < visibleLines - 1 ? (
                      line.value
                    ) : (
                      <TypedLine
                        text={line.value}
                        delay={0}
                        onDone={() => {
                          if (i < BRIEFING_LINES.length - 1) {
                            setTimeout(() => setVisibleLines(v => v + 1), 100);
                          } else {
                            setDone(true);
                          }
                        }}
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="px-6 py-4 flex items-center justify-between border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <span className="text-xs text-slate-600 uppercase tracking-widest">
                Powered by Blackbaud CRM · Salesforce NPSP
              </span>
              {done && (
                <button
                  onClick={restart}
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                >
                  Replay ↺
                </button>
              )}
            </div>
          </div>

          {/* Proof strip */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { n: "4s", label: "Avg briefing time" },
              { n: "75%", label: "Admin time reclaimed" },
              { n: "20:1", label: "ROI year one" },
            ].map(({ n, label }) => (
              <div
                key={n}
                className="rounded-lg px-4 py-3 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="text-2xl font-light"
                  style={{ background: "linear-gradient(90deg,#60A5FA,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                  {n}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConceptY;
