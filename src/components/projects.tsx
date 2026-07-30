"use client";

import { motion } from "framer-motion";
import personalInfo from "@/lib/content";
import Image from "next/image";
import { ExternalLink, Github, FolderGit2, Star, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const projects = personalInfo.projects;

  return (
    <section className="relative overflow-hidden py-4">
      <div className="bg-halftone pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full" />
      <div className="bg-halftone pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full" />

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          className="mb-12 flex items-baseline gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideIn}
        >
          <span className="plate-index text-primary/60">04</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight crt-glow-soft sm:text-4xl">
            Projects
          </h2>
          <span className="rule-fade h-px flex-1" />
          <span className="plate-index hidden text-muted-foreground sm:inline">
            {projects.length} entries<span className="cursor-blink ml-1">_</span>
          </span>
        </motion.div>

        <ol className="border-b-[1.5px] border-border/60">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
              <motion.li
                key={project.title}
                className="group relative border-t-[1.5px] border-border/60 py-7 transition-colors duration-300 hover:border-primary/60 md:py-9"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: index * 0.08 }}
              >
                {/* desktop hover image preview */}
                <div className="pointer-events-none absolute right-2 top-1/2 hidden aspect-[16/10] w-72 -translate-y-1/2 overflow-hidden rounded-sm border-[1.5px] border-primary/40 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block lg:w-80">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale-[35%] contrast-110 sepia-[0.12] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-secondary/30">
                      <FolderGit2 className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-x-10 md:grid-cols-[auto_1fr]">
                  <span className="plate-watermark -mb-2 select-none font-serif text-5xl leading-none opacity-10 md:mb-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-3 md:mt-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                        {project.title}
                      </h3>
                      {featured && (
                        <span className="inline-flex items-center gap-1 rounded-sm border-[1.5px] border-primary/40 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                          <Star className="h-2.5 w-2.5" />
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70 md:text-[15px]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border-[1.5px] border-border/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/60 transition-colors group-hover:border-primary/30 group-hover:text-primary/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-border/80 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Code
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm border-[1.5px] border-primary bg-primary/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      )}
                      <ArrowUpRight className="ml-auto h-4 w-4 translate-x-0 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>

                {/* mobile inline image */}
                {project.image && (
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-sm border-[1.5px] border-border/80 md:hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale-[35%] contrast-110 sepia-[0.12]"
                    />
                  </div>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
