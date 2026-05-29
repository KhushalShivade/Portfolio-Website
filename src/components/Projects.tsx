import * as React from "react";
import { Card } from "@/components/ui/card";
import { 
  ShoppingBag, 
  ShoppingCart, 
  MessageSquare, 
  ListTodo, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  BookOpen, 
  Activity, 
  ExternalLink, 
  Github 
} from "lucide-react";

const projectsData = [
  {
    title: "Vistara: Virtual Trial Room",
    description: "AI-powered virtual trial room using ML and AR to overlay apparel on live images. Features size recommendations and in-app purchasing.",
    tags: ["React.js", "Machine Learning", "AR", "Python"],
    icon: ShoppingBag,
    gradient: "from-purple-500 to-indigo-600 shadow-purple-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "Online Shopping Website",
    description: "Full-stack e-commerce app with React, Node, Express, and MongoDB. Includes auth, cart, checkout, and admin dashboard.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: ShoppingCart,
    gradient: "from-pink-500 to-rose-600 shadow-rose-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "Talk-A-Tive Chat App",
    description: "Real-time chat application using MERN stack and Socket.io. Supports one-to-one and group chats with notifications.",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    icon: MessageSquare,
    gradient: "from-emerald-500 to-teal-600 shadow-emerald-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "Ethara - Team Task Manager",
    description: "Full-stack MERN task management platform with JWT authentication, role-based access control, project collaboration, task tracking, and analytics dashboard for teams.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: ListTodo,
    gradient: "from-blue-500 to-cyan-600 shadow-blue-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "DREAM STATE | Interactive Sales Deck",
    description: "Immersive multi-page luxury sales deck for American Dream Mall built with HTML, CSS, and JS featuring cinematic storytelling, smooth transitions, and AI-generated visuals.",
    tags: ["HTML5", "CSS3", "JavaScript", "Generative AI"],
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-600 shadow-orange-500/10",
    demoUrl: "https://dreamstate-beige.vercel.app/",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "VedaAi",
    description: "Modern AI-assisted educational platform built with Next.js to help teachers create, manage, and grade assignments with a clean and responsive user experience.",
    tags: ["Next.js", "Tailwind CSS", "AI APIs", "PostgreSQL"],
    icon: GraduationCap,
    gradient: "from-indigo-500 to-violet-600 shadow-indigo-500/10",
    demoUrl: "https://veda-ai-qfby.vercel.app/",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "QuizWiz - Dynamic Quiz Application",
    description: "Interactive quiz platform using HTML, CSS, and JavaScript with category selection, timer-based questions, score tracking, and responsive design.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    icon: HelpCircle,
    gradient: "from-fuchsia-500 to-purple-600 shadow-fuchsia-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "SkillOrbit — AI LMS Platform",
    description: "Full-stack AI LMS with JWT authentication, AI tutoring, analytics dashboard, Razorpay integration, and responsive modern UI using React and Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Razorpay"],
    icon: BookOpen,
    gradient: "from-violet-500 to-purple-700 shadow-violet-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
  {
    title: "FlowLens",
    description: "Developer productivity dashboard focused on DORA and Agile metrics with actionable insights, rule-based analytics engine, and modern React + Tailwind interface.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Agile Metrics"],
    icon: Activity,
    gradient: "from-teal-500 to-emerald-600 shadow-teal-500/10",
    codeUrl: "https://github.com/KhushalShivade",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">A selection of platforms, applications, and AI integrations I've built</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Abstract Visual Header */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Background grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Center glow */}
                <div className="absolute w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" />
                
                {/* Lucide icon styled as visual focal point */}
                <project.icon className="w-16 h-16 text-white relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-md" />
              </div>
              
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm h-15 overflow-hidden text-ellipsis line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/5 text-primary border border-primary/10 rounded px-2 py-0.5 text-xxs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-border/40 text-sm">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
