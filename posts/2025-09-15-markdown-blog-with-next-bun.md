---
title: "Membangun Blog Markdown dengan Next.js + Bun"
date: "2025-09-15"
author: "Rifki"
description: "Tutorial singkat membuat blog Markdown menggunakan Next.js yang berjalan di Bun."
tags: ["tutorial", "markdown", "remark", "bun"]
category: "Tutorial"
---

# Markdown + Next.js + Bun

Pada artikel ini, kita akan melihat bagaimana **Next.js** yang berjalan dengan **Bun** dapat memproses file **Markdown** menggunakan pipeline `remark` dan `rehype`.

## Pipeline Markdown

```ts
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export async function mdToHtml(source: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(source);
  return String(file);
}
```

Dengan pipeline di atas, kita mendapatkan HTML yang siap dipakai beserta syntax highlighting untuk blok kode.

## Tips

- Simpan artikel di direktori `/posts`
- Gunakan `frontmatter` untuk metadata
- Tambahkan pagination pada index agar rapi