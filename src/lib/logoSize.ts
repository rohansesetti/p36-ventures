/**
 * Optical logo sizing: every logo gets roughly the same visual area,
 * so long wordmarks and round marks read as equal weight.
 */
export function logoDisplaySize(
  width: number,
  height: number,
  { area = 3400, maxW = 148, maxH = 44 }: { area?: number; maxW?: number; maxH?: number } = {},
) {
  const ratio = width / height;
  let h = Math.min(maxH, Math.sqrt(area / ratio));
  let w = h * ratio;
  if (w > maxW) {
    w = maxW;
    h = w / ratio;
  }
  return { width: Math.round(w), height: Math.round(h) };
}
