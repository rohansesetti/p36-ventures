import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * Isometric cube stack, in the spirit of Hexa's Start/Sprint/Scale lotties.
 * A 3×3×3 wireframe container that fills up as the track progresses.
 */
const N = 3;
const UNIT = 26;
const ORIGIN_X = 70;
const ORIGIN_Y = 82;
const COS_30 = 0.8660254;

type Cell = { x: number; y: number; h: number };

function project(x: number, y: number, z: number): [number, number] {
  return [
    ORIGIN_X + (x - y) * COS_30 * UNIT,
    ORIGIN_Y + (x + y) * 0.5 * UNIT - z * UNIT,
  ];
}

function poly(points: [number, number][]) {
  return points.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}

/** Floor plus the two rear walls of the container. */
const wireframe: [[number, number, number], [number, number, number]][] = [];
for (let i = 0; i <= N; i++) {
  wireframe.push([[i, 0, 0], [i, N, 0]]);
  wireframe.push([[0, i, 0], [N, i, 0]]);
  wireframe.push([[i, 0, 0], [i, 0, N]]);
  wireframe.push([[0, 0, i], [N, 0, i]]);
  wireframe.push([[0, i, 0], [0, i, N]]);
  wireframe.push([[0, 0, i], [0, N, i]]);
}

const tracks = [
  {
    id: "start",
    range: "Formation",
    title: "Form",
    desc: "Entity, product definition, and the first operating cadence.",
    href: "/studio#studio",
    accent: false,
    cells: [
      { x: 1, y: 1, h: 2 },
      { x: 2, y: 0, h: 1 },
      { x: 1, y: 2, h: 1 },
    ] satisfies Cell[],
  },
  {
    id: "sprint",
    range: "Capital",
    title: "Raise",
    desc: "Structure, diligence, and process management through close.",
    href: "/studio#capital",
    accent: false,
    cells: [
      { x: 0, y: 1, h: 2 },
      { x: 1, y: 1, h: 3 },
      { x: 2, y: 0, h: 1 },
      { x: 1, y: 2, h: 2 },
      { x: 2, y: 1, h: 2 },
      { x: 2, y: 2, h: 1 },
    ] satisfies Cell[],
  },
  {
    id: "scale",
    range: "Scale",
    title: "Scale",
    desc: "Fractional leadership and governance as the company matures.",
    href: "/what-we-do",
    accent: true,
    cells: [
      { x: 0, y: 0, h: 3 },
      { x: 0, y: 1, h: 3 },
      { x: 0, y: 2, h: 2 },
      { x: 1, y: 0, h: 3 },
      { x: 1, y: 1, h: 3 },
      { x: 1, y: 2, h: 2 },
      { x: 2, y: 0, h: 2 },
      { x: 2, y: 1, h: 2 },
      { x: 2, y: 2, h: 1 },
    ] satisfies Cell[],
  },
] as const;

function CubeStack({ id, cells }: { id: string; cells: readonly Cell[] }) {
  const hatchId = `hatch-${id}`;
  const topGradientId = `grad-top-${id}`;

  // Painter's algorithm: greater x+y sits nearer the viewer, so draw it last.
  const ordered = [...cells].sort((a, b) => a.x + a.y - (b.x + b.y));

  return (
    <svg
      viewBox="0 0 140 168"
      className="h-full w-auto"
      aria-hidden
    >
      <defs>
        <pattern
          id={hatchId}
          width="5"
          height="5"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-30)"
        >
          <line
            x1="0"
            y1="0"
            x2="5"
            y2="0"
            stroke="var(--ink)"
            strokeOpacity="0.3"
            strokeWidth="0.7"
          />
        </pattern>

        {/* Brighter top face keeps the three faces readable once everything is gold */}
        <linearGradient id={topGradientId} x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#EFC96F" />
          <stop offset="100%" stopColor="#D2A245" />
        </linearGradient>
      </defs>

      <g stroke="var(--ink)" strokeOpacity="0.15" strokeWidth="0.8">
        {wireframe.map(([a, b], i) => {
          const [x1, y1] = project(...a);
          const [x2, y2] = project(...b);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {ordered.map(({ x, y, h }, i) => {
        const top = poly([
          project(x, y, h),
          project(x + 1, y, h),
          project(x + 1, y + 1, h),
          project(x, y + 1, h),
        ]);
        const right = poly([
          project(x + 1, y, h),
          project(x + 1, y, 0),
          project(x + 1, y + 1, 0),
          project(x + 1, y + 1, h),
        ]);
        const left = poly([
          project(x, y + 1, h),
          project(x, y + 1, 0),
          project(x + 1, y + 1, 0),
          project(x + 1, y + 1, h),
        ]);

        const divisions = Array.from({ length: h - 1 }, (_, k) => k + 1);

        return (
          <g
            key={`${x}-${y}`}
            className="cube"
            style={{ "--cube-delay": `${i * 55}ms` } as CSSProperties}
            stroke="var(--ink)"
            strokeOpacity="0.55"
            strokeWidth="0.9"
            strokeLinejoin="round"
          >
            <polygon points={right} fill="#E4E3DF" />
            <polygon points={left} fill="#ECEBE8" />
            <polygon points={left} fill={`url(#${hatchId})`} />
            <polygon points={top} fill="#F7F7F5" />

            <g className="cube-gold">
              <polygon points={right} fill="#7A5F2E" />
              <polygon points={left} fill="#A8813A" />
              <polygon points={left} fill={`url(#${hatchId})`} />
              <polygon points={top} fill={`url(#${topGradientId})`} />
            </g>

            <g strokeOpacity="0.22">
              {divisions.map((k) => {
                const [rx1, ry1] = project(x + 1, y, k);
                const [rx2, ry2] = project(x + 1, y + 1, k);
                const [lx1, ly1] = project(x, y + 1, k);
                const [lx2, ly2] = project(x + 1, y + 1, k);
                return (
                  <g key={k}>
                    <line x1={rx1} y1={ry1} x2={rx2} y2={ry2} />
                    <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} />
                  </g>
                );
              })}
            </g>
          </g>
        );
      })}
    </svg>
  );
}

export function StageTracks() {
  return (
    <section id="tracks" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="heading-serif mb-12 max-w-[46rem] text-[clamp(1.375rem,2.6vw,1.875rem)] font-light leading-[1.4]">
            We engage at three points in the company lifecycle.{" "}
            <span className="text-ink-soft">
              The same standard of work at each — named deliverables, not
              open-ended advice.
            </span>
          </p>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {tracks.map((track, i) => (
              <li
                key={track.id}
                className={`track-card relative flex flex-col items-center px-6 py-12 text-center transition-colors duration-400 hover:bg-paper-2/40 ${
                  i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""
                }`}
              >
                <Link
                  href={track.href}
                  className="absolute inset-0 z-[2] no-underline"
                  aria-label={`${track.title} — ${track.range}`}
                />

                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-ink-faint">
                  {track.range}
                </p>

                <h3 className="track-title heading-serif mt-4 text-[clamp(2.5rem,5vw,3.75rem)] font-light uppercase leading-none tracking-[0.02em]">
                  {track.title}
                </h3>

                <div className="my-10 h-[168px]">
                  <CubeStack id={track.id} cells={track.cells} />
                </div>

                <p className="mt-auto max-w-[248px] text-[13.5px] leading-[1.65] text-ink-soft">
                  {track.desc}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
