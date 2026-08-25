export type ServiceIconId =
  | "pyramid"
  | "globe"
  | "bars"
  | "hex"
  | "lattice"
  | "diamond"
  | "nodes"
  | "cube";

export type Service = {
  slug: string;
  title: string;
  /** Waveup-style subline: "for fundraise prep, runway, and board reports" */
  forLine: string;
  icon: ServiceIconId;
  categoryId: string;
  eyebrow: string;
  lead: string;
  when: { title: string; body: string }[];
  method: { title: string; body: string }[];
  deliverables: string[];
  related: string[];
};

export type ServiceCategory = {
  id: string;
  label: string;
  blurb: string;
  serviceSlugs: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "fundraising",
    label: "Fundraising support",
    blurb: "The stack, the story, and the process through close.",
    serviceSlugs: [
      "fractional-cfo",
      "fundraising-advisory",
      "financial-modelling",
      "investor-relations",
    ],
  },
  {
    id: "transactions",
    label: "Transaction & M&A advisory",
    blurb: "Valuation, memorandum, and diligence that hold up in the room.",
    serviceSlugs: [
      "business-valuation",
      "cim",
      "due-diligence",
      "transaction-advisory",
    ],
  },
  {
    id: "operating",
    label: "Studio & operating",
    blurb: "Formation, governance, and the cadence that scales.",
    serviceSlugs: ["studio-formation", "board-governance", "gtm-strategy"],
  },
];

export const services: Service[] = [
  {
    slug: "fractional-cfo",
    title: "Fractional CFO",
    forLine: "for fundraise prep, runway, and board reports",
    icon: "pyramid",
    categoryId: "fundraising",
    eyebrow: "Finance operations",
    lead: "We sit in the finance seat — forecasting, cash, board packs, and the numbers that have to survive diligence. Not a monthly check-in. An operator who owns the function until you hire it in-house.",
    when: [
      {
        title: "Ahead of a priced round",
        body: "Investors will reconstruct your model. We build it so that reconstruction is a formality.",
      },
      {
        title: "Runway is the constraint",
        body: "Burn, hiring, and the next close have to live in one view. We put them there.",
      },
      {
        title: "The board needs a cadence",
        body: "Packs, forecasts, and a reporting rhythm that does not wait for the raise.",
      },
    ],
    method: [
      {
        title: "Diagnose",
        body: "Audit the model, the books, and the reporting. Name the gaps that will surface in diligence.",
      },
      {
        title: "Install",
        body: "Forecast, cash controls, and a board calendar. The artefacts leave our desk; the cadence stays.",
      },
      {
        title: "Hold the seat",
        body: "We remain fractional CFO through the event — raise, close, or hire — then hand over.",
      },
    ],
    deliverables: [
      "13-week cash and 24-month forecast",
      "Board pack and reporting calendar",
      "Cap table and dilution scenarios",
      "Budget vs actual operating rhythm",
      "Handover to an incoming full-time CFO",
    ],
    related: ["financial-modelling", "fundraising-advisory", "board-governance"],
  },
  {
    slug: "fundraising-advisory",
    title: "Fundraising advisory",
    forLine: "for process, narrative, and close",
    icon: "globe",
    categoryId: "fundraising",
    eyebrow: "Capital raising",
    lead: "A round is a transaction. We design the process, write the materials, cover the right desks, and stay on it through term sheet and close — not as a coach on the sideline.",
    when: [
      {
        title: "The last raise was informal",
        body: "Friends-and-family or a SAFE is not a process. A priced round needs one.",
      },
      {
        title: "The story is not landing",
        body: "Product is real; the memorandum is not. We rewrite the raise around evidence.",
      },
      {
        title: "You need coverage, not a list",
        body: "We map, introduce, and run the sequence. A spreadsheet of names is not coverage.",
      },
    ],
    method: [
      {
        title: "Scope the raise",
        body: "Amount, instrument, use of proceeds, and a timetable that can actually be held.",
      },
      {
        title: "Build the package",
        body: "Narrative, model, data room, and Q&A. One story across every artefact.",
      },
      {
        title: "Run the process",
        body: "Target list, introductions, meeting cadence, and negotiation through close.",
      },
    ],
    deliverables: [
      "Raise strategy and process timetable",
      "Investor narrative and memorandum",
      "Target list with routes to introduction",
      "Data room populated and indexed",
      "Process management through close",
    ],
    related: ["fractional-cfo", "financial-modelling", "investor-relations"],
  },
  {
    slug: "financial-modelling",
    title: "Financial modelling",
    forLine: "for forecasts, scenarios, and valuation defence",
    icon: "bars",
    categoryId: "fundraising",
    eyebrow: "Analytics",
    lead: "A model that cannot be interrogated is a slide. We build driver-based forecasts, scenarios, and unit economics that hold up when a partner’s associate spends a week inside them.",
    when: [
      {
        title: "The model is a spreadsheet of hope",
        body: "Top-down revenue with no drivers. We rebuild from unit economics up.",
      },
      {
        title: "You need a range, not a number",
        body: "Base, upside, and downside — with the levers named so the board can actually decide.",
      },
      {
        title: "Valuation has to be defended",
        body: "The model is the spine of the raise. If it flexes, the number does not.",
      },
    ],
    method: [
      {
        title: "Map the drivers",
        body: "Volume, price, conversion, cost, and cash. Nothing in the model that cannot be pointed to in the business.",
      },
      {
        title: "Build and stress",
        body: "Integrated P&L, balance sheet, and cash. Scenarios and sensitivity on the things that actually move the outcome.",
      },
      {
        title: "Hand over",
        body: "Documented, versioned, and usable by your team — not a black box we take with us.",
      },
    ],
    deliverables: [
      "Integrated three-statement model",
      "Unit economics and cohort views",
      "Scenario and sensitivity packs",
      "Fundraising and board versions",
      "Assumption log and handover notes",
    ],
    related: ["fractional-cfo", "business-valuation", "fundraising-advisory"],
  },
  {
    slug: "investor-relations",
    title: "Investor relations",
    forLine: "for targeting, outreach, and post-close reporting",
    icon: "hex",
    categoryId: "fundraising",
    eyebrow: "Coverage",
    lead: "The right desks, in the right order, with a story they can take to IC. After close, the same discipline on updates — so the next round starts warmer than the last.",
    when: [
      {
        title: "You do not know who should be in the book",
        body: "Stage, cheque size, sector, and geography have to match. We build the book that way.",
      },
      {
        title: "Outreach has gone cold",
        body: "We sequence, follow up, and keep a process log. Silence is a data point, not a mystery.",
      },
      {
        title: "Existing investors need a cadence",
        body: "Quarterly packs and a single source of truth. IR is how you earn the next close.",
      },
    ],
    method: [
      {
        title: "Map",
        body: "Funds, family offices, and strategic capital that actually write at this stage.",
      },
      {
        title: "Cover",
        body: "Introductions, materials, and a meeting rhythm with owners on both sides.",
      },
      {
        title: "Report",
        body: "Post-close updates that keep the cap table informed and the next process shorter.",
      },
    ],
    deliverables: [
      "Investor map and coverage plan",
      "Outreach sequence and CRM log",
      "Meeting materials and Q&A",
      "Quarterly investor update template",
      "Relationship notes for the next raise",
    ],
    related: ["fundraising-advisory", "due-diligence", "board-governance"],
  },
  {
    slug: "business-valuation",
    title: "Business valuation",
    forLine: "for priced rounds, M&A, and board decisions",
    icon: "diamond",
    categoryId: "transactions",
    eyebrow: "Valuation",
    lead: "A number without a method is an opinion. We produce a defensible range — DCF, comps, and the venture method where they belong — so the conversation is about assumptions, not guesswork.",
    when: [
      {
        title: "A priced round is coming",
        body: "Pre-money has to be argued, not hoped. We give the board a range they can stand behind.",
      },
      {
        title: "A transaction is in view",
        body: "Buy-side or sell-side. Counterparties will have their own number. You need yours.",
      },
      {
        title: "The cap table is not simple",
        body: "Preferences, convertibles, and option pools change what common is worth. We run the waterfall.",
      },
    ],
    method: [
      {
        title: "Purpose and data",
        body: "Raise, M&A, or planning. Then financials, cap table, and the market set we will actually use.",
      },
      {
        title: "Methods",
        body: "Income, market, and venture-capital approaches as the stage requires — triangulated, not averaged blindly.",
      },
      {
        title: "Report",
        body: "A written conclusion with exhibits. Usable in a data room and in a board meeting.",
      },
    ],
    deliverables: [
      "Valuation memorandum and range",
      "Method notes and comparable set",
      "Cap table waterfall",
      "Board-ready summary",
      "Support through investor or buyer questions",
    ],
    related: ["financial-modelling", "cim", "transaction-advisory"],
  },
  {
    slug: "cim",
    title: "Confidential information memorandum",
    forLine: "for sell-side processes and institutional raises",
    icon: "lattice",
    categoryId: "transactions",
    eyebrow: "Materials",
    lead: "The CIM is the document counterparties actually read. We write it as an argument — market, model, risks, and ask — not a brochure with a number on the last page.",
    when: [
      {
        title: "You are running a process",
        body: "Buyers and investors will ask for one document. It has to survive the associate and the partner.",
      },
      {
        title: "The deck is not enough",
        body: "A pitch is a door. The memorandum is the room. We write the room.",
      },
      {
        title: "Management cannot spare a quarter",
        body: "We interview, draft, and iterate. You stay on the business.",
      },
    ],
    method: [
      {
        title: "Discovery",
        body: "Management interviews, financials, and the competitive set. We find the argument before we write it.",
      },
      {
        title: "Draft",
        body: "Company, market, operations, financials, risk, and transaction structure — in that order.",
      },
      {
        title: "Lock",
        body: "Numbers tied to the model. Claims tied to evidence. Version that can go in the room.",
      },
    ],
    deliverables: [
      "Full CIM (or IM for a raise)",
      "Executive summary / teaser",
      "Supporting exhibits",
      "Q&A appendix",
      "Alignment with model and data room",
    ],
    related: ["business-valuation", "due-diligence", "fundraising-advisory"],
  },
  {
    slug: "due-diligence",
    title: "Due diligence & data rooms",
    forLine: "for audit-ready files and counterparty questions",
    icon: "cube",
    categoryId: "transactions",
    eyebrow: "Diligence",
    lead: "Most processes stall in week four, in a folder that was never finished. We build the room, index it, and sit with you through the questions — so diligence is a path, not a surprise.",
    when: [
      {
        title: "A data room exists in name only",
        body: "Drive folders and stale PDFs. We rebuild it as a diligence artefact.",
      },
      {
        title: "You have not been through this before",
        body: "Legal, financial, commercial, and technical. We know the order they will ask.",
      },
      {
        title: "Speed is the constraint",
        body: "A process with a deadline. The room has to be ready before the first request list.",
      },
    ],
    method: [
      {
        title: "Gap analysis",
        body: "What is missing, what is weak, what will be asked first. Ranked.",
      },
      {
        title: "Populate",
        body: "Index, naming, and owners. Financials, contracts, IP, HR, and product.",
      },
      {
        title: "Defend",
        body: "We stay on the request list until the counterparty is done.",
      },
    ],
    deliverables: [
      "Diligence gap analysis",
      "Indexed virtual data room",
      "Request-list tracker",
      "Management Q&A pack",
      "Support through confirmatory diligence",
    ],
    related: ["cim", "fractional-cfo", "transaction-advisory"],
  },
  {
    slug: "transaction-advisory",
    title: "Transaction advisory",
    forLine: "for buy-side, sell-side, and structured processes",
    icon: "nodes",
    categoryId: "transactions",
    eyebrow: "M&A",
    lead: "When the event is a sale, a purchase, or a structured round, we run the work around it — positioning, materials, counterparties, and the close. Boutique coverage, institutional artefacts.",
    when: [
      {
        title: "An inbound has arrived",
        body: "You need a view on value, process, and whether to engage — this week, not next quarter.",
      },
      {
        title: "You want to run a process",
        body: "Sell-side or capital raise with M&A-grade materials. We scope it as a transaction.",
      },
      {
        title: "You are buying",
        body: "Target assessment, quality of earnings questions, and a paper the board can vote on.",
      },
    ],
    method: [
      {
        title: "Position",
        body: "Value, structure, and the set of counterparties worth the time.",
      },
      {
        title: "Prepare",
        body: "CIM or investment memo, model, and room. Same standard as a bank process, without the bank theatre.",
      },
      {
        title: "Execute",
        body: "Coverage, negotiation support, and close. We stay until the documents are signed.",
      },
    ],
    deliverables: [
      "Process letter and timetable",
      "CIM or investment memorandum",
      "Valuation and structure paper",
      "Counterparty coverage",
      "Negotiation and close support",
    ],
    related: ["business-valuation", "cim", "due-diligence"],
  },
  {
    slug: "studio-formation",
    title: "Studio formation",
    forLine: "for entity, product, and the first institutional round",
    icon: "cube",
    categoryId: "operating",
    eyebrow: "Venture studio",
    lead: "We co-found. Equity-aligned, in the operating seat — incorporating the company, shaping the first product, hiring the first team, and staying until the business can raise on its own terms.",
    when: [
      {
        title: "There is no company yet",
        body: "Conviction and domain edge, no entity. We form it and run it.",
      },
      {
        title: "The founder needs an operator",
        body: "Not a consultant. A co-founder who will own a function through the first round.",
      },
      {
        title: "The first raise has to be real",
        body: "We build toward a process, not a friends-and-family pass-the-hat.",
      },
    ],
    method: [
      {
        title: "Form",
        body: "Entity, cap table, founding agreements, and the first operating cadence.",
      },
      {
        title: "Build",
        body: "Product definition, hiring, and the commercial first version.",
      },
      {
        title: "Raise",
        body: "Materials, process, and close — then a clean handover or a continued seat.",
      },
    ],
    deliverables: [
      "Incorporation and founding documents",
      "Cap table and equity plan",
      "First product and operating plan",
      "Fractional CEO / COO / CFO as scoped",
      "First institutional round package",
    ],
    related: ["fractional-cfo", "fundraising-advisory", "gtm-strategy"],
  },
  {
    slug: "board-governance",
    title: "Board & governance",
    forLine: "for cadence, reporting, and exit hygiene",
    icon: "pyramid",
    categoryId: "operating",
    eyebrow: "Governance",
    lead: "Boards fail in the paperwork, not the strategy. We install the calendar, the packs, and the corporate hygiene that investors and buyers will eventually demand — so that day is uneventful.",
    when: [
      {
        title: "You have a board in name",
        body: "No calendar, no packs, no minutes that would survive a buyer’s counsel.",
      },
      {
        title: "A round or sale is 12–18 months out",
        body: "Governance is cheaper to install now than to reconstruct in diligence.",
      },
      {
        title: "Option grants and the cap table have drifted",
        body: "We clean the equity mechanics before they become a closing condition.",
      },
    ],
    method: [
      {
        title: "Audit",
        body: "Articles, cap table, contracts, and the last twelve months of decisions.",
      },
      {
        title: "Install",
        body: "Board calendar, pack template, reserved matters, and a minute standard.",
      },
      {
        title: "Maintain",
        body: "We can hold the corporate secretary function until you staff it.",
      },
    ],
    deliverables: [
      "Board calendar and pack template",
      "Cap table and equity hygiene",
      "Reserved matters and approval map",
      "Minute and resolution standard",
      "Exit-ready corporate file",
    ],
    related: ["fractional-cfo", "due-diligence", "transaction-advisory"],
  },
  {
    slug: "gtm-strategy",
    title: "GTM strategy",
    forLine: "for pipeline, pricing, and the first repeatable motion",
    icon: "globe",
    categoryId: "operating",
    eyebrow: "Go-to-market",
    lead: "Revenue that cannot be forecasted cannot be raised against. We design the motion — segment, pricing, pipeline, and cadence — so the next board pack has a number that is earned, not hoped.",
    when: [
      {
        title: "Founder-led sales has hit a ceiling",
        body: "The next stage needs a motion other people can run. We write it down and install it.",
      },
      {
        title: "Pricing is a guess",
        body: "Packaging, discounting, and a model that a finance function can actually forecast.",
      },
      {
        title: "A new market is on the table",
        body: "Territory, segment, and a 90-day plan — not a slide titled ‘international’.",
      },
    ],
    method: [
      {
        title: "Diagnose the motion",
        body: "Who buys, why, how long, and at what cost. Honest conversion math.",
      },
      {
        title: "Design",
        body: "Segments, pricing, pipeline stages, and the operating cadence around them.",
      },
      {
        title: "Install",
        body: "Playbooks, forecast, and a review rhythm. Then we step back or stay as fractional GTM.",
      },
    ],
    deliverables: [
      "GTM operating plan",
      "Pricing and packaging framework",
      "Pipeline and forecast model",
      "Territory and segment playbooks",
      "90-day install plan",
    ],
    related: ["studio-formation", "financial-modelling", "fundraising-advisory"],
  },
];

const bySlug = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string) {
  return bySlug.get(slug);
}

export function getCategory(id: string) {
  return serviceCategories.find((c) => c.id === id);
}

export function servicesInCategory(id: string) {
  const cat = getCategory(id);
  if (!cat) return [];
  return cat.serviceSlugs.map((slug) => bySlug.get(slug)).filter((s): s is Service => Boolean(s));
}

export function relatedServices(service: Service) {
  return service.related
    .map((slug) => bySlug.get(slug))
    .filter((s): s is Service => Boolean(s));
}
