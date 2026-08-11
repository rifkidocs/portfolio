"use client";

import * as React from "react";
import { Navbar } from "./Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import { useLanguage } from "@/lib/language-context";
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
      </div>
    </div>
  );
}

// Extract Sidebar content for reuse
export function SidebarContent() {
  const { t } = useLanguage();
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
    { name: t.hero.greeting, href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: t.nav.about, href: "#about", icon: <User className="w-4 h-4" /> },
    { name: t.nav.skills, href: "#skills", icon: <Code2 className="w-4 h-4" /> },
    { name: t.nav.projects, href: "#projects", icon: <Layers className="w-4 h-4" /> },
    { name: t.nav.experience, href: "#experience", icon: <History className="w-4 h-4" /> },
    { name: t.nav.contact, href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ];

  const blogLinks = [
    { name: t.nav.blog, href: "/blog", icon: <Newspaper className="w-4 h-4" /> },
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
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">{t.hero.statusBadge}</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-8 py-6">
        {!isBlog ? (
          <div className="space-y-1">
            <h4 className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-3">Documentation</h4>
            <nav className="space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={pathname === "/" ? item.href : `/${item.href}`}
                  className={cn(
                    "flex items-center gap-3 py-2 px-3 text-sm rounded-md transition-all group font-medium",
                    activeSection === item.href.substring(1) && pathname === "/"
                      ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20"
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
                    "flex items-center gap-3 py-2 px-3 text-sm rounded-md transition-all group font-medium",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20"
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

        <div className="pt-6 border-t border-border/40">
          <div className="p-4 rounded-lg bg-muted/40 border space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fullstack Web Portfolio & System Showcase.
            </p>
            <a href="https://github.com/rifkidocs" target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-primary inline-flex items-center gap-1.5 hover:underline group">
              <span>GitHub Profile</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
