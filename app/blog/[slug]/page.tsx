import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/data/blogs";
import BlogContent from "@/components/BlogContent";
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
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-14 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge badge-neutral">{post.category}</span>
              <span className="text-body-sm text-neutral-400">{post.readTime} min read</span>
            </div>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">{post.title}</h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed mb-5">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-body-sm text-neutral-400">
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={13} />
                <span>{post.readTime} min read</span>
              </div>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-10 sm:py-14">
        <div className="container-custom">
          <div className="max-w-3xl prose-custom">
            <BlogContent content={post.content} />
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1 min-w-0">
                <h3 className="text-h3 font-bold text-neutral-950 mb-1.5">
                  Want help implementing this?
                </h3>
                <p className="text-body text-neutral-500 leading-relaxed">
                  Our engineers can help you build scalable infrastructure. Let&apos;s discuss your needs.
                </p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-neutral-950 text-white rounded-md text-body-sm font-semibold hover:bg-neutral-800 transition-colors min-h-[44px]"
              >
                Talk to an Engineer
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
