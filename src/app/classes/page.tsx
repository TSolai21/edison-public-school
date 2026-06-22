import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Activities | Edison Public School",
  description:
    "Explore the wide range of co-curricular activities and extra classes offered at Edison Public School.",
};

const extraClasses = [
  {
    category: "Sports",
    title: "Swimming",
    image:
      "https://images.unsplash.com/photo-1778137859976-0a59e7d98c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Fitness",
    title: "Karate",
    image:
      "https://images.unsplash.com/photo-1776782993465-14aa93a2b51d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Sports",
    title: "Archery",
    image:
      "https://images.unsplash.com/photo-1741790053537-c34a2e90ed40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Sports",
    title: "Tennis",
    image:
      "https://images.unsplash.com/photo-1643236943728-2745b38cbcf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Art & Craft",
    title: "Art and Craft",
    image:
      "https://images.unsplash.com/photo-1770096679844-57ca92c2b64b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Traditional",
    title: "Silambam",
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Sports",
    title: "Volleyball & Shuttlecock",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Sports",
    title: "Kho Kho",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Discipline",
    title: "Parade Training",
    image:
      "https://images.unsplash.com/photo-1745053553194-ab1ea341dc5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Classes() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center text-white overflow-hidden">
        <Parallax speed={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Students activities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </Parallax>
        {/* Organic SVG wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-32">
            <path d="M0,80 C180,40 360,90 540,50 C720,10 900,70 1080,40 C1260,10 1380,60 1440,30 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
              Beyond
              <br />
              <span className="text-terracotta">The Classroom</span>
            </ScrollRevealText>
            <p className="text-base sm:text-xl md:text-2xl text-cream/80 max-w-xl mx-auto font-light mt-4 sm:mt-6">
              9+ activities that build character, confidence, and leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 sm:py-32 bg-cream text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <ScrollRevealText as="p" className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight text-ink">
            We develop the{" "}
            <span className="text-terracotta">whole child</span>.
            <br className="hidden md:block" />
            Mind, body, and spirit.
          </ScrollRevealText>
        </div>
      </section>

      {/* ACTIVITIES GRID */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-12 sm:mb-16">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              Our Activities
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3">
              Co-Curricular Programs
            </ScrollRevealText>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sand/30">
            {extraClasses.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="bg-cream overflow-hidden group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-terracotta font-body text-xs uppercase tracking-[0.15em] font-medium mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-display text-lg sm:text-xl text-ink">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 bg-ink">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <FadeIn>
            <div className="w-12 h-px bg-terracotta mx-auto mb-8" />
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Give Your Child
              <br />
              <span className="text-terracotta">Every Advantage</span>
            </ScrollRevealText>
            <p className="text-stone text-base sm:text-xl mb-10 max-w-2xl mx-auto">
              Enrol today and unlock a world of activities beyond academics.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-body text-sm uppercase tracking-[0.15em] font-medium transition-all bg-terracotta text-cream hover:bg-terracotta/80"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-body text-sm uppercase tracking-[0.15em] font-medium transition-all bg-transparent text-cream border border-cream hover:bg-cream hover:text-ink"
              >
                Schedule Campus Visit
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
