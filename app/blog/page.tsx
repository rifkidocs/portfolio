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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rifki Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Artikel terbaru dari Rifki",
    images: ["/og-image.png"],
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
  posts.forEach((p) =>
    (p.meta.tags ?? []).forEach((t) =>
      tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1)
    )
  );
  const tagsSorted = Array.from(tagCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  const categories = Array.from(
    new Set(posts.map((p) => p.meta.category).filter(Boolean))
  );

  return (
    <div className='w-full'>
      <header className='max-w-3xl mb-12'>
        <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
          <span>Blog</span>
          <span className="text-muted-foreground">/</span>
          <span>Index</span>
        </div>
        <h1 className='text-4xl font-bold tracking-tight'>Technical Blog</h1>
        <p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
          Sharing my journey, technical insights, and deep dives into modern web development.
        </p>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
        <div className='lg:col-span-3 space-y-10'>
          <div>
            <BlogSearch items={searchItems} />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
            {items.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className='mt-8 flex justify-end'>
              <Link
                href={`/blog/page/2`}
                className='px-4 py-2 border rounded-md hover:bg-secondary transition-colors text-sm font-medium'>
                Next Page →
              </Link>
            </div>
          )}
        </div>

        <aside className='lg:col-span-1 space-y-10'>
          <div id="categories" className="scroll-mt-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Categories</h3>
            <div className='flex flex-wrap gap-2'>
              {categories.map((c) => (
                <Link
                  key={c}
                  href={`/blog/category/${encodeURIComponent(c!)}`}
                  className='px-3 py-1.5 text-xs rounded-md bg-muted border hover:border-primary/50 transition-colors'>
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <div id="tags" className="scroll-mt-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Popular Tags</h3>
            <div className='flex flex-wrap gap-2'>
              {tagsSorted.map(([t, count]) => (
                <Link
                  key={t}
                  href={`/blog/tag/${encodeURIComponent(t)}`}
                  className='px-3 py-1.5 text-xs rounded-md border hover:bg-muted transition-colors'>
                  {t} <span className="text-muted-foreground ml-1">({count})</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
