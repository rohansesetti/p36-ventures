import { Reveal } from "@/components/Reveal";

const cities = [
  { name: "New York", coord: "40.71° N, 74.00° W" },
  { name: "London", coord: "51.50° N, 0.12° W" },
  { name: "Miami", coord: "25.76° N, 80.19° W" },
  { name: "Singapore", coord: "1.35° N, 103.81° E" },
] as const;

export function Presence() {
  return (
    <section id="presence" className="section-v2 relative z-[1]">
      <div className="wrap">
        <Reveal>
          <p className="label-v2 mb-[26px]">Where we operate</p>
        </Reveal>

        <Reveal>
          <div className="max-w-xl">
            {cities.map((city, i) => (
              <div
                key={city.name}
                className={`flex items-baseline justify-between border-t border-line py-5 ${
                  i === cities.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="heading-serif text-[22px] font-normal transition-colors hover:text-accent">
                  {city.name}
                </div>
                <div className="text-[11.5px] tracking-[0.03em] text-ink-faint">
                  {city.coord}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
