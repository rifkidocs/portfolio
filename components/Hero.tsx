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
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Subtle Grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.15] dark:opacity-[0.07]'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated shader overlay - only visible in dark mode */}
        <div className='absolute inset-0 opacity-0 dark:opacity-30 mix-blend-screen'>
          <DarkVeil />
        </div>
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
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-muted-foreground'>
              Hello, I&apos;m
            </motion.div>

            {/* Name with Gradient Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              className='text-5xl md:text-7xl font-bold gradient-text'>
              {personalInfo.name}
            </motion.h1>

            {/* Title with typewriter feel */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='text-2xl md:text-3xl font-semibold text-foreground'>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}>
                {personalInfo.title}
              </motion.span>
            </motion.h2>

            {/* Bio with fade in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons with enhanced hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-6'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                <Button
                  size='lg'
                  onClick={scrollToProjects}
                  className='w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 border-0 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20'>
                  <Code className='w-4 h-4 mr-2' />
                  View My Work
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
                <Button
                  variant='outline'
                  size='lg'
                  onClick={scrollToContact}
                  className='w-full sm:w-auto transition-all duration-300 hover:border-primary hover:shadow-md'>
                  <Mail className='w-4 h-4 mr-2' />
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}>
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
            </motion.div>

            {/* Social Links with floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className='flex justify-center space-x-4 pt-8'>
              {socialLinks
                .filter((social) => social.name !== "Discord")
                .map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      animation: `float ${
                        3 + index * 0.5
                      }s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}>
                    <Button
                      variant='ghost'
                      size='sm'
                      asChild
                      className='hover:bg-foreground/10 transition-all duration-300'>
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
                  </motion.div>
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
