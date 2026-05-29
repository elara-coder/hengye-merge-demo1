import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import hero from "@/assets/hero-molecular-sieves.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="沸石分子筛颗粒与工业气体净化装置"
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
            <span className="font-mono text-[11px] tracking-[0.25em] text-white/70">
              上海恒业微晶 · Shanghai Hengye Micron · 始于 1998
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight max-w-3xl">
            为工业气体净化提供
            <span className="text-primary">先进吸附材料解决方案</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
            专业生产沸石分子筛、活性氧化铝及工业催化剂,
            广泛应用于空气、天然气、氢气、石化及特种工艺过程的
            干燥、分离与净化领域,产品获中国、俄罗斯及独联体、欧盟等全球 B2B 市场采购与工艺团队认可。
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 h-14 px-7 bg-primary text-primary-foreground text-[13px] font-medium tracking-[0.15em] hover:bg-primary-deep transition-colors"
            >
              获取技术方案
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-3 h-14 px-7 border border-white/40 text-white text-[13px] font-medium tracking-[0.15em] hover:bg-white hover:text-foreground transition-colors"
            >
              <Download className="h-4 w-4" />
              下载技术资料
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-white/10 flex flex-col justify-end animate-fade-in">
          <div className="space-y-5 font-mono text-[11px] tracking-[0.2em] text-white/60">
            <div className="flex justify-between gap-6"><span>产能规模</span><span className="text-white">30,000 吨 / 年</span></div>
            <div className="flex justify-between gap-6"><span>出口市场</span><span className="text-white">60+ 个国家</span></div>
            <div className="flex justify-between gap-6"><span>质量体系</span><span className="text-white">ISO 9001 · REACH · EAC</span></div>
            <div className="flex justify-between gap-6"><span>交货周期</span><span className="text-white">FOB 15–30 天</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
};

export default Hero;
