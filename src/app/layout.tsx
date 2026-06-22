import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edison Public School | Premium CBSE Education",
  description:
    "Edison Public School offers modern, premium CBSE education in Puthiamputhur, Tamil Nadu. Nurturing academic excellence and character development.",
  openGraph: {
    title: "Edison Public School",
    description: "Premium CBSE education in Puthiamputhur.",
    url: "https://edisonpublicschool.com",
    siteName: "Edison Public School",
    images: [{ url: "/logo.png", width: 800, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerif.variable} ${dmSans.variable} font-body text-ink bg-cream antialiased`}
      >
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
