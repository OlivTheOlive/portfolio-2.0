"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import personalInfo from "@/lib/content";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MapPin,
  Quote,
} from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialIcons = {
    github: <Github className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
  };

  return (
    <div className="mx-auto max-w-4xl">
      <motion.div
        className="mb-10 flex items-baseline gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <span className="plate-index text-primary/60">01</span>
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <span className="rule-fade h-px flex-1" />
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="overflow-hidden transition-colors hover:border-primary/50">
            <CardContent className="p-6 pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 border-[3px] border-primary/20 grayscale">
                  <AvatarImage
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                  />
                  <AvatarFallback className="font-serif text-4xl">
                    {personalInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h3 className="mt-6 font-serif text-2xl font-semibold tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {personalInfo.title}
                </p>

                <div className="mt-3 flex items-center justify-center text-muted-foreground">
                  <MapPin className="mr-1.5 h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-center space-x-3">
                  {Object.entries(personalInfo.socials).map(
                    ([platform, url]) =>
                      url && (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-sm border-[1.5px] border-border p-2.5 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                          aria-label={platform}
                        >
                          {socialIcons[platform as keyof typeof socialIcons]}
                        </a>
                      )
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="lg:col-span-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <Card className="transition-colors hover:border-primary/50">
            <CardContent className="p-6 pt-6">
              <h3 className="eyebrow">Biography</h3>
              <p className="mt-4 leading-relaxed text-foreground/80">
                {personalInfo.about}
              </p>

              <Separator className="my-6" />

              <div>
                <h3 className="eyebrow">Skills &amp; Expertise</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {personalInfo.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-sm border-[1.5px] border-primary/30 px-3 py-1 font-mono text-xs uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="relative p-6">
                <Quote className="absolute right-4 top-2 h-10 w-10 text-primary/10" />
                <p className="relative font-serif text-lg italic leading-relaxed text-foreground/85">
                  &ldquo;{personalInfo.quote}&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
