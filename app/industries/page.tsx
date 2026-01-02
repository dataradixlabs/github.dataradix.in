import FinalCTASection from "@/components/cta/FinalCTASection";
import InlineCTA from "@/components/cta/InlineCTA";

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
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Industries We Serve</h1>
            <p className="text-body text-text-secondary">
              Deep expertise across verticals that depend on technology
            </p>
          </div>
        </div>
      </section>

      {/* Industries - Responsive Grid */}
      <section className="py-12 border-t border-border">
        <div className="container-custom">
          <div className="space-y-10 sm:space-y-12">
            {industries.map((industry, index) => (
              <div key={industry.name} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                <div>
                  <h2 className="text-h2 font-semibold text-text-primary mb-2 sm:mb-3">{industry.name}</h2>
                  <p className="text-body text-text-secondary mb-4 sm:mb-6">{industry.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-3 sm:mb-4">Common Challenges</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="text-body text-text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-body font-semibold text-text-primary mb-3 sm:mb-4">Our Solutions</h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, i) => (
                        <li key={i} className="text-body text-text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{solution}</span>
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

      {/* CTA */}
      <InlineCTA
        headline="Need industry-specific expertise?"
        description="We've built systems for companies in your industry. Let's discuss how we can help."
        ctaText="Explore a Collaboration"
        ctaHref="/contact"
      />

      <FinalCTASection />
    </>
  );
}
