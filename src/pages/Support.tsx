import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import lab from "@/assets/lab-qc.jpg";
import { FileText, Download, Wrench, FlaskConical, AlertTriangle, BookOpen, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TDS = [
  { code: "3A", name: "Molecular Sieve 3A — Beads & Pellets", size: "TDS · PDF · 420 KB" },
  { code: "4A", name: "Molecular Sieve 4A — Beads & Pellets", size: "TDS · PDF · 440 KB" },
  { code: "5A", name: "Molecular Sieve 5A — PSA Grade", size: "TDS · PDF · 460 KB" },
  { code: "13X", name: "Molecular Sieve 13X APG / LNG / HP", size: "TDS · PDF · 510 KB" },
  { code: "AL", name: "Activated Alumina — Drying / PSA / Defluor.", size: "TDS · PDF · 380 KB" },
  { code: "CAT", name: "Catalysts — Hydrogenation / Dehydration", size: "TDS · PDF · 360 KB" },
];

const FAQ = [
  { q: "How is the correct molecular sieve grade selected for my process?", a: "Selection depends on the molecule to be adsorbed (kinetic diameter), operating temperature and pressure, allowable pressure drop, cycle time, and regeneration method. Our engineering team uses your process datasheet to recommend grade, particle size, and bed configuration." },
  { q: "What is the typical lifetime of a molecular sieve bed?", a: "In well-engineered TSA and PSA service the typical lifetime is 3–5 years. Lifetime is reduced by liquid carryover, free chlorides, contamination by amines, or thermal shock during regeneration." },
  { q: "How do you regenerate molecular sieves?", a: "Two main routes: thermal swing (TSA) at 200–300 °C with a dry purge gas, and pressure swing (PSA) by depressurization. Hengye supplies recipes per grade in the Regeneration Guide, including temperature ramps and hold times." },
  { q: "Can you supply EAC / TR CU documentation for the Russian market?", a: "Yes. Our RU desk supplies EAC declarations, multilingual SDS and COA, and supports FCA / CIF / DAP shipments to all CIS destinations, including rail to Moscow, St. Petersburg and Novosibirsk." },
  { q: "What is the minimum order quantity?", a: "Standard grades ship from one drum (typically 25–150 kg). Custom particle sizes, catalyst formulations and dedicated lots from 500 kg." },
  { q: "Do you provide on-site engineering support?", a: "Yes — for qualified industrial customers we provide on-site loading supervision, commissioning, regeneration audit, and failure analysis." },
];

const TROUBLESHOOT = [
  { sym: "Premature breakthrough of H₂O", cause: "Liquid carryover, channelling or under-regeneration", fix: "Inspect inlet separator, verify regen temp & flow, perform mass-transfer-zone analysis" },
  { sym: "Increasing bed pressure drop", cause: "Attrition, dust migration, layered bed compaction", fix: "Sample bed, screen for fines, check support grid and replace top layer" },
  { sym: "Crushed beads at vessel bottom", cause: "Thermal shock, hammering during depressurization", fix: "Slow regeneration ramps, soften depressurization slope" },
  { sym: "Discoloration of beads / pellets", cause: "Hydrocarbon or amine contamination", fix: "Sample for analysis; install guard bed; review upstream chemistry" },
];

export default function Support() {
  return (
    <>
      <PageHero
        eyebrow="Technical Support"
        title="Industrial engineering support center"
        intro="Datasheets, certificates, selection logic, regeneration recipes and lab diagnostics — the documentation an engineering team actually needs."
        image={lab}
      />

      <section id="tds" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow flex items-center gap-2"><FileText className="size-3.5" /> — Documents</div>
            <h2 className="mt-3 h-section font-display">Technical Data Sheets</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Current revisions for every active grade. SDS and lot-specific COA available on request via
              your account engineer — EN · RU · CN.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-border">
              {TDS.map((d) => (
                <a key={d.code} href="#" className="grid grid-cols-12 items-center border-b border-border last:border-0 hover:bg-surface">
                  <div className="col-span-2 p-5 font-mono text-primary">{d.code}</div>
                  <div className="col-span-7 p-5 font-medium">{d.name}</div>
                  <div className="col-span-2 p-5 font-mono text-xs text-muted-foreground">{d.size}</div>
                  <div className="col-span-1 p-5 text-right"><Download className="ml-auto size-4" /></div>
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              Demo links — production deployment will serve signed PDFs.
            </p>
          </div>
        </div>
      </section>

      <section id="sds" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide grid gap-10 md:grid-cols-3">
          {[
            { i: FileText, t: "SDS / COA Downloads", d: "Material Safety Data Sheets and lot-specific Certificates of Analysis. EN · RU · CN." },
            { i: BookOpen, t: "Product Selection Guide", d: "Decision tree by feed composition, temperature and pressure window." },
            { i: Wrench, t: "Regeneration Guide", d: "Thermal & pressure-swing recipes per grade. Ramp rates and hold times." },
          ].map((c) => (
            <div key={c.t} className="bg-background border border-border p-8">
              <c.i className="size-6 text-primary" />
              <div className="mt-5 font-display text-xl font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              <button className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:underline">
                Open <Download className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="lab" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow flex items-center gap-2"><FlaskConical className="size-3.5" /> — Lab</div>
            <h2 className="mt-3 h-section font-display">Testing & Lab Support</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              The Hengye laboratory accepts customer returns of used adsorbent for root-cause analysis:
              BET, XRD, SEM, ICP and dynamic adsorption testing on a pilot loop replicating your cycle.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-8">
              {["BET surface area", "XRD crystallinity", "SEM / EDS", "ICP-OES metals", "Crush strength", "Attrition", "TGA water capacity", "PSA pilot loop"].map((x) => (
                <li key={x} className="border-b border-border py-2 font-mono text-sm">· {x}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <img src={lab} alt="Hengye QC laboratory" loading="lazy" className="w-full aspect-[16/10] object-cover" />
          </div>
        </div>
      </section>

      <section id="troubleshoot" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide">
          <div className="eyebrow flex items-center gap-2"><AlertTriangle className="size-3.5" /> — Troubleshooting</div>
          <h2 className="mt-3 h-section font-display">Field issue matrix</h2>
          <div className="mt-10 overflow-x-auto border border-border bg-background">
            <table className="w-full text-sm">
              <thead className="bg-surface-dark text-white font-mono text-[11px] uppercase tracking-[0.18em]">
                <tr>
                  <th className="text-left p-4 w-1/4">Symptom</th>
                  <th className="text-left p-4 w-2/5">Probable cause</th>
                  <th className="text-left p-4">Recommended action</th>
                </tr>
              </thead>
              <tbody>
                {TROUBLESHOOT.map((r) => (
                  <tr key={r.sym} className="border-t border-border align-top">
                    <td className="p-4 font-semibold">{r.sym}</td>
                    <td className="p-4 text-muted-foreground">{r.cause}</td>
                    <td className="p-4">{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow flex items-center gap-2"><HelpCircle className="size-3.5" /> — FAQ</div>
            <h2 className="mt-3 h-section font-display">Engineering FAQ</h2>
            <p className="mt-5 text-muted-foreground">
              If your question is not listed, write directly to{" "}
              <span className="font-mono text-foreground">tech@hengyemicron.com</span>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left py-5 hover:no-underline font-display text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <RFQBlock title="Need engineering support? Reach our technical desk." />
    </>
  );
}
