import { notionCreatePage, select, title } from "@/lib/notion";
import { briefingObjectives, isEmail, isUrl } from "@/data/forms";

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/**
 * "Request a briefing" (Contact page) → Notion database NOTION_BRIEFINGS_DB_ID.
 * Properties: Name (Title), Email (Email), LinkedIn (URL), Objective (Select),
 * Stage (Select), Received (Date)
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (str(body.website)) return Response.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const linkedin = str(body.linkedin, 500);
  const objective = str(body.objective, 100);

  if (
    !name ||
    !isEmail(email) ||
    !isUrl(linkedin) ||
    !(briefingObjectives as readonly string[]).includes(objective)
  ) {
    return Response.json({ error: "Check the form and try again." }, { status: 400 });
  }

  try {
    await notionCreatePage("NOTION_BRIEFINGS_DB_ID", {
      Name: title(name),
      Email: { email },
      LinkedIn: { url: linkedin },
      Objective: select(objective),
      Stage: select("New"),
      Received: { date: { start: new Date().toISOString() } },
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Your inquiry could not be sent. Try again, or email services@p36ventures.com." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
