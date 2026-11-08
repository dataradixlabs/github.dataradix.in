import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Star, Play, ArrowRight, Target, Crown } from 'lucide-react';
import { CLIENTS } from '@/app/data';

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-foreground sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium sm:text-xs">{label}</span>
  </div>
);

export function DigitalExcellenceSection() {
  return (
    <section className="relative w-full bg-background text-foreground overflow-hidden border-y border-border">
      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 z-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a72ca2f3-9dd1-4fe4-84ba-fe86468a5237_3840w.webp?w=800&q=80)] bg-cover bg-center opacity-10 grayscale"
        style={{
          maskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 0%, black 70%, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 border border-border bg-secondary px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-muted">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  Industry Leader
                  <Star className="w-3.5 h-3.5 text-foreground fill-foreground" />
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]"
            >
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span><br />
              That Matter
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              We design interfaces that combine beauty with functionality,
              creating seamless experiences that users love and businesses thrive on.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/case-studies"
                className="group inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-primary"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link 
                to="/showreel"
                className="group inline-flex items-center justify-center gap-2 border border-border bg-secondary px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
              >
                <Play className="w-4 h-4 fill-current" />
                Watch Showreel
              </Link>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6">

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden border border-border bg-background p-8 shadow-2xl"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center bg-secondary border border-border">
                    <Target className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-foreground">150+</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-xs tracking-widest uppercase">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="text-foreground font-medium">98%</span>
                  </div>
                  <div className="h-1.5 w-full bg-secondary border border-border">
                    <div className="h-full w-[98%] bg-foreground" />
                  </div>
                </div>

                <div className="h-px w-full bg-border mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center items-center">
                  <StatItem value="5+" label="Years" />
                  <div className="w-px h-8 bg-border mx-auto" />
                  <StatItem value="24/7" label="Support" />
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 border border-border bg-secondary px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full bg-foreground opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 bg-foreground"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 border border-border bg-secondary px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
                    <Crown className="w-3 h-3 text-foreground" />
                    PREMIUM
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Marquee Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden border border-border bg-background py-8"
            >
              <h3 className="mb-6 px-8 text-xs font-medium text-muted-foreground uppercase tracking-widest">Trusted by Industry Leaders</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="flex gap-12 whitespace-nowrap px-4 animate-marquee">
                  {[...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
                    >
                      <client.icon className="h-5 w-5 text-foreground" />
                      <span className="text-sm font-bold text-foreground tracking-tight uppercase">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
