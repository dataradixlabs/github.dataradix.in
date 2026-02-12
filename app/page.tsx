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


// // // 'use client';
// // // import React, { useState, useEffect } from 'react';
// // // import { ArrowRight, Sparkles, Zap, Shield, Code2, Database, Cloud, Brain, ChevronRight } from 'lucide-react';

// // // export default function Home() {
// // //   const [scrollY, setScrollY] = useState(0);
// // //   const [activeService, setActiveService] = useState(0);

// // //   useEffect(() => {
// // //     const handleScroll = () => setScrollY(window.scrollY);
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const featuredCaseStudies = [
// // //     {
// // //       id: 1,
// // //       slug: "fintech-platform",
// // //       clientIndustry: "FinTech",
// // //       title: "Real-time Payment Processing at Scale",
// // //       excerpt: "Built a distributed payment system handling 50M+ transactions daily",
// // //       results: [{ metric: "Latency Reduction", value: "85%" }]
// // //     },
// // //     {
// // //       id: 2,
// // //       slug: "ecommerce-analytics",
// // //       clientIndustry: "E-commerce",
// // //       title: "AI-Powered Personalization Engine",
// // //       excerpt: "Increased conversion rates with machine learning recommendations",
// // //       results: [{ metric: "Revenue Growth", value: "320%" }]
// // //     }
// // //   ];

// // //   const latestBlogs = [
// // //     {
// // //       id: 1,
// // //       slug: "microservices",
// // //       category: "Architecture",
// // //       title: "Building Resilient Microservices",
// // //       excerpt: "Best practices for fault-tolerant distributed systems",
// // //       readTime: 8
// // //     },
// // //     {
// // //       id: 2,
// // //       slug: "data-pipelines",
// // //       category: "Data Engineering",
// // //       title: "Real-time Data Pipelines with Apache Kafka",
// // //       excerpt: "Architecting streaming data infrastructure",
// // //       readTime: 12
// // //     },
// // //     {
// // //       id: 3,
// // //       slug: "cloud-native",
// // //       category: "DevOps",
// // //       title: "Zero-Downtime Deployments on Kubernetes",
// // //       excerpt: "Advanced deployment strategies for production",
// // //       readTime: 10
// // //     }
// // //   ];

// // //   const services = [
// // //     { 
// // //       icon: Code2,
// // //       title: "Custom Software Development", 
// // //       desc: "Production-ready applications that scale",
// // //       gradient: "from-blue-500 to-cyan-500"
// // //     },
// // //     { 
// // //       icon: Database,
// // //       title: "Data Engineering & Analytics", 
// // //       desc: "Modern data platforms with real-time processing",
// // //       gradient: "from-purple-500 to-pink-500"
// // //     },
// // //     { 
// // //       icon: Cloud,
// // //       title: "Cloud & DevOps", 
// // //       desc: "Infrastructure that scales automatically",
// // //       gradient: "from-orange-500 to-red-500"
// // //     },
// // //     { 
// // //       icon: Brain,
// // //       title: "AI & Automation", 
// // //       desc: "Intelligent automation and ML models",
// // //       gradient: "from-green-500 to-teal-500"
// // //     },
// // //   ];

// // //   const industries = [
// // //     { name: "FinTech", focus: "Real-time processing, compliance, risk analytics", color: "from-blue-500/20 to-cyan-500/20" },
// // //     { name: "E-commerce", focus: "Personalization, inventory, order management", color: "from-purple-500/20 to-pink-500/20" },
// // //     { name: "SaaS", focus: "Multi-tenancy, analytics, API platforms", color: "from-orange-500/20 to-red-500/20" },
// // //     { name: "Healthcare", focus: "HIPAA compliance, data privacy, interoperability", color: "from-green-500/20 to-teal-500/20" },
// // //   ];

// // //   const techStack = [
// // //     "React", "Python", "AWS", "Kubernetes", "PostgreSQL", "Redis", 
// // //     "Apache Kafka", "TensorFlow", "Docker", "TypeScript", "Go", "GraphQL"
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
// // //       {/* Animated Background Grid */}
// // //       <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />
      
// // //       {/* Floating Orbs */}
// // //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
// // //         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
// // //       </div>

// // //       <div className="relative z-10">
// // //         {/* Hero Section */}
// // //         <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
// // //           <div className="max-w-7xl mx-auto w-full">
// // //             <div className="text-center space-y-8 sm:space-y-12">
// // //               {/* Animated Badge */}
// // //               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm animate-[fadeIn_0.6s_ease-out]">
// // //                 <Sparkles className="w-4 h-4 text-blue-400" />
// // //                 <span className="text-sm text-blue-300">Engineering Excellence</span>
// // //               </div>

// // //               {/* Main Headline */}
// // //               <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold animate-[fadeIn_0.8s_ease-out]">
// // //                 <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
// // //                   Engineering scalable,
// // //                 </span>
// // //                 <br />
// // //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //                   data-driven solutions
// // //                 </span>
// // //               </h1>

// // //               <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out] px-4">
// // //                 We help CTOs and engineering leaders build infrastructure that scales. From data engineering to cloud architecture, we deliver solutions that grow with your business.
// // //               </p>

// // //               {/* CTA Buttons */}
// // //               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1.2s_ease-out] px-4">
// // //                 <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 w-full sm:w-auto">
// // //                   <span className="relative z-10 flex items-center justify-center gap-2">
// // //                     Talk to an Engineer
// // //                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // //                   </span>
// // //                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
// // //                 </button>
                
// // //                 <button className="group px-8 py-4 rounded-full font-semibold border-2 border-slate-700 hover:border-blue-500 transition-all hover:bg-slate-800/50 backdrop-blur-sm w-full sm:w-auto">
// // //                   <span className="flex items-center justify-center gap-2">
// // //                     View Case Studies
// // //                     <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
// // //                   </span>
// // //                 </button>
// // //               </div>

// // //               {/* Floating Tech Stack Pills */}
// // //               <div className="flex flex-wrap justify-center gap-3 pt-8 sm:pt-12 animate-[fadeIn_1.4s_ease-out] px-4">
// // //                 {techStack.slice(0, 6).map((tech, i) => (
// // //                   <div
// // //                     key={tech}
// // //                     className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-sm hover:border-blue-500/50 hover:bg-slate-800 transition-all cursor-default"
// // //                     style={{ animationDelay: `${1.4 + i * 0.1}s` }}
// // //                   >
// // //                     {tech}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Services Section - Interactive Cards */}
// // //         <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
// // //           <div className="max-w-7xl mx-auto">
// // //             <div className="text-center mb-12 sm:mb-16">
// // //               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
// // //                 <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
// // //                   What We Build
// // //                 </span>
// // //               </h2>
// // //               <p className="text-lg sm:text-xl text-slate-400">End-to-end technology solutions for modern enterprises</p>
// // //             </div>

// // //             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
// // //               {services.map((service, i) => {
// // //                 const Icon = service.icon;
// // //                 return (
// // //                   <div
// // //                     key={i}
// // //                     onMouseEnter={() => setActiveService(i)}
// // //                     className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 cursor-pointer overflow-hidden"
// // //                   >
// // //                     {/* Gradient Background on Hover */}
// // //                     <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
// // //                     {/* Icon */}
// // //                     <div className={`relative mb-4 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
// // //                       <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
// // //                     </div>
                    
// // //                     {/* Content */}
// // //                     <h3 className="relative text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors">
// // //                       {service.title}
// // //                     </h3>
// // //                     <p className="relative text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
// // //                       {service.desc}
// // //                     </p>
                    
// // //                     {/* Arrow */}
// // //                     <ArrowRight className="relative mt-4 w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Trust CTA - Glass Morphism */}
// // //         <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
// // //           <div className="max-w-5xl mx-auto">
// // //             <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl overflow-hidden">
// // //               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
// // //               <div className="relative z-10 text-center space-y-6">
// // //                 <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
// // //                   <Zap className="w-7 h-7 sm:w-8 sm:h-8" />
// // //                 </div>
// // //                 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Not sure where to start?</h3>
// // //                 <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
// // //                   Get a free architecture review. Our engineers will assess your current setup and recommend the best path forward.
// // //                 </p>
// // //                 <button className="mt-6 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:scale-105 transition-transform hover:shadow-xl hover:shadow-white/20">
// // //                   Request Architecture Review
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Industries - Bento Grid */}
// // //         <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
// // //           <div className="max-w-7xl mx-auto">
// // //             <div className="text-center mb-12 sm:mb-16">
// // //               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
// // //                 <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
// // //                   Industries We Serve
// // //                 </span>
// // //               </h2>
// // //               <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto">
// // //                 Deep expertise across verticals that depend on technology
// // //               </p>
// // //             </div>

// // //             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
// // //               {industries.map((industry, i) => (
// // //                 <div
// // //                   key={i}
// // //                   className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden"
// // //                 >
// // //                   <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
// // //                   <div className="relative">
// // //                     <div className="flex items-center justify-between mb-4">
// // //                       <h3 className="text-xl sm:text-2xl font-bold group-hover:text-white transition-colors">
// // //                         {industry.name}
// // //                       </h3>
// // //                       <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:scale-110 transition-all" />
// // //                     </div>
// // //                     <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
// // //                       {industry.focus}
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Case Studies - Image Cards */}
// // //         <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
// // //           <div className="max-w-7xl mx-auto">
// // //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 gap-4">
// // //               <div>
// // //                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
// // //                   <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
// // //                     Case Studies
// // //                   </span>
// // //                 </h2>
// // //                 <p className="text-base sm:text-lg text-slate-400">Real results from real projects</p>
// // //               </div>
// // //               <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group">
// // //                 View all
// // //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //               </button>
// // //             </div>

// // //             <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
// // //               {featuredCaseStudies.map((study, i) => (
// // //                 <div
// // //                   key={study.id}
// // //                   className="group relative rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 overflow-hidden transition-all duration-300 cursor-pointer"
// // //                 >
// // //                   {/* Gradient Overlay */}
// // //                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
// // //                   <div className="relative p-6 sm:p-8">
// // //                     <div className="text-sm text-blue-400 mb-3">{study.clientIndustry}</div>
// // //                     <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors">
// // //                       {study.title}
// // //                     </h3>
// // //                     <p className="text-sm sm:text-base text-slate-400 mb-6 leading-relaxed">
// // //                       {study.excerpt}
// // //                     </p>
                    
// // //                     <div className="flex items-center justify-between pt-6 border-t border-slate-800">
// // //                       <div className="text-sm">
// // //                         <div className="text-slate-500 mb-1">{study.results[0].metric}</div>
// // //                         <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// // //                           {study.results[0].value}
// // //                         </div>
// // //                       </div>
// // //                       <ArrowRight className="w-6 h-6 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Blog Section - Minimal Cards */}
// // //         <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
// // //           <div className="max-w-7xl mx-auto">
// // //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 gap-4">
// // //               <div>
// // //                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
// // //                   <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
// // //                     Latest Insights
// // //                   </span>
// // //                 </h2>
// // //                 <p className="text-base sm:text-lg text-slate-400">Technical deep-dives and engineering best practices</p>
// // //               </div>
// // //               <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group">
// // //                 Read all
// // //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //               </button>
// // //             </div>

// // //             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// // //               {latestBlogs.map((blog) => (
// // //                 <div
// // //                   key={blog.id}
// // //                   className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all duration-300 cursor-pointer"
// // //                 >
// // //                   <div className="text-sm text-purple-400 mb-3">{blog.category}</div>
// // //                   <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-white transition-colors line-clamp-2">
// // //                     {blog.title}
// // //                   </h3>
// // //                   <p className="text-sm text-slate-400 mb-6 line-clamp-2 leading-relaxed">
// // //                     {blog.excerpt}
// // //                   </p>
                  
// // //                   <div className="flex items-center justify-between text-sm text-slate-500">
// // //                     <span>{blog.readTime} min read</span>
// // //                     <ArrowRight className="w-4 h-4 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Final CTA - Bold & Centered */}
// // //         <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
// // //           <div className="max-w-4xl mx-auto text-center">
// // //             <div className="space-y-8">
// // //               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
// // //                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
// // //                   Ready to build something extraordinary?
// // //                 </span>
// // //               </h2>
// // //               <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
// // //                 Let's discuss your project and see how we can help you scale.
// // //               </p>
// // //               <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
// // //                 <span className="relative z-10 flex items-center justify-center gap-3">
// // //                   Start Your Project
// // //                   <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
// // //                 </span>
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // 'use client';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { ArrowRight, Sparkles, Zap, Shield, Code2, Database, Cloud, Brain, ChevronRight, Cpu, Network, Lock } from 'lucide-react';

// // export default function Home() {
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const [activeService, setActiveService] = useState(0);
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       setMousePos({ x: e.clientX, y: e.clientY });
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
    
// //     const ctx = canvas.getContext('2d');
// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const particles = Array.from({ length: 50 }, () => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       vx: (Math.random() - 0.5) * 0.5,
// //       vy: (Math.random() - 0.5) * 0.5,
// //       radius: Math.random() * 2
// //     }));

// //     let animationId;
// //     const animate = () => {
// //       ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);

// //       particles.forEach((p, i) => {
// //         p.x += p.vx;
// //         p.y += p.vy;

// //         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
// //         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
// //         ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
// //         ctx.fill();

// //         particles.slice(i + 1).forEach(p2 => {
// //           const dx = p.x - p2.x;
// //           const dy = p.y - p2.y;
// //           const dist = Math.sqrt(dx * dx + dy * dy);

// //           if (dist < 150) {
// //             ctx.beginPath();
// //             ctx.moveTo(p.x, p.y);
// //             ctx.lineTo(p2.x, p2.y);
// //             ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 150)})`;
// //             ctx.lineWidth = 0.5;
// //             ctx.stroke();
// //           }
// //         });
// //       });

// //       animationId = requestAnimationFrame(animate);
// //     };
// //     animate();

// //     return () => cancelAnimationFrame(animationId);
// //   }, []);

// //   const featuredCaseStudies = [
// //     {
// //       id: 1,
// //       clientIndustry: "FinTech",
// //       title: "Real-time Payment Processing at Scale",
// //       excerpt: "Built a distributed payment system handling 50M+ transactions daily",
// //       results: [{ metric: "Latency", value: "85%" }],
// //       color: "cyan"
// //     },
// //     {
// //       id: 2,
// //       clientIndustry: "E-commerce",
// //       title: "AI-Powered Personalization Engine",
// //       excerpt: "Increased conversion rates with machine learning recommendations",
// //       results: [{ metric: "Revenue", value: "320%" }],
// //       color: "fuchsia"
// //     }
// //   ];

// //   const services = [
// //     { 
// //       icon: Code2,
// //       title: "Software", 
// //       desc: "Production-ready applications that scale",
// //       angle: 0
// //     },
// //     { 
// //       icon: Database,
// //       title: "Data", 
// //       desc: "Modern data platforms with real-time processing",
// //       angle: 90
// //     },
// //     { 
// //       icon: Cloud,
// //       title: "Cloud", 
// //       desc: "Infrastructure that scales automatically",
// //       angle: 180
// //     },
// //     { 
// //       icon: Brain,
// //       title: "AI", 
// //       desc: "Intelligent automation and ML models",
// //       angle: 270
// //     },
// //   ];

// //   const industries = ["FinTech", "E-commerce", "SaaS", "Healthcare"];

// //   return (
// //     <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
// //       <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40" />
      
// //       <div className="relative z-10">
// //         {/* Experimental Hero */}
// //         <section className="min-h-screen flex items-center justify-center px-4 relative">
// //           {/* Spotlight effect */}
// //           <div 
// //             className="fixed w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none transition-all duration-300 ease-out"
// //             style={{
// //               left: mousePos.x - 300,
// //               top: mousePos.y - 300,
// //               background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)'
// //             }}
// //           />

// //           <div className="max-w-7xl mx-auto w-full">
// //             {/* Brutalist Typography */}
// //             <div className="space-y-12">
// //               <div className="relative">
// //                 <h1 className="text-[15vw] sm:text-[12vw] lg:text-[10vw] font-black leading-[0.85] tracking-tighter">
// //                   <span className="block" style={{ transform: 'skew(-5deg)' }}>
// //                     ENGIN
// //                     <span className="inline-block relative">
// //                       EERING
// //                       <div className="absolute -right-4 -top-4 w-3 h-3 bg-cyan-400 animate-ping" />
// //                     </span>
// //                   </span>
// //                   <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" style={{ transform: 'skew(-5deg) translateX(40px)' }}>
// //                     AT SCALE
// //                   </span>
// //                 </h1>
                
// //                 {/* Floating metrics */}
// //                 <div className="absolute -right-4 top-1/4 hidden lg:block">
// //                   <div className="bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 px-6 py-4 rounded-2xl rotate-3 hover:rotate-0 transition-transform">
// //                     <div className="text-4xl font-bold text-cyan-400">50M+</div>
// //                     <div className="text-xs text-slate-400">Transactions/Day</div>
// //                   </div>
// //                 </div>
                
// //                 <div className="absolute -left-4 bottom-1/4 hidden lg:block">
// //                   <div className="bg-fuchsia-500/10 backdrop-blur-xl border border-fuchsia-500/20 px-6 py-4 rounded-2xl -rotate-3 hover:rotate-0 transition-transform">
// //                     <div className="text-4xl font-bold text-fuchsia-400">99.99%</div>
// //                     <div className="text-xs text-slate-400">Uptime</div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="max-w-2xl" style={{ transform: 'skew(-5deg) translateX(40px)' }}>
// //                 <p className="text-xl sm:text-2xl text-slate-400 font-light" style={{ transform: 'skew(5deg)' }}>
// //                   We architect systems that process billions of events. From real-time data pipelines to cloud-native platforms.
// //                 </p>
// //               </div>

// //               {/* Experimental CTA */}
// //               <div className="flex flex-col sm:flex-row gap-4 items-start" style={{ transform: 'translateX(40px)' }}>
// //                 <button className="group relative px-8 py-5 bg-white text-black font-bold text-lg overflow-hidden clip-path-polygon">
// //                   <span className="relative z-10 flex items-center gap-3">
// //                     TALK TO US
// //                     <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
// //                   </span>
// //                   <div className="absolute inset-0 bg-cyan-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
// //                 </button>
                
// //                 <button className="group px-8 py-5 border-2 border-white font-bold text-lg hover:bg-white hover:text-black transition-all">
// //                   VIEW WORK
// //                 </button>
// //               </div>

// //               {/* Ticker tape */}
// //               <div className="overflow-hidden border-y border-slate-800 py-6 mt-20">
// //                 <div className="flex gap-8 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
// //                   {[...Array(3)].map((_, i) => (
// //                     <div key={i} className="flex gap-8 text-slate-600 font-mono text-sm">
// //                       <span>AWS</span><span>•</span>
// //                       <span>KUBERNETES</span><span>•</span>
// //                       <span>APACHE KAFKA</span><span>•</span>
// //                       <span>POSTGRESQL</span><span>•</span>
// //                       <span>PYTHON</span><span>•</span>
// //                       <span>REACT</span><span>•</span>
// //                       <span>TERRAFORM</span><span>•</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Circular Services Grid */}
// //         <section className="py-32 px-4">
// //           <div className="max-w-7xl mx-auto">
// //             <div className="text-center mb-20">
// //               <div className="inline-block">
// //                 <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-4">
// //                   CAPABILITIES
// //                 </h2>
// //                 <div className="h-2 bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
// //               </div>
// //             </div>

// //             {/* Circular layout for desktop */}
// //             <div className="hidden lg:block relative h-[600px]">
// //               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
// //                 <div className="text-center">
// //                   <div className="text-4xl font-black">CORE</div>
// //                   <div className="text-sm text-slate-500">SYSTEMS</div>
// //                 </div>
// //               </div>

// //               {services.map((service, i) => {
// //                 const Icon = service.icon;
// //                 const radius = 250;
// //                 const angle = (service.angle * Math.PI) / 180;
// //                 const x = Math.cos(angle) * radius;
// //                 const y = Math.sin(angle) * radius;

// //                 return (
// //                   <div
// //                     key={i}
// //                     className="absolute top-1/2 left-1/2 group cursor-pointer"
// //                     style={{
// //                       transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
// //                     }}
// //                   >
// //                     <div className="relative">
// //                       <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 flex flex-col items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
// //                         <Icon className="w-12 h-12 mb-3 text-cyan-400" />
// //                         <div className="font-bold text-xl">{service.title}</div>
// //                       </div>
                      
// //                       {/* Connecting line */}
// //                       <svg className="absolute top-1/2 left-1/2 -z-10 opacity-30 group-hover:opacity-100 transition-opacity" style={{ width: `${radius}px`, height: '2px', transform: `translate(-100%, -50%) rotate(${service.angle}deg)`, transformOrigin: 'right center' }}>
// //                         <line x1="0" y1="1" x2={radius} y2="1" stroke="cyan" strokeWidth="2" strokeDasharray="4 4" />
// //                       </svg>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* Mobile grid */}
// //             <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
// //               {services.map((service, i) => {
// //                 const Icon = service.icon;
// //                 return (
// //                   <div key={i} className="p-8 bg-slate-900 border-2 border-slate-800 hover:border-cyan-400 transition-all group">
// //                     <Icon className="w-12 h-12 mb-4 text-cyan-400" />
// //                     <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
// //                     <p className="text-slate-400">{service.desc}</p>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Split Screen Industries */}
// //         <section className="py-32 px-4 bg-slate-950">
// //           <div className="max-w-7xl mx-auto">
// //             <div className="grid lg:grid-cols-2 gap-16 items-center">
// //               <div>
// //                 <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-8 leading-none">
// //                   INDUS
// //                   <br />
// //                   TRIES
// //                 </h2>
// //                 <p className="text-2xl text-slate-400 mb-8">
// //                   Deep technical expertise across high-growth sectors
// //                 </p>
// //                 <div className="space-y-6">
// //                   {industries.map((industry, i) => (
// //                     <div 
// //                       key={i}
// //                       className="group flex items-center gap-4 cursor-pointer"
// //                       onMouseEnter={() => setActiveService(i)}
// //                     >
// //                       <div className={`w-3 h-3 rounded-full transition-all ${activeService === i ? 'bg-cyan-400 scale-150' : 'bg-slate-700'}`} />
// //                       <div className={`text-3xl font-bold transition-all ${activeService === i ? 'text-white translate-x-4' : 'text-slate-600'}`}>
// //                         {industry}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Visual element */}
// //               <div className="hidden lg:block relative h-[600px]">
// //                 <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
// //                   {[...Array(9)].map((_, i) => (
// //                     <div
// //                       key={i}
// //                       className={`bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 transition-all duration-500 ${
// //                         activeService === Math.floor(i / 2.25) ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
// //                       }`}
// //                       style={{
// //                         transitionDelay: `${i * 50}ms`
// //                       }}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Asymmetric Case Studies */}
// //         <section className="py-32 px-4">
// //           <div className="max-w-7xl mx-auto">
// //             <h2 className="text-6xl sm:text-8xl font-black tracking-tighter mb-20">
// //               CASE STUDIES
// //             </h2>

// //             <div className="space-y-8">
// //               {featuredCaseStudies.map((study, i) => (
// //                 <div
// //                   key={study.id}
// //                   className="group grid lg:grid-cols-12 gap-8 items-center cursor-pointer"
// //                 >
// //                   <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:col-start-6' : ''}`}>
// //                     <div className="border-l-4 border-cyan-400 pl-8 py-4">
// //                       <div className="text-sm text-cyan-400 font-mono mb-2">{study.clientIndustry}</div>
// //                       <h3 className="text-4xl sm:text-5xl font-black mb-4 group-hover:translate-x-4 transition-transform">
// //                         {study.title}
// //                       </h3>
// //                       <p className="text-xl text-slate-400 mb-6">{study.excerpt}</p>
// //                       <div className="flex items-baseline gap-4">
// //                         <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
// //                           {study.results[0].value}
// //                         </div>
// //                         <div className="text-slate-500">{study.results[0].metric}</div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
// //                     <div className="aspect-square bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 group-hover:border-cyan-400 transition-all relative overflow-hidden">
// //                       <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
// //                       <div className="absolute inset-0 flex items-center justify-center">
// //                         <ArrowRight className="w-20 h-20 text-slate-700 group-hover:text-cyan-400 group-hover:scale-150 transition-all" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Oversized CTA */}
// //         <section className="py-32 px-4 bg-gradient-to-br from-cyan-500 via-blue-600 to-fuchsia-600 relative overflow-hidden">
// //           <div className="absolute inset-0 opacity-10">
// //             <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
// //             <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
// //           </div>
          
// //           <div className="max-w-7xl mx-auto relative z-10 text-center">
// //             <h2 className="text-6xl sm:text-9xl font-black tracking-tighter mb-12 leading-none">
// //               LET'S
// //               <br />
// //               BUILD.
// //             </h2>
// //             <button className="px-16 py-8 bg-white text-black text-2xl font-black hover:scale-105 transition-transform">
// //               START PROJECT →
// //             </button>
// //           </div>
// //         </section>
// //       </div>

// //       <style jsx>{`
// //         @keyframes scroll {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-33.333%); }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { ArrowRight, CheckCircle, Users, Globe, Award, BarChart3, Shield, Zap } from 'lucide-react';

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const stats = [
//     { value: "15+", label: "Years Experience", icon: Award },
//     { value: "500+", label: "Projects Delivered", icon: CheckCircle },
//     { value: "98%", label: "Client Satisfaction", icon: Users },
//     { value: "50+", label: "Enterprise Clients", icon: Globe }
//   ];

//   const services = [
//     {
//       title: "Custom Software Development",
//       description: "Enterprise-grade applications built with cutting-edge technologies and industry best practices.",
//       features: ["Agile Development", "Scalable Architecture", "Quality Assurance", "Maintenance & Support"]
//     },
//     {
//       title: "Data Engineering & Analytics",
//       description: "Transform raw data into actionable insights with modern data platforms and real-time processing.",
//       features: ["Data Pipelines", "Business Intelligence", "Real-time Analytics", "Data Governance"]
//     },
//     {
//       title: "Cloud Infrastructure & DevOps",
//       description: "Secure, scalable cloud solutions with automated deployment and continuous integration.",
//       features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "24/7 Monitoring"]
//     },
//     {
//       title: "AI & Machine Learning",
//       description: "Leverage artificial intelligence to automate processes and unlock new business opportunities.",
//       features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Model Deployment"]
//     }
//   ];

//   const industries = [
//     {
//       name: "Financial Services",
//       description: "Secure, compliant solutions for banking, fintech, and insurance companies.",
//       capabilities: ["Payment Processing", "Risk Management", "Regulatory Compliance", "Fraud Detection"]
//     },
//     {
//       name: "Healthcare",
//       description: "HIPAA-compliant systems that improve patient care and operational efficiency.",
//       capabilities: ["EHR Integration", "Telemedicine", "Medical Imaging", "Patient Portals"]
//     },
//     {
//       name: "Retail & E-commerce",
//       description: "Omnichannel experiences that drive conversion and customer loyalty.",
//       capabilities: ["Personalization", "Inventory Management", "Payment Integration", "Analytics"]
//     },
//     {
//       name: "Technology & SaaS",
//       description: "Scalable platforms built for rapid growth and global expansion.",
//       capabilities: ["Multi-tenancy", "API Development", "Microservices", "Real-time Features"]
//     }
//   ];

//   const caseStudies = [
//     {
//       title: "Global Payment Platform Modernization",
//       client: "Fortune 500 Financial Services",
//       challenge: "Legacy system unable to handle growing transaction volumes",
//       solution: "Cloud-native microservices architecture with real-time processing",
//       results: [
//         "10x increase in transaction throughput",
//         "85% reduction in system latency",
//         "99.99% uptime achieved",
//         "$2M annual cost savings"
//       ],
//       tech: ["AWS", "Kubernetes", "Apache Kafka", "PostgreSQL"]
//     },
//     {
//       title: "Healthcare Data Analytics Platform",
//       client: "Leading Healthcare Provider",
//       challenge: "Fragmented data across multiple systems limiting insights",
//       solution: "Unified data lake with real-time analytics and ML-powered predictions",
//       results: [
//         "30% improvement in patient outcomes",
//         "50% faster diagnosis times",
//         "HIPAA-compliant infrastructure",
//         "Real-time dashboards for 10,000+ users"
//       ],
//       tech: ["Azure", "Databricks", "Python", "Power BI"]
//     }
//   ];

//   const whyChooseUs = [
//     {
//       icon: Shield,
//       title: "Enterprise-Grade Security",
//       description: "SOC 2 Type II certified with comprehensive security protocols and compliance frameworks."
//     },
//     {
//       icon: Users,
//       title: "Senior Engineering Team",
//       description: "Average 10+ years experience with proven track record at Fortune 500 companies."
//     },
//     {
//       icon: Zap,
//       title: "Proven Methodology",
//       description: "Agile delivery with clear milestones, transparent communication, and measurable outcomes."
//     },
//     {
//       icon: BarChart3,
//       title: "Scalable Solutions",
//       description: "Architecture designed to grow with your business, from startup to enterprise scale."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900">
//       {/* Navigation Bar */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="text-2xl font-bold text-blue-600">DataRadix</div>
//             <div className="hidden md:flex items-center gap-8">
//               <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
//               <a href="#industries" className="text-slate-600 hover:text-blue-600 transition-colors">Industries</a>
//               <a href="#case-studies" className="text-slate-600 hover:text-blue-600 transition-colors">Case Studies</a>
//               <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
//               <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
//                 <CheckCircle className="w-4 h-4" />
//                 Trusted by Fortune 500 Companies
//               </div>
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Enterprise Technology Solutions That Drive Business Growth
//               </h1>
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 We partner with industry leaders to design, build, and scale mission-critical applications and infrastructure. Our proven expertise delivers measurable results.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 group">
//                   Schedule a Consultation
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-semibold">
//                   View Case Studies
//                 </button>
//               </div>
//             </div>
            
//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6">
//               {stats.map((stat, i) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
//                     <Icon className="w-8 h-8 text-blue-600 mb-3" />
//                     <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
//                     <div className="text-sm text-slate-600">{stat.label}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//               Comprehensive Technology Services
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               End-to-end solutions designed to accelerate your digital transformation journey
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, i) => (
//               <div key={i} className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all border border-slate-200 group">
//                 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <div className="space-y-3">
//                   {service.features.map((feature, j) => (
//                     <div key={j} className="flex items-center gap-3">
//                       <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
//                       <span className="text-slate-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
//                   Learn More
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Section */}
//       <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//               Industry Expertise
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Deep domain knowledge across highly regulated and technology-driven sectors
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {industries.map((industry, i) => (
//               <div key={i} className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-blue-600 transition-all group cursor-pointer">
//                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
//                   {industry.name}
//                 </h3>
//                 <p className="text-slate-600 text-sm mb-4 leading-relaxed">
//                   {industry.description}
//                 </p>
//                 <div className="space-y-2">
//                   {industry.capabilities.map((cap, j) => (
//                     <div key={j} className="text-xs text-slate-500 flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
//                       {cap}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies Section */}
//       <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
//               Proven Track Record
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Real results from enterprise engagements
//             </p>
//           </div>

//           <div className="space-y-12">
//             {caseStudies.map((study, i) => (
//               <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 lg:p-12 rounded-2xl border border-slate-200">
//                 <div className="grid lg:grid-cols-2 gap-8">
//                   <div>
//                     <div className="text-sm font-semibold text-blue-600 mb-2">{study.client}</div>
//                     <h3 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h3>
                    
//                     <div className="space-y-4 mb-6">
//                       <div>
//                         <div className="text-sm font-semibold text-slate-700 mb-2">Challenge</div>
//                         <p className="text-slate-600">{study.challenge}</p>
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-slate-700 mb-2">Solution</div>
//                         <p className="text-slate-600">{study.solution}</p>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-2">
//                       {study.tech.map((tech, j) => (
//                         <span key={j} className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm border border-slate-200">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <div className="text-sm font-semibold text-slate-700 mb-4">Results</div>
//                     <div className="space-y-4">
//                       {study.results.map((result, j) => (
//                         <div key={j} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
//                           <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span className="text-slate-700 font-medium">{result}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
//                       Read Full Case Study
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//               Why Leading Companies Choose DataRadix
//             </h2>
//             <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//               We combine technical excellence with business acumen to deliver solutions that matter
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <div key={i} className="text-center">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-4">
//                     <Icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{item.title}</h3>
//                   <p className="text-slate-400 leading-relaxed">{item.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
//             Ready to Transform Your Technology Infrastructure?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Schedule a consultation with our solutions architects to discuss your project requirements
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
//               Schedule Consultation
//             </button>
//             <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
//               Download Capabilities Deck
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="text-2xl font-bold text-blue-400 mb-4">DataRadix</div>
//               <p className="text-slate-400 text-sm">Enterprise technology solutions for digital transformation</p>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Services</h4>
//               <div className="space-y-2 text-sm text-slate-400">
//                 <div>Software Development</div>
//                 <div>Data Engineering</div>
//                 <div>Cloud & DevOps</div>
//                 <div>AI & Machine Learning</div>
//               </div>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Company</h4>
//               <div className="space-y-2 text-sm text-slate-400">
//                 <div>About Us</div>
//                 <div>Careers</div>
//                 <div>Blog</div>
//                 <div>Contact</div>
//               </div>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-4">Contact</h4>
//               <div className="space-y-2 text-sm text-slate-400">
//                 <div>contact@dataradix.com</div>
//                 <div>+1 (555) 123-4567</div>
//                 <div>San Francisco, CA</div>
//               </div>
//             </div>
//           </div>
//           <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
//             © 2026 DataRadix. All rights reserved. | Privacy Policy | Terms of Service
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }