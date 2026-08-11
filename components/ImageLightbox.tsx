"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  currentIndex?: number;
  totalImages?: number;
  onPrev?: () => void;
  onNext?: () => void;
}

export function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt = "Image Preview",
  title,
  subtitle,
  currentIndex,
  totalImages,
  onPrev,
  onNext,
}: ImageLightboxProps) {
  const { lang } = useLanguage();
  const [zoom, setZoom] = React.useState<number>(1);
  const [lastTap, setLastTap] = React.useState<number>(0);

  // Reset zoom when image src or isOpen changes
  React.useEffect(() => {
    setZoom(1);
  }, [src, isOpen]);

  const handleClose = (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClose();
  };

  const handleZoomIn = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setZoom((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 3.5));
  };

  const handleZoomOut = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setZoom((prev) => Math.max(Number((prev - 0.5).toFixed(1)), 1));
  };

  const handleResetZoom = (e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setZoom(1);
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      handleResetZoom();
    } else {
      setZoom(2);
    }
  };

  const handleTouchEndImage = (e: React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      e.preventDefault();
      handleDoubleClick();
    }
    setLastTap(now);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      handleZoomIn();
    } else if (e.deltaY > 0) {
      handleZoomOut();
    }
  };

  // Keyboard controls for arrows
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && onPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext]);

  const isMulti = totalImages && totalImages > 1;

  const textDict = {
    zoomIn: lang === "en" ? "Zoom In" : "Perbesar",
    zoomOut: lang === "en" ? "Zoom Out" : "Perkecil",
    reset: lang === "en" ? "Reset Zoom" : "Reset Ukuran",
    close: lang === "en" ? "Close (ESC)" : "Tutup (ESC)",
    prev: lang === "en" ? "Previous Image" : "Gambar Sebelumnya",
    next: lang === "en" ? "Next Image" : "Gambar Selanjutnya",
    hint: lang === "en"
      ? "Scroll / Double tap to zoom • Drag to pan when zoomed • Arrow keys to navigate"
      : "Scroll / Double-tap untuk zoom • Drag/geser gambar saat zoom • Panah keyboard untuk navigasi",
  };

  return (
    <DialogPrimitive.Root 
      open={isOpen} 
      onOpenChange={(open) => { 
        if (!open) onClose();
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200"
          onClick={(e) => e.stopPropagation()}
        />
        <DialogPrimitive.Content 
          data-slot="lightbox-content"
          className="fixed inset-0 z-[210] flex flex-col justify-between p-0 border-none bg-transparent outline-none focus:outline-none shadow-none text-white select-none overflow-hidden duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogPrimitive.Title className="sr-only">
            {title || "Image Preview"}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            {subtitle || "Full screen image preview"}
          </DialogPrimitive.Description>

          {/* Responsive Header Controls Bar */}
          <div className="relative z-30 flex items-center justify-between gap-2 p-3 sm:p-6 bg-gradient-to-b from-black/95 via-black/80 to-transparent">
            {/* Title / Info Container (Flex-1 + Truncate) */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                {title && (
                  <h3 className="text-xs sm:text-base font-bold text-white truncate leading-tight">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-[10px] sm:text-xs text-zinc-400 truncate mt-0.5">
                    {subtitle}
                  </p>
                )}
              </div>
              {isMulti && currentIndex !== undefined && (
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] sm:text-xs font-mono font-bold border border-amber-500/30 shrink-0">
                  {currentIndex + 1} / {totalImages}
                </span>
              )}
            </div>

            {/* Action Buttons (Shrink-0: Never Overflow) */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 3.5}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-all active:scale-95 border border-white/10 cursor-pointer touch-manipulation"
                title={textDict.zoomIn}
                aria-label={textDict.zoomIn}
              >
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 1}
                className="p-1.5 sm:p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 transition-all active:scale-95 border border-white/10 cursor-pointer touch-manipulation"
                title={textDict.zoomOut}
                aria-label={textDict.zoomOut}
              >
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {zoom > 1 && (
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 sm:p-2 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition-all active:scale-95 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1 border border-amber-500/30 cursor-pointer touch-manipulation"
                  title={textDict.reset}
                  aria-label={textDict.reset}
                >
                  <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden md:inline">{Math.round(zoom * 100)}%</span>
                </button>
              )}

              <div className="w-px h-5 sm:h-6 bg-white/20 mx-0.5 sm:mx-1" />

              <button
                type="button"
                onClick={handleClose}
                className="p-2 sm:p-2.5 rounded-lg bg-red-500/20 hover:bg-red-600 text-white transition-all active:scale-95 border border-red-500/40 shadow-lg font-bold cursor-pointer touch-manipulation shrink-0"
                title={textDict.close}
                aria-label={textDict.close}
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Main Display Area with Native Framer Motion Drag Panning */}
          <div
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden cursor-default"
            onWheel={handleWheel}
            onDoubleClick={handleDoubleClick}
            onTouchEnd={handleTouchEndImage}
          >
            {/* Previous Arrow Button */}
            {isMulti && onPrev && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-4 rounded-full bg-black/80 hover:bg-amber-500 text-white border border-white/20 shadow-2xl transition-all active:scale-95 group cursor-pointer touch-manipulation"
                title={textDict.prev}
                aria-label={textDict.prev}
              >
                <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* Image Container with Native Framer Motion Drag Panning when Zoomed */}
            <motion.div
              key={src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: zoom, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              drag={zoom > 1}
              dragConstraints={{
                left: -450 * (zoom - 1),
                right: 450 * (zoom - 1),
                top: -350 * (zoom - 1),
                bottom: 350 * (zoom - 1),
              }}
              dragElastic={0.08}
              dragMomentum={false}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              style={{
                cursor: zoom > 1 ? "grab" : "zoom-in",
              }}
              className="relative max-w-full max-h-full flex items-center justify-center select-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl pointer-events-none select-none"
              />
            </motion.div>

            {/* Next Arrow Button */}
            {isMulti && onNext && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-4 rounded-full bg-black/80 hover:bg-amber-500 text-white border border-white/20 shadow-2xl transition-all active:scale-95 group cursor-pointer touch-manipulation"
                title={textDict.next}
                aria-label={textDict.next}
              >
                <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Footer Bar / Navigation Info */}
          <div className="relative z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col items-center justify-center gap-1.5">
            {isMulti && currentIndex !== undefined && (
              <div className="flex items-center gap-1.5 mb-1">
                {Array.from({ length: totalImages || 0 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-amber-400 w-6"
                        : "bg-white/30 w-1.5"
                    }`}
                  />
                ))}
              </div>
            )}
            <p className="text-[10px] sm:text-xs text-zinc-400 font-mono text-center truncate max-w-full px-2">
              {textDict.hint}
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
