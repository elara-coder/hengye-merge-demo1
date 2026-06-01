import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import factory from "@/assets/factory-floor.jpg";
import lab from "@/assets/lab-qc.jpg";
import { FileText, FlaskConical, Wrench, LifeBuoy, PlayCircle } from "lucide-react";

const ANCHORS = [
  { id: "overview", label: "公司总览" },
  { id: "history", label: "历史和里程碑" },
  { id: "support", label: "技术支持" },
  { id: "news", label: "新闻和事件" },
  { id: "markets", label: "全球市场" },
  { id: "video", label: "我们的宣传影片" },
];

const MILESTONES = [
  { y: "1998", t: "上海成立", d: "恒业成立,起步于国产活性氧化铝供应。" },
  { y: "2004", t: "分子筛产线投产", d: "首条 4A / 13X 产线建成,年产能 3,000 吨。" },
  { y: "2009", t: "出口欧洲与独联体", d: "与欧洲空分设备厂签订首份长期供货协议。" },
  { y: "2014", t: "产能扩至 15,000 吨/年", d: "第二生产基地投产,通过 ISO 14001 认证。" },
  { y: "2019", t: "第三条产线投产", d: "总产能达 30,000 吨/年,完成独联体 EAC 认证。" },
  { y: "2024", t: "催化剂产品线发布", d: "工业催化剂中试产线投产,涵盖加氢、脱水及定制载体。" },
];

const SUPPORT = [
  { icon: FileText, t: "技术文档体系", d: "完整 TDS / MSDS / COA,配套 EAC、REACH 与第三方检测报告。" },
  { icon: FlaskConical, t: "实验与中试支持", d: "XRD、BET、压碎强度、动态吸附与露点验证,可提供中试柱测试。" },
  { icon: Wrench, t: "工程服务", d: "装填方案、再生曲线、寿命评估,匹配空分、LNG、PSA 工况。" },
  { icon: LifeBuoy, t: "全生命周期响应", d: "选型 — 装填 — 再生 — 复检,中、英、俄三语技术对接。" },
];

const NEWS = [
  { d: "2026 · 04", t: "恒业即将亮相 2026 莫斯科国际油气展(MIOGE)" },
  { d: "2026 · 02", t: "产能扩张:新 13X-APG 产线 Q3 投产" },
  { d: "2025 · 11", t: "全系列分子筛 EAC 认证完成续期" },
  { d: "2025 · 09", t: "中东 LNG 项目实现连续 12 个月稳定供货" },
];

const MARKETS = [
  ["俄罗斯及独联体", "EAC 文件 · 俄语技术对接 · 铁路直达莫斯科 / 圣彼得堡 / 新西伯利亚"],
  ["欧洲", "REACH 注册 · 当地经销网络 · 鹿特丹 / 汉堡港"],
  ["中东", "海湾国家 LNG 与炼化项目长期供应"],
  ["南亚与东南亚", "工业气体、炼油与石化项目"],
  ["美洲", "PSA 与空分设备 OEM 合作伙伴"],
  ["非洲", "压缩空气干燥与水处理应用"],
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="关于恒业"
        title="始于 1998 年的专业工业吸附剂制造商"
        intro="上海恒业微晶科技有限公司专注于沸石分子筛、活性氧化铝与工业催化剂的工程化生产,服务全球工艺产业的吸附剂选型、认证与稳定供应。"
        image={factory}
      />

      {/* In-page anchor nav */}
      <nav className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-wide flex gap-1 overflow-x-auto">
          {ANCHORS.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="shrink-0 px-4 py-4 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-primary transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 1. 公司总览 */}
      <section id="overview" className="section scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 01 / 公司总览</div>
            <h2 className="mt-3 h-section font-display">聚焦专业 · 工业规模</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              上海恒业微晶科技有限公司位于上海 30,000 m² 生产基地,
              专业生产工程化沸石分子筛、活性氧化铝及负载型催化剂。
              三条生产线与一体化质量管理体系,服务全球 100 余家工业合作伙伴。
            </p>
            <p>
              我们的业务边界清晰:面向空气分离、天然气处理、氢气、炼化与工业干燥的吸附剂与催化剂。
              这种专注是我们工程深度与供应稳定性的来源,也是俄罗斯、独联体及欧盟采购团队
              在重复工况下指定恒业的根本原因。
            </p>
            <div className="grid grid-cols-3 gap-px bg-border border border-border mt-6">
              {[["1998", "成立"], ["30,000 吨/年", "产能"], ["60+", "出口国家"]].map(([v, k]) => (
                <div key={k} className="bg-background p-5">
                  <div className="font-display text-2xl font-bold">{v}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. 历史和里程碑 */}
      <section id="history" className="section bg-surface border-y border-border scroll-mt-32">
        <div className="container-wide">
          <div className="eyebrow">— 02 / 历史和里程碑</div>
          <h2 className="mt-3 h-section font-display">26 年工业供应历程</h2>
          <div className="mt-12 border-t border-border">
            {MILESTONES.map((m) => (
              <div key={m.y} className="grid grid-cols-12 gap-6 border-b border-border py-6">
                <div className="col-span-12 md:col-span-2 font-display text-2xl font-bold text-primary">{m.y}</div>
                <div className="col-span-12 md:col-span-4 font-semibold">{m.t}</div>
                <div className="col-span-12 md:col-span-6 text-muted-foreground leading-relaxed">{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 技术支持 */}
      <section id="support" className="section scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 03 / 技术支持</div>
            <h2 className="mt-3 h-section font-display">工程深度 · 文档体系 · 实验室能力</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              恒业以工艺团队的视角组织技术支持——从选型到再生,每一个阶段都有可验证的文档与数据支撑。
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {SUPPORT.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="bg-background p-6">
                  <Icon className="h-5 w-5 text-primary mb-4" />
                  <div className="font-display text-lg font-semibold">{s.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 新闻和事件 */}
      <section id="news" className="section bg-surface border-y border-border scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">— 04 / 新闻和事件</div>
            <h2 className="mt-3 h-section font-display">动态与展会</h2>
          </div>
          <div className="lg:col-span-8 border-t border-border">
            {NEWS.map((n) => (
              <a
                href="#"
                key={n.t}
                className="grid grid-cols-12 items-baseline border-b border-border py-5 hover:bg-background transition-colors"
              >
                <div className="col-span-12 md:col-span-3 font-mono text-xs tracking-[0.18em] text-primary">{n.d}</div>
                <div className="col-span-12 md:col-span-9 font-semibold">{n.t}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 全球市场 */}
      <section id="markets" className="section scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 05 / 全球市场</div>
            <h2 className="mt-3 h-section font-display">面向全球的出口体系</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              多语种技术文档、本地化物流合作伙伴,
              以及面向俄罗斯 / 独联体与中东市场的专属服务团队。
            </p>
            <img src={lab} alt="恒业出口业务" loading="lazy" className="mt-8 w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {MARKETS.map(([region, note]) => (
                <div key={region} className="bg-background p-6">
                  <div className="font-display text-lg font-bold">{region}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. 我们的宣传影片 */}
      <section id="video" className="section bg-surface-dark text-white scroll-mt-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 mb-10">
            <div className="lg:col-span-6">
              <div className="font-mono text-[11px] tracking-[0.25em] text-primary mb-4">— 06 / 我们的宣传影片</div>
              <h2 className="h-section font-display">走进恒业生产基地</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-white/70 leading-relaxed">
                影片记录了原料制备、成型、活化、筛分与出厂检验的完整工序,
                以及实验室对每一批次的性能验证流程。
              </p>
            </div>
          </div>

          <div className="relative aspect-video w-full border border-white/15 bg-foreground/40 overflow-hidden group">
            <img
              src={factory}
              alt="恒业宣传影片预览"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                aria-label="播放宣传影片"
                className="flex h-20 w-20 items-center justify-center bg-primary text-primary-foreground hover:bg-primary-deep transition-colors"
              >
                <PlayCircle className="h-10 w-10" strokeWidth={1.2} />
              </button>
              <div className="mt-6 font-mono text-[10px] tracking-[0.25em] text-white/70">
                视频占位 · 即将上线
              </div>
            </div>
          </div>
        </div>
      </section>

      <RFQBlock />
    </>
  );
}
