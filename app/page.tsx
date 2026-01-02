import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrimaryCTA from "@/components/cta/PrimaryCTA";
import InlineCTA from "@/components/cta/InlineCTA";
import FinalCTASection from "@/components/cta/FinalCTASection";
import TechStack from "@/components/TechStack";
import { blogPosts } from "@/lib/data/blogs";
import { caseStudies } from "@/lib/data/case-studies";
import Image from "next/image";

export default function Home() {
  const featuredCaseStudies = caseStudies.filter((cs) => cs.featured).slice(0, 2);
  const latestBlogs = blogPosts.slice(0, 3);

  const industries = [
    { name: "FinTech", focus: "Real-time processing, compliance, risk analytics" },
    { name: "E-commerce", focus: "Personalization, inventory, order management" },
    { name: "SaaS", focus: "Multi-tenancy, analytics, API platforms" },
    { name: "Healthcare", focus: "HIPAA compliance, data privacy, interoperability" },
  ];

  return (
    <>
      {/* Hero Section - Responsive padding and layout */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">
                Engineering scalable, data-driven, cloud-native solutions.
              </h1>
              <p className="text-body text-text-secondary mb-6 sm:mb-8 max-w-xl">
                We help CTOs and engineering leaders build infrastructure that scales. From data engineering to cloud architecture, we deliver solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <PrimaryCTA href="/contact">Talk to an Engineer</PrimaryCTA>
                <PrimaryCTA href="/case-studies" variant="ghost">
                  View Case Studies
                </PrimaryCTA>
              </div>
            </div>
            {/* Hero Image - Architecture Diagram */}
            <div className="hidden lg:block relative aspect-[4/3] bg-bg-muted rounded-soft border border-border overflow-hidden">
              <Image 
                src="/images/hero-2.png" 
                alt="DataRadix Architecture - Scalable cloud-native solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consolidated: Services + Tech Stack + Differentiators - Responsive Split Screen */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Services Overview */}
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-4">What We Build</h2>
              <p className="text-body text-text-secondary mb-6 sm:mb-8">
                End-to-end technology solutions for modern enterprises
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: "Custom Software Development", desc: "Production-ready applications that scale" },
                  { title: "Data Engineering & Analytics", desc: "Modern data platforms with real-time processing" },
                  { title: "Cloud & DevOps", desc: "Infrastructure that scales automatically" },
                  { title: "AI & Automation", desc: "Intelligent automation and ML models" },
                ].map((service, i) => (
                  <div key={i} className="pb-4 sm:pb-6 border-b border-border last:border-0">
                    <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2">{service.title}</h3>
                    <p className="text-body text-text-secondary">{service.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <Link href="/services" className="text-small text-accent hover:text-accent-hover inline-flex items-center gap-1 transition-colors">
                  View all services <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Tech Stack + Why Us */}
            <div className="space-y-8 sm:space-y-12 mt-8 lg:mt-0">
              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-4">Technology Capabilities</h3>
                <TechStack />
              </div>

              <div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-4">Why DataRadix</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 text-body">Senior Engineers</h4>
                    <p className="text-small text-text-secondary">Only senior engineers who have built systems at scale</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 text-body">Proven Track Record</h4>
                    <p className="text-small text-text-secondary">Systems processing billions of events, serving millions of users</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1 text-body">Partnership Approach</h4>
                    <p className="text-small text-text-secondary">We work as an extension of your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust CTA - Inline */}
      <InlineCTA
        headline="Not sure where to start?"
        description="Get a free architecture review. Our engineers will assess your current setup and recommend the best path forward."
        ctaText="Request Architecture Review"
        ctaHref="/contact"
      />

      {/* Industries - Premium Horizontal Layout - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-0 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <h2 className="text-h2 font-semibold text-text-primary mb-2 sm:mb-3">Industries We Serve</h2>
              <p className="text-body text-text-secondary">
                Deep expertise across verticals that depend on technology. We understand the unique challenges and compliance requirements of each industry.
              </p>
            </div>
            <Link href="/industries" className="text-small text-accent hover:text-accent-hover transition-colors hidden lg:block whitespace-nowrap ml-8">
              View all industries →
            </Link>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="group bg-bg-base p-5 sm:p-6 rounded-soft border border-border hover:border-text-primary transition-all hover:shadow-sm"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-h3 font-semibold text-text-primary group-hover:text-accent transition-colors pr-2">
                    {industry.name}
                  </h3>
                  <ArrowRight 
                    size={16} 
                    className="text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" 
                  />
                </div>
                <p className="text-small text-text-secondary leading-relaxed">{industry.focus}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 lg:hidden">
            <Link href="/industries" className="text-small text-accent hover:text-accent-hover transition-colors">
              View all industries →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies - Responsive Cards */}
      <section className="py-12 sm:py-16 border-t border-border">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-2">Case Studies</h2>
              <p className="text-body text-text-secondary">
                Real results from real projects
              </p>
            </div>
            <Link href="/case-studies" className="text-small text-accent hover:text-accent-hover transition-colors hidden md:block whitespace-nowrap">
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredCaseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block p-5 sm:p-6 border border-border rounded-soft hover:border-text-primary transition-colors bg-bg-base"
              >
                <div className="text-small text-text-secondary mb-2">{study.clientIndustry}</div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-body text-text-secondary mb-3 sm:mb-4 line-clamp-2">{study.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-small text-text-secondary line-clamp-1">
                    {study.results[0]?.metric}: {study.results[0]?.value}
                  </div>
                  <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs - Responsive Grid */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
            <div>
              <h2 className="text-h2 font-semibold text-text-primary mb-2">Latest Insights</h2>
              <p className="text-body text-text-secondary">
                Technical deep-dives and engineering best practices
              </p>
            </div>
            <Link href="/blog" className="text-small text-accent hover:text-accent-hover transition-colors hidden md:block whitespace-nowrap">
              Read all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {latestBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group block bg-bg-base p-5 rounded-soft border border-border hover:border-text-primary transition-colors"
              >
                <div className="text-small text-text-secondary mb-2">{blog.category}</div>
                <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-body text-text-secondary mb-3 line-clamp-2 text-small">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-small text-text-secondary">
                  <span>{blog.readTime} min read</span>
                  <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />
    </>
  );
}
