import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";
import PrimaryCTA from "@/components/cta/PrimaryCTA";

export const metadata = {
  title: "Case Studies - DataRadix",
  description: "Real results from real projects. See how we've helped companies scale their technology infrastructure.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero - Responsive padding */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Case Studies</h1>
            <p className="text-body text-text-secondary">
              Real results from real projects
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - Responsive Story Blocks */}
      <section className="py-12 border-t border-border">
        <div className="container-custom">
          <div className="space-y-6 sm:space-y-8">
            {caseStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block p-5 sm:p-6 lg:p-8 border border-border rounded-soft hover:border-text-primary transition-colors bg-bg-base"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {/* Left: Context */}
                  <div className="md:col-span-1">
                    <div className="text-small text-text-secondary mb-2 sm:mb-3">{study.clientIndustry}</div>
                    <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-body text-text-secondary line-clamp-3">{study.excerpt}</p>
                  </div>

                  {/* Middle: Challenge & Solution */}
                  <div className="md:col-span-1 space-y-3 sm:space-y-4">
                    <div>
                      <h4 className="text-small font-semibold text-text-primary mb-2">Challenge</h4>
                      <p className="text-small text-text-secondary line-clamp-2">{study.challenge.substring(0, 150)}...</p>
                    </div>
                    <div>
                      <h4 className="text-small font-semibold text-text-primary mb-2">Solution</h4>
                      <p className="text-small text-text-secondary line-clamp-2">{study.solution.substring(0, 150)}...</p>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="md:col-span-1">
                    <h4 className="text-small font-semibold text-text-primary mb-3 sm:mb-4">Key Results</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {study.results.slice(0, 3).map((result, i) => (
                        <div key={i} className="pb-2 sm:pb-3 border-b border-border last:border-0">
                          <div className="text-small font-medium text-text-primary">{result.metric}</div>
                          <div className="text-small text-text-secondary">{result.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center text-small text-accent font-medium">
                      Read full case study <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-h2 font-semibold text-text-primary mb-3 sm:mb-4">Ready to see similar results?</h2>
          <p className="text-body text-text-secondary mb-6 sm:mb-8">
            Let&apos;s discuss how we can help scale your technology infrastructure.
          </p>
          <PrimaryCTA href="/contact">Talk to an Engineer</PrimaryCTA>
        </div>
      </section>
    </>
  );
}
