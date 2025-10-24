"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

const skillCategories = {
  frontend: {
    title: "Frontend",
    color: "bg-blue-500",
    icon: <Monitor className="w-4 h-4" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  backend: {
    title: "Backend",
    color: "bg-green-500",
    icon: <Server className="w-4 h-4" />,
    gradient: "from-green-500 to-emerald-500",
  },
  database: {
    title: "Database",
    color: "bg-purple-500",
    icon: <Database className="w-4 h-4" />,
    gradient: "from-purple-500 to-violet-500",
  },
  tools: {
    title: "Tools",
    color: "bg-orange-500",
    icon: <Wrench className="w-4 h-4" />,
    gradient: "from-orange-500 to-red-500",
  },
} as const;

export function Skills() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<keyof typeof skillCategories>("frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() =>
                  setSelectedCategory(key as keyof typeof skillCategories)
                }
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === key
                    ? `bg-linear-to-r ${category.gradient} text-white`
                    : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                <span
                  className={`${
                    selectedCategory === key
                      ? "text-white"
                      : `text-${category.gradient.split("-")[1]}-500`
                  }`}
                >
                  {category.icon}
                </span>
                <span>{category.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="mt-3 text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* All Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">All Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={skill.name}
                          className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="mt-2 text-xs font-medium text-center group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
