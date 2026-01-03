"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, Activity } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export function GitHubStats() {
  return (
    <section className='py-16 lg:py-24 w-full overflow-x-hidden relative bg-gradient-to-b from-muted/30 via-muted/20 to-muted/30 dark:from-[#101018] dark:via-[#0c0c12] dark:to-[#0e0e16]'>
      {/* Colorful blur orbs */}
      <div className='absolute top-10 right-10 w-80 h-80 bg-green-500/8 dark:bg-green-500/4 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-10 -left-20 w-72 h-72 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none' />

      {/* Noise texture overlay */}
      <div
        className='absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none z-0'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern background */}
      <div
        className='absolute inset-0 opacity-30 dark:opacity-15 pointer-events-none'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Top blend gradient */}
      <div className='absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-muted/30 dark:from-[#101018] to-transparent pointer-events-none z-0' />

      {/* Bottom blend gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-muted/30 dark:from-[#0e0e16] to-transparent pointer-events-none z-0' />

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>
              GitHub Activity
            </h2>
            <p className='text-muted-foreground text-lg'>
              My coding consistency and contribution statistics
            </p>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full mt-4' />
          </motion.div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='w-full'>
            <SpotlightCard
              className='p-6 lg:p-8'
              spotlightColor='rgba(255, 255, 255, 0.08)'
              lightSpotlightColor='rgba(0, 0, 0, 0.08)'>
              <div className='flex items-center gap-2 mb-4'>
                <Activity className='w-5 h-5 text-primary' />
                <h3 className='text-xl font-semibold'>Contribution Activity</h3>
              </div>

              {/* GitHub Contribution Graph Embed */}
              <div className='w-full overflow-x-auto'>
                <div className='min-w-[640px]'>
                  {/* Using GitHub Readme Stats for contribution graph */}
                  <img
                    src='https://github-readme-activity-graph.vercel.app/graph?username=rifkidocs&theme=react-dark&hide_border=true&area=true&custom_title=Contribution%20Graph'
                    alt='GitHub Contribution Graph'
                    className='w-full h-auto rounded-lg'
                  />
                </div>
              </div>

              {/* GitHub Stats Cards */}
              <div className='grid md:grid-cols-2 gap-4 mt-6'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src='https://github-readme-stats.vercel.app/api?username=rifkidocs&show_icons=true&theme=react&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8'
                    alt='GitHub Stats'
                    className='w-full h-auto'
                  />
                </div>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src='https://github-readme-streak-stats.herokuapp.com/?user=rifkidocs&theme=react&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=94a3b8'
                    alt='GitHub Streak'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* View Profile Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-center mt-8'>
            <a
              href='https://github.com/rifkidocs'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-primary hover:underline transition-all'>
              <GitBranch className='w-4 h-4' />
              View Full GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
