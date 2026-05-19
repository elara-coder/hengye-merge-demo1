import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import sieveMacro from "@/assets/sieve-macro.jpg";
import aluminaMacro from "@/assets/alumina-macro.jpg";
import catalystImg from "@/assets/product-catalyst.jpg";

type Product = {
  id: string;
  code: string;
  name: string;
  family: "sieve" | "alumina" | "catalyst";
  formula: string;
  intro: string;
  uses: string[];
  specs: { k: string; v: string }[];
  forms: string[];
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: "3a", code: "3A", name: "Zeolite Molecular Sieve 3A", family: "sieve",
    formula: "0.4 K₂O · 0.6 Na₂O · Al₂O₃ · 2.0 SiO₂ · n H₂O",
    intro: "Potassium form of Type A. Effective pore diameter 3 Å. Selective for water in the presence of polymerizable species — the standard for cracked gas, ethylene, propylene and ethanol drying.",
    uses: ["Cracked gas dehydration", "Olefin (ethylene / propylene) drying", "Ethanol & alcohol drying", "Insulating glass spacer bars", "Refrigerant drying"],
    specs: [
      { k: "Pore diameter", v: "3 Å" },
      { k: "H₂O adsorption", v: "≥ 21 wt%" },
      { k: "Bulk density", v: "0.70 g/ml" },
      { k: "Crush strength", v: "≥ 30 N (1.6 mm)" },
      { k: "Attrition loss", v: "≤ 0.2 wt%" },
      { k: "Particle size", v: "1.6–2.5 / 3.0–5.0 mm" },
    ],
    forms: ["Bead", "Pellet 1/16″", "Pellet 1/8″"],
    image: sieveMacro,
  },
  {
    id: "4a", code: "4A", name: "Zeolite Molecular Sieve 4A", family: "sieve",
    formula: "Na₂O · Al₂O₃ · 2.0 SiO₂ · 4.5 H₂O",
    intro: "Sodium form Type A — pore diameter 4 Å. The most widely deployed industrial desiccant for static and dynamic drying of gases, liquids and refrigerants.",
    uses: ["Natural gas dehydration", "Compressed air & instrument air", "Solvent dehydration", "LPG / LNG drying", "Drug & food packaging"],
    specs: [
      { k: "Pore diameter", v: "4 Å" },
      { k: "H₂O adsorption", v: "≥ 21.5 wt%" },
      { k: "Bulk density", v: "0.70 g/ml" },
      { k: "Crush strength", v: "≥ 90 N (3.0 mm)" },
      { k: "Particle size", v: "1.6 / 3.2 / 4.0 mm" },
      { k: "Loss on ignition", v: "≤ 1.5 wt%" },
    ],
    forms: ["Bead", "Pellet", "Powder"],
    image: sieveMacro,
  },
  {
    id: "5a", code: "5A", name: "Zeolite Molecular Sieve 5A", family: "sieve",
    formula: "0.7 CaO · 0.3 Na₂O · Al₂O₃ · 2.0 SiO₂ · n H₂O",
    intro: "Calcium-exchanged Type A — pore 5 Å. Adsorbs n-paraffins (C₄–C₂₂) while excluding iso/cyclic structures. Workhorse of H₂ PSA, oxygen VPSA and natural gas dehydration.",
    uses: ["H₂ PSA purification", "Oxygen & nitrogen PSA / VPSA", "n-Paraffin separation", "Natural gas dual H₂O + H₂S removal", "Medical oxygen concentrators"],
    specs: [
      { k: "Pore diameter", v: "5 Å" },
      { k: "H₂O adsorption", v: "≥ 21.5 wt%" },
      { k: "N₂ adsorption", v: "≥ 8.5 ml/g" },
      { k: "Bulk density", v: "0.72 g/ml" },
      { k: "Crush strength", v: "≥ 90 N" },
      { k: "Cycle resistance", v: "Validated >1M cycles" },
    ],
    forms: ["Bead", "Pellet"],
    image: sieveMacro,
  },
  {
    id: "13x", code: "13X", name: "Zeolite Molecular Sieve 13X", family: "sieve",
    formula: "Na₂O · Al₂O₃ · 2.8 SiO₂ · 6.0 H₂O",
    intro: "Sodium form of Type X — pore 10 Å. Higher pore volume than Type A. The standard for ASU pre-purification (CO₂ + H₂O) and gas sweetening.",
    uses: ["Air pre-purification (ASU)", "CO₂ + H₂O co-removal", "Mercaptan removal from NG / LPG", "H₂S removal", "Aromatics separation"],
    specs: [
      { k: "Pore diameter", v: "10 Å" },
      { k: "H₂O adsorption", v: "≥ 25 wt%" },
      { k: "CO₂ adsorption", v: "≥ 18 wt%" },
      { k: "Bulk density", v: "0.65 g/ml" },
      { k: "Crush strength", v: "≥ 90 N (3.2 mm)" },
      { k: "Grades", v: "APG · LNG · HP" },
    ],
    forms: ["Bead", "Pellet"],
    image: sieveMacro,
  },
  {
    id: "alumina", code: "AL", name: "Activated Alumina", family: "alumina",
    formula: "γ-Al₂O₃",
    intro: "High-purity smooth spherical γ-Al₂O₃ with controlled pore structure. Engineered for compressed-air dryers, PSA pre-treatment, defluorination of water, and as a catalyst support.",
    uses: ["Compressed air drying", "PSA pre-treatment layer", "Defluorination of drinking water", "H₂O₂ stabilization", "Catalyst support"],
    specs: [
      { k: "Surface area (BET)", v: "≥ 320 m²/g" },
      { k: "Pore volume", v: "≥ 0.40 ml/g" },
      { k: "Bulk density", v: "0.72 g/ml" },
      { k: "Crush strength", v: "≥ 130 N" },
      { k: "Particle size", v: "3–5 / 5–7 mm" },
      { k: "Loss on attrition", v: "≤ 0.3 wt%" },
    ],
    forms: ["Sphere 3–5 mm", "Sphere 5–7 mm", "Custom"],
    image: aluminaMacro,
  },
  {
    id: "catalysts", code: "CAT", name: "Engineered Catalysts", family: "catalyst",
    formula: "γ-Al₂O₃ supported · Ni / Pd / Cu / Zn formulations",
    intro: "Engineered catalysts on high-purity γ-Al₂O₃ supports for selective hydrogenation, dehydration and methanol-to-olefin duty. Custom shapes, loadings and surface chemistry per process specification.",
    uses: [
      "Selective hydrogenation (C₂–C₄ streams)",
      "Methanol / ethanol dehydration",
      "Hydrocarbon isomerization supports",
      "Sulphur guard beds",
      "Custom catalyst carrier fabrication",
    ],
    specs: [
      { k: "Surface area (BET)", v: "180–280 m²/g" },
      { k: "Active metal loading", v: "0.3 – 18 wt%" },
      { k: "Crush strength", v: "≥ 110 N" },
      { k: "Bulk density", v: "0.65 – 0.85 g/ml" },
      { k: "Shapes", v: "Sphere · Tri-lobe · Ring" },
      { k: "MOQ (custom)", v: "From 500 kg" },
    ],
    forms: ["Sphere", "Tri-lobe extrudate", "Ring", "Custom"],
    image: catalystImg,
  },
];

const NAV: { label: string; items: { id: string; code: string; name: string }[] }[] = [
  {
    label: "Zeolite Molecular Sieves",
    items: [
      { id: "3a", code: "3A", name: "Type A — Ethanol & olefin drying" },
      { id: "4a", code: "4A", name: "Type A — General drying" },
      { id: "5a", code: "5A", name: "Type A — PSA H₂ / O₂ / N₂" },
      { id: "13x", code: "13X", name: "Type X — ASU pre-purification" },
    ],
  },
  {
    label: "Activated Alumina",
    items: [
      { id: "alumina", code: "AL-DRY", name: "Drying Grade" },
      { id: "alumina", code: "AL-PSA", name: "PSA Grade" },
      { id: "alumina", code: "AL-DEF", name: "Defluorination Grade" },
    ],
  },
  {
    label: "Catalysts",
    items: [
      { id: "catalysts", code: "CAT-HY", name: "Hydrogenation" },
      { id: "catalysts", code: "CAT-DE", name: "Dehydration" },
      { id: "catalysts", code: "CAT-CS", name: "Custom Carriers" },
    ],
  },
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Engineered zeolites, activated alumina & catalysts"
        intro="Beads, pellets, spheres and powders manufactured to industrial specification — full traceability from raw kaolin and alumina to finished lot, with EN · RU · CN documentation."
        image={sieveMacro}
      />

      {/* Nested category navigation */}
      <section className="border-b border-border bg-surface">
        <div className="container-wide py-10 grid gap-10 md:grid-cols-3">
          {NAV.map((g) => (
            <div key={g.label}>
              <div className="eyebrow">— {g.label}</div>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it.code + it.name}>
                    <a
                      href={`#${it.id}`}
                      className="group flex items-baseline justify-between border-b border-border py-2 hover:border-primary"
                    >
                      <span className="font-mono text-sm text-primary">{it.code}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground text-right">
                        {it.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {PRODUCTS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`section scroll-mt-24 ${i % 2 ? "bg-surface border-y border-border" : ""}`}
        >
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {p.family === "sieve"
                  ? "Zeolite Molecular Sieve"
                  : p.family === "alumina"
                  ? "Activated Alumina"
                  : "Catalyst"}
              </div>
              <h2 className="mt-3 h-section font-display">{p.name}</h2>
              <p className="mt-3 font-mono text-sm text-muted-foreground">{p.formula}</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.intro}</p>
              <img src={p.image} alt={p.name} loading="lazy" className="mt-8 aspect-[4/3] w-full object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div>
                <div className="eyebrow">— Typical Applications</div>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8">
                  {p.uses.map((u) => (
                    <li key={u} className="flex items-baseline gap-3 border-b border-border py-2.5 text-sm">
                      <span className="size-1.5 bg-primary translate-y-[-2px]" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">— Specification</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-x-10">
                  {p.specs.map((s) => (
                    <div key={s.k} className="data-row">
                      <span className="text-muted-foreground">{s.k}</span>
                      <span className="font-semibold">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="eyebrow">— Available Forms</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.forms.map((f) => (
                    <span
                      key={f}
                      className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary-deep inline-flex items-center gap-2"
                >
                  Request quotation <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  to="/support"
                  className="border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:border-primary"
                >
                  Download TDS / SDS
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <RFQBlock />
    </>
  );
}
