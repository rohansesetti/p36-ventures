/**
 * All copy for the P36 Fellowship pages.
 * Anything in [SQUARE BRACKETS] is a placeholder — see PLACEHOLDERS.md.
 */

export const cohort = {
  name: "[COHORT NAME, e.g. Cohort I]",
  startDate: "[START DATE]",
  closeDate: "[APPLICATIONS CLOSE DATE]",
  places: "[N]",
  hoursPerWeek: "[X]",
  screenReplyDays: "[X]",
};

export const membership = {
  price: "$49",
  reimbursementDays: 14,
  contact: "hello@p36ventures.com",
};

export const fellowshipSteps = [
  {
    rn: "I",
    title: "Apply",
    desc: "A short application, a 20-minute video screen, then a 15-minute fit call.",
  },
  {
    rn: "II",
    title: "Selection",
    desc: "Selected fellows are assigned a workstream for the cohort.",
    note: "Selected fellows activate a P36 Fellowship Membership, which covers tools, templates and certification.",
  },
  {
    rn: "III",
    title: "Six weeks",
    desc: "Daily 15-minute standups and five-day sprints on live files.",
  },
  {
    rn: "IV",
    title: "Review",
    desc: "A Week 6 assessment against published criteria.",
  },
] as const;

export type Workstream = {
  id: string;
  title: string;
  desc: string;
  output: string;
  skill: string;
};

export const workstreams: Workstream[] = [
  {
    id: "venture",
    title: "Venture & capital",
    desc: "Startup operating models, cap tables and the materials an investor reads first.",
    output: "A seed or Series A model with a dilution schedule and a one-page teaser.",
    skill: "Valuation and dilution",
  },
  {
    id: "transactions",
    title: "Transactions",
    desc: "Pre-LOI quality-of-earnings checks and the models behind a buyout.",
    output: "EBITDA add-back verification and an LBO with a debt schedule.",
    skill: "Earnings quality and debt structuring",
  },
  {
    id: "real-assets",
    title: "Real assets",
    desc: "Commercial property underwriting, from the rent roll to the memo.",
    output: "T12 underwriting with cap rate and DSCR, and a two-page investment memo.",
    skill: "Property underwriting",
  },
  {
    id: "operating-finance",
    title: "Operating finance",
    desc: "Normalising real P&Ls and finding margin a business has already earned.",
    output: "A normalised P&L, a vendor margin review and a grant eligibility scan.",
    skill: "Three-statement modelling",
  },
];

export const membershipIncludes = [
  {
    title: "Modelling library",
    desc: "LBO, three-statement and commercial real estate underwriting templates. Yours to keep.",
  },
  {
    title: "P36 Edu AI suite",
    desc: "Prompts and parsers for financial analysis, used on every file in the cohort.",
  },
  {
    title: "Private Markets Analyst certificate",
    desc: "Issued by P36 on completion.",
    small: "Not an accredited qualification.",
  },
  {
    title: "Alumni network",
    desc: "An opt-in profile shared with partner firms. Nothing is shared without your consent.",
  },
] as const;

export const weeks = [
  {
    window: "Week 1",
    title: "Onboarding",
    desc: "Training on the modelling library and the Edu AI suite. Workstream and pod assignment.",
  },
  {
    window: "Weeks 2–5",
    title: "Execution",
    desc: "Five-day sprints on live files. Daily standups. Every output reviewed before it moves.",
  },
  {
    window: "Week 6",
    title: "Review",
    desc: "Assessment against the published criteria and conversations about what comes next.",
  },
] as const;

export const suits = [
  "Finance and economics students",
  "Career switchers moving into private markets",
  "Law and business students",
  "Aspiring search fund operators",
];

export const doesNotSuit = [
  "Anyone looking for a salaried role",
  `Anyone unable to commit around ${cohort.hoursPerWeek} hours a week for six weeks`,
];

export const reimbursementCriteria = [
  {
    criterion: "Task completion",
    measure: "[How tasks are counted, e.g. sprint deliverables submitted on time]",
    threshold: "[X]%",
    assessor: "[Pod Lead]",
  },
  {
    criterion: "Attendance",
    measure: "[e.g. daily standups attended]",
    threshold: "[X]%",
    assessor: "[Cohort Managing Director]",
  },
  {
    criterion: "Quality review",
    measure: "[e.g. average score across reviewed outputs, scored against a rubric]",
    threshold: "[X / 5]",
    assessor: "[Core team reviewer]",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Is the Fellowship paid, and does it cost anything?",
    a: `The Fellowship is unpaid. Selected fellows activate a one-time ${membership.price} P36 Fellowship Membership covering tools, templates and certification. It is reimbursed in full if you are invited to join a desk.`,
  },
  {
    q: "What happens after six weeks?",
    a: "Every fellow keeps the templates and the certificate. Desk seats are filled by referral or offered to exceptional candidates, and a fellow who stands out in the cohort may be invited to one. Desks are commission-based with no base pay; earnings depend on closed work and are not guaranteed. Terms are set out in a written agreement before joining.",
  },
  {
    q: "How much time does it take?",
    a: `Around ${cohort.hoursPerWeek} hours a week for six weeks, including a 15-minute standup each working day.`,
  },
  {
    q: "Is it remote?",
    a: "[Remote / hybrid / in-person — confirm]. Standups and reviews run on video.",
  },
  {
    q: "Who can apply?",
    a: "Students and early-career professionals with an interest in private markets. Prior modelling experience helps but is not required. [Confirm any age, location or eligibility limits.]",
  },
  {
    q: "How does selection work?",
    a: "A written application, a 20-minute recorded video screen, then a 15-minute call with the firm. We select for judgement and commitment, not credentials.",
  },
  {
    q: "Is the certificate accredited?",
    a: "No. It is issued by P36 and records the work you completed during the cohort.",
  },
  {
    q: "Who sees my details?",
    a: "Your application is read by the P36 team only. Your profile is shared with partner firms through the alumni network only if you opt in.",
  },
];
