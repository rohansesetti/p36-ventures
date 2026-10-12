/**
 * All copy for the P36 Fellowship pages.
 * Anything in [SQUARE BRACKETS] is a placeholder — see FELLOWSHIP_CHANGES.md.
 */

export const cohort = {
  name: "Cohort 4",
  admissions: "Rolling admissions",
  closeDate: "October 31",
  hoursPerWeek: "[X]",
  replyDays: "[X]",
};

/**
 * Fellowship numbers — TEMPLATE.
 * Put real figures in `value` only (e.g. "48", "300+").
 * Any entry left as "" is hidden; if all are empty, the whole strip is hidden.
 */
export const stats: { value: string; label: string }[] = [
  { value: "", label: "Fellows trained" },
  { value: "", label: "Outputs reviewed by the core team" },
  { value: "", label: "Cohorts completed" },
];

export const membership = {
  price: "$49",
  reimbursementDays: 14,
  contact: "hello@p36ventures.com",
};

/** Application form options, shared by the form and the API route. */
export const HOURS = ["Under 10", "10–15", "15–20", "20+"] as const;
export const LETTER_LIMIT = 4000;

/** Selection process, used on the Fellowship and Apply pages. */
export const selection = [
  { rn: "I", title: "Resume" },
  { rn: "II", title: "Cover letter" },
  { rn: "III", title: "15-minute interview" },
  { rn: "IV", title: "Meeting with the CEO" },
] as const;

export const fellowshipSteps = [
  {
    rn: "I",
    window: "Before the cohort",
    title: "Apply",
    desc: "Resume and cover letter, a 15-minute interview, then a meeting with the CEO.",
  },
  {
    rn: "II",
    window: "Week 1",
    title: "Onboarding",
    desc: "Training on the models and tools. Assignment to a workstream.",
    note: "Selected fellows activate a P36 Fellowship Membership.",
  },
  {
    rn: "III",
    window: "Weeks 2–5",
    title: "Live mandates",
    desc: "Five-day sprints and a daily standup. The core team reviews everything. No client contact.",
  },
  {
    rn: "IV",
    window: "Week 6",
    title: "Review",
    desc: "Assessment against published criteria.",
  },
] as const;

export type Workstream = {
  id: string;
  title: string;
  output: string;
};

export const workstreams: Workstream[] = [
  {
    id: "venture",
    title: "Venture & capital",
    output: "Seed and Series A models, cap tables, investor teasers.",
  },
  {
    id: "transactions",
    title: "Transactions",
    output: "Quality-of-earnings checks, add-back verification, LBOs.",
  },
  {
    id: "real-assets",
    title: "Real assets",
    output: "T12 underwriting, cap rates, DSCR, investment memos.",
  },
  {
    id: "operating-finance",
    title: "Operating finance",
    output: "Normalised P&Ls, margin reviews, grant scans.",
  },
];

export const membershipIncludes = [
  { title: "Modelling library", desc: "LBO, three-statement and real estate templates. Yours to keep." },
  { title: "P36 Edu AI suite", desc: "Prompts and parsers for financial analysis." },
  { title: "Analyst certificate", desc: "Issued by P36.", small: "Not an accredited qualification." },
  { title: "Alumni network", desc: "Opt-in profile shared with partner firms." },
] as const;

export const suits = [
  "Finance and economics students",
  "Career switchers into private markets",
  "Law and business students",
  "Aspiring search fund operators",
];

export const reimbursementCriteria = [
  {
    criterion: "Task completion",
    measure: "[e.g. sprint deliverables submitted on time]",
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
    measure: "[e.g. average rubric score across reviewed outputs]",
    threshold: "[X / 5]",
    assessor: "[Core team reviewer]",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Is it paid? Does it cost anything?",
    a: "It is unpaid. Selected fellows pay a one-time membership fee, reimbursed in full if invited to a desk. Details are on the membership page.",
  },
  {
    q: "What happens after six weeks?",
    a: "You keep the templates and certificate. Desks are filled by referral or for exceptional candidates; a standout fellow may be invited. Desks are commission-only, earnings are not guaranteed, and terms are agreed in writing first.",
  },
  {
    q: "How much time does it take?",
    a: `Around ${cohort.hoursPerWeek} hours a week for six weeks.`,
  },
  {
    q: "Is it remote?",
    a: "[Remote / hybrid / in-person — confirm].",
  },
  {
    q: "Is the certificate accredited?",
    a: "No. It is issued by P36.",
  },
];
