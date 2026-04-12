"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, Activity, BarChart3 } from "lucide-react";

export function GitHubStats() {
  return (
    <section id='metrics' className='py-16 lg:py-24 border-b'>
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
            <BarChart3 className="w-3 h-3" />
            <span>Metrics</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>Development Activity</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            Real-time statistics and contribution metrics from my GitHub profile.
          </p>
        </motion.div>

        <div className='space-y-8'>
          {/* Main Activity Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='p-6 rounded-lg border bg-card overflow-hidden'
          >
            <div className='flex items-center gap-2 mb-6 border-b pb-4'>
              <Activity className='w-4 h-4 text-primary' />
              <h3 className='text-sm font-bold uppercase tracking-widest'>Contribution Graph</h3>
            </div>

            <div className='w-full overflow-x-auto'>
              <div className='min-w-[700px]'>
                <img
                  src='https://github-readme-activity-graph.vercel.app/graph?username=rifkidocs&theme=react-dark&hide_border=true&area=true'
                  alt='GitHub Contribution Graph'
                  className='w-full h-auto rounded opacity-90 hover:opacity-100 transition-opacity'
                />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">System Stats</h4>
              <img
                src='https://github-readme-stats.vercel.app/api?username=rifkidocs&show_icons=true&theme=react&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8'
                alt='GitHub Stats'
                className='w-full h-auto'
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Uptime Streak</h4>
              <img
                src='https://github-readme-streak-stats.herokuapp.com/?user=rifkidocs&theme=react&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=94a3b8'
                alt='GitHub Streak'
                className='w-full h-auto'
              />
            </motion.div>
          </div>

          <div className='pt-6 text-center'>
            <a
              href='https://github.com/rifkidocs'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm text-primary hover:underline transition-all'
            >
              <GitBranch className='w-4 h-4' />
              View detailed profile on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
