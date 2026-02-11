import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/data/case-studies";
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
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-14 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge badge-neutral mb-4">{study.clientIndustry}</span>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">{study.title}</h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">{study.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-neutral-200">
            {study.results.map((result, i) => (
              <div key={i} className="bg-white py-5 px-4 sm:px-6">
                <div className="text-h2 font-bold text-neutral-950 mb-1 leading-none">{result.value}</div>
                <div className="text-body-sm text-neutral-500">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl">
            <div>
              <p className="section-label">The challenge</p>
              <div className="prose-custom">
                <CaseStudyContent content={study.challenge} />
              </div>
            </div>
            <div>
              <p className="section-label">Our solution</p>
              <div className="prose-custom">
                <CaseStudyContent content={study.solution} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full content */}
      <article className="py-10 sm:py-12 border-t border-neutral-200">
        <div className="container-custom">
          <div className="max-w-3xl prose-custom">
            <CaseStudyContent content={study.content} />
          </div>
        </div>
      </article>

      {/* Tech stack */}
      <section className="py-12 sm:py-16 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="section-label">Technology stack</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {study.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white text-neutral-700 border border-neutral-200 rounded-md text-body-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Facing similar challenges?"
        description="Talk to the team that built this. We can help you achieve the same results."
        ctaText="Talk to an Engineer"
      />
    </>
  );
}
