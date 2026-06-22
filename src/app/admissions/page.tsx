import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import Parallax from "@/components/Parallax";
import Image from "next/image";
import Link from "next/link";
import AdmissionsForm from "@/components/AdmissionsForm";
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
        {/* Organic SVG wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-32">
            <path d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,30 1440,50 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9]">
              Join the
              <br />
              <span className="text-terracotta">Edison Family</span>
            </ScrollRevealText>
            <p className="text-base sm:text-xl md:text-2xl text-cream/80 max-w-xl mx-auto font-light mt-4 sm:mt-6">
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

      {/* PROCESS */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-12 sm:mb-16">
            <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
              How It Works
            </span>
            <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3">
              Admission Process
            </ScrollRevealText>
          </FadeIn>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 80}>
                <div className="group border-b border-sand hover:bg-ink transition-colors duration-500">
                  <div className="flex items-center gap-5 sm:gap-6 py-6 sm:py-8 px-4 sm:px-8">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center text-sand group-hover:text-white/40 transition-colors duration-500">
                        <s.Icon className="w-6 h-6" />
                      </div>
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl text-sand group-hover:text-white/10 transition-colors duration-500">
                        {s.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-ink group-hover:text-white transition-colors duration-500">
                        {s.title}
                      </h3>
                      <p className="text-stone text-sm sm:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-500 mt-1">
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

      {/* FORM */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-start">
            <FadeIn>
              <span className="text-terracotta font-body text-xs uppercase tracking-[0.2em] font-medium">
                Get Started
              </span>
              <ScrollRevealText as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-3 mb-4 sm:mb-6">
                Enquiry Form
              </ScrollRevealText>
              <p className="text-stone text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Fill out the form and our admissions team will get in touch with
                you within 24 hours.
              </p>
              <div className="bg-white p-6 sm:p-10 border-t-2 border-terracotta">
                <AdmissionsForm />
              </div>
            </FadeIn>
            <FadeIn delay={200} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden md:sticky md:top-28">
                <Image
                  src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Edison campus"
                  fill
                  className="object-cover"
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
