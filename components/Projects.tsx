"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code2,
  Globe,
  Calendar,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<
    (typeof projects)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  // Pagination for Other Projects
  const [otherPage, setOtherPage] = React.useState(1);
  const otherPerPage = 3;
  const totalOtherPages = Math.ceil(otherProjects.length / otherPerPage) || 1;
  const paginatedOtherProjects = React.useMemo(() => {
    const startIndex = (otherPage - 1) * otherPerPage;
    return otherProjects.slice(startIndex, startIndex + otherPerPage);
  }, [otherProjects, otherPage]);

  const openProjectDialog = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const techLogos: Record<string, string> = {
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Tailwind CSS": "https://tailwindcss.com/favicons/favicon-32x32.png",
    Tailwind: "https://tailwindcss.com/favicons/favicon-32x32.png",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    Strapi:
      "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/strapi.png",
    WordPress:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    Flowbite: "https://api.iconify.design/logos:flowbite.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Chart.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
    PWA: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    "Socket.io":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    JWT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jsonwebtokens/jsonwebtokens-original.svg",
    MDX: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
    Prisma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    "OpenWeather API":
      "https://api.iconify.design/simple-icons:openweathermap.svg",
    Cloudinary: "https://api.iconify.design/logos:cloudinary-icon.svg",
    "@dnd-kit": "https://api.iconify.design/material-symbols:drag-pan-rounded.svg",
    NextUI: "https://nextui.org/favicon.ico",
    docx: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/microsoft-word.png",
    jspdf:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Premium Plugins":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    "Google Gemini":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    Redis:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Next.js 16":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    GSAP: "https://api.iconify.design/logos:greensock-icon.svg",
    Midtrans: "https://api.iconify.design/material-symbols:payments-outline-rounded.svg",
  };

  return (
    <>
      <section
        id='projects'
        className='py-20 lg:py-32 relative w-full overflow-x-hidden bg-gradient-to-b from-muted/30 via-background to-muted/20 dark:from-[#0f0f18] dark:via-[#0a0a10] dark:to-[#0d0d15]'>
        {/* Colorful blur orbs */}
        <div className='absolute top-40 left-10 w-96 h-96 bg-orange-400/8 dark:hidden rounded-full blur-3xl pointer-events-none' />
        <div className='absolute top-1/3 -right-20 w-80 h-80 bg-rose-500/10 dark:hidden rounded-full blur-3xl pointer-events-none' />
        <div className='absolute bottom-40 left-1/4 w-72 h-72 bg-amber-400/8 dark:hidden rounded-full blur-3xl pointer-events-none' />
        <div className='absolute bottom-20 right-1/4 w-64 h-64 bg-pink-400/8 dark:hidden rounded-full blur-3xl pointer-events-none' />

        {/* Noise texture overlay */}
        <div
          className='absolute inset-0 opacity-[0.015] dark:hidden pointer-events-none z-0'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid pattern background - more visible */}
        <div
          className='absolute inset-0 opacity-35 dark:opacity-18 pointer-events-none z-0'
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(128, 128, 128, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(128, 128, 128, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top blend gradient */}
        <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-muted/30 dark:from-[#0f0f18] to-transparent pointer-events-none z-0' />

        {/* Bottom blend gradient */}
        <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/20 dark:from-[#0d0d15] to-transparent pointer-events-none z-0' />

        <div className='container mx-auto px-4 lg:px-8 relative z-10'>
          <div className='max-w-7xl mx-auto'>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent'>
                Featured Projects
              </h2>
              <div className='w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6' />
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Explore my recent work that showcases my skills and creativity
              </p>
            </motion.div>

            {/* Featured Projects Grid */}
            <div className='grid md:grid-cols-2 gap-8 mb-20'>
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  <Card
                    className='group h-full overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20'
                    onClick={() => openProjectDialog(project)}>
                    {/* Project Image/Preview */}
                    <div className='relative aspect-video bg-linear-to-br from-primary/10 to-primary/5 overflow-hidden rounded-t-lg'>
                      {project.image &&
                      project.image !== "/api/placeholder/600/400" ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-300'
                          />
                          {/* Overlay on Hover */}
                          <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </>
                      ) : (
                        <>
                          {/* Animated Background Pattern */}
                          <div className='absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity'>
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                          </div>

                          {/* Project Icon */}
                          <div className='absolute inset-0 flex items-center justify-center'>
                            <motion.div
                              className='relative z-10'
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 300 }}>
                              <div className='bg-foreground p-6 rounded-2xl shadow-2xl'>
                                <Eye className='w-12 h-12 mx-auto text-background' />
                              </div>
                            </motion.div>
                          </div>

                          {/* Overlay on Hover */}
                          <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </>
                      )}

                      {/* Tech Stack Preview */}
                      <div className='absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                        {project.techStack.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant='secondary'
                            className='backdrop-blur-sm bg-background/80'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <CardContent className='p-6'>
                      <div className='flex items-start justify-between mb-3'>
                        <div className='flex-1'>
                          <h3 className='text-2xl font-bold mb-2 group-hover:text-primary transition-colors'>
                            {project.title}
                          </h3>
                          <p className='text-muted-foreground text-sm line-clamp-2'>
                            {project.description}
                          </p>
                        </div>
                        <Badge variant='secondary' className='ml-2 shrink-0'>
                          Featured
                        </Badge>
                      </div>

                      {/* Tech Stack Icons */}
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant='outline'
                            className='flex items-center gap-1.5'>
                            {techLogos[tech] ? (
                              <Image
                                src={techLogos[tech]}
                                alt={tech}
                                width={16}
                                height={16}
                                className='w-4 h-4'
                              />
                            ) : (
                              <Code2 className='w-3 h-3' />
                            )}
                            <span className='text-xs'>{tech}</span>
                          </Badge>
                        ))}
                        {project.techStack.length > 4 && (
                          <Badge variant='outline' className='text-xs'>
                            +{project.techStack.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className='flex gap-2'>
                        {project.liveUrl && (
                          <Button
                            size='sm'
                            variant='default'
                            className='flex-1'
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, "_blank");
                            }}>
                            <ExternalLink className='w-4 h-4 mr-2' />
                            Visit Site
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size='sm'
                            variant='outline'
                            className='flex-1'
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.githubUrl, "_blank");
                            }}>
                            <Github className='w-4 h-4 mr-2' />
                            Code
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <h3 className='text-3xl font-bold text-center mb-12'>
                  Other Projects
                </h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {paginatedOtherProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}>
                      <Card
                        className='h-full group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/10'
                        onClick={() => openProjectDialog(project)}>
                        <div className='aspect-video bg-linear-to-br from-primary/10 to-primary/5 relative overflow-hidden rounded-t-lg'>
                          {project.image &&
                          project.image !== "/api/placeholder/600/400" ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className='object-cover group-hover:scale-105 transition-transform duration-300'
                            />
                          ) : (
                            <div className='absolute inset-0 flex items-center justify-center'>
                              <div className='bg-foreground p-4 rounded-xl'>
                                <Eye className='w-8 h-8 text-background' />
                              </div>
                            </div>
                          )}
                        </div>
                        <CardContent className='p-4 space-y-3'>
                          <h4 className='font-semibold text-lg group-hover:text-primary transition-colors'>
                            {project.title}
                          </h4>
                          <p className='text-sm text-muted-foreground line-clamp-2'>
                            {project.description}
                          </p>
                          <div className='flex flex-wrap gap-1.5'>
                            {project.techStack.slice(0, 3).map((tech) => (
                              <Badge
                                key={tech}
                                variant='outline'
                                className='flex items-center gap-1.5 text-xs'>
                                {techLogos[tech] ? (
                                  <Image
                                    src={techLogos[tech]}
                                    alt={tech}
                                    width={14}
                                    height={14}
                                    className='w-3.5 h-3.5'
                                  />
                                ) : (
                                  <Code2 className='w-3 h-3' />
                                )}
                                <span>{tech}</span>
                              </Badge>
                            ))}
                            {project.techStack.length > 3 && (
                              <Badge variant='outline' className='text-xs'>
                                +{project.techStack.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                {totalOtherPages > 1 && (
                  <div className='mt-8 flex items-center justify-center gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      disabled={otherPage === 1}
                      onClick={() => setOtherPage((p) => Math.max(1, p - 1))}>
                      Prev
                    </Button>
                    {Array.from(
                      { length: totalOtherPages },
                      (_, i) => i + 1
                    ).map((pageNum) => (
                      <Button
                        key={pageNum}
                        size='sm'
                        variant={pageNum === otherPage ? "default" : "outline"}
                        onClick={() => setOtherPage(pageNum)}
                        className='w-9'>
                        {pageNum}
                      </Button>
                    ))}
                    <Button
                      variant='outline'
                      size='sm'
                      disabled={otherPage === totalOtherPages}
                      onClick={() =>
                        setOtherPage((p) => Math.min(totalOtherPages, p + 1))
                      }>
                      Next
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Animated Dialog */}
      <AnimatePresence>
        {isDialogOpen && selectedProject && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeDialog}
            />

            {/* Dialog Content */}
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}>
              <motion.div
                className='relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border bg-card shadow-2xl pointer-events-auto'
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 400,
                  duration: 0.3,
                }}>
                {/* Close Button */}
                <button
                  onClick={closeDialog}
                  className='absolute top-4 right-4 z-10 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors'>
                  <X className='w-5 h-5' />
                </button>

                {/* Dialog Content */}
                <div className='overflow-y-auto max-h-[90vh]'>
                  {/* Header Image */}
                  {selectedProject.image &&
                  selectedProject.image !== "/api/placeholder/600/400" ? (
                    <div className='w-full flex justify-center bg-linear-to-br from-primary/20 to-primary/5 overflow-hidden'>
                      <div className='relative w-full max-h-[60vh]'>
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          width={1200}
                          height={675}
                          className='w-full h-auto object-contain'
                          priority
                        />
                      </div>
                    </div>
                  ) : (
                    <div className='relative h-64 w-full bg-linear-to-br from-primary/20 to-primary/5 overflow-hidden'>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-foreground p-8 rounded-2xl shadow-xl'>
                          <Eye className='w-16 h-16 text-background' />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className='p-4 sm:p-8 space-y-4 sm:space-y-6'>
                    {/* Title and Badge */}
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
                      <div>
                        <h2 className='text-2xl sm:text-3xl font-bold mb-2'>
                          {selectedProject.title}
                        </h2>
                        <div className='flex items-center gap-2 text-muted-foreground text-sm'>
                          <Calendar className='w-4 h-4' />
                          {selectedProject.featured
                            ? "Featured Project"
                            : "Project"}
                        </div>
                      </div>
                      {selectedProject.featured && (
                        <Badge
                          variant='secondary'
                          className='text-sm self-start'>
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className='text-lg font-semibold mb-2'>About</h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className='text-lg font-semibold mb-3'>
                        Technologies
                      </h3>
                      <div className='flex flex-wrap gap-2'>
                        {selectedProject.techStack.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}>
                            <Badge
                              variant='outline'
                              className='flex items-center gap-2 px-3 py-1.5 text-sm'>
                              <span className='bg-background p-1 rounded'>
                                {techLogos[tech] ? (
                                  <Image
                                    src={techLogos[tech]}
                                    alt={tech}
                                    width={18}
                                    height={18}
                                    className='w-4 h-4'
                                  />
                                ) : (
                                  <Code2 className='w-4 h-4' />
                                )}
                              </span>
                              <span>{tech}</span>
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className='flex flex-col sm:flex-row gap-3 pt-4 border-t'>
                      {selectedProject.liveUrl && (
                        <Button
                          size='lg'
                          className='flex-1 py-3 bg-foreground text-background hover:bg-foreground/90'
                          asChild>
                          <a
                            href={selectedProject.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Globe className='w-5 h-5 mr-2' />
                            Visit Site
                            <ExternalLink className='w-4 h-4 ml-2' />
                          </a>
                        </Button>
                      )}
                      {selectedProject.githubUrl && (
                        <Button
                          size='lg'
                          variant='outline'
                          className='flex-1 py-3'
                          asChild>
                          <a
                            href={selectedProject.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Github className='w-5 h-5 mr-2' />
                            View Source Code
                            <ExternalLink className='w-4 h-4 ml-2' />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
