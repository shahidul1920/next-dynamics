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
  title: "Next Dynamics | Creative Frontend & Headless Web Studio",
  description:
    "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts. Sub-second speed and fluid GSAP motion engineered with Next.js.",
  keywords: [
    "creative frontend studio",
    "SaaS marketing websites",
    "headless WordPress development",
    "WPGraphQL Next.js",
    "GSAP animations",
    "custom e-commerce frontend",
    "Core Web Vitals optimization",
    "performance engineering",
  ],
  authors: [{ name: "Next Dynamics", url: "https://nextdynamics.tech" }],
  openGraph: {
    title: "Next Dynamics | Creative Frontend & Headless Web Studio",
    description:
      "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts. Sub-second speed and fluid GSAP motion.",
    url: "https://nextdynamics.tech",
    siteName: "Next Dynamics",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Dynamics | Creative Frontend & Headless Web Studio",
    description:
      "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
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
