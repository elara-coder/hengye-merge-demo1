import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import air from "@/assets/app-air-separation.jpg";
import gas from "@/assets/app-natural-gas.jpg";
import h2 from "@/assets/app-hydrogen.jpg";
import dry from "@/assets/app-drying.jpg";
import spec from "@/assets/app-specialty.jpg";

const apps = [
  { id: "asu", n: "01", title: "空气分离与制氧", img: air, products: ["13X-APG", "5A PSA", "活性氧化铝"], desc: "VPSA / PSA 制氧制氮系统、深冷空分前端净化用吸附剂。" },
  { id: "lng", n: "02", title: "天然气处理与 LNG", img: gas, products: ["4A", "13X-LNG", "活性氧化铝"], desc: "用于管道气与 LNG 工艺的脱水、脱硫醇及 CO₂ 预处理。" },
  { id: "h2", n: "03", title: "氢气、合成气、炼化与石化", img: h2, products: ["5A H₂-PSA", "13X", "催化剂"], desc: "氢气提纯、合成气处理与炼厂尾气回收解决方案。" },
  { id: "drying", n: "04", title: "工业干燥与净化", img: dry, products: ["氧化铝 CA", "4A", "3A"], desc: "压缩空气、乙醇、制冷剂及溶剂深度干燥,实现低露点性能。" },
  { id: "specialty", n: "05", title: "特种工业应用", img: spec, products: ["定制级", "脱氟剂", "催化剂载体"], desc: "中空玻璃、涂料添加剂、电子气体及定制化吸附剂解决方案。" },
];

const Applications = () => (
  <section id="applications" className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">— 应用领域</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
            覆盖工业价值链全流程的工艺解决方案
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 flex items-end">
          <p className="text-muted-foreground text-base leading-relaxed">
            恒业吸附剂针对空分、天然气、氢能、炼化及特种工艺的严苛工况进行专项研发,
            每一应用均配套经验证的产品体系及完整的性能数据,
            为全球 60 余国的工程团队提供选型支持。
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {apps.map((a) => (
          <article key={a.id} className="group bg-background p-0 flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
              <img src={a.img} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white bg-foreground/80 px-2 py-1">
                {a.n} / 应用
              </div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-semibold leading-snug mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{a.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {a.products.map((p) => (
                  <span key={p} className="font-mono text-[10px] tracking-[0.1em] px-2 py-1 border border-border-strong text-foreground/70">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                to={`/applications#${a.id}`}
                className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.15em] text-primary group-hover:gap-3 transition-all"
              >
                查看工艺详情 <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Applications;
