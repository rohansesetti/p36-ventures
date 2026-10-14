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
    desc: "Build the models, investment memos, and diligence behind live raises.",
    work: "You build the materials, test the numbers, and keep the data room accurate while a raise is underway.",
  },
  {
    id: "bd-analyst",
    title: "Business Development Analyst",
    seat: "Coverage",
    desc: "Build relationships with founders and investors, and keep the pipeline moving.",
    work: "You map the right contacts, make first approaches, and turn warm introductions into briefings.",
  },
  {
    id: "re-analyst",
    title: "Real Estate Investment Analyst",
    seat: "Assets",
    desc: "Underwrite commercial property and how it is financed.",
    work: "You model the asset, the financing, and the risk, then write the memo an institutional investor will read.",
  },
  {
    id: "venture-scout",
    title: "Venture Scout",
    seat: "Network",
    desc: "Source companies at formation or their first institutional round.",
    work: "You stay close to founders, screen for capital or studio fit, and make the introduction. We take the first look.",
  },
];
