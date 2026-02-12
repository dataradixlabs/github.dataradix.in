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

// export default function ServiceAccordion({ services }: ServiceAccordionProps) {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <div className="space-y-3 sm:space-y-4">
//       {services.map((service, index) => (
//         <div key={service.id} id={service.id} className="scroll-mt-20 border border-border rounded-soft bg-bg-base">
//           <button
//             onClick={() => setOpenIndex(openIndex === index ? null : index)}
//             className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-bg-muted transition-colors min-h-[44px]"
//           >
//             <h2 className="text-lg sm:text-h3 font-semibold text-text-primary pr-4">{service.title}</h2>
//             <ChevronDown
//               size={20}
//               className={`text-text-secondary flex-shrink-0 transition-transform ${
//                 openIndex === index ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <AnimatePresence>
//             {openIndex === index && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="overflow-hidden"
//               >
//                 <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 space-y-5 sm:space-y-6 border-t border-border">
//                   <div>
//                     <h3 className="text-body font-semibold text-text-primary mb-2">The Problem</h3>
//                     <p className="text-body text-text-secondary">{service.pain}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-body font-semibold text-text-primary mb-2">Our Approach</h3>
//                     <p className="text-body text-text-secondary">{service.approach}</p>
//                   </div>

//                   <div>
//                     <h3 className="text-body font-semibold text-text-primary mb-2">The Outcome</h3>
//                     <p className="text-body text-text-secondary">{service.outcome}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// }


export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [selectedService, setSelectedService] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Service Navigation */}
      <div className="lg:col-span-4 space-y-2">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(index)}
            className={`w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-soft transition-all ${
              selectedService === index
                ? "bg-bg-base border-2 border-border shadow-sm"
                : "bg-transparent border-2 border-transparent hover:bg-bg-muted"
            }`}
          >
            <h3 className={`text-base sm:text-lg font-semibold ${
              selectedService === index ? "text-text-primary" : "text-text-secondary"
            }`}>
              {service.title}
            </h3>
          </button>
        ))}
      </div>

      {/* Service Content */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-base border border-border rounded-soft p-5 sm:p-8 space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                {services[selectedService].title}
              </h2>
            </div>

            <div className="space-y-5">
              <div>
                <div className="inline-block px-3 py-1 bg-red-50 text-red-700 text-sm font-medium rounded mb-3">
                  The Problem
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  {services[selectedService].pain}
                </p>
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded mb-3">
                  Our Approach
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  {services[selectedService].approach}
                </p>
              </div>

              <div>
                <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded mb-3">
                  The Outcome
                </div>
                <p className="text-body text-text-secondary leading-relaxed">
                  {services[selectedService].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
