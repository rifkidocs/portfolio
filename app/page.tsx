import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GitHubStats } from "@/components/GitHubStats";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <About />
      <GitHubStats />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
