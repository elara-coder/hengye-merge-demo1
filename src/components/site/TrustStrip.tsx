const metrics = [
  { value: "26+", label: "吸附剂制造经验", sub: "始于 1998 年" },
  { value: "60+", label: "服务国家与地区", sub: "全球出口网络" },
  { value: "100+", label: "工业合作伙伴", sub: "长期稳定供应" },
  { value: "24/7", label: "技术响应与全生命周期支持", sub: "专家工程团队" },
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
          <div className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{m.sub}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
