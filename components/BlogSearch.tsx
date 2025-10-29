"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Item = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  category?: string;
  date: string;
};

export default function BlogSearch({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return items.filter((i) => {
      const hay = [i.title, i.description ?? "", i.category ?? "", ...(i.tags ?? [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    }).slice(0, 8);
  }, [items, q]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari artikel..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      />
      {q && (
        <div className="absolute left-0 right-0 mt-2 rounded border bg-card shadow">
          {filtered.length ? (
            filtered.map((i) => (
              <Link key={i.slug} href={`/blog/${i.slug}`} className="block px-3 py-2 hover:bg-secondary/50">
                <div className="text-sm font-medium">{i.title}</div>
                <div className="text-xs text-muted-foreground">
                  {new Date(i.date).toLocaleDateString()} {i.category ? `• ${i.category}` : ""}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-muted-foreground">Tidak ada hasil</div>
          )}
        </div>
      )}
    </div>
  );
}