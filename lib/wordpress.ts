import type { WPPage, WPPost, WPCategory, WPMedia } from "@/types/wordpress";

const WP_BASE_URL =
  process.env.NEXT_PUBLIC_WP_API_URL || "https://questk2.com/wp-json/wp/v2";

async function fetchWP<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${WP_BASE_URL}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`WP API error ${res.status} for /${endpoint}`);
  }

  return res.json() as Promise<T>;
}

export async function getPages(): Promise<WPPage[]> {
  try {
    return await fetchWP<WPPage[]>("pages", {
      per_page: 100,
      status: "publish",
      _embed: 1,
    });
  } catch {
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const pages = await fetchWP<WPPage[]>("pages", { slug, _embed: 1 });
    return pages[0] ?? null;
  } catch {
    return null;
  }
}

export async function getPosts(
  params?: Record<string, string | number>
): Promise<WPPost[]> {
  try {
    return await fetchWP<WPPost[]>("posts", {
      per_page: 20,
      status: "publish",
      _embed: 1,
      ...params,
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const posts = await fetchWP<WPPost[]>("posts", { slug, _embed: 1 });
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    return await fetchWP<WPCategory[]>("categories", { per_page: 100 });
  } catch {
    return [];
  }
}

export async function getPostsByCategory(
  categoryId: number,
  params?: Record<string, string | number>
): Promise<WPPost[]> {
  try {
    return await fetchWP<WPPost[]>("posts", {
      categories: categoryId,
      per_page: 20,
      _embed: 1,
      ...params,
    });
  } catch {
    return [];
  }
}

export async function getMedia(id: number): Promise<WPMedia | null> {
  try {
    return await fetchWP<WPMedia>(`media/${id}`);
  } catch {
    return null;
  }
}

export function getFeaturedImageUrl(
  post: WPPost | WPPage
): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return (
    media.media_details?.sizes?.["medium_large"]?.source_url ??
    media.media_details?.sizes?.["large"]?.source_url ??
    media.source_url
  );
}

export function getFeaturedImageAlt(post: WPPost | WPPage): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? "";
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

export function getExcerpt(excerpt: string, length = 160): string {
  const text = stripHtml(excerpt);
  const trimmed = text.trim();
  return trimmed.length > length ? trimmed.slice(0, length) + "…" : trimmed;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
