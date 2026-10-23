"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { ArrowUp, Sparkles, Mail, Clock, Globe } from "lucide-react";

const Footer3DCanvas = dynamic(() => import("./Footer3DCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function EditorialFooter() {
  const [times, setTimes] = useState({
    sf: "09:00 AM",
    lon: "05:00 PM",
    tok: "02:00 AM",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone) =>
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone,
        }).format(now);

      setTimes({
        sf: formatTime("America/Los_Angeles"),
        lon: formatTime("Europe/London"),
        tok: formatTime("Asia/Tokyo"),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080c] pt-32 pb-16 px-6 lg:px-12 overflow-hidden border-t border-white/[0.06]">
      {/* 1. Grand Curved Luminous Spectrum Horizon Arc (Apricode Signature) */}
      <div className="absolute top-0 inset-x-0 h-28 overflow-visible pointer-events-none -translate-y-1/2">
        <svg
          viewBox="0 0 1000 80"
          preserveAspectRatio="none"
          className="w-full h-full"
          focusable="false"
        >
          <defs>
            <linearGradient id="spectrum-footer-glow" x1="0" x2="1">
              <stop stopColor="#bdb79b" />
              <stop offset="0.2" stopColor="#c499b9" />
              <stop offset="0.45" stopColor="#aab4cf" />
              <stop offset="0.75" stopColor="#8dbdb0" />
              <stop offset="1" stopColor="#a4b889" />
            </linearGradient>
            <filter id="horizon-bloom" x="-10%" y="-100%" width="120%" height="300%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          <path d="M0 60Q500 -5 1000 60V82H0Z" fill="#05080c" />
          <g fill="none" stroke="url(#spectrum-footer-glow)">
            <path
              d="M0 60Q500 -5 1000 60"
              strokeWidth="22"
              opacity="0.25"
              filter="url(#horizon-bloom)"
            />
            <path
              d="M0 60Q500 -5 1000 60"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              opacity="0.9"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2. Interactive 3D Stage Callout */}
        <div className="rounded-3xl bg-surface/40 border border-white/[0.08] p-8 sm:p-14 mb-24 relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-electric-cyan">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Dynamics Sculpture</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-medium text-paper tracking-tight leading-tight">
                Independent thinking.{" "}
                <em className="font-serif italic font-normal text-slate-300">
                  Connected execution.
                </em>
              </h3>
              <p className="text-sm sm:text-base text-paper-muted font-light leading-relaxed max-w-xl">
                Every project is engineered from first principles with dedicated
                sprint capacity, zero junior delegation, and guaranteed 14-day staging SLAs.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-paper text-midnight font-mono text-xs uppercase tracking-widest font-semibold hover:bg-electric-cyan transition-colors"
                >
                  <span>Initiate Partnership</span>
                  <span className="link-signal" aria-hidden="true">
                    <svg width="24" height="12" viewBox="0 0 30 18" fill="none">
                      <circle cx="4" cy="9" r="2.5" fill="currentColor" />
                      <path d="M10 9H20" stroke="currentColor" strokeWidth="1" />
                      <circle cx="26" cy="9" r="2.5" fill="currentColor" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right 3D Kinetic Canvas */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <Footer3DCanvas />
              <span className="text-[11px] font-mono text-paper-muted/60 uppercase tracking-widest mt-2">
                Interactive WebGL Polyhedron · Touch & Hover
              </span>
            </div>
          </div>
        </div>

        {/* 3. Global Time Zones & Studio Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/[0.06] mb-20 text-xs font-mono">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-paper-muted">San Francisco (PST)</span>
            <span className="text-paper font-semibold">{times.sf}</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-paper-muted">London (GMT)</span>
            <span className="text-paper font-semibold">{times.lon}</span>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <span className="text-paper-muted">Tokyo (JST)</span>
            <span className="text-paper font-semibold">{times.tok}</span>
          </div>
        </div>

        {/* 4. Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image src="/logo.svg" alt="ND" fill className="object-contain" />
              </div>
              <span className="font-bold tracking-wider text-sm text-paper">
                NEXT<span className="text-electric-cyan">DYNAMICS</span>
              </span>
            </div>
            <p className="text-xs text-paper-muted font-light leading-relaxed max-w-sm">
              Creative engineering studio forging bespoke web platforms,
              headless architectures, and high-velocity supply chain automation.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-paper-muted">
              ARCHITECTURES
            </p>
            <ul className="space-y-2 text-xs font-mono text-paper-muted/80">
              <li>Next.js 15 App Router</li>
              <li>Physics-driven GSAP & Three.js</li>
              <li>Enterprise 1688 API Sourcing</li>
              <li>Headless WPGraphQL & Sanity</li>
              <li>Autonomous Multi-Agent AI</li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-paper-muted">
              TRANSMISSION
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 text-sm font-mono text-paper hover:text-electric-cyan transition-colors"
            >
              <Mail className="w-4 h-4 text-electric-cyan" />
              <span>{SITE.email}</span>
            </a>
            <p className="text-xs text-paper-muted font-mono leading-relaxed pt-2">
              Direct Senior Engineering Inquiries.
              <br />
              Responses dispatched within 24 business hours.
            </p>
          </div>
        </div>

        {/* 5. Massive Architectural Monogram Watermark */}
        <div className="relative py-8 flex justify-center opacity-[0.05] select-none pointer-events-none">
          <div className="text-7xl sm:text-9xl md:text-[14rem] font-display font-black tracking-tighter text-paper uppercase leading-none">
            NEXT DYNAMICS
          </div>
        </div>

        {/* 6. Bottom Signature Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper-muted">
          <div>
            © 2026 Next Dynamics Studio. All rights reserved.
          </div>
          <div className="text-paper-muted/60">
            CRAFTED FROM FIRST PRINCIPLES · ZERO COMMODITY
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-paper hover:text-electric-cyan transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span className="text-[10px] text-paper-muted">01</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
