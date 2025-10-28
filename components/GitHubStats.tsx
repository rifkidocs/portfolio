"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, Activity } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export function GitHubStats() {
  return (
    <section className="py-16 lg:py-24 bg-background dark:bg-muted/10 w-full overflow-x-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              GitHub Activity
            </h2>
            <p className="text-muted-foreground text-lg">
              My coding consistency and contribution statistics
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <SpotlightCard
              className="p-6 lg:p-8"
              spotlightColor="rgba(255, 255, 255, 0.08)"
              lightSpotlightColor="rgba(0, 0, 0, 0.08)"
            >
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Contribution Activity</h3>
              </div>

              {/* GitHub Contribution Graph Embed */}
              <div className="w-full overflow-x-auto">
                <div className="min-w-[640px]">
                  {/* Using GitHub Readme Stats for contribution graph */}
                  <img
                    src="https://github-readme-activity-graph.vercel.app/graph?username=rifkidocs&theme=react-dark&hide_border=true&area=true&custom_title=Contribution%20Graph"
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* GitHub Stats Cards */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=rifkidocs&show_icons=true&theme=react&hide_border=true&bg_color=00000000&title_color=3b82f6&icon_color=3b82f6&text_color=94a3b8"
                    alt="GitHub Stats"
                    className="w-full h-auto"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=rifkidocs&theme=react&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=94a3b8"
                    alt="GitHub Streak"
                    className="w-full h-auto"
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
            className="text-center mt-8"
          >
            <a
              href="https://github.com/rifkidocs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-all"
            >
              <GitBranch className="w-4 h-4" />
              View Full GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
