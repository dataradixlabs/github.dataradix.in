import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Spotlight } from '@/app/components/ui/spotlight';
import { SplineScene } from '@/app/components/ui/spline';

export function Interactive3DSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full h-[500px] bg-secondary/30 relative overflow-hidden border-border rounded-none">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
          />

          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Innovation</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
                  Interactive <br />
                  <span className="gradient-text">3D Experiences</span>
                </h2>
                <p className="text-muted-foreground max-w-lg leading-relaxed">
                  We bring your digital products to life with immersive 3D scenes.
                  Create engaging experiences that capture user attention and
                  differentiate your brand in a crowded digital landscape.
                </p>
                <div className="mt-8">
                  <Link
                    to="/3d-capabilities"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                  >
                    Explore our 3D capabilities
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative bg-muted/50">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
