import { Trophy, Award, Users, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place — Vision 2K25",
    description: "Technical Project Presentation (2025)",
    highlight: "My Own Cabin Project",
  },
  {
    icon: Users,
    title: "Smart India Hackathon 2024",
    description: "Team Participant",
    highlight: "National Level Competition",
  },
  {
    icon: Award,
    title: "EDU Chain Hackathon 2024",
    description: "Frontend Developer Role",
    highlight: "Blockchain Education Platform",
  },
  {
    icon: Code,
    title: "Open Source Contributor",
    description: "UI Enhancements & Bug Fixes",
    highlight: "Active in Dev Community",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> cat achievements.json
          </div>
          
          <h2 className="text-4xl font-bold mb-12">Achievements & Recognition</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div 
                key={achievement.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift text-center animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                <p className="text-xs font-mono text-primary">{achievement.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
