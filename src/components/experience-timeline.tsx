"use client";

import { motion } from "framer-motion";
import personalInfo from "@/lib/content";
import { BriefcaseIcon, MapPinIcon } from "lucide-react";

const ExperienceTimeline = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const experiences = personalInfo.experiences;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="plate-index text-primary/60">02</span>
        <h2 className="font-serif text-3xl font-semibold tracking-tight crt-glow-soft sm:text-4xl">
          Work Experience
        </h2>
        <span className="rule-fade h-px flex-1" />
        <span className="plate-index hidden text-muted-foreground sm:inline">
          {experiences.length} entries
          <span className="cursor-blink ml-1">_</span>
        </span>
      </div>

      {/* vertical timeline — the rail is drawn per entry so it stops at the last node */}
      <ol className="mt-12">
        {experiences.map((exp, index) => {
          const isCurrent = Boolean(exp.current);
          const isLast = index === experiences.length - 1;
          const indexLabel = String(index + 1).padStart(2, "0");

          return (
            <motion.li
              key={`${exp.company}-${index}`}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 md:grid-cols-[7.5rem_2.5rem_1fr] md:gap-x-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              {/* date gutter — reads along the axis on desktop, sits under the
                  title on small screens */}
              <div className="hidden pt-1 md:block md:text-right">
                <span className="plate-index uppercase tracking-[0.12em] text-muted-foreground">
                  {exp.period.trim()}
                </span>
              </div>

              {/* rail segment + node */}
              <div className="relative flex justify-center">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-1/2 top-7 w-px -translate-x-1/2 bg-border/70"
                  />
                )}
                <span
                  className={`relative z-10 mt-1 grid h-6 w-6 place-items-center rounded-sm border-[1.5px] bg-background transition-colors ${
                    isCurrent
                      ? "animate-glow-pulse border-primary"
                      : "border-border group-hover:border-primary"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rotate-45 transition-colors ${
                      isCurrent ? "bg-primary" : "bg-primary/70 group-hover:bg-primary"
                    }`}
                  />
                </span>
              </div>

              {/* entry */}
              <div className="relative pb-12">
                <span className="plate-watermark absolute -top-3 right-0 hidden select-none sm:block">
                  {indexLabel}
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-serif text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {exp.title}
                  </h3>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 rounded-sm border-[1.5px] border-primary/40 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                      Current
                      <span className="cursor-blink">_</span>
                    </span>
                  )}
                </div>

                <span className="plate-index mt-2 block uppercase tracking-[0.12em] text-muted-foreground md:hidden">
                  {exp.period.trim()}
                </span>

                <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center">
                    <BriefcaseIcon className="mr-1.5 h-4 w-4 text-primary/70" />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center">
                    <MapPinIcon className="mr-1.5 h-4 w-4 text-primary/70" />
                    {exp.location}
                  </span>
                </div>

                <div className="rule-fade my-6 h-px w-full" />

                <ul className="space-y-3 text-sm leading-relaxed text-foreground/80 md:text-[15px]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
};

export default ExperienceTimeline;
