import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import StatsCounter from "@/components/StatsCounter";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";
import { Trophy, GraduationCap, Sparkles, Eye, Compass } from "@/components/icons";

export const metadata = {
  title: "About | Edison Public School",
  description: "Learn about the history, vision, and mission of Edison Public School.",
};

const coreValues = [
  {
    num: "01",
    title: "Excellence",
    desc: "We pursue the highest standards in academics, character, and co-curricular achievement — settling for nothing less than every student's personal best.",
    Icon: Trophy,
  },
  {
    num: "02",
    title: "Accessibility",
    desc: "Premium CBSE education should not be a privilege. We bring world-class learning to rural communities at minimum cost.",
    Icon: GraduationCap,
  },
  {
    num: "03",
    title: "Holistic Growth",
    desc: "True education goes beyond textbooks. We nurture the mind, body, and spirit through sports, arts, and character building.",
    Icon: Sparkles,
  },
];

export default function About() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d4a3e]/90 via-[#2d4a3e]/70 to-[#1a1f16]/80" />
        </Parallax>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-6">
              A School Built
              <br />
              on <span className="text-terracotta">Belief</span>
            </ScrollRevealText>
            <div className="w-16 h-[1px] bg-terracotta mx-auto mb-6" />
            <p className="font-body text-base sm:text-lg md:text-xl text-white/70 max-w-lg mx-auto font-light tracking-wide">
              A legacy of educational excellence in the heart of Puthiamputhur.
            </p>
          </FadeIn>
        </div>
        {/* Hero wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 block">
            <path d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,30 1440,50 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 sm:py-32 bg-[#f5f0e8] overflow-hidden">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <ScrollRevealText as="p" className="font-display text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-[#1a1f16]">
            We believe every child holds the power to change the world. Our job
            is to help them find it.
          </ScrollRevealText>
        </div>
      </section>

      <div className="h-[1px] bg-[#d4c5a9] mx-4 sm:mx-8" />

      {/* STORY — asymmetric */}
      <section className="py-20 sm:py-32 bg-[#f5f0e8] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative">
            <FadeIn className="relative w-full md:w-[65%] ml-auto">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Parallax speed={0.08}>
                  <Image
                    src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Edison Public School campus"
                    fill
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </FadeIn>

            <FadeIn
              delay={200}
              className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[50%] z-10 mt-8 md:mt-0"
            >
              <div className="bg-[#f5f0e8] p-8 sm:p-10 md:p-14 border-l-[3px] border-[#c45d3e] md:mr-[-4rem]">
                <span className="font-body text-[#c45d3e] text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Story
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1a1f16] mt-3 mb-6 leading-tight">
                  Founded with Purpose
                </h2>
                <p className="font-body text-base sm:text-lg text-[#8a8178] mb-4 leading-relaxed">
                  Founded with a vision to revolutionize education in
                  Puthiamputhur, Edison Public School has grown to become a
                  premier CBSE institution in the region. We are dedicated to
                  providing a balanced curriculum that fosters intellectual,
                  physical, and emotional growth.
                </p>
                <p className="font-body text-base sm:text-lg text-[#8a8178] leading-relaxed">
                  Our educators are not just teachers — they are mentors who
                  guide students through their formative years, preparing them
                  for the challenges of tomorrow with confidence and integrity.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-[#d4c5a9] mx-4 sm:mx-8" />

      {/* CORE VALUES */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-14 sm:mb-20">
            <span className="font-body text-[#c45d3e] text-xs font-semibold uppercase tracking-[0.2em]">
              What We Stand For
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1a1f16] mt-3">
              Our Core Values
            </ScrollRevealText>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {coreValues.map((v, i) => (
              <FadeIn key={v.num} delay={i * 150}>
                <div className="relative p-8 sm:p-10 md:p-12 border border-[#d4c5a9] bg-[#f5f0e8] transition-colors duration-500 hover:bg-[#1a1f16] group cursor-default">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center text-[#c45d3e] group-hover:text-white/60 transition-colors duration-500">
                      <v.Icon className="w-7 h-7" />
                    </div>
                    <span className="font-display text-6xl sm:text-7xl md:text-8xl text-[#d4c5a9] group-hover:text-white/10 transition-colors duration-500 leading-none">
                      {v.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#1a1f16] group-hover:text-white mb-4 relative z-10 transition-colors duration-500">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#8a8178] group-hover:text-white/70 relative z-10 leading-relaxed transition-colors duration-500">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION — split screen */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[450px] sm:min-h-[600px]">
        <FadeIn className="bg-[#2d4a3e] text-white p-8 sm:p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative SVG */}
          <div className="absolute top-8 right-8 opacity-10" aria-hidden="true">
            <Eye className="w-40 h-40 sm:w-56 sm:h-56" />
          </div>
          <span className="font-body text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4 relative z-10">
            Where We&apos;re Going
          </span>
          <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight relative z-10">
            Our Vision
          </ScrollRevealText>
          <div className="w-10 h-[1px] bg-[#c45d3e] mb-6 relative z-10" />
          <p className="font-body text-base sm:text-lg text-white/75 leading-relaxed relative z-10">
            To provide premium CBSE education to rural areas at a minimum cost,
            ensuring every child has access to quality learning and equal
            opportunities — bridging the gap between rural talent and global
            excellence.
          </p>
        </FadeIn>

        <FadeIn
          delay={200}
          className="bg-[#1a1f16] text-white p-8 sm:p-12 md:p-20 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Decorative SVG */}
          <div className="absolute bottom-8 left-8 opacity-10" aria-hidden="true">
            <Compass className="w-40 h-40 sm:w-56 sm:h-56" />
          </div>
          <span className="font-body text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4 relative z-10">
            How We Get There
          </span>
          <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight relative z-10">
            Our Mission
          </ScrollRevealText>
          <div className="w-10 h-[1px] bg-[#c45d3e] mb-6 relative z-10" />
          <p className="font-body text-base sm:text-lg text-white/75 leading-relaxed relative z-10">
            To give utmost importance to deep subject understanding, empowering
            students to confidently crack competitive exams like UPSC (IAS, IPS,
            IFS, IRS), NEET, JEE, and CLAT — building future leaders who serve
            the nation.
          </p>
        </FadeIn>
      </section>

      {/* STATS */}
      <section className="py-20 sm:py-28 bg-[#1a1f16] text-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="text-center mb-14 sm:mb-20">
            <span className="font-body text-[#c45d3e] text-xs font-semibold uppercase tracking-[0.2em]">
              Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-3 mb-4">
              By The Numbers
            </h2>
            <div className="w-12 h-[1px] bg-[#c45d3e] mx-auto" />
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            <FadeIn delay={0}>
              <div className="bg-[#1a1f16] p-8 sm:p-10 text-center">
                <StatsCounter
                  target={10}
                  suffix="+"
                  label="Years of Excellence"
                />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-[#1a1f16] p-8 sm:p-10 text-center">
                <StatsCounter
                  target={500}
                  suffix="+"
                  label="Students Enrolled"
                />
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-[#1a1f16] p-8 sm:p-10 text-center">
                <StatsCounter
                  target={100}
                  suffix="%"
                  label="CBSE Pass Rate"
                />
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-[#1a1f16] p-8 sm:p-10 text-center">
                <StatsCounter
                  target={9}
                  suffix="+"
                  label="Activities Offered"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="h-[1px] bg-[#2d4a3e] mx-4 sm:mx-8" />

      {/* FINAL CTA */}
      <section className="py-24 sm:py-36 bg-[#1a1f16] text-white">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          <FadeIn>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Ready to Join the
              <br />
              Edison Family?
            </ScrollRevealText>
            <div className="w-12 h-[1px] bg-[#c45d3e] mx-auto mb-6" />
            <p className="font-body text-base sm:text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
              Admissions Open for 2026-27. Give your child the gift of
              world-class education at minimum cost.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base uppercase tracking-[0.15em] font-semibold transition-all bg-[#c45d3e] text-white hover:bg-[#a94e33]"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base uppercase tracking-[0.15em] font-semibold transition-all border border-white/25 text-white hover:bg-white hover:text-[#1a1f16]"
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
