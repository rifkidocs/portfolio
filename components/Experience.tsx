"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, Award, Code } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  const companyLogos = {
    "Juragan Karya Digital Teknologi": "/juraganit.jpg",
    Webifyaja: "/webifyaja.jpg",
    "Infinite Learning Indonesia": "/infinite-learning.png",
  };

  const statsIcons = [
    <Calendar key="calendar" className="w-6 h-6" />,
    <Building2 key="building2" className="w-6 h-6" />,
    <Award key="award" className="w-6 h-6" />,
    <Code key="code" className="w-6 h-6" />,
  ];

  const statsColors = [
    "text-foreground",
    "text-foreground",
    "text-foreground",
    "text-foreground",
  ];
  return (
    <section
      id="experience"
      className="py-20 lg:py-32 bg-muted/30 w-full overflow-x-hidden relative"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(128, 128, 128, 0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
                        {/* Mobile: Stack vertically, Desktop: Horizontal */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                          {/* Logo and text - vertical on mobile, horizontal on desktop */}
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-3 gap-3 md:gap-0">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white border border-border shadow-sm">
                              {companyLogos[
                                experience.company as keyof typeof companyLogos
                              ] ? (
                                <Image
                                  src={
                                    companyLogos[
                                      experience.company as keyof typeof companyLogos
                                    ]
                                  }
                                  alt={experience.company}
                                  fill
                                  className="object-contain p-2"
                                  sizes="48px"
                                />
                              ) : (
                                <Building2 className="w-5 h-5 text-foreground" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold">
                                {experience.position}
                              </h3>
                              <p className="text-lg text-primary font-semibold">
                                {experience.company}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {experience.duration}
                              </p>
                            </div>
                          </div>
                          {/* Badges */}
                          <div className="flex md:flex-col md:items-end gap-2">
                            <Badge
                              variant={
                                experience.current ? "default" : "secondary"
                              }
                            >
                              {experience.current ? "Current" : "Previous"}
                            </Badge>
                            {experience.type && (
                              <Badge
                                variant="outline"
                                className={`${
                                  experience.type === "intern"
                                    ? "border-blue-500 text-blue-500"
                                    : experience.type === "freelance"
                                    ? "border-orange-500 text-orange-500"
                                    : "border-green-500 text-green-500"
                                }`}
                              >
                                {experience.type === "intern"
                                  ? "Intern"
                                  : experience.type === "freelance"
                                  ? "Freelance"
                                  : "Full Time"}
                              </Badge>
                            )}
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
              { label: "Years Experience", value: "2+" },
              { label: "Companies", value: "1" },
              { label: "Projects Completed", value: "5+" },
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
                  <div className="bg-foreground p-3 rounded-full">
                    <div className="text-background">{statsIcons[index]}</div>
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
