"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import InlineCTA from "@/components/cta/InlineCTA";

interface Service {
  id: string;
  title: string;
  pain: string;
  approach: string;
  outcome: string;
}

interface ServiceAccordionProps {
  services: Service[];
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 sm:space-y-4">
      {services.map((service, index) => (
        <div key={service.id} id={service.id} className="scroll-mt-20 border border-border rounded-soft bg-bg-base">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-bg-muted transition-colors min-h-[44px]"
          >
            <h2 className="text-lg sm:text-h3 font-semibold text-text-primary pr-4">{service.title}</h2>
            <ChevronDown
              size={20}
              className={`text-text-secondary flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 space-y-5 sm:space-y-6 border-t border-border">
                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-2">The Problem</h3>
                    <p className="text-body text-text-secondary">{service.pain}</p>
                  </div>

                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-2">Our Approach</h3>
                    <p className="text-body text-text-secondary">{service.approach}</p>
                  </div>

                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-2">The Outcome</h3>
                    <p className="text-body text-text-secondary">{service.outcome}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
