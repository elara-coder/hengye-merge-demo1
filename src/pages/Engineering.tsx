import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import factory from "@/assets/factory-floor.jpg";
import lab from "@/assets/lab-qc.jpg";
import asu from "@/assets/asu.jpg";

const SECTIONS = [
  {
    id: "manufacturing", num: "01", t: "Manufacturing Facility",
    d: "30,000 m² Shanghai site with three independent production lines for bead forming, pellet extrusion and activation. Automated rotary forming guarantees particle uniformity within ±0.2 mm.",
    stats: [["Site area", "30,000 m²"], ["Annual capacity", "30,000 t"], ["Production lines", "3"], ["Calcination kilns", "6"]],
    img: factory,
  },
  {
    id: "qc", num: "02", t: "Quality Control",
    d: "Every lot is profiled in-house: BET surface area, XRD crystallinity, particle size distribution, attrition loss, crush strength and dynamic H₂O / CO₂ adsorption. Each shipment ships with a batch-traceable COA.",
    stats: [["BET surface", "≥ 320 m²/g"], ["Crush strength", "≥ 90 N"], ["Attrition", "≤ 0.2 wt%"], ["Batch traceability", "100%"]],
    img: lab,
  },
  {
    id: "capacity", num: "03", t: "Production Capacity",
    d: "Three-shift operation, dedicated grades per line, FIFO raw-material handling, and >85 % OEE. Standard lead time 15 working days; expedited 7 days for stocked grades.",
    stats: [["OEE", "≥ 85%"], ["Lead time", "15 days"], ["Stock SKUs", "60+"], ["Container loadings/wk", "30"]],
    img: factory,
  },
  {
    id: "export", num: "04", t: "Export Experience",
    d: "60+ countries served. Dedicated logistics desk for Russia / CIS with EAC documentation, multilingual COA / SDS, FCA / CIF / DAP Incoterms, and EXW Shanghai pickup.",
    stats: [["Countries", "60+"], ["Active partners", "100+"], ["RU desk", "Yes"], ["Documentation", "EAC · REACH"]],
    img: asu,
  },
  {
    id: "rd", num: "05", t: "R&D & Innovation",
    d: "12 engineers across synthesis, characterization and process modelling. Pilot-scale loop replicates customer PSA / TSA cycles for media qualification before commercial supply. Dedicated catalyst pilot line operational since 2024.",
    stats: [["R&D engineers", "12"], ["Pilot loops", "2"], ["Patents", "16"], ["Joint programs", "8"]],
    img: lab,
  },
];

export default function Engineering() {
  return (
    <>
      <PageHero
        eyebrow="Engineering Capability"
        title="Manufacturing, characterization and process know-how — in one site."
        intro="Hengye is engineered for industrial supply: integrated upstream raw-material handling, automated forming, calcination, and a metrology-grade QC lab."
        image={factory}
      />

      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section scroll-mt-24 ${i % 2 ? "bg-surface border-y border-border" : ""}`}
        >
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={s.img} alt={s.t} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="lg:col-span-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                Capability {s.num}
              </div>
              <h2 className="mt-3 h-section font-display">{s.t}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">{s.d}</p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-border border border-border max-w-xl">
                {s.stats.map(([k, v]) => (
                  <div key={k} className="bg-background p-5">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </div>
                    <div className="mt-1 font-display text-2xl font-bold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <RFQBlock title="Audit-ready supplier. Specify, qualify, scale." />
    </>
  );
}
