import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import factory from "@/assets/factory-floor.jpg";
import lab from "@/assets/lab-qc.jpg";

const MILESTONES = [
  { y: "1998", t: "成立于上海", d: "恒业开始向国内空气干燥市场供应活性氧化铝产品。" },
  { y: "2004", t: "分子筛产线投产", d: "第一条 4A / 13X 产线投产,年产 3,000 吨。" },
  { y: "2009", t: "出口欧洲及独联体", d: "与欧洲空分设备厂签订首份长期供货合同。" },
  { y: "2014", t: "产能扩至 15,000 吨/年", d: "建立第二生产基地,获 ISO 14001 认证。" },
  { y: "2019", t: "第三条产线投产", d: "总产能达 30,000 吨/年,取得独联体 EAC 认证。" },
  { y: "2024", t: "催化剂产品线推出", d: "工业催化剂中试产线投产——涵盖加氢、脱水及定制载体。" },
];

const MARKETS = [
  ["俄罗斯及独联体", "俄罗斯专线 · EAC 文件 · 铁路直达莫斯科 / 圣彼得堡 / 新西伯利亚"],
  ["欧洲", "REACH 注册 · 当地经销网络"],
  ["中东", "海湾国家 LNG 及炼化项目"],
  ["南亚与东南亚", "工业气体、炼油领域"],
  ["美洲", "PSA 与空分设备合作伙伴"],
  ["非洲", "压缩空气与水处理"],
];

const NEWS = [
  { d: "2026 · 04", t: "恒业即将亮相 2026 莫斯科国际油气展" },
  { d: "2026 · 02", t: "产能扩张:新 13X-APG 产线将于 Q3 投产" },
  { d: "2025 · 11", t: "全系列分子筛 EAC 认证完成续期" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="关于恒业"
        title="始于 1998 年的专业工业吸附剂制造商"
        intro="总部位于上海,聚焦出口、专注工业供应。我们的使命是让全球工艺产业在吸附剂选型、认证与供应中获得稳定、可预期的体验。"
        image={factory}
      />

      <section id="overview" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 公司概况</div>
            <h2 className="mt-3 h-section font-display">聚焦专业 · 工业规模</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              上海恒业微晶科技有限公司位于上海 30,000 m² 生产基地,
              专业生产工程化沸石分子筛、活性氧化铝及负载型催化剂。
              三条生产线与一体化质量管理体系,服务全球 100 余家工业合作伙伴。
            </p>
            <p>
              我们的业务范围聚焦明确:面向空气分离、天然气处理、氢气、炼化与工业干燥的吸附剂与催化剂。
              这种专注是我们工程深度与供应稳定的基础——也是俄罗斯、独联体及欧盟采购团队
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

      <section id="history" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide">
          <div className="eyebrow">— 发展历程</div>
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

      <section id="markets" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">— 全球市场</div>
            <h2 className="mt-3 h-section font-display">面向全球的出口体系</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              多语种技术文档、本地化物流合作伙伴,
              以及面向俄罗斯 / 独联体与中东市场的专属服务团队。
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {MARKETS.map(([region, note]) => (
                <div key={region} className="bg-background p-6">
                  <div className="font-display text-lg font-bold">{region}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="culture" className="section bg-surface-dark text-white scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.25em] text-primary mb-4">— 企业文化</div>
            <h2 className="h-section font-display">以工程严谨取代营销口号</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-white/15 border border-white/15">
            {[
              { t: "明确规格", d: "工艺界定先于产品承诺。" },
              { t: "全程验证", d: "每批表征,每船可溯。" },
              { t: "持续支持", d: "全生命周期工程响应。" },
            ].map((c) => (
              <div key={c.t} className="bg-surface-dark p-7">
                <div className="font-display text-2xl font-bold">{c.t}</div>
                <div className="mt-3 text-sm text-white/65 leading-relaxed">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow">— 新闻与活动</div>
            <h2 className="mt-3 h-section font-display">新闻动态</h2>
            <div className="mt-8 border-t border-border">
              {NEWS.map((n) => (
                <a href="#" key={n.t} className="grid grid-cols-12 items-baseline border-b border-border py-5 hover:bg-surface">
                  <div className="col-span-3 font-mono text-xs tracking-[0.18em] text-primary">{n.d}</div>
                  <div className="col-span-9 font-semibold">{n.t}</div>
                </a>
              ))}
            </div>
          </div>
          <div id="careers" className="lg:col-span-5">
            <div className="eyebrow">— 加入我们</div>
            <h2 className="mt-3 h-section font-display">招贤纳士</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              我们诚邀具备技术深度的工艺工程师、材料学专家及外贸客户经理加入。
            </p>
            <img src={lab} alt="恒业团队" loading="lazy" className="mt-6 w-full aspect-[4/3] object-cover" />
            <a
              href="mailto:careers@hengyemicron.com"
              className="mt-6 inline-flex bg-primary text-primary-foreground px-5 py-3 font-mono text-xs tracking-[0.18em] hover:bg-primary-deep"
            >
              careers@hengyemicron.com
            </a>
          </div>
        </div>
      </section>

      <RFQBlock />
    </>
  );
}
