"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ANTI_COMMODITY } from "@/lib/constants";
import { Ban } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AntiCommodity() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Section heading reveal
      gsap.fromTo(
        ".ac-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Eliminated items stagger in from left, then strike-through
      gsap.fromTo(
        ".ac-eliminated-item",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ac-eliminated",
            start: "top 80%",
          },
        }
      );

      // Strike-through line draw
      gsap.fromTo(
        ".ac-strike",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.inOut",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".ac-eliminated",
            start: "top 80%",
          },
        }
      );

      // Right-side bullet points
      gsap.fromTo(
        ".ac-bullet",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ac-points",
            start: "top 80%",
          },
        }
      );

      // Background glow
      gsap.fromTo(
        ".ac-glow",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 0.15,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative section-padding overflow-hidden">
      {/* Background glow */}
      <div
        className="ac-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(85,209,255,0.2) 0%, transparent 70%)",
          opacity: 0,
        }}
      />

      <div className="section-container relative z-10">
        <h2
          className="ac-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16"
          style={{ opacity: 0 }}
        >
          {ANTI_COMMODITY.heading.split(" ").map((word, i) => (
            <span key={i}>
              {i === 1 ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}{" "}
            </span>
          ))}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Eliminated items */}
          <div className="ac-eliminated space-y-5">
            <p
              className="text-white-muted text-sm tracking-widest uppercase mb-6"
              style={{
                fontFamily:
                  'var(--font-mono, "JetBrains Mono", monospace)',
              }}
            >
              What We Eliminate
            </p>
            {ANTI_COMMODITY.eliminated.map((item, i) => (
              <div
                key={i}
                className="ac-eliminated-item relative flex items-center gap-4 py-3 px-5 rounded-xl"
                style={{
                  background: "rgba(10, 26, 64, 0.3)",
                  opacity: 0,
                }}
              >
                <Ban size={18} className="text-red-400 shrink-0" />
                <span className="text-white-muted text-lg">{item}</span>
                {/* Strike-through line */}
                <div
                  className="ac-strike absolute inset-y-0 left-0 right-0 flex items-center pointer-events-none"
                  style={{ transformOrigin: "left center", scaleX: 0 }}
                >
                  <div className="w-full h-[2px] bg-red-400/60" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: What we stand for */}
          <div className="ac-points space-y-6">
            <p
              className="text-white-muted text-sm tracking-widest uppercase mb-6"
              style={{
                fontFamily:
                  'var(--font-mono, "JetBrains Mono", monospace)',
              }}
            >
              What We Stand For
            </p>
            {ANTI_COMMODITY.points.map((point, i) => (
              <div
                key={i}
                className="ac-bullet flex items-start gap-4"
                style={{ opacity: 0 }}
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-electric-cyan shrink-0 shadow-[0_0_8px_rgba(85,209,255,0.6)]" />
                <p
                  className="text-white-pure text-lg leading-relaxed"
                  style={{
                    fontFamily:
                      'var(--font-body, "Inter", system-ui, sans-serif)',
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
