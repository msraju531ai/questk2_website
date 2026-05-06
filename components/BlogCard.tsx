import Link from "next/link";
import Image from "next/image";
import { formatDate, getExcerpt } from "@/lib/wordpress";
import type { WPPost } from "@/types/wordpress";

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl =
    featuredImage?.media_details?.sizes?.["medium_large"]?.source_url ??
    featuredImage?.source_url;
  const categories = post._embedded?.["wp:term"]?.[0] ?? [];

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      {/* Featured Image */}
      <div className="relative h-48 bg-slate-100 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={featuredImage?.alt_text ?? post.title.rendered}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((cat) => (
              <span
                key={cat.id}
                className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-slate-900 font-semibold text-base mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
          <Link href={`/blogs/${post.slug}`}>{post.title.rendered}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {getExcerpt(post.excerpt.rendered, 120)}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <time className="text-xs text-slate-400">{formatDate(post.date)}</time>
          <Link
            href={`/blogs/${post.slug}`}
            className="text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
