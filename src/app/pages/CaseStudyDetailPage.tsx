import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Calendar, Users, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function CaseStudyDetailPage() {
  const { id } = useParams();
  const study = CASE_STUDIES.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-sm underline underline-offset-4 hover:text-primary">
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title={`${study.title} | ${study.category} Case Study`} 
        description={study.description} 
        ogType="article"
        ogImage={study.image || '/logo.svg'}
        canonicalUrl={`https://dataradix.in/case-studies/${study.id}`}
        keywords={[study.title, study.category, 'Case Study', ...study.tech, 'DataRadix Engineering']}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: study.title, url: `/case-studies/${study.id}` }
        ]}
        schema={{
          '@type': 'Article',
          headline: study.title,
          description: study.description,
          image: study.image ? (study.image.startsWith('http') ? study.image : `https://dataradix.in${study.image}`) : 'https://dataradix.in/logo.svg',
          publisher: {
            '@type': 'Organization',
            name: 'DataRadix',
            url: 'https://dataradix.in',
            logo: {
              '@type': 'ImageObject',
              url: 'https://dataradix.in/logo.svg'
            }
          }
        }}
      />

      {/* Header */}
      <section className="relative py-16 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 tracking-wide"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">{study.category}</p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4 leading-tight">
                {study.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed">{study.tagline}</p>
            </div>

            <div className="space-y-5 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Date</div>
                  <div className="text-sm font-medium">{study.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Team Size</div>
                  <div className="text-sm font-medium">{study.team}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Duration</div>
                  <div className="text-sm font-medium">{study.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="relative py-12 overflow-hidden bg-muted border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video border border-border bg-background flex items-center justify-center overflow-hidden"
          >
            {study.image ? (
              <img
                src={study.image}
                alt={`${study.title} Architecture and Outcomes Overview - ${study.category}`}
                className="w-full h-full object-cover"
                width={1200}
                height={675}
              />
            ) : (
              <study.icon className="w-32 h-32 text-muted-foreground/30 relative z-10" />
            )}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Overview</p>
            <h2 className="font-display font-bold text-2xl mb-5">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Problem</p>
            <h2 className="font-display font-bold text-2xl mb-5">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {study.challenge?.description}
            </p>
            <div className="space-y-2">
              {study.challenge?.points.map((point: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 bg-background border border-border"
                >
                  <div className="w-5 h-5 border border-destructive/40 bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-xs font-bold">✕</span>
                  </div>
                  <span className="text-sm">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Approach</p>
            <h2 className="font-display font-bold text-2xl mb-5">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {study.solution?.description}
            </p>
            <div className="space-y-2 mb-10">
              {study.solution?.points.map((point: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-start gap-3 p-4 bg-secondary border border-border"
                >
                  <CheckCircle className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="font-display font-semibold text-xs tracking-widest uppercase mb-4 text-muted-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 border border-border bg-secondary text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 relative overflow-hidden bg-secondary border-y border-border">
        <div className="absolute inset-0 grid-pattern opacity-100" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Outcomes</p>
            <h2 className="font-display font-bold text-3xl mb-2">Results</h2>
            <p className="text-muted-foreground">
              Measurable impact that exceeded expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border mb-12">
            {study.detailResults?.metrics.map((metric: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="text-center p-8 bg-background"
              >
                <div className="font-display font-bold text-3xl mb-2">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-wide uppercase">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          {study.detailResults?.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto p-8 sm:p-12 bg-background border border-border"
            >
              <p className="text-muted-foreground leading-relaxed mb-8 italic text-lg">
                "{study.detailResults.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border bg-muted flex items-center justify-center text-sm font-bold">
                  {study.detailResults.testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">
                    {study.detailResults.testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {study.detailResults.testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border border-border hover:bg-secondary text-foreground text-sm font-medium transition-colors"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
