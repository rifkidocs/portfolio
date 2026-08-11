import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github.css";
import { ThemeProvider } from "@/components/theme-provider";
import DocsLayout from "@/components/DocsLayout";
import ChatBot from "@/components/ChatBot";
import { MotionConfig } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifki - Fullstack Web Developer",
  description:
    "Portfolio of Rifki, a passionate fullstack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
  icons: {
    icon: "/logo-r.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Rifki - Fullstack Web Developer",
    description:
      "Portfolio of Rifki, a passionate fullstack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://rifkiars.com",
    siteName: "Rifki Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rifki Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifki - Fullstack Web Developer",
    description:
      "Portfolio of Rifki, a passionate fullstack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
};

import { LanguageProvider } from "@/lib/language-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id' suppressHydrationWarning className='overflow-x-hidden'>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-background font-sans`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <LanguageProvider>
            <MotionConfig reducedMotion="user">
              <DocsLayout>
                {children}
              </DocsLayout>
              <ChatBot />
            </MotionConfig>
          </LanguageProvider>
        </ThemeProvider>
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
