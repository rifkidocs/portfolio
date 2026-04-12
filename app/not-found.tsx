"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Breadcrumb style indicator */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-primary mb-6">
              <FileQuestion className="w-3 h-3" />
              <span>Error 404</span>
              <span className="text-muted-foreground">/</span>
              <span>Not Found</span>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-7xl md:text-9xl font-extrabold tracking-tight mb-6"
            >
              404
            </motion.h1>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Resource Not Found</h2>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                The document you are looking for has been moved, deleted, or does not exist in this version.
              </p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                size="lg"
                asChild
                className="rounded-md px-8"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Documentation Home
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="rounded-md px-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Previous
              </Button>
            </motion.div>

            <div className="pt-16">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground opacity-50">
                &copy; {new Date().getFullYear()} Rifki Portfolio - System Information
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
