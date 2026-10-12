import { createFellowshipApplication } from "@/lib/notion";
import { HOURS, LETTER_LIMIT, workstreams } from "@/data/fellowship";

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const isUrl = (v: string) => /^https?:\/\/.+/.test(v);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field.
  if (str(body.website)) return Response.json({ ok: true });

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const country = str(body.country, 100);
  const linkedin = str(body.linkedin, 500);
  const resume = str(body.resume, 1000);
  const letter = typeof body.letter === "string" ? body.letter.trim() : "";
  const hours = str(body.hours, 50);
  const streamIds = Array.isArray(body.streams)
    ? body.streams.filter((s): s is string => typeof s === "string")
    : [];
  const streamTitles = workstreams
    .filter((w) => streamIds.includes(w.id))
    .map((w) => w.title);

  const invalid =
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !country ||
    !isUrl(linkedin) ||
    !isUrl(resume) ||
    streamTitles.length === 0 ||
    !letter ||
    letter.length > LETTER_LIMIT ||
    !(HOURS as readonly string[]).includes(hours) ||
    body.ackMembership !== true ||
    body.ackPrivacy !== true;

  if (invalid) {
    return Response.json(
      { error: "Some fields are missing or invalid. Check the form and try again." },
      { status: 400 },
    );
  }

  try {
    await createFellowshipApplication({
      name,
      email,
      country,
      linkedin,
      resume,
      workstreams: streamTitles,
      letter,
      hours,
      membershipAcknowledged: true,
      alumniOptIn: body.alumniOptIn === true,
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "The application could not be sent. Try again, or email hello@p36ventures.com." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
