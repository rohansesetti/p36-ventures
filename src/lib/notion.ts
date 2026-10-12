/**
 * Minimal Notion writer for fellowship applications.
 * Server-only: reads NOTION_TOKEN and NOTION_FELLOWSHIP_DB_ID from the environment.
 * Uses the REST API directly so no extra package is needed.
 *
 * The Notion database must have these properties (names and types must match):
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

/** Notion caps each text block at 2,000 characters, so long text is split. */
const text = (value: string) => {
  const chunks: string[] = [];
  for (let i = 0; i < value.length; i += 2000) chunks.push(value.slice(i, i + 2000));
  return {
    rich_text: chunks.map((content) => ({ type: "text", text: { content } })),
  };
};

export async function createFellowshipApplication(app: FellowshipApplication) {
  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_FELLOWSHIP_DB_ID;

  if (!token || !databaseId) {
    throw new Error("Notion is not configured: set NOTION_TOKEN and NOTION_FELLOWSHIP_DB_ID.");
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: databaseId },
      properties: {
        Name: { title: [{ type: "text", text: { content: app.name.slice(0, 200) } }] },
        Email: { email: app.email },
        Country: text(app.country),
        LinkedIn: { url: app.linkedin },
        Resume: { url: app.resume },
        Workstreams: { multi_select: app.workstreams.map((name) => ({ name })) },
        "Cover letter": text(app.letter),
        "Hours a week": { select: { name: app.hours } },
        "Membership acknowledged": { checkbox: app.membershipAcknowledged },
        "Alumni opt-in": { checkbox: app.alumniOptIn },
        Stage: { select: { name: "New" } },
        Applied: { date: { start: new Date().toISOString() } },
      },
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const detail = await res.text();
    // Logged server-side only (visible in Vercel → Logs); never sent to the browser.
    console.error("Notion API error", res.status, detail);
    throw new Error("Notion rejected the application.");
  }
}
