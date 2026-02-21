"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
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
  X,
  Newspaper,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
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
import { socialLinks } from "@/lib/data";

const navigation = [
  { name: "Home", href: "#home", icon: <Home className='w-4 h-4' /> },
  { name: "About", href: "#about", icon: <User className='w-4 h-4' /> },
  { name: "Skills", href: "#skills", icon: <Code className='w-4 h-4' /> },
  {
    name: "Projects",
    href: "#projects",
    icon: <Briefcase className='w-4 h-4' />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <Building2 className='w-4 h-4' />,
  },
  { name: "Contact", href: "#contact", icon: <Mail className='w-4 h-4' /> },
  { name: "Blog", href: "/blog", icon: <Newspaper className='w-4 h-4' /> },
];

// Helper function to get luminance from RGB
function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const srgb = c / 255;
    return srgb <= 0.03928
      ? srgb / 12.92
      : Math.pow((srgb + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Parse color string to RGB
function parseColor(color: string): { r: number; g: number; b: number } | null {
  // Handle rgb/rgba
  const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbMatch) {
    return {
      r: parseInt(rgbMatch[1]),
      g: parseInt(rgbMatch[2]),
      b: parseInt(rgbMatch[3]),
    };
  }
  // Handle hex
  const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hexMatch) {
    return {
      r: parseInt(hexMatch[1], 16),
      g: parseInt(hexMatch[2], 16),
      b: parseInt(hexMatch[3], 16),
    };
  }
  return null;
}

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrollingUp, setIsScrollingUp] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isDarkBackground, setIsDarkBackground] = React.useState(false);
  const pathname = usePathname();

  // Detect background color at navbar position
  React.useEffect(() => {
    const checkBackgroundColor = () => {
      // Get the element at navbar position (center of viewport, 40px from top)
      const navbarY = 40;
      const centerX = window.innerWidth / 2;

      // Temporarily hide navbar to get element behind it
      const navElements = document.querySelectorAll("nav");
      navElements.forEach((el) => {
        (el as HTMLElement).style.pointerEvents = "none";
      });

      const elementBehind = document.elementFromPoint(centerX, navbarY);

      navElements.forEach((el) => {
        (el as HTMLElement).style.pointerEvents = "";
      });

      if (elementBehind) {
        // Traverse up to find element with background
        let currentElement: Element | null = elementBehind;
        let bgColor = "rgba(0, 0, 0, 0)";

        while (currentElement && currentElement !== document.documentElement) {
          const computedStyle = window.getComputedStyle(currentElement);
          const bg = computedStyle.backgroundColor;

          // Check if this element has a non-transparent background
          if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
            bgColor = bg;
            break;
          }
          currentElement = currentElement.parentElement;
        }

        // Parse and check luminance
        const rgb = parseColor(bgColor);
        if (rgb) {
          const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
          // If luminance is below 0.5, background is dark
          setIsDarkBackground(luminance < 0.5);
        }
      }
    };

    // Check on scroll
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

      // Check background color
      checkBackgroundColor();
    };

    // Initial check
    checkBackgroundColor();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkBackgroundColor);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkBackgroundColor);
    };
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Dynamic text color classes based on background
  const textColorClass = isDarkBackground ? "text-white" : "text-foreground";
  const mutedTextColorClass = isDarkBackground
    ? "text-white/70"
    : "text-muted-foreground";
  const activeTextColorClass = isDarkBackground ? "text-white" : "text-primary";

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <Github className='w-4 h-4' />;
      case "LinkedIn":
        return <Linkedin className='w-4 h-4' />;
      case "Instagram":
        return <Instagram className='w-4 h-4' />;
      case "Discord":
        return <MessageCircle className='w-4 h-4' />;
      case "Email":
        return <Mail className='w-4 h-4' />;
      default:
        return <ExternalLink className='w-4 h-4' />;
    }
  };

  return (
    <>
      {/* Mobile Layout - Full-width top-attached glass bar with improved dropdown */}
      <nav
        className='fixed top-0 left-0 right-0 z-50 lg:hidden w-screen h-16 flex items-center justify-between px-6 bg-background/80 backdrop-blur-xl border-b border-border/40 supports-backdrop-filter:bg-background/60'>
        {/* Mobile Logo/Brand */}
        <Link href="/" className='flex items-center gap-2'>
          <Image 
            src="/logo-r.svg" 
            alt="R Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-lg shadow-sm"
          />
          <span className='font-bold text-lg tracking-tight'>Portfolio</span>
        </Link>

        {/* Action Buttons */}
        <div className='flex items-center gap-4'>
          <ThemeToggle />
          <Button
            variant='ghost'
            size='icon'
            className='relative z-50 h-10 w-10 rounded-full bg-muted/50'
            onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </motion.div>
            </AnimatePresence>
            <span className='sr-only'>Toggle menu</span>
          </Button>
        </div>

        {/* Full-screen Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className='fixed inset-0 top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-2xl z-40 overflow-y-auto pt-24 pb-12 px-8 flex flex-col'>
              {/* Background Decorative Elements */}
              <div className='absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10' />
              <div className='absolute bottom-20 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10' />

              {/* Menu Items */}
              <div className='flex flex-col space-y-2 mb-12'>
                <p className='text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 px-2'>
                  Navigation
                </p>
                {navigation.map((item, idx) => {
                  const isRoute = !item.href.startsWith("#");
                  const isActive = isRoute
                    ? pathname?.startsWith(item.href)
                    : pathname === "/" &&
                      activeSection === item.href.substring(1);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}>
                      {isRoute ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "flex items-center gap-4 py-4 px-4 rounded-2xl transition-all",
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "hover:bg-muted"
                          )}>
                          <span className={cn("p-2 rounded-lg", isActive ? "bg-white/20" : "bg-muted")}>
                            {item.icon}
                          </span>
                          <span className='text-xl font-semibold'>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => {
                            if (pathname !== "/") {
                              window.location.href = `/${item.href}`;
                            } else {
                              scrollToSection(item.href);
                            }
                            setIsOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-4 py-4 px-4 rounded-2xl transition-all text-left",
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "hover:bg-muted"
                          )}>
                          <span className={cn("p-2 rounded-lg", isActive ? "bg-white/20" : "bg-muted")}>
                            {item.icon}
                          </span>
                          <span className='text-xl font-semibold'>{item.name}</span>
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Socials & Info */}
              <div className='mt-auto pt-8 border-t border-border/50'>
                <p className='text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6'>
                  Let&apos;s Connect
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className='flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors'>
                      <div className='p-2 bg-background rounded-lg shadow-sm text-foreground'>
                        {getSocialIcon(social.name)}
                      </div>
                      <span className='text-sm font-medium'>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop Layout - Notch Style with Glass Surface */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='hidden lg:block fixed top-5 left-0 right-0 z-50'>
        <div className='flex justify-center pt-0'>
          <GlassSurface
            width='100%'
            height={72}
            borderRadius={24}
            displace={10}
            brightness={55}
            opacity={0.88}
            className='border border-border/30'
            style={{
              maxWidth: "880px",
              borderRadius: "0 0 24px 24px",
              margin: "0 auto",
            }}>
            <div className='w-full h-full flex items-center justify-between px-8'>
              {/* Desktop Logo */}
              <Link href="/" className='flex items-center gap-3 shrink-0 group'>
                <div className='relative'>
                  <Image 
                    src="/logo-r.svg" 
                    alt="R Logo" 
                    width={36} 
                    height={36} 
                    className="w-9 h-9 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className='absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity' />
                </div>
              </Link>

              {/* Desktop Navigation - Centered */}
              <div className='flex items-center justify-center flex-1 space-x-8'>
                {navigation.map((item) => {
                  const isRoute = !item.href.startsWith("#");
                  const isActive = isRoute
                    ? pathname?.startsWith(item.href)
                    : pathname === "/" &&
                      activeSection === item.href.substring(1);
                  const btnCls = cn(
                    "text-sm font-medium transition-colors duration-300 flex items-center space-x-2",
                    isActive ? activeTextColorClass : mutedTextColorClass,
                    !isActive &&
                      (isDarkBackground
                        ? "hover:text-white"
                        : "hover:text-primary")
                  );
                  const iconCls = cn(
                    "transition-colors duration-300",
                    isActive ? activeTextColorClass : mutedTextColorClass
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
                      <Link
                        key={item.name}
                        href={`/${item.href}`}
                        className={btnCls}>
                        <span className={iconCls}>{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    );
                  }
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={btnCls}>
                      <span className={iconCls}>{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Desktop Theme Toggle on the right */}
              <div className='flex items-center shrink-0'>
                <ThemeToggle />
              </div>
            </div>
          </GlassSurface>
        </div>
      </motion.nav>
    </>
  );
}
