"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import Image from "next/image";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const Projects = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.h2
        className="mb-8 text-3xl font-bold tracking-tight after:relative after:bottom-0 after:left-0 after:h-1 after:w-16 after:rounded-full after:bg-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {personalInfo.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="group relative flex h-full flex-col overflow-hidden border-none bg-secondary/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="relative h-52 overflow-hidden bg-secondary/10">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <FolderGit2 className="h-16 w-16 text-primary/40" />
                  </div>
                )}
              </div>
              <CardContent className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-bold tracking-tight text-foreground/90">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-border/50 bg-secondary/5 p-4">
                <div className="flex w-full justify-end gap-2">
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-secondary/20"
                    >
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
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-secondary/20"
                    >
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
  );
};

export default Projects;
