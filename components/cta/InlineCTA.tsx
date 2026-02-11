"use client";

import { motion } from "framer-motion";
import PrimaryCTA from "./PrimaryCTA";

interface InlineCTAProps {
  headline: string;
  description?: string;
  ctaText: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  variant?: "bordered" | "filled";
}

export default function InlineCTA({
  headline,
  description,
  ctaText,
  ctaHref = "/contact",
  ctaOnClick,
  variant = "bordered",
}: InlineCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={
        variant === "filled"
          ? "bg-neutral-950 text-white rounded-xl p-6 sm:p-8 my-8 sm:my-12"
          : "bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 my-8 sm:my-12"
      }
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
        <div className="flex-1 min-w-0">
          <h3 className="text-h3 font-semibold text-balance mb-2"
            style={{ color: variant === "filled" ? "white" : undefined }}
          >
            {headline}
          </h3>
          {description && (
            <p className="text-body leading-relaxed"
              style={{ color: variant === "filled" ? "rgba(255,255,255,0.65)" : "#525252" }}
            >
              {description}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <PrimaryCTA
            href={ctaHref}
            onClick={ctaOnClick}
            variant={variant === "filled" ? "secondary" : "primary"}
            size="lg"
            className="w-full md:w-auto"
          >
            {ctaText}
          </PrimaryCTA>
        </div>
      </div>
    </motion.div>
  );
}
