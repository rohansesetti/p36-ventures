import { createFellowshipApplication } from "@/lib/notion";
import { workstreams } from "@/data/fellowship";

const STATUSES = ["Student", "Working", "Other"];
const HOURS = ["Under 10", "10–15", "15–20", "20+"];
const SOURCES = ["LinkedIn", "University", "Referral", "P36 website", "Other"];
const WHY_LIMIT = 500;

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field.
  if (str(body.website)) {
    return Response.json({ ok: true });
  }

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const country = str(body.country, 100);
  const status = str(body.status, 50);
  const organisation = str(body.organisation, 200);
  const linkedin = str(body.linkedin, 300);
  const why = typeof body.why === "string" ? body.why.trim() : "";
  const hours = str(body.hours, 50);
  const source = str(body.source, 50);
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
    !STATUSES.includes(status) ||
    !/^https?:\/\/.+/.test(linkedin) ||
    streamTitles.length === 0 ||
    !why ||
    why.length > WHY_LIMIT ||
    !HOURS.includes(hours) ||
    (source !== "" && !SOURCES.includes(source)) ||
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
      status,
      organisation,
      linkedin,
      workstreams: streamTitles,
      why,
      hours,
      source,
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
