"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SITE } from "@/lib/constants";
import { ChevronDown, Zap } from "lucide-react";

gsap.registerPlugin(useGSAP);

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 2.6 });

      // Eyebrow label: stagger characters
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      // Headline line 1
      tl.fromTo(
        ".hero-headline-1",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      // Headline line 2 (gradient text with glow)
      tl.fromTo(
        ".hero-headline-2",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // Description
      tl.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

      // Telemetry badge
      tl.fromTo(
        ".hero-telemetry",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      );

      // CTA buttons with spring bounce
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.2"
      );

      // Scroll indicator
      tl.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-dvh flex items-center blueprint-grid overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(85,209,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container px-6 xl:px-0 pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className="hero-eyebrow text-electric-cyan text-xs tracking-[0.3em] mb-6"
            style={{
              fontFamily:
                'var(--font-mono, "JetBrains Mono", monospace)',
              opacity: 0,
            }}
          >
            {SITE.hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
            <span
              className="hero-headline-1 block text-white-pure mb-2"
              style={{ opacity: 0 }}
            >
              {SITE.hero.headlineTop}
            </span>
            <span
              className="hero-headline-2 block gradient-text text-glow-cyan"
              style={{ opacity: 0 }}
            >
              {SITE.hero.headlineBottom}
            </span>
          </h1>

          {/* Description */}
          <p
            className="hero-description text-white-muted text-lg md:text-xl leading-relaxed max-w-xl mb-8"
            style={{
              fontFamily:
                'var(--font-body, "Inter", system-ui, sans-serif)',
              opacity: 0,
            }}
          >
            {SITE.hero.description}
          </p>

          {/* Telemetry Badge */}
          <div
            className="hero-telemetry glass-card inline-flex items-center gap-4 px-5 py-3 mb-10"
            style={{ opacity: 0 }}
          >
            <Zap size={16} className="text-electric-cyan" />
            {SITE.hero.telemetry.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                <span
                  className="text-white-pure text-sm font-semibold"
                  style={{
                    fontFamily:
                      'var(--font-mono, "JetBrains Mono", monospace)',
                  }}
                >
                  {item.value}
                </span>
                <span className="text-white-muted text-xs">{item.label}</span>
                {i < SITE.hero.telemetry.length - 1 && (
                  <span className="text-white-muted/30 mx-1">·</span>
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="hero-cta btn-primary"
              style={{ opacity: 0 }}
            >
              Start Architecture Review
            </a>
            <a
              href="#capabilities"
              className="hero-cta btn-ghost"
              style={{ opacity: 0 }}
            >
              View Our Craft
              <ChevronDown size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span
          className="text-white-muted text-xs tracking-widest"
          style={{
            fontFamily:
              'var(--font-mono, "JetBrains Mono", monospace)',
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={20} className="text-electric-cyan scroll-indicator" />
      </div>
    </section>
  );
}
