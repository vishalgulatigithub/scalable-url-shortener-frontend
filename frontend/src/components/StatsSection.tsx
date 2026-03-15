import "../styles/statsSection.css";

export default function StatsSection() {
  return (
    <section className="stats-section">

      <h2 className="stats-title">
        Adopted and loved by millions of users for over a decade
      </h2>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>600K+</h3>
          <p>Global paying customers</p>
        </div>

        <div className="stat-card">
          <h3>256M</h3>
          <p>Links & QR Codes created monthly</p>
        </div>

        <div className="stat-card">
          <h3>800+</h3>
          <p>App integrations</p>
        </div>

        <div className="stat-card">
          <h3>10B</h3>
          <p>Connections (clicks & scans monthly)</p>
        </div>

      </div>

    </section>
  );
}