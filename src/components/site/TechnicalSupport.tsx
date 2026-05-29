import { FileText, Activity, Compass, FlaskConical, Download, HelpCircle, RotateCw } from "lucide-react";
import lab from "@/assets/lab.jpg";

const items = [
  { icon: FileText, title: "技术数据表 (TDS)", desc: "每个牌号配套完整 TDS,含吸附等温线与物性数据。" },
  { icon: Activity, title: "吸附性能数据", desc: "水、CO₂、烃类的平衡及动态吸附数据。" },
  { icon: Compass, title: "应用选型指南", desc: "根据工艺工况与目标指标快速匹配合适的吸附剂。" },
  { icon: FlaskConical, title: "实验与中试", desc: "提供中试柱测试与客户样品鉴定服务。" },
  { icon: Download, title: "下载中心", desc: "TDS / MSDS / COA / EAC / REACH 资料一站获取。" },
  { icon: HelpCircle, title: "工程常见问题", desc: "工艺集成、包装、运输与储存等典型问题解答。" },
  { icon: RotateCw, title: "分子筛再生指南", desc: "推荐的 TSA 循环参数、升温曲线及寿命规划。" },
];

const TechnicalSupport = () => (
  <section id="support" className="py-24 lg:py-32 bg-surface-dark text-white">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-12 mb-14">
        <div className="lg:col-span-6">
          <div className="font-mono text-[11px] tracking-[0.25em] text-primary mb-4">— 技术支持</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
            工程文档 · 性能数据 · 实验室支持
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-white/70 leading-relaxed">
            来自中国、俄罗斯及独联体、欧盟、中东和亚太地区的采购及工艺工程师,
            依托恒业的文档体系与随时响应的技术团队完成吸附剂选型与认证。
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
        <div className="lg:col-span-5 bg-surface-dark relative min-h-[320px]">
          <img src={lab} alt="恒业实验室技术员对分子筛样品进行评估" loading="lazy" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-surface-dark via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-mono text-[10px] tracking-[0.2em] text-primary mb-2">恒业研发中心</div>
            <div className="font-display text-xl font-semibold">XRD · BET · 中试柱 · 露点验证</div>
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
