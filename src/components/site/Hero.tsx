import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import hero from "@/assets/hero-molecular-sieves.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Zeolite molecular sieve pellets with industrial gas purification plant"
          className="h-full w-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/80 to-surface-dark/20" />
      </div>

      <div className="container-wide relative grid lg:grid-cols-12 gap-8 py-24 lg:py-36">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
              Shanghai Hengye Micron · 上海恒业微晶 · Est. 1998
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl">
            Advanced Adsorbent Materials for{" "}
            <span className="text-primary">Industrial Gas Purification</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
            Engineered zeolite molecular sieves, activated alumina and engineered catalysts
            for drying, separation and purification across air, natural gas, hydrogen,
            petrochemical and specialty industrial processes — specified by procurement
            and process teams across Russia, CIS, EU and global B2B markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 h-14 px-7 bg-primary text-primary-foreground text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-primary-deep transition-colors"
            >
              Request Technical Solution
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-3 h-14 px-7 border border-white/40 text-white text-[12px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-foreground transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Technical Data
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/10 flex flex-col justify-end animate-fade-in">
          <div className="space-y-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <div className="flex justify-between gap-6"><span>Plant Capacity</span><span className="text-white">30,000 T / Year</span></div>
            <div className="flex justify-between gap-6"><span>Export Markets</span><span className="text-white">60+ Countries</span></div>
            <div className="flex justify-between gap-6"><span>Quality System</span><span className="text-white">ISO 9001 · REACH · EAC</span></div>
            <div className="flex justify-between gap-6"><span>Lead Time</span><span className="text-white">15–30 Days FOB</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;
