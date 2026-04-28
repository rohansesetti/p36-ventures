export type PillarSectionId =
  | "capital-strategy"
  | "investor-readiness"
  | "global-gtm"
  | "structural-strategy";

/** Renders as "{number}. {beforeSerif} {serif in serif italic}" (e.g. 01. Capital Strategy). */
export type PillarSectionHeading = {
  number: string;
  beforeSerif: string;
  serif: string;
};

export type PillarData = {
  sectionId: PillarSectionId;
  sidebarLabel: string;
  label: string;
  title: string;
  /** Subline under the title on module pages; omit for pillars that use only sectionHeading + lead. */
  headline: string;
  lead: string;
  highlights: string[];
  deliverables: string[];
  leadOperational?: string;
  /** Overrides the small caps label above the lead operational line (default: "Lead operational service"). */
  leadOperationalLabel?: string;
  /** Deliverable line shown in semibold on module pages. */
  leadDeliverable?: string;
  sectionHeading?: PillarSectionHeading;
};

export const pillars: PillarData[] = [
  {
    sectionId: "capital-strategy",
    sidebarLabel: "Capital Strategy",
    label: "Pillar 01",
    title: "Capital Strategy",
    headline: "Direct access to our institutional investor network.",
    sectionHeading: {
      number: "01",
      beforeSerif: "Capital",
      serif: "Strategy",
    },
    lead:
      "We don't just prepare you for the market; we bring the market to you. P36 acts as your strategic bridge, connecting your venture with our private network of institutional investors, family offices, and venture funds. We handle the outreach and the introductions, ensuring your story lands on the right desks to secure the funding you need.",
    highlights: [
      "Investor Access",
      "Grant funding & strategy",
      "Equity & dilution planning",
      "Investor pitch materials",
      "R&D tax recovery",
    ],
    leadOperational: "Investor Access",
    leadOperationalLabel: "Lead service",
    leadDeliverable: "Institutional Network Activation",
    deliverables: [
      "Institutional Network Activation",
      "Dynamic Financial Modeling",
      "Grant Funding & Strategy",
      "Equity & Dilution Planning",
      "Investor Pitch Materials",
      "R&D Tax Recovery",
      "Term Sheet Analysis",
    ],
  },
  {
    sectionId: "investor-readiness",
    sidebarLabel: "Investor Readiness",
    label: "Pillar 02",
    title: "Investor Readiness",
    headline: "Data rooms and narratives that withstand scrutiny.",
    sectionHeading: {
      number: "02",
      beforeSerif: "Investor",
      serif: "Readiness",
    },
    lead:
      "Investors reward clarity, especially under pressure. We build the financial story, the data rooms, and the reporting metrics that hold up in live due diligence—not just in the pitch deck. We handle the intense preparation required to close a deal so you can lead the negotiation with total confidence.",
    highlights: [
      "Investor data room",
      "Pitch deck & Q&A prep",
      "KPI & performance reporting",
      "Due diligence playbook",
    ],
    deliverables: [
      "Investor Data Room",
      "Pitch Deck & Q&A Prep",
      "KPI & Performance Reporting",
      "Audit-Ready Financials",
      "Cap Table Modeling",
      "Due Diligence Playbook",
    ],
  },
  {
    sectionId: "global-gtm",
    sidebarLabel: "Global GTM",
    label: "Pillar 03",
    title: "Global GTM",
    headline: "Revenue motion designed for repeatability.",
    sectionHeading: {
      number: "03",
      beforeSerif: "Global",
      serif: "GTM",
    },
    lead:
      "Go-to-market is where strategy meets execution. We help you build a high-velocity sales engine, refine your pricing, and align your teams around a single operating cadence. Whether you are launching your first territory or scaling internationally, we ensure your revenue growth is predictable and scalable.",
    highlights: [
      "GTM operating plan",
      "Pipeline & forecast models",
      "Territory & segment playbooks",
      "International expansion roadmap",
    ],
    deliverables: [
      "GTM Operating Plan",
      "Pipeline & Forecast Models",
      "Territory & Segment Playbooks",
      "Pricing & Packaging Framework",
      "Partner & Channel Strategy",
      "International Expansion Roadmap",
    ],
  },
  {
    sectionId: "structural-strategy",
    sidebarLabel: "Structural Strategy",
    label: "Pillar 04",
    title: "Structural Strategy",
    headline: "Operating models and exit paths built for scale.",
    sectionHeading: {
      number: "04",
      beforeSerif: "Structural",
      serif: "Strategy",
    },
    lead:
      "Structure determines your future options. We align your governance, corporate development, and equity mechanics so that scaling doesn't create hidden liabilities. We build the stable foundation required to protect your valuation from the seed stage through to a successful exit.",
    highlights: [
      "Fractional CFO / COO",
      "Board & governance",
      "Corporate structure strategy",
      "Exit scenario modeling",
    ],
    leadOperational: "Fractional CFO / COO",
    deliverables: [
      "Board & Governance Calendar",
      "Corporate Structure Strategy",
      "M&A Readiness Data Room",
      "Exit Scenario Modeling",
      "ESG & Compliance Framework",
      "Management Continuity Plan",
    ],
  },
];
