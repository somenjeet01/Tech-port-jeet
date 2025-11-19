import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Users,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/caseStudyData";

const ArchitectureDiagram = ({ architecture }: { architecture: any }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
      <p className="text-muted-foreground mb-6">{architecture.description}</p>

      {/* Simple SVG Architecture Diagram */}
      <div className="bg-muted/30 rounded-lg p-6 mb-6">
        <svg viewBox="0 0 800 400" className="w-full h-auto">
          {/* Background */}
          <rect width="800" height="400" fill="transparent" />

          {/* Frontend Layer */}
          <rect
            x="50"
            y="50"
            width="150"
            height="80"
            rx="8"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <text
            x="125"
            y="85"
            textAnchor="middle"
            className="fill-primary text-sm font-medium"
          >
            Frontend
          </text>
          <text
            x="125"
            y="105"
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            User Interface
          </text>

          {/* Backend Layer */}
          <rect
            x="300"
            y="50"
            width="150"
            height="80"
            rx="8"
            fill="hsl(var(--secondary))"
            fillOpacity="0.1"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="375"
            y="85"
            textAnchor="middle"
            className="fill-foreground text-sm font-medium"
          >
            Backend
          </text>
          <text
            x="375"
            y="105"
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            API Layer
          </text>

          {/* Database Layer */}
          <rect
            x="550"
            y="50"
            width="150"
            height="80"
            rx="8"
            fill="hsl(var(--accent))"
            fillOpacity="0.1"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="625"
            y="85"
            textAnchor="middle"
            className="fill-foreground text-sm font-medium"
          >
            Database
          </text>
          <text
            x="625"
            y="105"
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            Data Storage
          </text>

          {/* External Services */}
          <rect
            x="300"
            y="200"
            width="150"
            height="80"
            rx="8"
            fill="hsl(var(--muted))"
            fillOpacity="0.1"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="375"
            y="235"
            textAnchor="middle"
            className="fill-foreground text-sm font-medium"
          >
            External APIs
          </text>
          <text
            x="375"
            y="255"
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            Third-party Services
          </text>

          {/* Arrows */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="hsl(var(--muted-foreground))"
              />
            </marker>
          </defs>

          {/* Frontend to Backend */}
          <line
            x1="200"
            y1="90"
            x2="300"
            y2="90"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Backend to Database */}
          <line
            x1="450"
            y1="90"
            x2="550"
            y2="90"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Backend to External APIs */}
          <line
            x1="375"
            y1="130"
            x2="375"
            y2="200"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* Architecture Components */}
      <div className="grid md:grid-cols-2 gap-4">
        {architecture.components.map((component: any, index: number) => (
          <div key={index} className="p-4 border border-border rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {component.name}
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              {component.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {component.tech.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseStudyPage = () => {
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4">{caseStudy.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* Project Meta */}
          <div className="grid md:grid-cols-4 gap-6 p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{caseStudy.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Role</p>
                <p className="font-medium">{caseStudy.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Team</p>
                <p className="font-medium">{caseStudy.team}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {caseStudy.links.github && (
                <Button asChild size="sm" variant="outline">
                  <a
                    href={caseStudy.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {caseStudy.links.live && (
                <Button asChild size="sm">
                  <a
                    href={caseStudy.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {caseStudy.overview}
          </p>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(caseStudy.technologies).map(([category, techs]) => (
              <div
                key={category}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <h3 className="font-semibold text-primary mb-4 capitalize flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(techs as string[]).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Architecture & Design</h2>
          <ArchitectureDiagram architecture={caseStudy.architecture} />
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
          <div className="space-y-8">
            {caseStudy.challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {challenge.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-400 mb-2">Challenge</h4>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-400 mb-2">
                      Solution
                    </h4>
                    <p className="text-muted-foreground">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes & Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Outcomes & Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-lg"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {outcome.value}
                </div>
                <div className="font-medium mb-2">{outcome.metric}</div>
                <p className="text-sm text-muted-foreground">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.gallery.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling!.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden text-muted-foreground text-center p-8">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p>{item.alt}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-card border border-border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Learning More?
          </h2>
          <p className="text-muted-foreground mb-6">
            Check out the live project or explore the source code to see how it
            was built.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {caseStudy.links.github && (
              <Button asChild variant="outline">
                <a
                  href={caseStudy.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </a>
              </Button>
            )}
            {caseStudy.links.live && (
              <Button asChild>
                <a
                  href={caseStudy.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Live Site
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <a href="/#contact">
                <User className="h-4 w-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPage;
