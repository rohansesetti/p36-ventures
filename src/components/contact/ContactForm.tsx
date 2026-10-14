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
      <p className="text-sm leading-relaxed text-navy-900/85">
        Thank you. Your inquiry has been received—we review a limited
        number of partnerships each year and will respond if there is a fit.
      </p>
    );
  }

  const field =
    "mt-3 w-full border-0 border-b border-navy-900/20 bg-transparent py-2.5 text-sm text-navy-900 outline-none transition-colors placeholder:text-navy-900/35 focus:border-navy-900/50";

  return (
    <form onSubmit={handleSubmit} className="relative space-y-10">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-[10px] font-semibold uppercase tracking-widest text-navy-900/45"
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
          className="block text-[10px] font-semibold uppercase tracking-widest text-navy-900/45"
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
          className="block text-[10px] font-semibold uppercase tracking-widest text-navy-900/45"
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
          className="block text-[10px] font-semibold uppercase tracking-widest text-navy-900/45"
        >
          Primary objective
        </label>
        <select
          id="contact-objective"
          name="objective"
          required
          className={`${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%230A192F' stroke-opacity='0.35' stroke-linecap='round' stroke-width='1' d='m1 1.5 5 4 5-4'/%3E%3C/svg%3E")`,
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
        className="mt-4 w-full disabled:cursor-wait disabled:opacity-50 border border-navy-900/20 bg-white px-6 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-navy-900 shadow-[0_1px_2px_rgba(10,25,47,0.05)] transition-colors hover:border-navy-900/40 hover:bg-white"
      >
        {sending ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}
