"use client";

import { useMemo } from "react";

/**
 * Generative wordmark: a square lattice clipped to a rhombus, with cell size
 * and opacity driven by the interference of two radial waves. Fully
 * deterministic — the pattern must be identical on server and client.
 */
// Transcendental math can differ in the last bit between the server's and the
// browser's engine, which makes React see a hydration mismatch on the emitted
// attributes. Rounding to a fixed precision makes both sides serialise alike.
const round = (n: number) => Math.round(n * 1000) / 1000;

export default function Mark({ size = 120 }: { size?: number }) {
  const cells = useMemo(() => {
    const grid = 15; // cells across the bounding box
    const cell = size / grid;
    const R = size / 2;

    // wave sources, in normalised (-1..1) space
    const sources = [
      { x: -0.45, y: -0.35 },
      { x: 0.55, y: 0.5 },
    ];

    const out: { x: number; y: number; s: number; rx: number; o: number }[] =
      [];

    for (let i = 0; i < grid; i++) {
      for (let j = 0; j < grid; j++) {
        const px = (i + 0.5) * cell;
        const py = (j + 0.5) * cell;
        const dx = (px - R) / R;
        const dy = (py - R) / R;

        // rhombus silhouette
        const edge = Math.abs(dx) + Math.abs(dy);
        if (edge > 1) continue;

        let wave = 0;
        for (const s of sources) {
          wave += Math.sin(Math.hypot(dx - s.x, dy - s.y) * 9 - 1.2);
        }
        const amp = (wave / 2 + 1) / 2; // 0..1

        // settle the pattern down as it approaches the rhombus edge
        const k = amp * (1 - edge * 0.55);

        const s = round(cell * (0.18 + 0.72 * k));
        out.push({
          x: round(px - s / 2),
          y: round(py - s / 2),
          s,
          rx: round(s * 0.22),
          o: round(0.3 + 0.7 * k),
        });
      }
    }
    return out;
  }, [size]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0"
      aria-hidden
    >
      {cells.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={c.y}
          width={c.s}
          height={c.s}
          rx={c.rx}
          fill="currentColor"
          opacity={c.o}
        />
      ))}
    </svg>
  );
}
