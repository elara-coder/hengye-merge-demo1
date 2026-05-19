import { Link } from "react-router-dom";
import zeo from "@/assets/product-zeolite.jpg";
import alu from "@/assets/product-alumina.jpg";
import cat from "@/assets/product-catalyst.jpg";

const families = [
  {
    code: "PF / 01",
    anchor: "sieves",
    name: "Zeolite Molecular Sieves",
    img: zeo,
    desc: "High-crystallinity sodium and calcium aluminosilicates engineered for selective adsorption — the workhorse media of industrial drying and gas separation.",
    grades: [
      { g: "3A", t: "Ethanol & olefin drying", spec: "Pore Ø 3Å · H₂O ≥21%", to: "/products#3a" },
      { g: "4A", t: "General gas & liquid drying", spec: "Pore Ø 4Å · H₂O ≥22%", to: "/products#4a" },
      { g: "5A", t: "PSA H₂, O₂, N₂ separation", spec: "Pore Ø 5Å · N₂/O₂ sep.", to: "/products#5a" },
      { g: "13X", t: "Air pre-purification, sweetening", spec: "Pore Ø 10Å · CO₂ ≥18%", to: "/products#13x" },
    ],
  },
  {
    code: "PF / 02",
    anchor: "alumina",
    name: "Activated Alumina",
    img: alu,
    desc: "High-surface-area γ-Al₂O₃ spheres for moisture, fluoride and contaminant adsorption duty — the standard layer in air dryers and PSA pre-treatment.",
    grades: [
      { g: "Drying Grade", t: "Compressed air & gas drying", spec: "SA ≥330 m²/g", to: "/products#alumina" },
      { g: "PSA Grade", t: "Pre-layer in PSA/TSA units", spec: "Crush ≥160 N", to: "/products#alumina" },
      { g: "Defluorination", t: "Water & alkylation processes", spec: "F⁻ capacity ≥6%", to: "/products#alumina" },
    ],
  },
  {
    code: "PF / 03",
    anchor: "catalysts",
    name: "Catalysts",
    img: cat,
    desc: "Engineered supported catalysts for petrochemical, environmental and industrial duty — γ-Al₂O₃ carriers, hydrogenation and dehydration formulations.",
    grades: [
      { g: "Hydrogenation", t: "Selective hydrogenation duty", spec: "Ni / Pd / γ-Al₂O₃", to: "/products#catalysts" },
      { g: "Dehydration", t: "Methanol & ethanol routes", spec: "Acidic alumina base", to: "/products#catalysts" },
      { g: "Custom Carriers", t: "Engineered shapes & loadings", spec: "Tri-lobe · Ring · Sphere", to: "/products#catalysts" },
    ],
  },
];

const Products = () => (
  <section id="products" className="py-24 lg:py-32 bg-surface">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-4">— Product Families</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
            Three product platforms.<br />
            Engineered for industrial duty.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-muted-foreground leading-relaxed">
            Zeolite molecular sieves, activated alumina and engineered catalysts — manufactured in
            Shanghai, characterized in-house, traceable to lot. Browse the catalogue or request a
            specification matched to your process.
          </p>
        </div>
      </div>

      <div className="space-y-px bg-border">
        {families.map((f) => (
          <div key={f.code} className="bg-background grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-4 relative aspect-square lg:aspect-auto bg-white">
              <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="lg:col-span-8 p-8 lg:p-12 border-l border-border">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{f.code}</span>
                <span className="h-px flex-1 bg-border" />
                <Link
                  to={`/products#${f.anchor}`}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
                >
                  Full catalogue →
                </Link>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3">{f.name}</h3>
              <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">{f.desc}</p>

              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {f.grades.map((g) => (
                  <Link to={g.to} key={g.g} className="bg-background p-5 hover-lift block">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="font-display text-lg font-semibold">{g.g}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        Grade
                      </div>
                    </div>
                    <div className="text-sm text-foreground/80 mb-3">{g.t}</div>
                    <div className="font-mono text-[11px] text-muted-foreground border-t border-border pt-3">
                      {g.spec}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
