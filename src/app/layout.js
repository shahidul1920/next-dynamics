import { Space_Grotesk, Inter, JetBrains_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Next Dynamics | Ultra-Premium Creative Engineering Studio",
  description:
    "Bespoke web platforms for visionary brands. Sub-second speed, jaw-dropping GSAP motion, and zero commodity tools. Next.js, Three.js, and WebGL engineering for enterprises and funded scaleups.",
  keywords: [
    "creative engineering",
    "bespoke web development",
    "Next.js studio",
    "GSAP animations",
    "Three.js",
    "WebGL",
    "headless CMS",
    "ultra-premium web design",
    "performance engineering",
  ],
  authors: [{ name: "Next Dynamics", url: "https://nextdynamics.tech" }],
  openGraph: {
    title: "Next Dynamics | Ultra-Premium Creative Engineering Studio",
    description:
      "Bespoke web platforms for visionary brands. Sub-second speed, jaw-dropping motion, zero commodity tools.",
    url: "https://nextdynamics.tech",
    siteName: "Next Dynamics",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Dynamics | Ultra-Premium Creative Engineering Studio",
    description:
      "Bespoke web platforms for visionary brands. Sub-second speed, jaw-dropping motion, zero commodity tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
