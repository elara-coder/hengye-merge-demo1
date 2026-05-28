import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Download, FileText } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import { CASES, getCase } from "@/data/cases";

function Block({ num, label, children }: { num: string; label: string; children: React.ReactNode }) {
  return (
    <section className="section border-b border-border last:border-b-0">
      <div className="container-wide grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">— {num}</div>
          <h2 className="mt-3 font-display text-2xl lg:text-3xl font-semibold leading-tight">{label}</h2>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export default function CaseDetail() {
  const { slug = "" } = useParams();
  const c = getCase(slug);

  if (!c) {
    return (
      <div className="container-wide py-32 text-center">
        <h1 className="font-display text-3xl font-semibold">Case not found</h1>
        <Link to="/engineering" className="mt-6 inline-flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-[0.15em]">
          <ArrowLeft className="h-4 w-4" /> Back to Engineering
        </Link>
      </div>
    );
  }

  const others = CASES.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Case ${c.num} · ${c.industry}`}
        title={c.name}
        intro={c.challenge}
        image={c.image}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="container-wide py-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          <Link to="/engineering" className="hover:text-primary">Engineering Capability</Link>
          <span>/</span>
          <Link to="/engineering#cases" className="hover:text-primary">Case Matrix</Link>
          <span>/</span>
          <span className="text-foreground">{c.industry}</span>
        </div>
      </div>

      {/* 1 — Project Overview */}
      <Block num="01" label="Project Overview">
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-3xl">{c.overview}</p>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            ["Industry", c.industry],
            ["Product Family", c.family],
            ["Configuration", "TSA / PSA · Multi-bed"],
            ["Reference Type", "Benchmark Project"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
              <div className="mt-2 font-display text-[15px] font-semibold leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </Block>

      {/* 2 — Industrial Challenge */}
      <Block num="02" label="Industrial Challenge">
        <ul className="divide-y divide-border border-y border-border">
          {c.industrialChallenge.map((line, i) => (
            <li key={i} className="py-4 flex gap-5">
              <span className="font-mono text-[11px] text-primary pt-1 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </Block>

      {/* 3 — Process Flow */}
      <Block num="03" label="Process Flow / System Diagram">
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-px bg-border border border-border">
            {c.processFlow.map((s) => (
              <div key={s.step} className="bg-background p-5 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{s.step}</div>
                <div className="mt-3 font-display text-[14px] font-semibold leading-snug">{s.label}</div>
                <p className="mt-2 text-[12px] text-muted-foreground leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Schematic representation · simplified for reference use
          </p>
        </div>
      </Block>

      {/* 4 — Adsorbent Solution */}
      <Block num="04" label="Adsorbent Solution">
        <div className="border border-border">
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-surface font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border">
            <div className="col-span-4">Product</div>
            <div className="col-span-4">Role in Process</div>
            <div className="col-span-4">Technical Specification</div>
          </div>
          {c.adsorbentSolution.map((a) => (
            <div key={a.product} className="grid md:grid-cols-12 gap-4 px-5 py-5 border-b border-border last:border-b-0">
              <div className="md:col-span-4 font-display text-[15px] font-semibold">{a.product}</div>
              <div className="md:col-span-4 text-[13px] text-muted-foreground leading-relaxed">{a.role}</div>
              <div className="md:col-span-4 font-mono text-[12px] leading-relaxed">{a.spec}</div>
            </div>
          ))}
        </div>
      </Block>

      {/* 5 — Technical Benefits */}
      <Block num="05" label="Technical Benefits">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {c.technicalBenefits.map((b) => (
            <div key={b.metric} className="bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{b.metric}</div>
              <div className="mt-3 font-display text-2xl lg:text-3xl font-bold">{b.value}</div>
              <p className="mt-3 text-[12px] text-muted-foreground leading-relaxed">{b.note}</p>
            </div>
          ))}
        </div>
      </Block>

      {/* 6 — Downloads / Inquiry */}
      <Block num="06" label="Downloads & Inquiry">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="border border-border">
            <div className="px-5 py-3 bg-surface font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border">
              Technical Documents
            </div>
            <ul>
              {c.downloads.map((d) => (
                <li key={d} className="flex items-center justify-between gap-4 px-5 py-4 border-b border-border last:border-b-0 group">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-[14px]">{d}</span>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </li>
              ))}
            </ul>
            <p className="px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground border-t border-border">
              Documents released against signed NDA where applicable.
            </p>
          </div>

          <div className="bg-surface-dark text-white p-8 flex flex-col">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">— Project Inquiry</div>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
              Discuss this configuration with our process team.
            </h3>
            <p className="mt-4 text-white/70 text-[14px] leading-relaxed">
              Share your feed composition, cycle time and capacity target. We respond within one business day with
              a layered loading proposal and indicative delivery schedule.
            </p>
            <div className="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between h-12 px-5 bg-primary text-primary-foreground hover:bg-primary-deep transition-colors flex-1"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.15em]">Submit Project RFQ</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/products"
                className="group inline-flex items-center justify-between h-12 px-5 border border-white/30 text-white hover:bg-white hover:text-foreground transition-colors flex-1"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.15em]">View Product Family</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Block>

      {/* Other cases */}
      <section className="section bg-surface border-t border-border">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="eyebrow">— Other Reference Projects</div>
              <h2 className="mt-3 font-display text-2xl lg:text-3xl font-semibold">Continue exploring the case matrix</h2>
            </div>
            <Link to="/engineering#cases" className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
              All cases <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {others.map((o) => (
              <Link key={o.slug} to={`/engineering/cases/${o.slug}`} className="bg-background p-6 group hover-lift">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Case {o.num} · {o.industry}</div>
                <div className="mt-3 font-display text-lg font-semibold leading-snug">{o.name}</div>
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed line-clamp-3">{o.challenge}</p>
                <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RFQBlock />
    </>
  );
}
