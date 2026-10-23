"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import LogoIcon from "./LogoIcon";
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
        <div className="rounded-3xl bg-surface/40 border border-white/[0.08] p-6 sm:p-10 lg:p-14 mb-20 sm:mb-24 relative overflow-hidden backdrop-blur-xl">
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
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-paper text-midnight font-mono text-xs uppercase tracking-widest font-semibold hover:bg-electric-cyan transition-colors"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-white/[0.06] mb-16 sm:mb-20 text-xs font-mono">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 flex items-center justify-center">
                <LogoIcon className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold tracking-wider text-sm text-white">
                NEXTDYNAMICS
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

        {/* 5. Massive Architectural Monogram Watermark (Exact Full Container Width) */}
        <div className="relative py-4 sm:py-6 w-full opacity-[0.05] select-none pointer-events-none">
          <svg
            viewBox="8 61 982 92"
            className="w-full h-auto block fill-current text-paper"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <path id="wf_N" d="M.5109863 0H.6609955V.72898867H.5109863V.23298645L.22200012 .72898867H.067993167V0H.21798706V.5039978L.5109863 0Z" />
              <path id="wf_E" d="M.22898865 .31399537H.5779877V.43899537H.22898865V.60398867H.60598757V.72898867H.07899475V0H.6239929V.125H.22898865V.31399537Z" />
              <path id="wf_X" d="M.4189911 .37199403 .6439972 .72898867H.46998597L.33599855 .4889984 .20799256 .72898867H.02999878L.2519989 .36698915 .021987915 0H.19599915L.33499146 .25299073 .47499085 0H.6529999L.4189911 .37199403Z" />
              <path id="wf_T" d="M.3849945 .60398867H.59799197V.72898867H.01399231V.60398867H.23498535V0H.3849945V.60398867Z" />
              <path id="wf_D" d="M.07699585 0H.3619995C.47299195 0 .54299929 .025985718 .59298709 .084991458 .6499939 .15299988 .68099978 .25099183 .68099978 .36499024 .68099978 .47799684 .6499939 .57598879 .59298709 .644989 .54299929 .70399478 .47399903 .72898867 .3619995 .72898867H.07699585V0M.22698975 .125V.60398867H.3619995C.47499085 .60398867 .5309906 .5249939 .5309906 .3639984 .5309906 .20399475 .47499085 .125 .3619995 .125H.22698975Z" />
              <path id="wf_Y" d="M.4189911 .269989 .6499939 .72898867H.48199464L.34298707 .40699769 .19400025 .72898867H.026992798L.2689972 .269989V0H.4189911V.269989Z" />
              <path id="wf_A" d="M.5009918 .14698792 .548996 0H.7029877L.45098878 .72898867H.2849884L.025985718 0H.1789856L.22799683 .14698792H.5009918M.45999146 .27198792H.269989L.36499024 .5569916 .45999146 .27198792Z" />
              <path id="wf_M" d="M.21598816 .56799319 .34700013 0H.49699403L.6259918 .56799319V0H.776001V.72898867H.5499878L.42199708 .14898682 .2899933 .72898867H.06599426V0H.21598816V.56799319Z" />
              <path id="wf_I" d="M.21299744 .72898867H.06298828V0H.21299744V.72898867Z" />
              <path id="wf_C" d="M.6819916 .48199464C.6769867 .54499819 .6639862 .58499148 .6329956 .6259918 .57699587 .69999697 .4869995 .7409973 .37799073 .7409973 .17199707 .7409973 .04399109 .59399417 .04399109 .35798646 .04399109 .12298584 .17098999-.023010254 .37399293-.023010254 .55599978-.023010254 .6759949 .08198547 .68499758 .24899292H.5389862C.5289917 .1559906 .47099305 .102996829 .37799073 .102996829 .2619934 .102996829 .19400025 .19699097 .19400025 .35598756 .19400025 .5169983 .2649994 .61299136 .3829956 .61299136 .46998597 .61299136 .5189972 .57099917 .5389862 .48199464H.6819916Z" />
              <path id="wf_S" d="M.6069946 .5069885C.60598757 .6579895 .5049896 .7409973 .32099916 .7409973 .1459961 .7409973 .04499817 .6589966 .04499817 .5169983 .04499817 .4039917 .101989749 .34899903 .25 .32099916L.35198976 .30099488C.45199586 .28199769 .4889984 .2539978 .4889984 .19499207 .4889984 .13398743 .43299867 .09700012 .34199525 .09700012 .23999024 .09700012 .18299866 .13999939 .17799378 .21798706H.03199768C.040985109 .06199646 .147995-.023010254 .33399964-.023010254 .5219879-.023010254 .6329956 .06399536 .6329956 .21299744 .6329956 .32798768 .57499697 .3880005 .43998719 .4139862L.32598878 .43598939C.21899414 .45700074 .18798828 .47799684 .18798828 .5309906 .18798828 .58599856 .23599243 .62098696 .31399537 .62098696 .40899659 .62098696 .46199037 .58099368 .46699525 .5069885H.6069946Z" />
            </defs>
            <use href="#wf_N" transform="matrix(120,0,0,-120,0,150)" />
            <use href="#wf_E" transform="matrix(120,0,0,-120,86.64,150)" />
            <use href="#wf_X" transform="matrix(120,0,0,-120,166.68,150)" />
            <use href="#wf_T" transform="matrix(120,0,0,-120,246.72,150)" />
            <use href="#wf_D" transform="matrix(120,0,0,-120,353.40,150)" />
            <use href="#wf_Y" transform="matrix(120,0,0,-120,440.04,150)" />
            <use href="#wf_N" transform="matrix(120,0,0,-120,520.08,150)" />
            <use href="#wf_A" transform="matrix(120,0,0,-120,606.72,150)" />
            <use href="#wf_M" transform="matrix(120,0,0,-120,693.36,150)" />
            <use href="#wf_I" transform="matrix(120,0,0,-120,793.32,150)" />
            <use href="#wf_C" transform="matrix(120,0,0,-120,826.68,150)" />
            <use href="#wf_S" transform="matrix(120,0,0,-120,913.32,150)" />
          </svg>
        </div>

        {/* 6. Bottom Signature Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper-muted text-center sm:text-left">
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
