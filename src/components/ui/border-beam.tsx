"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className,
  duration = 6,
  colorFrom = "#7c6af7",
  colorTo = "#4f8ef7",
}: BorderBeamProps) {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = beamRef.current;
    if (!el) return;

    let frame: number;
    let startTime: number | null = null;
    const totalMs = duration * 1000;

    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = ((ts - startTime) % totalMs) / totalMs;

      // map 0-1 progress across all 4 sides
      const p = progress * 4;
      const side = Math.floor(p);
      const frac = p - side;
      const w = el.offsetWidth;
      const h = el.offsetHeight;

      let x = 0, y = 0;
      if (side === 0)      { x = frac * w; y = 0; }
      else if (side === 1) { x = w;         y = frac * h; }
      else if (side === 2) { x = (1 - frac) * w; y = h; }
      else                 { x = 0;         y = (1 - frac) * h; }

      el.style.background = `radial-gradient(circle 55px at ${x}px ${y}px, ${colorFrom}55, ${colorTo}25, transparent 70%)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, colorFrom, colorTo]);

  return (
    <div
      ref={beamRef}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
    />
  );
}
