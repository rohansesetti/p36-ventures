/** Options shared by the site's forms and the API routes that receive them. */

export const briefingObjectives = [
  "Capital Sourcing",
  "GTM Execution",
  "Structural Governance",
  "Exit Readiness",
  "Transaction Audit",
] as const;

export const deskCities = ["New York", "Miami", "London", "Delhi", "Other"] as const;

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isUrl = (v: string) => /^https?:\/\/.+/.test(v);
