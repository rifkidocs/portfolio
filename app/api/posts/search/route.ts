import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  try {
    const posts = await getAllPosts();
    // Return only necessary data for search to keep it lightweight
    const searchData = posts.map(post => ({
      slug: post.slug,
      meta: {
        title: post.meta.title,
        category: post.meta.category,
      }
    }));
    
    return NextResponse.json(searchData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
