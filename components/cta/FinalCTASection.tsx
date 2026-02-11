"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function FinalCTASection({
  headline = "Let's build something that scales.",
  description = "Ready to transform your technology infrastructure? Talk to our senior engineers — no sales pitch, just a real technical conversation.",
  ctaText = "Request Architecture Review",
  ctaHref = "/contact",
  secondaryText = "View case studies",
  secondaryHref = "/case-studies",
}: FinalCTASectionProps) {
  return (
    <section className="bg-neutral-950 py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Section label */}
          <p className="text-label uppercase tracking-widest text-neutral-500 mb-4">
            Get started
          </p>

          <h2 className="text-display-sm font-bold text-white text-balance mb-5 leading-tight">
            {headline}
          </h2>

          <p className="text-body-lg text-neutral-400 mb-8 max-w-xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-neutral-950 rounded-md text-body-sm font-semibold hover:bg-neutral-100 transition-colors group min-h-[44px]"
            >
              {ctaText}
              <ArrowRight size={14} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/15 text-white/80 rounded-md text-body-sm font-medium hover:bg-white/5 hover:text-white transition-colors min-h-[44px]"
            >
              {secondaryText}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
