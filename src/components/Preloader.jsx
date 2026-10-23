"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const gridLinesRef = useRef(null);
  const logoPathsRef = useRef(null);
  const logoTextRef = useRef(null);
  const [show, setShow] = useState(true);

  useGSAP(
    () => {
      if (!preloaderRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          setShow(false);
          onComplete?.();
        },
      });

      // Phase 1: Draw golden grid lines
      tl.fromTo(
        ".grid-line",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.inOut",
        }
      );

      // Phase 2: Draw the ND logo paths
      tl.fromTo(
        ".logo-path",
        { strokeDashoffset: 2000, fill: "transparent" },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // Phase 3: Fill the logo with gradient
      tl.to(
        ".logo-path",
        {
          fill: "#3b82f6",
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Phase 4: Reveal text
      tl.fromTo(
        ".preloader-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Phase 5: Scale up and fade out entire preloader
      tl.to(preloaderRef.current, {
        scale: 1.05,
        opacity: 0,
        duration: 0.6,
        ease: "power3.inOut",
        delay: 0.3,
      });
    },
    { scope: preloaderRef }
  );

  if (!show) return null;

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Blueprint grid lines */}
      <svg
        ref={gridLinesRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        {[0.25, 0.5, 0.75].map((pos, i) => (
          <line
            key={`h-${i}`}
            className="grid-line"
            x1="0%"
            y1={`${pos * 100}%`}
            x2="100%"
            y2={`${pos * 100}%`}
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.12"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        ))}
        {/* Vertical lines */}
        {[0.25, 0.5, 0.75].map((pos, i) => (
          <line
            key={`v-${i}`}
            className="grid-line"
            x1={`${pos * 100}%`}
            y1="0%"
            x2={`${pos * 100}%`}
            y2="100%"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.12"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
        ))}
      </svg>

      {/* Logo Mark */}
      <div className="relative z-10 flex flex-col items-center">
        <svg
          ref={logoPathsRef}
          width="120"
          height="120"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* N shape path */}
          <path
            className="logo-path"
            d="M523.46,182.71V689.35H400.38l-27.8-45.18L277.45,490.26l-.15-.29L201.43,367.18V689.35H78.35V168.08H201.43l29.68,48.08L277.3,291l.15.29,46.91,76,76,123.08V168.08h.14A521.26,521.26,0,0,1,523.46,182.71Z"
            stroke="#55d1ff"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="2000"
            strokeDashoffset="2000"
          />
          {/* D arc path */}
          <path
            className="logo-path"
            d="M921.65,689.35H722.7a321.36,321.36,0,0,0-68.78-199.09,320.87,320.87,0,0,0-253.4-123.08V168.08A520.89,520.89,0,0,1,921.65,689.35Z"
            stroke="#55d1ff"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray="2000"
            strokeDashoffset="2000"
          />
        </svg>

        {/* Text */}
        <div className="preloader-text mt-6 text-center" style={{ opacity: 0 }}>
          <span
            className="text-xl tracking-wider"
            style={{
              fontFamily:
                'var(--font-sans, "Space Grotesk", system-ui, sans-serif)',
              fontWeight: 700,
            }}
          >
            <span className="text-white-pure">NEXT </span>
            <span className="text-white-muted font-normal">DYNAMICS</span>
          </span>
        </div>
      </div>
    </div>
  );
}
