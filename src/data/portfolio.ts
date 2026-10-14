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
    logoSrc: "/logos/prospex-clean.png",
    result:
      "Capital advisory and go-to-market strategy for a B2B AI company. Built the go-to-market plan and rewrote the investor story ahead of a $600K seed round. Ongoing work includes corporate structuring and executive coaching.",
    outcomeEmphasis: "$600K seed round",
  },
  {
    id: "terra",
    name: "The TERRA Initiative",
    category: "Regen",
    initials: "TI",
    initialsAccent: "forest",
    logoSrc: "/logos/terra-initiative-clean.png",
    result:
      "Lead capital advisor to a regional regeneration initiative. Built the $200M financial architecture and the investment memorandum, and now manage institutional investor relations as the program scales across the region.",
    outcomeEmphasis: "$200M financial architecture",
  },
  {
    id: "isa-energy",
    name: "ISA Energy",
    category: "DeepTech",
    initials: "IE",
    initialsAccent: "orange",
    logoSrc: "/logos/isa-energy-clean.png",
    result:
      "Capital readiness and transaction advisory for a quantum energy company. Built the financial model and strategic plan for a high-stakes institutional funding cycle.",
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
      "Fractional CFO and corporate structure for an AGI and defense company. Managed the close of $1.3M in funding and set up the governance and financial controls required for national security contracts.",
    outcomeEmphasis: "$1.3M in funding",
  },
  {
    id: "ageless",
    name: "Ageless Media Group",
    category: "FinTech",
    initials: "AM",
    initialsAccent: "rose",
    result:
      "Operating leadership for a wellness-focused micro-VC. Providing Fractional CEO services to professionalize the fund and strengthen portfolio oversight.",
    outcomeEmphasis: "Fractional CEO services",
  },
  {
    id: "uic",
    name: "University for International Cooperation",
    category: "Regen",
    initials: "UC",
    initialsAccent: "forest",
    logoSrc: "/logos/uci-clean.png",
    result:
      "Fundraising and institutional partnership advisory. Leading global capital initiatives that expand international cooperation programs and secure partnerships across multiple institutions.",
    outcomeEmphasis: "global capital initiatives",
  },
  {
    id: "rippling-nature",
    name: "Rippling Nature",
    category: "DeepTech",
    initials: "RN",
    initialsAccent: "orange",
    logoSrc: "/logos/rippling-nature-clean.png",
    websiteUrl: "https://www.ripplingnature.com/",
    result:
      "Strategic finance and partnership advisory for a Houston venture combining Deep-Tech with sustainability, supporting urban regeneration pilots, university collaborations, and initiatives from bayou agriculture to community-scale resilience.",
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
      "Growth and go-to-market advisory for a spring water brand from Costa Rica's Nicoya Blue Zone. Supporting B2B programs, compliance, and distribution as the brand supplies certified mountain spring water nationwide across Costa Rica.",
    outcomeEmphasis: "nationwide across Costa Rica",
  },
];
