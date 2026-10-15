import type { CSSProperties } from "react";

/**
 * Hero centrepiece for the Fellowship page: an excerpt of a fellow's draft
 * with core-team review notes in the margin. Figures are illustrative and
 * internally consistent (cash / burn = runway; round / post-money = ownership).
 */

type Row = {
  label: string;
  value: string;
  kind?: "subtotal" | "key";
  note?: number;
};

const rows: Row[] = [
  { label: "Annual recurring revenue", value: "1,200,000" },
  { label: "Net revenue retention", value: "112%", note: 1 },
  { label: "Gross margin", value: "78%" },
  { label: "Monthly burn", value: "(310,000)", note: 2 },
  { label: "Cash on hand", value: "4,650,000" },
  { label: "Runway (months)", value: "15.0", kind: "key" },
  { label: "Seed round", value: "3,000,000" },
  { label: "Pre-money valuation", value: "12,000,000" },
  { label: "Post-money valuation", value: "15,000,000", kind: "subtotal" },
  { label: "New investor ownership", value: "20.0%", kind: "key", note: 3 },
];

const notes = [
  { n: 1, text: "112% on a six-month cohort. Show the twelve-month figure before you lead with it." },
  { n: 2, text: "Burn leaves out the two hires in the plan. Add them and runway drops." },
  { n: 3, text: "Check where the option pool top-up sits. Pre- or post-money changes founder dilution." },
];

// Notes appear one after another on load; global reduced-motion rule flattens this.
const noteDelay = (n: number) => ({ "--d": `${500 + n * 450}ms` }) as CSSProperties;

export function LiveFile() {
  return (
    <figure className="live-file relative border border-line bg-paper shadow-[0_1px_0_var(--line-soft),0_24px_48px_-32px_rgba(26,26,26,0.35)]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line px-5 py-4 md:px-7">
        <p className="heading-serif text-[1.0625rem] font-normal text-ink">
          Northwind Analytics, seed model
        </p>
        <p className="text-[12px] text-ink-faint">
          VC track, draft 2, week 3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_14rem]">
        {/* The sheet */}
        <div className="overflow-x-auto px-5 py-4 md:border-r md:border-line md:px-7 md:py-5">
          <table className="w-full min-w-[18rem] border-collapse text-[13.5px] leading-[1.45] [font-variant-numeric:tabular-nums]">
            <caption className="sr-only">
              Illustrative seed-stage model excerpt with reviewer notes
            </caption>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className={`${row.note ? "live-file__flag" : ""} ${
                    row.kind === "subtotal" ? "border-t border-line" : ""
                  }`}
                  style={row.note ? noteDelay(row.note) : undefined}
                >
                  <th
                    scope="row"
                    className={`py-[7px] pr-4 text-left font-normal ${
                      row.kind ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {row.label}
                  </th>
                  <td
                    className={`py-[7px] text-right ${
                      row.kind === "key"
                        ? "heading-serif text-[15px] text-ink"
                        : row.kind === "subtotal"
                          ? "font-medium text-ink"
                          : "text-ink-soft"
                    }`}
                  >
                    {row.value}
                  </td>
                  <td className="w-7 py-[7px] pl-2 text-right">
                    {row.note ? (
                      <span
                        className="live-file__note heading-serif text-[13px] italic text-accent"
                        style={noteDelay(row.note)}
                        aria-label={`Review note ${row.note}`}
                      >
                        {row.note}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Review margin */}
        <aside
          aria-label="Review notes"
          className="border-t border-line bg-paper-2/60 px-5 py-4 md:border-t-0 md:px-5 md:py-5"
        >
          <p className="text-[12.5px] leading-[1.5] text-ink-faint">
            Reviewed by Rohan Sesetti, CEO
          </p>
          <ol className="mt-3 flex flex-col gap-4">
            {notes.map((note) => (
              <li
                key={note.n}
                className="live-file__note grid grid-cols-[1rem_1fr] gap-2"
                style={noteDelay(note.n)}
              >
                <span className="heading-serif text-[13px] italic text-accent">
                  {note.n}
                </span>
                <span className="heading-serif text-[14px] italic leading-[1.5] text-ink">
                  {note.text}
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <figcaption className="border-t border-line px-5 py-2.5 text-[11.5px] text-ink-faint md:px-7">
        Illustrative excerpt. Not a client file.
      </figcaption>
    </figure>
  );
}
