import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import lab from "@/assets/lab-qc.jpg";
import { FileText, Download, Wrench, FlaskConical, AlertTriangle, BookOpen, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TDS = [
  { code: "3A", name: "3A 分子筛 — 球状与条状", size: "TDS · PDF · 420 KB" },
  { code: "4A", name: "4A 分子筛 — 球状与条状", size: "TDS · PDF · 440 KB" },
  { code: "5A", name: "5A 分子筛 — PSA 级", size: "TDS · PDF · 460 KB" },
  { code: "13X", name: "13X 分子筛 APG / LNG / HP", size: "TDS · PDF · 510 KB" },
  { code: "AL", name: "活性氧化铝 — 干燥 / PSA / 脱氟", size: "TDS · PDF · 380 KB" },
  { code: "CAT", name: "催化剂 — 加氢 / 脱水", size: "TDS · PDF · 360 KB" },
];

const FAQ = [
  { q: "如何为我的工艺选择合适的分子筛牌号?", a: "选型取决于目标分子的动力学直径、操作温度与压力、允许压降、循环周期及再生方式。我们的工程团队将根据您的工艺数据表推荐合适的牌号、粒径与床层结构。" },
  { q: "分子筛床层的典型使用寿命是多久?", a: "在设计良好的 TSA 或 PSA 工艺中,典型使用寿命为 3–5 年。液体带入、游离氯、胺类污染或再生过程中的热冲击均会缩短寿命。" },
  { q: "分子筛如何再生?", a: "主要有两种方式:热再生 (TSA) 通过 200–300 °C 干净吹扫气解吸,以及压力再生 (PSA) 通过减压解吸。恒业为各牌号提供再生指南,含升温曲线与保温时间。" },
  { q: "贵公司能否为俄罗斯市场提供 EAC / TR CU 文件?", a: "可以。俄罗斯专线团队可提供 EAC 申报、多语种 SDS 与 COA,并支持 FCA / CIF / DAP 等术语,运至独联体各目的地,包括莫斯科、圣彼得堡及新西伯利亚铁路直达。" },
  { q: "最小起订量是多少?", a: "标准牌号最小可供 1 桶(通常 25–150 kg)。定制粒径、催化剂配方及专属批次起订量为 500 kg。" },
  { q: "是否提供现场工程支持?", a: "对合格的工业客户,我们可提供现场装填监理、开车调试、再生审核及失效分析支持。" },
];

const TROUBLESHOOT = [
  { sym: "水分提前穿透", cause: "液体带入、沟流或再生不充分", fix: "检查入口分离器,核查再生温度与流量,进行传质区分析" },
  { sym: "床层压降逐步升高", cause: "磨耗、粉尘迁移、分层床压实", fix: "床层取样,筛除细粉,检查支撑栅板并更换顶层" },
  { sym: "塔底吸附剂破碎", cause: "热冲击、降压过程中震动冲击", fix: "缓和再生升温曲线,减缓降压速率" },
  { sym: "颗粒变色", cause: "烃类或胺类污染", fix: "取样分析,加装保护床,检查上游化学条件" },
];

export default function Support() {
  return (
    <>
      <PageHero
        eyebrow="技术支持"
        title="工业工程支持中心"
        intro="数据表、证书、选型逻辑、再生方案及实验室诊断——工程团队真正所需的完整文档体系。"
        image={lab}
      />

      <section id="tds" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow flex items-center gap-2"><FileText className="size-3.5" /> — 技术文档</div>
            <h2 className="mt-3 h-section font-display">技术数据表 (TDS)</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              所有在产牌号的最新版本。SDS 及批次专属 COA 可通过您的客户工程师索取——
              提供中英俄三语版本。
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-border">
              {TDS.map((d) => (
                <a key={d.code} href="#" className="grid grid-cols-12 items-center border-b border-border last:border-0 hover:bg-surface">
                  <div className="col-span-2 p-5 font-mono text-primary">{d.code}</div>
                  <div className="col-span-7 p-5 font-medium">{d.name}</div>
                  <div className="col-span-2 p-5 font-mono text-xs text-muted-foreground">{d.size}</div>
                  <div className="col-span-1 p-5 text-right"><Download className="ml-auto size-4" /></div>
                </a>
              ))}
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              示例链接 — 正式部署后将提供带签名的 PDF。
            </p>
          </div>
        </div>
      </section>

      <section id="sds" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide grid gap-10 md:grid-cols-3">
          {[
            { i: FileText, t: "SDS / COA 下载", d: "材料安全数据表与批次专属质量证明。中英俄三语。" },
            { i: BookOpen, t: "产品选型指南", d: "根据进料组成、温度及压力区间提供决策树。" },
            { i: Wrench, t: "再生操作指南", d: "各牌号热再生与压力再生方案,含升温曲线与保温时间。" },
          ].map((c) => (
            <div key={c.t} className="bg-background border border-border p-8">
              <c.i className="size-6 text-primary" />
              <div className="mt-5 font-display text-xl font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              <button className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-primary hover:underline">
                查看 <Download className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="lab" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow flex items-center gap-2"><FlaskConical className="size-3.5" /> — 实验室</div>
            <h2 className="mt-3 h-section font-display">测试与实验室支持</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              恒业实验室接受客户返样并提供根因分析:BET、XRD、SEM、ICP
              及匹配实际循环工况的中试动态吸附测试。
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-8">
              {["BET 比表面", "XRD 结晶度", "SEM / EDS", "ICP-OES 金属分析", "抗压强度", "磨耗率", "TGA 水容量", "PSA 中试装置"].map((x) => (
                <li key={x} className="border-b border-border py-2 font-mono text-sm">· {x}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <img src={lab} alt="恒业质控实验室" loading="lazy" className="w-full aspect-[16/10] object-cover" />
          </div>
        </div>
      </section>

      <section id="troubleshoot" className="section bg-surface border-y border-border scroll-mt-24">
        <div className="container-wide">
          <div className="eyebrow flex items-center gap-2"><AlertTriangle className="size-3.5" /> — 故障排查</div>
          <h2 className="mt-3 h-section font-display">现场问题对照表</h2>
          <div className="mt-10 overflow-x-auto border border-border bg-background">
            <table className="w-full text-sm">
              <thead className="bg-surface-dark text-white font-mono text-[11px] tracking-[0.18em]">
                <tr>
                  <th className="text-left p-4 w-1/4">现象</th>
                  <th className="text-left p-4 w-2/5">可能原因</th>
                  <th className="text-left p-4">建议措施</th>
                </tr>
              </thead>
              <tbody>
                {TROUBLESHOOT.map((r) => (
                  <tr key={r.sym} className="border-t border-border align-top">
                    <td className="p-4 font-semibold">{r.sym}</td>
                    <td className="p-4 text-muted-foreground">{r.cause}</td>
                    <td className="p-4">{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="faq" className="section scroll-mt-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow flex items-center gap-2"><HelpCircle className="size-3.5" /> — 常见问题</div>
            <h2 className="mt-3 h-section font-display">工程常见问题</h2>
            <p className="mt-5 text-muted-foreground">
              如未找到答案,请直接联系{" "}
              <span className="font-mono text-foreground">tech@hengyemicron.com</span>
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left py-5 hover:no-underline font-display text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <RFQBlock title="需要工程支持?直接联系我们的技术团队。" />
    </>
  );
}
