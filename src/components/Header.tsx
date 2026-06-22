"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Activities", href: "/classes" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-sand)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Edison Public School Logo"
              width={36}
              height={36}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm"
            />
            <div className="leading-none">
              <span
                className={`font-display text-sm sm:text-base tracking-tight transition-colors duration-500 ${
                  isScrolled ? "text-forest" : "text-white"
                }`}
              >
                Edison Public School
              </span>
              <span
                className={`block text-[9px] sm:text-[10px] tracking-[0.15em] uppercase mt-0.5 transition-colors duration-500 ${
                  isScrolled ? "text-stone" : "text-white/60"
                }`}
              >
                Puthiamputhur
              </span>
            </div>
          </Link>

          <button
            className={`md:hidden z-[60] relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
              isScrolled || mobileMenuOpen ? "text-forest" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-5 flex flex-col gap-1.5 items-end">
              <span
                className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-[4.5px] w-5 bg-forest"
                    : "w-5 bg-current"
                }`}
              />
              <span
                className={`block h-[1.5px] w-3 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "bg-current"
                }`}
              />
              <span
                className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-[4.5px] w-5 bg-forest"
                    : "w-4 bg-current"
                }`}
              />
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-[13px] tracking-wide font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? isScrolled
                      ? "text-forest"
                      : "text-white"
                    : isScrolled
                      ? "text-stone hover:text-ink"
                      : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-terracotta" />
                )}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="ml-3 px-5 py-2 text-[13px] tracking-wide font-medium bg-terracotta text-white rounded-sm hover:bg-forest transition-colors duration-300"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-ink/40 z-[55] md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile nav */}
      <nav
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-cream z-[55] md:hidden shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <ul className="flex flex-col gap-0.5 list-none m-0 p-0 flex-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-3 px-4 text-[15px] font-medium tracking-wide transition-colors duration-200 border-l-2 ${
                    pathname === link.href
                      ? "text-forest border-terracotta bg-forest/5"
                      : "text-stone border-transparent hover:text-ink hover:border-sand"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-5 border-t border-sand">
            <Link
              href="/admissions"
              className="block text-center py-3 px-6 bg-terracotta text-white text-sm font-medium tracking-wide hover:bg-forest transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply for Admission
            </Link>
            <a
              href="tel:+919876543210"
              className="block text-center py-3 text-stone text-sm tracking-wide mt-3 hover:text-ink transition-colors"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
