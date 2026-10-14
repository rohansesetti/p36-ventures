import { notionCreatePage, select, text, title } from "@/lib/notion";
import { deskCities, isEmail, isUrl } from "@/data/forms";
import { opportunities } from "@/data/opportunities";

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

/**
 * Desk application (Opportunities page) → Notion database NOTION_DESKS_DB_ID.
 * Properties: Name (Title), Email (Email), LinkedIn (URL), Desk (Select),
 * City (Select), Why this seat (Text), Stage (Select), Received (Date)
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  if (str(body.website)) return Response.json({ ok: true });

  const role = opportunities.find((o) => o.id === str(body.role, 100));
  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const linkedin = str(body.linkedin, 500);
  const city = str(body.city, 50);
  const note = typeof body.note === "string" ? body.note.trim().slice(0, 6000) : "";

  if (
    !role ||
    !name ||
    !isEmail(email) ||
    !isUrl(linkedin) ||
    !(deskCities as readonly string[]).includes(city) ||
    !note
  ) {
    return Response.json({ error: "Check the form and try again." }, { status: 400 });
  }

  try {
    await notionCreatePage("NOTION_DESKS_DB_ID", {
      Name: title(name),
      Email: { email },
      LinkedIn: { url: linkedin },
      Desk: select(role.title),
      City: select(city),
      "Why this seat": text(note),
      Stage: select("New"),
      Received: { date: { start: new Date().toISOString() } },
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Your application could not be sent. Try again, or email services@p36ventures.com." },
      { status: 502 },
    );
  }
  return Response.json({ ok: true });
}
