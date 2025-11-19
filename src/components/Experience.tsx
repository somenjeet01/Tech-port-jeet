import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Assessli",
    website: "https://www.assessli.com/",
    location: "Kolkata",
    period: "July 2025 – Sept 2025",
    description: [
      "Built and tested secure backend APIs for a large-scale assessment platform",
      "Integrated AI-based proctoring & identity verification to prevent cheating",
      "Optimized API performance with better queries and caching",
      "Worked on reliability, load handling, and secure architecture",
    ],
  },
  {
    role: "Freelance Website Developer",
    company: "Som Sattva — Honey Brand",
    website: "https://somsattva.com/",
    location: "Remote",
    period: "2024",
    description: [
      "Designed and developed a clean, modern, nature-inspired website for a natural honey brand",
      "Crafted brand-aligned content focused on purity, transparency, and health benefits",
      "Optimized product pages with SEO-driven descriptions and microcopy",
      "Delivered a high-conversion product landing page",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> cat experience.log
          </div>

          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <Briefcase className="h-4 w-4" />
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-primary transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>

                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
