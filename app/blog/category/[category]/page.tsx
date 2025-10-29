
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `Kategori: ${category}`,
    description: `Artikel dalam kategori ${category}`,
    alternates: { canonical: `/blog/category/${category}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const posts = await getPostsByCategory(category);
  if (!posts.length) return notFound();

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <h1 className="text-3xl font-bold mb-6">Kategori: {category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}