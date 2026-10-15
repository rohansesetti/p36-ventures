/**
 * Minimal Notion writer for the site's forms.
 * Server-only: reads NOTION_TOKEN plus one database ID per form from the environment:
 *   NOTION_FELLOWSHIP_DB_ID, NOTION_BRIEFINGS_DB_ID, NOTION_DESKS_DB_ID
 * Property lists for each database are in FELLOWSHIP_CHANGES.md.
 * Uses the REST API directly so no extra package is needed.
 *
 * The Fellowship database must have these properties (names and types must match):
 *   Name                      Title
 *   Email                     Email
 *   Country                   Text
 *   LinkedIn                  URL
 *   Resume                    URL
 *   Workstreams               Multi-select
 *   Cover letter              Text
 *   Hours a week              Select
 *   Membership acknowledged   Checkbox
 *   Alumni opt-in             Checkbox
 *   Stage                     Select
 *   Applied                   Date
 */

const NOTION_VERSION = "2022-06-28";

export type FellowshipApplication = {
  name: string;
  email: string;
  country: string;
  linkedin: string;
  resume: string;
  workstreams: string[];
  letter: string;
  hours: string;
  membershipAcknowledged: boolean;
  alumniOptIn: boolean;
};

/** Text property; Notion caps each block at 2,000 characters, so long text is split. */
export const text = (value: string) => {
  const chunks: string[] = [];
  for (let i = 0; i < value.length; i += 2000) chunks.push(value.slice(i, i + 2000));
  return {
    rich_text: chunks.map((content) => ({ type: "text", text: { content } })),
  };
};

export const title = (value: string) => ({
  title: [{ type: "text", text: { content: value.slice(0, 200) } }],
});

export const select = (value: string) => (value ? { select: { name: value } } : { select: null });

/**
 * Creates one row in a Notion database.
 * `dbEnvVar` is the name of the environment variable holding the database ID.
 */
export async function notionCreatePage(
  dbEnvVar: string,
  properties: Record<string, unknown>,
) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env[dbEnvVar];

  if (!token || !databaseId) {
    throw new Error(`Notion is not configured: set NOTION_TOKEN and ${dbEnvVar}.`);
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parent: { database_id: databaseId }, properties }),
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text();
    // Logged server-side only (visible in Vercel → Logs); never sent to the browser.
    console.error(`Notion API error (${dbEnvVar})`, res.status, detail);
    throw new Error("Notion rejected the request.");
  }
}

export async function createFellowshipApplication(app: FellowshipApplication) {
  await notionCreatePage("NOTION_FELLOWSHIP_DB_ID", {
    Name: title(app.name),
    Email: { email: app.email },
    Country: text(app.country),
    LinkedIn: { url: app.linkedin },
    Resume: { url: app.resume },
    Workstreams: { multi_select: app.workstreams.map((name) => ({ name })) },
    "Cover letter": text(app.letter),
    "Hours a week": select(app.hours),
    "Membership acknowledged": { checkbox: app.membershipAcknowledged },
    "Alumni opt-in": { checkbox: app.alumniOptIn },
    Stage: select("New"),
    Applied: { date: { start: new Date().toISOString() } },
  });
}
