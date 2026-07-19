"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Terminal,
  User,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id='about' className='py-16 lg:py-24 border-b'>
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
            <User className="w-3 h-3" />
            <span>Identity</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>About the Developer</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            An overview of my professional background, philosophy, and current focus.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-12'>
          {/* Metadata Sidebar for the section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>Available for Hire</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>Fullstack Web</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button variant="outline" size="sm" asChild className="w-full justify-between">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Detailed Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Biography</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to bridge the gap between complex backend systems and intuitive frontend interfaces. 
                I believe in building applications that are not only functional but also maintainable and accessible to everyone.
              </p>
              <blockquote className="border-l border-primary pl-4 py-1 italic text-muted-foreground">
                &quot;Clean code always looks like it was written by someone who cares.&quot; — Michael Feathers
              </blockquote>
            </div>

            <div className="space-y-6 pt-4 border-t">
              <h3 className="text-xl font-bold tracking-tight">Philosophy</h3>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group">
                  <span className="text-xs font-mono text-primary font-bold w-32 shrink-0">01 / PERF_FIRST</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-foreground">Performance First</h4>
                    <p className="text-xs text-muted-foreground max-w-md">Every millisecond counts. Optimization is a core architectural priority, not an afterthought.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 group">
                  <span className="text-xs font-mono text-primary font-bold w-32 shrink-0">02 / SAFE_TYPES</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-foreground">Type Safety</h4>
                    <p className="text-xs text-muted-foreground max-w-md">Leveraging TypeScript statically to construct robust, self-documenting codebases.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
