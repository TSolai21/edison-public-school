"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.3,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const wh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const dist = center - wh / 2;
        el.style.transform = `translateY(${-(dist * speed)}px)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`absolute z-0 ${className}`}
      style={{
        top: "-15%",
        bottom: "-15%",
        left: 0,
        right: 0,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
