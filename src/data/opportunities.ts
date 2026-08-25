export type Opportunity = {
  id: string;
  title: string;
  seat: string;
  desc: string;
  work: string;
};

export const opportunities: Opportunity[] = [
  {
    id: "vc-analyst",
    title: "VC Analyst",
    seat: "Capital",
    desc: "Sit on live files: models, memoranda, and the diligence that goes to IC.",
    work: "You build the pack, pressure-test the numbers, and keep the data room honest while a raise is in market.",
  },
  {
    id: "bd-analyst",
    title: "Business Development Analyst",
    seat: "Coverage",
    desc: "Open the desks we need and keep the pipeline moving.",
    work: "You map counterparties, run first coverage, and turn a warm introduction into a briefing that can close.",
  },
  {
    id: "re-analyst",
    title: "Real Estate Investment Analyst",
    seat: "Assets",
    desc: "Underwrite property and the capital stacked against it.",
    work: "You model the asset, the stack, and the risk — then write the file an institutional counterparty will actually read.",
  },
  {
    id: "venture-scout",
    title: "Venture Scout",
    seat: "Network",
    desc: "Source companies at formation or first institutional round.",
    work: "You sit close to founders, screen for a capital or studio mandate, and send the introduction. We take first look.",
  },
];
