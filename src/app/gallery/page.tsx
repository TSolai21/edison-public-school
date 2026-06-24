import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Edison Public School",
  description: "Memories and moments from Edison Public School.",
};

export default function Gallery() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-[#2d4a3e]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
          <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="white" strokeWidth="1.2">
            <rect x="200" y="150" width="180" height="140" rx="6" />
            <circle cx="290" cy="220" r="35" />
            <circle cx="290" cy="220" r="20" />
            <circle cx="290" cy="220" r="8" fill="white" fillOpacity="0.2" />
            <rect x="215" y="160" width="30" height="15" rx="2" />
            <circle cx="370" cy="170" r="5" fill="white" fillOpacity="0.3" />
            <rect x="420" y="180" width="180" height="130" rx="4" />
            <line x1="420" y1="200" x2="600" y2="200" strokeWidth="0.6" />
            <line x1="420" y1="220" x2="580" y2="220" strokeWidth="0.6" />
            <line x1="420" y1="240" x2="560" y2="240" strokeWidth="0.6" />
            <path d="M440,270 L480,250 L520,270 L560,260 L590,280" strokeWidth="0.8" />
            <circle cx="540" cy="195" r="12" strokeWidth="0.8" />
            <path d="M150,350 L250,350 L250,400 L150,400 Z" strokeWidth="0.8" />
            <path d="M160,360 L240,360 L240,390 L160,390 Z" strokeWidth="0.6" />
            <path d="M550,350 L650,350 L650,400 L550,400 Z" strokeWidth="0.8" />
            <circle cx="600" cy="375" r="15" strokeWidth="0.6" />
            <path d="M590,370 L600,360 L610,370 L610,385 L590,385 Z" strokeWidth="0.6" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-4">
              Life at<br />
              <span className="text-terracotta">Edison</span>
            </ScrollRevealText>
            <div className="w-12 h-[2px] bg-terracotta mx-auto mb-4" />
            <p className="font-body text-sm sm:text-base md:text-lg text-white/70 max-w-md mx-auto">
              Memories and moments from our vibrant campus.
            </p>
          </FadeIn>
        </div>
        {/* Hero wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 block">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 sm:py-32 bg-cream text-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4">
          <ScrollRevealText as="p" className="font-display text-ink text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight">
            Every moment tells a<br className="hidden md:block" />
            <span className="text-terracotta"> story of growth</span>.
          </ScrollRevealText>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 sm:py-24 bg-ink">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-10 sm:mb-16">
            <span className="font-body text-terracotta text-sm uppercase tracking-[0.2em] font-medium">
              Explore
            </span>
            <ScrollRevealText as="h2" className="font-display text-cream text-3xl sm:text-4xl md:text-5xl mt-3">
              Photo Gallery
            </ScrollRevealText>
          </FadeIn>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
