import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <TechMarquee />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2026 Khushal Shivade. All rights reserved.</p>
        <p className="mt-2 text-sm">Software Developer | Full Stack Developer | Data Analytics</p>
      </footer>
    </div>
  );
};

export default Index;
