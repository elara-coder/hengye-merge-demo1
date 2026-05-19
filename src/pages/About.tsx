import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import factory from "@/assets/factory-floor.jpg";
import lab from "@/assets/lab-qc.jpg";

const MILESTONES = [
  { y: "1998", t: "Founded in Shanghai", d: "Hengye begins activated alumina production for the domestic air-dryer market." },
  { y: "2004", t: "Molecular sieve line commissioned", d: "First 4A / 13X production line, 3,000 t/a capacity." },
  { y: "2009", t: "Export to Europe & CIS", d: "First long-term supply agreement signed with European ASU manufacturer." },
  { y: "2014", t: "Capacity expansion to 15,000 t/a", d: "Second site established; ISO 14001 awarded." },
  { y: "2019", t: "Third production line online", d: "Capacity reaches 30,000 t/a. EAC certification for CIS markets." },
  { y: "2024", t: "Catalyst product line", d: "Commercial catalyst pilot line online — hydrogenation, dehydration and custom carrier supply." },
];

const MARKETS = [
  ["Russia & CIS", "Dedicated RU desk · EAC docs · rail to Moscow / SPB / Novosibirsk"],
  ["Europe", "REACH-registered · EU distributors"],
  ["Middle East", "GCC LNG & refining projects"],
  ["South & SE Asia", "Industrial gas, refining"],
  ["Americas", "PSA & ASU partners"],
  ["Africa", "Compressed air & water treatment"],
];

const NEWS = [
  { d: "2026 · 04", t: "Hengye to exhibit at Neftegaz Moscow 2026" },
  { d: "2026 · 02", t: "Capacity expansion: new 13X-APG line commissioning Q3" },
  { d: "2025 · 11", t: "EAC certification renewed for full sieve portfolio" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Hengye"
        title="A specialist industrial adsorbent manufacturer — since 1998."
        intro="Shanghai-based, export-driven, and engineered for industrial supply. We exist to make adsorbent specification, qualification and supply predictable for the world's process industries."
        image={factory}
      />

      <section id="overview" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— Company Overview</div>
            <h2 className="mt-3 h-section font-display">Specialist scope. Industrial scale.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Shanghai Hengye Micron Co., Ltd. (上海恒业微晶) manufactures engineered zeolite molecular sieves,
              activated alumina and supported catalysts from a 30,000 m² site in Shanghai. Three production
              lines, integrated QC and a documented quality system serve more than 100 industrial partners
              worldwide.
            </p>
            <p>
              Our scope is deliberately narrow: adsorbents and catalysts for air separation, natural gas
              treatment, hydrogen, refining and industrial drying. That focus is the basis of our
              engineering depth and supply reliability — and the reason procurement teams across Russia,
              CIS and the EU specify Hengye for repeat duty.
            </p>
            <div className="grid grid-cols-3 gap-px bg-border border border-border mt-6">
              {[["1998", "Founded"], ["30,000 t/a", "Capacity"], ["60+", "Countries"]].map(([v, k]) => (
                <div key={k} className="bg-background p-5">
                  <div className="font-display text-2xl font-bold">{v}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide">
          <div className="eyebrow">— History & Milestones</div>
          <h2 className="mt-3 h-section font-display">26 years of industrial supply</h2>
          <div className="mt-12 border-t border-border">
            {MILESTONES.map((m) => (
              <div key={m.y} className="grid grid-cols-12 gap-6 border-b border-border py-6">
                <div className="col-span-12 md:col-span-2 font-display text-2xl font-bold text-primary">{m.y}</div>
                <div className="col-span-12 md:col-span-4 font-semibold">{m.t}</div>
                <div className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— Global Markets</div>
            <h2 className="mt-3 h-section font-display">Engineered for export.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Multilingual technical documentation, regional logistics partners, and dedicated desks for
              Russia / CIS and the Middle East.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {MARKETS.map(([region, note]) => (
                <div key={region} className="bg-background p-6">
                  <div className="font-display text-lg font-bold">{region}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="section bg-surface-dark text-white scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-4">— Corporate Culture</div>
            <h2 className="h-section font-display">Engineering discipline before slogans.</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
            {[
              { t: "Specify", d: "Documented process before promised product." },
              { t: "Verify", d: "Every lot characterized; every shipment traceable." },
              { t: "Support", d: "On-call engineering across the asset lifecycle." },
            ].map((c) => (
              <div key={c.t} className="bg-surface-dark p-7">
                <div className="font-display text-2xl font-bold">{c.t}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow">— News & Events</div>
            <h2 className="mt-3 h-section font-display">Newsroom</h2>
            <div className="mt-8 border-t border-border">
              {NEWS.map((n) => (
                <a href="#" key={n.t} className="grid grid-cols-12 items-baseline border-b border-border py-5 hover:bg-surface">
                  <div className="col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">{n.d}</div>
                  <div className="col-span-9 font-semibold">{n.t}</div>
                </a>
              ))}
            </div>
          </div>
          <div id="careers" className="lg:col-span-5">
            <div className="eyebrow">— Careers</div>
            <h2 className="mt-3 h-section font-display">Join the team</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We hire process engineers, materials scientists, and export account managers with a bias for
              technical depth.
            </p>
            <img src={lab} alt="Hengye team" loading="lazy" className="mt-6 w-full aspect-[4/3] object-cover" />
            <a
              href="mailto:careers@hengyemicron.com"
              className="mt-6 inline-flex bg-primary text-primary-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary-deep"
            >
              careers@hengyemicron.com
            </a>
          </div>
        </div>
      </section>

      <RFQBlock />
    </>
  );
}
