export type WorkType = "studio" | "capital";

export type Logo = {
  src: string;
  /** Intrinsic size, so the tile never scales a mark past its source resolution. */
  width: number;
  height: number;
  /** Wordmarks are sized off the tile width, square marks off its height. */
  shape: "wide" | "mark";
};

export type MandateImage = {
  src: string;
  alt: string;
};

export type SelectedWorkItem = {
  id: string;
  name: string;
  desc: string;
  type: WorkType;
  sector: string;
  stage: string;
  status: string;
  year: string;
  /** Longer "what we did" copy revealed by the card's dropdown. */
  expand: string;
  image: MandateImage;
  logo?: Logo;
  websiteUrl?: string;
};

export const selectedWork: SelectedWorkItem[] = [
  {
    id: "prospex",
    name: "Prospex",
    desc: "Go-to-market roadmap, investor narrative, and corporate structuring.",
    type: "capital",
    sector: "B2B SaaS",
    stage: "$600K seed",
    status: "Current",
    year: "2024",
    image: {
      src: "/photos/mandates/prospex.jpg",
      alt: "Looking up through a grid of downtown towers",
    },
    logo: {
      src: "/logos/prospex-clean.png",
      width: 192,
      height: 90,
      shape: "wide",
    },
    expand:
      "Prospex came to us pre-seed with a strong product and no investor-ready narrative. We rebuilt the data room, sharpened the raise story, and ran the process end to end through close. Ongoing work covers corporate structuring and executive performance coaching.",
  },
  {
    id: "terra",
    name: "The TERRA Initiative",
    desc: "Lead capital advisory and investment memorandum for a regional ecosystem fund.",
    type: "capital",
    sector: "Regen",
    stage: "$200M architecture",
    status: "Current",
    year: "2023",
    image: {
      src: "/photos/mandates/terra.jpg",
      alt: "Sunlit path through a dense forest",
    },
    logo: {
      src: "/logos/terra-initiative-clean.png",
      width: 377,
      height: 136,
      shape: "wide",
    },
    expand:
      "A multi-stakeholder regeneration vehicle needed an institutional-grade memorandum before it could approach sovereign and family-office capital. We built the $200M financial architecture and now manage institutional investor relations as the program scales across the region.",
  },
  {
    id: "isa-energy",
    name: "ISA Energy",
    desc: "Capital readiness and transaction advisory for a quantum energy pioneer.",
    type: "capital",
    sector: "Deep tech",
    stage: "Institutional",
    status: "Current",
    year: "2024",
    image: {
      src: "/photos/mandates/isa-energy.jpg",
      alt: "High-voltage pylons receding across a plain at dusk",
    },
    logo: {
      src: "/logos/isa-energy-clean.png",
      width: 176,
      height: 42,
      shape: "wide",
    },
    expand:
      "We built the financial model and strategic plan for a high-stakes institutional funding cycle, preparing a frontier energy technology for investors who expect rigor.",
  },
  {
    id: "solaryn",
    name: "Solaryn",
    desc: "Fractional CFO and governance through a sensitive institutional raise.",
    type: "capital",
    sector: "Deep tech",
    stage: "$1.3M closed",
    status: "Current",
    year: "2023",
    image: {
      src: "/photos/mandates/solaryn.jpg",
      alt: "Laboratory equipment on a research bench",
    },
    logo: {
      src: "/logos/solaryn.svg",
      width: 128,
      height: 128,
      shape: "mark",
    },
    expand:
      "Operating under national-security scrutiny, Solaryn needed governance that could survive institutional diligence. We ran the finance function through the close of $1.3M and established the corporate controls required for defense contracts.",
  },
  {
    id: "ageless",
    name: "Ageless Media Group",
    desc: "Fractional CEO professionalizing a wellness-focused micro-VC.",
    type: "studio",
    sector: "Fintech",
    stage: "Fractional CEO",
    status: "Ongoing",
    year: "2022",
    image: {
      src: "/photos/mandates/ageless.jpg",
      alt: "Quiet residential interior with warm natural light",
    },
    logo: {
      src: "/logos/ageless.svg",
      width: 280,
      height: 52,
      shape: "wide",
    },
    expand:
      "We stepped in as fractional CEO to bring institutional operating discipline to a founder-led investment vehicle — from reporting cadence and LP communication to portfolio oversight and strategic direction.",
  },
  {
    id: "uic",
    name: "University for International Cooperation",
    desc: "Strategic fundraising and institutional partnership advisory.",
    type: "capital",
    sector: "Education",
    stage: "Global program",
    status: "Current",
    year: "2024",
    image: {
      src: "/photos/mandates/uic.jpg",
      alt: "University campus building seen through trees",
    },
    logo: {
      src: "/logos/uci-clean.png",
      width: 143,
      height: 167,
      shape: "mark",
    },
    expand:
      "We lead global capital initiatives that expand international cooperation programs, working with university leadership to secure partnerships across multiple institutions.",
  },
  {
    id: "rippling",
    name: "Rippling Nature",
    desc: "Strategic finance from early pilots through city-scale partnership.",
    type: "studio",
    sector: "Sustainability",
    stage: "Fractional CFO",
    status: "Ongoing",
    year: "2021",
    image: {
      src: "/photos/mandates/rippling.jpg",
      alt: "Mountain lake at dusk with a still shoreline",
    },
    logo: {
      src: "/logos/rippling-nature-clean.png",
      width: 123,
      height: 123,
      shape: "mark",
    },
    websiteUrl: "https://www.ripplingnature.com/",
    expand:
      "Co-built alongside the founding team from bayou-scale pilots, we've stayed on as fractional finance leadership while the venture negotiates university collaborations and municipal-scale resilience partnerships.",
  },
  {
    id: "reserva-azul",
    name: "Reserva Azul",
    desc: "Growth and go-to-market advisory for a Blue Zone spring water brand.",
    type: "studio",
    sector: "Consumer",
    stage: "GTM advisory",
    status: "Ongoing",
    year: "2022",
    image: {
      src: "/photos/mandates/reserva-azul.jpg",
      alt: "Clear alpine lake under a mountain range",
    },
    logo: {
      src: "/logos/reserva-azul-clean.png",
      width: 969,
      height: 273,
      shape: "wide",
    },
    websiteUrl: "https://www.gotaazulcr.com/en/",
    expand:
      "We support B2B programs, compliance, and distribution as the brand supplies certified Nicoya mountain spring water nationwide across Costa Rica.",
  },
];
