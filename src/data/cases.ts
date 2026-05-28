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
    industry: "Air Separation Unit",
    name: "Large-Scale Air Separation Project",
    challenge:
      "60,000 Nm³/h cryogenic ASU front-end purification, removing H₂O and CO₂ down to sub-ppm level prior to the cold box.",
    solution:
      "Layered loading of activated alumina and 13X-APG molecular sieve for sequential dehydration and decarbonation.",
    family: "Activated Alumina · 13X-APG",
    benefit: "Stable < 0.1 ppm CO₂ slip across full TSA cycle.",
    image: asu,
    overview:
      "Front-end purification unit (FEPU) supplying a large-scale cryogenic air separation plant producing oxygen, nitrogen and argon for a steel-making complex. The TSA system removes residual water and carbon dioxide from compressed air before it enters the cold box, where any breakthrough would cause solid CO₂ deposition and plant shutdown.",
    industrialChallenge: [
      "Inlet air: 5.5 barg, 10–15 °C, water-saturated after chilling.",
      "CO₂ load: 380–420 ppm depending on ambient and plant flares.",
      "Required outlet: H₂O < 0.1 ppm, CO₂ < 0.25 ppm at end of adsorption.",
      "8-hour TSA cycle, regeneration with waste N₂ at 180–200 °C.",
      "Mechanical stability over 10+ years and 10,000+ cycles is mandatory.",
    ],
    processFlow: [
      { step: "01", label: "Air Compression", detail: "Multi-stage compressor delivers 5.5 barg process air." },
      { step: "02", label: "Direct Contact Aftercooler", detail: "Cools and saturates air to 10–15 °C." },
      { step: "03", label: "Adsorber Vessel A / B", detail: "Twin-bed TSA with bottom alumina layer, top 13X layer." },
      { step: "04", label: "Regeneration", detail: "Hot waste N₂ desorbs H₂O and CO₂ counter-current." },
      { step: "05", label: "Cold Box Feed", detail: "Dry CO₂-free air enters main heat exchanger." },
    ],
    adsorbentSolution: [
      { product: "HXA-201 Activated Alumina", role: "Bottom layer — bulk water removal", spec: "3–5 mm bead · BET ≥ 320 m²/g · Crush ≥ 90 N" },
      { product: "HXZ-13X APG", role: "Top layer — CO₂ removal", spec: "1.6–2.5 mm bead · CO₂ cap. ≥ 17.5 wt% · Attrition ≤ 0.2%" },
    ],
    technicalBenefits: [
      { metric: "CO₂ slip", value: "< 0.1 ppm", note: "Measured at end of adsorption step" },
      { metric: "Cycle stability", value: "10,000+ cycles", note: "Validated on parallel reference plants" },
      { metric: "Pressure drop", value: "− 12 %", note: "vs. previous random-loaded bed" },
      { metric: "Service life", value: "≥ 8 years", note: "Under design TSA cycle conditions" },
    ],
    downloads: ["TDS — HXA-201 Activated Alumina", "TDS — HXZ-13X APG", "Loading Procedure (EN / RU)", "COA Sample Batch"],
  },
  {
    slug: "lng-natural-gas",
    num: "02",
    industry: "Natural Gas / LNG",
    name: "Natural Gas & LNG Drying Project",
    challenge:
      "Dehydration of feed gas upstream of a 1.5 MTPA LNG liquefaction train to prevent ice and hydrate formation in the cryogenic exchanger.",
    solution:
      "4A-DG molecular sieve in a three-bed TSA cycle, sized for 24-hour adsorption and 12-hour heating regeneration.",
    family: "4A-DG · 13X-HP",
    benefit: "Outlet H₂O < 0.1 ppmv sustained over full design cycle.",
    image: lng,
    overview:
      "Three-bed TSA dehydration unit serving a mid-scale LNG liquefaction train. The system removes water from sweetened natural gas before the unit's cold section, where the dew point requirement is set by the coldest exchanger temperature near −160 °C.",
    industrialChallenge: [
      "Feed: 65 barg, 35 °C, water-saturated after amine treatment.",
      "Heavy hydrocarbon co-adsorption risk on aromatic-rich feeds.",
      "Outlet water specification < 0.1 ppmv with safety margin.",
      "Mechanical resistance to liquid carry-over during upset conditions.",
    ],
    processFlow: [
      { step: "01", label: "Inlet Separator", detail: "Removes free liquids and aerosols from sweet gas." },
      { step: "02", label: "Adsorber A / B / C", detail: "Three-vessel staggered TSA — adsorb / heat / cool." },
      { step: "03", label: "Regeneration Gas Heater", detail: "Sliding-stream regen gas heated to 280 °C." },
      { step: "04", label: "Regen Gas Cooler / KO", detail: "Water knocked out and returned to amine unit." },
      { step: "05", label: "Dry Gas to Cold Box", detail: "Dehydrated gas routed to main cryogenic exchanger." },
    ],
    adsorbentSolution: [
      { product: "HXZ-4A DG", role: "Primary dehydration layer", spec: "1.6–2.5 / 3–5 mm bead · H₂O cap. ≥ 22 wt% · Crush ≥ 80 N" },
      { product: "HXZ-13X HP", role: "Top guard layer — heavy HC / mercaptan trim", spec: "3–5 mm bead · BET ≥ 600 m²/g" },
    ],
    technicalBenefits: [
      { metric: "Outlet H₂O", value: "< 0.1 ppmv", note: "Validated by online moisture analyzer" },
      { metric: "Regen energy", value: "− 8 %", note: "vs. baseline standard 4A grade" },
      { metric: "HC carry-over recovery", value: "100 %", note: "Demonstrated through 3 upset events" },
      { metric: "Lifetime", value: "4–5 years", note: "Per design cycle and feed quality" },
    ],
    downloads: ["TDS — HXZ-4A DG", "TDS — HXZ-13X HP", "TSA Sizing Note", "EAC Conformity Declaration"],
  },
  {
    slug: "psa-oxygen",
    num: "03",
    industry: "PSA Oxygen Generation",
    name: "PSA Oxygen System Project",
    challenge:
      "On-site oxygen supply for an EAF steel plant — 600 Nm³/h, 93 ± 2 % O₂ purity from atmospheric air.",
    solution:
      "Lithium-exchanged X-type oxygen-selective molecular sieve (HXO-LiX) optimized for fast cycle VPSA operation.",
    family: "Oxygen PSA (LiX)",
    benefit: "Stable 93 % O₂ purity with 6–8 % lower specific energy.",
    image: oxygen,
    overview:
      "Two-bed vacuum-pressure swing adsorption (VPSA) oxygen unit. Adsorbent selectively retains nitrogen, releasing oxygen-rich product. Performance is dominated by adsorbent kinetics, particle size distribution and dust generation in fast-cycle operation.",
    industrialChallenge: [
      "Short cycle time (~ 30 s) requires fast mass transfer.",
      "Dust generation must stay low to protect blowers and valves.",
      "Stable purity ±0.5 % across ambient temperature swings.",
      "Specific energy target ≤ 0.36 kWh / Nm³ O₂.",
    ],
    processFlow: [
      { step: "01", label: "Air Blower", detail: "Ambient air drawn through filter to ~ 0.5 barg." },
      { step: "02", label: "Adsorber A / B", detail: "Fast PSA cycle — N₂ adsorbed, O₂ released as product." },
      { step: "03", label: "Pressure Equalization", detail: "Energy recovery between vessels." },
      { step: "04", label: "Vacuum Regeneration", detail: "Vacuum pump desorbs N₂ to atmosphere." },
      { step: "05", label: "Oxygen Buffer", detail: "Product surge tank delivers steady flow to user." },
    ],
    adsorbentSolution: [
      { product: "HXO-LiX Oxygen Sieve", role: "N₂-selective primary adsorbent", spec: "0.4–0.8 mm bead · N₂ cap. ≥ 19 Nml/g · Attrition ≤ 0.1%" },
    ],
    technicalBenefits: [
      { metric: "O₂ purity", value: "93 ± 2 %", note: "Across full ambient range" },
      { metric: "Specific energy", value: "≤ 0.34 kWh/Nm³", note: "Measured at design point" },
      { metric: "Dust attrition", value: "≤ 0.1 wt%", note: "After 5,000 h continuous operation" },
      { metric: "Bed life", value: "5–7 years", note: "Per VPSA cycle profile" },
    ],
    downloads: ["TDS — HXO-LiX", "VPSA Loading Guideline", "Performance Benchmark Report"],
  },
  {
    slug: "hydrogen-purification",
    num: "04",
    industry: "Hydrogen / Refining",
    name: "Hydrogen Purification / Refining Project",
    challenge:
      "PSA hydrogen purification of SMR off-gas to 99.999 % H₂, recovering high-purity hydrogen for hydrotreating units.",
    solution:
      "Multi-layer adsorbent train — activated alumina, activated carbon, 5A and CaX — engineered for impurity-specific removal.",
    family: "Activated Alumina · 5A · 13X · Carbon",
    benefit: "Recovery ≥ 88 % with H₂ purity 99.999 %.",
    image: hydrogen,
    overview:
      "10-bed hydrogen PSA on the SMR off-gas of a refinery hydrogen plant. The adsorbent train removes H₂O, CO₂, CO, CH₄ and N₂ in sequence. Layer order and ratios are tuned to feed composition and recovery target.",
    industrialChallenge: [
      "Feed: 22 barg, 40 °C, H₂ ~ 76 %, balance CO₂ / CH₄ / CO / N₂.",
      "Strict CO < 0.2 ppm requirement on hydrogen product.",
      "Recovery target ≥ 88 % to stabilize plant hydrogen balance.",
      "Short cycle, high mechanical stress on adsorbent particles.",
    ],
    processFlow: [
      { step: "01", label: "Feed Conditioning", detail: "SMR off-gas cooled and knock-out separated." },
      { step: "02", label: "PSA Train (10 vessels)", detail: "Layered adsorbent stages remove impurities sequentially." },
      { step: "03", label: "Pressure Equalizations", detail: "Multiple equalizations maximize recovery." },
      { step: "04", label: "Tail Gas to Burner", detail: "Desorbed impurities sent to SMR burner as fuel." },
      { step: "05", label: "H₂ Product Header", detail: "99.999 % H₂ routed to refinery network." },
    ],
    adsorbentSolution: [
      { product: "HXA-201 Activated Alumina", role: "Bulk water removal (bottom)", spec: "3–5 mm bead" },
      { product: "HXC-PSA Activated Carbon", role: "CO₂ / heavy HC removal", spec: "1.5–2.5 mm pellet" },
      { product: "HXZ-5A PSA", role: "CO / CH₄ removal", spec: "1.6–2.5 mm bead · Crush ≥ 80 N" },
      { product: "HXZ-CaX PSA", role: "N₂ polishing layer (top)", spec: "1.6–2.5 mm bead" },
    ],
    technicalBenefits: [
      { metric: "H₂ purity", value: "99.999 %", note: "Continuous online H₂ analyzer" },
      { metric: "Recovery", value: "≥ 88 %", note: "At design feed composition" },
      { metric: "Cycle reliability", value: "> 99.5 %", note: "Annual availability" },
      { metric: "Service life", value: "6–8 years", note: "Per layer rotation strategy" },
    ],
    downloads: ["PSA Multi-Layer Loading Diagram", "TDS — HXZ-5A PSA", "TDS — HXC PSA Carbon"],
  },
  {
    slug: "industrial-drying",
    num: "05",
    industry: "Petrochemical / Industrial Drying",
    name: "Industrial Drying & Petrochemical Protection Project",
    challenge:
      "Olefin and cracked-gas dehydration in a petrochemical complex — protecting downstream catalysts and cryogenic equipment from moisture poisoning.",
    solution:
      "3A molecular sieve in fixed-bed dryers for ethylene / propylene drying; activated alumina guard beds for HCl and chloride protection.",
    family: "3A Olefin Drying · Activated Alumina",
    benefit: "Outlet H₂O < 1 ppm; co-adsorption of olefins fully suppressed.",
    image: drying,
    overview:
      "Olefin drying and chloride guard beds in a 1 MTPA ethylene complex. The 3A molecular sieve is selected for its small pore size that excludes ethylene and propylene molecules, preventing polymerization and coke formation that plague 4A grades.",
    industrialChallenge: [
      "Strict prohibition on olefin co-adsorption — no polymerization allowed.",
      "Long cycle times (12–24 h) with mild regeneration.",
      "Trace chloride and oxygenate slip threatens downstream catalysts.",
      "Mechanical strength under frequent thermal cycling.",
    ],
    processFlow: [
      { step: "01", label: "Cracked Gas Cooling", detail: "Quench tower upstream removes bulk water." },
      { step: "02", label: "Caustic / Wash Tower", detail: "Acid gas removal before dryers." },
      { step: "03", label: "Dryer A / B", detail: "Twin-bed 3A TSA dehydration." },
      { step: "04", label: "Chloride Guard Bed", detail: "Activated alumina protects downstream catalyst." },
      { step: "05", label: "Cold Box / Reactor Feed", detail: "Dry olefin stream to cryogenic separation." },
    ],
    adsorbentSolution: [
      { product: "HXZ-3A Olefin Grade", role: "Olefin-safe dehydration", spec: "1.6–2.5 / 3–5 mm bead · No co-ads of C₂= / C₃=" },
      { product: "HXA-CL Chloride Guard", role: "Promoted alumina for HCl removal", spec: "3–5 mm bead · Cl cap. ≥ 12 wt%" },
    ],
    technicalBenefits: [
      { metric: "Outlet H₂O", value: "< 1 ppm", note: "Sustained across full TSA cycle" },
      { metric: "Olefin loss", value: "< 0.05 %", note: "No polymerization detected post-cycle" },
      { metric: "Chloride slip", value: "< 0.1 ppm", note: "Downstream catalyst protected" },
      { metric: "Service life", value: "3–4 years", note: "Per design cycle / feed quality" },
    ],
    downloads: ["TDS — HXZ-3A Olefin Grade", "TDS — HXA-CL Chloride Guard", "Loading & Activation Procedure"],
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
