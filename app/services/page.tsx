import ServiceAccordion from "@/components/ServiceAccordion";
import InlineCTA from "@/components/cta/InlineCTA";
import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "Services - DataRadix",
  description: "Custom software development, data engineering, cloud & DevOps, AI & automation, and dedicated engineering teams.",
};

export default function Services() {
  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      pain: "You need software that solves your specific business problems, not generic solutions that require workarounds. Off-the-shelf tools don&apos;t fit your workflows, and building in-house is taking too long.",
      approach: "We build production-ready applications using modern frameworks and best practices. From MVPs to enterprise systems, we deliver software that your team can maintain and extend. We use TypeScript, React, Node.js, Python, and other proven technologies.",
      outcome: "You get software that fits your business, ships faster, and scales with growth. Your team can maintain it because we write clean, documented code and transfer knowledge.",
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      pain: "Your data is scattered across systems, analytics queries are slow, and you can&apos;t get real-time insights. Data quality issues cause bad decisions, and your data team spends more time firefighting than building.",
      approach: "We build modern data platforms with event streaming, data lakes, and cloud data warehouses. We use Kafka, Spark, Snowflake, dbt, and other tools to create pipelines that scale. Real-time and batch processing, automated quality checks, and governance built in.",
      outcome: "You get fast, reliable analytics on clean data. Real-time dashboards, automated reporting, and a foundation for ML. Your data team can focus on insights, not infrastructure.",
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      pain: "Deployments are risky, infrastructure costs are unpredictable, and scaling requires manual intervention. Your team spends too much time on ops instead of building features.",
      approach: "We design cloud-native architectures on AWS, GCP, or Azure. Infrastructure as code with Terraform, container orchestration with Kubernetes, CI/CD pipelines that deploy safely. Auto-scaling, monitoring, and observability built in.",
      outcome: "You get infrastructure that scales automatically, deploys safely, and costs less. Your team can ship features faster because ops is automated. You can handle traffic spikes without manual intervention.",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      pain: "Manual processes slow you down, and you&apos;re missing opportunities to automate. You want to use AI/ML but don&apos;t have the expertise or infrastructure.",
      approach: "We build intelligent automation and ML models that improve efficiency. From recommendation engines to fraud detection, we design systems that learn and adapt. We use proven ML frameworks and deploy models that scale.",
      outcome: "You get automation that reduces manual work and ML models that improve outcomes. Better customer experiences, lower costs, and new capabilities that weren&apos;t possible before.",
    },
    {
      id: "dedicated-teams",
      title: "Dedicated Engineering Teams",
      pain: "You need to scale your engineering team but hiring is slow and expensive. You need senior engineers who can contribute immediately, not months of onboarding.",
      approach: "We provide senior engineers who integrate with your team. They work in your codebase, attend your standups, and deliver features. We handle recruiting, so you get vetted engineers who fit your culture and tech stack.",
      outcome: "You get a team that ships features, not consultants who write reports. Faster time to market, lower hiring risk, and engineers who become part of your team.",
    },
  ];

  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Our Services</h1>
            <p className="text-body text-text-secondary">
              End-to-end technology solutions for modern enterprises
            </p>
          </div>
        </div>
      </section>

      {/* Services - Accordion */}
      <section className="py-10 sm:py-12 border-t border-border">
        <div className="container-custom">
          <ServiceAccordion services={services} />
        </div>
      </section>

      {/* CTA after services */}
      <InlineCTA
        headline="Not sure if this is right for you?"
        description="Get a free technical assessment. We&apos;ll review your situation and recommend the best approach."
        ctaText="Get a Free Technical Assessment"
        ctaHref="/contact"
      />

      {/* Why Choose Us - Responsive Split Screen */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-6 sm:mb-8">Why Choose DataRadix</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Senior Engineers</h3>
                <p className="text-body text-text-secondary">
                  We only work with senior engineers who have built systems at scale. No juniors learning on your project.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Proven Track Record</h3>
                <p className="text-body text-text-secondary">
                  We&apos;ve built systems processing billions of events and serving millions of users. We bring that experience to every project.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Partnership Approach</h3>
                <p className="text-body text-text-secondary">
                  We work as an extension of your team. Clear communication, transparency, and knowledge transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
