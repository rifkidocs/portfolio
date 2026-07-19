import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Cache for 1 hour

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
  };

  try {
    let url = "";
    if (type === "graph") {
      url = "https://github-readme-activity-graph.vercel.app/graph?username=rifkidocs&theme=react-dark&hide_border=true&area=true";
    } else if (type === "stats") {
      url = "https://github-readme-stats.vercel.app/api?username=rifkidocs&show_icons=true&theme=react&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8";
    } else if (type === "streak") {
      url = "https://github-readme-streak-stats.herokuapp.com/?user=rifkidocs&theme=react&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=94a3b8";
    } else {
      return new NextResponse("Invalid request type", { status: 400 });
    }

    const response = await fetch(url, { headers, next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error(`Failed to fetch from upstream: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type") || "image/svg+xml";
    const data = await response.arrayBuffer();

    return new NextResponse(data, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error in github-stats proxy route:", error);
    return new NextResponse("Error fetching GitHub statistics", { status: 500 });
  }
}
