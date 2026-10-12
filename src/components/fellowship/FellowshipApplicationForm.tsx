"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  HOURS,
  LETTER_LIMIT,
  cohort,
  membership,
  workstreams,
} from "@/data/fellowship";

const field =
  "mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

const label =
  "block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint";

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%231A1A1A' stroke-opacity='0.45' stroke-linecap='round' stroke-width='1' d='m1 1.5 5 4 5-4'/%3E%3C/svg%3E")`,
};

const errorText = "text-[#9b2c2c]";
const sendFail =
  "The application could not be sent. Try again, or email hello@p36ventures.com.";

type Errors = Partial<Record<string, string>>;

export function FellowshipApplicationForm() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("stream") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [letter, setLetter] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setServerError("");

    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};

    if (!get("name")) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
      next.email = "Enter a valid email address.";
    if (!get("country")) next.country = "Enter your country.";
    if (!/^https?:\/\/.+/.test(get("linkedin")))
      next.linkedin = "Enter your LinkedIn URL, starting with https://.";
    if (!/^https?:\/\/.+/.test(get("resume")))
      next.resume = "Enter a link to your resume, starting with https://.";
    if (data.getAll("streams").length === 0)
      next.streams = "Select at least one workstream.";
    if (!letter.trim()) next.letter = "Add a cover letter.";
    if (letter.length > LETTER_LIMIT)
      next.letter = `Keep the cover letter to ${LETTER_LIMIT.toLocaleString()} characters.`;
    if (!get("hours")) next.hours = "Select the hours you can commit.";
    if (!data.get("ack-membership"))
      next["ack-membership"] = "Confirm the membership terms.";
    if (!data.get("ack-privacy"))
      next["ack-privacy"] = "Confirm the privacy notice.";

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
          name: get("name"),
          email: get("email"),
          country: get("country"),
          linkedin: get("linkedin"),
          resume: get("resume"),
          streams: data.getAll("streams"),
          letter,
          hours: get("hours"),
          ackMembership: data.get("ack-membership") === "on",
          ackPrivacy: data.get("ack-privacy") === "on",
          alumniOptIn: data.get("alumni-optin") === "on",
          website: get("website"),
        }),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setServerError(payload?.error ?? sendFail);
        return;
      }
      setSubmitted(true);
    } catch {
      setServerError(sendFail);
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
          If shortlisted, you will hear from us within {cohort.replyDays} days
          to arrange an interview.
        </p>
      </div>
    );
  }

  const err = (key: string) =>
    errors[key] ? (
      <p id={`${key}-error`} className={`mt-2 text-[13px] ${errorText}`}>
        {errors[key]}
      </p>
    ) : null;

  const aria = (key: string) => ({
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={handleSubmit} noValidate className="relative max-w-[36rem] space-y-8">
      {errorCount > 0 ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border-l-2 border-[#9b2c2c] pl-4 outline-none">
          <p className="text-[14px] text-ink">
            {errorCount === 1 ? "One field needs attention." : `${errorCount} fields need attention.`}
          </p>
          <ul className="mt-2 space-y-1">
            {Object.entries(errors).map(([key, msg]) => (
              <li key={key}>
                <a href={`#f-${key}`} className={`text-[13px] underline underline-offset-2 ${errorText}`}>
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <label htmlFor="f-name" className={label}>Full name</label>
        <input id="f-name" name="name" type="text" autoComplete="name" className={field} {...aria("name")} />
        {err("name")}
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="f-email" className={label}>Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="f-country" className={label}>Country</label>
          <input id="f-country" name="country" type="text" autoComplete="country-name" className={field} {...aria("country")} />
          {err("country")}
        </div>
      </div>

      <div>
        <label htmlFor="f-linkedin" className={label}>LinkedIn</label>
        <input id="f-linkedin" name="linkedin" type="url" placeholder="https://" autoComplete="url" className={field} {...aria("linkedin")} />
        {err("linkedin")}
      </div>

      <div>
        <label htmlFor="f-resume" className={label}>Resume link</label>
        <input id="f-resume" name="resume" type="url" placeholder="https://" className={field} {...aria("resume")} />
        <p className="mt-2 text-[12.5px] text-ink-faint">
          A shareable PDF link (Google Drive, Dropbox or similar), viewable by anyone with the link.
        </p>
        {err("resume")}
      </div>

      <fieldset id="f-streams" tabIndex={-1} className="outline-none" {...aria("streams")}>
        <legend className={label}>Workstreams</legend>
        <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          {workstreams.map((ws) => (
            <label key={ws.id} className="flex cursor-pointer items-center gap-3 border-b border-line py-3 text-[14.5px] text-ink">
              <input type="checkbox" name="streams" value={ws.id} defaultChecked={prefill === ws.id} className="h-4 w-4 accent-[var(--ink)]" />
              {ws.title}
            </label>
          ))}
        </div>
        {err("streams")}
      </fieldset>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="f-letter" className={label}>Cover letter</label>
          <span className={`text-[12px] ${letter.length > LETTER_LIMIT ? errorText : "text-ink-faint"}`} aria-live="polite">
            {letter.length.toLocaleString()} / {LETTER_LIMIT.toLocaleString()}
          </span>
        </div>
        <textarea id="f-letter" name="letter" rows={9} value={letter} onChange={(ev) => setLetter(ev.target.value)}
          className={`${field} resize-y`} {...aria("letter")} />
        {err("letter")}
      </div>

      <div className="sm:max-w-[16rem]">
        <label htmlFor="f-hours" className={label}>Hours a week</label>
        <select id="f-hours" name="hours" defaultValue=""
          className={`${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`}
          style={selectStyle} {...aria("hours")}>
          <option value="" disabled>Select one</option>
          {HOURS.map((h) => <option key={h} value={h}>{h}</option>)}
        </select>
        {err("hours")}
      </div>

      <div className="space-y-4 border-t border-line pt-8">
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-ink-soft">
            <input id="f-ack-membership" type="checkbox" name="ack-membership" className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]" {...aria("ack-membership")} />
            <span>
              I understand the Fellowship is unpaid and selected fellows activate a {membership.price}{" "}
              <Link href="/opportunities/fellowship/membership" target="_blank" rel="noopener" className="text-ink underline underline-offset-2">
                membership
              </Link>
              .
            </span>
          </label>
          {err("ack-membership")}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-[1.6] text-ink-soft">
            <input id="f-ack-privacy" type="checkbox" name="ack-privacy" className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]" {...aria("ack-privacy")} />
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
          <span>Share my profile with partner firms (optional).</span>
        </label>
      </div>

      {/* Honeypot: hidden from people and screen readers; bots tend to fill it. */}
      <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError ? (
        <p role="alert" className={`border-l-2 border-[#9b2c2c] pl-4 text-[14px] ${errorText}`}>
          {serverError}
        </p>
      ) : null}

      <button type="submit" disabled={sending} aria-busy={sending}
        className="cta-link mt-2 cursor-pointer border-x-0 border-t-0 bg-transparent disabled:cursor-wait disabled:opacity-50">
        {sending ? "Sending…" : "Submit application →"}
      </button>
    </form>
  );
}
