"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Send,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/lib/data";
import SpotlightCard from "@/components/SpotlightCard";

export function Contact() {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: personalInfo.email,
      description: "Send me an email anytime",
      href: `mailto:${personalInfo.email}`,
      color: "blue",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "WhatsApp / Phone",
      value: personalInfo.phone,
      description: "Available for quick chats",
      href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`,
      color: "emerald",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: personalInfo.location,
      description: "Based in East Java, Indonesia",
      href: "https://maps.google.com/?q=Lamongan,Indonesia",
      color: "rose",
    },
  ];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <Github className="w-5 h-5" />;
      case "LinkedIn":
        return <Linkedin className="w-5 h-5" />;
      case "Instagram":
        return <Instagram className="w-5 h-5" />;
      case "Discord":
        return <MessageCircle className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 w-full overflow-x-hidden relative bg-gradient-to-b from-muted/25 via-muted/30 to-background dark:from-[#0e0e16] dark:via-[#0c0c14] dark:to-[#0a0a0f]"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div
        className="absolute inset-0 opacity-35 dark:opacity-18 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach
              out through any of the platforms below!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-7 space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <SpotlightCard className="p-6 border border-border/50 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/5">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          <h3 className="text-xl font-bold mb-1 break-all">
                            {item.value}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right Column: CTA & Socials */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-8 bg-primary/5 border-primary/20 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Start a Conversation</h3>
                    <p className="text-muted-foreground text-sm">
                      I&apos;m currently available for freelance work and
                      full-time opportunities.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full rounded-full shadow-lg shadow-primary/20"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${personalInfo.phone.replace(
                        /[^0-9]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </SpotlightCard>
              </motion.div>

              {/* Social Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-center text-muted-foreground">
                  Follow Me
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks
                    .filter((s) => s.name !== "Email")
                    .map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {getSocialIcon(social.name)}
                        </div>
                        <span className="text-sm font-semibold">
                          {social.name}
                        </span>
                      </a>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
