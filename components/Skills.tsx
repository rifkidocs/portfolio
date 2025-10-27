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
  SiSass,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPrisma,
  SiGit,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiJest,
  SiCypress,
  SiCss3,
} from "react-icons/si";

const techLogos = [
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
    node: <SiTypescript style={{ color: "#3178c6" }} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript style={{ color: "#f7df1e" }} />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiHtml5 style={{ color: "#e34f26" }} />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiCss3 style={{ color: "#1572b6" }} />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <SiTailwindcss style={{ color: "#06b6d4" }} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiSass style={{ color: "#cc6699" }} />,
    title: "SASS/SCSS",
    href: "https://sass-lang.com",
  },
  {
    node: <SiVuedotjs style={{ color: "#4fc08d" }} />,
    title: "Vue.js",
    href: "https://vuejs.org",
  },
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
    node: <SiDjango style={{ color: "#092e20" }} />,
    title: "Django",
    href: "https://www.djangoproject.com",
  },
  {
    node: <SiFastapi style={{ color: "#009688" }} />,
    title: "FastAPI",
    href: "https://fastapi.tiangolo.com",
  },
  {
    node: <SiGraphql style={{ color: "#e10098" }} />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiMongodb style={{ color: "#47a248" }} />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiPostgresql style={{ color: "#336791" }} />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiMysql style={{ color: "#4479a1" }} />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiRedis style={{ color: "#dc382d" }} />,
    title: "Redis",
    href: "https://redis.io",
  },
  {
    node: <SiPrisma style={{ color: "#2d3748" }} />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <SiGit style={{ color: "#f05032" }} />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    src: "https://skillicons.dev/icons?i=docker",
    alt: "Docker",
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiVercel style={{ color: "#000000" }} />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <SiNetlify style={{ color: "#00c7b7" }} />,
    title: "Netlify",
    href: "https://www.netlify.com",
  },
  {
    node: <SiFigma style={{ color: "#f24e1e" }} />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiJest style={{ color: "#c21325" }} />,
    title: "Jest",
    href: "https://jestjs.io",
  },
  {
    node: <SiCypress style={{ color: "#17202c" }} />,
    title: "Cypress",
    href: "https://www.cypress.io",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-muted/30 w-full overflow-x-hidden relative"
    >
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            className="mt-8"
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="bg-muted/30"
              ariaLabel="Technology partners"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
