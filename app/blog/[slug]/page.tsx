import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/data/blogs";
import InlineCTA from "@/components/cta/InlineCTA";
import BlogContent, { BlogContentCTA } from "@/components/BlogContent";
import { Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog Post Not Found - DataRadix",
    };
  }
  return {
    title: `${post.title} - DataRadix Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-small text-text-secondary mb-2 sm:mb-3">{post.category}</div>
            <h1 className="text-h1 font-semibold text-text-primary mb-3 sm:mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-small text-text-secondary">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>{post.readTime} min read</span>
              </div>
              <div>
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content - Responsive Editorial Width */}
      <article className="py-10 sm:py-12 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <BlogContent content={post.content} />
          </div>
        </div>
      </article>

      {/* Inline CTA - Responsive */}
      <InlineCTA
        headline="Want help implementing this?"
        description="Our engineers can help you build scalable data infrastructure. Let's discuss your specific needs."
        ctaText="Talk to Our Engineers"
        ctaHref="/contact"
      />

      {/* Sidebar CTA - Responsive */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-bg-base border border-border rounded-soft p-6 sm:p-8">
              <h3 className="text-lg sm:text-h3 font-semibold text-text-primary mb-3 sm:mb-4">
                Is Your Tech Stack Ready to Scale?
              </h3>
              <p className="text-body text-text-secondary mb-6 sm:mb-8">
                Download our free Engineering Readiness Checklist to evaluate your architecture.
              </p>
              <BlogContentCTA />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
