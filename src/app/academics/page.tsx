import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import StatsCounter from "@/components/StatsCounter";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import WhenVisible from "@/components/WhenVisible";
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
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-[#2d4a3e]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
          <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="white" strokeWidth="1.2">
            <path d="M300,350 Q300,200 400,150 Q500,200 500,350" />
            <line x1="400" y1="150" x2="400" y2="380" strokeWidth="1" />
            <path d="M300,350 Q400,320 500,350" />
            <circle cx="400" cy="130" r="15" />
            <path d="M350,200 L400,170 L450,200" strokeWidth="0.8" />
            <rect x="150" y="250" width="80" height="110" rx="2" strokeWidth="0.8" />
            <line x1="165" y1="270" x2="215" y2="270" strokeWidth="0.6" />
            <line x1="165" y1="285" x2="215" y2="285" strokeWidth="0.6" />
            <line x1="165" y1="300" x2="200" y2="300" strokeWidth="0.6" />
            <rect x="570" y="250" width="80" height="110" rx="2" strokeWidth="0.8" />
            <line x1="585" y1="270" x2="635" y2="270" strokeWidth="0.6" />
            <line x1="585" y1="285" x2="635" y2="285" strokeWidth="0.6" />
            <line x1="585" y1="300" x2="620" y2="300" strokeWidth="0.6" />
            <path d="M200,180 L230,150 L260,180" strokeWidth="0.8" />
            <line x1="230" y1="150" x2="230" y2="120" strokeWidth="0.8" />
            <polygon points="230,110 245,120 230,130 215,120" fill="white" fillOpacity="0.2" strokeWidth="0.6" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        {/* Organic SVG wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-32">
            <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
              Academic
              <br />
              <span className="text-terracotta">Excellence</span>
            </ScrollRevealText>
            <p className="text-sm sm:text-base md:text-lg text-cream/80 max-w-md mx-auto font-light mt-2 sm:mt-3">
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
                    src="/school4.webp"
                    alt="Edison Public School campus"
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

      {/* CURRICULUM — winding road */}
      <section className="py-16 sm:py-28 bg-cream overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-4">
          <FadeIn className="mb-16 sm:mb-24 text-center">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              Curriculum Pathway
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3">
              Five Stages of Growth
            </ScrollRevealText>
          </FadeIn>

          <WhenVisible className="relative">
            <svg
              viewBox="0 0 100 900"
              preserveAspectRatio="none"
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[60px] sm:w-[80px]"
              aria-hidden="true"
            >
              {/* Road shadow */}
              <path
                d="M50,20 C80,100 20,200 50,300 C80,400 20,500 50,600 C80,700 20,800 50,880"
                fill="none"
                stroke="#d4c5a9"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.3"
              />
              {/* Road surface */}
              <path
                id="academicsRoad"
                d="M50,20 C80,100 20,200 50,300 C80,400 20,500 50,600 C80,700 20,800 50,880"
                fill="none"
                stroke="#d4c5a9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
              {/* Milestone dots on the road */}
              {[20, 190, 360, 530, 700].map((cy, i) => (
                <circle key={i} cx="50" cy={cy} r="6" fill="#f5f0e8" stroke="#c45d3e" strokeWidth="2.5" />
              ))}
            </svg>

            {/* Milestone items */}
            <div className="relative z-10 space-y-12 sm:space-y-0">
              {stages.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={s.num} delay={i * 150}>
                    <div className={`relative sm:flex items-center sm:h-[160px] ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      {/* Content card */}
                      <div className={`sm:w-[calc(50%-40px)] ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                        <div className="group bg-white border border-sand/60 p-5 sm:p-6 hover:border-terracotta/40 hover:shadow-lg transition-all duration-500">
                          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                            <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/10 transition-colors duration-500">
                              <s.Icon className="w-4 h-4 text-sand group-hover:text-terracotta transition-colors duration-500" />
                            </div>
                            <div>
                              <h3 className="font-display text-base sm:text-lg text-ink group-hover:text-terracotta transition-colors duration-500">
                                {s.grade}
                              </h3>
                              <span className="text-stone text-xs font-medium tracking-wide uppercase">
                                Grades {s.ages}
                              </span>
                            </div>
                          </div>
                          <p className="text-stone text-sm leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                      {/* Center spacer for the road */}
                      <div className="hidden sm:block sm:w-[80px] flex-shrink-0" />
                      {/* Other side spacer */}
                      <div className="hidden sm:block sm:w-[calc(50%-40px)]" />
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </WhenVisible>
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
