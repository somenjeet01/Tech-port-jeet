export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> cat about.txt
          </div>
          
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate <span className="text-foreground font-medium">Full Stack Developer (MERN)</span> specializing 
              in building scalable, user-centric web applications. I have hands-on experience working with{" "}
              <span className="text-primary">React, Node.js, Express.js, MongoDB, Appwrite, Cloudinary</span>, and modern 
              UI tools like <span className="text-primary">Tailwind CSS, Shadcn UI, and Framer Motion</span>.
            </p>
            
            <p>
              I enjoy creating clean, intuitive digital experiences. I've built <span className="text-foreground font-medium">5+ full-stack applications</span>, 
              contributed to open-source projects, and actively participate in hackathons. My interests include cloud 
              deployments, secure authentication systems, modern frontend design, and AI-based solutions.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Full-Stack Projects</div>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">8.4</div>
                <div className="text-sm text-muted-foreground">CGPA (BCA)</div>
              </div>
              
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">3rd</div>
                <div className="text-sm text-muted-foreground">Vision 2K25 Place</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
