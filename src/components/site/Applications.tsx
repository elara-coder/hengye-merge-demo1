import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import air from "@/assets/app-air-separation.jpg";
import gas from "@/assets/app-natural-gas.jpg";
import h2 from "@/assets/app-hydrogen.jpg";
import dry from "@/assets/app-drying.jpg";
import spec from "@/assets/app-specialty.jpg";

const apps = [
  { id: "asu", n: "01", title: "Air Separation & Oxygen Generation", img: air, products: ["13X-APG", "5A PSA", "Alumina"], desc: "VPSA / PSA oxygen and nitrogen generation, cryogenic ASU front-end purification." },
  { id: "lng", n: "02", title: "Natural Gas Treatment & LNG", img: gas, products: ["4A", "13X-LNG", "Alumina"], desc: "Dehydration, mercaptan removal and CO₂ pre-treatment for pipeline and LNG processes." },
  { id: "h2", n: "03", title: "Hydrogen, Syngas, Refining & Petrochemicals", img: h2, products: ["5A H₂-PSA", "13X", "Catalysts"], desc: "Hydrogen purification, syngas treatment and refinery off-gas recovery." },
  { id: "drying", n: "04", title: "Industrial Drying & Purification", img: dry, products: ["Alumina CA", "4A", "3A"], desc: "Compressed air, ethanol, refrigerant and solvent drying with low dew-point performance." },
  { id: "specialty", n: "05", title: "Specialty Industrial Uses", img: spec, products: ["Custom", "Defluor.", "Cat. Carrier"], desc: "Insulating glass, paint additives, electronic gases and tailored adsorbent solutions." },
];

const Applications = () => (
  <section id="applications" className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">— Applications</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
            Process solutions across the industrial value chain.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="text-muted-foreground text-base leading-relaxed">
            Hengye adsorbents are engineered for the demanding duty cycles of air separation, natural gas,
            hydrogen, refining and specialty processes. Each application is matched to a validated product
            family with documented performance data — specified by engineers in 60+ countries.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {apps.map((a) => (
          <article key={a.id} className="group bg-background p-0 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
              <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-foreground/80 px-2 py-1">
                {a.n} / Application
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-semibold leading-snug mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{a.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {a.products.map((p) => (
                  <span key={p} className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1 border border-border-strong text-foreground/70">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                to={`/applications#${a.id}`}
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.15em] text-primary group-hover:gap-3 transition-all"
              >
                Process Detail <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Applications;
