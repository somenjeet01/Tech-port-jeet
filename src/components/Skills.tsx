import { Code2, Server, Cloud, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "Redux Toolkit", "React Query", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Vite", "EJS"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "MongoDB", "Mongoose", "SQL", "Appwrite"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (EC2, S3)", "Render", "Vercel", "Docker", "Git", "GitHub", "Postman"],
  },
  {
    category: "Other",
    icon: Wrench,
    skills: ["Blockchain (Ethereum)", "Leadership", "Public Speaking", "Technical Writing"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> ls skills/
          </div>
          
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((section, idx) => (
              <div 
                key={section.category}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded bg-muted text-foreground border border-border hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
