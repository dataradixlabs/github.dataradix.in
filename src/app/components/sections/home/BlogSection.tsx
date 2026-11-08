import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/app/data';

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

export function BlogSection() {
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
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Technical Insights</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
            From the Labs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep dives into distributed systems, reactive architecture, and scalable engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
        >
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link to={`/blog/${post.id}`} className="block group h-full">
                <div className="bg-background hover:bg-secondary transition-colors h-full flex flex-col p-8">
                  <div className="w-12 h-12 border border-border flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:border-foreground transition-colors">
                    <post.icon className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                      <span>{post.category}</span>
                      <span className="w-1 h-1 bg-border rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="group-hover:text-foreground transition-colors flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
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
          className="mt-12 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors group"
          >
            Explore All Articles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
