const metrics = [
  { value: "26+", label: "Years of Adsorbent Manufacturing", sub: "Since 1998" },
  { value: "60+", label: "Countries & Regions Served", sub: "Global export network" },
  { value: "100+", label: "Industrial Partners Worldwide", sub: "Long-term supply" },
  { value: "24/7", label: "Technical Response & Lifecycle Support", sub: "Engineering team on call" },
];

const TrustStrip = () => (
  <section className="border-b border-border bg-surface">
    <div className="container-wide grid grid-cols-2 lg:grid-cols-4 grid-divider">
      {metrics.map((m) => (
        <div key={m.label} className="px-6 py-10 lg:py-12">
          <div className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            {m.value}
          </div>
          <div className="mt-3 text-[13px] font-medium text-foreground leading-snug">{m.label}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{m.sub}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
