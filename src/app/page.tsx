import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import Parallax from "@/components/Parallax";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSlider from "@/components/HeroSlider";
import { GentleWave } from "@/components/WaveDivider";
import {
  GraduationCap,
  Trophy,
  DevicePhone,
  UserGroup,
  Sparkles,
  Heart,
  Gps,
  Shield,
  Bus,
  Route,
  Swimmer,
  Sword,
  Target,
  PaintBrush,
  Volleyball,
  Running,
  Users,
  CalendarDays,
  ThumbUp,
  BookOpen,
} from "@/components/icons";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Edison Public School",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Puthiamputhur",
    addressLocality: "Thoothukudi",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  telephone: "+91 98765 43210",
  email: "info@edisonpublicschool.com",
};

const benefits = [
  {
    num: "01",
    title: "Affordable CBSE Education",
    desc: "Quality CBSE curriculum at minimum cost, making premium education accessible to rural communities.",
    Icon: GraduationCap,
  },
  {
    num: "02",
    title: "Competitive Exam Coaching",
    desc: "Subject-focused learning to crack UPSC, NEET, JEE, CLAT and more.",
    Icon: Trophy,
  },
  {
    num: "03",
    title: "Smart Classrooms",
    desc: "Technology-enabled learning with interactive digital boards and modern tools.",
    Icon: DevicePhone,
  },
  {
    num: "04",
    title: "Individual Attention",
    desc: "Low student-teacher ratio ensuring every child receives personalized guidance.",
    Icon: UserGroup,
  },
  {
    num: "05",
    title: "Nine-plus Activities",
    desc: "Swimming, Karate, Archery, Tennis, Silambam, Art and Craft, Volleyball, Kho Kho, Parade.",
    Icon: Sparkles,
  },
  {
    num: "06",
    title: "Holistic Development",
    desc: "Focus on sports, arts, character building, and extracurricular activities.",
    Icon: Heart,
  },
];

const faculty = [
  {
    name: "Dr. Sunita Sharma",
    subject: "Physics",
    qual: "Ph.D. in Physics",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Arun Patel",
    subject: "Mathematics",
    qual: "M.Sc. Mathematics, B.Ed.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ms. Kavitha Reddy",
    subject: "English",
    qual: "M.A. English, NET Qualified",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Ravi Krishnan",
    subject: "Chemistry",
    qual: "M.Sc. Chemistry, B.Ed.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
  },
];

const activities = [
  { name: "Swimming", Icon: Swimmer },
  { name: "Karate", Icon: Sword },
  { name: "Archery", Icon: Target },
  { name: "Tennis", Icon: Volleyball },
  { name: "Art & Craft", Icon: PaintBrush },
  { name: "Silambam", Icon: Sword },
  { name: "Volleyball", Icon: Volleyball },
  { name: "Kho Kho", Icon: Running },
  { name: "Parade Training", Icon: Shield },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative h-[90vh] sm:h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <Parallax speed={0.15}>
          <HeroSlider />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d4a3e]/80 via-[#2d4a3e]/60 to-[#1a1f16]/70 z-[1]" />
        {/* Decorative SVG pattern */}
        <div className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="heroGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
                <path d="M30,0 L30,60 M0,30 L60,30" stroke="white" strokeWidth="0.3" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
        {/* Floating decorative circles */}
        <div className="absolute top-[15%] left-[8%] z-[2] pointer-events-none" aria-hidden="true">
          <svg className="w-16 h-16 sm:w-24 sm:h-24 text-[#c45d3e] opacity-20 animate-float-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] right-[6%] z-[2] pointer-events-none" aria-hidden="true">
          <svg className="w-12 h-12 sm:w-20 sm:h-20 text-[#d4c5a9] opacity-15 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
            <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn direction="left">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-6 text-[#d4c5a9] font-medium">
              Est. 2014 &mdash; Puthiamputhur, Tamil Nadu
            </p>
            <ScrollRevealText as="h1" className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-[0.92] mb-5 sm:mb-8 max-w-[800px] mx-auto">
              Where Rural India&apos;s
              <br />
              Brightest Minds
              <br />
              Find Their <span className="text-[#c45d3e]">Voice</span>
            </ScrollRevealText>
            <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 text-white/70 font-body leading-relaxed px-2">
              Affordable CBSE education from Nursery to Grade XII.
              Preparing students for NEET, JEE, CLAT, UPSC and more.
            </p>
            <div className="flex gap-3 sm:gap-5 justify-center flex-wrap">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-7 sm:px-10 py-3 sm:py-4 rounded-sm font-semibold transition-all bg-[#c45d3e] text-white hover:bg-[#a84e33] hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 sm:px-10 py-3 sm:py-4 rounded-sm font-semibold transition-all bg-transparent text-white border border-white/40 hover:bg-white hover:text-[#1a1f16] backdrop-blur-sm text-sm sm:text-base"
              >
                Explore Campus
              </Link>
            </div>
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
      <section className="py-24 sm:py-36 bg-[#f5f0e8] text-center overflow-hidden">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <ScrollRevealText as="p" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-[1.15] text-[#1a1f16]">
            We believe every child deserves more than a classroom &mdash;
            they deserve a calling.
          </ScrollRevealText>
        </div>
      </section>

      <div className="h-px bg-[#d4c5a9]" />

      {/* WHY US */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14 sm:mb-20">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[3px] h-16 sm:h-20 bg-[#c45d3e] shrink-0 mt-1" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
                  Why Parents Choose Us
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-[#1a1f16] leading-tight">
                  The Edison
                  <br />
                  Advantage
                </ScrollRevealText>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 100} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-white p-7 sm:p-9 border-t border-[#d4c5a9] h-full group hover:border-[#c45d3e] transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#c45d3e]/10 text-[#c45d3e] group-hover:bg-[#c45d3e] group-hover:text-white transition-colors duration-300">
                      <b.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#c45d3e] font-body">
                      {b.num}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-display text-[#1a1f16] mb-3">
                    {b.title}
                  </h3>
                  <p className="text-[#8a8178] text-sm sm:text-[0.925rem] leading-relaxed font-body">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 sm:py-28 bg-[#1a1f16] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="text-center mb-14 sm:mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
              Our Impact
            </p>
            <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display leading-tight">
              Numbers That Speak
            </ScrollRevealText>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { target: 500, suffix: "+", label: "Students", Icon: Users },
              { target: 35, suffix: "+", label: "Qualified Teachers", Icon: BookOpen },
              { target: 10, suffix: "+", label: "Years Excellence", Icon: CalendarDays },
              { target: 98, suffix: "%", label: "Parent Satisfaction", Icon: ThumbUp },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 text-center border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <s.Icon className="w-20 h-20 text-white" />
                  </div>
                  <StatsCounter target={s.target} suffix={s.suffix} label={s.label} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-0">
            <FadeIn direction="right" className="w-full md:w-[60%] md:ml-auto order-1 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <Parallax speed={0.08}>
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Principal"
                    fill
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={200} className="w-full md:w-[55%] z-10 order-2 md:order-1 md:-mr-[6rem]">
              <div className="bg-white p-7 sm:p-10 md:p-14 shadow-xl border-l-[3px] border-[#c45d3e]">
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-3 font-medium">
                  Leadership
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-[#1a1f16] mb-5 sm:mb-8 leading-tight">
                  Principal&apos;s
                  <br />
                  Message
                </ScrollRevealText>
                <div className="text-base sm:text-lg italic text-[#1a1f16] border-l-[2px] border-[#d4c5a9] pl-5 sm:pl-6 py-3 mb-5 sm:mb-7 font-body">
                  &ldquo;Education is not just preparation for life;
                  education is life itself.&rdquo;
                </div>
                <p className="text-sm sm:text-base text-[#8a8178] mb-6 sm:mb-8 leading-relaxed font-body">
                  At Edison Public School, we believe every child has unlimited
                  potential. Our mission is to create a nurturing environment
                  where students develop critical thinking, creativity, and
                  character.
                </p>
                <div>
                  <p className="font-semibold text-[#1a1f16] text-base sm:text-lg font-body">
                    Dr. Lakshmi Narayanan
                  </p>
                  <p className="text-[#8a8178] text-xs sm:text-sm font-body">
                    Ph.D. in Education | 20+ Years Experience
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#d4c5a9]" />

      {/* FACULTY */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14 sm:mb-20">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[3px] h-16 sm:h-20 bg-[#c45d3e] shrink-0 mt-1" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
                  Our Team
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-[#1a1f16] leading-tight">
                  Expert Faculty
                </ScrollRevealText>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {faculty.map((f, i) => (
              <FadeIn key={f.name} delay={i * 100}>
                <div className="bg-white overflow-hidden border-t border-[#d4c5a9] h-full group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={f.img}
                      alt={f.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-display text-[#1a1f16]">
                      {f.name}
                    </h3>
                    <p className="text-[#c45d3e] font-medium text-xs sm:text-sm mt-1 font-body">
                      {f.subject}
                    </p>
                    <p className="text-[#8a8178] text-xs mt-1 font-body">
                      {f.qual}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-[#d4c5a9]" />

      {/* ACTIVITIES */}
      <section className="py-20 sm:py-28 bg-[#1a1f16] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14 sm:mb-20">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[3px] h-16 sm:h-20 bg-[#c45d3e] shrink-0 mt-1" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
                  Beyond Academics
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-white leading-tight">
                  Extracurricular
                  <br />
                  Activities
                </ScrollRevealText>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {activities.map((a, i) => (
              <FadeIn key={a.name} delay={i * 60}>
                <div className="border-l-[3px] border-[#c45d3e] py-4 sm:py-5 pl-5 sm:pl-6 hover:bg-white/5 transition-colors group">
                  <div className="flex items-center gap-3">
                    <a.Icon className="w-6 h-6 text-[#c45d3e] opacity-60 group-hover:opacity-100 transition-opacity" />
                    <p className="font-display text-base sm:text-lg text-white">
                      {a.name}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14 sm:mb-20">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[3px] h-16 sm:h-20 bg-[#c45d3e] shrink-0 mt-1" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
                  What Parents Say
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-[#1a1f16] leading-tight">
                  Parent
                  <br />
                  Testimonials
                </ScrollRevealText>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      <div className="h-px bg-[#d4c5a9]" />

      {/* TRANSPORT */}
      <section className="py-20 sm:py-28 bg-[#f5f0e8]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <FadeIn className="mb-14 sm:mb-20">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-[3px] h-16 sm:h-20 bg-[#c45d3e] shrink-0 mt-1" />
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a8178] mb-2 font-medium">
                  Student Safety
                </p>
                <ScrollRevealText as="h2" className="text-3xl sm:text-4xl md:text-5xl font-display text-[#1a1f16] leading-tight">
                  Safe Transportation
                </ScrollRevealText>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                num: "01",
                title: "GPS Tracking",
                desc: "Real-time tracking for parents",
                Icon: Gps,
              },
              {
                num: "02",
                title: "Safe Pickup & Drop",
                desc: "Door-to-door service",
                Icon: Bus,
              },
              {
                num: "03",
                title: "Trained Drivers",
                desc: "Background-verified staff",
                Icon: Shield,
              },
              {
                num: "04",
                title: "Wide Coverage",
                desc: "Routes across all major areas",
                Icon: Route,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="bg-white p-6 sm:p-8 border-t border-[#d4c5a9] h-full group hover:border-[#c45d3e] transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 flex items-center justify-center bg-[#c45d3e]/10 text-[#c45d3e] group-hover:bg-[#c45d3e] group-hover:text-white transition-colors duration-300">
                      <item.Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#c45d3e] font-body">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-[#1a1f16] font-display mb-2 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-[#8a8178] text-xs sm:text-sm font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 sm:py-36 overflow-hidden">
        <Parallax speed={0.15}>
          <Image
            src="https://images.unsplash.com/photo-1762972921985-d77aaeb4630a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1f16]/88" />
        </Parallax>
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h2" className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-5 sm:mb-8 leading-[1.05]">
              Give Your Child
              <br />
              The Best Start
            </ScrollRevealText>
            <p className="text-sm sm:text-lg text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto font-body leading-relaxed">
              Admissions Open for 2026-27. Join the Edison family today.
            </p>
            <div className="flex gap-3 sm:gap-5 justify-center flex-wrap">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center px-7 sm:px-10 py-3 sm:py-4 rounded-sm font-semibold transition-all bg-[#c45d3e] text-white hover:bg-[#a84e33] hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 sm:px-10 py-3 sm:py-4 rounded-sm font-semibold transition-all bg-transparent text-white border border-white/40 hover:bg-white hover:text-[#1a1f16] backdrop-blur-sm text-sm sm:text-base"
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
