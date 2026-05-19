import { ShieldCheck } from "lucide-react";

const certs = [
  { code: "ISO 9001", name: "Quality Management System", desc: "Certified manufacturing & QC processes." },
  { code: "REACH", name: "EU Chemical Registration", desc: "Compliant for export to European markets." },
  { code: "EAC", name: "Russia / CIS Conformity", desc: "TR CU declarations for full sieve portfolio." },
  { code: "COA", name: "Certificate of Analysis", desc: "Batch-specific quality verification, EN / RU / CN." },
];

const Certifications = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        <div className="lg:col-span-8">
          <div className="eyebrow mb-4">— Certifications & Compliance</div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            Documented, audited, internationally recognized.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {certs.map((c) => (
          <div key={c.code} className="bg-background p-7 hover-lift">
            <div className="flex items-start justify-between mb-8">
              <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Verified</span>
            </div>
            <div className="font-display text-2xl font-bold tracking-tight mb-2">{c.code}</div>
            <div className="text-sm font-medium text-foreground mb-2">{c.name}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
