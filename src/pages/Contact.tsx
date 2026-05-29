import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="联系我们 / 询价"
        title="提供工艺工况 · 获取定制化报价"
        intro="工程团队将在 1 个工作日内回复,提供吸附剂选型、推荐装填及参考价格。可提供俄语专线服务。"
      />

      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="eyebrow">— 总部地址</div>
              <p className="mt-3 font-display text-lg font-semibold">
                上海恒业微晶科技有限公司
              </p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                中国上海市浦东新区
                <br />
                工业园路 1888 号
                <br />
                邮编 201318
              </p>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> +86 21 5000 0000</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> sales@hengyemicron.com</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> rfq@hengyemicron.com — 俄罗斯专线</p>
              <p className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> 周一至周五 · 09:00–18:00 (北京时间)</p>
            </div>
            <div className="border border-border p-6 bg-surface">
              <div className="eyebrow">— 为加快询价响应,建议提供:</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>· 应用场景(空分、LNG、氢气 PSA、干燥…)</li>
                <li>· 进料组成及运行工况范围</li>
                <li>· 容器体积 / 所需数量</li>
                <li>· 所需文件(EAC、REACH 等)</li>
                <li>· 贸易术语及目的港</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="border border-border bg-background p-8 lg:p-10 grid gap-6 md:grid-cols-2"
            >
              <Field label="姓名" required name="name" />
              <Field label="公司名称" required name="company" />
              <Field label="邮箱" type="email" required name="email" />
              <Field label="联系电话" name="phone" />
              <Field label="国家 / 地区" required name="country" />
              <Select label="应用领域" name="application" options={[
                "空气分离 / ASU", "天然气 / LNG", "氢气 / 炼化",
                "工业干燥", "特种 / 其他"
              ]} />
              <Select label="产品系列" name="product" options={[
                "3A 分子筛", "4A 分子筛", "5A 分子筛",
                "13X 分子筛", "活性氧化铝", "催化剂"
              ]} />
              <Field label="预计数量 (kg / 吨)" name="qty" />
              <div className="md:col-span-2">
                <label className="eyebrow">— 工艺工况 / 留言 *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full border border-border bg-background p-4 focus:outline-none focus:border-primary"
                  placeholder="压力、温度、循环周期、容器体积、当前使用吸附剂、更换频次……"
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground font-mono">
                  由工程师审阅 · 1 个工作日内回复
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-xs tracking-[0.18em] text-primary-foreground hover:bg-primary-deep"
                >
                  {sent ? "已收到,感谢您的咨询" : "提交询价单"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>— {label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-background p-3 focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>— {label}</label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full border border-border bg-background p-3 focus:outline-none focus:border-primary"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
