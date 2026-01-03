"use client";

import * as React from "react";
import { motion } from "framer-motion";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiGit,
  SiFigma,
  SiFirebase,
  SiBootstrap,
  SiLaravel,
  SiSupabase,
  SiSqlite,
} from "react-icons/si";

const techLogos = [
  // Frontend
  {
    node: <SiHtml5 style={{ color: "#e34f26" }} />,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 style={{ color: "#1572b6" }} />,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiJavascript style={{ color: "#f7df1e" }} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiTypescript style={{ color: "#3178c6" }} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss style={{ color: "#06b6d4" }} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiReact style={{ color: "#61dafb" }} />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs style={{ color: "#000000" }} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiBootstrap style={{ color: "#7952b3" }} />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  // Backend
  {
    node: <SiNodedotjs style={{ color: "#339933" }} />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress style={{ color: "#000000" }} />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiPython style={{ color: "#3776ab" }} />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiPhp style={{ color: "#777bb4" }} />,
    title: "PHP",
    href: "https://www.php.net",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java",
    title: "Java",
    href: "https://www.java.com",
  },
  {
    node: <SiLaravel style={{ color: "#ff2d20" }} />,
    title: "Laravel",
    href: "https://laravel.com",
  },
  // Database
  {
    node: <SiMysql style={{ color: "#4479a1" }} />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiPostgresql style={{ color: "#336791" }} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiSqlite style={{ color: "#003b57" }} />,
    title: "SQLite",
    href: "https://www.sqlite.org",
  },
  {
    node: <SiMongodb style={{ color: "#47a248" }} />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiRedis style={{ color: "#dc382d" }} />,
    title: "Redis",
    href: "https://redis.io",
  },
  {
    node: <SiSupabase style={{ color: "#3ecf8e" }} />,
    title: "Supabase",
    href: "https://supabase.com",
  },
  // CMS
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    alt: "WordPress",
    title: "WordPress",
    href: "https://wordpress.org",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/strapi.png",
    alt: "Strapi",
    title: "Strapi",
    href: "https://strapi.io",
  },
  // Tools
  {
    src: "https://skillicons.dev/icons?i=docker",
    alt: "Docker",
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiGit style={{ color: "#f05032" }} />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiFigma style={{ color: "#f24e1e" }} />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiPrisma style={{ color: "#2d3748" }} />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <SiFirebase style={{ color: "#ffca28" }} />,
    title: "Firebase",
    href: "https://firebase.google.com",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    alt: "Ubuntu",
    title: "Ubuntu",
    href: "https://ubuntu.com",
  },
];

export function Skills() {
  return (
    <section
      id='skills'
      className='py-20 lg:py-32 w-full overflow-x-hidden relative bg-gradient-to-b from-muted/30 via-muted/40 to-muted/30 dark:from-[#0e0e16] dark:via-[#121220] dark:to-[#0f0f18]'>
      {/* Colorful blur orbs */}
      <div className='absolute top-32 -right-20 w-96 h-96 bg-violet-500/10 dark:hidden rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-20 left-10 w-72 h-72 bg-indigo-400/8 dark:hidden rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 left-1/2 w-80 h-80 bg-fuchsia-400/8 dark:hidden rounded-full blur-3xl pointer-events-none' />

      {/* Noise texture overlay */}
      <div
        className='absolute inset-0 opacity-[0.02] dark:hidden pointer-events-none z-0'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dot pattern background - more visible */}
      <div
        className='absolute inset-0 opacity-50 dark:opacity-25 pointer-events-none z-0'
        style={{
          backgroundImage: `radial-gradient(circle, rgba(128, 128, 128, 0.25) 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Top blend gradient */}
      <div className='absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-muted/30 dark:from-[#0e0e16] to-transparent pointer-events-none z-0' />

      {/* Bottom blend gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-muted/30 dark:from-[#0f0f18] to-transparent pointer-events-none z-0' />

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Skills & Technologies
            </h2>
            <div className='w-24 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          {/* LogoLoop Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              height: "120px",
              position: "relative",
              overflow: "hidden",
            }}
            className='mt-8'>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction='left'
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor='bg-muted/30'
              ariaLabel='Technology partners'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
