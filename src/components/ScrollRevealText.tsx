"use client";
import { useEffect, useRef, useState, ReactNode, Fragment } from "react";

interface ScrollRevealTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

function countChars(node: ReactNode): number {
  if (typeof node === "string") return node.length;
  if (typeof node === "number") return String(node).length;
  if (!node) return 0;
  if (Array.isArray(node)) return node.reduce((sum, n) => sum + countChars(n), 0);
  if (typeof node === "object" && "props" in node && node !== null) {
    const el = node as { props: { children?: ReactNode } };
    return countChars(el.props.children);
  }
  return 0;
}

function revealChildren(
  node: ReactNode,
  counter: { value: number },
  progress: number,
  total: number
): ReactNode {
  if (typeof node === "string") {
    return (
      <>
        {node.split("").map((char, i) => {
          const idx = counter.value + i;
          const threshold = (idx / total) * 100;
          const filled = progress > threshold;
          return (
            <span
              key={i}
              className="inline-block transition-colors duration-200"
              style={{
                color: filled ? "inherit" : "rgba(128,128,128,0.2)",
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char}
            </span>
          );
        })}
        {(() => { counter.value += node.length; return null; })()}
      </>
    );
  }

  if (typeof node === "number") {
    const str = String(node);
    const startIdx = counter.value;
    counter.value += str.length;
    return (
      <>
        {str.split("").map((char, i) => {
          const idx = startIdx + i;
          const threshold = (idx / total) * 100;
          const filled = progress > threshold;
          return (
            <span
              key={i}
              className="inline-block transition-colors duration-200"
              style={{ color: filled ? "inherit" : "rgba(128,128,128,0.2)" }}
            >
              {char}
            </span>
          );
        })}
      </>
    );
  }

  if (!node) return null;

  if (Array.isArray(node)) {
    return (
      <>
        {node.map((child, i) => (
          <Fragment key={i}>
            {revealChildren(child, counter, progress, total)}
          </Fragment>
        ))}
      </>
    );
  }

  if (typeof node === "object" && "props" in node && node !== null) {
    const el = node as { type: string | ((props: Record<string, unknown>) => ReactNode); props: { children?: ReactNode } };
    return (
      <>
        {el.type === "br" ? (
          <br />
        ) : (
          <el.type {...el.props}>
            {revealChildren(el.props.children, counter, progress, total)}
          </el.type>
        )}
      </>
    );
  }

  return node;
}

export default function ScrollRevealText({
  children,
  className = "",
  as: Tag = "h2",
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const revealedRef = useRef(0);
  const totalChars = countChars(children);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(100);
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.45;
      const p = Math.min(100, Math.max(0, ((start - rect.top) / (start - end)) * 100));
      if (p > revealedRef.current) {
        revealedRef.current = p;
        setProgress(p);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const counter = { value: 0 };
  const revealed = revealChildren(children, counter, progress, totalChars);

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={className}>
      {revealed}
    </Tag>
  );
}
