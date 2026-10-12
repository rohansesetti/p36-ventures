/**
 * Minimal Notion writer for fellowship applications.
 * Server-only: reads NOTION_TOKEN and NOTION_FELLOWSHIP_DB_ID from the environment.
 * Uses the REST API directly so no extra package is needed.
 *
 * The Notion database must have these properties (names and types must match):
 *   Name                      Title
 *   Email                     Email
 *   Country                   Text
 *   Status                    Select
 *   Organisation              Text
 *   LinkedIn                  URL
 *   Workstreams               Multi-select
 *   Why private markets       Text
 *   Hours a week              Select
 *   Source                    Select
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
  status: string;
  organisation: string;
  linkedin: string;
  workstreams: string[];
  why: string;
  hours: string;
  source: string;
  membershipAcknowledged: boolean;
  alumniOptIn: boolean;
};

const text = (value: string) => ({
  rich_text: value ? [{ type: "text", text: { content: value.slice(0, 2000) } }] : [],
});

const select = (value: string) => (value ? { select: { name: value } } : { select: null });

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
        Status: select(app.status),
        Organisation: text(app.organisation),
        LinkedIn: { url: app.linkedin },
        Workstreams: { multi_select: app.workstreams.map((name) => ({ name })) },
        "Why private markets": text(app.why),
        "Hours a week": select(app.hours),
        Source: select(app.source),
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
