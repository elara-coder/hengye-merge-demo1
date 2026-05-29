import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Boxes,
  Microscope,
  Ruler,
  FileText,
  Globe2,
  Package,
  Languages,
  Truck,
  Repeat,
  X,
  Download,
} from "lucide-react";
import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import { CASES, type CaseStudy } from "@/data/cases";
import factory from "@/assets/factory-floor.jpg";

const QC_ITEMS = [
  { icon: Repeat, label: "批次可追溯", detail: "从原料到成品桶的批次谱系记录,保存十年。" },
  { icon: Boxes, label: "原料控制", detail: "每个活性组分均使用单一合格供应源,进货逐批质检。" },
  { icon: Ruler, label: "粒径一致性", detail: "自动筛分 —— 球径公差 ±0.2 mm,超规率 < 1 %。" },
  { icon: ShieldCheck, label: "抗压强度控制", detail: "每班次 100 % 统计抽样;3–5 mm 球状产品最低 90 N。" },
  { icon: Microscope, label: "吸附性能验证", detail: "每批次进行动态 H₂O / CO₂ / N₂ 容量验证。" },
  { icon: FileText, label: "TDS / COA / 测试记录", detail: "多语种 TDS、批次可追溯 COA,每船随附存档原始测试数据。" },
];

const SUPPLY_ITEMS = [
  { icon: Package, label: "出口包装", detail: "密封钢桶、吨袋或真空内衬 —— 按 20' / 40' 集装箱优化装载。" },
  { icon: Languages, label: "多语种文档", detail: "中 · 英 · 俄三语技术与商务文档;EAC、REACH 及目的国海关单据齐备。" },
  { icon: Repeat, label: "稳定批次供应", detail: "按牌号锁定排产计划,为长期工业客户预留产能。" },
  { icon: Truck, label: "物流协调", detail: "支持 FCA / CIF / DAP / DDP;拼箱及俄罗斯 / 独联体专线服务。" },
  { icon: Globe2, label: "长周期供应能力", detail: "多年期框架协议配季度提货;关键客户实施安全库存策略。" },
];

function DetailBlock({ num, label, children }: { num: string; label: string; children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-8 border-b border-border last:border-b-0">
      <div className="lg:col-span-3">
        <div className="font-mono text-[11px] tracking-[0.2em] text-primary">— {num}</div>
        <h4 className="mt-2 font-display text-lg lg:text-xl font-semibold leading-snug">{label}</h4>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  );
}

function CaseDetailPanel({ c, onClose }: { c: CaseStudy; onClose: () => void }) {
  return (
    <div className="bg-background border border-border">
      {/* Detail header */}
      <div className="relative border-b border-border bg-surface-dark text-white overflow-hidden">
        <img src={c.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
        <div className="relative p-8 lg:p-12 flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <div className="font-mono text-[11px] tracking-[0.25em] text-primary">
              案例 {c.num} · {c.industry}
            </div>
            <h3 className="mt-3 font-display text-2xl lg:text-4xl font-semibold leading-tight">{c.name}</h3>
            <p className="mt-4 text-white/75 text-sm lg:text-base leading-relaxed">{c.challenge}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="关闭案例详情"
            className="shrink-0 inline-flex items-center justify-center h-10 w-10 border border-white/30 text-white hover:bg-white hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="p-6 lg:p-10">
        <DetailBlock num="01" label="项目概况">
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-3xl">{c.overview}</p>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              ["所属行业", c.industry],
              ["产品系列", c.family],
              ["装置形式", "TSA / PSA · 多床"],
              ["参考类型", "标杆项目"],
            ].map(([k, v]) => (
              <div key={k} className="bg-background p-4">
                <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{k}</div>
                <div className="mt-2 font-display text-[14px] font-semibold leading-snug">{v}</div>
              </div>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock num="02" label="工艺挑战">
          <ul className="divide-y divide-border border-y border-border">
            {c.industrialChallenge.map((line, i) => (
              <li key={i} className="py-3 flex gap-5">
                <span className="font-mono text-[11px] text-primary pt-1 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14px] leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </DetailBlock>

        <DetailBlock num="03" label="工艺流程 / 系统示意">
          <div className="grid md:grid-cols-5 gap-px bg-border border border-border">
            {c.processFlow.map((s) => (
              <div key={s.step} className="bg-background p-4 flex flex-col">
                <div className="font-mono text-[10px] tracking-[0.2em] text-primary">{s.step}</div>
                <div className="mt-2 font-display text-[13px] font-semibold leading-snug">{s.label}</div>
                <p className="mt-2 text-[12px] text-muted-foreground leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
            示意图 · 仅供参考使用
          </p>
        </DetailBlock>

        <DetailBlock num="04" label="吸附剂方案">
          <div className="border border-border">
            <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-surface font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border">
              <div className="col-span-4">产品</div>
              <div className="col-span-4">工艺作用</div>
              <div className="col-span-4">技术规格</div>
            </div>
            {c.adsorbentSolution.map((a) => (
              <div key={a.product} className="grid md:grid-cols-12 gap-4 px-5 py-4 border-b border-border last:border-b-0">
                <div className="md:col-span-4 font-display text-[14px] font-semibold">{a.product}</div>
                <div className="md:col-span-4 text-[13px] text-muted-foreground leading-relaxed">{a.role}</div>
                <div className="md:col-span-4 font-mono text-[12px] leading-relaxed">{a.spec}</div>
              </div>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock num="05" label="技术效益">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {c.technicalBenefits.map((b) => (
              <div key={b.metric} className="bg-background p-5">
                <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{b.metric}</div>
                <div className="mt-2 font-display text-xl lg:text-2xl font-bold">{b.value}</div>
                <p className="mt-2 text-[12px] text-muted-foreground leading-relaxed">{b.note}</p>
              </div>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock num="06" label="文档下载与询价">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border border-border">
              <div className="px-5 py-3 bg-surface font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border">
                技术文档
              </div>
              <ul>
                {c.downloads.map((d) => (
                  <li key={d} className="flex items-center justify-between gap-4 px-5 py-3 border-b border-border last:border-b-0 group">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-[13px]">{d}</span>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </li>
                ))}
              </ul>
              <p className="px-5 py-3 font-mono text-[10px] tracking-[0.15em] text-muted-foreground border-t border-border">
                涉及保密内容的文件将在签署 NDA 后发放。
              </p>
            </div>

            <div className="bg-surface-dark text-white p-6 lg:p-8 flex flex-col">
              <div className="font-mono text-[11px] tracking-[0.2em] text-primary">— 项目询价</div>
              <h4 className="mt-3 font-display text-xl font-semibold leading-tight">
                就此配置与我们的工艺团队深入沟通
              </h4>
              <p className="mt-3 text-white/70 text-[13px] leading-relaxed">
                请提供进料组成、循环周期及产能目标。我们将在 1 个工作日内回复,
                提供分层装填建议及预计交付计划。
              </p>
              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-between h-11 px-4 bg-primary text-primary-foreground hover:bg-primary-deep transition-colors flex-1"
                >
                  <span className="text-[12px] font-medium tracking-[0.15em]">提交项目询价</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-between h-11 px-4 border border-white/30 text-white hover:bg-white hover:text-foreground transition-colors flex-1"
                >
                  <span className="text-[12px] font-medium tracking-[0.15em]">查看产品体系</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </DetailBlock>
      </div>
    </div>
  );
}

export default function Engineering() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES.find((c) => c.slug === activeSlug) ?? null;

  useEffect(() => {
    if (activeCase && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSlug, activeCase]);

  return (
    <>
      <PageHero
        eyebrow="工程能力"
        title="大型工业项目实施经验"
        intro="以应用为导向的吸附剂解决方案,依托一体化制造能力、深厚工艺理解及工业项目执行经验。"
        image={factory}
      />

      {/* Supporting strap line */}
      <section className="border-b border-border bg-surface">
        <div className="container-wide py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="font-mono text-[11px] tracking-[0.2em] text-primary">— 参考范围</div>
          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
            涵盖空气分离、天然气处理、氢气提纯、石化系统及工业干燥等领域的标杆项目经验。
          </p>
        </div>
      </section>

      {/* CASE MATRIX */}
      <section id="cases" className="section">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow">— 项目案例矩阵</div>
              <h2 className="mt-4 h-section font-display">覆盖五大核心工业领域的参考项目</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              以下数据为参考性数值,基于同类工业项目对标并按恒业标准产品体系进行调整。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {CASES.map((c) => {
              const isActive = c.slug === activeSlug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setActiveSlug(isActive ? null : c.slug)}
                  aria-expanded={isActive}
                  className={`group bg-background flex flex-col text-left hover-lift transition-colors ${
                    isActive ? "ring-2 ring-primary ring-inset" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                    <div className="absolute top-3 left-3 bg-background/95 px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-primary">
                      案例 {c.num}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{c.industry}</div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{c.name}</h3>

                    <dl className="mt-5 space-y-3 text-[13px] flex-1">
                      <div>
                        <dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">工艺挑战</dt>
                        <dd className="mt-1 leading-relaxed">{c.challenge}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">解决方案</dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">{c.solution}</dd>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div>
                          <dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">产品系列</dt>
                          <dd className="mt-1 text-[12px] leading-snug">{c.family}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">核心效益</dt>
                          <dd className="mt-1 text-[12px] leading-snug">{c.benefit}</dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                      <span className="font-mono text-[11px] tracking-[0.18em] text-primary">
                        {isActive ? "关闭案例" : "查看案例"}
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 text-primary transition-transform ${
                          isActive ? "rotate-90" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inline detail panel */}
          {activeCase && (
            <div ref={detailRef} className="mt-10 scroll-mt-24">
              <CaseDetailPanel c={activeCase} onClose={() => setActiveSlug(null)} />
            </div>
          )}
        </div>
      </section>

      {/* QUALITY VERIFICATION */}
      <section id="quality" className="section bg-surface border-y border-border">
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">— 品质验证与可追溯</div>
            <h2 className="mt-4 h-section font-display">从原料到出厂桶的全流程验证</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              每一批生产均经过固定顺序的力学、结构及吸附测试。
              全部记录保存十年,可应客户审计与供应商认证要求随时调阅。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-border border border-border">
              {[["ISO 9001", "质量体系"], ["10 年", "记录保存"], ["100 %", "批次质检"]].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <div className="font-display text-lg font-bold">{k}</div>
                  <div className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {QC_ITEMS.map(({ icon: Icon, label, detail }) => (
                <div key={label} className="bg-background p-6 flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-semibold">{label}</div>
                    <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL SUPPLY SUPPORT */}
      <section id="supply" className="section">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow">— 全球供应保障</div>
            <h2 className="mt-4 h-section font-display">为长周期国际工业供应而生</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              恒业以专业工业供应商的身份运营 ——
              包装、文档、物流及库存策略全面对标国际工程与采购团队的实际需求。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {SUPPLY_ITEMS.map(({ icon: Icon, label, detail }, i) => (
              <div key={label} className="bg-background p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="mt-5 font-display text-[15px] font-semibold leading-snug">{label}</div>
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQBlock title="明确项目需求 · 认证可靠供应商 · 实现稳定放量" />
    </>
  );
}
