import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import FinalCTASection from "@/components/cta/FinalCTASection";
import TechStack from "@/components/TechStack";
import { blogPosts } from "@/lib/data/blogs";
import { caseStudies } from "@/lib/data/case-studies";

export default function Home() {
  const featuredCaseStudies = caseStudies.filter((cs) => cs.featured).slice(0, 2);
  const latestBlogs = blogPosts.slice(0, 3);

  const stats = [
    { value: "50M+", label: "Events processed daily" },
    { value: "99.99%", label: "Uptime SLA delivered" },
    { value: "320%", label: "Avg. revenue impact" },
    { value: "< 6 wks", label: "To production MVP" },
  ];

  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      desc: "Production-ready applications designed for scale — built with your team, not around it.",
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      desc: "Modern data platforms with real-time processing, reliable pipelines, and actionable BI.",
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      desc: "Infrastructure that elastically scales. Zero-downtime deployments. Observability built in.",
    },
    {
      id: "ai-automation",
      title: "AI & Automation",
      desc: "Intelligent automation, ML model pipelines, and LLM-powered product features.",
    },
  ];

  const industries = [
    {
      name: "FinTech",
      focus: "Real-time payments, risk analytics, regulatory compliance",
    },
    {
      name: "E-commerce",
      focus: "Personalization engines, inventory systems, order orchestration",
    },
    {
      name: "SaaS",
      focus: "Multi-tenancy, usage analytics, API platform architecture",
    },
    {
      name: "Healthcare",
      focus: "HIPAA-compliant systems, EHR integration, patient data privacy",
    },
  ];

  const differentiators = [
    {
      title: "Only senior engineers",
      desc: "Everyone who touches your code has built systems at scale. No juniors learning on your project.",
    },
    {
      title: "Embedded, not outsourced",
      desc: "We work inside your Slack, your sprints, your codebase. We're part of your team, not a vendor.",
    },
    {
      title: "Outcome-obsessed",
      desc: "We measure success by business metrics — latency, uptime, revenue — not story points.",
    },
  ];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-0 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />

        <div className="container-custom relative z-10">
          {/* Eyebrow */}
          <div className="mb-6 sm:mb-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-body-sm text-neutral-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new engagements
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display font-bold text-neutral-950 text-balance mb-5 sm:mb-6 max-w-3xl leading-none tracking-tight">
            Engineering teams that build infrastructure at scale.
          </h1>

          {/* Sub-copy */}
          <p className="text-body-lg text-neutral-500 mb-8 sm:mb-10 max-w-xl leading-relaxed">
            We help CTOs and engineering leaders ship faster — from data pipelines to cloud-native platforms. Senior engineers only, embedded in your team.
          </p>

          {/* CTA row */}
          <div className="flex flex-col xs:flex-row gap-3 mb-16 sm:mb-20">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors group min-h-[44px]"
            >
              Talk to an Engineer
              <ArrowRight size={14} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-200 text-neutral-700 rounded-md text-body-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-colors min-h-[44px]"
            >
              View Case Studies
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border-t border-neutral-200 bg-neutral-200">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white py-5 px-4 sm:px-6">
                <div className="text-h2 font-bold text-neutral-950 mb-1 leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-body-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services + Tech Stack ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-neutral-200">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Services */}
            <div>
              <p className="section-label">What we build</p>
              <h2 className="text-h1 font-bold text-neutral-950 mb-8 text-balance">
                End-to-end technology solutions
              </h2>

              <div className="space-y-0 divide-y divide-neutral-100">
                {services.map((service) => (
                  <div key={service.id} className="py-5 group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-h4 font-semibold text-neutral-950 mb-1.5 group-hover:text-neutral-700 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-body text-neutral-500 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors group"
                >
                  Explore all services
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Tech Stack + Why Us */}
            <div className="space-y-10">
              <div>
                <p className="section-label">Technology capabilities</p>
                <TechStack />
              </div>

              <div>
                <p className="section-label">Why DataRadix</p>
                <div className="space-y-5">
                  {differentiators.map((d) => (
                    <div key={d.title} className="flex gap-3">
                      <CheckCircle size={16} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-body-sm font-semibold text-neutral-950 mb-0.5">
                          {d.title}
                        </div>
                        <p className="text-body-sm text-neutral-500 leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free Architecture Review Callout ─────────────────────────────── */}
      <section className="py-12 sm:py-14 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-body-sm font-semibold text-neutral-400 uppercase tracking-widest mb-2">
                Free offer
              </div>
              <h2 className="text-h2 font-bold text-neutral-950 mb-2 text-balance">
                Not sure where to start?
              </h2>
              <p className="text-body text-neutral-500 leading-relaxed">
                Get a free architecture review. Our engineers assess your current setup and recommend the best path forward — no commitment required.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors group min-h-[44px]"
            >
              Request Architecture Review
              <ArrowRight size={14} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-lg">
              <p className="section-label">Industries we serve</p>
              <h2 className="text-h1 font-bold text-neutral-950 text-balance">
                Deep expertise across key verticals
              </h2>
            </div>
            <Link
              href="/industries"
              className="hidden sm:inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors group whitespace-nowrap"
            >
              View all industries
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href="/industries"
                className="group p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h4 font-semibold text-neutral-950 group-hover:text-neutral-700 transition-colors">
                    {industry.name}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-300 group-hover:text-neutral-600 transition-colors flex-shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-body-sm text-neutral-500 leading-relaxed">
                  {industry.focus}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors group"
            >
              View all industries
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="section-label">Case studies</p>
              <h2 className="text-h1 font-bold text-neutral-950">
                Real results, real systems
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="hidden sm:inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors group whitespace-nowrap"
            >
              View all case studies
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {featuredCaseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col p-5 sm:p-6 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-neutral">{study.clientIndustry}</span>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-300 group-hover:text-neutral-600 transition-colors"
                  />
                </div>
                <h3 className="text-h3 font-semibold text-neutral-950 mb-2 group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-body text-neutral-500 mb-5 line-clamp-2 flex-1 leading-relaxed">
                  {study.excerpt}
                </p>
                {study.results[0] && (
                  <div className="pt-4 border-t border-neutral-100 flex items-baseline gap-2">
                    <span className="text-h2 font-bold text-neutral-950 leading-none">
                      {study.results[0].value}
                    </span>
                    <span className="text-body-sm text-neutral-500">
                      {study.results[0].metric}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="section-label">Latest insights</p>
              <h2 className="text-h1 font-bold text-neutral-950">
                Engineering deep-dives
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors group whitespace-nowrap"
            >
              Read all articles
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {latestBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col p-5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-neutral">{blog.category}</span>
                  <span className="text-body-sm text-neutral-400">{blog.readTime} min</span>
                </div>
                <h3 className="text-h4 font-semibold text-neutral-950 mb-2 line-clamp-2 group-hover:text-neutral-700 transition-colors flex-1">
                  {blog.title}
                </h3>
                <p className="text-body-sm text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-body-sm font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors mt-auto">
                  Read article
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 hover:text-neutral-950 transition-colors group"
            >
              Read all articles
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <FinalCTASection />
    </>
  );
}
