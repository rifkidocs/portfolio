"use client";

import * as React from "react";
import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");
  const isBlogPost = pathname?.match(/\/blog\/[^/]+$/);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 pt-16">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 border-r fixed h-[calc(100vh-4rem)] overflow-y-auto bg-background/50 backdrop-blur-sm z-30">
          <SidebarContent />
        </aside>

        {/* Main Content Area */}
        <div className={cn(
          "flex-1 transition-all duration-300 w-full",
          "lg:ml-64", // Offset for fixed sidebar
        )}>
          {/* Internal Content Wrapper */}
          <div className={cn(
            "mx-auto w-full",
            isBlogPost ? "max-w-3xl px-6 md:px-8 py-12" : "max-w-7xl px-4 md:px-8 py-8"
          )}>
            {children}
          </div>
          <Footer />
        </div>

        {/* Right Sidebar (ToC) - Only for home or docs-like pages */}
        {!isBlog && pathname === "/" && (
          <aside className="hidden xl:block w-64 border-l fixed right-0 h-[calc(100vh-4rem)] overflow-y-auto p-6 bg-background/50 backdrop-blur-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">On this page</h4>
            <nav className="space-y-2 text-sm text-muted-foreground">
              <a href="#home" className="block hover:text-primary cursor-pointer transition-colors">Introduction</a>
              <a href="#about" className="block hover:text-primary cursor-pointer transition-colors">About Me</a>
              <a href="#skills" className="block hover:text-primary cursor-pointer transition-colors">Technical Skills</a>
              <a href="#projects" className="block hover:text-primary cursor-pointer transition-colors">Featured Projects</a>
              <a href="#experience" className="block hover:text-primary cursor-pointer transition-colors">Work Experience</a>
              <a href="#contact" className="block hover:text-primary cursor-pointer transition-colors">Get in Touch</a>
            </nav>
          </aside>
        )}
      </div>
    </div>
  );
}

// Extract Sidebar content for reuse
export function SidebarContent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  React.useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 150;

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
  }, [pathname]);

  const navigation = [
    { name: "Introduction", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "My Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const blogLinks = [
    { name: "All Posts", href: "/blog" },
    { name: "Categories", href: "/blog#categories" },
    { name: "Tags", href: "/blog#tags" },
  ];

  return (
    <div className="flex flex-col h-full p-6 space-y-8">
      {!isBlog ? (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Documentation</h4>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={pathname === "/" ? item.href : `/${item.href}`}
                className={cn(
                  "block py-2 px-3 text-sm rounded-md transition-colors",
                  activeSection === item.href.substring(1) && pathname === "/"
                    ? "bg-accent text-accent-foreground font-medium border-l-2 border-primary rounded-l-none"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      ) : (
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Blog Navigation</h4>
          <nav className="space-y-1">
            {blogLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-2 px-3 text-sm rounded-md transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Resources</h4>
        <nav className="space-y-1">
          <Link
            href="/blog"
            className={cn(
              "block py-2 px-3 text-sm rounded-md transition-colors",
              isBlog ? "bg-accent/50 text-accent-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Technical Blog
          </Link>
          <a
            href="https://github.com/rifkidocs"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-3 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
          >
            GitHub Profile
          </a>
        </nav>
      </div>
    </div>
  );
}
