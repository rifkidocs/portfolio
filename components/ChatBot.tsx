"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageCircle, Send, Bot, User, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { personalInfo } from "@/lib/data";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    onError: (err) => {
      // Menangkap error dari server (seperti Rate Limit atau Pesan Terlalu Panjang)
      try {
        const errorData = JSON.parse(err.message);
        setError(errorData.error || "Gagal mengirim pesan.");
      } catch {
        setError("Koneksi ke server terputus.");
      }
      setTimeout(() => setError(null), 4000);
    }
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size='icon'
            className='group relative h-16 w-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-primary/25 active:scale-95 bg-primary text-primary-foreground'
          >
            <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary group-hover:animate-none"></div>
            <MessageCircle className='h-8 w-8 transition-transform duration-300 group-hover:scale-110' />
            <Sparkles className="absolute top-0 right-0 h-4 w-4 -translate-y-1 translate-x-1 text-yellow-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[450px] p-0 gap-0 overflow-hidden border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl z-[200] sm:rounded-2xl'>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <DialogHeader className='relative p-5 border-b border-border/50 bg-muted/20 backdrop-blur-md'>
            <DialogTitle className='flex items-center gap-3 text-xl font-bold tracking-tight'>
              <div className='relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20'>
                <Bot className='h-5 w-5 text-primary-foreground' />
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-background"></span>
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span>Tanya AI {personalInfo.name.split(" ")[1]}</span>
                <span className="text-xs font-normal text-muted-foreground">Online & aman</span>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div 
            ref={scrollRef}
            className='relative h-[450px] overflow-y-auto p-5 space-y-5 custom-scrollbar scroll-smooth'
          >
            {messages.length === 0 && (
              <div className='flex flex-col items-center justify-center h-full text-center space-y-4 opacity-80 animate-in fade-in duration-700'>
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Bot className='h-10 w-10 text-primary opacity-80' />
                </div>
                <div className="space-y-2">
                  <p className='text-base font-semibold'>Halo! Saya asisten AI {personalInfo.name}.</p>
                  <p className='text-sm text-muted-foreground max-w-[250px] mx-auto leading-relaxed'>
                    Tanyakan apa saja tentang pengalaman, skill, atau proyek yang sedang saya kerjakan!
                  </p>
                </div>
              </div>
            )}
            
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex w-full animate-in slide-in-from-bottom-2 duration-300 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[85%] ${
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gradient-to-br from-muted to-muted/50 border border-border/50 text-foreground"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className='h-4 w-4' />
                    ) : (
                      <Bot className='h-4 w-4 text-primary' />
                    )}
                  </div>
                  <div
                    className={`relative rounded-2xl px-5 py-3 text-sm shadow-sm transition-all ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-muted/60 backdrop-blur-md border border-border/50 text-foreground rounded-tl-sm"
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start animate-in fade-in duration-300'>
                <div className='flex gap-3 max-w-[80%]'>
                  <div className='h-9 w-9 rounded-full bg-gradient-to-br from-muted to-muted/50 border border-border/50 flex items-center justify-center shadow-md'>
                    <Bot className='h-4 w-4 text-primary' />
                  </div>
                  <div className='relative rounded-2xl rounded-tl-sm px-5 py-4 bg-muted/60 backdrop-blur-md border border-border/50 text-sm flex items-center gap-2'>
                    <Loader2 className='h-4 w-4 animate-spin text-primary' />
                    <span className='font-medium text-muted-foreground animate-pulse'>Memproses data...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className='relative p-4 border-t border-border/50 bg-background/50 backdrop-blur-lg flex flex-col gap-2'
          >
            {error && (
              <div className="flex items-center gap-2 text-xs text-red-500 bg-red-500/10 p-2 rounded-lg animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="h-3 w-3" />
                {error}
              </div>
            )}
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={handleInputChange}
                maxLength={400} // Lapis 3: Batas karakter di sisi Client
                placeholder='Ketik pesan di sini...'
                className='bg-background/80 border-border/50 focus-visible:ring-primary/30 focus-visible:border-primary transition-all duration-300 rounded-xl px-4 py-6 text-sm shadow-inner'
              />
              <Button 
                type='submit' 
                size='icon' 
                disabled={isLoading || !input.trim()}
                className="h-auto w-14 rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send className='h-5 w-5' />
              </Button>
            </div>
            <div className="flex justify-between px-1">
              <span className="text-[10px] text-muted-foreground">AI Assistant Rifki v1.0</span>
              <span className={`text-[10px] ${input.length > 350 ? "text-red-500" : "text-muted-foreground"}`}>
                {input.length}/400
              </span>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
