import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "About Us - DataRadix",
  description: "Learn about DataRadix, our mission, values, and the team building scalable technology solutions for modern enterprises.",
};

const values = [
  {
    title: "Outcome-focused",
    desc: "We measure success by business impact — latency, uptime, revenue. Not story points or lines of code.",
  },
  {
    title: "Engineering excellence",
    desc: "Clean, maintainable code. Systems designed for scale. No shortcuts that create technical debt.",
  },
  {
    title: "True partnership",
    desc: "We work inside your Slack, your sprints, your codebase. We become part of your team.",
  },
  {
    title: "Continuous learning",
    desc: "Technology evolves fast. We stay at the forefront of tools, patterns, and best practices.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Understand the problem",
    desc: "Not every problem needs a complex solution. We diagnose root causes before recommending anything.",
  },
  {
    step: "02",
    title: "Design for scale",
    desc: "Systems architected to handle 10x growth without rewrites. Right decisions from the start.",
  },
  {
    step: "03",
    title: "Build incrementally",
    desc: "Deliver value early and often. MVP, validate, iterate. Reduce risk at every step.",
  },
  {
    step: "04",
    title: "Transfer knowledge",
    desc: "We document, train your team, and ensure you own everything we build. No lock-in.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">Who we are</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Engineers who build infrastructure that lasts
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              We&apos;re a team of senior engineers and architects. We&apos;ve built systems processing billions of events, serving millions of users, handling petabytes of data. We bring that experience to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="section-label">Our mission</p>
              <h2 className="text-h1 font-bold text-neutral-950 mb-6 text-balance">
                Technology infrastructure shouldn&apos;t hold companies back
              </h2>
              <div className="space-y-4 text-body text-neutral-600 leading-relaxed">
                <p>
                  Too many companies struggle with technical debt, scalability bottlenecks, and systems that can&apos;t keep up with growth. DataRadix exists to fix that.
                </p>
                <p>
                  We work directly with CTOs, founders, and engineering leaders to design and build systems that scale with the business — not against it. Our approach is practical, not theoretical.
                </p>
                <p>
                  We&apos;re not consultants who write reports. We&apos;re engineers who write code, review PRs, and debug production issues alongside your team.
                </p>
              </div>
            </div>

            <div>
              <p className="section-label">Our values</p>
              <div className="space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="p-5 rounded-xl border border-neutral-200 bg-white">
                    <h3 className="text-h4 font-semibold text-neutral-950 mb-1.5">{v.title}</h3>
                    <p className="text-body text-neutral-500 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-xl mb-10 sm:mb-12">
            <p className="section-label">Our process</p>
            <h2 className="text-h1 font-bold text-neutral-950 text-balance">
              How we engage
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {howWeWork.map((step) => (
              <div key={step.step} className="p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white">
                <div className="text-label font-mono text-neutral-300 mb-3">{step.step}</div>
                <h3 className="text-h4 font-semibold text-neutral-950 mb-2">{step.title}</h3>
                <p className="text-body-sm text-neutral-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Ready to work with engineers who care?"
        description="No sales deck. Just a real technical conversation about your challenges and how we can help."
        ctaText="Talk to an Engineer"
      />
    </>
  );
}
