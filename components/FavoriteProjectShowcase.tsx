"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Globe,
  CheckCircle2,
  LayoutDashboard,
  HardHat,
  Wallet,
  Boxes,
  Users,
  Building2,
  ArrowRight,
  Github,
  Monitor,
  Calculator,
  Target,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Project, ProjectSlide } from "@/lib/data";

const moduleTabs = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Master Perumahan", icon: Building2 },
  { label: "Progres Lapangan", icon: HardHat },
  { label: "Marketing", icon: Target },
  { label: "Piutang Konsumen", icon: Wallet },
  { label: "Logistik Gudang", icon: Boxes },
  { label: "HRM & Workers", icon: Users },
  { label: "Accounting & COA", icon: FileText },
];

interface FavoriteProjectShowcaseProps {
  project: Project;
  index?: number;
}

export function FavoriteProjectShowcase({ project, index = 0 }: FavoriteProjectShowcaseProps) {
  return (
    <div className="mb-8">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            id={`project-${project.id}`}
            className="group relative border rounded-xl overflow-hidden bg-gradient-to-b from-card via-card to-card/95 border-amber-500/40 hover:border-amber-500/90 transition-all duration-300 cursor-pointer scroll-mt-24 shadow-lg hover:shadow-amber-500/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Top Banner Accent */}
            <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/15 border-b border-amber-500/20 px-5 py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-amber-500 font-bold tracking-wider text-[11px] uppercase">
                <Sparkles className="w-3.5 h-3.5 fill-amber-500" />
                <span>Favorite Project Spotlight</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <Monitor className="w-3.5 h-3.5 text-amber-500" />
                <span className="font-semibold text-foreground">Interactive Module Showcase</span>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
              {/* Project Image - 2 cols */}
              <div className="md:col-span-2 relative aspect-video bg-muted border-r border-border/60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400 font-bold">
                  <Monitor className="w-3 h-3" />
                  <span>8 System Modules Inside</span>
                </div>
              </div>

              {/* Project Info - 3 cols */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <Badge className="bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-tighter shrink-0 border-none">
                      Favorite
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] py-0.5 px-2 font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] text-muted-foreground font-mono self-center">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-amber-500 pt-3 border-t border-border/40">
                  <span className="flex items-center group-hover:translate-x-1 transition-transform">
                    Buka Detail & Galeri Modul System <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">Klik untuk membuka</span>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        {/* Modal Showcase (Tampilan Foto di Atas, Penjelasan di Bawah) */}
        <FavoriteProjectDialogContent project={project} />
      </Dialog>
    </div>
  );
}

function FavoriteProjectDialogContent({ project }: { project: Project }) {
  const slides = project.slides || [];
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const activeSlide: ProjectSlide | undefined = slides[currentSlideIndex] || slides[0];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <DialogContent className="sm:max-w-4xl max-h-[96vh] md:max-h-[92vh] overflow-y-auto p-0 gap-0 border-amber-500/30 shadow-2xl bg-card flex flex-col">
      {/* Modal Header */}
      <DialogHeader className="p-6 bg-gradient-to-r from-amber-950/40 via-card to-card border-b border-border shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider mb-1.5">
          <Sparkles className="w-4 h-4 fill-amber-500" />
          <span>Enterprise System Showcase</span>
        </div>
        <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
          {project.description}
        </DialogDescription>
      </DialogHeader>

      <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto">
        {/* Module Filter Tabs - Responsive Grid (No Scrollbars) */}
        {slides.length > 0 && (
          <div className="w-full border-b border-border/60 pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 w-full">
              {slides.map((_, idx) => {
                const tabInfo = moduleTabs[idx % moduleTabs.length];
                const IconComponent = tabInfo.icon;
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 text-center ${
                      isActive
                        ? "bg-primary text-primary-foreground font-bold shadow-sm"
                        : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    <span className="truncate">{tabInfo.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeSlide && (
          <div className="space-y-6">
            {/* 🖼️ FOTO SPREAD ATAS: Clean Full Width Frame */}
            <div className="relative group rounded-xl border border-border/80 bg-black/60 overflow-hidden shadow-xl aspect-video w-full flex flex-col justify-center">
              {/* Main Image Frame */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Arrow Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-amber-500 transition-all shadow-lg"
                  title="Modul Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-amber-500 transition-all shadow-lg"
                  title="Modul Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Dot Indicators */}
              <div className="bg-slate-900/90 py-2 flex items-center justify-center gap-1.5 z-10 border-t border-slate-800">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlideIndex ? "bg-amber-500 w-6" : "bg-slate-700 hover:bg-slate-500 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 📝 PENJELASAN BAWAH: Detailed Module Breakdown */}
            <div className="grid md:grid-cols-12 gap-6 p-6 rounded-xl bg-muted/20 border border-border/60">
              {/* Left Column: Title & Description (7 cols) */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[11px] font-mono font-bold uppercase tracking-wider">
                    {moduleTabs[currentSlideIndex % moduleTabs.length].label}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {activeSlide.subtitle}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  {activeSlide.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeSlide.description}
                </p>
              </div>

              {/* Right Column: Key Capabilities & Tech Tags (5 cols) */}
              <div className="md:col-span-5 space-y-4 md:border-l md:border-border/60 md:pl-6">
                <div className="space-y-2">
                  <h6 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Kapabilitas & Fitur Modul
                  </h6>
                  <ul className="space-y-1.5">
                    {activeSlide.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Global Links Footer */}
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild className="font-bold shadow-md h-10">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  Kunjungi Live Website
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="font-bold h-10">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Repository
                </a>
              </Button>
            )}
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Bumi Wiraraja Group ERP System Spec.v2
          </span>
        </div>
      </div>
    </DialogContent>
  );
}
