import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { SERVICES } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Service Not Found</h1>
          <Link to="/services" className="text-sm underline underline-offset-4 hover:text-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title={service.title} 
        description={service.description} 
        keywords={`${service.title}, ${service.tech.join(', ')}, IT Services, DataRadix`}
      />
      
      {/* Header */}
      <section className="relative py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 tracking-wide"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-3 px-3 py-1 border border-border bg-background mb-6">
                <service.icon className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{service.title}</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
                {service.tagline}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-square border border-border bg-muted flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-pattern opacity-100" />
              <service.icon className="w-32 h-32 text-muted-foreground/30 relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {service.metrics?.map((metric: any, index: number) => (
              <div key={index} className="bg-background p-10 text-center">
                <div className="font-display font-bold text-4xl mb-2">{metric.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities & Tech */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="font-display font-bold text-3xl mb-10">Core Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features?.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 border border-border bg-secondary/30">
                    <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-3xl mb-10">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {service.tech.map((t: string, index: number) => (
                  <div key={index} className="px-6 py-4 border border-border bg-background hover:border-foreground transition-colors group">
                    <span className="text-sm font-bold tracking-tight">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 border border-border bg-secondary/50">
                <h4 className="font-display font-bold text-sm mb-4">Interested in {service.title}?</h4>
                <p className="text-sm text-muted-foreground mb-6">Let's discuss how our {service.title.toLowerCase()} expertise can help your business grow.</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl mb-4 text-center">Our Process</h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto">
              A structured approach to delivering excellence in every phase of the project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process?.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-background border border-border h-full flex flex-col"
              >
                <div className="text-4xl font-display font-bold text-border mb-6">0{index + 1}</div>
                <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-8">
            Ready to Build Your Next Big Thing?
          </h2>
          <Link
            to="/contact"
            className="px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-primary transition-colors inline-flex items-center gap-3"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
