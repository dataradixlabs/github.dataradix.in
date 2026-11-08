import { motion } from 'framer-motion';
import { Box, Cpu, Zap, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function Capabilities3DPage() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-background">
      <SEOManager 
        title="3D Capabilities - Immersive Spatial Interfaces" 
        description="Experience the future of spatial computing with our immersive 3D web interfaces using WebGL, Three.js, and Spline."
        keywords="WebGL, Three.js, Spline, Spatial Computing, 3D Web Design, Immersive Interfaces"
      />
      {/* Hero */}
      <section className="relative py-32 border-b border-border bg-secondary overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 tracking-wide">
              <ArrowLeft className="w-3 h-3" /> Back
            </Link>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Innovation Lab</p>
            <h1 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-none tracking-tighter">
              Immersive <span className="gradient-text">Spatial Interfaces</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We push the boundaries of the browser by integrating high-performance 3D environments into web applications. Experience the future of spatial computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            {
              icon: Cpu,
              title: 'WebGL & Three.js',
              desc: 'Leveraging low-level graphics APIs to deliver hardware-accelerated 3D rendering directly in the browser.'
            },
            {
              icon: Zap,
              title: 'Spline Integration',
              desc: 'Seamlessly embedding complex interactive scenes with real-time physics and state management.'
            },
            {
              icon: Eye,
              title: 'Spatial UI/UX',
              desc: 'Designing intuitive navigation patterns for 3D environments that feel natural to the end user.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-12 hover:bg-secondary/30 transition-colors"
            >
              <item.icon className="w-8 h-8 mb-6 text-foreground" />
              <h3 className="font-display font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-24 bg-secondary border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="aspect-square bg-background border border-border flex items-center justify-center">
               <Box className="w-32 h-32 text-muted-foreground/20 animate-pulse" />
            </div>
            <div>
              <h2 className="font-display font-bold text-4xl mb-8 leading-tight">
                Beyond 2D <br />Boundaries
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Most websites are flat. We add depth. By utilizing ray-casting, shadow mapping, and complex geometry, we create interfaces that respond to the user's presence and movement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block mb-1">Performance Optimized</span>
                      <span className="text-xs text-muted-foreground">Dynamic LOD (Level of Detail) to ensure 60FPS on any device.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center mt-1">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    </div>
                    <div>
                      <span className="text-sm font-bold block mb-1">Interactive Physics</span>
                      <span className="text-xs text-muted-foreground">Rigid body dynamics and soft body simulations for realistic interaction.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-border bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display font-bold text-4xl mb-8">Ready for a new dimension?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-xs hover:bg-primary transition-colors">
            Start Your 3D Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
