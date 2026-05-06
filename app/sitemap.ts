import type { MetadataRoute } from "next";
import { getPages, getPosts } from "@/lib/wordpress";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://questk2.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getPages(), getPosts({ per_page: 100 })]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${BASE_URL}/partners`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/promptvault`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cloud-ai-securty`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/analytics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/workplace`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/licensing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/azure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/modernize`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const explicitSlugs = new Set([
    "about", "contact", "blogs", "partners", "careers", "promptvault",
    "home", "g360-technologiess", "home-duplicate-1317",
    "cloud-ai-securty", "analytics", "workplace", "licensing", "azure", "modernize",
  ]);

  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => !explicitSlugs.has(p.slug))
    .map((page) => ({
      url: `${BASE_URL}/${page.slug}`,
      lastModified: new Date(page.modified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...pageRoutes, ...postRoutes];
}
