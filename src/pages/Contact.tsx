import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/Primitives";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact / RFQ"
        title="Send process conditions — receive engineered quotation."
        intro="Our engineering team responds within one business day with adsorbent selection, recommended loading and pricing. RU desk available in Russian."
      />

      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="eyebrow">— Headquarters</div>
              <p className="mt-3 font-display text-lg font-semibold">
                Shanghai Hengye Micron Co., Ltd.
              </p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                No. 1888 Industrial Park Road,
                <br />
                Pudong New District,
                <br />
                Shanghai 201318, China
              </p>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> +86 21 5000 0000</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> sales@hengyemicron.com</p>
              <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> rfq@hengyemicron.com — RU desk</p>
              <p className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> Mon–Fri · 09:00–18:00 CST</p>
            </div>
            <div className="border border-border p-6 bg-surface">
              <div className="eyebrow">— For a faster RFQ, include:</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>· Application (ASU, LNG, H₂ PSA, drying...)</li>
                <li>· Feed composition & operating envelope</li>
                <li>· Vessel volume / required quantity</li>
                <li>· Required documentation (EAC, REACH, etc.)</li>
                <li>· Incoterms & destination port</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="border border-border bg-background p-8 lg:p-10 grid gap-6 md:grid-cols-2"
            >
              <Field label="Full name" required name="name" />
              <Field label="Company" required name="company" />
              <Field label="Email" type="email" required name="email" />
              <Field label="Phone" name="phone" />
              <Field label="Country" required name="country" />
              <Select label="Application" name="application" options={[
                "Air Separation / ASU", "Natural Gas / LNG", "Hydrogen / Refining",
                "Industrial Drying", "Specialty / Other"
              ]} />
              <Select label="Product family" name="product" options={[
                "Molecular Sieve 3A", "Molecular Sieve 4A", "Molecular Sieve 5A",
                "Molecular Sieve 13X", "Activated Alumina", "Catalyst"
              ]} />
              <Field label="Estimated quantity (kg / t)" name="qty" />
              <div className="md:col-span-2">
                <label className="eyebrow">— Process conditions / message *</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full border border-border bg-background p-4 focus:outline-none focus:border-primary"
                  placeholder="Pressure, temperature, cycle time, vessel volume, current adsorbent, replacement frequency..."
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground font-mono">
                  Submissions reviewed by an engineer · response within 1 business day.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground hover:bg-primary-deep"
                >
                  {sent ? "Received — thank you" : "Submit RFQ"}
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
