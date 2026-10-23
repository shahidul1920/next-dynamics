"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PRICING_TIERS, RETAINERS } from "@/lib/constants";
import { Check, Sparkles, ArrowRight, Clock, Users, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PricingTiers() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header reveal
      gsap.fromTo(
        ".pricing-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tier cards stagger reveal
      gsap.fromTo(
        ".tier-card",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".tiers-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Retainer banner slide up
      gsap.fromTo(
        ".retainer-strip",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".retainer-strip",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight/95 blueprint-grid overflow-hidden border-t border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-royal-blue/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="pricing-header inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-electric-cyan text-xs font-mono tracking-widest uppercase mb-4">
            Investment Architecture
          </div>
          <h2 className="pricing-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Predictable Value.{" "}
            <span className="gradient-text">Uncompromising Craft.</span>
          </h2>
          <p className="pricing-header text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            Every engagement is scoped with surgical precision. No surprise invoices,
            no opaque retainers, and zero junior developer handoffs.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="tiers-container grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.featured;

            return (
              <div
                key={tier.name}
                className={`tier-card relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-deep-navy/90 via-midnight/90 to-midnight/95 border-2 border-electric-cyan/60 shadow-[0_0_50px_rgba(85,209,255,0.2)] lg:-translate-y-4"
                    : "bg-white/[0.03] border border-white/10 hover:border-white/20"
                } p-8 backdrop-blur-xl`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-royal-blue to-electric-cyan text-midnight font-bold font-mono text-[11px] tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    Flagship Engagement
                  </div>
                )}

                <div>
                  {/* Tier Subtitle & Name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-electric-cyan uppercase tracking-widest">
                      {tier.tier}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{tier.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed min-h-[36px]">
                    {tier.target}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                      {tier.price}
                    </div>
                    <span className="text-xs text-slate-500 font-mono">
                      Fixed scope contract · 50/30/20 milestone terms
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Deliverables
                    </div>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isFeatured
                              ? "bg-electric-cyan/20 text-electric-cyan"
                              : "bg-white/10 text-slate-300"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-300 font-light leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <a
                    href="#contact"
                    className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      isFeatured
                        ? "bg-gradient-to-r from-sapphire to-electric-cyan text-midnight hover:shadow-[0_0_25px_rgba(85,209,255,0.4)] hover:scale-[1.02]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                    }`}
                  >
                    <span>Initiate Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Retainer Strips Below */}
        <div className="retainer-strip rounded-2xl bg-gradient-to-r from-deep-navy/80 via-white/[0.02] to-deep-navy/80 border border-white/10 p-8 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan tracking-wider uppercase mb-2">
                <ShieldCheck className="w-4 h-4" />
                Post-Launch Continuum
              </div>
              <h4 className="text-xl font-bold text-white mb-2">
                Engineering & Evolution Retainers
              </h4>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Ongoing sprint capacity to guarantee 99+ CWV health, ship new features,
                and maintain architectural superiority as your traffic scales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {RETAINERS.map((ret) => (
                <div
                  key={ret.name}
                  className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-electric-cyan/30 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="font-semibold text-sm text-white">
                      {ret.name.split(" ")[0]} Retainer
                    </span>
                    <span className="font-mono text-sm font-bold text-electric-cyan">
                      {ret.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-light mb-3">
                    {ret.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-xs font-mono text-electric-cyan hover:underline inline-flex items-center gap-1"
                  >
                    Discuss Scope <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
