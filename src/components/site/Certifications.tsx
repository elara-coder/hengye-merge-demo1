import { ShieldCheck } from "lucide-react";

const certs = [
  { code: "ISO 9001", name: "质量管理体系", desc: "已通过认证的生产与质控流程。" },
  { code: "REACH", name: "欧盟化学品注册", desc: "符合出口欧洲市场的合规要求。" },
  { code: "EAC", name: "俄罗斯 / 独联体认证", desc: "全系列分子筛取得 TR CU 符合性声明。" },
  { code: "COA", name: "批次质量证明", desc: "每批次随附中英俄三语 COA 文件。" },
];

const Certifications = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        <div className="lg:col-span-8">
          <div className="eyebrow mb-4">— 资质认证与合规</div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            完备文档 · 国际审核 · 全球认可
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {certs.map((c) => (
          <div key={c.code} className="bg-background p-7 hover-lift">
            <div className="flex items-start justify-between mb-8">
              <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.5} />
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">已验证</span>
            </div>
            <div className="font-display text-2xl font-bold tracking-tight mb-2">{c.code}</div>
            <div className="text-sm font-medium text-foreground mb-2">{c.name}</div>
            <div className="text-sm text-muted-foreground leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
