export type PortfolioCategory = "All" | "FinTech" | "DeepTech" | "SaaS" | "Regen";

/**
 * Portfolio initials hover — each key maps to brand-matched Tailwind classes in
 * `PortfolioGrid` (logo colours where we have assets; complementary otherwise).
 */
export type InitialsAccent =
  | "navy"
  | "forest"
  | "orange"
  | "violet"
  | "rose"
  | "blue";

export type PortfolioItem = {
  id: string;
  name: string;
  category: Exclude<PortfolioCategory, "All">;
  initials: string;
  initialsAccent: InitialsAccent;
  result: string;
  /** Exact substring of `result` to emphasize (financial / strategic outcome). */
  outcomeEmphasis?: string;
  /** Public path under `/public`, e.g. `/logos/isa-energy.png` */
  logoSrc?: string;
  /** When true, show only the logo (no initials tile). */
  logoOnly?: boolean;
  /** External company site (opens in new tab). */
  websiteUrl?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "prospex",
    name: "Prospex",
    category: "SaaS",
    initials: "PX",
    initialsAccent: "navy",
    logoSrc: "/logos/prospex.png",
    result:
      "Strategic execution and capital advisory for a B2B AI leader. Architected the GTM roadmap and optimized investor narratives to secure a $600K seed round. Ongoing mandates include corporate structuring and executive performance coaching.",
    outcomeEmphasis: "$600K seed round",
  },
  {
    id: "terra",
    name: "The TERRA Initiative",
    category: "Regen",
    initials: "TI",
    initialsAccent: "forest",
    logoSrc: "/logos/terra-initiative.png",
    result:
      "Lead Capital Advisory for a regional regenerative ecosystem. Engineered the complex $200M financial architecture and investment memorandum. Managing institutional investor relations to facilitate large-scale bioregional deployment.",
    outcomeEmphasis: "$200M financial architecture",
  },
  {
    id: "isa-energy",
    name: "ISA Energy",
    category: "DeepTech",
    initials: "IE",
    initialsAccent: "orange",
    logoSrc: "/logos/isa-energy.png",
    result:
      "Capital Readiness and Transaction Advisory for a quantum energy pioneer. Engineered the financial infrastructure and strategic roadmap to navigate a high-stakes institutional funding cycle.",
    outcomeEmphasis: "high-stakes institutional funding cycle",
  },
  {
    id: "solaryn",
    name: "Solaryn",
    category: "DeepTech",
    initials: "SY",
    initialsAccent: "navy",
    logoSrc: "/logos/solaryn.svg",
    logoOnly: true,
    result:
      "Fractional CFO and Structural Architecture for an AGI & Defense venture. Managed the closing of $1.3M in funding while establishing the robust corporate governance and financial controls required for national security contracts.",
    outcomeEmphasis: "$1.3M in funding",
  },
  {
    id: "ageless",
    name: "Ageless Media Group",
    category: "FinTech",
    initials: "AM",
    initialsAccent: "rose",
    result:
      "Operational Leadership and Strategy for a wellness-focused Micro-VC. Providing Fractional CEO services to professionalize the investment vehicle and optimize portfolio performance through strategic oversight.",
    outcomeEmphasis: "Fractional CEO services",
  },
  {
    id: "uic",
    name: "University for International Cooperation",
    category: "Regen",
    initials: "UC",
    initialsAccent: "forest",
    logoSrc: "/logos/uci.png",
    result:
      "Strategic Fundraising and Institutional Partnership advisory. Orchestrating global capital initiatives to expand international cooperation programs and secure multi-lateral strategic partnerships.",
    outcomeEmphasis: "global capital initiatives",
  },
  {
    id: "rippling-nature",
    name: "Rippling Nature",
    category: "DeepTech",
    initials: "RN",
    initialsAccent: "orange",
    logoSrc: "/logos/rippling-nature.png",
    websiteUrl: "https://www.ripplingnature.com/",
    result:
      "Strategic finance and partnership advisory for a Houston venture merging Deep-Tech with sustainability—supporting regenerative urban pilots, university collaborations, and institutional narratives behind initiatives from bayou agriculture to community-scale resilience.",
    outcomeEmphasis: "Deep-Tech with sustainability",
  },
  {
    id: "reserva-azul",
    name: "Reserva Azul",
    category: "Regen",
    initials: "RA",
    initialsAccent: "blue",
    websiteUrl: "https://www.gotaazulcr.com/en/",
    result:
      "Growth and go-to-market advisory for a Nicoya Blue Zone natural spring water brand. Supporting B2B programs, compliance-forward positioning, and scalable distribution narratives as they supply certified mountain spring water nationwide across Costa Rica.",
    outcomeEmphasis: "nationwide across Costa Rica",
  },
];
