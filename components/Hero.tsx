"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section
      id='home'
      className='py-20 lg:py-32 flex flex-col items-start justify-center relative overflow-hidden w-full border-b'>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className='max-w-3xl'>
        {/* Breadcrumb style indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex items-center gap-2 text-xs font-mono text-primary mb-6'
        >
          <span className="px-2 py-0.5 bg-primary/10 rounded">v1.0.0</span>
          <span className="text-muted-foreground">/</span>
          <span>Introduction</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='text-4xl md:text-6xl font-extrabold tracking-tight mb-6'
        >
          Building <span className="text-primary italic">scalable</span> digital experiences.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-xl text-muted-foreground mb-10 leading-relaxed'
        >
          I&apos;m <span className="text-foreground font-semibold">{personalInfo.name}</span>, a {personalInfo.title} specialized in crafting high-performance web applications with React, Next.js, and Node.js.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-wrap gap-4'
        >
          <Button
            size='lg'
            asChild
            className='rounded-md px-8'
          >
            <a href="#projects">
              View Documentation
              <ArrowRight className='w-4 h-4 ml-2' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='lg'
            asChild
            className='rounded-md px-8'
          >
            <Link href="/blog">
              <BookOpen className='w-4 h-4 mr-2' />
              Read Blog
            </Link>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center gap-6 text-sm text-muted-foreground"
        >
          <a href="https://github.com/rifkidocs" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="mailto:rifkidocs@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <Mail className="w-4 h-4" /> Email
          </a>
          <div className="h-4 w-px bg-border"></div>
          <span className="font-mono text-[10px] uppercase tracking-widest">Available for hire</span>
        </motion.div>
      </div>
    </section>
  );
}
