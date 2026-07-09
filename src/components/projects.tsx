"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import Image from "next/image";
import { ExternalLink, Github, FolderGit2, Star } from "lucide-react";

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

  const featuredProject = personalInfo.projects[0];
  const otherProjects = personalInfo.projects.slice(1);

  return (
    <section className="relative py-4">
      <div className="bg-halftone pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full" />
      <div className="bg-halftone pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full" />

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          className="mb-16 flex items-baseline gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideIn}
        >
          <span className="plate-index text-primary/60">04</span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <span className="rule-fade h-px flex-1" />
        </motion.div>

        {featuredProject && (
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="group relative overflow-hidden rounded-sm border-[1.5px] border-border bg-card transition-colors hover:border-primary/50">
              <div className="absolute right-4 top-4 z-10 rounded-sm border border-primary bg-background/90 p-2 text-primary shadow-none">
                <Star className="h-4 w-4" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden bg-secondary/20 lg:h-full">
                  {featuredProject.image ? (
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover grayscale-[35%] contrast-110 sepia-[0.12] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FolderGit2 className="h-24 w-24 text-primary/40" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col p-8">
                  <span className="eyebrow mb-2">Featured</span>
                  <h3 className="mb-3 font-serif text-2xl font-semibold tracking-tight text-foreground">
                    {featuredProject.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-foreground/80">
                    {featuredProject.description}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                    {featuredProject.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border-[1.5px] border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-primary transition-colors hover:border-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {featuredProject.tags.length > 5 && (
                      <span className="rounded-sm border-[1.5px] border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-foreground/60">
                        +{featuredProject.tags.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex gap-3">
                    {featuredProject.github && (
                      <Button variant="outline" size="sm">
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {featuredProject.link && (
                      <Button variant="default" size="sm">
                        <a
                          href={featuredProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="group relative flex h-full flex-col overflow-hidden transition-colors hover:border-primary/50">
                <div className="relative h-52 overflow-hidden bg-secondary/20">
                  <span className="absolute left-3 top-3 z-10 plate-index rounded-sm border border-border bg-background/90 px-2 py-1 text-foreground/70">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale-[35%] contrast-110 sepia-[0.12] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <FolderGit2 className="h-16 w-16 text-primary/40" />
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border-[1.5px] border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-primary transition-colors hover:border-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t-[1.5px] border-border/70 bg-secondary/10 p-4">
                  <div className="flex w-full justify-end gap-2">
                    {project.github && (
                      <Button variant="ghost" size="sm">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button variant="ghost" size="sm">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
