import Link from "next/link";

export default function ArticleCTA() {
  return (
    <aside className="mt-10 rounded-xl border p-6 bg-secondary/50">
      <h2 className="text-lg font-semibold">Suka artikelnya?</h2>
      <p className="text-sm text-muted-foreground mt-1">
        Ikuti update terbaru atau hubungi saya untuk kolaborasi.
      </p>
      <div className="mt-4 flex gap-3">
        <Link href="#contact" className="px-4 py-2 rounded bg-primary text-primary-foreground">
          Hubungi Saya
        </Link>
        <Link href="/blog" className="px-4 py-2 rounded border hover:bg-secondary">
          Baca Artikel Lainnya
        </Link>
      </div>
    </aside>
  );
}