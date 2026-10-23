"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ShieldCheck, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TIERS = [
  {
    tier: "01",
    name: "Signature Digital Experience",
    investment: "$6,000 – $12,000",
    timeline: "3–5 weeks",
    scope:
      "High-growth startups, luxury brands, and flagship product showcases demanding bespoke art direction.",
    deliverables: [
      "Bespoke 5–8 page architecture",
      "Physics-based GSAP kinetic animations",
      "Lighthouse 95+ performance tuning",
      "Headless CMS setup (WPGraphQL / Sanity)",
      "Technical SEO & GA4 architecture",
    ],
  },
  {
    tier: "02",
    name: "Full-Stack Growth Platform",
    investment: "$15,000 – $30,000",
    timeline: "6–8 weeks",
    featured: true,
    scope:
      "Scaling digital brands, modern publications, and SaaS platforms requiring complex dynamic data flows.",
    deliverables: [
      "Complete Next.js 15 App Router web application",
      "Decoupled headless CMS architecture",
      "Custom authentication & user portals",
      "Third-party API pipelines & webhook automation",
      "Sub-200ms page transitions & edge caching",
    ],
  },
  {
    tier: "03",
    name: "Enterprise Bespoke Platform",
    investment: "$40,000 – $80,000+",
    timeline: "10–14 weeks",
    scope:
      "Large enterprises, global supply chain operators, and multi-sided platforms with high transactional concurrency.",
    deliverables: [
      "End-to-end custom platform engineering",
      "Automated 1688 factory sourcing & inventory APIs",
      "Applied LLM workflows & autonomous task agents",
      "High-concurrency PostgreSQL / MongoDB architecture",
      "14-Day Delivery Guarantee & dedicated SLA",
    ],
  },
];

export default function InvestmentStructure() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".invest-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="investment"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>05 / ENGAGEMENT</span>
          <span>PREDICTABLE INVESTMENT</span>
        </div>

        {/* Header */}
        <div className="invest-header max-w-3xl mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-paper font-medium tracking-tight mb-6">
            Predictable value.{" "}
            <em className="font-serif italic font-normal text-slate-300">
              Uncompromising craft.
            </em>
          </h2>
          <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            Every engagement is scoped with precision and milestone protection.
            50% Inception, 30% Staging Approval, and 20% Final Launch — backed by our
            14-Day Delivery Guarantee.
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 ${
                tier.featured
                  ? "bg-surface border-white/20 shadow-2xl relative"
                  : "bg-surface/40 border-white/[0.06] hover:border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-paper-muted uppercase tracking-wider mb-6">
                  <span>Tier {tier.tier}</span>
                  <span>{tier.timeline}</span>
                </div>

                <h3 className="text-2xl font-medium text-paper mb-3">
                  {tier.name}
                </h3>

                <p className="text-xs text-paper-muted font-light leading-relaxed mb-8">
                  {tier.scope}
                </p>

                <div className="pb-8 mb-8 border-b border-white/[0.06]">
                  <div className="text-3xl sm:text-4xl font-mono font-medium text-paper">
                    {tier.investment}
                  </div>
                  <span className="text-[11px] font-mono text-paper-muted/60 mt-1 block">
                    Fixed scope · Milestone governance
                  </span>
                </div>

                <div className="space-y-3 mb-10">
                  <div className="text-xs font-mono uppercase tracking-wider text-paper-muted/80 mb-2">
                    Scope & Deliverables
                  </div>
                  {tier.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-paper/80">
                      <Check className="w-3.5 h-3.5 text-electric-cyan flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all ${
                  tier.featured
                    ? "bg-paper text-midnight hover:bg-electric-cyan"
                    : "bg-white/[0.04] text-paper border border-white/10 hover:border-white/20"
                }`}
              >
                <span>Initiate Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Protection Clause Callout Banner */}
        <div className="rounded-2xl bg-surface/30 border border-white/[0.08] p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-blueprint uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              Operational Integrity SLA
            </div>
            <h4 className="text-lg sm:text-xl font-medium text-paper mb-2">
              The 14-Day Delivery Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-paper-muted font-light leading-relaxed">
              If final deployment is stalled by client-side external dependencies (DNS
              handover or content delays) beyond 14 days following formal staging approval,
              the final 20% milestone activates immediately. This guarantees dedicated sprint
              capacity and mutual operational accountability.
            </p>
          </div>
          <div className="flex-shrink-0 font-mono text-xs text-paper-muted border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
            <span className="block text-paper text-xl font-medium">100%</span>
            <span>Staging Release Accuracy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
