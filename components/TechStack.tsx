"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface TechCapability {
  capability: string;
  description: string;
  technologies: string[];
}

const techStack: TechCapability[] = [
  {
    capability: "Backend",
    description: "High-throughput APIs and microservices",
    technologies: ["Node.js", "Python", "Go", "Scala", "Java"],
  },
  {
    capability: "Data",
    description: "Real-time pipelines and analytics platforms",
    technologies: ["Kafka", "Spark", "Airflow", "Snowflake", "dbt", "Flink"],
  },
  {
    capability: "Cloud",
    description: "Infrastructure as code, multi-cloud",
    technologies: ["AWS", "GCP", "Azure", "Terraform", "Kubernetes"],
  },
  {
    capability: "Frontend",
    description: "Performant, accessible web applications",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    capability: "DevOps",
    description: "Continuous delivery and observability",
    technologies: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana", "OpenTelemetry"],
  },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
      {/* Desktop tabs */}
      <div className="hidden md:flex border-b border-neutral-200 overflow-x-auto">
        {techStack.map((item, index) => (
          <button
            key={item.capability}
            onClick={() => setActiveTab(index)}
            className={`relative px-5 py-3.5 text-body-sm font-medium transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
              activeTab === index
                ? "text-neutral-950"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            {item.capability}
            {activeTab === index && (
              <motion.span
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950"
              />
            )}
          </button>
        ))}
      </div>

      {/* Desktop content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`desktop-${activeTab}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block p-6"
        >
          <p className="text-body-sm text-neutral-500 mb-4">
            {techStack[activeTab].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack[activeTab].technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-neutral-50 text-neutral-700 border border-neutral-200 rounded-md text-body-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile accordion */}
      <div className="md:hidden divide-y divide-neutral-100">
        {techStack.map((item, index) => (
          <div key={item.capability}>
            <button
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              className={`w-full flex items-center justify-between px-4 py-3.5 text-body-sm font-medium transition-colors min-h-[48px] ${
                activeTab === index
                  ? "text-neutral-950 bg-neutral-50"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <span>{item.capability}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-neutral-400 ${
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
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 pt-1">
                    <p className="text-body-sm text-neutral-500 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white text-neutral-700 border border-neutral-200 rounded-md text-body-sm"
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
    </div>
  );
}
