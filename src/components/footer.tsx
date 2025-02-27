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
    <footer id="contact" className="bg-muted/30 py-12">
      <div className="section-container py-8">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <Button asChild size="lg" className="mt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              {personalInfo.email}
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-8"
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
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {socialIcons[platform as keyof typeof socialIcons]}
                </a>
              )
          )}
        </motion.div>

        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
