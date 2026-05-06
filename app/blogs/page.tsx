import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/wordpress";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Azure, AI, data engineering, cloud security, and digital transformation from the QuestK2 Technologies team.",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const [allPosts, categories] = await Promise.all([
    getPosts({ per_page: 50 }),
    getCategories(),
  ]);

  const activeCategory = params.category;
  const filteredCategory = categories.find((c) => c.slug === activeCategory);

  const posts = filteredCategory
    ? allPosts.filter((p) => p.categories.includes(filteredCategory.id))
    : allPosts;

  const blogCategories = categories.filter((c) => c.count > 0 && c.slug !== "uncategorized");

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Blog & Resources</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Expert perspectives on Azure, AI security, data engineering, and digital transformation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            <Link
              href="/blogs"
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-blue-700 text-white"
                  : "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
              }`}
            >
              All Posts
            </Link>
            {blogCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blogs?category=${cat.slug}`}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-blue-700 text-white"
                    : "text-slate-600 hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                {cat.name}
                <span className="ml-1 text-xs opacity-70">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No posts found.</p>
              <Link href="/blogs" className="mt-4 inline-block text-blue-700 hover:text-blue-800 font-medium">
                View all posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
