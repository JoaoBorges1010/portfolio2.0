import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <main
      className="bg-dark text-light h-screen snap-y snap-mandatory overflow-scroll z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/20 "
    >
      <Head>
        <title>João Borges</title>
        <description>João Borges Page</description>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </main>
  );
}
