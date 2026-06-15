"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    let animFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animFrameId = requestAnimationFrame(raf);
    };
    animFrameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(animFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
