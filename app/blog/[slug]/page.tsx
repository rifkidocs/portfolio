import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlugCached, getAdjacentPostsCached, getRelatedPosts } from "@/lib/posts";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import RelatedPosts from "@/components/RelatedPosts";
import ArticleCTA from "@/components/ArticleCTA";
import Image from "next/image";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugCached(slug);
  if (!post) return { title: "Artikel Tidak Ditemukan" };
  const url = `/blog/${post.slug}`;
  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      url,
      authors: post.meta.author ? [post.meta.author] : undefined,
      tags: post.meta.tags,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlugCached(slug);
  if (!post) return notFound();

  const { prev, next } = await getAdjacentPostsCached(slug);
  const related = await getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    datePublished: post.meta.date,
    author: post.meta.author ? { "@type": "Person", name: post.meta.author } : undefined,
    description: post.meta.description,
    url: `/blog/${post.slug}`,
    articleSection: post.meta.category,
    keywords: post.meta.tags?.join(", ") ?? undefined,
  };

  return (
    <main className="container mx-auto px-4 py-10 pt-24">
      <Link href="/blog" className="text-sm text-muted-foreground">← Kembali ke Blog</Link>

      {post.meta.cover && (
        <div className="relative w-full h-52 sm:h-64 md:h-72 mt-4 rounded-xl overflow-hidden border">
          <Image
            src={post.meta.cover}
            alt={post.meta.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mt-4 mb-2 leading-tight">{post.meta.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(post.meta.date).toLocaleDateString()} {post.meta.author ? `• ${post.meta.author}` : ""} • {post.readingTimeMin} min read
      </p>

      <div className="mt-6">
        <MarkdownRenderer html={post.html} />
      </div>

      <ArticleCTA />

      <RelatedPosts posts={related} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="block border rounded p-3 hover:bg-secondary">
              ← {prev.meta.title}
            </Link>
          ) : (
            <span className="text-muted-foreground">Tidak ada artikel sebelumnya</span>
          )}
        </div>
        <div className="sm:text-right">
          {next ? (
            <Link href={`/blog/${next.slug}`} className="inline-block border rounded p-3 hover:bg-secondary">
              {next.meta.title} →
            </Link>
          ) : (
            <span className="text-muted-foreground">Tidak ada artikel berikutnya</span>
          )}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}