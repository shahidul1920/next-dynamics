"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Send,
  CheckCircle,
  Clock,
  Award,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function DiscoveryForm() {
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Creative Web Experience & GSAP",
    budget: "$15,000 – $30,000",
    timeline: "4–8 weeks",
    brief: "",
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".form-content-left",
        { x: -50, opacity: 0 },
        {
          x: 0,
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

      gsap.fromTo(
        ".form-content-right",
        { x: 50, opacity: 0 },
        {
          x: 0,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit form.");
      }
      setIsSubmitted(true);
    } catch (err) {
      console.error("Discovery submission error:", err);
      alert(err.message || "Failed to submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-midnight blueprint-grid overflow-hidden border-t border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-electric-cyan/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Authority */}
          <div className="form-content-left lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-cyan/30 bg-electric-cyan/5 text-electric-cyan text-xs font-mono tracking-widest uppercase mb-6">
                Direct Architecture Intake
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Let’s Engineer Something{" "}
                <span className="gradient-text">Extraordinary.</span>
              </h2>

              <p className="text-base text-slate-400 font-light leading-relaxed mb-8">
                Every partnership begins with a complimentary 45-minute
                architectural discovery session. No generic sales decks or automated
                proposals — you speak directly with a senior engineering architect.
              </p>

              {/* Trust checklist */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 text-electric-cyan flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>Strict NDA executed prior to discovery upon request</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 text-electric-cyan flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>Detailed technical architecture teardown within 48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-electric-cyan/10 text-electric-cyan flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>Fixed-price, milestone-guaranteed contract scope</span>
                </div>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold font-mono text-white">50+</div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Shipped Platforms
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-electric-cyan">
                  98+
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Avg Lighthouse
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">
                  &lt; 24h
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  Direct Response
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="form-content-right lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-electric-cyan/20 border border-electric-cyan/50 text-electric-cyan flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Brief Received & Routed.
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto font-light leading-relaxed">
                    Thank you. A principal systems architect will review your technical
                    requirements and email your calendar invite within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alexander Wright"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Company / Project *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Acme Ventures or Stealth URL"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                    />
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Primary Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-deep-navy border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                      >
                        <option>Creative Web Experience & GSAP</option>
                        <option>Full-Stack Growth Platform</option>
                        <option>Enterprise Platform & APIs</option>
                        <option>Applied AI & Autonomous Agents</option>
                        <option>Performance & Core Web Vitals Audit</option>
                        <option>Dedicated Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Allocated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-deep-navy border border-white/10 text-white text-sm focus:outline-none focus:border-electric-cyan transition-colors"
                      >
                        <option>$6,000 – $12,000 (Tier 1)</option>
                        <option>$15,000 – $30,000 (Tier 2 - Popular)</option>
                        <option>$40,000 – $80,000+ (Tier 3 Enterprise)</option>
                        <option>$2,500 – $5,000/mo (Ongoing Retainer)</option>
                        <option>To Be Scoped via Architecture Call</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Brief */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Architectural Goals & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.brief}
                      onChange={(e) =>
                        setFormData({ ...formData, brief: e.target.value })
                      }
                      placeholder="Outline current roadblocks, target stack preferences, animations desired, or conversion objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-sapphire via-royal-blue to-electric-cyan text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(85,209,255,0.4)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Brief...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Transmit Architecture Brief
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
