import factory from "@/assets/factory.jpg";
import { Check } from "lucide-react";

const capabilities = [
  { code: "01", title: "Manufacturing Facility", detail: "Integrated 30,000 m² production complex in Shanghai with synthesis, forming, activation and packing lines." },
  { code: "02", title: "Production Capacity", detail: "30,000 metric tons / year across zeolite, activated alumina and catalyst product families." },
  { code: "03", title: "Quality Control System", detail: "ISO 9001 certified QMS with in-line and batch QC: XRD, BET, crush strength, particle distribution." },
  { code: "04", title: "Export Experience", detail: "26+ years exporting to 60+ countries with full FOB / CIF / DAP / DDP logistics support and a dedicated RU desk." },
  { code: "05", title: "Certifications", detail: "ISO 9001 · ISO 14001 · REACH · EAC / TR CU. MSDS / COA per shipment, multilingual EN · RU · CN." },
];

const Engineering = () => (
  <section id="engineering" className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="eyebrow mb-4">— Engineering Capability</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-8">
            Built on industrial-scale production and verified quality.
          </h2>
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={factory} alt="Hengye Micron manufacturing facility interior" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              <span className="bg-foreground/80 px-2 py-1">Shanghai Plant</span>
              <span className="bg-primary px-2 py-1">30,000 T / Year</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-t border-border">
            {capabilities.map((c) => (
              <div key={c.code} className="border-b border-border py-8 grid grid-cols-12 gap-4 group hover:bg-surface transition-colors">
                <div className="col-span-2 lg:col-span-1 font-mono text-[11px] tracking-[0.2em] text-primary pt-1">{c.code}</div>
                <div className="col-span-10 lg:col-span-11">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2 flex items-center gap-3">
                    {c.title}
                    <Check className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Engineering;
