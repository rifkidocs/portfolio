"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Code,
  Briefcase,
  Building2,
  Mail,
  Menu,
  Newspaper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import GlassSurface from "./GlassSurface";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { name: "Blog", href: "/blog", icon: <Newspaper className="w-4 h-4" /> },
  {
    name: "Experience",
    href: "#experience",
    icon: <Building2 className="w-4 h-4" />,
  },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrollingUp, setIsScrollingUp] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrollingUp(false);
      }

      setLastScrollY(currentScrollY);

      // Set active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Layout - Full-width top-attached glass bar */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrollingUp ? 0 : -100,
          opacity: isScrollingUp ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 lg:hidden w-screen"
      >
        <div className="w-full h-14 flex items-center justify-between px-4 bg-background/60 backdrop-blur-md border-b border-border/30 supports-backdrop-filter:bg-background/60">
          {/* Theme toggle on the left */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Hamburger menu on the right */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 p-0 [&>button]:hidden bg-background/80 backdrop-blur-xl border-l border-border/30 backdrop-saturate-150"
              style={{
                boxShadow:
                  "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 0 rgba(255, 255, 255, 0.04)",
              }}
            >
              <SheetHeader className="p-4 border-b border-border/30">
                <SheetTitle className="text-xl font-bold">
                  Navigation Menu
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border/30">
                  <h2 className="text-lg font-semibold">Rifki</h2>
                  <ThemeToggle />
                </div>
                <nav className="flex-1 px-2 py-4 space-y-1">
                  {navigation.map((item) => {
                    const isRoute = !item.href.startsWith("#");
                    const isActive = isRoute
                      ? pathname?.startsWith(item.href)
                      : activeSection === item.href.substring(1);
                    const baseClass =
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-colors space-x-3";
                    const cls = cn(
                      baseClass,
                      isActive
                        ? "bg-accent/50 text-accent-foreground backdrop-blur-sm"
                        : "text-foreground hover:bg-accent/30 hover:text-accent-foreground"
                    );
                    const iconCls = cn(
                      isActive
                        ? "text-accent-foreground"
                        : "text-foreground group-hover:text-accent-foreground"
                    );
                    if (isRoute) {
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cls}
                        >
                          <span className={iconCls}>{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      );
                    }
                    // Anchor item: if not on homepage, navigate to '/#section'
                    const anchorHref = `/${item.href}`;
                    if (pathname !== "/") {
                      return (
                        <Link
                          key={item.name}
                          href={anchorHref}
                          onClick={() => setIsOpen(false)}
                          className={cls}
                        >
                          <span className={iconCls}>{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      );
                    }
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={cls}
                      >
                        <span className={iconCls}>{item.icon}</span>
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

      {/* Desktop Layout - Notch Style with Glass Surface */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed top-5 left-0 right-0 z-50"
      >
        <div className="flex justify-center pt-0">
          <GlassSurface
            width="100%"
            height={72}
            borderRadius={24}
            displace={10}
            brightness={55}
            opacity={0.88}
            className="border border-border/30"
            style={{
              maxWidth: "880px",
              borderRadius: "0 0 24px 24px",
              margin: "0 auto",
            }}
          >
            <div className="w-full h-full flex items-center justify-between px-8">
              {/* Desktop Logo */}
              <div className="flex items-center shrink-0">
                <h1 className="text-xl font-bold text-foreground">Rifki</h1>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="flex items-center justify-center flex-1 space-x-8">
                {navigation.map((item) => {
                  const isRoute = !item.href.startsWith("#");
                  const isActive = isRoute
                    ? pathname?.startsWith(item.href)
                    : activeSection === item.href.substring(1);
                  const btnCls = cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2",
                    isActive ? "text-primary" : "text-muted-foreground"
                  );
                  const iconCls = cn(
                    isActive ? "text-primary" : "text-muted-foreground"
                  );
                  if (isRoute) {
                    return (
                      <Link key={item.name} href={item.href} className={btnCls}>
                        <span className={iconCls}>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    );
                  }
                  // Anchor item: if not on homepage, navigate to '/#section'
                  if (pathname !== "/") {
                    return (
                      <Link key={item.name} href={`/${item.href}`} className={btnCls}>
                        <span className={iconCls}>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={btnCls}
                    >
                      <span className={iconCls}>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Theme Toggle */}
              <div className="flex items-center shrink-0">
                <ThemeToggle />
              </div>
            </div>
          </GlassSurface>
        </div>
      </motion.nav>
    </>
  );
}
