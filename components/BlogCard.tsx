import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/posts";

export default function BlogCard({ post }: { post: Post }) {
  const cover = post.meta.cover ?? "/og-image.png";
  return (
    <article className="group rounded-xl border overflow-hidden bg-card hover:shadow-lg transition-shadow flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-40 sm:h-44 md:h-48 w-full">
          <Image
            src={cover}
            alt={post.meta.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.meta.title}
          </Link>
        </h3>
        <p className="mt-2 text-xs text-muted-foreground">
          {new Date(post.meta.date).toLocaleDateString()} • {post.meta.author} • {post.readingTimeMin} min read
        </p>
        {post.meta.description ? (
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-grow">{post.meta.description}</p>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-grow">{post.excerpt}</p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {post.meta.category && (
            <Link
              href={`/blog/category/${encodeURIComponent(post.meta.category)}`}
              className="px-2.5 py-1.5 text-xs rounded-md bg-accent"
            >
              #{post.meta.category}
            </Link>
          )}
          {(post.meta.tags ?? []).slice(0, 3).map((t) => (
            <Link
              key={t}
              href={`/blog/tag/${encodeURIComponent(t)}`}
              className="px-2.5 py-1.5 text-xs rounded-md bg-muted"
            >
              #{t}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}