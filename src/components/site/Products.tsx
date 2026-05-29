import { Link } from "react-router-dom";
import zeo from "@/assets/product-zeolite.jpg";
import alu from "@/assets/product-alumina.jpg";
import cat from "@/assets/product-catalyst.jpg";

const families = [
  {
    code: "PF / 01",
    anchor: "sieves",
    name: "沸石分子筛",
    img: zeo,
    desc: "高结晶度钠型与钙型铝硅酸盐,经选择性吸附工艺设计——工业干燥与气体分离的主力介质。",
    grades: [
      { g: "3A", t: "乙醇与烯烃干燥", spec: "孔径 3Å · 吸水率 ≥21%", to: "/products#3a" },
      { g: "4A", t: "通用气体与液体干燥", spec: "孔径 4Å · 吸水率 ≥22%", to: "/products#4a" },
      { g: "5A", t: "PSA 制氢、制氧、制氮", spec: "孔径 5Å · N₂/O₂ 分离", to: "/products#5a" },
      { g: "13X", t: "空分预净化、气体脱硫", spec: "孔径 10Å · 吸 CO₂ ≥18%", to: "/products#13x" },
    ],
  },
  {
    code: "PF / 02",
    anchor: "alumina",
    name: "活性氧化铝",
    img: alu,
    desc: "高比表面 γ-Al₂O₃ 球状载体,用于水分、氟离子及污染物的吸附——空气干燥与 PSA 前处理的标准介质。",
    grades: [
      { g: "干燥级", t: "压缩空气与气体干燥", spec: "比表面 ≥330 m²/g", to: "/products#alumina" },
      { g: "PSA 级", t: "PSA/TSA 装置前置层", spec: "强度 ≥160 N", to: "/products#alumina" },
      { g: "脱氟级", t: "水处理及烷基化工艺", spec: "吸氟容量 ≥6%", to: "/products#alumina" },
    ],
  },
  {
    code: "PF / 03",
    anchor: "catalysts",
    name: "催化剂",
    img: cat,
    desc: "面向石化、环保及工业领域的负载型催化剂——γ-Al₂O₃ 载体、加氢与脱水反应配方一体化供应。",
    grades: [
      { g: "加氢催化剂", t: "选择性加氢工艺", spec: "Ni / Pd / γ-Al₂O₃", to: "/products#catalysts" },
      { g: "脱水催化剂", t: "甲醇与乙醇制烯烃路线", spec: "酸性氧化铝基", to: "/products#catalysts" },
      { g: "定制载体", t: "定制形状与负载量", spec: "三叶 · 环 · 球", to: "/products#catalysts" },
    ],
  },
];

const Products = () => (
  <section id="products" className="py-24 lg:py-32 bg-surface">
    <div className="container-wide">
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-4">— 产品体系</div>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.15]">
            三大产品平台<br />
            为工业工况量身定制
          </h2>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 flex items-end">
          <p className="text-muted-foreground leading-relaxed">
            沸石分子筛、活性氧化铝与工业催化剂——
            上海自产,内部表征,全程批次可追溯。
            欢迎浏览产品手册或针对您的具体工艺申请定制规格。
          </p>
        </div>
      </div>

      <div className="space-y-px bg-border">
        {families.map((f) => (
          <div key={f.code} className="bg-background grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-4 relative aspect-square lg:aspect-auto bg-white">
              <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="lg:col-span-8 p-8 lg:p-12 border-l border-border">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary">{f.code}</span>
                <span className="h-px flex-1 bg-border" />
                <Link
                  to={`/products#${f.anchor}`}
                  className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary"
                >
                  查看完整产品目录 →
                </Link>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3">{f.name}</h3>
              <p className="text-muted-foreground max-w-2xl leading-relaxed mb-8">{f.desc}</p>

              <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
                {f.grades.map((g) => (
                  <Link to={g.to} key={g.g} className="bg-background p-5 hover-lift block">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="font-display text-lg font-semibold">{g.g}</div>
                      <div className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
                        牌号
                      </div>
                    </div>
                    <div className="text-sm text-foreground/80 mb-3">{g.t}</div>
                    <div className="font-mono text-[11px] text-muted-foreground border-t border-border pt-3">
                      {g.spec}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
