import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-secondary/15 text-foreground rounded-full border border-secondary/20 w-fit mx-auto font-medium">
            <Sparkles className="w-4 h-4 text-secondary" />
            Open for Collaboration & Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Khushal Shivade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Software Developer | Full Stack Developer | Data Analytics
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable, user-friendly, and modern web applications utilizing technologies like React.js, Node.js, Express.js, and MongoDB.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 transition-opacity">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href="https://github.com/KhushalShivade" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/khushal-shivade-k28" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:khushalshivade28@gmail.com" className="text-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
