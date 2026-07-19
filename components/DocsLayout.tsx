"use client";

import * as React from "react";
import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import { 
  Home, 
  User, 
  Code2, 
  Layers, 
  History, 
  Mail, 
  Newspaper, 
  FolderTree, 
  Hash,
  ArrowRight,
  ExternalLink,
  Github,
  Linkedin,
  Instagram
} from "lucide-react";

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
          <aside className="hidden xl:block w-64 border-l fixed right-0 h-[calc(100vh-4rem)] overflow-y-auto p-8 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-4 bg-primary rounded-full" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">On this page</h4>
            </div>
            
            <nav className="relative">
              <div className="space-y-4">
                {[
                  { id: "home", label: "Introduction" },
                  { id: "about", label: "About Me" },
                  { id: "skills", label: "Technical Stack" },
                  { id: "projects", label: "Project Catalog" },
                  { id: "experience", label: "Milestones" },
                  { id: "contact", label: "Get in Touch" },
                ].map((item) => (
                  <ToCLink 
                    key={item.id} 
                    id={item.id} 
                    label={item.label} 
                  />
                ))}
              </div>
            </nav>

            <div className="mt-12 pt-8 border-t border-muted-foreground/10">
              <div className="p-4 rounded-md border bg-muted/80 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold uppercase text-foreground">system_ok</span>
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                </div>
                <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                  Built with Next.js 16 & Tailwind v4. Formatted with Swiss design alignment.
                </p>
                <a href="https://github.com/rifkidocs" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] font-bold text-primary flex items-center gap-1 hover:underline mt-1">
                  cat source_code <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
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
    { name: "Introduction", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "About Me", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Technical Stack", href: "#skills", icon: <Code2 className="w-4 h-4" /> },
    { name: "Project Catalog", href: "#projects", icon: <Layers className="w-4 h-4" /> },
    { name: "Milestones", href: "#experience", icon: <History className="w-4 h-4" /> },
    { name: "Get in Touch", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const blogLinks = [
    { name: "Latest Articles", href: "/blog", icon: <Newspaper className="w-4 h-4" /> },
    { name: "Categories", href: "/blog#categories", icon: <FolderTree className="w-4 h-4" /> },
    { name: "Popular Tags", href: "/blog#tags", icon: <Hash className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col h-full bg-background/50">
      {/* Top Profile Section */}
      <div className="p-6 border-b bg-muted/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <span className="font-bold text-primary">R</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight">Rifki Ardiansah</span>
            <span className="text-[10px] text-muted-foreground font-mono">v1.0.4-stable</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Available for projects</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-8 py-6">
        {!isBlog ? (
          <div className="space-y-1">
            <h4 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">Main Documentation</h4>
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  className={cn(
                    "flex items-center gap-3 py-2 px-3 text-sm rounded-md transition-all group",
                    activeSection === item.href.substring(1) && pathname === "/"
                      ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <span className={cn(
                    "transition-colors",
                    activeSection === item.href.substring(1) && pathname === "/" ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        ) : (
          <div className="space-y-1">
            <h4 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">Blog Navigation</h4>
            <nav className="space-y-1">
              {blogLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 py-2 px-3 text-sm rounded-md transition-all group",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground font-medium shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <span className={cn(
                    "transition-colors",
                    pathname === item.href ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <div className="space-y-1">
          <h4 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">Resources</h4>
          <nav className="space-y-1">
            <Link
              href="/blog"
              className={cn(
                "flex items-center justify-between py-2 px-3 text-sm rounded-md transition-all group",
                isBlog && pathname === "/blog" ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <div className="flex items-center gap-3">
                <Newspaper className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span>Technical Blog</span>
              </div>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </Link>
            <a
              href="https://github.com/rifkidocs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 px-3 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                <span>GitHub Profile</span>
              </div>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </nav>
        </div>
      </div>

      {/* Bottom Status / Footer Snippet */}
      <div className="p-4 border-t mt-auto bg-muted/20">
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <a href="https://github.com/rifkidocs" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-accent transition-colors">
              <Github className="w-3.5 h-3.5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/rifkiars/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-accent transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/rifkithears/" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded hover:bg-accent transition-colors">
              <Instagram className="w-3.5 h-3.5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
          <span className="text-[9px] font-mono text-muted-foreground/50 uppercase">Local Time: {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}

function ToCLink({ id, label }: { id: string; label: string }) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(id);
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      // Section is active if it's near the top of the viewport
      const isActive = rect.top >= -100 && rect.top <= 300;
      setActive(isActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return (
    <a
      href={`#${id}`}
      className={cn(
        "group flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest transition-all",
        active ? "text-primary translate-x-1" : "text-muted-foreground/60 hover:text-foreground"
      )}
    >
      <div className={cn(
        "w-1 h-1 rounded-full transition-all shrink-0",
        active ? "bg-primary scale-150 shadow-[0_0_8px_rgba(var(--primary),0.5)]" : "bg-muted-foreground/20 group-hover:bg-muted-foreground/40"
      )} />
      {label}
    </a>
  );
}
