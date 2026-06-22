"use client";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  grade: string;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    grade: "Parent of Grade V Student",
    review:
      "Edison Public School has transformed our daughter's confidence and academic performance. The teachers are incredibly supportive and the CBSE curriculum is delivered with excellence.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Rajesh Kumar",
    grade: "Parent of Grade VIII Student",
    review:
      "The IIT/NEET foundation program is outstanding. My son has developed a genuine love for science and mathematics. The smart classroom experience makes learning engaging and fun.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Meena Devi",
    grade: "Parent of Grade III Student",
    review:
      "Safety and quality education were our top priorities. Edison provides both with a warm, nurturing environment. The individual attention each child receives is truly remarkable.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const t = testimonials[current];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-terracotta hidden sm:block" />

        <div className="sm:pl-8">
          <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed mb-8">
            {t.review}
          </p>

          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-body font-medium text-ink text-sm">
                {t.name}
              </div>
              <div className="text-stone text-xs tracking-wide">
                {t.grade}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-8 sm:mt-10">
        <button
          onClick={prev}
          className="w-10 h-10 border border-sand flex items-center justify-center text-stone hover:border-terracotta hover:text-terracotta transition-colors duration-300"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[2px] transition-all duration-300 ${
                idx === current
                  ? "w-8 bg-terracotta"
                  : "w-4 bg-sand hover:bg-stone"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 border border-sand flex items-center justify-center text-stone hover:border-terracotta hover:text-terracotta transition-colors duration-300"
          aria-label="Next testimonial"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
