import { motion } from 'framer-motion';
import { COMPANIES } from '@/app/data';

export function TrustedBySection() {
  return (
    <section className="py-16 border-y border-border bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-muted-foreground mb-12 tracking-[0.3em] uppercase opacity-50">
          Trusted By Leading Companies
        </p>
        
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex items-center gap-24 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...COMPANIES, ...COMPANIES].map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-4 text-muted-foreground grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <company.icon className="w-6 h-6" />
                <span className="font-display font-bold text-sm tracking-widest uppercase">{company.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
