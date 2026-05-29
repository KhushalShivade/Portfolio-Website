import * as React from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              I’m a Computer Science and Engineering student at Parul University (2022–2026) with a strong interest in
              full-stack web development and modern software technologies. I enjoy building scalable and user-friendly
              applications using technologies like React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              I have worked on multiple real-world projects, including AI-powered and e-commerce applications, where I gained
              hands-on experience in frontend development, backend APIs, database management, and responsive UI design.
              My passion for innovation also led me to explore Generative AI, Augmented Reality, and intelligent web
              solutions.
            </p>
            <p>
              Currently, I am working as a Software Developer at Skillorbit, where I contribute to web application
              development, debugging, and collaborative project delivery while continuously improving my technical and
              problem-solving skills. I believe in continuous learning and enjoy collaborating with developers to create
              impactful digital experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Current Education</h3>
                  <p className="text-sm text-muted-foreground">2022-2026</p>
                </div>
              </div>
              <div>
                <p className="text-foreground font-semibold">B.Tech in Computer Science and Engineering (CSE)</p>
                <p className="text-sm text-muted-foreground mt-1">Parul University, Vadodara, Gujarat</p>
                <p className="text-sm font-semibold text-primary mt-1">CGPA: 7.78 / 10</p>
              </div>
            </Card>
            
            <Card className="p-6 space-y-4 border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/15 rounded-lg">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-xl">Key Focus Areas</h3>
              </div>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Full Stack Web Development (MERN)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  AI Integration & GenAI Applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Augmented Reality & Interactive Rooms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Scalable APIs & Modern UI Design
                </li>
              </ul>
            </Card>

            <Card className="p-6 space-y-4 border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl">Achievements</h3>
              </div>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Paper Published "Vistara" (AR Trial)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Parul University Hackathon 2.0 Winner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  PowerBI Professional Certificate
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  Generative AI Specialist Certificate
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
