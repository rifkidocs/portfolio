import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { projects, experiences, skills, personalInfo } from '@/lib/data';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Fetch the latest CV from Google Docs (cache for 5 minutes / 300 seconds)
    let liveCvText = "";
    try {
      const cvResponse = await fetch(
        "https://docs.google.com/document/d/1RyPvV8SyZzyJ9lrzgUn-O9nm2TuiySQSl7gnaoS3Q8Q/export?format=txt",
        { next: { revalidate: 86400 } } // Refresh once a day
      );
      if (cvResponse.ok) {
        liveCvText = await cvResponse.text();
      }
    } catch (e) {
      console.warn("Failed to fetch live CV from Google Docs:", e);
    }

    const resumeContext = `
      Nama: ${personalInfo.name}
      Role: ${personalInfo.title}
      Lokasi: ${personalInfo.location}
      Bio: ${personalInfo.bio}
      Skills Utama: ${skills.slice(0, 10).map(s => s.name).join(', ')}
      Pengalaman Kerja: ${experiences.map(e => `${e.position} di ${e.company}`).join(', ')}
      Proyek: ${projects.map(p => p.title).join(', ')}
      
      === DATA CV TERBARU DARI GOOGLE DOCS ===
      ${liveCvText}
    `;

    const result = streamText({
      model: groq('llama-3.3-70b-versatile'),
      messages,
      system: `Kamu adalah AI Assistant portfolio ${personalInfo.name}. 
      Gunakan data ini: ${resumeContext}. 
      Aturan:
      1. Jawab ramah dan natural dalam Bahasa Indonesia.
      2. Bersikaplah seperti asisten virtual yang membantu pengunjung.
      3. Jangan pernah mengarang informasi di luar data yang diberikan.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: errorMessage }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}