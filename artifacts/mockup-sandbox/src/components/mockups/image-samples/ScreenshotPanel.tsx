export function ScreenshotPanel() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-10"
      style={{ background: "#0A0E1A", fontFamily: "'Urbanist', sans-serif" }}
    >
      <div className="max-w-5xl w-full">
        <div className="mb-6">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "#7C3AED" }}
          >
            — Platform in Action
          </span>
          <h2
            className="text-5xl font-black uppercase mt-2 leading-none text-white"
          >
            PRYSM INSIDE<br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              YOUR WORKFLOW.
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-md">
            Built natively on Salesforce Health Cloud — no new software to learn,
            no parallel systems to maintain.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-px rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #7C3AED44, #2563EB44, #06B6D444)",
            }}
          />
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ border: "1px solid #1e2a45" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: "#111827", borderBottom: "1px solid #1e2a45" }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
              <div
                className="ml-4 text-xs text-slate-500 rounded px-3 py-1 flex-1 max-w-xs"
                style={{ background: "#0A0E1A" }}
              >
                prysm.salesforce.com / grateful-patients
              </div>
            </div>
            <img
              src="/__mockup/images/dashboard-home.jpeg"
              alt="Prysm dashboard inside Salesforce"
              className="w-full block"
              style={{ maxHeight: 420, objectFit: "cover", objectPosition: "top" }}
            />
          </div>

          <div
            className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: 220,
              border: "1px solid #2563EB55",
              background: "#111827",
            }}
          >
            <img
              src="/__mockup/images/crm-patient-record.png"
              alt="Individual patient record"
              className="w-full block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
