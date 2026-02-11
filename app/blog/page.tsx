import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blogs";

export const metadata = {
  title: "Blog - DataRadix",
  description: "Technical deep-dives, engineering best practices, and insights on building scalable technology infrastructure.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="section-label">Engineering insights</p>
            <h1 className="text-display-sm font-bold text-neutral-950 mb-4 text-balance">
              Deep-dives from the trenches
            </h1>
            <p className="text-body-lg text-neutral-500 leading-relaxed">
              Technical articles written by engineers who build production systems at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-custom">

          {/* Featured post */}
          {featured && (
            <div className="mb-8 sm:mb-10">
              <Link
                href={`/blog/${featured.slug}`}
                className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge badge-vivid">Featured</span>
                    <span className="badge badge-neutral">{featured.category}</span>
                    <span className="text-body-sm text-neutral-400">{featured.readTime} min read</span>
                  </div>
                  <h2 className="text-h2 font-bold text-neutral-950 mb-2 group-hover:text-neutral-700 transition-colors text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-body text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-body-sm font-medium text-neutral-500 group-hover:text-neutral-950 transition-colors">
                    Read article
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-5 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="badge badge-neutral">{post.category}</span>
                  <span className="text-body-sm text-neutral-400">{post.readTime} min</span>
                </div>
                <h3 className="text-h4 font-semibold text-neutral-950 mb-2 line-clamp-2 group-hover:text-neutral-700 transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-body-sm text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-body-sm font-medium text-neutral-400 group-hover:text-neutral-700 transition-colors mt-auto">
                  Read article
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
