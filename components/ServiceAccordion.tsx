"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={service.id} id={service.id} className="scroll-mt-24 bg-white">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors min-h-[56px] ${
                isOpen ? "bg-neutral-50" : "hover:bg-neutral-50"
              }`}
              aria-expanded={isOpen}
            >
              <span className={`text-h4 font-semibold pr-4 transition-colors ${
                isOpen ? "text-neutral-950" : "text-neutral-700"
              }`}>
                {service.title}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-neutral-950" : "text-neutral-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 grid sm:grid-cols-3 gap-5 border-t border-neutral-100">
                    <div>
                      <div className="text-label uppercase tracking-widest text-neutral-400 mb-2">
                        The Problem
                      </div>
                      <p className="text-body text-neutral-600 leading-relaxed">
                        {service.pain}
                      </p>
                    </div>
                    <div>
                      <div className="text-label uppercase tracking-widest text-neutral-400 mb-2">
                        Our Approach
                      </div>
                      <p className="text-body text-neutral-600 leading-relaxed">
                        {service.approach}
                      </p>
                    </div>
                    <div>
                      <div className="text-label uppercase tracking-widest text-neutral-400 mb-2">
                        The Outcome
                      </div>
                      <p className="text-body text-neutral-600 leading-relaxed">
                        {service.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
