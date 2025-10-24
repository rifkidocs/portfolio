"use client";

import * as React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, User, Code, Briefcase, Building2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Layout */}
          <div className="flex lg:hidden items-center justify-end w-full">
            {/* Mobile Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center w-full">
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
        </div>
      </div>
    </nav>
  );
}
