import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';
import { TIMELINE, TEAM, VALUES, STATS } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="About Us - Our Story and Mission" 
        description="Learn about DataRadix's journey since 2010, our mission to empower businesses with innovative technology, and the talented team behind our success."
        keywords="DataRadix Team, Company Mission, IT Consulting History, Tech Innovation Story"
      />
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">About DataRadix</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none">
              Building the Future of<br />
              <span className="gradient-text">Digital Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Since 2010, we've been transforming businesses through technology.
              Our passion is turning complex challenges into elegant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square border border-border bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-100" />
                <Rocket className="w-32 h-32 text-foreground relative z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-display font-bold text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  DataRadix was born from a simple belief: technology should empower businesses,
                  not complicate them. In 2010, our founder Alex Rivera assembled a team of
                  passionate engineers and designers who shared this vision.
                </p>
                <p>
                  What started as a small consulting firm has grown into a full-service technology
                  partner, serving clients from innovative startups to Fortune 500 enterprises.
                  We've delivered over 200 successful projects across web, mobile, cloud, and AI.
                </p>
                <p>
                  Today, our team of 50+ experts continues to push boundaries, staying ahead of
                  technological trends to deliver solutions that drive real business value. We're
                  not just developers—we're strategic partners invested in your success.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-background"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Mission</p>
              <h2 className="font-display font-bold text-2xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To empower businesses with innovative technology solutions that drive growth,
                efficiency, and competitive advantage. We believe in building software that
                doesn't just work—it transforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-background"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-foreground" />
              </div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Vision</p>
              <h2 className="font-display font-bold text-2xl mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To be the most trusted technology partner for businesses worldwide, recognized
                for our innovation, expertise, and commitment to client success. We envision a
                future where technology and humanity work in perfect harmony.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-8 bg-background"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-base mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">History</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground">
              Milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="space-y-0">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-stretch border-b border-border last:border-b-0"
              >
                <div className="flex-shrink-0 w-24 py-6 pr-6 text-right border-r border-border">
                  <span className="font-display font-bold text-sm text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <div className="flex items-center px-6 py-6 flex-1">
                  <p className="text-sm leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">People</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: 'var(--muted)' }}
                className="group p-6 bg-background text-center transition-colors"
              >
                <div className="w-16 h-16 border border-border bg-muted flex items-center justify-center text-sm font-bold mx-auto mb-4 group-hover:border-foreground transition-colors">
                  {member.avatar}
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 tracking-wide">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="text-center p-10 bg-background"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-4 mx-auto">
                  <stat.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="font-display font-bold text-4xl mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
