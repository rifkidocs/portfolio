"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Github,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

import { SidebarContent } from "./DocsLayout";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

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
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search documentation..." 
              className="pl-9 bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-9 text-sm"
              readOnly
              onClick={() => {
                // Potential integration with BlogSearch or a global command palette
              }}
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        {/* Right: Socials & Theme Toggle */}
        <div className="flex items-center gap-2">
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
