"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import { ArrowDown } from "lucide-react";

// fixed positions (avoids Math.random hydration mismatches) for the pixel
// dust / starfield layer behind the hero
const DUST = [
  { top: "12%", left: "8%", size: 3, delay: 0 },
  { top: "22%", left: "88%", size: 2, delay: 0.4 },
  { top: "68%", left: "6%", size: 2, delay: 0.8 },
  { top: "78%", left: "92%", size: 3, delay: 1.2 },
  { top: "8%", left: "48%", size: 2, delay: 0.6 },
  { top: "35%", left: "15%", size: 2, delay: 1.6 },
  { top: "40%", left: "80%", size: 3, delay: 0.2 },
  { top: "58%", left: "35%", size: 2, delay: 1.0 },
  { top: "15%", left: "70%", size: 2, delay: 1.4 },
  { top: "85%", left: "50%", size: 3, delay: 0.9 },
  { top: "50%", left: "94%", size: 2, delay: 1.8 },
  { top: "28%", left: "30%", size: 2, delay: 0.3 },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 1.55 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const RetroBackdrop = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    {/* receding arcade grid horizon */}
    <div className="absolute inset-x-0 bottom-0 h-1/2 [perspective:280px]">
      <div className="bg-retro-grid absolute inset-0 origin-bottom opacity-25 [transform:rotateX(58deg)]" />
    </div>
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

    {/* corner halftone dust clouds, matching the print aesthetic */}
    <div className="bg-halftone absolute -right-16 -top-16 h-64 w-64 rounded-full" />
    <div className="bg-halftone absolute -left-20 bottom-10 h-72 w-72 rounded-full" />

    {/* twinkling pixel starfield */}
    {DUST.map((dot, i) => (
      <span
        key={i}
        className="twinkle-dot absolute rounded-[1px] bg-primary/70"
        style={{
          top: dot.top,
          left: dot.left,
          width: dot.size,
          height: dot.size,
          animationDelay: `${dot.delay}s`,
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  return (
    <section className="relative flex min-h-[98vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 md:pt-24">
      <RetroBackdrop />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          Portfolio &middot; Est. {new Date().getFullYear()}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mx-auto mt-5 flex items-center justify-center gap-4"
        >
          <span className="rule-fade h-px w-12" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {personalInfo.title}
          </p>
          <span className="rule-fade h-px w-12" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl font-serif text-lg italic text-foreground/75 md:text-xl"
        >
          &ldquo;{personalInfo.about.split(".")[0]}.&rdquo;
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="px-8 py-6">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 py-6">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
      >
        <span className="relative flex h-10 w-10 items-center justify-center">
          <span className="animate-glow-pulse absolute inset-0 rounded-full" />
          <a
            href="#about"
            className="relative flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
