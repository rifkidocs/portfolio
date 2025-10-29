---
title: "Elysia vs Next.js di Bun: Kapan Memilih Apa?"
date: "2025-10-01"
author: "Rifki"
description: "Perbandingan ringan antara Elysia.js dan Next.js pada runtime Bun."
tags: ["opinion", "bun", "elysia", "nextjs"]
category: "Opinion"
---

# Elysia vs Next.js

**Elysia.js** adalah web framework cepat untuk Bun, sedangkan **Next.js** adalah framework React full-stack yang kaya fitur.

## Kapan Memilih Elysia?

- API minimalis, microservices, dan kebutuhan performa tinggi
- Tanpa kebutuhan SSR/CSR React

## Kapan Memilih Next.js?

- Aplikasi React dengan SSR/SSG
- Routing halaman, metadata, dan ekosistem UI yang matang

## Contoh Route di Elysia

```ts
import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello from Bun + Elysia!")
  .get("/posts", () => [{ title: "Demo" }])
  .listen(3000);

console.log(`Server running at http://localhost:${app.server?.port}`);
```

Intinya, gunakan alat yang tepat untuk kebutuhan Anda. Pada portfolio ini, kita memakai **Next.js** yang berjalan di **Bun**, sehingga integrasi blog menjadi sederhana dan terstruktur.