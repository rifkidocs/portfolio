"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Code,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { personalInfo, socialLinks } from "@/lib/data";
import DarkVeil from "./DarkVeil";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden w-full lg:pt-0 pt-16'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none bg-background'>
        {/* Base background color matching Hero */}
        <div className='absolute inset-0 bg-background' />

        {/* Colorful blur orbs for light mode */}
        <div className='absolute top-20 -left-32 w-[500px] h-[500px] bg-blue-400/15 dark:bg-transparent rounded-full blur-3xl pointer-events-none' />
        <div className='absolute top-40 right-0 w-96 h-96 bg-purple-400/12 dark:bg-transparent rounded-full blur-3xl pointer-events-none' />
        <div className='absolute bottom-40 left-1/3 w-80 h-80 bg-cyan-400/10 dark:bg-transparent rounded-full blur-3xl pointer-events-none' />
        <div className='absolute bottom-20 right-1/4 w-72 h-72 bg-pink-400/10 dark:bg-transparent rounded-full blur-3xl pointer-events-none' />

        {/* Noise texture overlay - light mode only */}
        <div
          className='absolute inset-0 opacity-[0.012] dark:opacity-0 pointer-events-none'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern for mobile and light mode desktop - more visible */}
        <div
          className='absolute inset-0 opacity-40 md:opacity-40 lg:opacity-40 md:dark:opacity-0 lg:dark:opacity-0'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated shader overlay - only visible in dark mode */}
        <div className='absolute inset-0 opacity-0 dark:opacity-50'>
          <DarkVeil />
        </div>

        {/* Bottom gradient for smooth transition to About */}
        <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-muted/20 dark:to-[#0a0a0f] pointer-events-none' />
      </div>

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'>
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-muted-foreground'>
              Hello, I&apos;m
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-5xl md:text-7xl font-bold'>
              {personalInfo.name}
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-2xl md:text-3xl font-semibold text-foreground'>
              {personalInfo.title}
            </motion.h2>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6'>
              <Button
                size='lg'
                onClick={scrollToProjects}
                className='w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 border-0'>
                <Code className='w-4 h-4 mr-2' />
                View My Work
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={scrollToContact}
                className='w-full sm:w-auto'>
                <Mail className='w-4 h-4 mr-2' />
                Get In Touch
              </Button>
              <Button
                variant='ghost'
                size='lg'
                className='w-full sm:w-auto'
                asChild>
                <a
                  href={personalInfo.resumeUrl}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Download className='w-4 h-4 mr-2' />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='flex justify-center space-x-4 pt-8'>
              {socialLinks
                .filter((social) => social.name !== "Discord")
                .map((social) => (
                  <Button
                    key={social.name}
                    variant='ghost'
                    size='sm'
                    asChild
                    className='hover:scale-110 transition-transform'>
                    <a
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.name}>
                      {social.name === "GitHub" && (
                        <Github className='w-5 h-5 transition-colors' />
                      )}
                      {social.name === "LinkedIn" && (
                        <Linkedin className='w-5 h-5 transition-colors' />
                      )}
                      {social.name === "Instagram" && (
                        <Instagram className='w-5 h-5 transition-colors' />
                      )}
                      {social.name === "Email" && (
                        <Mail className='w-5 h-5 transition-colors' />
                      )}
                    </a>
                  </Button>
                ))}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
            <Button
              variant='ghost'
              size='sm'
              onClick={scrollToAbout}
              className='animate-bounce'>
              <ChevronDown className='w-5 h-5' />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
