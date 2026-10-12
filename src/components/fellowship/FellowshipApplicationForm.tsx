"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { cohort, membership, workstreams } from "@/data/fellowship";

const field =
  "mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

const label =
  "block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint";

const selectClass = `${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`;

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%231A1A1A' stroke-opacity='0.45' stroke-linecap='round' stroke-width='1' d='m1 1.5 5 4 5-4'/%3E%3C/svg%3E")`,
};

const statuses = ["Student", "Working", "Other"] as const;
const hours = ["Under 10", "10–15", "15–20", "20+"] as const;
const sources = ["LinkedIn", "University", "Referral", "P36 website", "Other"] as const;

const WHY_LIMIT = 500;

type Errors = Partial<Record<string, string>>;

export function FellowshipApplicationForm() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("stream") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [why, setWhy] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setServerError("");
    const data = new FormData(e.currentTarget);
    const next: Errors = {};

    if (!String(data.get("name") ?? "").trim()) next.name = "Enter your full name.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter an email address in the format name@example.com.";
    if (!String(data.get("country") ?? "").trim()) next.country = "Enter your country.";
    if (!data.get("status")) next.status = "Select your current status.";
    const linkedin = String(data.get("linkedin") ?? "").trim();
    if (!/^https?:\/\/.+/.test(linkedin))
      next.linkedin = "Enter your LinkedIn URL, starting with https://.";
    if (data.getAll("streams").length === 0)
      next.streams = "Select at least one workstream.";
    if (!why.trim()) next.why = "Tell us why private markets.";
    if (why.length > WHY_LIMIT)
      next.why = `Keep this to ${WHY_LIMIT} characters or fewer.`;
    if (!data.get("hours")) next.hours = "Select the hours you can commit.";
    if (!data.get("ack-membership"))
      next["ack-membership"] = "Confirm you understand the Fellowship is unpaid and the membership terms.";
    if (!data.get("ack-privacy"))
      next["ack-privacy"] = "Confirm you have read the privacy notice.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/fellowship/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email,
          country: data.get("country"),
          status: data.get("status"),
          organisation: data.get("organisation"),
          linkedin,
          streams: data.getAll("streams"),
          why,
          hours: data.get("hours"),
          source: data.get("source") ?? "",
          ackMembership: data.get("ack-membership") === "on",
          ackPrivacy: data.get("ack-privacy") === "on",
          alumniOptIn: data.get("alumni-optin") === "on",
          website: data.get("website") ?? "",
        }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setServerError(
          payload?.error ??
            "The application could not be sent. Try again, or email hello@p36ventures.com.",
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError(
        "The application could not be sent. Check your connection and try again.",
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-[36rem]" role="status">
        <p className="heading-serif text-[1.5rem] font-light leading-[1.3]">
          Application received.
        </p>
        <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft">
          We will email a video screen invitation within{" "}
          {cohort.screenReplyDays} days.
        </p>
      </div>
    );
  }

  const err = (key: string) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-2 text-[13px] text-[#9b2c2c]">
        {errors[key]}
      </p>
    ) : null;

  const describedBy = (key: string) => (errors[key] ? `${key}-error` : undefined);
  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit} noValidate className="relative max-w-[36rem] space-y-8">
      {errorCount > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="border-l-2 border-[#9b2c2c] pl-4 outline-none"
        >
          <p className="text-[14px] text-ink">
            {errorCount === 1 ? "One field needs attention." : `${errorCount} fields need attention.`}
          </p>
          <ul className="mt-2 space-y-1">
            {Object.entries(errors).map(([key, msg]) => (
              <li key={key}>
                <a href={`#f-${key}`} className="text-[13px] text-[#9b2c2c] underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <label htmlFor="f-name" className={label}>Full name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" className={field}
          aria-invalid={!!errors.name} aria-describedby={describedBy("name")} />
        {err("name")}
      </div>

      <div>
        <label htmlFor="f-email" className={label}>Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" className={field}
          aria-invalid={!!errors.email} aria-describedby={describedBy("email")} />
        {err("email")}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="f-country" className={label}>Country</label>
          <input id="f-country" name="country" type="text" autoComplete="country-name" className={field}
            aria-invalid={!!errors.country} aria-describedby={describedBy("country")} />
          {err("country")}
        </div>
        <div>
          <label htmlFor="f-status" className={label}>Current status</label>
          <select id="f-status" name="status" defaultValue="" className={selectClass} style={selectStyle}
            aria-invalid={!!errors.status} aria-describedby={describedBy("status")}>
            <option value="" disabled>Select one</option>
            {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {err("status")}
        </div>
      </div>

      <div>
        <label htmlFor="f-org" className={label}>University or employer (optional)</label>
        <input id="f-org" name="organisation" type="text" autoComplete="organization" className={field} />
      </div>

      <div>
        <label htmlFor="f-linkedin" className={label}>LinkedIn</label>
        <input id="f-linkedin" name="linkedin" type="url" placeholder="https://" autoComplete="url" className={field}
          aria-invalid={!!errors.linkedin} aria-describedby={describedBy("linkedin")} />
        {err("linkedin")}
      </div>

      <fieldset id="f-streams" tabIndex={-1} aria-describedby={describedBy("streams")} className="outline-none">
        <legend className={label}>Workstreams of interest</legend>
        <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          {workstreams.map((ws) => (
            <label key={ws.id} className="flex cursor-pointer items-center gap-3 border-b border-line py-3 text-[14.5px] text-ink">
              <input type="checkbox" name="streams" value={ws.id} defaultChecked={prefill === ws.id}
                className="h-4 w-4 accent-[var(--ink)]" />
              {ws.title}
            </label>
          ))}
        </div>
        {err("streams")}
      </fieldset>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="f-why" className={label}>Why private markets?</label>
          <span className={`text-[12px] ${why.length > WHY_LIMIT ? "text-[#9b2c2c]" : "text-ink-faint"}`} aria-live="polite">
            {why.length} / {WHY_LIMIT}
          </span>
        </div>
        <textarea id="f-why" name="why" rows={5} value={why} onChange={(e) => setWhy(e.target.value)}
          placeholder="The work you have already done and what you want to learn."
          className={`${field} resize-y`} aria-invalid={!!errors.why} aria-describedby={describedBy("why")} />
        {err("why")}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="f-hours" className={label}>Hours a week</label>
          <select id="f-hours" name="hours" defaultValue="" className={selectClass} style={selectStyle}
            aria-invalid={!!errors.hours} aria-describedby={describedBy("hours")}>
            <option value="" disabled>Select one</option>
            {hours.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
          {err("hours")}
        </div>
        <div>
          <label htmlFor="f-source" className={label}>How you heard about us</label>
          <select id="f-source" name="source" defaultValue="" className={selectClass} style={selectStyle}>
            <option value="" disabled>Select one</option>
            {sources.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4 border-t border-line pt-8">
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-ink-soft">
            <input id="f-ack-membership" type="checkbox" name="ack-membership"
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]"
              aria-invalid={!!errors["ack-membership"]} aria-describedby={describedBy("ack-membership")} />
            <span>
              I understand the Fellowship is unpaid and that selected fellows
              activate a {membership.price} membership (
              <Link href="/opportunities/fellowship/membership" target="_blank" rel="noopener"
                className="text-ink underline underline-offset-2">
                how membership works
              </Link>
              ).
            </span>
          </label>
          {err("ack-membership")}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-ink-soft">
            <input id="f-ack-privacy" type="checkbox" name="ack-privacy"
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]"
              aria-invalid={!!errors["ack-privacy"]} aria-describedby={describedBy("ack-privacy")} />
            <span>
              I have read the{" "}
              <Link href="/privacy" target="_blank" rel="noopener" className="text-ink underline underline-offset-2">
                privacy notice
              </Link>
              .
            </span>
          </label>
          {err("ack-privacy")}
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-ink-soft">
          <input type="checkbox" name="alumni-optin" className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]" />
          <span>Include my profile in the P36 alumni network shared with partner firms (optional).</span>
        </label>
      </div>

      {/* Honeypot: hidden from people and screen readers; bots tend to fill it. */}
      <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError ? (
        <p role="alert" className="border-l-2 border-[#9b2c2c] pl-4 text-[14px] text-[#9b2c2c]">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="cta-link mt-2 cursor-pointer border-x-0 border-t-0 bg-transparent disabled:cursor-wait disabled:opacity-50"
      >
        {sending ? "Sending…" : "Submit application →"}
      </button>
    </form>
  );
}
