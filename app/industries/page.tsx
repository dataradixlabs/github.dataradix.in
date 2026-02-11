import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "Industries - DataRadix",
  description: "Deep expertise across verticals that depend on technology: FinTech, E-commerce, SaaS, Healthcare, and more.",
};

export default function Industries() {
  const industries = [
    {
      name: "FinTech",
      description: "Real-time transaction processing, compliance, risk analytics, and fraud detection.",
      challenges: [
        "Real-time processing at scale",
        "Regulatory compliance (PCI DSS, GDPR, SOC 2)",
        "Fraud detection and prevention",
        "Risk analytics and modeling",
      ],
      solutions: [
        "Event-driven architectures for real-time processing",
        "Cloud-native infrastructure with security built in",
        "ML models for fraud detection",
        "Data platforms for risk analytics",
      ],
    },
    {
      name: "E-commerce",
      description: "Personalization engines, inventory management, order processing, and recommendation systems.",
      challenges: [
        "Handling traffic spikes (Black Friday, sales)",
        "Real-time inventory management",
        "Personalization at scale",
        "Order processing and fulfillment",
      ],
      solutions: [
        "Auto-scaling cloud infrastructure",
        "Event-driven personalization engines",
        "Real-time inventory systems",
        "Microservices architecture for order processing",
      ],
    },
    {
      name: "SaaS",
      description: "Multi-tenant architectures, analytics platforms, API development, and scalable infrastructure.",
      challenges: [
        "Multi-tenancy and data isolation",
        "Scaling with customer growth",
        "Analytics and reporting at scale",
        "API performance and reliability",
      ],
      solutions: [
        "Multi-tenant architecture patterns",
        "Modern data platforms for analytics",
        "API gateways and microservices",
        "Infrastructure that scales automatically",
      ],
    },
    {
      name: "Healthcare",
      description: "HIPAA compliance, data privacy, interoperability, and secure patient data systems.",
      challenges: [
        "HIPAA compliance and data privacy",
        "Interoperability between systems",
        "Secure handling of PHI",
        "Real-time patient data access",
      ],
      solutions: [
        "HIPAA-compliant cloud infrastructure",
        "Encryption at rest and in transit",
        "FHIR-compliant APIs",
        "Audit logging and access controls",
      ],
    },
    {
      name: "EdTech",
      description: "Learning platforms, student data systems, content delivery, and analytics.",
      challenges: [
        "Handling concurrent users (class schedules)",
        "Content delivery at scale",
        "Student data privacy (FERPA)",
        "Analytics and reporting",
      ],
      solutions: [
        "Auto-scaling infrastructure",
        "CDN for content delivery",
        "FERPA-compliant data systems",
        "Analytics platforms for insights",
      ],
    },
    {
      name: "Manufacturing",
      description: "IoT data processing, supply chain systems, predictive maintenance, and industrial automation.",
      challenges: [
        "Processing IoT sensor data at scale",
        "Real-time supply chain visibility",
        "Predictive maintenance",
        "Integration with legacy systems",
      ],
      solutions: [
        "IoT data pipelines",
        "Real-time analytics platforms",
        "ML models for predictive maintenance",
        "API integration layers",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">Where we operate</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Deep expertise across high-growth verticals
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              We understand the unique technical constraints, compliance requirements, and scaling challenges of each industry we work in.
            </p>
          </div>
        </div>
      </section>

      {/* Industry panels */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="space-y-0 divide-y divide-neutral-200 border border-neutral-200 rounded-xl overflow-hidden">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                  <div>
                    <h2 className="text-h2 font-bold text-neutral-950 mb-2">{industry.name}</h2>
                    <p className="text-body text-neutral-500 leading-relaxed">{industry.description}</p>
                  </div>

                  <div>
                    <p className="text-label uppercase tracking-widest text-neutral-400 mb-3">
                      Common challenges
                    </p>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-body text-neutral-600">
                          <span className="w-1 h-1 rounded-full bg-neutral-400 mt-2.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-label uppercase tracking-widest text-neutral-400 mb-3">
                      How we help
                    </p>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-2 text-body text-neutral-600">
                          <span className="w-1 h-1 rounded-full bg-neutral-950 mt-2.5 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Need industry-specific expertise?"
        description="We've built systems for companies in your industry. Let's discuss how we can accelerate your roadmap."
        ctaText="Start a Conversation"
      />
    </>
  );
}
