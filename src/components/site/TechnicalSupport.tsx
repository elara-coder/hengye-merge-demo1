import { FileText, Activity, Compass, FlaskConical, Download, HelpCircle, RotateCw } from "lucide-react";
import lab from "@/assets/lab.jpg";

const items = [
  { icon: FileText, title: "Technical Data Sheets", desc: "Full TDS per product grade with isotherms and physical properties." },
  { icon: Activity, title: "Adsorption Performance", desc: "Equilibrium and dynamic data for water, CO₂, hydrocarbons." },
  { icon: Compass, title: "Application Selection Guide", desc: "Choose the right adsorbent by process condition and target spec." },
  { icon: FlaskConical, title: "Testing & Laboratory", desc: "Pilot column testing and customer-sample qualification." },
  { icon: Download, title: "Download Center", desc: "Centralized library: TDS, MSDS, COA, EAC, REACH." },
  { icon: HelpCircle, title: "Engineering FAQ", desc: "Process integration, packaging, transit and storage answers." },
  { icon: RotateCw, title: "Molecular Sieve Regeneration", desc: "Recommended TSA cycles, ramp rates and lifecycle planning." },
];

const TechnicalSupport = () => (
  <section id="support" className="py-24 lg:py-32 bg-surface-dark text-white">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-12 mb-14">
        <div className="lg:col-span-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">— Technical Support</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
            Engineering documentation, performance data and lab support.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-white/70 leading-relaxed">
            Procurement and process engineers across Russia, CIS, EU, MENA and APAC rely on Hengye's
            documentation library and on-call technical desk to qualify adsorbents efficiently.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
        <div className="lg:col-span-5 bg-surface-dark relative min-h-[320px]">
          <img src={lab} alt="Hengye laboratory technician evaluating molecular sieve sample" loading="lazy" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-2">Hengye R&D Lab</div>
            <div className="font-display text-xl font-semibold">XRD · BET · Pilot Column · Dew-Point Validation</div>
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="bg-surface-dark p-7 hover:bg-foreground transition-colors group">
                <Icon className="h-5 w-5 text-primary mb-5" />
                <h3 className="font-display text-base font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalSupport;
