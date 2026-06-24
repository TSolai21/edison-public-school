import FadeIn from "@/components/FadeIn";
import ScrollRevealText from "@/components/ScrollRevealText";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Envelope } from "@/components/icons";

export const metadata = {
  title: "Contact | Edison Public School",
  description: "Get in touch with Edison Public School in Puthiamputhur.",
};

export default function Contact() {
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
    url: "https://edisonpublicschool.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-[#2d4a3e]">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
          <svg viewBox="0 0 800 500" className="w-full h-full" fill="none" stroke="white" strokeWidth="1.2">
            <rect x="250" y="160" width="300" height="200" rx="4" />
            <path d="M250,160 L400,280 L550,160" strokeWidth="0.8" />
            <path d="M250,360 L350,260" strokeWidth="0.6" />
            <path d="M550,360 L450,260" strokeWidth="0.6" />
            <circle cx="400" cy="400" r="25" strokeWidth="0.8" />
            <path d="M390,395 L400,385 L410,395 L410,410 L390,410 Z" fill="white" fillOpacity="0.2" strokeWidth="0.6" />
            <path d="M150,200 Q150,150 200,130 Q250,150 250,200" strokeWidth="0.8" />
            <line x1="200" y1="130" x2="200" y2="100" strokeWidth="0.8" />
            <circle cx="200" cy="90" r="10" strokeWidth="0.8" />
            <path d="M550,200 Q550,150 600,130 Q650,150 650,200" strokeWidth="0.8" />
            <line x1="600" y1="130" x2="600" y2="100" strokeWidth="0.8" />
            <circle cx="600" cy="90" r="10" strokeWidth="0.8" />
            <path d="M300,420 L500,420" strokeWidth="0.6" />
            <circle cx="350" cy="430" r="3" fill="white" fillOpacity="0.3" strokeWidth="0" />
            <circle cx="400" cy="430" r="3" fill="white" fillOpacity="0.3" strokeWidth="0" />
            <circle cx="450" cy="430" r="3" fill="white" fillOpacity="0.3" strokeWidth="0" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4 max-w-[1200px] mx-auto">
          <FadeIn>
            <ScrollRevealText as="h1" className="font-display text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-4">
              Let&apos;s<br />
              <span className="text-terracotta">Connect</span>
            </ScrollRevealText>
            <div className="w-12 h-[2px] bg-terracotta mx-auto mb-4" />
            <p className="font-body text-sm sm:text-base md:text-lg text-white/70 max-w-md mx-auto">
              We&apos;d love to hear from you. Reach out anytime.
            </p>
          </FadeIn>
        </div>
        {/* Hero wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24 md:h-32 block">
            <path d="M0,50 C180,90 420,20 660,50 C900,80 1140,30 1440,50 L1440,120 L0,120 Z" fill="#f5f0e8" />
          </svg>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn className="mb-12 sm:mb-16">
            <span className="font-body text-terracotta text-sm uppercase tracking-[0.2em] font-medium">
              Reach Us
            </span>
            <ScrollRevealText as="h2" className="font-display text-ink text-3xl sm:text-4xl md:text-5xl mt-3">
              Contact Information
            </ScrollRevealText>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                label: "Address",
                lines: [
                  "Edison Public School",
                  "Puthiamputhur, Thoothukudi District",
                  "Tamil Nadu, India",
                ],
                Icon: MapPin,
              },
              {
                label: "Phone",
                lines: ["+91 98765 43210"],
                href: "tel:+919876543210",
                Icon: Phone,
              },
              {
                label: "Email",
                lines: ["info@edisonpublicschool.com"],
                href: "mailto:info@edisonpublicschool.com",
                Icon: Envelope,
              },
            ].map((card, i) => (
              <FadeIn key={card.label} delay={i * 100}>
                <div className="border-l-[3px] border-terracotta bg-white p-8 sm:p-10 group hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-terracotta/10 text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                      <card.Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-ink text-xl">
                      {card.label}
                    </h3>
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="font-body text-stone text-sm leading-relaxed hover:text-terracotta transition-colors duration-300"
                    >
                      {card.lines.join(" ")}
                    </a>
                  ) : (
                    <div className="font-body text-stone text-sm leading-relaxed">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 sm:py-24 bg-ink">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            <FadeIn>
              <span className="font-body text-terracotta text-sm uppercase tracking-[0.2em] font-medium">
                Message Us
              </span>
              <ScrollRevealText as="h2" className="font-display text-cream text-3xl sm:text-4xl md:text-5xl mt-3 mb-8">
                Send a Message
              </ScrollRevealText>
              <ContactForm />
            </FadeIn>
            <FadeIn delay={200}>
              <span className="font-body text-terracotta text-sm uppercase tracking-[0.2em] font-medium">
                Find Us
              </span>
              <ScrollRevealText as="h2" className="font-display text-cream text-3xl sm:text-4xl md:text-5xl mt-3 mb-8">
                Our Location
              </ScrollRevealText>
              <div className="w-full h-[350px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.468798083812!2d78.0336!3d8.8359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03f0b0b0b0b0b0%3A0x0!2sPuthiamputhur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 bg-cream text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <FadeIn>
            <ScrollRevealText as="h2" className="font-display text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Visit Our Campus
            </ScrollRevealText>
            <div className="w-16 h-[2px] bg-terracotta mx-auto mb-6" />
            <p className="font-body text-stone text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Schedule a visit and see why parents trust us with their
              children&apos;s future.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 font-body text-sm uppercase tracking-[0.15em] bg-forest text-cream hover:bg-terracotta transition-colors duration-300"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@edisonpublicschool.com"
                className="inline-flex items-center justify-center px-8 py-4 font-body text-sm uppercase tracking-[0.15em] bg-transparent text-ink border border-sand hover:border-terracotta hover:text-terracotta transition-colors duration-300"
              >
                Send Email
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
