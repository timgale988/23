export function ScreenshotPanel() {
  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif", background: "#0A0E1A", minHeight: "660px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px" }}>
      <div style={{ maxWidth: "960px", width: "100%" }}>
        <div style={{ marginBottom: "24px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", color: "#7C3AED", fontWeight: 800 }}>— Platform in Action</span>
          <h2 style={{ fontSize: "48px", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95, color: "white", marginTop: "8px" }}>
            PRYSM INSIDE<br />
            <span style={{ background: "linear-gradient(90deg,#7C3AED,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>YOUR WORKFLOW.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "12px", maxWidth: "420px", lineHeight: 1.6 }}>Built natively on Salesforce Health Cloud — no new software to learn, no parallel systems to maintain.</p>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "-1px", background: "linear-gradient(135deg,#7C3AED44,#2563EB44,#06B6D444)", borderRadius: "12px" }} />
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: "1px solid #1e2a45" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", background: "#111827", borderBottom: "1px solid #1e2a45" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444", opacity: 0.8 }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308", opacity: 0.8 }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e", opacity: 0.8 }} />
              <div style={{ marginLeft: "16px", fontSize: "11px", color: "#6b7280", background: "#0A0E1A", padding: "4px 16px", borderRadius: "4px" }}>prysm.salesforce.com / grateful-patients</div>
            </div>
            <img src="/__mockup/images/dashboard-home.jpeg" alt="Prysm dashboard" style={{ width: "100%", display: "block", maxHeight: "400px", objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div style={{ position: "absolute", bottom: "-16px", right: "-16px", width: "220px", border: "1px solid #2563EB55", background: "#111827", borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
            <img src="/__mockup/images/crm-patient-record.png" alt="Patient record" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
