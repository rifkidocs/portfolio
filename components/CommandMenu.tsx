"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "cmdk";
import {
  FileText,
  Laptop,
  Layout,
  Search,
  User,
  History,
  Code2,
  Newspaper,
  Github,
} from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// Custom styles for cmdk
const commandStyles = `
  [cmdk-root] {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: var(--background);
    color: var(--foreground);
  }
  [cmdk-input] {
    font-family: var(--font-sans);
    width: 100%;
    padding: 16px;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid var(--border);
    font-size: 16px;
  }
  [cmdk-list] {
    padding: 8px;
    max-height: 400px;
    overflow-y: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
  }
  [cmdk-item] {
    content-visibility: auto;
    cursor: pointer;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
    color: var(--muted-foreground);
    user-select: none;
    transition: all 150ms ease;
    font-size: 14px;
  }
  [cmdk-item][aria-selected='true'] {
    background: var(--accent);
    color: var(--foreground);
  }
  [cmdk-item][aria-disabled='true'] {
    color: var(--muted);
    cursor: not-allowed;
  }
  [cmdk-group-heading] {
    user-select: none;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--muted-foreground);
    padding: 12px 12px 8px;
    opacity: 0.6;
  }
  [cmdk-empty] {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    white-space: pre-wrap;
    color: var(--muted-foreground);
  }
`;

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [blogPosts, setBlogPosts] = React.useState<any[]>([]);
  const router = useRouter();

  // Fetch blog posts for search
  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts/search");
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data);
        }
      } catch (err) {
        console.error("Failed to fetch posts for command menu", err);
      }
    }
    fetchPosts();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: commandStyles }} />
      <button
        onClick={() => setOpen(true)}
        className="relative inline-flex h-9 w-full items-center justify-start rounded-md border bg-muted/50 px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-2xl border-none sm:max-w-2xl z-[160] top-[40%]">
          <DialogTitle className="sr-only">Search Documentation</DialogTitle>
          <Command className="flex flex-col h-full bg-background rounded-xl">
            <CommandInput 
              placeholder="Type a command or search..." 
              className="outline-none border-none focus:ring-0 p-4 w-full bg-transparent border-b"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                  <Layout className="mr-2 h-4 w-4" />
                  <span>Introduction</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/#about"))}>
                  <User className="mr-2 h-4 w-4" />
                  <span>About Me</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/#skills"))}>
                  <Code2 className="mr-2 h-4 w-4" />
                  <span>Technical Stack</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/#projects"))}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>Project Catalog</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/#experience"))}>
                  <History className="mr-2 h-4 w-4" />
                  <span>Milestones</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => router.push("/blog"))}>
                  <Newspaper className="mr-2 h-4 w-4" />
                  <span>Technical Blog</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Reference Projects">
                {projects.map((project) => (
                  <CommandItem
                    key={project.id}
                    onSelect={() => runCommand(() => router.push(`/#projects`))}
                  >
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>{project.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Latest Articles">
                {blogPosts.map((post) => (
                  <CommandItem
                    key={post.slug}
                    onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    <span>{post.meta.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Connect">
                <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/rifkidocs", "_blank"))}>
                  <Github className="mr-2 h-4 w-4" />
                  <span>View GitHub Profile</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
