import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Block } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import asu from "@/assets/asu.jpg";
import lng from "@/assets/lng-terminal.jpg";
import refinery from "@/assets/refinery.jpg";
import dryer from "@/assets/dryer.jpg";
import factory from "@/assets/factory-floor.jpg";

type App = {
  id: string;
  num: string;
  title: string;
  image: string;
  problem: string;
  process: string[];
  products: { code: string; name: string; note: string; to: string }[];
  data: { k: string; v: string }[];
};

const APPS: App[] = [
  {
    id: "asu",
    num: "01",
    title: "Air Separation & Oxygen Generation",
    image: asu,
    problem:
      "Cryogenic ASUs and PSA/VPSA O₂ generators require feed air free from H₂O, CO₂ and hydrocarbons to prevent ice formation and protect downstream cold boxes and adsorbers.",
    process: [
      "Feed air compression (4–10 barg) and after-cooling",
      "Pre-purification on alumina / 13X layered bed (TSA)",
      "Cryogenic distillation or PSA / VPSA separation",
      "Periodic thermal regeneration with waste N₂ at 150–250 °C",
    ],
    products: [
      { code: "AL-DRY", name: "Activated Alumina (PSA Grade)", note: "Bulk H₂O removal layer", to: "/products#alumina" },
      { code: "13X-APG", name: "13X APG Molecular Sieve", note: "CO₂ + residual H₂O removal", to: "/products#13x" },
      { code: "5A-OXY", name: "5A Oxygen Grade", note: "N₂ adsorption for VPSA O₂ generation", to: "/products#5a" },
    ],
    data: [
      { k: "Dew point achieved", v: "≤ −70 °C" },
      { k: "CO₂ slip", v: "< 1 ppm" },
      { k: "Cycle time (TSA)", v: "4–8 h" },
      { k: "Lifetime", v: "3–5 years" },
    ],
  },
  {
    id: "lng",
    num: "02",
    title: "Natural Gas Treatment & LNG",
    image: lng,
    problem:
      "Pipeline and feed gas to LNG trains must be deeply dehydrated and desulfurized to avoid hydrate formation, ice plugging in cold sections, and corrosion of cryogenic exchangers.",
    process: [
      "Inlet separation and amine treatment (CO₂ / H₂S bulk)",
      "TSA dehydration on 4A / 13X to ≤ 0.1 ppmv H₂O",
      "Mercaptan and Hg guard beds",
      "Cryogenic liquefaction and storage",
    ],
    products: [
      { code: "4A-LNG", name: "4A LNG Grade", note: "Deep H₂O removal, long cycle life", to: "/products#4a" },
      { code: "13X-LNG", name: "13X LNG Grade", note: "H₂S + mercaptan + H₂O", to: "/products#13x" },
      { code: "AL-CL", name: "Cl / F-Resistant Alumina", note: "Promoted alumina guard layer", to: "/products#alumina" },
    ],
    data: [
      { k: "Outlet H₂O", v: "≤ 0.1 ppmv" },
      { k: "H₂S removal", v: "≤ 4 ppmv" },
      { k: "Regen temp", v: "260–290 °C" },
      { k: "Vessel range", v: "Ø 1.5–4.5 m" },
    ],
  },
  {
    id: "h2",
    num: "03",
    title: "Hydrogen, Syngas, Refining & Petrochemicals",
    image: refinery,
    problem:
      "H₂ PSA, naphtha reforming, isomerization, and olefin plants require selective adsorbents and catalysts that survive aggressive feeds, deliver high purity and resist crushing under cycling pressure swings.",
    process: [
      "Reformer / electrolyzer / SMR off-gas conditioning",
      "Multi-bed PSA on 5A + 13X + activated carbon",
      "Liquid hydrocarbon drying on 3A or 4A",
      "Hydrogenation / dehydration catalyst stages",
    ],
    products: [
      { code: "5A-PSA", name: "5A Hydrogen PSA Grade", note: "CO, CH₄, N₂ removal at high cycling", to: "/products#5a" },
      { code: "13X-HP", name: "13X High-Purity", note: "Trace CO₂ / H₂O polishing", to: "/products#13x" },
      { code: "CAT-HY", name: "Hydrogenation Catalyst", note: "Selective hydrogenation duty", to: "/products#catalysts" },
    ],
    data: [
      { k: "H₂ purity", v: "≥ 99.999 %" },
      { k: "Recovery", v: "85–90 %" },
      { k: "Cycle pressure", v: "20–40 barg" },
      { k: "Crush strength", v: "≥ 90 N" },
    ],
  },
  {
    id: "drying",
    num: "04",
    title: "Industrial Drying & Purification",
    image: dryer,
    problem:
      "Compressed air, refrigerants, insulating glass and solvent streams require reliable, low-pressure-drop adsorbents matched to thermal or pressure-swing regeneration.",
    process: [
      "Compressor / receiver",
      "Heatless or heated regenerative dryer (twin tower)",
      "Particulate and oil filtration",
      "Point-of-use sampling and dew-point monitoring",
    ],
    products: [
      { code: "AL-CA", name: "Activated Alumina CA-Grade", note: "Standard heatless dryer fill", to: "/products#alumina" },
      { code: "4A-IG", name: "4A Insulating Glass", note: "Spacer-bar fill for IGUs", to: "/products#4a" },
      { code: "13X-SD", name: "13X Solvent Drying", note: "Polar solvent dehydration", to: "/products#13x" },
    ],
    data: [
      { k: "Pressure dew point", v: "−40 to −70 °C" },
      { k: "Bed life", v: "3–5 years" },
      { k: "Bulk density", v: "0.70–0.78 g/ml" },
      { k: "Particle sizes", v: "1.6 / 3.2 / 4.0 mm" },
    ],
  },
  {
    id: "specialty",
    num: "05",
    title: "Specialty Industrial Uses",
    image: factory,
    problem:
      "Medical oxygen concentrators, ethanol dehydration, electronic gases, and custom catalyst supports demand high-purity, contaminant-free media with tightly controlled particle morphology.",
    process: [
      "Customer-specified packaging (drum / FIBC / vacuum)",
      "Sub-ppm contaminant profiling per lot",
      "Engineered catalyst support fabrication",
      "Dedicated QC and batch traceability",
    ],
    products: [
      { code: "5A-MED", name: "5A Medical Oxygen", note: "Concentrator grade", to: "/products#5a" },
      { code: "3A-ETH", name: "3A Ethanol Dehydration", note: "Fuel-grade ethanol PSA", to: "/products#3a" },
      { code: "CAT-S", name: "Catalyst Supports", note: "γ-Al₂O₃, custom shapes", to: "/products#catalysts" },
    ],
    data: [
      { k: "O₂ purity (PSA)", v: "≥ 93 %" },
      { k: "Ethanol outlet", v: "≥ 99.9 wt%" },
      { k: "Trace metals", v: "ppb-level" },
      { k: "MOQ", v: "From 25 kg" },
    ],
  },
];

export default function Applications() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Process-engineered adsorbent solutions"
        intro="Five core process domains. Every solution mapped from problem statement through process flow, recommended product family and verified technical data — ready for industrial procurement review."
        image={refinery}
      />

      <section className="border-b border-border bg-surface">
        <div className="container-wide py-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em]">
          {APPS.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="text-muted-foreground hover:text-primary">
              {a.num} · {a.title}
            </a>
          ))}
        </div>
      </section>

      {APPS.map((a, i) => (
        <section key={a.id} id={a.id} className={`section ${i % 2 ? "bg-surface border-y border-border" : ""}`}>
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                Application {a.num}
              </div>
              <h2 className="mt-3 h-section font-display">{a.title}</h2>
              <img src={a.image} alt={a.title} loading="lazy" className="mt-8 aspect-[4/3] w-full object-cover" />
            </div>

            <div className="lg:col-span-7 space-y-10">
              <Block label="Problem"><p className="text-muted-foreground leading-relaxed">{a.problem}</p></Block>

              <Block label="Process">
                <ol className="space-y-3">
                  {a.process.map((s, idx) => (
                    <li key={idx} className="flex gap-4 border-b border-border pb-3 last:border-0">
                      <span className="font-mono text-xs text-primary w-8 pt-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{s}</span>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block label="Recommended Products">
                <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
                  {a.products.map((p) => (
                    <Link to={p.to} key={p.code} className="bg-background p-5 hover:bg-surface">
                      <div className="font-mono text-xs text-primary">{p.code}</div>
                      <div className="mt-2 font-semibold">{p.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{p.note}</div>
                    </Link>
                  ))}
                </div>
              </Block>

              <Block label="Technical Data">
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {a.data.map((d) => (
                    <div key={d.k} className="data-row">
                      <span className="text-muted-foreground">{d.k}</span>
                      <span className="font-semibold text-foreground">{d.v}</span>
                    </div>
                  ))}
                </div>
              </Block>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary-deep"
                >
                  RFQ for this process <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:border-primary"
                >
                  Download TDS / SDS
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <RFQBlock title="Specify your process — receive engineered selection." />
    </>
  );
}
