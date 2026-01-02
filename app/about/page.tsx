import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "About Us - DataRadix",
  description: "Learn about DataRadix, our mission, values, and the team building scalable technology solutions for modern enterprises.",
};

export default function About() {
  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">About DataRadix</h1>
            <p className="text-body text-text-secondary">
              We're a team of engineers, architects, and problem-solvers who build technology infrastructure that scales.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values - Responsive Split Screen */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-5 sm:mb-6">Our Mission</h2>
              <div className="prose-custom space-y-4">
                <p>
                  DataRadix exists to help companies build technology infrastructure that doesn't hold them back. Too many companies struggle with technical debt, scalability issues, and systems that can't keep up with growth.
                </p>
                <p>
                  We work with CTOs, founders, and engineering leaders to design and build systems that scale. From data engineering to cloud architecture, we deliver solutions that grow with your business—not against it.
                </p>
                <p>
                  Our approach is practical, not theoretical. We've built systems that process billions of events, handle millions of users, and scale automatically. We bring that experience to every project.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-5 sm:mb-6">Our Values</h2>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Outcome-Focused</h3>
                  <p className="text-body text-text-secondary">
                    We measure success by business impact, not lines of code. Every solution we build solves a real problem.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Engineering Excellence</h3>
                  <p className="text-body text-text-secondary">
                    We write clean, maintainable code. We design for scale. We build systems that last.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Partnership</h3>
                  <p className="text-body text-text-secondary">
                    We work as an extension of your team. Clear communication, transparency, and collaboration.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">Continuous Learning</h3>
                  <p className="text-body text-text-secondary">
                    Technology evolves fast. We stay current with best practices, tools, and patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Responsive Grid */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-semibold text-text-primary mb-6 sm:mb-8">How We Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3">1. Understand the Problem</h3>
                <p className="text-body text-text-secondary">
                  We start by understanding your business, your challenges, and your goals. Not every problem needs a complex solution. We identify the root cause before proposing solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3">2. Design for Scale</h3>
                <p className="text-body text-text-secondary">
                  We design systems that can handle 10x growth without major rewrites. This doesn't mean over-engineering—it means making the right architectural decisions from the start.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3">3. Build Incrementally</h3>
                <p className="text-body text-text-secondary">
                  We deliver value early and often. Start with an MVP, validate, iterate. This approach reduces risk and ensures we're building the right thing.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3">4. Transfer Knowledge</h3>
                <p className="text-body text-text-secondary">
                  We don't just build and leave. We document everything, train your team, and ensure you can maintain and extend what we've built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-h2 font-semibold text-text-primary mb-6 sm:mb-8">Our Team</h2>
            <div className="prose-custom space-y-4">
              <p>
                Our team consists of senior engineers, architects, and technical leaders who have built systems processing billions of events, serving millions of users, and handling petabytes of data.
              </p>
              <p>
                We've worked at companies ranging from startups to Fortune 500 enterprises. We've seen what works and what doesn't. We bring that experience to every project.
              </p>
              <p>
                We're not consultants who disappear after the project. We're engineers who care about the systems we build. We write code, review PRs, and debug production issues alongside your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
