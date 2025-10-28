"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Home,
  User,
  Code,
  Briefcase,
  Building2,
  Mail,
  Menu,
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
      {/* Mobile Layout - Full Width */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isScrollingUp ? 0 : -100,
          opacity: isScrollingUp ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-5 left-0 right-0 z-50 lg:hidden w-screen overflow-x-hidden"
      >
        <div className="flex justify-center px-4">
          <div className="w-full max-w-[600px] h-16 rounded-[20px] px-6 flex items-center justify-between bg-background/95 backdrop-blur-xl border border-border/30">
            {/* Mobile Hamburger Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-64 p-0 [&>button]:hidden bg-background/95 backdrop-blur-xl border-r backdrop-saturate-150"
                style={{
                  boxShadow:
                    "inset 0 1px 0 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)",
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
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={cn(
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full text-left transition-colors space-x-3",
                          activeSection === item.href.substring(1)
                            ? "bg-accent/50 text-accent-foreground backdrop-blur-sm"
                            : "text-foreground hover:bg-accent/30 hover:text-accent-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            activeSection === item.href.substring(1)
                              ? "text-accent-foreground"
                              : "text-foreground group-hover:text-accent-foreground"
                          )}
                        >
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
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
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2",
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
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
