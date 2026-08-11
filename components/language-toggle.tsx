"use client";

import * as React from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLang}
      className="h-9 px-2.5 font-mono text-xs font-bold gap-1.5 border-border/80 hover:bg-muted/80 transition-all"
      title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      aria-label="Switch Language"
    >
      <Globe className="h-3.5 w-3.5 text-primary" />
      <span className={lang === "id" ? "text-primary font-extrabold" : "text-muted-foreground font-normal"}>
        ID
      </span>
      <span className="text-muted-foreground/40 font-light">|</span>
      <span className={lang === "en" ? "text-primary font-extrabold" : "text-muted-foreground font-normal"}>
        EN
      </span>
    </Button>
  );
}
