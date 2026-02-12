"use client";

import { motion } from "framer-motion";
import PrimaryCTA from "./PrimaryCTA";

interface InlineCTAProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}

export default function InlineCTA({
  headline,
  description,
  ctaText,
  ctaHref = "/contact",
  ctaOnClick,
}: InlineCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      className="bg-bg-muted border border-border rounded-soft p-6 sm:p-8 my-8 sm:my-12"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-h3 font-semibold text-text-primary mb-2 sm:mb-3">{headline}</h3>
          {description && (
            <p className="text-body text-text-secondary">{description}</p>
          )}
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <PrimaryCTA href={ctaHref} onClick={ctaOnClick} className="w-full md:w-auto">
            {ctaText}
          </PrimaryCTA>
        </div>
      </div>
    </motion.div>
  );
}
