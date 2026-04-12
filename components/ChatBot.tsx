"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { MessageCircle, Send, Bot, User, Loader2 } from "lucide-react";
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
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
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
            className='h-14 w-14 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 bg-primary text-primary-foreground'
          >
            <MessageCircle className='h-7 w-7' />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[450px] p-0 gap-0 overflow-hidden border-border/50 shadow-2xl'>
          <DialogHeader className='p-4 border-b bg-muted/30'>
            <DialogTitle className='flex items-center gap-2 text-lg font-bold tracking-tight'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10'>
                <Bot className='h-5 w-5 text-primary' />
              </div>
              Tanya tentang {personalInfo.name.split(" ")[1]}
            </DialogTitle>
          </DialogHeader>

          <div 
            ref={scrollRef}
            className='h-[400px] overflow-y-auto p-4 space-y-4 bg-background/50 custom-scrollbar'
          >
            {messages.length === 0 && (
              <div className='flex flex-col items-center justify-center h-full text-center space-y-2 opacity-60'>
                <Bot className='h-12 w-12 mb-2 text-muted-foreground' />
                <p className='text-sm font-medium'>Halo! Saya asisten AI {personalInfo.name}.</p>
                <p className='text-xs'>Tanyakan apa saja tentang pengalaman, skill, atau proyek saya!</p>
              </div>
            )}
            
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[85%] ${
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted border"
                    }`}
                  >
                    {m.role === "user" ? (
                      <User className='h-4 w-4' />
                    ) : (
                      <Bot className='h-4 w-4' />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/80 backdrop-blur-sm border"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='flex gap-2 max-w-[80%]'>
                  <div className='h-8 w-8 rounded-full bg-muted border flex items-center justify-center shadow-sm'>
                    <Bot className='h-4 w-4' />
                  </div>
                  <div className='rounded-2xl px-4 py-2.5 bg-muted/80 border text-sm flex items-center gap-2'>
                    <Loader2 className='h-3 w-3 animate-spin' />
                    <span className='italic opacity-70'>Mengetik...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className='p-4 border-t bg-muted/20 flex gap-2'
          >
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder='Tanya sesuatu...'
              className='bg-background border-border/50'
            />
            <Button type='submit' size='icon' disabled={isLoading || !input.trim()}>
              <Send className='h-4 w-4' />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}