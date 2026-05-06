import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getPageBySlug,
  getPages,
  getExcerpt,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  formatDate,
} from "@/lib/wordpress";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const pages = await getPages();
  const explicitSlugs = new Set([
    "about",
    "contact",
    "blogs",
    "partners",
    "careers",
    "promptvault",
    "home",
    "g360-technologiess",
    "home-duplicate-1317",
  ]);
  return pages
    .filter((p) => !explicitSlugs.has(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: "Page Not Found" };

  const excerpt = getExcerpt(page.excerpt?.rendered ?? "", 160);
  const imageUrl = getFeaturedImageUrl(page);

  return {
    title: page.title.rendered,
    description: excerpt || undefined,
    openGraph: {
      title: page.title.rendered,
      description: excerpt || undefined,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) notFound();

  const imageUrl = getFeaturedImageUrl(page);
  const imageAlt = getFeaturedImageAlt(page);

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">{page.title.rendered}</span>
          </nav>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          {page.date && (
            <p className="text-slate-400 text-sm mt-3">{formatDate(page.date)}</p>
          )}
        </div>
      </section>

      {/* Featured Image */}
      {imageUrl && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-0">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {page.content?.rendered ? (
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-slate-900
                prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-md
                prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded
                prose-blockquote:border-l-blue-500"
              dangerouslySetInnerHTML={{ __html: page.content.rendered }}
            />
          ) : (
            <p className="text-slate-500">No content available for this page.</p>
          )}

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Learn More?</h2>
          <p className="text-slate-600 mb-6">
            Contact our team to discuss how QuestK2 can help your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
