"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { SITE } from "@/lib/constants";

export const FAQS = [
  {
    question: "Can we keep our existing WordPress admin dashboard while upgrading to Next.js?",
    answer:
      "Yes. We specialize in Headless WordPress architectures using WPGraphQL. Your content editors and marketing team continue writing blog posts, publishing updates, and managing media inside the WordPress dashboard they already know. Next.js fetches your content on-demand via Incremental Static Regeneration (ISR), giving your visitors an ultra-fast, 99+ Lighthouse frontend with zero plugin bloat or PHP rendering lag.",
  },
  {
    question: "We already have a working SaaS software product. How do you help us?",
    answer:
      "We build the public-facing marketing flagships, interactive product tours, animated feature breakdowns, and high-conversion pricing matrices that turn traffic into active SaaS customers and impress investors. You focus on your core app logic; we engineer the front-facing digital experience that markets and sells it.",
  },
  {
    question: "What makes your frontends faster than standard WordPress or Webflow templates?",
    answer:
      "Standard templates load dozens of unoptimized plugins, external fonts, and heavy render-blocking scripts that drag down page speed. We engineer custom Next.js 15 frontends with zero template overhead, optimized asset bundles, server-side edge caching, and hardware-accelerated GSAP motion. The result is instant sub-400ms page transitions and flawless Core Web Vitals.",
  },
  {
    question: "Who owns the source code and design assets after project launch?",
    answer:
      "You retain 100% full intellectual property and code ownership. Upon project completion, we transfer the complete, clean Git repository to your organization with full documentation. There are zero proprietary lock-ins or recurring platform license fees.",
  },
  {
    question: "Do you build custom e-commerce storefronts?",
    answer:
      "Yes. We build custom headless e-commerce storefronts powered by Shopify Storefront API or modern headless commerce backends. This gives your brand bespoke visual storytelling, fluid cart drawer interactions, and high mobile conversion rates while retaining native, secure checkout pipelines.",
  },
  {
    question: "What is your staging SLA and delivery process?",
    answer:
      "Every project is governed by predictable milestones: 50% at kickoff, 30% upon staging review, and 20% on final launch. We provide a guaranteed 14-day staging deployment, giving you a private live URL to test and review progress in real time before public deployment.",
  },
];

export default function StudioFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  // Generate Google Search FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggle = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 px-6 lg:px-12 bg-midnight overflow-hidden border-t border-white/[0.06]"
    >
      {/* FAQPage JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Rail */}
        <div className="section-rail">
          <span>06 / FREQUENTLY ASKED QUESTIONS</span>
          <span>CLARITY & STANDARDS</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="badge-gold mb-4 inline-flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5 text-gold-blueprint" />
            <span>Search Clarifications & FAQs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-paper font-medium tracking-tight mb-6 leading-[1.08]">
            Frequently Asked{" "}
            <em className="font-serif italic font-normal text-slate-300">
              Questions
            </em>
          </h2>
          <p className="text-base sm:text-lg text-paper-muted font-light leading-relaxed">
            Everything you need to know about our frontend engineering process, headless WordPress migrations,
            ownership guarantees, and milestone governance.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-surface border-white/20 shadow-xl"
                      : "bg-surface/30 border-white/[0.06] hover:border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg text-paper font-medium tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-electric-cyan text-midnight border-electric-cyan"
                          : "border-white/10 text-paper-muted"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-paper-muted font-light leading-relaxed border-t border-white/[0.06] pt-4"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Help Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-surface/50 border border-white/[0.08] p-6 sm:p-8 space-y-6 backdrop-blur-md sticky top-28">
              <div className="w-10 h-10 rounded-xl bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-paper mb-2">
                  Have a specific question?
                </h3>
                <p className="text-xs text-paper-muted leading-relaxed">
                  Discuss your project requirements directly with a senior engineering architect. Zero account manager phone games.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello Next Dynamics, I have a question about a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-midnight transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-paper font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <span>Submit Architecture Brief</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

