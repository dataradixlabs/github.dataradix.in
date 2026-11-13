import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title="Insights & Tech Trends - Our Blog" 
        description="Expert perspectives on software development, cloud architecture, AI, and digital transformation from the DataRadix team."
        keywords="Tech Blog, Software Engineering, AI Trends, Cloud Computing Insights, Digital Transformation"
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
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Blog</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-none">
              Insights &<br />
              <span className="gradient-text">Tech Trends</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Expert perspectives on software development, cloud architecture,
              AI, and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Featured</p>
            <h2 className="font-display font-bold text-2xl">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Link to={`/blog/${post.id}`} className="block group h-full">
                  <div className="bg-background hover:bg-muted transition-colors overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-[16/9] bg-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-pattern opacity-100" />
                          <post.icon className="w-24 h-24 text-muted-foreground/30 relative z-10" />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs text-muted-foreground tracking-widest uppercase border border-border px-2 py-0.5">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 border border-border bg-muted flex items-center justify-center text-xs font-bold">
                            {post.author.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-xs">{post.author.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs font-medium">
                          Read
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Archive</p>
            <h2 className="font-display font-bold text-2xl">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.id}`} className="block group h-full">
                  <div className="bg-background hover:bg-secondary transition-colors overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-pattern opacity-100" />
                          <post.icon className="w-16 h-16 text-muted-foreground/30 relative z-10" />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground tracking-widest uppercase border border-border px-2 py-0.5">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-xs text-muted-foreground mb-4 flex-1 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 pt-4 border-t border-border">
                        <div className="w-7 h-7 border border-border bg-muted flex items-center justify-center text-[10px] font-bold">
                          {post.author.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-xs truncate">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">{post.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Newsletter</p>
            <h2 className="font-display font-bold text-3xl mb-4">
              Stay in the Loop
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Subscribe to our newsletter for the latest insights, tutorials, and tech news.
            </p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
              />
              <button className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors border border-foreground">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
