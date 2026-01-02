"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface TechCapability {
  capability: string;
  technologies: string[];
}

const techStack: TechCapability[] = [
  {
    capability: "Backend",
    technologies: ["Node.js", "Python", "Go", "Scala", "Java"],
  },
  {
    capability: "Data",
    technologies: ["Kafka", "Spark", "Airflow", "Snowflake", "dbt"],
  },
  {
    capability: "Cloud",
    technologies: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes"],
  },
  {
    capability: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    capability: "DevOps",
    technologies: ["Docker", "Kubernetes", "CI/CD", "Monitoring", "Observability"],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border border-border rounded-soft bg-bg-base">
      {/* Desktop: Tabs */}
      <div className="hidden md:flex border-b border-border overflow-x-auto">
        {techStack.map((item, index) => (
          <button
            key={item.capability}
            onClick={() => setActiveTab(index)}
            className={`px-4 lg:px-6 py-4 text-small font-medium transition-colors whitespace-nowrap border-b-2 min-h-[44px] flex items-center ${
              activeTab === index
                ? "border-accent text-text-primary"
                : "border-transparent text-text-secondary hover:text-text-primary"
            }`}
          >
            {item.capability}
          </button>
        ))}
      </div>

      {/* Mobile: Accordion */}
      <div className="md:hidden">
        {techStack.map((item, index) => (
          <div key={item.capability} className="border-b border-border last:border-0">
            <button
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              className={`w-full px-4 py-4 text-small font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                activeTab === index
                  ? "text-text-primary bg-bg-muted"
                  : "text-text-secondary"
              }`}
            >
              <span>{item.capability}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  activeTab === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {activeTab === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <div className="flex flex-wrap gap-3">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-bg-muted text-text-primary rounded-soft border border-border text-small"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Desktop: Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block p-6 lg:p-8"
        >
          <div className="flex flex-wrap gap-3">
            {techStack[activeTab].technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-bg-muted text-text-primary rounded-soft border border-border text-small"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
