export type WorkType = "studio" | "capital";

export type SelectedWorkItem = {
  id: string;
  index: string;
  name: string;
  sector: string;
  type: WorkType;
  desc: string;
  metric: string;
  expand: string;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    id: "prospex",
    index: "01",
    name: "Prospex",
    sector: "B2B SaaS — Capital",
    type: "capital",
    desc: "Go-to-market roadmap, investor narrative, and corporate structuring.",
    metric: "$600K seed closed",
    expand:
      "Prospex came to us pre-seed with a strong product and no investor-ready narrative. We rebuilt the data room, sharpened the raise story, and ran the process end to end through close.",
  },
  {
    id: "terra",
    index: "02",
    name: "The TERRA Initiative",
    sector: "Regenerative infrastructure — Capital",
    type: "capital",
    desc: "Lead capital advisory and investment memorandum for a regional ecosystem fund.",
    metric: "$200M architecture",
    expand:
      "A multi-stakeholder regeneration vehicle needed an institutional-grade memorandum before it could approach sovereign and family-office capital. We architected the stack and the document.",
  },
  {
    id: "solaryn",
    index: "03",
    name: "Solaryn",
    sector: "Deep tech — Capital",
    type: "capital",
    desc: "Fractional CFO and governance through a sensitive institutional raise.",
    metric: "$1.3M closed",
    expand:
      "Operating under national-security scrutiny, Solaryn needed governance that could survive institutional diligence. We ran the finance function through close.",
  },
  {
    id: "ageless",
    index: "04",
    name: "Ageless Media Group",
    sector: "Wellness / Fintech — Studio",
    type: "studio",
    desc: "Fractional CEO, professionalizing a micro-VC's investment vehicle.",
    metric: "Ongoing",
    expand:
      "We stepped in as fractional CEO to bring institutional operating discipline to a founder-led investment vehicle, from reporting cadence to LP communication.",
  },
  {
    id: "rippling",
    index: "05",
    name: "Rippling Nature",
    sector: "Sustainability — Studio",
    type: "studio",
    desc: "Strategic finance from early pilots through city-scale partnership.",
    metric: "Ongoing",
    expand:
      "Co-built alongside the founding team from bayou-scale pilots, we've stayed on as fractional finance leadership as the venture negotiates municipal-scale partnerships.",
  },
];
