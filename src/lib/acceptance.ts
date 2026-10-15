/**
 * Selection-token lookup for /welcome/[token].
 *
 * TODO: replace the stub with a real lookup (database, Airtable, signed JWT…).
 * Tokens should be long, random, single-purpose and expire after the
 * activation window. Never put personal data in the token itself.
 */

export type Selection = {
  name: string;
  cohort: string;
  workstream: string;
  startDate: string;
  standupTime: string;
  standupLink: string;
};

export async function getSelection(token: string): Promise<Selection | null> {
  // Preview token so the page can be checked locally: /welcome/preview
  if (process.env.NODE_ENV !== "production" && token === "preview") {
    return {
      name: "[Name]",
      cohort: "Cohort 4",
      workstream: "Real assets",
      startDate: "[START DATE]",
      standupTime: "[9:00 AM ET]",
      standupLink: "#",
    };
  }
  return null;
}
