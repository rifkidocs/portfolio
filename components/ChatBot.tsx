"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageCircle, Send, Bot, User, Loader2, Sparkles, AlertCircle, Terminal } from "lucide-react";
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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const QUICK_REPLIES = [
  { label: "🚀 Proyek Terbaru", prompt: "Apa proyek terbarumu yang paling keren?" },
  { label: "🛠️ Tech Stack", prompt: "Teknologi apa saja yang kamu kuasai?" },
  { label: "📧 Kontak", prompt: "Gimana cara hubungi kamu?" },
  { label: "📄 Link CV", prompt: "Boleh minta link CV kamu?" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { messages, input, setInput, handleInputChange, handleSubmit, isLoading, append } = useChat({
    onError: (err) => {
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

  const handleQuickReply = (prompt: string) => {
    append({
      role: "user",
      content: prompt,
    });
  };

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
        <DialogContent className='sm:max-w-[480px] p-0 gap-0 overflow-hidden border border-white/10 bg-background/80 backdrop-blur-xl shadow-2xl z-[200] sm:rounded-2xl'>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <DialogHeader className='relative p-5 border-b border-border/50 bg-muted/20 backdrop-blur-md'>
            <DialogTitle className='flex items-center justify-between w-full'>
              <div className="flex items-center gap-3 text-xl font-bold tracking-tight">
                <div className='relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20'>
                  <Bot className='h-5 w-5 text-primary-foreground' />
                  <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-background"></span>
                  </span>
                </div>
                <div className="flex flex-col items-start text-left">
                  <span>AI Assistant</span>
                  <span className="text-xs font-normal text-muted-foreground">Expert Mode Active</span>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500/50"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-green-500/50"></div>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div 
            ref={scrollRef}
            className='relative h-[400px] overflow-y-auto p-5 space-y-5 custom-scrollbar scroll-smooth'
          >
            {messages.length === 0 && (
              <div className='flex flex-col items-center justify-center h-full text-center space-y-4 opacity-80 animate-in fade-in duration-700'>
                <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 rotate-3 border border-primary/20">
                  <Bot className='h-10 w-10 text-primary opacity-80' />
                </div>
                <div className="space-y-2 px-4">
                  <p className='text-base font-semibold'>Halo! Saya asisten AI {personalInfo.name}.</p>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Saya sudah membaca seluruh CV dan portfolio Rifki. Kamu bisa tanya apapun tentang skill teknisnya!
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
                  className={`flex gap-3 max-w-[90%] ${
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted border border-border/50 text-primary"
                    }`}
                  >
                    {m.role === "user" ? <User className='h-4 w-4' /> : <Bot className='h-4 w-4' />}
                  </div>
                  <div
                    className={`relative rounded-2xl px-4 py-2.5 text-sm shadow-sm transition-all ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-muted/60 backdrop-blur-md border border-border/50 text-foreground rounded-tl-sm prose prose-sm prose-invert dark:prose-invert max-w-full"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-full leading-relaxed break-words">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ node, ...props }) => (
                              <a 
                                {...props} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 underline font-medium hover:text-blue-600 transition-colors"
                              />
                            ),
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start animate-in fade-in duration-300'>
                <div className='flex gap-3 max-w-[80%]'>
                  <div className='h-8 w-8 rounded-lg bg-muted border border-border/50 flex items-center justify-center shadow-md'>
                    <Bot className='h-4 w-4 text-primary' />
                  </div>
                  <div className='relative rounded-2xl rounded-tl-sm px-4 py-3 bg-muted/60 backdrop-blur-md border border-border/50 text-sm flex items-center gap-2'>
                    <Loader2 className='h-3 w-3 animate-spin text-primary' />
                    <span className='font-medium text-muted-foreground animate-pulse text-xs'>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies Area */}
          <div className="px-4 pb-3 flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply.label}
                onClick={() => handleQuickReply(reply.prompt)}
                disabled={isLoading}
                className="whitespace-nowrap px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {reply.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className='relative p-4 border-t border-border/50 bg-background/50 backdrop-blur-lg'
          >
            {error && (
              <div className="absolute bottom-full left-4 right-4 mb-2 flex items-center gap-2 text-[10px] text-red-500 bg-red-500/10 p-2 rounded-lg animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="h-3 w-3" />
                {error}
              </div>
            )}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  maxLength={400}
                  placeholder='Ask me something technical...'
                  className='bg-background/80 border-border/50 focus-visible:ring-primary/20 focus-visible:border-primary/50 transition-all duration-300 rounded-xl pr-10 py-5 text-xs shadow-inner'
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-muted-foreground/50">
                  {input.length}/400
                </div>
              </div>
              <Button 
                type='submit' 
                size='icon' 
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95 bg-primary"
              >
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
