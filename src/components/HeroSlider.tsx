"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "School Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "Students Learning",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "Smart Classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "Sports Ground",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, next]);

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`object-cover transition-transform duration-[10000ms] ease-out ${
                i === current ? "scale-105" : "scale-100"
              }`}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {/* Minimal dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group"
          >
            <span
              className={`block h-[2px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
