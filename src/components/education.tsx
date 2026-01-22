"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import personalInfo from "@/lib/content";
import { GraduationCap, CalendarIcon, MapPinIcon } from "lucide-react";

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
      <h2
        className="mb-8 text-3xl font-bold tracking-tight after:relative after:bottom-0 after:left-0 after:h-1 after:w-16 after:rounded-full after:bg-primary "
      >
Education      </h2>

      <div className="mt-10 space-y-10">
        {personalInfo.education.map((edu, index) => (
          <motion.div
            key={`${edu.school}-${index}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary shadow-sm transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{edu.title}</h3>
                    <div className="mt-1 flex items-center text-muted-foreground">
                      <GraduationCap className="mr-1.5 h-4 w-4" />
                      <span className="mr-3">{edu.school}</span>
                      <MapPinIcon className="mr-1.5 h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2 flex items-center justify-center px-3 py-1.5 text-xs font-medium md:mt-0">
                    <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                    {edu.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className=" font-bold tracking-tight">Highlights</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80 md:text-base">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h4 className=" font-bold tracking-tight mt-4">Coursework</h4>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/80 md:text-base">
                  {edu.coursework.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70"></span>
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
