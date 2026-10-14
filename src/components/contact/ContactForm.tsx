"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

import { briefingObjectives as objectives } from "@/data/forms";

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledEmail = searchParams.get("email") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState(prefilledEmail);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSending(true);
    try {
      const res = await fetch("/api/briefing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setError(payload?.error ?? "Something went wrong. Try again, or email services@p36ventures.com.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-[36rem]" role="status">
        <p className="heading-serif text-[1.5rem] font-light leading-[1.3]">
          Inquiry received.
        </p>
        <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft">
          We take on a limited number of companies each year and will respond
          within two business days if there is a fit.
        </p>
      </div>
    );
  }

  const field =
    "mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

  return (
    <form onSubmit={handleSubmit} className="relative max-w-[36rem] space-y-8">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
        >
          Institutional email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="contact-linkedin"
          className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
        >
          LinkedIn
        </label>
        <input
          id="contact-linkedin"
          name="linkedin"
          type="url"
          required
          placeholder="https://"
          autoComplete="url"
          className={field}
        />
      </div>
      <div>
        <label
          htmlFor="contact-objective"
          className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
        >
          Primary objective
        </label>
        <select
          id="contact-objective"
          name="objective"
          required
          className={`${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%231A1A1A' stroke-opacity='0.45' stroke-linecap='round' stroke-width='1' d='m1 1.5 5 4 5-4'/%3E%3C/svg%3E")`,
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          {objectives.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? (
        <p role="alert" className="border-l-2 border-[#9b2c2c] pl-4 text-[14px] text-[#9b2c2c]">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="cta-solid mt-2"
      >
        {sending ? "Sending…" : "Submit inquiry →"}
      </button>
    </form>
  );
}
