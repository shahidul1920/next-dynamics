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
  metadataBase: new URL("https://nextdynamics.tech"),
  title: {
    default: "Next Dynamics | Creative Frontend & Headless Web Studio",
    template: "%s | Next Dynamics",
  },
  description:
    "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts. Sub-second speed and fluid GSAP motion engineered with Next.js.",
  applicationName: "Next Dynamics",
  category: "technology",
  creator: "Next Dynamics",
  publisher: "Next Dynamics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Next Dynamics | Creative Frontend & Headless Web Studio",
    description:
      "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts. Sub-second speed and fluid GSAP motion.",
    url: "https://nextdynamics.tech",
    siteName: "Next Dynamics",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Next Dynamics - Creative frontend engineering studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Dynamics | Creative Frontend & Headless Web Studio",
    description:
      "High-converting SaaS marketing websites, headless WordPress architectures, and luxury brand storefronts.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  manifest: "/manifest.webmanifest",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nextdynamics.tech/#organization",
  name: "Next Dynamics",
  url: "https://nextdynamics.tech",
  logo: "https://nextdynamics.tech/logo-01.png",
  image: "https://nextdynamics.tech/logo-01.png",
  description:
    "Creative frontend engineering studio specializing in high-converting SaaS marketing websites, headless WordPress architectures, and luxury brand e-commerce storefronts.",
  email: "hello@nextdynamics.tech",
  telephone: "+8801879539832",
  priceRange: "$$$",
  areaServed: "Worldwide",
  serviceType: [
    "Creative frontend engineering",
    "Headless web development",
    "SaaS marketing website design",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@nextdynamics.tech",
    telephone: "+8801879539832",
    availableLanguage: ["English", "Bengali"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "BD",
  },
  sameAs: [
    "https://wa.me/8801879539832",
    "https://www.linkedin.com/company/nextdynamics-tech/",
  ],
  knowsAbout: [
    "Creative Frontend Engineering",
    "Headless WordPress Development",
    "WPGraphQL Next.js Integration",
    "SaaS Marketing Web Design",
    "GSAP Web Animations",
    "E-Commerce Web Design",
    "Core Web Vitals Optimization",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nextdynamics.tech/#website",
  name: "Next Dynamics",
  url: "https://nextdynamics.tech",
  publisher: {
    "@id": "https://nextdynamics.tech/#organization",
  },
  inLanguage: "en-US",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nextdynamics.tech/#webpage",
  url: "https://nextdynamics.tech",
  name: "Next Dynamics | Creative Frontend & Headless Web Studio",
  isPartOf: {
    "@id": "https://nextdynamics.tech/#website",
  },
  about: {
    "@id": "https://nextdynamics.tech/#organization",
  },
  primaryImageOfPage: "https://nextdynamics.tech/opengraph-image",
  inLanguage: "en-US",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable}`}
    >
      <head>
        {/* Global Structured Data (Organization & WebSite) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
