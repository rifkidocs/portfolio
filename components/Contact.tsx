"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
  HelpCircle,
  ArrowUpRight,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/data";

import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  const supportChannels = [
    {
      title: t.contact.directEmail,
      description: t.contact.subtitle,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-5 h-5" />,
      target: undefined,
      rel: undefined,
    },
    {
      title: t.contact.phoneWhatsapp,
      description: t.contact.subtitle,
      value: personalInfo.phone,
      href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`,
      icon: <MessageSquare className="w-5 h-5" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section id='contact' className='py-16 lg:py-24'>
      <div className='max-w-4xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
            <HelpCircle className="w-3 h-3" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight mb-6'>{t.contact.title}</h2>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6 mb-12'>
          {supportChannels.map((channel, idx) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-lg border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded bg-primary/10 text-primary">
                  {channel.icon}
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-bold text-lg mb-1">{channel.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
              <a 
                href={channel.href} 
                className="text-sm font-mono text-primary hover:underline underline-offset-4"
                target={channel.target}
                rel={channel.rel}
              >
                {channel.value}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Community / Socials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg bg-muted/30 border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-bold">Follow the Development</h4>
              <p className="text-sm text-muted-foreground">Stay updated with my latest open-source projects and professional updates.</p>
            </div>
            <div className="flex gap-4">
              {socialLinks.slice(0, 3).map((social) => (
                <Button key={social.name} variant="outline" size="sm" asChild className="h-10 w-10 p-0">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={social.name}
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    {social.name === "GitHub" && <Github className="w-5 h-5" />}
                    {social.name === "LinkedIn" && <Linkedin className="w-5 h-5" />}
                    {social.name === "Instagram" && <Instagram className="w-5 h-5" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>Lamongan, East Java, Indonesia</span>
          <span className="mx-2">•</span>
          <span>GMT+7</span>
        </div>
      </div>
    </section>
  );
}
