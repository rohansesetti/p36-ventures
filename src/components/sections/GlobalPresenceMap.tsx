"use client";

import { geoNaturalEarth1, geoPath } from "d3-geo";
import type { FeatureCollection, GeoJsonProperties } from "geojson";
import Link from "next/link";
import { useMemo } from "react";
import { feature } from "topojson-client";
import type { GeometryCollection } from "topojson-specification";
import type { Topology } from "topojson-specification";
import worldTopology from "world-atlas/countries-110m.json";

const VIEW_W = 1000;
const VIEW_H = 480;

type CountryProps = GeoJsonProperties & {
  ISO_A2?: string;
};

const hubs = [
  { name: "New York", lon: -74.006, lat: 40.7128, primary: true },
  { name: "London", lon: -0.1276, lat: 51.5074, primary: true },
  { name: "Miami", lon: -80.1918, lat: 25.7617, primary: false },
  { name: "Singapore", lon: 103.8198, lat: 1.3521, primary: false },
] as const;

/** Slightly stronger wash for core corridors (still subtle vs parchment). */
const CORRIDOR_ISO = new Set([
  "US",
  "CA",
  "MX",
  "BR",
  "GB",
  "IE",
  "FR",
  "DE",
  "NL",
  "CH",
  "IT",
  "ES",
  "PT",
  "AE",
  "SG",
  "AU",
  "IN",
  "JP",
]);

function landFill(iso: string | undefined) {
  if (!iso || iso === "-99") return "rgba(10,25,47,0.035)";
  if (iso === "AQ") return "rgba(10,25,47,0.02)";
  if (CORRIDOR_ISO.has(iso)) return "rgba(10,25,47,0.085)";
  return "rgba(10,25,47,0.048)";
}

export function GlobalPresenceMap() {
  const { paths, hubPoints } = useMemo(() => {
    const topo = worldTopology as unknown as Topology<{
      countries: GeometryCollection;
    }>;
    const land = feature(topo, topo.objects.countries) as FeatureCollection;

    const projection = geoNaturalEarth1().fitExtent(
      [
        [8, 8],
        [VIEW_W - 8, VIEW_H - 8],
      ],
      land,
    );
    const path = geoPath(projection);

    const paths = land.features
      .map((f, i) => {
        const d = path(f);
        if (!d) return null;
        const iso = (f.properties as CountryProps)?.ISO_A2;
        const id = String(f.id ?? f.properties?.name ?? i);
        return { d, id, iso };
      })
      .filter(Boolean) as { d: string; id: string; iso: string | undefined }[];

    const hubPoints = hubs.map((h) => {
      const c = projection([h.lon, h.lat]);
      return {
        ...h,
        x: c?.[0] ?? 0,
        y: c?.[1] ?? 0,
      };
    });

    return { paths, hubPoints };
  }, []);

  return (
    <div className="mt-20 border-t border-border-subtle pt-16 lg:mt-24 lg:pt-20">
      <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-12">
        <h3 className="font-serif text-3xl font-semibold italic tracking-tight text-[#0A192F] sm:text-4xl">
          Global presence
        </h3>
        <div className="mx-auto mt-4 h-px w-12 bg-[#93846F]" aria-hidden />
        <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
          Country boundaries from Natural Earth (110m)—styled to match P36
          parchment, ink, and gold. Hubs mark where we coordinate capital and
          partnerships.
        </p>
      </div>

      <div className="overflow-hidden rounded-sm border border-navy/10 bg-background shadow-[0_1px_3px_rgba(10,25,47,0.05)]">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-auto w-full"
          role="img"
          aria-label="World map with Natural Earth country boundaries and hub markers for New York, London, Miami, and Singapore."
        >
          <defs>
            <linearGradient
              id="gp-ocean"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#faf9f6" />
              <stop offset="100%" stopColor="#e8e5df" />
            </linearGradient>
          </defs>
          <rect width={VIEW_W} height={VIEW_H} fill="url(#gp-ocean)" />

          <g
            fillRule="evenodd"
            stroke="#0a192f"
            strokeOpacity={0.14}
            strokeWidth={0.35}
          >
            {paths.map(({ d, id, iso }) => (
              <path key={id} d={d} fill={landFill(iso)} vectorEffect="non-scaling-stroke" />
            ))}
          </g>

          {hubPoints.map((hub) => {
            const r = hub.primary ? 5.5 : 4;
            const labelOffset =
              hub.name === "London"
                ? { x: -46, y: -12 }
                : hub.name === "New York"
                  ? { x: -52, y: -12 }
                  : hub.name === "Miami"
                    ? { x: -30, y: 16 }
                    : { x: -40, y: -12 };
            return (
              <g key={hub.name} transform={`translate(${hub.x},${hub.y})`}>
                <circle
                  r={r + 2.5}
                  fill="none"
                  stroke="#93846f"
                  strokeOpacity={0.55}
                  strokeWidth={hub.primary ? 1.4 : 1}
                />
                <circle
                  r={r}
                  fill="#faf9f6"
                  stroke="#0a192f"
                  strokeOpacity={0.18}
                  strokeWidth={0.5}
                />
                <circle r={Math.max(2, r - 2)} fill="#0a192f" fillOpacity={0.88} />
                <text
                  x={labelOffset.x}
                  y={labelOffset.y}
                  fill="#0a192f"
                  fillOpacity={0.72}
                  fontFamily="ui-serif, Georgia, 'Times New Roman', serif"
                  fontSize={hub.primary ? 12 : 11}
                  fontStyle="italic"
                  fontWeight={600}
                  style={{ letterSpacing: "0.02em" }}
                >
                  {hub.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="mt-8 text-center">
        <Link
          href="/contact"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900/60 underline decoration-navy-900/20 underline-offset-4 transition-colors hover:text-navy-900 hover:decoration-navy-900/40"
        >
          Start a conversation
        </Link>
      </p>
    </div>
  );
}
