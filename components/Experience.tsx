"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { History, Milestone, Calendar, Building2 } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id='experience' className='py-16 lg:py-24 border-b'>
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
            <History className="w-3 h-3" />
            <span>History</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>Professional Milestones</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            A chronological record of my career path and significant achievements.
          </p>
        </motion.div>

        <div className='relative ml-4 md:ml-6'>
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

          <div className='space-y-12'>
            {experiences.map((experience, idx) => (
              <motion.div
                key={experience.id}
                id={`experience-${experience.id}`}
                className="relative pl-8 md:pl-10 scroll-mt-24"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full bg-background border-2 border-primary z-10"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{experience.position}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <div className="flex items-center gap-1.5 bg-muted px-2 py-1 rounded">
                      <Calendar className="w-3 h-3" />
                      {experience.duration}
                    </div>
                    {experience.current && (
                      <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20 text-[10px] h-5">
                        Latest
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    {experience.description.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {experience.type && (
                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 py-0.5 border rounded">
                        {experience.type}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
