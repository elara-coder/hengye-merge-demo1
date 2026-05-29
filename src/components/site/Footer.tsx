import { Link } from "react-router-dom";

const cols = [
  {
    title: "网站导航",
    items: [
      { label: "应用领域", to: "/applications" },
      { label: "产品中心", to: "/products" },
      { label: "工程能力", to: "/engineering" },
      { label: "技术支持", to: "/support" },
      { label: "关于我们", to: "/about" },
      { label: "联系我们", to: "/contact" },
    ],
  },
  {
    title: "产品中心",
    items: [
      { label: "3A 分子筛", to: "/products#3a" },
      { label: "4A 分子筛", to: "/products#4a" },
      { label: "5A 分子筛", to: "/products#5a" },
      { label: "13X 分子筛", to: "/products#13x" },
      { label: "活性氧化铝", to: "/products#alumina" },
      { label: "催化剂", to: "/products#catalysts" },
    ],
  },
  {
    title: "应用领域",
    items: [
      { label: "空分 / 制氧", to: "/applications#asu" },
      { label: "天然气 / LNG", to: "/applications#lng" },
      { label: "氢气与炼化", to: "/applications#h2" },
      { label: "工业干燥", to: "/applications#drying" },
      { label: "特种应用", to: "/applications#specialty" },
    ],
  },
  {
    title: "物流与出口",
    items: [
      { label: "FOB 上海 / 宁波", to: "/contact" },
      { label: "CIF / DAP / DDP 条款", to: "/contact" },
      { label: "海运及中欧班列", to: "/contact" },
      { label: "25kg 袋装 · 吨袋", to: "/contact" },
      { label: "钢桶包装", to: "/contact" },
      { label: "EAC / REACH 文件", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer id="contact" className="bg-surface-dark text-white">
    <div className="container-wide py-20">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
              <span className="font-display text-xl font-bold leading-none">恒</span>
            </div>
            <div>
              <div className="font-display text-base font-bold tracking-tight">恒业微晶 HENGYE</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                工业吸附剂 · 始于 1998
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-md">
            上海恒业微晶科技有限公司专业生产沸石分子筛、活性氧化铝及工业催化剂,
            为全球工业气体净化领域提供吸附材料,服务来自 60 余个国家的采购与工艺团队。
          </p>
          <div className="space-y-3 font-mono text-[11px] tracking-[0.15em] text-white/60">
            <div><span className="text-primary">↳</span> 中国上海市浦东新区</div>
            <div><span className="text-primary">↳</span> sales@hengyemicron.com</div>
            <div><span className="text-primary">↳</span> rfq@hengyemicron.com — 俄罗斯专线</div>
            <div><span className="text-primary">↳</span> +86 21 5000 0000</div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-[10px] tracking-[0.2em] text-primary mb-5">
                {c.title}
              </div>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="text-[13px] text-white/70 hover:text-white transition-colors">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] tracking-[0.2em] text-white/40">
        <div>© 1998–{new Date().getFullYear()} 上海恒业微晶科技有限公司 · 版权所有</div>
        <div className="flex gap-6">
          <span>ISO 9001 · 14001 · REACH · EAC</span>
          <span>中文 / EN / RU</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
