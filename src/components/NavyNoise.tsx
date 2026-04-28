"use client";

import { useEffect, useState } from "react";

/**
 * Subtle grain overlay for navy backgrounds. Pointer-events none.
 * Parallax: grain shifts slightly on scroll for depth.
 */
export function NavyNoise() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const offset = scrollY * 0.06;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] mix-blend-overlay will-change-transform"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        transform: `translate3d(0, ${offset}px, 0)`,
      }}
    />
  );
}
