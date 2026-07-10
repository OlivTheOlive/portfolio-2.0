"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import personalInfo from "@/lib/content";
import { GraduationCap, CalendarIcon, MapPinIcon } from "lucide-react";

const Education = () => {
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
        <span className="plate-index text-primary/60">03</span>
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Education
        </h2>
        <span className="rule-fade h-px flex-1" />
      </div>

      <div className="mt-10 space-y-8">
        {personalInfo.education.map((edu, index) => (
          <motion.div
            key={`${edu.school}-${index}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-l-[3px] border-l-primary transition-colors hover:border-primary/60">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <span className="plate-index text-muted-foreground">
                      No. {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-semibold tracking-tight">
                      {edu.title}
                    </h3>
                    <div className="mt-1.5 flex items-center text-muted-foreground">
                      <GraduationCap className="mr-1.5 h-4 w-4" />
                      <span className="mr-3 text-sm">{edu.school}</span>
                      <MapPinIcon className="mr-1.5 h-4 w-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-2 flex items-center justify-center md:mt-0"
                  >
                    <CalendarIcon className="mr-1.5 h-3 w-3" />
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="eyebrow">Highlights</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80 md:text-base">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="eyebrow mt-6">Coursework</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80 md:text-base">
                  {edu.coursework.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70"></span>
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

export default Education;
