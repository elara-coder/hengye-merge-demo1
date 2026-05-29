import factory from "@/assets/factory.jpg";
import { Check } from "lucide-react";

const capabilities = [
  { code: "01", title: "生产基地", detail: "位于上海的 30,000 m² 综合生产基地,涵盖合成、成型、活化及包装四大产线。" },
  { code: "02", title: "产能规模", detail: "年产能 30,000 吨,覆盖沸石分子筛、活性氧化铝及催化剂三大产品体系。" },
  { code: "03", title: "质量控制体系", detail: "通过 ISO 9001 认证的质量管理体系,在线及批次质检涵盖 XRD、BET、强度、粒径分布。" },
  { code: "04", title: "出口经验", detail: "26 年以上出口经验,服务全球 60 余国,提供 FOB / CIF / DAP / DDP 物流支持及俄罗斯专线。" },
  { code: "05", title: "资质认证", detail: "ISO 9001 · ISO 14001 · REACH · EAC / TR CU。每批次随附中英俄三语 MSDS / COA。" },
];

const Engineering = () => (
  <section id="engineering" className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="eyebrow mb-4">— 工程能力</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-8">
            以工业化产能与可验证品质为根基
          </h2>
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={factory} alt="恒业微晶上海生产基地内部" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] tracking-[0.2em] text-white">
              <span className="bg-foreground/80 px-2 py-1">上海工厂</span>
              <span className="bg-primary px-2 py-1">30,000 吨 / 年</span>
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
