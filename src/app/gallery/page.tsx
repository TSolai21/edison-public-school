import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import Parallax from "@/components/Parallax";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Edison Public School",
  description: "Memories and moments from Edison Public School.",
};

export default function Gallery() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center text-white overflow-hidden">
        <Parallax speed={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Edison Public School campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </Parallax>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              Life at<br />
              <span className="text-terracotta">Edison</span>
            </ScrollRevealText>
            <div className="w-16 h-[2px] bg-terracotta mx-auto mb-6" />
            <p className="font-body text-base sm:text-xl text-white/70 max-w-lg mx-auto">
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
