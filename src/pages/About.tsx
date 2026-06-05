import { Link } from "react-router-dom";
import RFQBlock from "@/components/site/RFQBlock";
import factory from "@/assets/factory-floor.jpg";
import lab from "@/assets/lab-qc.jpg";
import {
  FileText,
  FlaskConical,
  Wrench,
  LifeBuoy,
  PlayCircle,
  Building2,
  History,
  Newspaper,
  Globe2,
  Video,
  Download,
  Compass,
  RotateCw,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const ANCHORS = [
  { id: "overview", label: "公司总览", en: "Company Overview", icon: Building2 },
  { id: "history", label: "历史和里程碑", en: "History & Milestones", icon: History },
  { id: "support", label: "技术支持", en: "Technical Support", icon: Wrench },
  { id: "news", label: "新闻和事件", en: "News & Events", icon: Newspaper },
  { id: "markets", label: "全球市场", en: "Global Market", icon: Globe2 },
  { id: "video", label: "我们的宣传影片", en: "Corporate Video", icon: Video },
];

const STATS = [
  { v: "26+", k: "年专业经验", en: "Years Experience" },
  { v: "60+", k: "服务国家与地区", en: "Countries & Regions" },
  { v: "100+", k: "全球工业合作伙伴", en: "Industrial Partners" },
  { v: "30,000 吨/年", k: "年产能", en: "Annual Capacity" },
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
  { icon: FileText, t: "技术数据表 (TDS)", d: "每个牌号配套完整 TDS,含吸附等温线与物性数据。" },
  { icon: Compass, t: "产品选型支持", d: "依据工艺工况与目标指标快速匹配合适的吸附剂牌号。" },
  { icon: Activity, t: "吸附性能数据", d: "水、CO₂ 及烃类的平衡与动态吸附数据完整可查。" },
  { icon: RotateCw, t: "再生指南", d: "推荐的 TSA 循环参数、升温曲线及寿命规划。" },
  { icon: FlaskConical, t: "应用工艺咨询", d: "空分、LNG、PSA、干燥等典型工况的工程化咨询。" },
  { icon: ShieldCheck, t: "质量与认证文档", d: "COA / MSDS / EAC / REACH / 第三方检测一站获取。" },
];

const NEWS = [
  { d: "2026 · 04", tag: "展会", t: "恒业即将亮相 2026 莫斯科国际油气展(MIOGE)" },
  { d: "2026 · 02", tag: "产能", t: "产能扩张:新 13X-APG 产线 Q3 投产" },
  { d: "2025 · 11", tag: "认证", t: "全系列分子筛 EAC 认证完成续期" },
  { d: "2025 · 09", tag: "项目", t: "中东 LNG 项目实现连续 12 个月稳定供货" },
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
      {/* Hero */}
      <section className="relative border-b border-border bg-surface-dark text-white overflow-hidden">
        <img src={factory} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark via-surface-dark/85 to-surface-dark/40" />
        <div className="relative container-wide pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              About Hengye · 关于恒业
            </span>
          </div>
          <h1 className="h-display font-display max-w-4xl">
            为全球工业应用工程化的吸附剂解决方案
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-base md:text-lg leading-relaxed">
            26 年专注于沸石分子筛、活性氧化铝与催化剂技术,服务全球 60 余个国家与地区的
            工业气体、天然气、炼化与工业干燥客户。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-6 bg-primary text-primary-foreground text-[12px] font-medium tracking-[0.14em] hover:bg-primary-deep transition-colors"
            >
              联系我们
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 h-11 px-6 border border-white/25 text-white text-[12px] font-medium tracking-[0.14em] hover:bg-white/10 transition-colors"
            >
              <Download className="h-4 w-4" />
              下载公司简介
            </a>
          </div>
        </div>
      </section>

      {/* 2. Section overview cards */}
      <section className="border-b border-border bg-background">
        <div className="container-wide py-14">
          <div className="eyebrow mb-6">— 页面导航</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
            {ANCHORS.map((a, i) => {
              const Icon = a.icon;
              return (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="group bg-background p-5 hover:bg-surface transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="font-display text-[15px] font-semibold leading-tight">{a.label}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {a.en}
                  </div>
                  <ArrowRight className="mt-5 h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Company Overview */}
      <section id="overview" className="section scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 01 / 公司总览</div>
            <h2 className="mt-3 h-section font-display">聚焦专业 · 工业规模</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              上海恒业微晶科技有限公司位于上海 30,000 m² 生产基地,
              专业生产工程化沸石分子筛、活性氧化铝及负载型催化剂。
              我们的业务边界清晰——面向空气分离、天然气处理、氢气、炼化与工业干燥的吸附剂与催化剂。
              这种专注是俄罗斯、独联体及欧盟采购团队在重复工况下指定恒业的根本原因。
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-border border border-border">
              {STATS.map((s) => (
                <div key={s.k} className="bg-background p-6">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-primary">{s.v}</div>
                  <div className="mt-3 text-sm font-semibold">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.en}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. History */}
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

      {/* 5. Technical Support */}
      <section id="support" className="section scroll-mt-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 mb-12">
            <div className="lg:col-span-6">
              <div className="eyebrow">— 03 / 技术支持</div>
              <h2 className="mt-3 h-section font-display">工程文档 · 性能数据 · 实验室支持</h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 flex items-end">
              <p className="text-muted-foreground leading-relaxed">
                来自全球的采购及工艺工程师,依托恒业的文档体系与随时响应的技术团队完成
                吸附剂选型、装填与认证。
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {SUPPORT.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="bg-background p-7 hover:bg-surface transition-colors">
                  <Icon className="h-5 w-5 text-primary mb-5" />
                  <div className="font-display text-base font-semibold">{s.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. News */}
      <section id="news" className="section bg-surface border-y border-border scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">— 04 / 新闻和事件</div>
            <h2 className="mt-3 h-section font-display">动态 · 展会 · 产品更新</h2>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {NEWS.map((n) => (
              <a
                href="#"
                key={n.t}
                className="bg-background p-6 hover:bg-surface transition-colors flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-primary">{n.d}</span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground border border-border px-2 py-1">
                    {n.tag}
                  </span>
                </div>
                <div className="mt-6 font-semibold leading-snug">{n.t}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Global Market */}
      <section id="markets" className="section scroll-mt-32">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 05 / 全球市场</div>
            <h2 className="mt-3 h-section font-display">面向全球的出口体系</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              多语种技术文档、本地化物流合作伙伴,
              以及面向俄罗斯 / 独联体与中东市场的专属服务团队。
            </p>
            {/* Lightweight world-map visualization */}
            <div className="mt-8 relative aspect-[4/3] border border-border bg-surface overflow-hidden">
              <img src={lab} alt="出口市场地图" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/40 to-transparent" />
              <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                <g fill="hsl(var(--primary))">
                  <circle cx="120" cy="120" r="4" />
                  <circle cx="200" cy="100" r="6" />
                  <circle cx="240" cy="115" r="5" />
                  <circle cx="260" cy="140" r="4" />
                  <circle cx="290" cy="160" r="4" />
                  <circle cx="180" cy="180" r="3" />
                  <circle cx="320" cy="200" r="3" />
                </g>
                <g stroke="hsl(var(--primary))" strokeWidth="0.6" strokeDasharray="2 3" fill="none" opacity="0.6">
                  <path d="M260 140 L120 120" />
                  <path d="M260 140 L200 100" />
                  <path d="M260 140 L240 115" />
                  <path d="M260 140 L290 160" />
                  <path d="M260 140 L180 180" />
                  <path d="M260 140 L320 200" />
                </g>
              </svg>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                上海 → 全球 60+ 国家
              </div>
            </div>
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

      {/* 8. Corporate Video */}
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

      {/* 9. Bottom CTA via RFQBlock */}
      <RFQBlock />
    </>
  );
}
