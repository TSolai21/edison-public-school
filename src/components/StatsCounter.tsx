"use client";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({
  target,
  suffix = "",
  label,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl sm:text-5xl text-cream mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-cream/50 text-xs sm:text-sm tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
