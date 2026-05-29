import asu from "@/assets/app-air-separation.jpg";
import lng from "@/assets/lng-terminal.jpg";
import hydrogen from "@/assets/app-hydrogen.jpg";
import refinery from "@/assets/refinery.jpg";
import drying from "@/assets/app-drying.jpg";
import oxygen from "@/assets/asu.jpg";

export type CaseStudy = {
  slug: string;
  num: string;
  industry: string;
  name: string;
  challenge: string;
  solution: string;
  family: string;
  benefit: string;
  image: string;
  overview: string;
  industrialChallenge: string[];
  processFlow: { step: string; label: string; detail: string }[];
  adsorbentSolution: {
    product: string;
    role: string;
    spec: string;
  }[];
  technicalBenefits: { metric: string; value: string; note: string }[];
  downloads: string[];
};

export const CASES: CaseStudy[] = [
  {
    slug: "air-separation",
    num: "01",
    industry: "空气分离装置",
    name: "大型空气分离项目",
    challenge:
      "60,000 Nm³/h 深冷空分前端净化,在进入冷箱前将 H₂O 与 CO₂ 脱除至 ppm 以下水平。",
    solution:
      "活性氧化铝与 13X-APG 分子筛分层装填,依次完成脱水与脱碳。",
    family: "活性氧化铝 · 13X-APG",
    benefit: "全 TSA 循环 CO₂ 残余稳定低于 0.1 ppm。",
    image: asu,
    overview:
      "服务大型深冷空分装置的前端净化单元 (FEPU),为钢铁联合企业提供氧气、氮气与氩气。TSA 系统在压缩空气进入冷箱前脱除残余水分及二氧化碳——任何穿透都会导致固态 CO₂ 沉积并造成装置停车。",
    industrialChallenge: [
      "进料空气:5.5 barg,10–15 °C,冷却后水饱和。",
      "CO₂ 负荷:380–420 ppm,随环境与厂区放空波动。",
      "出口要求:吸附末期 H₂O < 0.1 ppm,CO₂ < 0.25 ppm。",
      "TSA 循环 8 小时,使用 180–200 °C 废氮再生。",
      "需保证 10 年以上、10,000+ 次循环的机械稳定性。",
    ],
    processFlow: [
      { step: "01", label: "空气压缩", detail: "多级压缩机提供 5.5 barg 工艺空气。" },
      { step: "02", label: "直接接触冷却器", detail: "将空气冷却并饱和至 10–15 °C。" },
      { step: "03", label: "A / B 吸附塔", detail: "双床 TSA,下层活性氧化铝,上层 13X。" },
      { step: "04", label: "再生", detail: "热废氮逆流解吸 H₂O 与 CO₂。" },
      { step: "05", label: "冷箱进料", detail: "干燥脱碳空气进入主换热器。" },
    ],
    adsorbentSolution: [
      { product: "HXA-201 活性氧化铝", role: "下层 — 脱水主吸附", spec: "3–5 mm 球 · BET ≥ 320 m²/g · 强度 ≥ 90 N" },
      { product: "HXZ-13X APG", role: "上层 — 脱除 CO₂", spec: "1.6–2.5 mm 球 · CO₂ 容量 ≥ 17.5 wt% · 磨耗 ≤ 0.2%" },
    ],
    technicalBenefits: [
      { metric: "CO₂ 残余", value: "< 0.1 ppm", note: "于吸附末期实测" },
      { metric: "循环稳定性", value: "10,000+ 次", note: "已在多个参考装置验证" },
      { metric: "压降", value: "− 12 %", note: "较随机装填床显著降低" },
      { metric: "使用寿命", value: "≥ 8 年", note: "在设计 TSA 工况下" },
    ],
    downloads: ["TDS — HXA-201 活性氧化铝", "TDS — HXZ-13X APG", "装填规程 (中 / 俄)", "样品批 COA"],
  },
  {
    slug: "lng-natural-gas",
    num: "02",
    industry: "天然气 / LNG",
    name: "天然气与 LNG 干燥项目",
    challenge:
      "1.5 MTPA LNG 液化装置上游进料气深度脱水,防止低温换热器结冰及水合物生成。",
    solution:
      "三床 TSA 配 4A-DG 分子筛,设计 24 小时吸附与 12 小时再生循环。",
    family: "4A-DG · 13X-HP",
    benefit: "全设计循环周期内出口 H₂O 持续 < 0.1 ppmv。",
    image: lng,
    overview:
      "服务中型 LNG 液化装置的三床 TSA 脱水单元。系统在冷段(最冷换热器接近 −160 °C)前脱除胺洗后的天然气中的水分。",
    industrialChallenge: [
      "进料:65 barg,35 °C,胺洗后水饱和。",
      "芳烃含量较高时存在重烃共吸附风险。",
      "出口含水规格 < 0.1 ppmv,需保有安全裕度。",
      "工艺扰动时具备液体冲击的机械抗性。",
    ],
    processFlow: [
      { step: "01", label: "入口分离器", detail: "脱除净化气中的自由液体与气溶胶。" },
      { step: "02", label: "A / B / C 三吸附塔", detail: "三塔错峰 TSA — 吸附 / 加热 / 冷却。" },
      { step: "03", label: "再生气加热器", detail: "滑流再生气加热至 280 °C。" },
      { step: "04", label: "再生气冷却器 / 分液", detail: "冷凝水回收至胺洗单元。" },
      { step: "05", label: "干气至冷箱", detail: "干燥气进入主低温换热器。" },
    ],
    adsorbentSolution: [
      { product: "HXZ-4A DG", role: "主脱水层", spec: "1.6–2.5 / 3–5 mm 球 · 吸水率 ≥ 22 wt% · 强度 ≥ 80 N" },
      { product: "HXZ-13X HP", role: "上层保护 — 脱重烃 / 硫醇", spec: "3–5 mm 球 · BET ≥ 600 m²/g" },
    ],
    technicalBenefits: [
      { metric: "出口 H₂O", value: "< 0.1 ppmv", note: "在线水分仪表确认" },
      { metric: "再生能耗", value: "− 8 %", note: "较标准 4A 基准下降" },
      { metric: "重烃冲击恢复率", value: "100 %", note: "已通过 3 次扰动验证" },
      { metric: "使用寿命", value: "4–5 年", note: "在设计循环与进料质量下" },
    ],
    downloads: ["TDS — HXZ-4A DG", "TDS — HXZ-13X HP", "TSA 选型说明", "EAC 符合性声明"],
  },
  {
    slug: "psa-oxygen",
    num: "03",
    industry: "PSA 制氧",
    name: "PSA 制氧系统项目",
    challenge:
      "电弧炉钢厂现场制氧 —— 600 Nm³/h,纯度 93 ± 2 % O₂,来源为大气。",
    solution:
      "锂交换 X 型制氧专用分子筛 (HXO-LiX),针对快速 VPSA 循环优化。",
    family: "制氧 PSA (LiX)",
    benefit: "纯度 93 % O₂ 稳定运行,比能耗降低 6–8 %。",
    image: oxygen,
    overview:
      "双塔真空变压吸附 (VPSA) 制氧装置。吸附剂选择性截留氮气,释放富氧产品。性能由吸附剂动力学、粒径分布及快速循环工况下的粉化情况决定。",
    industrialChallenge: [
      "循环短(约 30 s),要求快速传质。",
      "粉化量需控制以保护风机与阀门。",
      "在环境温度变化下纯度波动 ±0.5 %。",
      "目标比能耗 ≤ 0.36 kWh / Nm³ O₂。",
    ],
    processFlow: [
      { step: "01", label: "空气鼓风机", detail: "环境空气经过滤至 ~ 0.5 barg。" },
      { step: "02", label: "A / B 吸附塔", detail: "快速 PSA 循环 — 吸附 N₂,释放 O₂ 产品。" },
      { step: "03", label: "均压回收", detail: "塔间能量回收。" },
      { step: "04", label: "真空再生", detail: "真空泵将 N₂ 解吸至大气。" },
      { step: "05", label: "氧气缓冲", detail: "产品缓冲罐稳定输出。" },
    ],
    adsorbentSolution: [
      { product: "HXO-LiX 制氧分子筛", role: "氮选择性主吸附剂", spec: "0.4–0.8 mm 球 · N₂ 容量 ≥ 19 Nml/g · 磨耗 ≤ 0.1%" },
    ],
    technicalBenefits: [
      { metric: "O₂ 纯度", value: "93 ± 2 %", note: "全环境温度范围" },
      { metric: "比能耗", value: "≤ 0.34 kWh/Nm³", note: "设计工况实测" },
      { metric: "粉化磨耗", value: "≤ 0.1 wt%", note: "连续运行 5,000 h 后" },
      { metric: "床层寿命", value: "5–7 年", note: "依 VPSA 循环工况" },
    ],
    downloads: ["TDS — HXO-LiX", "VPSA 装填指南", "性能对比报告"],
  },
  {
    slug: "hydrogen-purification",
    num: "04",
    industry: "氢气 / 炼化",
    name: "氢气提纯 / 炼化项目",
    challenge:
      "SMR 尾气 PSA 提纯至 99.999 % H₂,为加氢装置回收高纯氢气。",
    solution:
      "多层吸附剂方案 —— 活性氧化铝、活性炭、5A 与 CaX,针对各类杂质精确脱除。",
    family: "活性氧化铝 · 5A · 13X · 活性炭",
    benefit: "氢气回收率 ≥ 88 %,纯度 99.999 %。",
    image: hydrogen,
    overview:
      "炼厂制氢装置 SMR 尾气上的 10 塔氢气 PSA。吸附剂依次脱除 H₂O、CO₂、CO、CH₄ 及 N₂。层序与比例根据进料组成与回收率目标优化。",
    industrialChallenge: [
      "进料:22 barg,40 °C,H₂ ~ 76 %,余量为 CO₂ / CH₄ / CO / N₂。",
      "氢产品 CO 严格 < 0.2 ppm。",
      "回收率目标 ≥ 88 %,保证装置氢平衡。",
      "短循环 · 高机械应力下颗粒抗压要求高。",
    ],
    processFlow: [
      { step: "01", label: "进料调质", detail: "SMR 尾气冷却并分液。" },
      { step: "02", label: "PSA 装置 (10 塔)", detail: "分层吸附依次脱除杂质。" },
      { step: "03", label: "多次均压", detail: "提升回收率。" },
      { step: "04", label: "尾气送焚烧炉", detail: "解吸杂质作为 SMR 燃料。" },
      { step: "05", label: "氢产品集管", detail: "99.999 % H₂ 送入炼厂管网。" },
    ],
    adsorbentSolution: [
      { product: "HXA-201 活性氧化铝", role: "脱水主层 (底部)", spec: "3–5 mm 球" },
      { product: "HXC-PSA 活性炭", role: "脱 CO₂ / 重烃", spec: "1.5–2.5 mm 条" },
      { product: "HXZ-5A PSA", role: "脱 CO / CH₄", spec: "1.6–2.5 mm 球 · 强度 ≥ 80 N" },
      { product: "HXZ-CaX PSA", role: "顶层 N₂ 精脱", spec: "1.6–2.5 mm 球" },
    ],
    technicalBenefits: [
      { metric: "H₂ 纯度", value: "99.999 %", note: "在线氢分析仪连续监测" },
      { metric: "回收率", value: "≥ 88 %", note: "在设计进料下" },
      { metric: "循环可靠性", value: "> 99.5 %", note: "年开工率" },
      { metric: "使用寿命", value: "6–8 年", note: "依层位轮换策略" },
    ],
    downloads: ["PSA 多层装填示意图", "TDS — HXZ-5A PSA", "TDS — HXC PSA 活性炭"],
  },
  {
    slug: "industrial-drying",
    num: "05",
    industry: "石化 / 工业干燥",
    name: "工业干燥及石化保护项目",
    challenge:
      "石化联合装置烯烃与裂解气脱水 —— 保护下游催化剂与深冷设备免受水分污染。",
    solution:
      "采用 3A 分子筛固定床干燥乙烯 / 丙烯;活性氧化铝保护床用于 HCl 及氯化物防护。",
    family: "3A 烯烃干燥 · 活性氧化铝",
    benefit: "出口 H₂O < 1 ppm;烯烃共吸附被完全抑制。",
    image: drying,
    overview:
      "1 MTPA 乙烯联合装置内的烯烃干燥与氯化物保护床。3A 分子筛凭借小孔径排除乙烯与丙烯分子,避免在 4A 牌号中常见的聚合与积碳问题。",
    industrialChallenge: [
      "严禁烯烃共吸附 — 不允许任何聚合反应。",
      "长循环 (12–24 h),再生需温和。",
      "微量氯化物与含氧化合物威胁下游催化剂。",
      "频繁热循环下需保持机械强度。",
    ],
    processFlow: [
      { step: "01", label: "裂解气冷却", detail: "上游急冷塔脱除主体水分。" },
      { step: "02", label: "碱洗 / 水洗塔", detail: "干燥前脱酸性气。" },
      { step: "03", label: "A / B 干燥塔", detail: "双床 3A TSA 脱水。" },
      { step: "04", label: "氯化物保护床", detail: "活性氧化铝保护下游催化剂。" },
      { step: "05", label: "进入冷箱 / 反应器", detail: "干燥烯烃送入深冷分离。" },
    ],
    adsorbentSolution: [
      { product: "HXZ-3A 烯烃级", role: "烯烃安全脱水", spec: "1.6–2.5 / 3–5 mm 球 · 无 C₂= / C₃= 共吸附" },
      { product: "HXA-CL 氯化物保护剂", role: "改性氧化铝脱 HCl", spec: "3–5 mm 球 · 吸氯容量 ≥ 12 wt%" },
    ],
    technicalBenefits: [
      { metric: "出口 H₂O", value: "< 1 ppm", note: "全 TSA 循环持续稳定" },
      { metric: "烯烃损失", value: "< 0.05 %", note: "循环后未检测到聚合" },
      { metric: "氯化物滑漏", value: "< 0.1 ppm", note: "下游催化剂得到保护" },
      { metric: "使用寿命", value: "3–4 年", note: "依设计循环与进料质量" },
    ],
    downloads: ["TDS — HXZ-3A 烯烃级", "TDS — HXA-CL 氯化物保护剂", "装填与活化规程"],
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
