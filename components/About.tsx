"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Code, Users, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { personalInfo } from "@/lib/data";

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "5+ Years Experience",
      description: "Building scalable web applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Mentoring junior developers",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Modern Technologies",
      description: "React, Next.js, Node.js expert",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-muted/30 dark:bg-transparent"
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
            {/* Left Column - Image and Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Avatar */}
              <div className="flex justify-center lg:justify-start">
                <Avatar className="w-48 h-48">
                  <AvatarImage
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                  />
                  <AvatarFallback className="text-4xl">
                    {personalInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" />
                  <span className="text-muted-foreground">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-muted-foreground">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Download CV Button */}
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
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
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in
                  continuous learning and staying up-to-date with the latest
                  industry trends.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 text-center">
                        <div className="mb-3 flex justify-center">
                          <div className="bg-foreground p-2 rounded-lg">
                            <div className="text-background">
                              {highlight.icon}
                            </div>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </CardContent>
                    </Card>
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
