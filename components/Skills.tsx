"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiLaravel,
  SiSupabase,
  SiJavascript,
  SiHtml5,
  SiGo,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiExpress,
  SiSocketdotio,
  SiJest,
  SiWordpress,
  SiStrapi,
  SiNginx,
  SiLinux,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { 
  Bot, 
  Terminal, 
  Database, 
  Layers, 
  Cloud, 
  Layout, 
  Wrench, 
  Cpu,
  BrainCircuit,
  Settings2,
  Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "AI-Assisted Development & Workflow",
    icon: <BrainCircuit className="w-4 h-4" />,
    skills: [
      { name: "Claude Code", icon: <Bot />, level: "Advanced" },
      { name: "Gemini CLI", icon: <Terminal />, level: "Advanced" },
      { name: "Cursor", icon: <Code2 />, level: "Expert" },
      { name: "Qwen / Antigravity", icon: <Cpu />, level: "Intermediate" },
    ]
  },
  {
    title: "Programming & Technical Skills",
    icon: <Terminal className="w-4 h-4" />,
    skills: [
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" />, level: "Expert" },
      { name: "PHP", icon: <SiPhp className="text-[#777bb4]" />, level: "Expert" },
      { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" />, level: "Expert" },
      { name: "Python", icon: <SiPython className="text-[#3776ab]" />, level: "Advanced" },
      { name: "Golang", icon: <SiGo className="text-[#00add8]" />, level: "Intermediate" },
      { name: "HTML / CSS", icon: <SiHtml5 className="text-[#e34f26]" />, level: "Expert" },
    ]
  },
  {
    title: "Databases & Caching",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: "Advanced" },
      { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" />, level: "Expert" },
      { name: "Redis", icon: <SiRedis className="text-[#d82c20]" />, level: "Advanced" },
      { name: "Firebase Firestore", icon: <SiFirebase className="text-[#ffca28]" />, level: "Advanced" },
    ]
  },
  {
    title: "Frameworks & UI Systems",
    icon: <Layers className="w-4 h-4" />,
    skills: [
      { name: "Next.js", icon: <SiNextdotjs />, level: "Expert" },
      { name: "React.js", icon: <SiReact className="text-[#61dafb]" />, level: "Expert" },
      { name: "Laravel", icon: <SiLaravel className="text-[#ff2d20]" />, level: "Expert" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" />, level: "Expert" },
      { name: "ExpressJS", icon: <SiExpress />, level: "Advanced" },
      { name: "Socket.io", icon: <SiSocketdotio />, level: "Advanced" },
      { name: "Prisma", icon: <SiPrisma />, level: "Advanced" },
      { name: "Jest", icon: <SiJest className="text-[#c21325]" />, level: "Intermediate" },
    ]
  },
  {
    title: "CMS & Backend Services",
    icon: <Settings2 className="w-4 h-4" />,
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-[#21759b]" />, level: "Advanced" },
      { name: "Strapi Headless CMS", icon: <SiStrapi className="text-[#2f2e8b]" />, level: "Advanced" },
      { name: "Firebase (Auth/Storage)", icon: <SiFirebase className="text-[#ffca28]" />, level: "Advanced" },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ecf8e]" />, level: "Advanced" },
    ]
  },
  {
    title: "DevOps & Deployment",
    icon: <Cloud className="w-4 h-4" />,
    skills: [
      { name: "Docker", icon: <SiDocker className="text-[#2496ed]" />, level: "Advanced" },
      { name: "Linux (Ubuntu)", icon: <SiLinux />, level: "Advanced" },
      { name: "Nginx", icon: <SiNginx className="text-[#009639]" />, level: "Advanced" },
      { name: "VPS / Reverse Proxy", icon: <Settings2 />, level: "Advanced" },
    ]
  },
  {
    title: "Design & Prototyping",
    icon: <Layout className="w-4 h-4" />,
    skills: [
      { name: "Figma", icon: <SiFigma className="text-[#f24e1e]" />, level: "Advanced" },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-[#31a8ff]" />, level: "Advanced" },
      { name: "UI/UX Wireframing", icon: <Layout />, level: "Advanced" },
      { name: "Design Systems", icon: <Layers />, level: "Advanced" },
    ]
  },
  {
    title: "Tools & Workflow",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git & GitHub", icon: <SiGit className="text-[#f05032]" />, level: "Expert" },
      { name: "VS Code", icon: <VscVscode className="text-[#007acc]" />, level: "Expert" },
      { name: "Agile Mindset", icon: <Settings2 />, level: "Advanced" },
      { name: "Problem Solving", icon: <BrainCircuit />, level: "Expert" },
    ]
  }
];

export function Skills() {
  return (
    <section id='skills' className='py-16 lg:py-24 border-b'>
      <div className='max-w-4xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
            <Code2 className="w-3 h-3" />
            <span>Stack</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>Technical Ecosystem</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            A comprehensive list of technologies, frameworks, and tools that I use to build robust software.
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-x-12 gap-y-10'>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              id={`skill-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="space-y-4 scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 border-b pb-2">
                <span className="text-primary">{category.icon}</span>
                <h4 className="text-sm font-bold uppercase tracking-widest">{category.title}</h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center justify-between p-2 rounded-md bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className={cn(
                      "text-[9px] px-1.5 py-0.5 rounded font-mono uppercase tracking-tighter font-bold",
                      skill.level === "Expert" ? "bg-emerald-500/10 text-emerald-500" :
                      skill.level === "Advanced" ? "bg-blue-500/10 text-blue-500" :
                      "bg-muted text-muted-foreground"
                    )}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg bg-primary/5 border border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <h4 className="text-lg font-bold mb-2">Soft Skills</h4>
              <p className="text-sm text-muted-foreground">The foundational traits that drive my professional approach and collaboration.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 gap-4">
              {["Adaptability", "Critical Thinking", "Time Management", "Problem Solving", "Self-Learning"].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
