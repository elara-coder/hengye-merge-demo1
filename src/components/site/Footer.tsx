import { Link } from "react-router-dom";

const cols = [
  {
    title: "Navigation",
    items: [
      { label: "Applications", to: "/applications" },
      { label: "Products", to: "/products" },
      { label: "Engineering Capability", to: "/engineering" },
      { label: "Technical Support", to: "/support" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Products",
    items: [
      { label: "Molecular Sieve 3A", to: "/products#3a" },
      { label: "Molecular Sieve 4A", to: "/products#4a" },
      { label: "Molecular Sieve 5A", to: "/products#5a" },
      { label: "Molecular Sieve 13X", to: "/products#13x" },
      { label: "Activated Alumina", to: "/products#alumina" },
      { label: "Catalysts", to: "/products#catalysts" },
    ],
  },
  {
    title: "Applications",
    items: [
      { label: "Air Separation / ASU", to: "/applications#asu" },
      { label: "Natural Gas / LNG", to: "/applications#lng" },
      { label: "Hydrogen & Refining", to: "/applications#h2" },
      { label: "Industrial Drying", to: "/applications#drying" },
      { label: "Specialty Uses", to: "/applications#specialty" },
    ],
  },
  {
    title: "Logistics & Export",
    items: [
      { label: "FOB Shanghai / Ningbo", to: "/contact" },
      { label: "CIF / DAP / DDP terms", to: "/contact" },
      { label: "Sea & Rail to CIS", to: "/contact" },
      { label: "25kg bags · 1000kg supersacks", to: "/contact" },
      { label: "Steel drum packaging", to: "/contact" },
      { label: "EAC / REACH documentation", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer id="contact" className="bg-surface-dark text-white">
    <div className="container-wide py-20">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
              <span className="font-display text-xl font-bold leading-none">H</span>
            </div>
            <div>
              <div className="font-display text-base font-bold tracking-tight">HENGYE MICRON</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Industrial Adsorbents · Since 1998
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
            Shanghai Hengye Micron (上海恒业微晶) manufactures zeolite molecular sieves,
            activated alumina and engineered catalysts for industrial gas purification —
            specified by procurement and process teams in 60+ countries.
          </p>
          <div className="space-y-3 font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">
            <div><span className="text-primary">↳</span> Pudong New District, Shanghai, China</div>
            <div><span className="text-primary">↳</span> sales@hengyemicron.com</div>
            <div><span className="text-primary">↳</span> rfq@hengyemicron.com — RU desk</div>
            <div><span className="text-primary">↳</span> +86 21 5000 0000</div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-5">
                {c.title}
              </div>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="text-[13px] text-white/70 hover:text-white transition-colors">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
        <div>© 1998–{new Date().getFullYear()} Shanghai Hengye Micron · All rights reserved</div>
        <div className="flex gap-6">
          <span>ISO 9001 · 14001 · REACH · EAC</span>
          <span>EN / RU / 中文</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
