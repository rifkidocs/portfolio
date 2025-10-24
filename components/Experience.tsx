"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Briefcase,
  GraduationCap,
  User,
  Calendar,
  Users,
  Award,
  Code,
} from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  const companyIcons = {
    "TechCorp Solutions": <Building2 className="w-5 h-5" />,
    StartupXYZ: <Briefcase className="w-5 h-5" />,
    "WebDev Agency": <Code className="w-5 h-5" />,
    Freelance: <User className="w-5 h-5" />,
  };

  const positionIcons = {
    "Senior Fullstack Developer": <Award className="w-4 h-4" />,
    "Fullstack Developer": <Code className="w-4 h-4" />,
    "Frontend Developer": <Code className="w-4 h-4" />,
    "Web Developer": <Code className="w-4 h-4" />,
  };

  const statsIcons = [
    <Calendar className="w-6 h-6" />,
    <Building2 className="w-6 h-6" />,
    <Award className="w-6 h-6" />,
    <Code className="w-6 h-6" />,
  ];

  const statsColors = [
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-orange-500",
  ];
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the experiences that shaped my career
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-linear-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                              {companyIcons[
                                experience.company as keyof typeof companyIcons
                              ] || <Building2 className="w-5 h-5 text-white" />}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">
                                {experience.position}
                              </h3>
                              <p className="text-lg text-primary font-semibold">
                                {experience.company}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={
                                experience.current ? "default" : "secondary"
                              }
                            >
                              {experience.current ? "Current" : "Previous"}
                            </Badge>
                            <p className="text-sm text-muted-foreground mt-1">
                              {experience.duration}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: itemIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Companies", value: "4" },
              { label: "Projects Completed", value: "50+" },
              { label: "Technologies", value: "20+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`${statsColors[index]} mb-2 flex justify-center`}
                >
                  <div
                    className={`bg-linear-to-r ${
                      index === 0
                        ? "from-blue-500 to-cyan-500"
                        : index === 1
                        ? "from-green-500 to-emerald-500"
                        : index === 2
                        ? "from-purple-500 to-violet-500"
                        : "from-orange-500 to-red-500"
                    } p-3 rounded-full`}
                  >
                    <div className="text-white">{statsIcons[index]}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
