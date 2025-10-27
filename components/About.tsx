"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import ProfileCard from "@/components/ProfileCard";
import SpotlightCard from "@/components/SpotlightCard";

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "2+ Years Experience",
      description: "Building scalable web applications",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Modern Technologies",
      description: "React, Next.js, Headless CMS, and more",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-muted/30 dark:bg-transparent w-full overflow-x-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <ProfileCard
                name={"Rifki"}
                title={personalInfo.title}
                handle="rifkidocs"
                status="Available for work"
                contactText="Contact Me"
                avatarUrl="/profile.png"
                miniAvatarUrl="/foto.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                onContactClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Bio */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in creating modern, responsive web applications
                  using cutting-edge technologies. My expertise spans the entire
                  development stack, from crafting beautiful user interfaces to
                  building robust backend systems and managing databases.
                </p>
              </div>

              {/* Download CV Button */}
              <div className="pt-4">
                <Button size="lg" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SpotlightCard
                      className="h-full p-6 text-center"
                      spotlightColor="rgba(255, 255, 255, 0.15)"
                      lightSpotlightColor="rgba(0, 0, 0, 0.15)"
                    >
                      <div className="mb-3 flex justify-center">
                        <div className="bg-foreground p-2 rounded-lg">
                          <div className="text-background">
                            {highlight.icon}
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
