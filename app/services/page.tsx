import ServiceAccordion from "@/components/ServiceAccordion";
import FinalCTASection from "@/components/cta/FinalCTASection";

export const metadata = {
  title: "Services - DataRadix",
  description: "Custom software development, data engineering, cloud & DevOps, AI & automation, and dedicated engineering teams.",
};

export default function Services() {
  // const services = [
  //   {
  //     id: "custom-software",
  //     title: "Custom Software Development",
  //     pain: "You need software that solves your specific business problems, not generic solutions that require workarounds. Off-the-shelf tools don't fit your workflows, and building in-house is taking too long.",
  //     approach: "We build production-ready applications using modern frameworks and best practices. From MVPs to enterprise systems, we deliver software that your team can maintain and extend. We use TypeScript, React, Node.js, Python, and other proven technologies.",
  //     outcome: "You get software that fits your business, ships faster, and scales with growth. Your team can maintain it because we write clean, documented code and transfer knowledge.",
  //   },
  //   {
  //     id: "data-engineering",
  //     title: "Data Engineering & Analytics",
  //     pain: "Your data is scattered across systems, analytics queries are slow, and you can't get real-time insights. Data quality issues cause bad decisions, and your data team spends more time firefighting than building.",
  //     approach: "We build modern data platforms with event streaming, data lakes, and cloud data warehouses. We use Kafka, Spark, Snowflake, dbt, and other tools to create pipelines that scale. Real-time and batch processing, automated quality checks, and governance built in.",
  //     outcome: "You get fast, reliable analytics on clean data. Real-time dashboards, automated reporting, and a foundation for ML. Your data team can focus on insights, not infrastructure.",
  //   },
  //   {
  //     id: "cloud-devops",
  //     title: "Cloud & DevOps",
  //     pain: "Deployments are risky, infrastructure costs are unpredictable, and scaling requires manual intervention. Your team spends too much time on ops instead of building features.",
  //     approach: "We design cloud-native architectures on AWS, GCP, or Azure. Infrastructure as code with Terraform, container orchestration with Kubernetes, CI/CD pipelines that deploy safely. Auto-scaling, monitoring, and observability built in.",
  //     outcome: "You get infrastructure that scales automatically, deploys safely, and costs less. Your team can ship features faster because ops is automated. You can handle traffic spikes without manual intervention.",
  //   },
  //   {
  //     id: "ai-automation",
  //     title: "AI & Automation",
  //     pain: "Manual processes slow you down, and you're missing opportunities to automate. You want to use AI/ML but don't have the expertise or infrastructure.",
  //     approach: "We build intelligent automation and ML models that improve efficiency. From recommendation engines to fraud detection, we design systems that learn and adapt. We use proven ML frameworks and deploy models that scale.",
  //     outcome: "You get automation that reduces manual work and ML models that improve outcomes. Better customer experiences, lower costs, and new capabilities that weren't possible before.",
  //   },
  //   {
  //     id: "dedicated-teams",
  //     title: "Dedicated Engineering Teams",
  //     pain: "You need to scale your engineering team but hiring is slow and expensive. You need senior engineers who can contribute immediately, not months of onboarding.",
  //     approach: "We provide senior engineers who integrate with your team. They work in your codebase, attend your standups, and deliver features. We handle recruiting, so you get vetted engineers who fit your culture and tech stack.",
  //     outcome: "You get a team that ships features, not consultants who write reports. Faster time to market, lower hiring risk, and engineers who become part of your team.",
  //   },
  // ];


  const services = [
    {
      id: "backend-development",
      title: "Backend Development",
      pain: "Your APIs are slow, your database queries take forever, and scaling is becoming a nightmare. Backend architecture is complex, and you need engineers who can build systems that handle millions of requests without breaking.",
      approach: "We architect and build robust backend systems using Node.js, Python, Go, and Java. Microservices architecture, event-driven design, and API-first development. We optimize database performance, implement caching strategies, and design systems for horizontal scaling.",
      outcome: "You get backend infrastructure that's fast, reliable, and scales effortlessly. APIs that respond in milliseconds, databases optimized for your workload, and architecture that grows with your business.",
      category: "Development"
    },
    {
      id: "web-development",
      title: "Web Development",
      pain: "You need a modern web application that's fast, responsive, and provides an excellent user experience. Your current site feels outdated, loads slowly, or doesn't work well on mobile devices.",
      approach: "We build high-performance web applications using React, Next.js, Vue, and TypeScript. Server-side rendering for SEO, progressive web apps for mobile experience, and component-based architecture for maintainability. We focus on performance, accessibility, and user experience.",
      outcome: "You get a blazing-fast web application that users love. Excellent Core Web Vitals scores, seamless mobile experience, and a codebase that's easy to maintain and extend.",
      category: "Development"
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      pain: "You have data but don't know how to turn it into intelligent systems. You want to use AI/ML for recommendations, predictions, or automation but lack the expertise to build production-ready models that actually work.",
      approach: "We build end-to-end ML systems from data preparation to model deployment. Natural language processing, computer vision, recommendation engines, and predictive analytics. We use PyTorch, TensorFlow, scikit-learn, and deploy models with MLflow and Kubernetes. Focus on models that improve business outcomes, not just accuracy metrics.",
      outcome: "You get ML models that deliver measurable business value. Better recommendations increase revenue, predictive models reduce costs, and automation eliminates manual work. Models that are monitored, maintained, and improve over time.",
      category: "AI & Data"
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      pain: "Your data is scattered across systems, reports take hours to generate, and insights arrive too late to act on. Data quality issues lead to bad decisions, and your team spends more time finding data than analyzing it.",
      approach: "We build modern data platforms with real-time pipelines, data warehouses, and analytics dashboards. Using Snowflake, BigQuery, dbt, Airflow, and BI tools like Tableau and Looker. Data governance, quality monitoring, and self-service analytics so teams can answer their own questions.",
      outcome: "You get clean, accessible data and fast analytics. Real-time dashboards, automated reports, and a single source of truth. Your team makes data-driven decisions quickly because insights are always available.",
      category: "AI & Data"
    },
    {
      id: "qa-automation",
      title: "QA Automation",
      pain: "Manual testing is slow, expensive, and error-prone. Bugs slip into production, testing becomes a bottleneck, and you can't ship features fast enough. You need automated testing but don't have the expertise to build it.",
      approach: "We implement comprehensive test automation using Selenium, Cypress, Playwright, and Postman for APIs. Unit tests, integration tests, and end-to-end tests that run on every commit. Visual regression testing, performance testing, and security scanning integrated into CI/CD pipelines.",
      outcome: "You ship faster with confidence. Automated tests catch bugs before they reach production, deployments become safer, and your QA team focuses on exploratory testing instead of repetitive manual checks.",
      category: "Quality & Process"
    },
    {
      id: "qa-e2e-process",
      title: "QA End-to-End Process",
      pain: "Your testing process is ad-hoc and inconsistent. There's no clear strategy, test coverage is unknown, and quality suffers. You need a comprehensive QA process that covers planning, execution, and continuous improvement.",
      approach: "We establish complete QA processes from test strategy to execution. Test planning, requirement analysis, test case design, defect management, and regression testing. We implement test management tools, define quality metrics, and create documentation. Both manual and automated testing strategies aligned with your development workflow.",
      outcome: "You get predictable quality and fewer production bugs. Clear testing strategy, comprehensive test coverage, and metrics that show quality trends. Your team knows exactly what to test and when.",
      category: "Quality & Process"
    },
    {
      id: "mvp-development",
      title: "MVP Development",
      pain: "You have a product idea but need to validate it quickly without burning through your entire budget. Building a full product takes too long and risks wasting resources on features users don't want.",
      approach: "We rapidly build minimum viable products that validate your core hypothesis. Focus on essential features that solve the main problem. Modern tech stack for fast development, user analytics from day one, and architecture that allows evolution. We help define what's truly minimum and viable, not just minimum.",
      outcome: "You launch in weeks, not months. Get real user feedback quickly, validate product-market fit with minimal investment, and iterate based on actual usage data. A solid foundation that scales when you're ready.",
      category: "Product"
    },
    {
      id: "cloud-devops",
      title: "Cloud & DevOps",
      pain: "Deployments are risky, infrastructure costs are unpredictable, and scaling requires manual intervention. Your team spends too much time on ops instead of building features.",
      approach: "We design cloud-native architectures on AWS, GCP, or Azure. Infrastructure as code with Terraform, container orchestration with Kubernetes, CI/CD pipelines that deploy safely. Auto-scaling, monitoring, and observability built in.",
      outcome: "You get infrastructure that scales automatically, deploys safely, and costs less. Your team can ship features faster because ops is automated. You can handle traffic spikes without manual intervention.",
      category: "Infrastructure"
    },
    {
      id: "dedicated-teams",
      title: "Dedicated Engineering Teams",
      pain: "You need to scale your engineering team but hiring is slow and expensive. You need senior engineers who can contribute immediately, not months of onboarding.",
      approach: "We provide senior engineers who integrate with your team. They work in your codebase, attend your standups, and deliver features. We handle recruiting, so you get vetted engineers who fit your culture and tech stack.",
      outcome: "You get a team that ships features, not consultants who write reports. Faster time to market, lower hiring risk, and engineers who become part of your team.",
      category: "Team Augmentation"
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">What we offer</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Engineering services that move at your speed
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              We embed senior engineers directly into your team. From backend systems to full-stack products, we build infrastructure that holds up at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services accordion */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">
          <ServiceAccordion services={services} />
        </div>
      </section>

      {/* CTA callout */}
      <section className="py-12 sm:py-14 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-h2 font-bold text-neutral-950 mb-2 text-balance">
                Not sure which service fits?
              </h2>
              <p className="text-body text-neutral-500 leading-relaxed">
                Get a free technical assessment. We review your situation and recommend the best path forward — no commitment required.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors min-h-[44px]"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
