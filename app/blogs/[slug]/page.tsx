import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getPostBySlug,
  getPosts,
  formatDate,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getExcerpt,
} from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts({ per_page: 100 });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const imageUrl = getFeaturedImageUrl(post);
  const excerpt = getExcerpt(post.excerpt.rendered, 160);

  return {
    title: post.title.rendered,
    description: excerpt,
    openGraph: {
      title: post.title.rendered,
      description: excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPostBySlug(slug),
    getPosts({ per_page: 3, per_page_exclude: slug } as Record<string, string | number>),
  ]);

  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);
  const imageAlt = getFeaturedImageAlt(post);
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 truncate max-w-[200px]">{post.title.rendered}</span>
          </nav>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blogs?category=${cat.slug}`}
                  className="text-xs font-medium text-blue-300 bg-blue-900/40 border border-blue-700/40 px-3 py-1 rounded-full hover:bg-blue-900/70 transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <time className="text-slate-400 text-sm">{formatDate(post.date)}</time>
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-md
            prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded
            prose-blockquote:border-l-blue-500 prose-blockquote:text-slate-600"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.filter((p) => p.slug !== slug).length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts
                .filter((p) => p.slug !== slug)
                .slice(0, 3)
                .map((p) => {
                  const img = getFeaturedImageUrl(p);
                  return (
                    <Link
                      key={p.id}
                      href={`/blogs/${p.slug}`}
                      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      {img && (
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={img}
                            alt={getFeaturedImageAlt(p)}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-xs text-slate-400 mb-1">{formatDate(p.date)}</p>
                        <h3
                          className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
