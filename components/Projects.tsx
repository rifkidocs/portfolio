"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Layers,
  Code2,
  Globe,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FavoriteProjectShowcase } from "@/components/FavoriteProjectShowcase";
import { projects, Project, getProjectTitle, getProjectDescription } from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

export function Projects() {
  const { t, lang } = useLanguage();
  const favoriteProjects = projects.filter((project) => project.isFavorite);
  const featuredProjects = projects.filter((project) => project.featured && !project.isFavorite);
  const otherProjects = projects.filter((project) => !project.featured && !project.isFavorite);

  return (
    <section id='projects' className='py-16 lg:py-24 border-b'>
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
            <Layers className="w-3 h-3" />
            <span>{t.projects.badge}</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>{t.projects.title}</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Favorite Projects Showcase */}
        {favoriteProjects.map((project, idx) => (
          <FavoriteProjectShowcase key={project.id} project={project} index={idx} />
        ))}

        {/* Featured Projects List */}
        <div className='grid gap-6 mb-12'>
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Other Secondary Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 pt-12 border-t"
        >
          <h3 className="text-xl font-bold tracking-tight mb-2">{t.projects.otherProjectsTitle}</h3>
          <p className="text-sm text-muted-foreground">{t.projects.otherProjectsSubtitle}</p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-4'>
          {otherProjects.map((project, idx) => (
            <OtherProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-16 p-6 rounded-lg bg-muted/30 border border-dashed border-muted-foreground/30 text-center">
          <p className="text-sm text-muted-foreground">
            {t.projects.githubHistoryText}{" "}
            <a href="https://github.com/rifkidocs" className="text-primary hover:underline underline-offset-4 font-medium">
              {t.projects.githubRepoLink}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          id={`project-${project.id}`}
          className="group border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors cursor-pointer scroll-mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          suppressHydrationWarning
        >
          <div className="grid md:grid-cols-5 gap-0">
            {/* Project Image */}
            <div className="md:col-span-2 relative aspect-video bg-muted border-r">
              {project.image && project.image !== "/api/placeholder/600/400" ? (
                <Image
                  src={project.image}
                  alt={getProjectTitle(project, lang)}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <Code2 className="w-12 h-12 opacity-20" />
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="md:col-span-3 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {getProjectTitle(project, lang)}
                  </h3>
                  <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter shrink-0">
                    {t.projects.featuredBadge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {getProjectDescription(project, lang)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] py-0 px-2 h-5 font-medium">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] text-muted-foreground font-mono">+{project.techStack.length - 4} more</span>
                  )}
                </div>
              </div>
              <div className="flex items-center text-xs font-medium text-primary">
                {t.projects.viewDetails} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <ProjectDialogContent project={project} />
    </Dialog>
  );
}

function OtherProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          id={`project-${project.id}`}
          className="flex flex-col border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-colors cursor-pointer group scroll-mt-24"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          {/* Thumbnail */}
          <div className="relative aspect-video bg-muted border-b">
            {project.image && project.image !== "/api/placeholder/600/400" ? (
              <Image
                src={project.image}
                alt={getProjectTitle(project, lang)}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <Code2 className="w-8 h-8 opacity-20" />
              </div>
            )}
          </div>

          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h4 className="font-bold group-hover:text-primary transition-colors line-clamp-1 text-sm">
                {getProjectTitle(project, lang)}
              </h4>
              <div className="p-1 rounded-md bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                <Plus className="w-3 h-3" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed flex-1">
              {getProjectDescription(project, lang)}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 3).map(tech => (
                <span key={tech} className="text-[9px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded italic">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-[9px] text-muted-foreground font-mono">+{project.techStack.length - 3}</span>
              )}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      <ProjectDialogContent project={project} />
    </Dialog>
  );
}

function ProjectDialogContent({ project }: { project: Project }) {
  const { t, lang } = useLanguage();

  return (
    <DialogContent className="sm:max-w-3xl max-h-[96vh] md:max-h-[90vh] overflow-y-auto p-0 gap-0 border-none shadow-2xl flex flex-col">
      {/* Premium Header with Image */}
      <div className="relative aspect-video w-full group shrink-0 max-h-[220px] sm:max-h-[300px] overflow-hidden bg-slate-950">
        {project.image && project.image !== "/api/placeholder/600/400" ? (
          <Image
            src={project.image}
            alt={getProjectTitle(project, lang)}
            fill
            className="object-contain"
          />
        ) : (
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <Code2 className="w-20 h-20 text-muted-foreground opacity-10" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />
        
        {/* Status Badge on Image */}
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-primary text-primary-foreground border-none px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-lg">
            {t.projects.activeStatus}
          </Badge>
        </div>
      </div>

      <div className="p-6 md:p-8 -mt-8 relative bg-background rounded-t-[1.5rem] flex-1 overflow-y-auto">
        <DialogHeader className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-primary mb-3 uppercase tracking-[0.2em] font-bold">
            <span className="px-1.5 py-0.5 bg-primary/10 rounded">Spec.v1</span>
            <span className="text-muted-foreground">/</span>
            <span>Ref: {project.id.padStart(3, '0')}</span>
          </div>
          <DialogTitle className="text-3xl md:text-4xl font-extrabold tracking-tight leading-none mb-2">
            {getProjectTitle(project, lang)}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Content - 2 cols */}
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h4>{t.projects.abstract}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {getProjectDescription(project, lang)}
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <h4>{t.projects.stackHeader}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border text-xs font-medium hover:bg-muted transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    {tech}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 1 col */}
          <div className="space-y-8">
            <section className="p-6 rounded-xl bg-muted/30 border border-muted-foreground/10 space-y-6">
              <div className="space-y-4">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t.projects.deployment}</h5>
                <div className="space-y-2">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild className="w-full justify-start font-bold shadow-sm h-10">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4 mr-2" />
                        {t.projects.liveInstance}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="w-full justify-start font-bold h-10">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t.projects.repository}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-muted-foreground/10 space-y-4">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t.projects.metaData}</h5>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-mono">
                  <div>
                    <span className="text-muted-foreground block mb-1">{t.projects.specVersion}</span>
                    <span className="font-bold">1.0.4-stable</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">{t.projects.license}</span>
                    <span className="font-bold">MIT-Standard</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
