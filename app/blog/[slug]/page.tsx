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
    <div className="w-full">
      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-8">
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground truncate">{post.meta.title}</span>
      </div>

      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">{post.meta.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y py-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
              {post.meta.author?.charAt(0) ?? "R"}
            </div>
            <span className="font-medium text-foreground">{post.meta.author ?? "Rifki"}</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block"></div>
          <time dateTime={post.meta.date}>{new Date(post.meta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
          <div className="h-4 w-px bg-border hidden sm:block"></div>
          <span>{post.readingTimeMin} min read</span>
          {post.meta.category && (
            <>
              <div className="h-4 w-px bg-border hidden sm:block"></div>
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">{post.meta.category}</span>
            </>
          )}
        </div>
      </header>

      {post.meta.cover && (
        <div className="relative aspect-video mb-12 rounded-xl overflow-hidden border bg-muted">
          <Image
            src={post.meta.cover}
            alt={post.meta.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      )}

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <MarkdownRenderer html={post.html} />
      </article>

      <div className="mt-16 pt-8 border-t">
        <ArticleCTA />
      </div>

      <div className="mt-12">
        <RelatedPosts posts={related} />
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {prev ? (
          <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-2 p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Previous Post</span>
            <span className="font-semibold group-hover:text-primary transition-colors line-clamp-1">← {prev.meta.title}</span>
          </Link>
        ) : <div />}
        
        {next && (
          <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-2 p-4 rounded-lg border hover:border-primary/50 transition-colors text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Next Post</span>
            <span className="font-semibold group-hover:text-primary transition-colors line-clamp-1">{next.meta.title} →</span>
          </Link>
        )}
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}