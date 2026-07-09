import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import personalInfo from "@/lib/content";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background antialiased">
      <Header />

      <section className="relative flex min-h-[98vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 md:pt-24">
        {/* decorative halftone corner accents */}
        <div className="bg-halftone pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full" />
        <div className="bg-halftone pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full" />

        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6">
            Portfolio &middot; Est. {new Date().getFullYear()}
          </p>

          <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            {personalInfo.name}
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="rule-fade h-px w-12" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {personalInfo.title}
            </p>
            <span className="rule-fade h-px w-12" />
          </div>

          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic text-foreground/75 md:text-xl">
            &ldquo;{personalInfo.about.split(".")[0]}.&rdquo;
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <a
            href="#about"
            className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scroll
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="about" className="py-16">
          <About />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="rule-fade" />
        </div>

        <section id="experience" className="py-16">
          <Experience />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="rule-fade" />
        </div>

        <section id="education" className="py-16">
          <Education />
        </section>

        <div className="mx-auto max-w-5xl">
          <div className="rule-fade" />
        </div>

        <section id="projects" className="py-16">
          <Projects />
        </section>
      </div>

      <Footer />
    </main>
  );
}
