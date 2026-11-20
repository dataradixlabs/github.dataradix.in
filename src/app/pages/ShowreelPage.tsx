import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function ShowreelPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      <SEOManager 
        title="Our Showreel - Visual Journey of Excellence" 
        description="Watch our 2026 showreel capturing a decade of digital excellence, from web innovation to cloud scale."
        keywords="DataRadix Showreel, Video Portfolio, Tech Excellence, Visual Storytelling, 2026 Highlights"
      />

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlaying(false)}
          >
            <div 
              className="relative w-full max-w-5xl aspect-video bg-black border border-white/20 shadow-2xl rounded-none overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/80 border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                aria-label="Close Showreel"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-border bg-secondary">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">Visual Journey</p>
            <h1 className="font-display font-bold text-6xl md:text-8xl mb-8 leading-none tracking-tighter">
              2026 <span className="gradient-text">Showreel</span>
            </h1>
            
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-24 h-24 rounded-full border border-foreground flex items-center justify-center group hover:bg-foreground transition-all duration-500 mx-auto cursor-pointer"
              aria-label="Play 2026 Showreel"
            >
              <Play className="w-8 h-8 text-foreground group-hover:text-background transition-colors fill-current translate-x-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl mb-8 leading-tight">
              A Decade of <br />Digital Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our showreel captures the essence of what we do: blending rigorous technical engineering with world-class design aesthetics. From complex FinTech platforms to immersive 3D interfaces, this is a celebration of the products we've built for our global partners.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <span className="font-display font-bold text-lg">01</span>
                <span className="text-sm font-medium uppercase tracking-widest">Web Innovation</span>
              </div>
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <span className="font-display font-bold text-lg">02</span>
                <span className="text-sm font-medium uppercase tracking-widest">Mobile Mastery</span>
              </div>
              <div className="flex items-center gap-4 border-b border-border pb-4">
                <span className="font-display font-bold text-lg">03</span>
                <span className="text-sm font-medium uppercase tracking-widest">Cloud Scale</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setIsPlaying(true)}
            className="aspect-video bg-muted border border-border relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 grid-pattern opacity-100" />
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                 <Play className="w-6 h-6 text-foreground fill-current translate-x-0.5" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl mb-8">Ready to be our next success story?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
               Start a Project
             </Link>
             <Link to="/case-studies" className="px-8 py-4 border border-border bg-background text-foreground font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-colors">
               Explore Portfolio
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
