import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByTag } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Tag: ${tag}`,
    description: `Artikel dengan tag ${tag}`,
    alternates: { canonical: `/blog/tag/${tag}` },
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);
  if (!posts.length) return notFound();

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">Tag: {tag}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}