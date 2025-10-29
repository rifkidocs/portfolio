import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export type PostMeta = {
  title: string;
  date: string; // ISO date string
  author?: string;
  description?: string;
  tags?: string[];
  category?: string;
  cover?: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  html: string;
  wordCount: number;
  readingTimeMin: number;
  excerpt: string;
};

const POSTS_DIR = path.join(process.cwd(), "posts");
export const PAGE_SIZE = 5;

function listMarkdownFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();
}

export function getPostSlugs(): string[] {
  return listMarkdownFiles().map((file) => file.replace(/\.md$/, ""));
}

async function mdToHtml(source: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    // Convert Markdown (mdast) -> HTML (hast)
    .use(remarkRehype, { allowDangerousHtml: true })
    // Parse any raw HTML inside markdown safely
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(source);
  return String(file);
}

function computeReadingStats(source: string): { wordCount: number; readingTimeMin: number; excerpt: string } {
  const withoutCode = source.replace(/```[\s\S]*?```/g, "");
  const linksNormalized = withoutCode.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
  const imagesRemoved = linksNormalized.replace(/!\[[^\]]*\]\([^\)]*\)/g, "");
  const strippedMarkdown = imagesRemoved
    .replace(/^#+\s+/gm, "") // headings
    .replace(/^>\s+/gm, "") // blockquotes
    .replace(/^[-*]\s+/gm, "") // lists
    .replace(/`{1,3}([^`]+)`{1,3}/g, "$1"); // inline code
  const words = strippedMarkdown.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const readingTimeMin = Math.max(1, Math.round(wordCount / 200));
  const excerpt = strippedMarkdown.trim().slice(0, 220);
  return { wordCount, readingTimeMin, excerpt };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  const html = await mdToHtml(content);
  const meta = normalizeMeta(data as Partial<PostMeta>);
  const stats = computeReadingStats(content);
  return { slug, meta, html, wordCount: stats.wordCount, readingTimeMin: stats.readingTimeMin, excerpt: stats.excerpt };
}

function normalizeMeta(m: Partial<PostMeta>): PostMeta {
  return {
    title: m.title ?? "Untitled",
    date: m.date ?? new Date().toISOString(),
    author: m.author ?? "Unknown",
    description: m.description ?? "",
    tags: Array.isArray(m.tags) ? m.tags : [],
    category: m.category ?? "General",
    cover: m.cover,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPostBySlug(s)));
  const filtered = posts.filter((p): p is Post => !!p);
  return filtered.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });
}

export function paginatePosts(posts: Post[], page: number, pageSize = PAGE_SIZE) {
  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * pageSize;
  const end = Math.min(start + pageSize, total);
  const items = posts.slice(start, end);
  return { items, page: current, totalPages, total };
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.meta.tags?.includes(tag));
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.meta.category === category);
}

export async function getAdjacentPosts(slug: string): Promise<{ prev: Post | null; next: Post | null }> {
  const posts = await getAllPosts();
  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx >= 0 && idx < posts.length - 1 ? posts[idx + 1] : null;
  return { prev, next };
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  const ct = new Set(current.meta.tags ?? []);
  const sameCategory = current.meta.category;
  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const overlapTags = (p.meta.tags ?? []).filter((t) => ct.has(t)).length;
      const catBonus = p.meta.category === sameCategory ? 1 : 0;
      const score = overlapTags * 2 + catBonus;
      return { post: p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.meta.date).getTime() - new Date(a.post.meta.date).getTime())
    .slice(0, limit)
    .map(({ post }) => post);
  return scored;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => (p.meta.tags ?? []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const set = new Set<string>();
  posts.forEach((p) => {
    if (p.meta.category) set.add(p.meta.category);
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

// Cache wrappers
export const getAllPostsCached = unstable_cache(
  async () => await getAllPosts(),
  ["posts:list"],
  { revalidate: 60 }
);

export const getPostBySlugCached = cache(async (slug: string) => await getPostBySlug(slug));
export const getAdjacentPostsCached = cache(async (slug: string) => await getAdjacentPosts(slug));