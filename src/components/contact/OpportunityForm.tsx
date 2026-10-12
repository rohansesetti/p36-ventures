"use client";

import { opportunities } from "@/data/opportunities";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

import { deskCities as cities } from "@/data/forms";

const field =
  "mt-2 w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-ink";

const label =
  "block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint";

const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 12 8'%3E%3Cpath stroke='%231A1A1A' stroke-opacity='0.45' stroke-linecap='round' stroke-width='1' d='m1 1.5 5 4 5-4'/%3E%3C/svg%3E")`,
};

export function OpportunityForm() {
  const searchParams = useSearchParams();
  const prefilledRole = searchParams.get("role") ?? "";
  const known = opportunities.some((o) => o.id === prefilledRole);
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSending(true);
    try {
      const res = await fetch("/api/desks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        setError(payload?.error ?? "Something went wrong. Try again, or email hello@p36ventures.com.");
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
      <p className="max-w-[36rem] text-[15px] leading-[1.7] text-ink-soft">
        Received. We read every application and reply when there is a seat.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-[36rem] space-y-8">
      <div>
        <label htmlFor="opp-role" className={label}>
          Role
        </label>
        <select
          key={known ? prefilledRole : "none"}
          id="opp-role"
          name="role"
          required
          defaultValue={known ? prefilledRole : ""}
          className={`${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`}
          style={selectStyle}
        >
          <option value="" disabled>
            Select one
          </option>
          {opportunities.map((role) => (
            <option key={role.id} value={role.id}>
              {role.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="opp-name" className={label}>
          Name
        </label>
        <input
          id="opp-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="opp-email" className={label}>
          Email
        </label>
        <input
          id="opp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="opp-linkedin" className={label}>
          LinkedIn
        </label>
        <input
          id="opp-linkedin"
          name="linkedin"
          type="url"
          required
          placeholder="https://"
          autoComplete="url"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="opp-city" className={label}>
          Where you sit
        </label>
        <select
          id="opp-city"
          name="city"
          required
          defaultValue=""
          className={`${field} cursor-pointer appearance-none bg-[length:12px] bg-[right_0_top_50%] bg-no-repeat pr-8`}
          style={selectStyle}
        >
          <option value="" disabled>
            Select one
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="opp-note" className={label}>
          Why this seat
        </label>
        <textarea
          id="opp-note"
          name="note"
          required
          rows={4}
          placeholder="The work you have done, the network you sit in, and why this file."
          className={`${field} resize-y`}
        />
      </div>
      <div aria-hidden className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="opp-website">Website</label>
        <input id="opp-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
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
        className="cta-link mt-2 cursor-pointer border-none bg-transparent disabled:cursor-wait disabled:opacity-50"
      >
        {sending ? "Sending…" : "Submit application →"}
      </button>
    </form>
  );
}
