import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RFQBlock({
  title = "Need adsorbent solutions for your industrial process?",
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="rfq" className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70 mb-5">
              — Request For Quote
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed text-base lg:text-lg">
              {subtitle ??
                "Share your process conditions — gas composition, temperature, pressure, vessel volume and target spec. Our engineering team responds within one business day with a tailored adsorbent selection, loading plan and indicative pricing."}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between h-16 px-7 bg-white text-foreground hover:bg-foreground hover:text-white transition-colors"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.15em]">Submit RFQ</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/support"
              className="group inline-flex items-center justify-between h-16 px-7 border border-white/40 text-white hover:bg-white hover:text-primary transition-colors"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.15em]">
                Download TDS / SDS
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
