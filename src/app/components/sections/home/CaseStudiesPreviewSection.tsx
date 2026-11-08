import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/app/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function CaseStudiesPreviewSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real results for real businesses across industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
        >
          {CASE_STUDIES.slice(0, 3).map((study) => (
            <motion.div key={study.id} variants={itemVariants}>
              <Link to={`/case-studies/${study.id}`} className="block group h-full">
                <div className="bg-background hover:bg-secondary transition-colors overflow-hidden h-full flex flex-col">
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                    <div className="absolute inset-0 grid-pattern opacity-100" />
                    <study.icon className="w-16 h-16 text-muted-foreground/30 relative z-10" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
                      {study.category}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                      {study.description}
                    </p>
                    <div className="text-xs font-medium text-foreground border-t border-border pt-4 mt-auto">
                      {study.results.metric1.value} {study.results.metric1.label}, {study.results.metric2.value} {study.results.metric2.label}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors text-sm font-medium"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
