import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/data/case-studies";
import InlineCTA from "@/components/cta/InlineCTA";
import FinalCTASection from "@/components/cta/FinalCTASection";
import CaseStudyContent from "@/components/CaseStudyContent";

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: "Case Study Not Found - DataRadix",
    };
  }
  return {
    title: `${study.title} - DataRadix`,
    description: study.excerpt,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-small text-text-secondary mb-2 sm:mb-3">{study.clientIndustry}</div>
            <h1 className="text-h1 font-semibold text-text-primary mb-3 sm:mb-4">{study.title}</h1>
            <p className="text-body text-text-secondary">{study.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Responsive Split Screen */}
      <section className="py-10 sm:py-12 border-t border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3 sm:mb-4">The Challenge</h2>
              <div className="text-body text-text-secondary leading-relaxed">
                <CaseStudyContent content={study.challenge} />
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3 sm:mb-4">Our Solution</h2>
              <div className="text-body text-text-secondary leading-relaxed">
                <CaseStudyContent content={study.solution} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content - Responsive */}
      <article className="py-10 sm:py-12 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <CaseStudyContent content={study.content} />
          </div>
        </div>
      </article>

      {/* Results & Tech Stack - Responsive Split Screen */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-lg sm:text-h3 font-semibold text-text-primary mb-6 sm:mb-8">Key Results</h2>
              <div className="space-y-3 sm:space-y-4">
                {study.results.map((result, i) => (
                  <div key={i} className="pb-3 sm:pb-4 border-b border-border last:border-0">
                    <div className="font-semibold text-text-primary mb-1 text-body">{result.metric}</div>
                    <div className="text-body text-text-secondary">{result.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-h3 font-semibold text-text-primary mb-6 sm:mb-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {study.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-base text-text-primary rounded-soft border border-border text-small"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <InlineCTA
        headline="Facing Similar Challenges?"
        description="Talk to the team that built this. We can help you achieve similar results."
        ctaText="Talk to the Team That Built This"
        ctaHref="/contact"
      />

      <FinalCTASection />
    </>
  );
}
