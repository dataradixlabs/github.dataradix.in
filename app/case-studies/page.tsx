import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";
import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "Case Studies - DataRadix",
  description: "Real results from real projects. See how we've helped companies scale their technology infrastructure.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">Proven results</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Real systems. Real outcomes.
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              Every case study here represents a real engineering challenge solved — with measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case study list */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <div className="space-y-4">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col lg:flex-row gap-6 lg:gap-10 p-5 sm:p-6 lg:p-8 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all"
              >
                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge badge-neutral">{study.clientIndustry}</span>
                  </div>
                  <h2 className="text-h3 font-semibold text-neutral-950 mb-2 group-hover:text-neutral-700 transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-body text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                    {study.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 group-hover:text-neutral-950 transition-colors">
                    Read case study
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Results */}
                <div className="lg:w-56 flex-shrink-0">
                  <p className="text-label uppercase tracking-widest text-neutral-400 mb-3">
                    Key results
                  </p>
                  <div className="space-y-3">
                    {study.results.slice(0, 3).map((result, i) => (
                      <div key={i} className="flex items-baseline gap-2">
                        <span className="text-h3 font-bold text-neutral-950 leading-none">
                          {result.value}
                        </span>
                        <span className="text-body-sm text-neutral-500 leading-tight">
                          {result.metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection
        headline="Ready to achieve similar results?"
        description="Let's discuss how we can help scale your technology infrastructure."
        ctaText="Talk to an Engineer"
      />
    </>
  );
}
