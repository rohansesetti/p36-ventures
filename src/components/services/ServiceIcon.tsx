import type { ServiceIconId } from "@/data/services";

const paths: Record<ServiceIconId, string> = {
  pyramid:
    "M12 3 21 19H3L12 3Zm0 4.2L6.4 17h11.2L12 7.2Zm0 3.3 3.6 6.5H8.4L12 10.5Z",
  globe:
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 1.5c1.6 1.7 2.6 4 2.8 6.5H9.2C9.4 8.5 10.4 6.2 12 4.5Zm-7.4 8c.4-1.3 1-2.5 1.8-3.5h3.5c-.1 1.1-.2 2.3-.2 3.5H4.6Zm5.3 1.5c0 1.2.1 2.4.2 3.5H6.4c-.8-1-1.4-2.2-1.8-3.5h5.3Zm1.6 5.5c-1.6-1.7-2.6-4-2.8-6.5h5.6c-.2 2.5-1.2 4.8-2.8 6.5Zm2.9-7c0-1.2-.1-2.4-.2-3.5h3.5c.8 1 1.4 2.2 1.8 3.5h-5.1Zm5.1 1.5c-.4 1.3-1 2.5-1.8 3.5h-3.5c.1-1.1.2-2.3.2-3.5h5.1Z",
  bars: "M5 19V9h2.2v10H5Zm5.9 0V5h2.2v14h-2.2Zm5.9 0v-7H19v7h-2.2Z",
  hex: "M12 3.2 19.5 7.5v9L12 20.8 4.5 16.5v-9L12 3.2Zm0 1.8L6.3 8.2v7.6L12 19l5.7-3.2V8.2L12 5Zm-1.6 4.2h3.2v2.1h2.1v3.2h-2.1V16h-3.2v-1.5H8.3v-3.2h2.1V9.2Z",
  lattice:
    "M7 4h3v3H7V4Zm7 0h3v3h-3V4ZM4 11h3v3H4v-3Zm7 0h3v3h-3v-3Zm7 0h3v3h-3v-3ZM7 18h3v3H7v-3Zm7 0h3v3h-3v-3ZM8.5 7.5l2 3.5M13.5 7.5l-2 3.5M5.5 12.5H10m4 0h4.5M8.5 16.5l2-3.5m3 3.5-2-3.5",
  diamond:
    "M12 2.8 21.2 12 12 21.2 2.8 12 12 2.8Zm0 2.9L5.7 12 12 18.3 18.3 12 12 5.7Zm0 3.1 3.2 3.2-3.2 3.2-3.2-3.2L12 8.8Z",
  nodes:
    "M7.5 6.5a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm9 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM12 14.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM7.5 22a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm9 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM8.8 6.8l2 4.2m4.4 0 2-4.2M12 14.4v3.2M9.4 18.2l-1.2-1.1m7.4 1.1 1.2-1.1",
  cube: "M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Zm0 1.8L6 8v7.2l6 3.4 6-3.4V8l-6-3.2Zm0 3.4 4.5 2.5-4.5 2.6-4.5-2.6L12 8.2Z",
};

export function ServiceIcon({
  id,
  className = "h-8 w-8",
}: {
  id: ServiceIconId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <path d={paths[id]} />
    </svg>
  );
}
