"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import personalInfo from "@/lib/content";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

const Experience = () => {
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
      <div className="mb-10 flex items-baseline gap-4">
        <span className="plate-index text-primary/60">02</span>
        <h2 className="font-serif text-3xl font-semibold tracking-tight crt-glow-soft sm:text-4xl">
          Work Experience
        </h2>
        <span className="rule-fade h-px flex-1" />
      </div>

      <div className="mt-10 space-y-10">
        {personalInfo.experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="plate-marks relative overflow-hidden border-[1.5px] border-border/80 bg-card/60 p-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card">
              <span className="mk-tl" />

              {/* period tab */}
              <div className="absolute right-0 top-0 flex items-center gap-1.5 border-b border-l border-border/80 bg-secondary/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70">
                <CalendarIcon className="h-3 w-3" />
                {exp.period.trim()}
              </div>

              {/* index watermark */}
              <span className="plate-watermark absolute -right-2 bottom-2 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              <CardContent className="relative px-8 pb-8 pt-10">
                <span className="plate-index prompt text-primary">
                  Plate № {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                  {exp.title}
                </h3>

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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
