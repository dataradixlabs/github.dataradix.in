"use client";

import { GrainGradient } from '@paper-design/shaders-react';
import { Button } from '@/app/components/ui/button';
import { motion } from 'framer-motion';

interface GrainHeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick?: () => void;
}

export default function GrainHeroSection({
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
}: GrainHeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-y border-border bg-black">
      {/* Monochromatic Grain Gradient */}
      <GrainGradient
        colors={["#000000", "#171717", "#0a0a0a", "#262626"]}
        grainOpacity={0.15}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />
      
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight font-mono uppercase"
        >
          {title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl text-lg sm:text-xl text-neutral-400 mx-auto mb-10 font-mono leading-relaxed"
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="text-sm uppercase tracking-widest px-10 py-6 bg-white text-black hover:bg-neutral-200 transition-all duration-300 font-bold"
          >
            {ctaLabel}
          </Button>
        </motion.div>
      </div>

      {/* Decorative Corner Borders */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20 m-8" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20 m-8" />
    </section>
  );
}
