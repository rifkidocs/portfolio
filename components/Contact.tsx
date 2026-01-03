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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, socialLinks } from "@/lib/data";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className='w-5 h-5' />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className='w-5 h-5' />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin className='w-5 h-5' />,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <Github className='w-5 h-5' />;
      case "LinkedIn":
        return <Linkedin className='w-5 h-5' />;
      case "Instagram":
        return <Instagram className='w-5 h-5' />;
      case "Discord":
        return <MessageCircle className='w-5 h-5' />;
      case "Email":
        return <Mail className='w-5 h-5' />;
      default:
        return null;
    }
  };

  return (
    <section
      id='contact'
      className='py-20 lg:py-32 w-full overflow-x-hidden relative bg-gradient-to-b from-muted/25 via-muted/30 to-background dark:from-[#0e0e16] dark:via-[#0c0c14] dark:to-[#0a0a0f]'>
      {/* Colorful blur orbs */}
      <div className='absolute top-20 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-40 right-10 w-72 h-72 bg-purple-500/8 dark:bg-purple-500/4 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-20 left-10 w-64 h-64 bg-indigo-400/8 dark:bg-indigo-400/4 rounded-full blur-3xl pointer-events-none' />

      {/* Noise texture overlay */}
      <div
        className='absolute inset-0 opacity-[0.015] dark:opacity-[0.025] pointer-events-none z-0'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern background - more visible */}
      <div
        className='absolute inset-0 opacity-35 dark:opacity-18 pointer-events-none z-0'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Top blend gradient */}
      <div className='absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-muted/25 dark:from-[#0e0e16] to-transparent pointer-events-none z-0' />

      {/* Bottom gradient to footer */}
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background dark:to-[#0a0a0f] pointer-events-none z-0' />

      <div className='container mx-auto px-4 lg:px-8 relative z-10'>
        <div className='max-w-4xl mx-auto'>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Get In Touch
            </h2>
            <div className='w-24 h-1 bg-primary mx-auto rounded-full mb-6' />
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you!
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-12'>
            {/* Contact Details */}
            <div>
              <h3 className='text-2xl font-bold mb-6 text-center'>
                Contact Information
              </h3>
              <div className='grid md:grid-cols-3 gap-4'>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <Card className='h-full hover:shadow-lg transition-shadow'>
                      <CardContent className='p-6'>
                        <div className='flex flex-col items-center text-center space-y-3'>
                          <div className='bg-foreground p-3 rounded-lg'>
                            <div className='text-background'>{info.icon}</div>
                          </div>
                          <div>
                            <p className='font-medium mb-1'>{info.label}</p>
                            <a
                              href={info.href}
                              className='text-sm text-muted-foreground hover:text-primary transition-colors break-all'>
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className='text-2xl font-bold mb-8 text-center'>
                Let&apos;s Connect
              </h4>
              <div className='flex flex-wrap justify-center gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}>
                    <Button
                      variant='outline'
                      size='lg'
                      asChild
                      className='hover:scale-110 transition-transform h-auto py-4 px-6'>
                      <a
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex flex-col items-center space-y-2'>
                        <div className='bg-foreground p-2 rounded'>
                          <div className='text-background'>
                            {getSocialIcon(social.name)}
                          </div>
                        </div>
                        <span className='text-sm font-medium'>
                          {social.name}
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-center'>
              <p className='text-muted-foreground'>
                Feel free to reach out through any of the platforms above.
                I&apos;m always open to discussing new projects, opportunities,
                or just having a chat!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
