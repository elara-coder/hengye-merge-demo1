import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Block } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import asu from "@/assets/asu.jpg";
import lng from "@/assets/lng-terminal.jpg";
import refinery from "@/assets/refinery.jpg";
import dryer from "@/assets/dryer.jpg";
import factory from "@/assets/factory-floor.jpg";

type App = {
  id: string;
  num: string;
  title: string;
  image: string;
  problem: string;
  process: string[];
  products: { code: string; name: string; note: string; to: string }[];
  data: { k: string; v: string }[];
};

const APPS: App[] = [
  {
    id: "asu",
    num: "01",
    title: "空气分离与制氧",
    image: asu,
    problem:
      "深冷空分及 PSA / VPSA 制氧装置要求进料空气脱除 H₂O、CO₂ 及烃类,以防止结冰并保护下游冷箱及吸附器。",
    process: [
      "原料空气压缩 (4–10 barg) 与后冷",
      "活性氧化铝 / 13X 分层床预净化 (TSA)",
      "深冷蒸馏或 PSA / VPSA 分离",
      "废氮 150–250 °C 周期性热再生",
    ],
    products: [
      { code: "AL-DRY", name: "活性氧化铝 (PSA 级)", note: "脱水主吸附层", to: "/products#alumina" },
      { code: "13X-APG", name: "13X APG 分子筛", note: "脱除 CO₂ 及残余水分", to: "/products#13x" },
      { code: "5A-OXY", name: "5A 制氧级", note: "VPSA 制氧吸附剂", to: "/products#5a" },
    ],
    data: [
      { k: "出口露点", v: "≤ −70 °C" },
      { k: "CO₂ 残余", v: "< 1 ppm" },
      { k: "TSA 循环时间", v: "4–8 h" },
      { k: "使用寿命", v: "3–5 年" },
    ],
  },
  {
    id: "lng",
    num: "02",
    title: "天然气处理与 LNG",
    image: lng,
    problem:
      "进入 LNG 液化装置的管道气与原料气需深度脱水脱硫,避免水合物生成、冷箱冰堵以及低温换热器腐蚀。",
    process: [
      "入口分离与胺洗 (脱 CO₂ / H₂S)",
      "4A / 13X 上 TSA 脱水至 ≤ 0.1 ppmv H₂O",
      "硫醇及汞保护床",
      "深冷液化与储罐",
    ],
    products: [
      { code: "4A-LNG", name: "4A LNG 级", note: "深度脱水,使用寿命长", to: "/products#4a" },
      { code: "13X-LNG", name: "13X LNG 级", note: "脱除 H₂S + 硫醇 + H₂O", to: "/products#13x" },
      { code: "AL-CL", name: "抗 Cl / F 氧化铝", note: "改性氧化铝保护层", to: "/products#alumina" },
    ],
    data: [
      { k: "出口 H₂O", v: "≤ 0.1 ppmv" },
      { k: "H₂S 去除", v: "≤ 4 ppmv" },
      { k: "再生温度", v: "260–290 °C" },
      { k: "塔径范围", v: "Ø 1.5–4.5 m" },
    ],
  },
  {
    id: "h2",
    num: "03",
    title: "氢气、合成气、炼化与石化",
    image: refinery,
    problem:
      "氢气 PSA、石脑油重整、异构化及烯烃装置要求吸附剂与催化剂具备抗腐蚀进料、高纯输出及循环抗压强度。",
    process: [
      "重整 / 电解 / SMR 尾气调质",
      "5A + 13X + 活性炭多床 PSA",
      "3A 或 4A 上液态烃干燥",
      "加氢 / 脱水催化剂工段",
    ],
    products: [
      { code: "5A-PSA", name: "5A 氢气 PSA 级", note: "高循环下脱除 CO、CH₄、N₂", to: "/products#5a" },
      { code: "13X-HP", name: "13X 高纯级", note: "微量 CO₂ / H₂O 精脱", to: "/products#13x" },
      { code: "CAT-HY", name: "加氢催化剂", note: "选择性加氢工艺", to: "/products#catalysts" },
    ],
    data: [
      { k: "H₂ 纯度", v: "≥ 99.999 %" },
      { k: "回收率", v: "85–90 %" },
      { k: "循环压力", v: "20–40 barg" },
      { k: "抗压强度", v: "≥ 90 N" },
    ],
  },
  {
    id: "drying",
    num: "04",
    title: "工业干燥与净化",
    image: dryer,
    problem:
      "压缩空气、制冷剂、中空玻璃及溶剂物流需要低压降、稳定可靠且匹配热再生或压力变换再生的吸附剂。",
    process: [
      "压缩机 / 储气罐",
      "无热或加热再生干燥机 (双塔)",
      "颗粒物与油雾过滤",
      "终端取样及露点监测",
    ],
    products: [
      { code: "AL-CA", name: "活性氧化铝 CA 级", note: "无热再生干燥机标准填料", to: "/products#alumina" },
      { code: "4A-IG", name: "4A 中空玻璃级", note: "中空玻璃间隔条填料", to: "/products#4a" },
      { code: "13X-SD", name: "13X 溶剂干燥级", note: "极性溶剂脱水", to: "/products#13x" },
    ],
    data: [
      { k: "压力露点", v: "−40 至 −70 °C" },
      { k: "床层寿命", v: "3–5 年" },
      { k: "堆密度", v: "0.70–0.78 g/ml" },
      { k: "粒径", v: "1.6 / 3.2 / 4.0 mm" },
    ],
  },
  {
    id: "specialty",
    num: "05",
    title: "特种工业应用",
    image: factory,
    problem:
      "医用制氧、乙醇脱水、电子气体及定制催化剂载体对吸附剂的纯度、痕量杂质控制与颗粒形貌一致性有极高要求。",
    process: [
      "按客户要求包装 (桶 / 吨袋 / 真空)",
      "每批进行 ppb 级痕量杂质分析",
      "定制催化剂载体加工",
      "专属质检及批次追溯",
    ],
    products: [
      { code: "5A-MED", name: "5A 医用制氧级", note: "制氧浓缩器专用", to: "/products#5a" },
      { code: "3A-ETH", name: "3A 乙醇脱水级", note: "燃料级乙醇 PSA", to: "/products#3a" },
      { code: "CAT-S", name: "催化剂载体", note: "γ-Al₂O₃,定制形状", to: "/products#catalysts" },
    ],
    data: [
      { k: "O₂ 纯度 (PSA)", v: "≥ 93 %" },
      { k: "乙醇出口浓度", v: "≥ 99.9 wt%" },
      { k: "痕量金属", v: "ppb 级" },
      { k: "起订量", v: "25 kg 起" },
    ],
  },
];

export default function Applications() {
  return (
    <>
      <PageHero
        eyebrow="应用领域"
        title="工艺导向的吸附剂解决方案"
        intro="覆盖五大核心工业工艺领域。每一解决方案均从问题陈述到工艺流程、推荐产品系列及验证数据完整呈现,可直接用于工业采购评审。"
        image={refinery}
      />

      <section className="border-b border-border bg-surface">
        <div className="container-wide py-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-[0.18em]">
          {APPS.map((a) => (
            <a key={a.id} href={`#${a.id}`} className="text-muted-foreground hover:text-primary">
              {a.num} · {a.title}
            </a>
          ))}
        </div>
      </section>

      {APPS.map((a, i) => (
        <section key={a.id} id={a.id} className={`section ${i % 2 ? "bg-surface border-y border-border" : ""}`}>
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.18em] text-primary">
                应用 {a.num}
              </div>
              <h2 className="mt-3 h-section font-display">{a.title}</h2>
              <img src={a.image} alt={a.title} loading="lazy" className="mt-8 aspect-[4/3] w-full object-cover" />
            </div>

            <div className="lg:col-span-7 space-y-10">
              <Block label="工艺挑战"><p className="text-muted-foreground leading-relaxed">{a.problem}</p></Block>

              <Block label="工艺流程">
                <ol className="space-y-3">
                  {a.process.map((s, idx) => (
                    <li key={idx} className="flex gap-4 border-b border-border pb-3 last:border-0">
                      <span className="font-mono text-xs text-primary w-8 pt-1">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{s}</span>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block label="推荐产品">
                <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
                  {a.products.map((p) => (
                    <Link to={p.to} key={p.code} className="bg-background p-5 hover:bg-surface">
                      <div className="font-mono text-xs text-primary">{p.code}</div>
                      <div className="mt-2 font-semibold">{p.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{p.note}</div>
                    </Link>
                  ))}
                </div>
              </Block>

              <Block label="技术数据">
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {a.data.map((d) => (
                    <div key={d.k} className="data-row">
                      <span className="text-muted-foreground">{d.k}</span>
                      <span className="font-semibold text-foreground">{d.v}</span>
                    </div>
                  ))}
                </div>
              </Block>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary px-5 py-3 font-mono text-xs tracking-[0.18em] text-primary-foreground hover:bg-primary-deep"
                >
                  针对本工艺询价 <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs tracking-[0.18em] hover:border-primary"
                >
                  下载 TDS / SDS
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <RFQBlock title="提供工艺数据 · 获取定制选型方案" />
    </>
  );
}
