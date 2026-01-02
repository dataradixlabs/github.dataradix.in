import FinalCTASection from "@/components/cta/FinalCTASection";
import PrimaryCTA from "@/components/cta/PrimaryCTA";

export const metadata = {
  title: "Careers - DataRadix",
  description: "Join DataRadix. Work with senior engineers building scalable technology solutions for modern enterprises.",
};

export default function CareersPage() {
  const benefits = [
    {
      title: "Work on Challenging Problems",
      description: "Build systems that process billions of events and serve millions of users. No maintenance work on legacy systems.",
    },
    {
      title: "Learn from Senior Engineers",
      description: "Work alongside engineers who have built systems at scale. Learn best practices, not just patterns.",
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture. Work from anywhere, with flexible hours that fit your life.",
    },
    {
      title: "Competitive Compensation",
      description: "We pay top-of-market rates because we only hire senior engineers. Equity and benefits included.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Data Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Build modern data platforms with Kafka, Spark, and cloud data warehouses. Experience with event streaming and real-time processing required.",
    },
    {
      title: "Senior Backend Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Design and build scalable backend systems. Experience with microservices, cloud infrastructure, and distributed systems required.",
    },
    {
      title: "Senior DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement cloud infrastructure. Experience with Kubernetes, Terraform, and CI/CD pipelines required.",
    },
  ];

  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Join DataRadix</h1>
            <p className="text-body text-text-secondary mb-6 sm:mb-10">
              Work with senior engineers building scalable technology solutions
            </p>
            <PrimaryCTA href="/contact">View Open Positions</PrimaryCTA>
          </div>
        </div>
      </section>

      {/* Why Join - Responsive Grid */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-h2 font-semibold text-text-primary mb-4">Why Join DataRadix</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i}>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-body text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-h2 font-semibold text-text-primary mb-3 sm:mb-4">Open Positions</h2>
            <p className="text-body text-text-secondary">
              We&apos;re always looking for senior engineers who want to build systems that scale
            </p>
          </div>

          <div className="max-w-3xl space-y-4 sm:space-y-6">
            {openPositions.map((position, i) => (
              <div key={i} className="bg-bg-base border border-border rounded-soft p-5 sm:p-6 lg:p-8 hover:border-text-primary transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-small text-text-secondary">
                      <span>{position.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <PrimaryCTA href="/contact" variant="secondary" className="w-full sm:w-auto">
                    Apply Now
                  </PrimaryCTA>
                </div>
                <p className="text-body text-text-secondary">{position.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-body text-text-secondary mb-4 sm:mb-6">
              Don&apos;t see a position that fits? We&apos;re always interested in talking to senior engineers.
            </p>
            <PrimaryCTA href="/contact" variant="ghost">Get in Touch</PrimaryCTA>
          </div>
        </div>
      </section>

      {/* Culture - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-semibold text-text-primary mb-6 sm:mb-12">Our Culture</h2>
            <div className="prose-custom space-y-4 sm:space-y-6">
              <p>
                DataRadix is a remote-first company. We believe the best work happens when engineers have autonomy, clear goals, and the right tools.
              </p>
              <p>
                We only hire senior engineers. This means every team member can contribute immediately, and everyone learns from each other. No juniors learning on client projects.
              </p>
              <p>
                We work on challenging problems. If you want to build systems that process billions of events, handle millions of users, and scale automatically, this is the place.
              </p>
              <p>
                We value outcomes over hours. We don&apos;t track time or require specific hours. We care about results, not face time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Ready to build systems that scale?"
        description="We're always looking for senior engineers who want to solve challenging problems."
        ctaText="Get in Touch"
      />
    </>
  );
}
