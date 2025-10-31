import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostsCached, PAGE_SIZE, paginatePosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel terbaru dari Rifki",
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

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page: rawPage } = await params;
  const pageNum = Number(rawPage);
  if (Number.isNaN(pageNum) || pageNum < 1) return notFound();

  const posts = await getAllPostsCached();
  const { items, totalPages, page } = paginatePosts(posts, pageNum, PAGE_SIZE);
  if (pageNum > totalPages) return notFound();

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {items.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        {page > 1 ? (
          <Link href={`/blog/page/${page - 1}`} className="px-4 py-2 border rounded-md hover:bg-secondary transition-colors">
            ← Sebelumnya
          </Link>
        ) : (
          <div />
        )}
        {page < totalPages ? (
          <Link href={`/blog/page/${page + 1}`} className="px-4 py-2 border rounded-md hover:bg-secondary transition-colors">
            Berikutnya →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}