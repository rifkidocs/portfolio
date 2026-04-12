"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CommandMenu } from "./CommandMenu";
import { SidebarContent } from "./DocsLayout";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 border-b bg-background/80 backdrop-blur-md">
      <div className="container h-full mx-auto flex items-center justify-between px-4 md:px-8 max-w-7xl">
        {/* Left: Logo & Menu Toggle (Mobile) */}
        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetHeader className="p-6 border-b">
                <SheetTitle className="text-left flex items-center gap-2">
                  <Image src="/logo-r.svg" alt="R Logo" width={28} height={28} />
                  Documentation
                </SheetTitle>
              </SheetHeader>
              <SidebarContent />
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2.5 group">
            <Image 
              src="/logo-r.svg" 
              alt="R Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-tight leading-none">RIFKI</span>
              <span className="text-[10px] text-muted-foreground font-mono font-bold tracking-widest uppercase mt-0.5">Docs.v1</span>
            </div>
          </Link>
        </div>

        {/* Center: Search (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="w-full max-w-md">
            <CommandMenu />
          </div>
        </div>

        {/* Right: Socials & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <div className="md:hidden">
            <CommandMenu triggerOnlyIcon />
          </div>
          
          <a 
            href="https://github.com/rifkidocs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex"
          >
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
