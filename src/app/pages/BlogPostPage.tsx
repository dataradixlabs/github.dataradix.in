import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/app/data';
import { SEOManager } from '@/app/components/ui/SEOManager';

export function BlogPostPage() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-sm underline underline-offset-4 hover:text-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <SEOManager 
        title={post.title} 
        description={post.excerpt} 
        keywords={`${post.title}, ${post.category}, Tech Blog, ${post.author.name}, DataRadix Insights`}
      />

      {/* Header */}
      <section className="relative py-12 border-b border-border bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8 tracking-wide"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs text-muted-foreground tracking-widest uppercase border border-border px-2 py-0.5">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-border pt-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 border border-border bg-muted flex items-center justify-center text-xs font-bold">
                  {post.author.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm">{post.author.name}</div>
                  <div className="text-xs text-muted-foreground">{post.author.bio}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-8 h-8 border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 border border-border bg-background hover:bg-muted flex items-center justify-center transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative py-12 overflow-hidden bg-muted border-b border-border">
        <div className="absolute inset-0 grid-pattern opacity-100" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video border border-border bg-background flex items-center justify-center overflow-hidden"
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <post.icon className="w-32 h-32 text-muted-foreground/30 relative z-10" />
            )}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Continue Reading</p>
            <h2 className="font-display font-bold text-2xl mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {post.relatedPosts.map((related: any, index: number) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={`/blog/${related.id}`}
                    className="block p-6 bg-background hover:bg-muted transition-colors group"
                  >
                    <h3 className="font-display font-semibold text-base mb-3 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-medium">
                      Read Article
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Newsletter</p>
            <h2 className="font-display font-bold text-3xl mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Get more insights like this delivered to your inbox.
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
