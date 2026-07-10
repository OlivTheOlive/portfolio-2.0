"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import personalInfo from "@/lib/content";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", index: "01" },
    { name: "Experience", href: "#experience", index: "02" },
    { name: "Education", href: "#education", index: "03" },
    { name: "Projects", href: "#projects", index: "04" },
    { name: "Contact", href: "#contact", index: "05" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight italic"
          >
            {personalInfo.name}
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70 transition-colors hover:text-primary"
              >
                <span className="text-primary/60 group-hover:text-primary">
                  {item.index}
                </span>
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="sm">
              <a
                href="/Olivie_Bergeron_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </Button>
          </motion.div>
        </nav>

        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-primary/60">{item.index}</span>
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-2">
                <a
                  href="/Olivie_Bergeron_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
