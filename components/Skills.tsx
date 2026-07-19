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

const SiAdobephotoshop = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm4.8 4.48c0-.067.14-.116.224-.116.644-.033 1.588-.05 2.578-.05 2.772 0 3.85 1.52 3.85 3.466 0 2.54-1.842 3.63-4.102 3.63-.38 0-.51-.017-.775-.017v3.842c0 .083-.033.116-.115.116H5.916c-.083 0-.115-.03-.115-.113V5.78zm1.775 5.312c.23.016.412.016.81.016 1.17 0 2.27-.412 2.27-1.996 0-1.27-.786-1.914-2.122-1.914-.396 0-.775.016-.957.033v3.864zm8.607-1.188c-.792 0-1.056.396-1.056.726 0 .363.18.61 1.237 1.155 1.568.76 2.062 1.485 2.062 2.557 0 1.6-1.22 2.46-2.87 2.46-.876 0-1.62-.183-2.05-.43-.065-.033-.08-.082-.08-.165V14.74c0-.1.048-.133.114-.084.624.413 1.352.594 2.012.594.792 0 1.122-.33 1.122-.776 0-.363-.23-.677-1.237-1.205-1.42-.68-2.014-1.37-2.014-2.527 0-1.287 1.006-2.36 2.755-2.36.86 0 1.464.132 1.794.28.082.05.1.132.1.198v1.37c0 .083-.05.133-.15.1-.444-.264-1.1-.43-1.743-.43z" />
  </svg>
);

const SiPlaywright = (props: React.ComponentProps<"svg">) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M136.444 221.556C123.558 225.213 115.104 231.625 109.535 238.032C114.869 233.364 122.014 229.08 131.652 226.348C141.51 223.554 149.92 223.574 156.869 224.915V219.481C150.941 218.939 144.145 219.371 136.444 221.556ZM108.946 175.876L61.0895 188.484C61.0895 188.484 61.9617 189.716 63.5767 191.36L104.153 180.668C104.153 180.668 103.578 188.077 98.5847 194.705C108.03 187.559 108.946 175.876 108.946 175.876ZM149.005 288.347C81.6582 306.486 46.0272 228.438 35.2396 187.928C30.2556 169.229 28.0799 155.067 27.5 145.928C27.4377 144.979 27.4665 144.179 27.5336 143.446C24.04 143.657 22.3674 145.473 22.7077 150.721C23.2876 159.855 25.4633 174.016 30.4473 192.721C41.2301 233.225 76.8659 311.273 144.213 293.134C158.872 289.185 169.885 281.992 178.152 272.81C170.532 279.692 160.995 285.112 149.005 288.347ZM161.661 128.11V132.903H188.077C187.535 131.206 186.989 129.677 186.447 128.11H161.661Z" fill="currentColor"/>
    <path d="M193.981 167.584C205.861 170.958 212.144 179.287 215.465 186.658L228.711 190.42C228.711 190.42 226.904 164.623 203.57 157.995C181.741 151.793 168.308 170.124 166.674 172.496C173.024 167.972 182.297 164.268 193.981 167.584ZM299.422 186.777C277.573 180.547 264.145 198.916 262.535 201.255C268.89 196.736 278.158 193.031 289.837 196.362C301.698 199.741 307.976 208.06 311.307 215.436L324.572 219.212C324.572 219.212 322.736 193.41 299.422 186.777ZM286.262 254.795L176.072 223.99C176.072 223.99 177.265 230.038 181.842 237.869L274.617 263.805C282.255 259.386 286.262 254.795 286.262 254.795ZM209.867 321.102C122.618 297.71 133.166 186.543 147.284 133.865C153.097 112.156 159.073 96.0203 164.029 85.204C161.072 84.5953 158.623 86.1529 156.203 91.0746C150.941 101.747 144.212 119.124 137.7 143.45C123.586 196.127 113.038 307.29 200.283 330.682C241.406 341.699 273.442 324.955 297.323 298.659C274.655 319.19 245.714 330.701 209.867 321.102Z" fill="currentColor"/>
  </svg>
);

const skillCategories = [
  {
    title: "AI-Assisted Development & Workflow",
    icon: <BrainCircuit className="w-4 h-4" />,
    skills: [
      { name: "Claude Code", icon: <Bot />, level: "Advanced" },
      { name: "Cursor", icon: <Code2 />, level: "Expert" },
      { name: "Antigravity CLI", icon: <Terminal />, level: "Expert" },
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
      { name: "Playwright", icon: <SiPlaywright className="text-[#2ead33]" />, level: "Advanced" },
    ]
  },
  {
    title: "CMS & Backend Services",
    icon: <Settings2 className="w-4 h-4" />,
    skills: [
      { name: "WordPress", icon: <SiWordpress className="text-[#21759b]" />, level: "Advanced" },
      { name: "Strapi Headless CMS", icon: <SiStrapi className="text-[#2f2e8b]" />, level: "Expert" },
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
