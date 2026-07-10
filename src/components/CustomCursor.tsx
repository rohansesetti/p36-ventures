"use client";

import { useEffect, useState } from "react";

/**
 * Desktop ring cursor: mix-blend-difference inverts against whatever is behind it.
 * Positioned with left/top (no transform) so blending composites against the page,
 * not an isolated transformed layer — avoids the “white ring on white” failure mode.
 */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [grow, setGrow] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");

    const applyCursorClass = () => {
      if (mq.matches) {
        document.documentElement.classList.add("cursor-none");
        setActive(true);
      } else {
        document.documentElement.classList.remove("cursor-none");
        setActive(false);
      }
    };
    applyCursorClass();
    mq.addEventListener("change", applyCursorClass);

    const onMove = (e: MouseEvent) => {
      if (!mq.matches) return;
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setGrow(!!el?.closest("[data-cursor-grow]"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      mq.removeEventListener("change", applyCursorClass);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!active) return null;

  const size = grow ? 44 : 24;
  const offset = size / 2;

  return (
    <div
      className="pointer-events-none fixed z-[10001] hidden mix-blend-difference lg:block box-border rounded-full border-2 border-background bg-transparent transition-[width,height] duration-300 ease-out"
      style={{
        left: pos.x - offset,
        top: pos.y - offset,
        width: size,
        height: size,
      }}
      aria-hidden
    />
  );
}
