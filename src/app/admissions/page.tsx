import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import Link from "next/link";
import WhenVisible from "@/components/WhenVisible";
import { EnvelopeOpen, MapPin, DocumentText, Users, GraduationCap } from "@/components/icons";

export const metadata = {
  title: "Admissions | Edison Public School",
  description:
    "Admission procedure and enquiry form for Edison Public School.",
};

const steps = [
  {
    num: "01",
    title: "Submit Enquiry",
    desc: "Fill out the online enquiry form with your details.",
    Icon: EnvelopeOpen,
  },
  {
    num: "02",
    title: "Campus Visit",
    desc: "Visit our campus and experience the Edison environment.",
    Icon: MapPin,
  },
  {
    num: "03",
    title: "Apply",
    desc: "Complete the formal application form.",
    Icon: DocumentText,
  },
  {
    num: "04",
    title: "Meet the Principal",
    desc: "An interactive session to understand your child.",
    Icon: Users,
  },
  {
    num: "05",
    title: "Enrol",
    desc: "Submit documents and complete fee payment.",
    Icon: GraduationCap,
  },
];

export default function Admissions() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-[#2d4a3e]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
          <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="white" strokeWidth="1.2">
            <path d="M350,380 L350,180 L400,140 L450,180 L450,380" />
            <path d="M370,380 L370,280 L430,280 L430,380" />
            <line x1="350" y1="180" x2="450" y2="180" strokeWidth="0.8" />
            <path d="M330,380 L400,120 L470,380" strokeWidth="0.8" />
            <circle cx="400" cy="230" r="20" />
            <path d="M390,225 L400,215 L410,225 L410,240 L390,240 Z" fill="white" fillOpacity="0.2" strokeWidth="0.6" />
            <path d="M200,380 Q200,300 250,260 Q300,300 300,380" strokeWidth="0.8" />
            <line x1="250" y1="260" x2="250" y2="200" strokeWidth="0.8" />
            <circle cx="250" cy="190" r="15" strokeWidth="0.8" />
            <path d="M500,380 Q500,300 550,260 Q600,300 600,380" strokeWidth="0.8" />
            <line x1="550" y1="260" x2="550" y2="200" strokeWidth="0.8" />
            <circle cx="550" cy="190" r="15" strokeWidth="0.8" />
            <path d="M100,380 L700,380" strokeWidth="0.6" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        {/* Organic SVG wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-32">
            <path d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,30 1440,50 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
              Join the
              <br />
              <span className="text-terracotta">Edison Family</span>
            </ScrollRevealText>
            <p className="text-sm sm:text-base md:text-lg text-cream/80 max-w-md mx-auto font-light mt-2 sm:mt-3">
              Your journey to excellence starts here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-20 sm:py-32 bg-cream text-center">
        <div className="max-w-[1000px] mx-auto px-4">
          <ScrollRevealText as="p" className="font-display text-2xl sm:text-3xl md:text-5xl leading-tight text-ink">
            Admission is simple.
            <br className="hidden md:block" />
            <span className="text-terracotta">Excellence</span> is
            guaranteed.
          </ScrollRevealText>
        </div>
      </section>

      {/* PROCESS — winding road */}
      <section className="py-16 sm:py-28 bg-cream overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-4">
          <FadeIn className="mb-16 sm:mb-24 text-center">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              How It Works
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3">
              Admission Process
            </ScrollRevealText>
          </FadeIn>

          <WhenVisible className="relative">
            <svg
              viewBox="0 0 100 750"
              preserveAspectRatio="none"
              className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[60px] sm:w-[80px]"
              aria-hidden="true"
            >
              <path
                d="M50,20 C80,90 20,170 50,240 C80,310 20,390 50,460 C80,530 20,610 50,720"
                fill="none"
                stroke="#d4c5a9"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.3"
              />
              <path
                id="admissionsRoad"
                d="M50,20 C80,90 20,170 50,240 C80,310 20,390 50,460 C80,530 20,610 50,720"
                fill="none"
                stroke="#d4c5a9"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 6"
              />
              {[20, 155, 290, 425, 560].map((cy, i) => (
                <circle key={i} cx="50" cy={cy} r="6" fill="#f5f0e8" stroke="#c45d3e" strokeWidth="2.5" />
              ))}
            </svg>

            {/* Milestone items */}
            <div className="relative z-10 space-y-12 sm:space-y-0">
              {steps.map((s, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={s.num} delay={i * 150}>
                    <div className={`relative sm:flex items-center sm:h-[140px] ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      {/* Content card */}
                      <div className={`sm:w-[calc(50%-40px)] ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                        <div className="group bg-white border border-sand/60 p-5 sm:p-6 hover:border-terracotta/40 hover:shadow-lg transition-all duration-500">
                          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'sm:flex-row-reverse' : ''}`}>
                            <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/10 transition-colors duration-500">
                              <s.Icon className="w-4 h-4 text-sand group-hover:text-terracotta transition-colors duration-500" />
                            </div>
                            <div>
                              <span className="font-display text-xs text-terracotta font-medium tracking-wider uppercase">
                                {s.num}
                              </span>
                              <h3 className="font-display text-base sm:text-lg text-ink group-hover:text-terracotta transition-colors duration-500">
                                {s.title}
                              </h3>
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

      {/* FORM */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="text-center mb-10 sm:mb-14">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              Get Started
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3 mb-4">
              Admission Enquiry
            </ScrollRevealText>
            <p className="text-stone text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Fill out the form and our admissions team will get in touch with
              you within 24 hours.
            </p>
          </FadeIn>
          <FadeIn className="text-center">
            <Link
              href="https://forms.gle/qwom1ZoYDYSfWt9Q7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-terracotta text-white font-semibold text-base sm:text-lg hover:bg-[#a84e33] hover:-translate-y-0.5 transition-all duration-300"
            >
              Open Admission Form
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 bg-ink">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <FadeIn>
            <div className="w-12 h-px bg-terracotta mx-auto mb-8" />
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Ready to
              <br />
              <span className="text-terracotta">Get Started</span>?
            </ScrollRevealText>
            <p className="text-stone text-base sm:text-xl mb-10 max-w-2xl mx-auto">
              Admissions Open for 2026–27. Limited seats available.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-body text-sm uppercase tracking-[0.15em] font-medium transition-all bg-terracotta text-cream hover:bg-terracotta/80"
              >
                Schedule Campus Visit
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-body text-sm uppercase tracking-[0.15em] font-medium transition-all bg-transparent text-cream border border-cream hover:bg-cream hover:text-ink"
              >
                Call Admissions
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
