import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";
import RFQBlock from "@/components/site/RFQBlock";
import sieveMacro from "@/assets/sieve-macro.jpg";
import aluminaMacro from "@/assets/alumina-macro.jpg";
import catalystImg from "@/assets/product-catalyst.jpg";

type Product = {
  id: string;
  code: string;
  name: string;
  family: "sieve" | "alumina" | "catalyst";
  formula: string;
  intro: string;
  uses: string[];
  specs: { k: string; v: string }[];
  forms: string[];
  image: string;
};

const PRODUCTS: Product[] = [
  {
    id: "3a", code: "3A", name: "3A 沸石分子筛", family: "sieve",
    formula: "0.4 K₂O · 0.6 Na₂O · Al₂O₃ · 2.0 SiO₂ · n H₂O",
    intro: "A 型钾交换分子筛,有效孔径 3 Å。在存在易聚合分子的工况中可选择性吸附水分——是裂解气、乙烯、丙烯及乙醇干燥的行业标准。",
    uses: ["裂解气脱水", "烯烃(乙烯 / 丙烯)干燥", "乙醇及醇类干燥", "中空玻璃间隔条", "制冷剂干燥"],
    specs: [
      { k: "孔径", v: "3 Å" },
      { k: "吸水率", v: "≥ 21 wt%" },
      { k: "堆密度", v: "0.70 g/ml" },
      { k: "抗压强度", v: "≥ 30 N (1.6 mm)" },
      { k: "磨耗率", v: "≤ 0.2 wt%" },
      { k: "粒径", v: "1.6–2.5 / 3.0–5.0 mm" },
    ],
    forms: ["球状", "条状 1/16″", "条状 1/8″"],
    image: sieveMacro,
  },
  {
    id: "4a", code: "4A", name: "4A 沸石分子筛", family: "sieve",
    formula: "Na₂O · Al₂O₃ · 2.0 SiO₂ · 4.5 H₂O",
    intro: "A 型钠交换分子筛,孔径 4 Å。是应用最广泛的工业干燥剂,适用于气体、液体及制冷剂的静态与动态深度干燥。",
    uses: ["天然气脱水", "压缩空气及仪表风", "溶剂脱水", "LPG / LNG 干燥", "药品与食品包装"],
    specs: [
      { k: "孔径", v: "4 Å" },
      { k: "吸水率", v: "≥ 21.5 wt%" },
      { k: "堆密度", v: "0.70 g/ml" },
      { k: "抗压强度", v: "≥ 90 N (3.0 mm)" },
      { k: "粒径", v: "1.6 / 3.2 / 4.0 mm" },
      { k: "灼减", v: "≤ 1.5 wt%" },
    ],
    forms: ["球状", "条状", "粉末"],
    image: sieveMacro,
  },
  {
    id: "5a", code: "5A", name: "5A 沸石分子筛", family: "sieve",
    formula: "0.7 CaO · 0.3 Na₂O · Al₂O₃ · 2.0 SiO₂ · n H₂O",
    intro: "A 型钙交换分子筛,孔径 5 Å。可吸附正构烷烃(C₄–C₂₂)而排除异构与环状结构,广泛用于氢气 PSA、制氧 VPSA 及天然气脱水。",
    uses: ["氢气 PSA 提纯", "制氧 / 制氮 PSA / VPSA", "正构烷烃分离", "天然气同步脱水脱硫", "医用氧气浓缩器"],
    specs: [
      { k: "孔径", v: "5 Å" },
      { k: "吸水率", v: "≥ 21.5 wt%" },
      { k: "氮吸附量", v: "≥ 8.5 ml/g" },
      { k: "堆密度", v: "0.72 g/ml" },
      { k: "抗压强度", v: "≥ 90 N" },
      { k: "循环寿命", v: "已验证 100 万次以上" },
    ],
    forms: ["球状", "条状"],
    image: sieveMacro,
  },
  {
    id: "13x", code: "13X", name: "13X 沸石分子筛", family: "sieve",
    formula: "Na₂O · Al₂O₃ · 2.8 SiO₂ · 6.0 H₂O",
    intro: "X 型钠交换分子筛,孔径 10 Å。孔容大于 A 型,是空分前端净化(CO₂ + H₂O)及天然气脱硫的行业标准。",
    uses: ["空分预净化 (ASU)", "CO₂ + H₂O 协同脱除", "天然气 / LPG 脱硫醇", "脱硫化氢", "芳烃分离"],
    specs: [
      { k: "孔径", v: "10 Å" },
      { k: "吸水率", v: "≥ 25 wt%" },
      { k: "CO₂ 吸附", v: "≥ 18 wt%" },
      { k: "堆密度", v: "0.65 g/ml" },
      { k: "抗压强度", v: "≥ 90 N (3.2 mm)" },
      { k: "牌号", v: "APG · LNG · HP" },
    ],
    forms: ["球状", "条状"],
    image: sieveMacro,
  },
  {
    id: "alumina", code: "AL", name: "活性氧化铝", family: "alumina",
    formula: "γ-Al₂O₃",
    intro: "高纯度光滑球状 γ-Al₂O₃,具有受控的孔结构。适用于压缩空气干燥、PSA 前处理、水脱氟,亦可作为催化剂载体。",
    uses: ["压缩空气干燥", "PSA 前处理层", "饮用水脱氟", "H₂O₂ 稳定", "催化剂载体"],
    specs: [
      { k: "比表面 (BET)", v: "≥ 320 m²/g" },
      { k: "孔容", v: "≥ 0.40 ml/g" },
      { k: "堆密度", v: "0.72 g/ml" },
      { k: "抗压强度", v: "≥ 130 N" },
      { k: "粒径", v: "3–5 / 5–7 mm" },
      { k: "磨耗损失", v: "≤ 0.3 wt%" },
    ],
    forms: ["3–5 mm 球", "5–7 mm 球", "定制"],
    image: aluminaMacro,
  },
  {
    id: "catalysts", code: "CAT", name: "工业催化剂", family: "catalyst",
    formula: "γ-Al₂O₃ 载体 · Ni / Pd / Cu / Zn 配方",
    intro: "采用高纯 γ-Al₂O₃ 载体的工程化催化剂,适用于选择性加氢、脱水及甲醇制烯烃工艺。可根据工艺要求定制形状、负载量与表面化学性质。",
    uses: [
      "选择性加氢(C₂–C₄ 物流)",
      "甲醇 / 乙醇脱水",
      "烃类异构化载体",
      "脱硫保护床",
      "定制催化剂载体加工",
    ],
    specs: [
      { k: "比表面 (BET)", v: "180–280 m²/g" },
      { k: "活性金属负载量", v: "0.3 – 18 wt%" },
      { k: "抗压强度", v: "≥ 110 N" },
      { k: "堆密度", v: "0.65 – 0.85 g/ml" },
      { k: "形状", v: "球 · 三叶 · 环" },
      { k: "起订量 (定制)", v: "500 kg 起" },
    ],
    forms: ["球状", "三叶挤出条", "环状", "定制"],
    image: catalystImg,
  },
];

const NAV: { label: string; items: { id: string; code: string; name: string }[] }[] = [
  {
    label: "沸石分子筛",
    items: [
      { id: "3a", code: "3A", name: "A 型 — 乙醇与烯烃干燥" },
      { id: "4a", code: "4A", name: "A 型 — 通用干燥" },
      { id: "5a", code: "5A", name: "A 型 — PSA H₂ / O₂ / N₂" },
      { id: "13x", code: "13X", name: "X 型 — 空分预净化" },
    ],
  },
  {
    label: "活性氧化铝",
    items: [
      { id: "alumina", code: "AL-DRY", name: "干燥级" },
      { id: "alumina", code: "AL-PSA", name: "PSA 级" },
      { id: "alumina", code: "AL-DEF", name: "脱氟级" },
    ],
  },
  {
    label: "催化剂",
    items: [
      { id: "catalysts", code: "CAT-HY", name: "加氢催化剂" },
      { id: "catalysts", code: "CAT-DE", name: "脱水催化剂" },
      { id: "catalysts", code: "CAT-CS", name: "定制载体" },
    ],
  },
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="产品中心"
        title="工程化沸石、活性氧化铝与催化剂"
        intro="按工业规格生产的球状、条状、粉末等多种形态产品——从原料高岭土与氧化铝至成品批次全程可追溯,提供中英俄三语技术文档。"
        image={sieveMacro}
      />

      {/* Nested category navigation */}
      <section className="border-b border-border bg-surface">
        <div className="container-wide py-10 grid gap-10 md:grid-cols-3">
          {NAV.map((g) => (
            <div key={g.label}>
              <div className="eyebrow">— {g.label}</div>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it.code + it.name}>
                    <a
                      href={`#${it.id}`}
                      className="group flex items-baseline justify-between border-b border-border py-2 hover:border-primary"
                    >
                      <span className="font-mono text-sm text-primary">{it.code}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground text-right">
                        {it.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {PRODUCTS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`section scroll-mt-24 ${i % 2 ? "bg-surface border-y border-border" : ""}`}
        >
          <div className="container-wide grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.18em] text-primary">
                {p.family === "sieve"
                  ? "沸石分子筛"
                  : p.family === "alumina"
                  ? "活性氧化铝"
                  : "催化剂"}
              </div>
              <h2 className="mt-3 h-section font-display">{p.name}</h2>
              <p className="mt-3 font-mono text-sm text-muted-foreground">{p.formula}</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.intro}</p>
              <img src={p.image} alt={p.name} loading="lazy" className="mt-8 aspect-[4/3] w-full object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div>
                <div className="eyebrow">— 典型应用</div>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8">
                  {p.uses.map((u) => (
                    <li key={u} className="flex items-baseline gap-3 border-b border-border py-2.5 text-sm">
                      <span className="size-1.5 bg-primary translate-y-[-2px]" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="eyebrow">— 技术规格</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-x-10">
                  {p.specs.map((s) => (
                    <div key={s.k} className="data-row">
                      <span className="text-muted-foreground">{s.k}</span>
                      <span className="font-semibold">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="eyebrow">— 可供形态</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.forms.map((f) => (
                    <span
                      key={f}
                      className="border border-border px-4 py-2 font-mono text-xs tracking-[0.18em]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary px-5 py-3 font-mono text-xs tracking-[0.18em] text-primary-foreground hover:bg-primary-deep inline-flex items-center gap-2"
                >
                  申请报价 <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  to="/support"
                  className="border border-border px-5 py-3 font-mono text-xs tracking-[0.18em] hover:border-primary"
                >
                  下载 TDS / SDS
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <RFQBlock />
    </>
  );
}
