"use client";

import { motion } from "framer-motion";
import PrimaryCTA from "./PrimaryCTA";

interface FinalCTASectionProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function FinalCTASection({
  headline = "Let's Build Something That Scales.",
  description = "Ready to transform your technology infrastructure? Our engineers are standing by.",
  ctaText = "Request Architecture Review",
  ctaHref = "/contact",
}: FinalCTASectionProps) {
  return (
    <section className="bg-text-primary text-bg-base py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-h1 text-bg-base/80 font-semibold mb-4 sm:mb-6">{headline}</h2>
          <p className="text-body text-bg-base/80 mb-8 sm:mb-10">{description}</p>
          <PrimaryCTA href={ctaHref} variant="secondary">
            {ctaText}
          </PrimaryCTA>
        </motion.div>
      </div>
    </section>
  );
}
