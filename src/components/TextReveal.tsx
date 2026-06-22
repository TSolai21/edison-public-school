"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "p",
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={`overflow-hidden ${className}`}
    >
      <span
        className="block transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transitionDelay: `${delay}ms`,
          transform: isVisible ? "translateY(0)" : "translateY(110%)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {children}
      </span>
    </Tag>
  );
}
