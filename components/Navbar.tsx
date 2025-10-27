"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, User, Code, Briefcase, Building2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassSurface from "./GlassSurface";

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

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1));
      const scrollPosition = window.scrollY + 100;

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
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Layout - Full Width */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-background/80 backdrop-blur-md border-b border-border w-screen overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-16">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

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
