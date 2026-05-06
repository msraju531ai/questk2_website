export interface WPTitle {
  rendered: string;
}

export interface WPContent {
  rendered: string;
  protected: boolean;
}

export interface WPExcerpt {
  rendered: string;
  protected: boolean;
}

export interface WPMediaSize {
  source_url: string;
  width: number;
  height: number;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes?: Record<string, WPMediaSize>;
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
  link: string;
}

export interface WPAuthor {
  id: number;
  name: string;
  url: string;
  avatar_urls: Record<string, string>;
}

export interface WPEmbedded {
  "wp:featuredmedia"?: WPMedia[];
  "wp:term"?: WPTerm[][];
  author?: WPAuthor[];
}

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPTitle;
  content: WPContent;
  excerpt: WPExcerpt;
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: WPEmbedded;
}

export interface WPPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WPTitle;
  content: WPContent;
  excerpt: WPExcerpt;
  parent: number;
  menu_order: number;
  featured_media: number;
  _embedded?: WPEmbedded;
}
