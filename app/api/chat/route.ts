import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { projects, experiences, skills, personalInfo } from '@/lib/data';

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

// Lapis 2: In-Memory Cache (Efektif saat instance server 'warm' di Vercel)
const ipCache = new Map<string, { lastRequest: number; count: number }>();

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // 1. Validasi Struktur (Mencegah manipulasi array berlebih)
    if (!Array.isArray(messages) || messages.length > 20) {
      return new Response(JSON.stringify({ error: "Sesi chat terlalu panjang." }), { status: 400 });
    }

    // 2. Validasi Panjang Karakter (Mencegah spam teks panjang/novel)
    const lastMessage = messages[messages.length - 1]?.content || "";
    if (lastMessage.length > 400) {
      return new Response(JSON.stringify({ error: "Pesan terlalu panjang (Maksimal 400 karakter)." }), { status: 400 });
    }

    // 3. IP Throttling Sederhana (Membatasi kecepatan kirim pesan)
    const ip = req.headers.get('x-forwarded-for') || "anonymous";
    const now = Date.now();
    const userStats = ipCache.get(ip) || { lastRequest: 0, count: 0 };

    // Jika pesan dikirim kurang dari 2 detik dari pesan sebelumnya
    if (now - userStats.lastRequest < 2000) {
      return new Response(JSON.stringify({ error: "Kirim pesan terlalu cepat. Harap tunggu sebentar." }), { status: 429 });
    }
    
    // Update cache
    ipCache.set(ip, { lastRequest: now, count: userStats.count + 1 });

    // 4. Bersihkan Cache (Opsional, agar Map tidak membengkak selamanya)
    if (ipCache.size > 100) ipCache.clear();

    // Fetch Live CV
    let liveCvText = "";
    try {
      const cvResponse = await fetch(
        "https://docs.google.com/document/d/1RyPvV8SyZzyJ9lrzgUn-O9nm2TuiySQSl7gnaoS3Q8Q/export?format=txt",
        { next: { revalidate: 86400 } }
      );
      if (cvResponse.ok) {
        liveCvText = await cvResponse.text();
      }
    } catch (e) {
      console.warn("Live CV fetch failed:", e);
    }

    const resumeContext = `
      Nama: ${personalInfo.name}
      Role: ${personalInfo.title}
      Bio: ${personalInfo.bio}
      
      DAFTAR SKILL LENGKAP:
      ${skills.map(s => s.name).join(', ')}
      
      PENGALAMAN KERJA:
      ${experiences.map(e => `- ${e.position} di ${e.company} (${e.duration}): ${e.description.join('. ')}`).join('\n')}

      DAFTAR PROYEK (Urut terbaru ke lama):
      ${projects.map((p, i) => `${i + 1}. ${p.title}
         Deskripsi: ${p.description}
         Teknologi (Tech Stack): ${p.techStack.join(', ')}`).join('\n\n')}
      
      DATA CV TAMBAHAN:
      ${liveCvText.slice(0, 1500)}
    `;

    const result = streamText({
      model: groq('llama-3.3-70b-versatile'),
      messages,
      system: `Kamu adalah AI Assistant portfolio ${personalInfo.name}. 
      Tugas utama: Menjelaskan keahlian dan pengalaman ${personalInfo.name} kepada pengunjung.
      
      KONTEKS PENTING:
      - Link CV Publik: [Download CV di Google Docs](https://docs.google.com/document/d/1RyPvV8SyZzyJ9lrzgUn-O9nm2TuiySQSl7gnaoS3Q8Q)
      - Gunakan data ini untuk menjawab: ${resumeContext}

      Panduan Jawaban:
      1. FORMAT LINK: Jika memberikan link (seperti link CV atau link proyek), gunakan format Markdown [Judul Link](URL) agar bisa diklik.
      2. Hubungkan teknologi spesifik dengan proyek yang relevan.
      3. Gaya bahasa: Ramah, santai, profesional, dan gunakan Bahasa Indonesia.
      4. Singkat: Maksimal 3-4 kalimat per jawaban.
      5. Kejujuran: Jika informasi benar-benar tidak ada di konteks, katakan tidak tahu secara sopan.`,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
