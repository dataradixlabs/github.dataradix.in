import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';
import { SERVICES, PRICING } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Our Services - Comprehensive Tech Solutions" 
        description="Explore our range of technology solutions from custom software development to cloud infrastructure and AI integration."
        keywords="Software Development, Cloud Infrastructure, AI Integration, Web Apps, Mobile Apps, IT Strategy"
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">What We Offer</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none">
              Comprehensive<br />
              <span className="gradient-text">Technology Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From idea to deployment and beyond, we provide end-to-end services
              to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-secondary border-y border-border' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="aspect-square border border-border bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-100" />
                  <service.icon className="w-32 h-32 text-muted-foreground/40 relative z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-secondary mb-6">
                  <service.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">{service.title}</span>
                </div>

                <h2 className="font-display font-bold text-3xl mb-4 leading-tight">
                  {service.tagline}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="space-y-2 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-4 text-muted-foreground">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-border bg-background text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                  >
                    Service Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors"
                  >
                    Start Project
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Pricing</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Flexible Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Choose the plan that fits your project scope and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {PRICING.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative p-8 transition-colors ${
                  plan.popular
                    ? 'bg-foreground text-background'
                    : 'bg-background hover:bg-secondary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-px left-0 right-0 h-0.5 bg-foreground" />
                )}

                <div className="mb-8">
                  {plan.popular && (
                    <span className="inline-block text-xs tracking-widest uppercase border border-background/30 px-2 py-0.5 mb-4 text-background/70">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-end gap-1">
                    <span className="font-display font-bold text-4xl">{plan.price}</span>
                    <span className={`mb-1 text-sm ${plan.popular ? 'text-background/60' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-background' : 'text-foreground'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-background/80' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-3 text-center text-sm font-medium transition-colors border ${
                    plan.popular
                      ? 'border-background bg-background text-foreground hover:bg-secondary hover:text-foreground'
                      : 'border-border bg-transparent text-foreground hover:bg-secondary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-sm text-muted-foreground mb-4">
              Need a custom solution? We're happy to discuss your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            >
              Contact us for a custom quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
