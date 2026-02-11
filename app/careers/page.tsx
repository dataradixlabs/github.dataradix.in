import FinalCTASection from "@/components/cta/FinalCTASection";

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
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">We&apos;re hiring</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Work on systems that matter
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed mb-8">
              Senior engineers only. Remote-first. Real ownership over systems that process billions of events and serve millions of users.
            </p>
            <a
              href="#positions"
              className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors min-h-[44px]"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <p className="section-label">Why join us</p>
          <h2 className="text-h1 font-bold text-neutral-950 mb-10 text-balance">
            What makes DataRadix different
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white">
                <h3 className="text-h4 font-semibold text-neutral-950 mb-2">{benefit.title}</h3>
                <p className="text-body-sm text-neutral-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 sm:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">Our culture</p>
              <h2 className="text-h1 font-bold text-neutral-950 mb-6 text-balance">
                Autonomy, ownership, and craft
              </h2>
            </div>
            <div className="space-y-4 text-body text-neutral-600 leading-relaxed">
              <p>
                DataRadix is remote-first. The best work happens when engineers have autonomy, clear goals, and the right tools — not when they&apos;re in meetings all day.
              </p>
              <p>
                We only hire senior engineers. Every team member contributes immediately, and everyone learns from each other. No juniors learning on client projects.
              </p>
              <p>
                We value outcomes over hours. We don&apos;t track time or mandate specific hours. We care about results, not face time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 sm:py-20 border-t border-neutral-200 scroll-mt-20">
        <div className="container-custom">
          <p className="section-label">Open positions</p>
          <h2 className="text-h1 font-bold text-neutral-950 mb-10">
            Join the team
          </h2>

          <div className="space-y-3 max-w-3xl">
            {openPositions.map((position, i) => (
              <div key={i} className="group p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-h3 font-semibold text-neutral-950 mb-1">{position.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-neutral">{position.location}</span>
                      <span className="badge badge-neutral">{position.type}</span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 border border-neutral-200 text-neutral-700 rounded-md text-body-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-colors min-h-[40px]"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-body text-neutral-500 leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-body text-neutral-500 mb-4">
              Don&apos;t see a role that fits? We&apos;re always interested in senior engineers who want to build at scale.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              Send us a note
            </a>
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Ready to build systems that scale?"
        description="We're always looking for senior engineers who want to solve problems that matter."
        ctaText="Get in Touch"
      />
    </>
  );
}
