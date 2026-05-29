import * as React from "react";

const techItems = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

// Duplicate items list for seamless loop
const marqueeItems = [...techItems, ...techItems, ...techItems];

const TechMarquee = () => {
  return (
    <div className="w-full py-10 bg-card/25 border-y border-border/40 overflow-hidden relative group">
      {/* Absolute left fade blur gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      
      {/* Absolute right fade blur gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-10">
        {marqueeItems.map((tech, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-3 bg-card border border-border/50 hover:border-primary/30 transition-colors px-5 py-3 rounded-xl select-none min-w-[150px] justify-center hover:shadow-md"
          >
            <img 
              src={tech.logo} 
              alt={tech.name} 
              className="w-8 h-8 object-contain"
              loading="lazy" 
            />
            <span className="font-semibold text-sm text-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
