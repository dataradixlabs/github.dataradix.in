import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/app/data';

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

export function ServicesSection() {
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
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative bg-background group"
            >
              <Link to={`/services/${service.id}`} className="block p-10 h-full hover:bg-secondary transition-colors">
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:border-foreground transition-colors">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details <ArrowRight className="w-3 h-3" />
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
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary transition-colors text-sm font-medium"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
