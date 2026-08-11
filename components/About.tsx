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

import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

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
            <span>{t.about.badge}</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>{t.about.title}</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            {t.about.subtitle}
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
                  <span>{t.hero.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span>{t.hero.statusBadge}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>{t.hero.role}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button variant="outline" size="sm" asChild className="w-full justify-between font-bold">
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaResume}
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
                {t.about.bio1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.bio2}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">{t.about.highlightsTitle}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{t.about.highlight1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{t.about.highlight2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{t.about.highlight3}</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{t.about.highlight4}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
