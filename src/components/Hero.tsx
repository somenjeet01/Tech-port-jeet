import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Terminal prompt style intro */}
          <div className="font-mono text-sm text-muted-foreground mb-4">
            <span className="text-primary">$</span> whoami
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            Somen Jeet
          </h1>
          
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl text-gradient font-semibold">
              Full Stack Developer — MERN | React | Appwrite
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building modern, fast, and secure digital experiences with clean UI, modern tech, and real-world performance.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              <a href="#projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline"
              asChild
              className="border-border hover:bg-secondary"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/somenjeet01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/somen-jeet-562044259/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:somenjeet2004@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
