import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Play } from 'lucide-react';

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-foreground opacity-40"></span>
              <span className="relative inline-flex h-2 w-2 bg-foreground"></span>
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Trusted by 200+ companies worldwide</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-none">
            Transform Your Business
            <br />
            <span className="gradient-text">with Cutting-Edge Tech</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We build scalable digital solutions that drive growth. From web and mobile apps
            to cloud infrastructure and AI—partner with experts who deliver excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              to="/case-studies"
              className="px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/showreel"
              className="px-10 py-5 border border-border bg-background/50 backdrop-blur-sm text-foreground font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Showreel
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto border-t border-border pt-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-3xl sm:text-4xl mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
