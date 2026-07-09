"use client";

import { motion } from "framer-motion";
import personalInfo from "@/lib/content";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t-[1.5px] border-border bg-secondary/20 py-16"
    >
      <div className="bg-halftone pointer-events-none absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="plate-index text-primary/60">05</span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            {personalInfo.message}
          </p>
          <Button asChild size="lg" className="mt-8 px-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              {personalInfo.email}
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mb-10 flex justify-center space-x-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {Object.entries(personalInfo.socials).map(
            ([platform, url]) =>
              url && (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm border-[1.5px] border-border p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                  aria-label={platform}
                >
                  {socialIcons[platform as keyof typeof socialIcons]}
                </a>
              )
          )}
        </motion.div>

        <motion.div
          className="rule-fade mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        />

        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          &copy; {currentYear} {personalInfo.name} &middot; All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
