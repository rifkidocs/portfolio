"use client";

import React from "react";
import { motion } from "framer-motion";

export function BackgroundEffect() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      {/* Background Noise Texture */}
      <div className='absolute inset-0 bg-noise opacity-5 dark:opacity-10' />

      {/* Primary Background Layer */}
      <div className='absolute inset-0 bg-background' />

      {/* Floating Animated Orbs */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Orb 1: Blue/Indigo */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] opacity-60 dark:opacity-40'
        />

        {/* Orb 2: Purple/Pink */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -80, 0],
            scale: [1, 1.1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-1/3 -right-20 w-[600px] h-[600px] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-[120px] opacity-50 dark:opacity-30'
        />

        {/* Orb 3: Accent/Glow */}
        <motion.div
          animate={{
            x: [0, 80, -120, 0],
            y: [0, 100, 100, 0],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className='absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-[100px] opacity-40 dark:opacity-20'
        />

        {/* Orb 4: Soft White/Glow */}
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 dark:bg-blue-900/5 rounded-full blur-[150px] opacity-30 dark:opacity-20'
        />
      </div>

      {/* Global Vignette */}
      <div className='absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-transparent to-background opacity-60 pointer-events-none' />
    </div>
  );
}
