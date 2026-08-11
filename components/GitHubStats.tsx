"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitBranch, Activity, BarChart3 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/lib/language-context";

export function GitHubStats() {
  const { t } = useLanguage();

  return (
    <section id='metrics' className='py-16 lg:py-24 border-b'>
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
            <BarChart3 className="w-3 h-3" />
            <span>{t.github.badge}</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>{t.github.title}</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            {t.github.subtitle}
          </p>
        </motion.div>

        <div className='space-y-8'>
          {/* Main Activity Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='p-6 rounded-lg border bg-card overflow-hidden'
          >
            <div className='flex items-center gap-2 mb-6 border-b pb-4'>
              <Activity className='w-4 h-4 text-primary' />
              <h3 className='text-sm font-bold uppercase tracking-widest'>Contribution Graph</h3>
            </div>

            <div className='w-full overflow-x-auto'>
              <div className='min-w-[700px]'>
                <GitHubImage 
                  src='/api/github?type=graph'
                  alt='GitHub Contribution Graph'
                  aspectRatio="aspect-[800/300]"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">System Stats</h4>
              <GitHubImage
                src='/api/github?type=stats'
                alt='GitHub Stats'
                aspectRatio="aspect-[495/195]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Uptime Streak</h4>
              <GitHubImage
                src='/api/github?type=streak'
                alt='GitHub Streak'
                aspectRatio="aspect-[495/195]"
              />
            </motion.div>
          </div>

          <div className='pt-6 text-center'>
            <a
              href='https://github.com/rifkidocs'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 text-sm text-primary hover:underline transition-all'
            >
              <GitBranch className='w-4 h-4' />
              View detailed profile on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubImage({ src, alt, aspectRatio }: { src: string; alt: string; aspectRatio: string }) {
  const [status, setStatus] = React.useState<'loading' | 'error' | 'success'>('loading');
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    setStatus('loading');
    if (timerRef.current) clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      setStatus(prev => prev !== 'success' ? 'error' : prev);
    }, 8000); // 8s timeout

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (status === 'error') return (
    <div className={cn("flex flex-col items-center justify-center p-6 bg-muted/5 rounded-md border border-dashed w-full", aspectRatio)}>
      <GitBranch className="w-4 h-4 text-muted-foreground/20 mb-2" />
      <span className="text-[10px] font-medium text-muted-foreground/40">Data synchronization paused</span>
    </div>
  );

  return (
    <div className={cn("relative flex items-center justify-center bg-muted/5 rounded-md overflow-hidden transition-all w-full", aspectRatio)}>
      {status === 'loading' && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px] z-10">
          <div className="w-4 h-4 border-2 border-primary/20 border-t-primary/60 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        unoptimized
        className={cn(
          "w-full h-auto transition-all duration-700",
          status === 'success' ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute"
        )}
        onLoad={() => {
          if (timerRef.current) clearTimeout(timerRef.current);
          setStatus('success');
        }}
        onError={() => {
          if (timerRef.current) clearTimeout(timerRef.current);
          setStatus('error');
        }}
      />
    </div>
  );
}
