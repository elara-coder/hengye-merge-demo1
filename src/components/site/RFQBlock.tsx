import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RFQBlock({
  title = "为您的工业工艺寻找合适的吸附剂方案?",
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
            <div className="font-mono text-[11px] tracking-[0.25em] text-white/70 mb-5">
              — 询价咨询
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15] max-w-3xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-white/80 leading-relaxed text-base lg:text-lg">
              {subtitle ??
                "请提供您的工艺工况——气体组成、温度、压力、容器体积及目标指标。我们的工程团队将在 1 个工作日内回复,提供定制化吸附剂选型、装填方案及参考报价。"}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between h-16 px-7 bg-white text-foreground hover:bg-foreground hover:text-white transition-colors"
            >
              <span className="text-[13px] font-medium tracking-[0.15em]">提交询价单</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/support"
              className="group inline-flex items-center justify-between h-16 px-7 border border-white/40 text-white hover:bg-white hover:text-primary transition-colors"
            >
              <span className="text-[13px] font-medium tracking-[0.15em]">
                下载 TDS / SDS
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
