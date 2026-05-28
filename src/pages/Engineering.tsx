import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Boxes, Microscope, Ruler, FileText, Globe2, Package, Languages, Truck, Repeat } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import { CASES } from "@/data/cases";
import factory from "@/assets/factory-floor.jpg";

const QC_ITEMS = [
  { icon: Repeat, label: "Batch Traceability", detail: "Lot-level genealogy from raw material to packed drum, retained for 10 years." },
  { icon: Boxes, label: "Raw Material Control", detail: "Single qualified source per active component; incoming QC on every batch." },
  { icon: Ruler, label: "Particle Size Consistency", detail: "Automated screening — ±0.2 mm tolerance on bead diameter, < 1 % off-spec." },
  { icon: ShieldCheck, label: "Crush Strength Control", detail: "100 % statistical sampling per shift; minimum 90 N on 3–5 mm bead grades." },
  { icon: Microscope, label: "Adsorption Performance", detail: "Dynamic H₂O / CO₂ / N₂ capacity verified on every production lot." },
  { icon: FileText, label: "TDS / COA / Test Records", detail: "Multilingual TDS, batch-traceable COA, and archived raw test data per shipment." },
];

const SUPPLY_ITEMS = [
  { icon: Package, label: "Export Packaging", detail: "Sealed steel drums, jumbo bags or vacuum-sealed liners — sized for 20' / 40' container optimization." },
  { icon: Languages, label: "Multilingual Documentation", detail: "EN · RU · CN technical and commercial documents; EAC, REACH and customs sets prepared per destination." },
  { icon: Repeat, label: "Stable Batch Supply", detail: "Grade-locked production schedules with reserved capacity for repeat industrial buyers." },
  { icon: Truck, label: "Logistics Coordination", detail: "FCA / CIF / DAP / DDP support; consolidated shipments and dedicated RU / CIS desk." },
  { icon: Globe2, label: "Long-Cycle Supply Capability", detail: "Multi-year frame agreements with quarterly call-offs; safety stock policy per key account." },
];

export default function Engineering() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Capability"
        title="Large-Scale Industrial Project Experience"
        intro="Application-driven adsorbent solutions supported by manufacturing integration, process understanding, and industrial project execution."
        image={factory}
      />

      {/* Supporting strap line */}
      <section className="border-b border-border bg-surface">
        <div className="container-wide py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">— Reference Scope</div>
          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
            Benchmark project experience across air separation, natural gas treatment, hydrogen purification,
            petrochemical systems, and industrial drying applications.
          </p>
        </div>
      </section>

      {/* CASE MATRIX */}
      <section id="cases" className="section">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow">— Project Case Matrix</div>
              <h2 className="mt-4 h-section font-display">Reference projects across five core industrial domains.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Placeholder figures are benchmarked against comparable industrial reference plants and adjusted to Hengye standard product grades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {CASES.map((c) => (
              <Link
                key={c.slug}
                to={`/engineering/cases/${c.slug}`}
                className="group bg-background flex flex-col hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute top-3 left-3 bg-background/95 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Case {c.num}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{c.industry}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{c.name}</h3>

                  <dl className="mt-5 space-y-3 text-[13px] flex-1">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Challenge</dt>
                      <dd className="mt-1 leading-relaxed">{c.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Solution</dt>
                      <dd className="mt-1 leading-relaxed text-muted-foreground">{c.solution}</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Family</dt>
                        <dd className="mt-1 text-[12px] leading-snug">{c.family}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Benefit</dt>
                        <dd className="mt-1 text-[12px] leading-snug">{c.benefit}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Explore Case</span>
                    <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY VERIFICATION */}
      <section id="quality" className="section bg-surface border-y border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">— Quality Verification & Traceability</div>
            <h2 className="mt-4 h-section font-display">Verified at every step — from raw material to shipped drum.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Each production lot passes a fixed sequence of mechanical, structural, and adsorption tests. Records
              are archived for ten years and made available on request for plant audits and supplier qualification.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-border border border-border">
              {[["ISO 9001", "QMS"], ["10 yr", "Records"], ["100 %", "Lot QC"]].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <div className="font-display text-lg font-bold">{k}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {QC_ITEMS.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="bg-background p-6 flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-semibold">{label}</div>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SUPPLY SUPPORT */}
      <section id="supply" className="section">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">— Global Supply Support</div>
            <h2 className="mt-4 h-section font-display">Built for long-cycle international industrial supply.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Hengye operates as a dedicated industrial supplier — packaging, documentation, logistics and stocking
              policy are aligned to the requirements of international procurement and engineering teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {SUPPLY_ITEMS.map(({ icon: Icon, label, detail }, i) => (
              <div key={label} className="bg-background p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="mt-5 font-display text-[15px] font-semibold leading-snug">{label}</div>
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQBlock title="Specify a project. Qualify a supplier. Scale with confidence." />
    </>
  );
}
