"use client";

import { opportunities } from "@/data/opportunities";
import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

const cities = ["Delhi", "New York", "London", "Other"] as const;

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="max-w-[36rem] text-[15px] leading-[1.7] text-ink-soft">
        Received. We read every application and reply when there is a seat.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-[36rem] space-y-8">
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
      <button
        type="submit"
        className="cta-link mt-2 cursor-pointer border-none bg-transparent"
      >
        Submit application →
      </button>
    </form>
  );
}
