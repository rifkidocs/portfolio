import Link from "next/link";
import { Post } from "@/lib/posts";

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-lg border p-4 hover:bg-secondary/50 transition">
            <h3 className="text-base font-semibold leading-tight">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.meta.title}
              </Link>
            </h3>
            <p className="text-xs text-muted-foreground">
              {new Date(p.meta.date).toLocaleDateString()} • {p.meta.author}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}