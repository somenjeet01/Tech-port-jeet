import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "MyCabin — Cabin Booking Platform",
    description: "Full-stack cabin booking application with seamless OAuth login, custom mapping feature for location-based discovery, and optimized storage using Appwrite.",
    tech: ["React", "Appwrite", "OAuth", "Maps API", "Tailwind CSS", "Redux Toolkit", "React Query"],
    github: "https://github.com/somenjeet01/My_Own_Cabin",
    live: "https://my-own-cabin.vercel.app",
  },
  {
    title: "Content Creation Backend — Video Platform API",
    description: "Scalable backend for video-sharing platform with Cloudinary integration for optimized video delivery, JWT authentication, and MongoDB aggregation pipelines.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/somenjeet01",
    live: null,
  },
  {
    title: "BlockOverflow — Blockchain Q&A Platform",
    description: "StackOverflow-inspired platform with blockchain-backed answer verification using Ethereum for transparent and tamper-proof tracking.",
    tech: ["JavaScript", "Ethereum", "Framer Motion", "Shadcn UI"],
    github: "https://github.com/somenjeet01",
    live: "https://block-overflow-two.vercel.app",
  },
  {
    title: "WanderLust — Travel Booking App",
    description: "MERN-based travel booking application with Cloudinary image uploads, EJS template rendering, and complete authentication workflows.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "EJS", "Cloudinary"],
    github: "https://github.com/somenjeet01",
    live: "https://wanderlust-project-wvch.onrender.com/listings",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> ls projects/
          </div>
          
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={project.title}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-muted text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border hover:border-primary hover:bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    
                    {project.live && (
                      <Button 
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
