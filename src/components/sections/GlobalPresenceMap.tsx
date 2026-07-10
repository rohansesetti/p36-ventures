"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import type { FeatureCollection, GeoJsonProperties } from "geojson";
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
  {
    name: "New York",
    lon: -74.006,
    lat: 40.7128,
    primary: true,
    labelOffset: { x: -52, y: -12 },
  },
  {
    name: "London",
    lon: -0.1276,
    lat: 51.5074,
    primary: true,
    labelOffset: { x: -46, y: -12 },
  },
  {
    name: "Miami",
    lon: -80.1918,
    lat: 25.7617,
    primary: false,
    labelOffset: { x: -30, y: 16 },
  },
  {
    name: "Singapore",
    lon: 103.8198,
    lat: 1.3521,
    primary: false,
    labelOffset: { x: -40, y: -12 },
  },
  {
    name: "Medellín",
    lon: -75.5636,
    lat: 6.2518,
    primary: false,
    labelOffset: { x: -44, y: 16 },
  },
  {
    name: "San José, Costa Rica",
    lon: -84.0907,
    lat: 9.9281,
    primary: false,
    labelOffset: { x: -88, y: -14 },
  },
  {
    name: "Lagos",
    lon: 3.3792,
    lat: 6.5244,
    primary: false,
    labelOffset: { x: -34, y: 16 },
  },
] as const;

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
  "CO",
  "CR",
  "NG",
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
    <div className="mt-8 border-t border-border-subtle pt-8 lg:mt-10 lg:pt-10">
      <div className="mx-auto mb-6 max-w-2xl text-center lg:mb-8">
        <h3 className="font-serif text-3xl font-semibold italic tracking-tight text-navy-900 sm:text-4xl">
          Global presence
        </h3>
        <div className="mx-auto mt-4 h-px w-12 bg-gold" aria-hidden />
        <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
          Hubs where we coordinate capital, partnerships, and operating support
          across key corridors.
        </p>
      </div>

      <div className="overflow-hidden rounded-sm border border-navy/10 bg-background shadow-[0_1px_3px_rgba(10,25,47,0.05)]">
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="h-auto w-full"
          role="img"
          aria-label="World map with hub markers for New York, London, Miami, Singapore, Medellín, San José Costa Rica, and Lagos."
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
            const labelOffset = hub.labelOffset;
            const labelFontSize =
              hub.primary ? 12 : hub.name.length > 18 ? 10 : 11;
            return (
              <g key={hub.name} transform={`translate(${hub.x},${hub.y})`}>
                <circle
                  r={r + 2.5}
                  fill="none"
                  stroke="#c5a059"
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
                  fontSize={labelFontSize}
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
        <ButtonLink href="/contact" variant="primary" className="!text-[11px] !tracking-[0.2em]">
          Start a conversation
        </ButtonLink>
      </p>
    </div>
  );
}
