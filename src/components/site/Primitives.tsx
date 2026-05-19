export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className="eyebrow">— {eyebrow}</div>}
      <h2 className="mt-4 h-section font-display tracking-tight">{title}</h2>
      {intro && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative border-b border-border bg-surface-dark text-white overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
      <div className="relative container-wide pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
        </div>
        <h1 className="h-display font-display max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">{intro}</p>
      </div>
    </section>
  );
}

export function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
