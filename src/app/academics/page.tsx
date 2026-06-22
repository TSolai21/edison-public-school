import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import StatsCounter from "@/components/StatsCounter";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";
import { AcademicCap, BookOpen, Flask, Trophy, Star } from "@/components/icons";

export const metadata = {
  title: "Academics | Edison Public School",
  description:
    "Discover our rigorous CBSE curriculum from Pre-Primary to Senior Secondary.",
};

const stages = [
  {
    num: "01",
    grade: "Pre-Primary",
    ages: "Nursery – UKG",
    desc: "Foundational literacy, numeracy, and social skills through play-way methods. We spark curiosity and build confidence in a warm, nurturing environment.",
    Icon: AcademicCap,
  },
  {
    num: "02",
    grade: "Primary",
    ages: "I – V",
    desc: "Experiential learning emphasizing language, environmental science, mathematics, and arts. Students develop critical thinking through hands-on exploration.",
    Icon: BookOpen,
  },
  {
    num: "03",
    grade: "Middle School",
    ages: "VI – VIII",
    desc: "Introduction to specialized subjects like Science, Social Science, and third languages. Students build analytical skills and academic discipline.",
    Icon: Flask,
  },
  {
    num: "04",
    grade: "Secondary",
    ages: "IX – X",
    desc: "Rigorous board exam preparation with a focus on core subjects, problem-solving, and skill development for a strong academic foundation.",
    Icon: Trophy,
  },
  {
    num: "05",
    grade: "Senior Secondary",
    ages: "XI – XII",
    desc: "Specialized streams with intensive coaching for competitive exams — NEET, JEE, CLAT, and UPSC — preparing students for national-level success.",
    Icon: Star,
  },
];

const subjects = [
  "Science",
  "Mathematics",
  "English",
  "Social Science",
  "Hindi",
  "Art & Craft",
  "Music",
  "Physical Education",
  "Computer Science",
  "Sanskrit",
];

export default function Academics() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center text-white overflow-hidden">
        <Parallax speed={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Edison Public School classroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </Parallax>
        {/* Organic SVG wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-32">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
              Academic
              <br />
              <span className="text-terracotta">Excellence</span>
            </ScrollRevealText>
            <p className="text-base sm:text-xl md:text-2xl text-cream/80 max-w-xl mx-auto font-light mt-4 sm:mt-6">
              A rigorous CBSE curriculum designed to inspire intellectual
              curiosity and competitive exam success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 sm:py-32 bg-cream text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <ScrollRevealText as="p" className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight text-ink">
            We don&apos;t just teach subjects.
            <br className="hidden md:block" />
            We build <span className="text-terracotta">future leaders</span>.
          </ScrollRevealText>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-16 sm:py-24 bg-cream overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="relative">
            <FadeIn className="relative w-full md:w-[60%] ml-auto">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Parallax speed={0.08}>
                  <Image
                    src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Students in classroom"
                    fill
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </FadeIn>
            <FadeIn
              delay={200}
              className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[48%] z-10 mt-8 md:mt-0"
            >
              <div className="bg-white p-8 sm:p-12 md:p-14 border-t-2 border-terracotta md:mr-[-4rem]">
                <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
                  Our Approach
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3 mb-6 leading-tight">
                  Deep Learning,
                  <br />
                  Real Results
                </h2>
                <p className="text-stone text-base sm:text-lg leading-relaxed mb-4">
                  At Edison, we go beyond rote memorization. Our curriculum is
                  built around deep subject understanding — the kind that
                  empowers students to crack the toughest competitive exams with
                  confidence.
                </p>
                <p className="text-stone text-base sm:text-lg leading-relaxed">
                  From NEET and JEE to UPSC and CLAT, our students are prepared
                  not just to pass exams, but to excel in them.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-12 sm:mb-16">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              Curriculum Pathway
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3">
              Five Stages of Growth
            </ScrollRevealText>
          </FadeIn>
          <div className="space-y-0">
            {stages.map((s, i) => (
              <FadeIn key={s.num} delay={i * 80}>
                <div className="group border-b border-sand hover:bg-ink transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-6 sm:py-8 px-4 sm:px-8">
                    <div className="flex items-center gap-5 flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center text-sand group-hover:text-white/40 transition-colors duration-500">
                        <s.Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl text-sand group-hover:text-white/10 transition-colors duration-500">
                        {s.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-1 sm:mb-2">
                        <h3 className="font-display text-xl sm:text-2xl text-ink group-hover:text-white transition-colors duration-500">
                          {s.grade}
                        </h3>
                        <span className="text-stone text-xs sm:text-sm font-medium tracking-wide uppercase group-hover:text-white/50 transition-colors duration-500">
                          Grades {s.ages}
                        </span>
                      </div>
                      <p className="text-stone text-sm sm:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="py-16 sm:py-24 bg-ink">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <div className="w-12 h-px bg-terracotta mx-auto mb-6" />
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              What We Teach
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-cream mt-3 mb-4">
              Subjects &amp; Disciplines
            </ScrollRevealText>
            <p className="text-stone text-base sm:text-lg max-w-2xl mx-auto">
              A comprehensive curriculum that balances sciences, humanities, and
              creative arts.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-sand/20">
            {subjects.map((name, i) => (
              <FadeIn key={name} delay={i * 60}>
                <div className="bg-ink p-5 sm:p-7 text-center border border-sand/30 hover:border-terracotta transition-colors duration-300">
                  <p className="font-display text-sm sm:text-base text-cream">
                    {name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 sm:py-24 bg-ink border-t border-sand/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              Results
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream mt-3 mb-4">
              Academic Track Record
            </h2>
            <p className="text-stone text-base sm:text-lg">
              Numbers that speak for themselves.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand/20">
            <FadeIn delay={0}>
              <div className="bg-ink p-6 sm:p-8 text-center border border-sand/30">
                <StatsCounter
                  target={100}
                  suffix="%"
                  label="CBSE Pass Rate"
                />
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-ink p-6 sm:p-8 text-center border border-sand/30">
                <StatsCounter
                  target={95}
                  suffix="%"
                  label="Distinction Rate"
                />
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-ink p-6 sm:p-8 text-center border border-sand/30">
                <StatsCounter
                  target={15}
                  suffix="+"
                  label="State Rank Holders"
                />
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="bg-ink p-6 sm:p-8 text-center border border-sand/30">
                <StatsCounter
                  target={35}
                  suffix="+"
                  label="Expert Faculty"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 bg-ink">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <FadeIn>
            <div className="w-12 h-px bg-terracotta mx-auto mb-8" />
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Start Your
              <br />
              <span className="text-terracotta">Academic Journey</span>
            </ScrollRevealText>
            <p className="text-stone text-base sm:text-xl mb-10 max-w-2xl mx-auto">
              Join a curriculum built for competitive exam success. Admissions
              Open for 2026–27.
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
