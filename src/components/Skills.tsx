import * as React from "react";
import { Card } from "@/components/ui/card";
import { Monitor, Cpu, Database, GitBranch, BarChart } from "lucide-react";

const skillsData = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating highly interactive and responsive web interfaces using React.js, HTML5, CSS3, and modern JavaScript.",
  },
  {
    icon: Cpu,
    title: "Backend Development",
    description: "Designing robust, scalable server-side systems and RESTful APIs using Node.js, Express.js, Java, and Python.",
  },
  {
    icon: Database,
    title: "Databases & Storage",
    description: "Data modeling, optimization, and querying using relational and non-relational databases like MongoDB and MySQL.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Analyzing information, modeling structured datasets, and rendering actionable business intelligence using SQL and Python.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Tools",
    description: "Managing codebases and collaborative team workflows efficiently using Git, GitHub, and professional debugging strategies.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 space-y-4 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg w-fit">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
