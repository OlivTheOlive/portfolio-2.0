import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import IntroLoader from "@/components/intro-loader";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <main className="min-h-screen bg-background antialiased animate-crt-in [animation-delay:1.5s]">
        <Header />

        <Hero />

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
    </>
  );
}
