import * as React from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    role: "Software Developer",
    company: "Skillorbit",
    location: "Noida, Uttar Pradesh, India",
    duration: "Jan 2026 – April 2026",
    highlights: [
      "Contributed to designing and developing web applications using modern technologies, improving overall project delivery.",
      "Wrote clean and efficient code, resolved debugging issues, and reduced errors to ensure scalable and user-friendly solutions.",
      "Collaborated with a team of developers to deliver projects on time and provided basic technical support across tasks.",
    ],
  },
  {
    role: "Student Ambassador",
    company: "AI+ Insider",
    location: "Remote",
    duration: "Oct 2025 – Present",
    highlights: [
      "Representing the organization and supporting community engagement initiatives.",
      "Participating in learning, content sharing, brand awareness activities, and basic technical support.",
      "Collaborating with peers and coordinators to assist in events, campaigns, and student outreach programs.",
    ],
  },
];

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering (CSE)",
    institution: "Parul University",
    location: "Vadodara, Gujarat",
    duration: "Sep 2022 – May 2026",
    grade: "CGPA: 7.78 / 10",
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Adhyapak Shikshan Mandal’s Shivram Laxman Mali Jr. College",
    location: "Maharashtra, India",
    duration: "2022",
    grade: "Percentage: 82.17%",
  },
  {
    degree: "Secondary School Education (10th)",
    institution: "S.A. Mission English Medium School",
    location: "Taloda, Maharashtra, India",
    duration: "2020",
    grade: "Percentage: 87%",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Journey & Background</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">My professional journey and academic history</p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>

            <div className="relative border-l border-border pl-6 ml-3 space-y-10">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background group-hover:bg-primary transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-background transition-colors duration-300" />
                  </span>

                  <Card className="p-6 border-border bg-card/40 hover:bg-card/80 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                      </div>
                      <div className="bg-primary/5 text-primary border border-primary/20 rounded-full flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {exp.highlights.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-primary mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-secondary/10 rounded-lg text-secondary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative border-l border-border pl-6 ml-3 space-y-10">
              {educationData.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-secondary bg-background group-hover:bg-secondary transition-colors duration-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary group-hover:bg-background transition-colors duration-300" />
                  </span>

                  <Card className="p-6 border-border bg-card/40 hover:bg-card/80 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                      <div className="bg-secondary/5 text-secondary border border-secondary/20 rounded-full flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mt-4 pt-3 border-t border-border/40">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </div>
                      <span className="font-semibold text-foreground text-sm bg-secondary/10 px-2 py-0.5 rounded text-secondary">
                        {edu.grade}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
