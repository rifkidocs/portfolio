"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiLaravel,
  SiSupabase,
} from "react-icons/si";
import { Code2, Server, Database, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="w-4 h-4" />,
    skills: [
      { name: "React", icon: <SiReact className="text-[#61dafb]" />, level: "Advanced" },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" />, level: "Expert" },
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Server className="w-4 h-4" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: "Advanced" },
      { name: "Laravel", icon: <SiLaravel className="text-[#ff2d20]" />, level: "Intermediate" },
      { name: "Python", icon: <SiPython className="text-[#3776ab]" />, level: "Intermediate" },
      { name: "PHP", icon: <SiPhp className="text-[#777bb4]" />, level: "Advanced" },
    ]
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: "Advanced" },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" />, level: "Advanced" },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ecf8e]" />, level: "Advanced" },
      { name: "Prisma", icon: <SiPrisma />, level: "Advanced" },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: <Wrench className="w-4 h-4" />,
    skills: [
      { name: "Git", icon: <SiGit className="text-[#f05032]" />, level: "Expert" },
      { name: "Docker", icon: <SiDocker className="text-[#2496ed]" />, level: "Intermediate" },
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

        <div className='grid sm:grid-cols-2 gap-8'>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 border-b pb-2">
                <span className="text-primary">{category.icon}</span>
                <h4 className="text-sm font-bold uppercase tracking-widest">{category.title}</h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-md bg-muted/30 border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-tighter",
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
      </div>
    </section>
  );
}
