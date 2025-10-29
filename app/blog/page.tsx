import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostsCached, PAGE_SIZE, paginatePosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import BlogSearch from "@/components/BlogSearch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel terbaru dari Rifki",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blog",
    description: "Artikel terbaru dari Rifki",
    type: "website",
  },
};

export default async function BlogIndex() {
  const posts = await getAllPostsCached();
  const { items, totalPages } = paginatePosts(posts, 1, PAGE_SIZE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Rifki Blog",
    url: "/blog",
    blogPost: items.map((p) => ({
      "@type": "BlogPosting",
      headline: p.meta.title,
      datePublished: p.meta.date,
      author: { "@type": "Person", name: p.meta.author },
      url: `/blog/${p.slug}`,
      description: p.meta.description,
    })),
  };

  // Build search items data
  const searchItems = posts.map((p) => ({
    slug: p.slug,
    title: p.meta.title,
    description: p.meta.description,
    tags: p.meta.tags,
    category: p.meta.category,
    date: p.meta.date,
  }));

  // Tags & categories clouds
  const tagCounts = new Map<string, number>();
  posts.forEach((p) => (p.meta.tags ?? []).forEach((t) => tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)));
  const tagsSorted = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const categories = Array.from(new Set(posts.map((p) => p.meta.category).filter(Boolean)));

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-2 text-muted-foreground">Artikel terbaru tentang pengembangan web, React/Next.js, dan pengalaman proyek.</p>
      </header>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <BlogSearch items={searchItems} />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-4 flex justify-end">
              <Link href={`/blog/page/2`} className="px-3 py-2 border rounded hover:bg-secondary">
                Halaman Berikutnya →
              </Link>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-base">Kategori</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {categories.map((c) => (
                  <Link
                    key={c}
                    href={`/blog/category/${encodeURIComponent(c!)}`}
                    className="px-2.5 py-1.5 text-xs rounded-md bg-muted text-foreground transition-colors hover:bg-secondary/60"
                  >
                    #{c}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="text-base">Tag Populer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {tagsSorted.map(([t, count]) => (
                  <Link
                    key={t}
                    href={`/blog/tag/${encodeURIComponent(t)}`}
                    className="px-2.5 py-1.5 text-xs rounded-md border transition-colors hover:bg-secondary/50"
                  >
                    #{t}
                    <span className="ml-1 text-muted-foreground">({count})</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}