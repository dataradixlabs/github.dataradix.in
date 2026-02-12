import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blogs";

export const metadata = {
  title: "Blog - DataRadix",
  description: "Technical deep-dives, engineering best practices, and insights on building scalable technology infrastructure.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero - Responsive */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-h1 font-semibold text-text-primary mb-4 sm:mb-6">Blog</h1>
            <p className="text-body text-text-secondary">
              Technical deep-dives and engineering best practices
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts - Responsive Editorial List */}
      <section className="py-12 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block pb-6 sm:pb-8 border-b border-border last:border-0 hover:border-text-primary transition-colors"
              >
                <div className="text-small text-text-secondary mb-2">{post.category}</div>
                <h3 className="text-h2 font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-body text-text-secondary mb-3 sm:mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-small text-text-secondary">
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center text-small text-accent font-medium">
                    Read article <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
