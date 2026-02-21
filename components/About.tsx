"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Award,
  Download,
  MapPin,
  Briefcase,
  Layers,
  Zap,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { personalInfo, projects } from "@/lib/data";
import ProfileCard from "@/components/ProfileCard";
import ProfileCardStatic from "@/components/ProfileCardStatic";
import SpotlightCard from "@/components/SpotlightCard";

export function About() {
  const highlights = [
    {
      icon: <Layers className='w-5 h-5' />,
      title: "Full-Stack Expertise",
      description: "Seamlessly bridging frontend & backend",
      color: "blue",
    },
    {
      icon: <Zap className='w-5 h-5' />,
      title: "High Performance",
      description: "Optimized, SEO-ready, and lightning fast",
      color: "amber",
    },
    {
      icon: <Code className='w-5 h-5' />,
      title: "Modern Tech",
      description: "Next.js, Laravel 12, and Headless CMS",
      color: "emerald",
    },
    {
      icon: <Coffee className='w-5 h-5' />,
      title: "Passionate Coder",
      description: "Transforming complex ideas into reality",
      color: "rose",
    },
  ];

  const stats = [
    { label: "Years Exp.", value: "2+" },
    { label: "Projects", value: projects.length.toString() },
    { label: "Clients", value: "10+" },
  ];

  return (
    <section
      id='about'
      className='py-20 lg:py-32 w-full overflow-x-hidden relative bg-gradient-to-b from-background via-muted/20 to-muted/30 dark:from-[#0a0a0f] dark:via-[#0d0d14] dark:to-[#101018]'>
      {/* Background elements */}
      <div className='absolute top-20 -left-32 w-96 h-96 bg-blue-500/10 dark:hidden rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-40 right-0 w-80 h-80 bg-purple-500/10 dark:hidden rounded-full blur-3xl pointer-events-none' />

      <div
        className='absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none z-0'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>About Me</h2>
            <div className='w-24 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              Building the future of the web, one pixel at a time.
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-12 gap-12 items-start'>
            {/* Left Column - Profile Card & Quick Info (4 cols) */}
            <div className='lg:col-span-5 space-y-8'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='flex justify-center'>
                <ProfileCard
                  name={"Rifki"}
                  title={personalInfo.title}
                  handle='rifkidocs'
                  status='Available for work'
                  contactText='Contact Me'
                  avatarUrl='/profile.png'
                  miniAvatarUrl='/foto.png'
                  iconUrl='/hologram-icon.svg'
                  grainUrl='/grain.svg'
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />

                <ProfileCardStatic
                  name={"Rifki"}
                  title={personalInfo.title}
                  handle='rifkidocs'
                  status='Available for work'
                  contactText='Contact Me'
                  avatarUrl='/profile.png'
                  miniAvatarUrl='/foto.png'
                  showUserInfo={true}
                  onContactClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
              </motion.div>

              {/* Quick Facts Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                <SpotlightCard className='p-6'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                        <MapPin className='w-5 h-5' />
                      </div>
                      <div>
                        <p className='text-xs text-muted-foreground uppercase tracking-wider font-semibold'>
                          Location
                        </p>
                        <p className='font-medium'>{personalInfo.location}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='p-2 bg-primary/10 rounded-lg text-primary'>
                        <Briefcase className='w-5 h-5' />
                      </div>
                      <div>
                        <p className='text-xs text-muted-foreground uppercase tracking-wider font-semibold'>
                          Status
                        </p>
                        <p className='font-medium'>Available for Hire</p>
                      </div>
                    </div>
                    <div className='pt-4 grid grid-cols-3 gap-4 border-t border-border/50'>
                      {stats.map((stat) => (
                        <div key={stat.label} className='text-center'>
                          <p className='text-xl font-bold text-primary'>
                            {stat.value}
                          </p>
                          <p className='text-[10px] text-muted-foreground uppercase'>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>

            {/* Right Column - Narrative Content (7 cols) */}
            <div className='lg:col-span-7 space-y-10'>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='space-y-6'>
                <div className='space-y-4'>
                  <h3 className='text-2xl md:text-3xl font-bold'>
                    Who I Am
                  </h3>
                  <p className='text-muted-foreground leading-relaxed text-lg'>
                    {personalInfo.bio}
                  </p>
                </div>

                <div className='space-y-4'>
                  <h3 className='text-2xl md:text-3xl font-bold'>
                    What I Do
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    I specialize in building high-performance web applications that combine 
                    robust backend architecture with stunning, interactive frontend experiences. 
                    With a focus on clean code and user-centric design, I help businesses 
                    and institutions transform their digital presence.
                  </p>
                </div>

                <div className='pt-4 flex flex-wrap gap-4'>
                  <Button size='lg' className='rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all' asChild>
                    <a
                      href={personalInfo.resumeUrl}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <Download className='w-4 h-4 mr-2' />
                      Download CV
                    </a>
                  </Button>
                  <Button variant='outline' size='lg' className='rounded-full px-8' onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    View My Work
                  </Button>
                </div>
              </motion.div>

              {/* Highlights Grid */}
              <div className='grid sm:grid-cols-2 gap-4'>
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}>
                    <SpotlightCard
                      className='h-full p-5 border border-border/50 bg-muted/30 dark:bg-muted/5'
                      spotlightColor='rgba(var(--primary), 0.1)'>
                      <div className='flex gap-4 items-start'>
                        <div className={`p-2.5 rounded-xl bg-primary/10 text-primary`}>
                          {highlight.icon}
                        </div>
                        <div className='space-y-1'>
                          <h4 className='font-bold text-sm uppercase tracking-tight'>
                            {highlight.title}
                          </h4>
                          <p className='text-xs text-muted-foreground leading-relaxed'>
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
