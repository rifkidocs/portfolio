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
import { 
  Project, 
  ProjectSlide, 
  getProjectTitle, 
  getProjectDescription,
  getSlideTitle,
  getSlideSubtitle,
  getSlideDescription,
  getSlideKeyFeatures
} from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

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
  const { t, lang } = useLanguage();

  const getModuleLabel = (idx: number) => {
    const keys: (keyof typeof t.modules)[] = [
      "dashboard",
      "masterPerumahan",
      "progresLapangan",
      "marketing",
      "piutangKonsumen",
      "logistikGudang",
      "hrmWorkers",
      "accountingCOA",
    ];
    const key = keys[idx % keys.length];
    return t.modules[key] || moduleTabs[idx % moduleTabs.length].label;
  };

  return (
    <div className="mb-8">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            id={`project-${project.id}`}
            className="group relative border rounded-xl overflow-hidden bg-card hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Top Favorite Spotlight Ribbon */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-black px-4 py-1.5 flex items-center justify-between font-bold text-xs">
              <div className="flex items-center gap-2 uppercase tracking-wider font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>{t.projects.favoriteBadge}</span>
              </div>
              <span className="text-[10px] font-mono opacity-90 font-semibold">Bumi Wiraraja Group ERP</span>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
              {/* Project Image - 2 cols */}
              <div className="md:col-span-2 relative aspect-video bg-muted border-r border-border/60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={getProjectTitle(project, lang)}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400 font-bold">
                  <Monitor className="w-3 h-3" />
                  <span>8 {t.projects.modulesBadge}</span>
                </div>
              </div>

              {/* Project Info - 3 cols */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors leading-tight">
                      {getProjectTitle(project, lang)}
                    </h3>
                    <Badge className="bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-tighter shrink-0 border-none">
                      {t.projects.favoriteBadge.split(" ")[0]}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {getProjectDescription(project, lang)}
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
                    {t.projects.favoriteButton} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">Open</span>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        {/* Modal Showcase */}
        <FavoriteProjectDialogContent project={project} getModuleLabel={getModuleLabel} />
      </Dialog>
    </div>
  );
}

function FavoriteProjectDialogContent({ project, getModuleLabel }: { project: Project, getModuleLabel: (idx: number) => string }) {
  const { t, lang } = useLanguage();
  const slides = project.slides || [];
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const activeSlide: ProjectSlide | undefined = slides[currentSlideIndex] || slides[0];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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
          {getProjectTitle(project, lang)}
        </DialogTitle>
        <DialogDescription className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
          {getProjectDescription(project, lang)}
        </DialogDescription>
      </DialogHeader>

      <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto">
        {/* Module Filter Tabs with Arrow Buttons (Left/Right) */}
        {slides.length > 0 && (
          <div className="w-full border-b border-border/60 pb-3 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              className="p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
              title="Geser Kiri"
              aria-label="Geser Kiri"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div ref={tabsRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex items-center gap-2 min-w-max">
                {slides.map((_, idx) => {
                  const tabInfo = moduleTabs[idx % moduleTabs.length];
                  const IconComponent = tabInfo.icon;
                  const isActive = idx === currentSlideIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                        isActive
                          ? "bg-primary text-primary-foreground font-bold shadow-md"
                          : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                      }`}
                    >
                      <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      <span>{getModuleLabel(idx)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTabs("right")}
              className="p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
              title="Geser Kanan"
              aria-label="Geser Kanan"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeSlide && (
          <div className="space-y-6">
            {/* FOTO SPREAD ATAS */}
            <div className="relative group rounded-xl border border-border/80 bg-black/60 overflow-hidden shadow-xl aspect-video w-full flex flex-col justify-center">
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
                      alt={getSlideTitle(activeSlide, lang)}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

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

            {/* PENJELASAN BAWAH */}
            <div className="grid md:grid-cols-12 gap-6 p-6 rounded-xl bg-muted/20 border border-border/60">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[11px] font-mono font-bold uppercase tracking-wider">
                    {getModuleLabel(currentSlideIndex)}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {getSlideSubtitle(activeSlide, lang)}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  {getSlideTitle(activeSlide, lang)}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getSlideDescription(activeSlide, lang)}
                </p>
              </div>

              <div className="md:col-span-5 space-y-4 md:border-l md:border-border/60 md:pl-6">
                <div className="space-y-2">
                  <h6 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {t.projects.capabilitiesHeader}
                  </h6>
                  <ul className="space-y-1.5">
                    {getSlideKeyFeatures(activeSlide, lang).map((feature, i) => (
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
                  {t.projects.liveInstance}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="font-bold h-10">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.repository}
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
