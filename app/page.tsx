import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GitHubStats } from "@/components/GitHubStats";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className='min-h-screen bg-background overflow-x-hidden'>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero />
        <About />
        <GitHubStats />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
