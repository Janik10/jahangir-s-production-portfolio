import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  hasDemo?: boolean;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    title: "Edwin AI",
    subtitle: "AI-Powered Canvas Learning Assistant",
    problem: "Students lack personalized, real-time support for navigating course materials and assessments.",
    solution: "Built a Chrome extension integrating with Canvas LMS to automate course Q&A, adaptive quizzes, and progress analytics. Integrated Snowflake for secure storage and GPT-4 for grounded responses using Retrieval-Augmented Generation.",
    tech: ["React", "Flask", "OpenAI GPT-4", "Snowflake DB", "RAG Pipeline"],
    outcome: "2nd Place at DevHacks 2025 (1,100+ participants; 130+ teams). Demonstrates backend design, prompt engineering, and AI data-pipeline development under a 24-hour deadline.",
    hasDemo: true,
  },
  {
    title: "Nebulo",
    subtitle: "Student Tech Collaboration Platform",
    problem: "Students struggle to find collaborators and form project teams efficiently.",
    solution: "Built a full-stack platform connecting 100+ students to form teams, chat, and launch projects. Implemented real-time chat, team-matching algorithms, and a feed system. Designed REST APIs and secure authentication with JWT + password hashing.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Prisma ORM", "AWS (RDS, S3)", "Socket.io"],
    outcome: "Deployed infrastructure using AWS RDS (MySQL), S3 for media storage, and hosted backend on Render. Platform actively used by 100+ student collaborators.",
  },
  {
    title: "SAFE-POS",
    subtitle: "Fraud-Detection Point-of-Sale System",
    problem: "Restaurant chains lose revenue due to undetected cashier fraud.",
    solution: "Engineering an AI-driven POS system detecting cashier fraud by comparing transaction logs and shift logs. Building predictive models to flag anomalous behavior patterns.",
    tech: ["FastAPI", "PostgreSQL", "React", "Python"],
    outcome: "Preparing pilot deployment with 3+ restaurant chains in Kazakhstan.",
    inProgress: true,
  },
  {
    title: "Fashion Tinder",
    subtitle: "AI-Driven Fashion Discovery App",
    problem: "Fashion discovery is fragmented and lacks personalized recommendations.",
    solution: "Built a swipe-based fashion discovery app using brand CSV ingestion and JWT authentication. Replaced mock data with real brand datasets and built end-to-end backend.",
    tech: ["React (Vite)", "Express.js", "MySQL", "JWT"],
    outcome: "Full-stack implementation with real brand data integration and secure user authentication system.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production systems across backend, full-stack, and applied AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-lg p-6 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    {project.inProgress && (
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  {project.hasDemo && (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Play size={16} />
                    </Button>
                  )}
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <a href="https://github.com/Janik10" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Problem</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Outcome</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.hasDemo && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="text-sm border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    <Play className="mr-2 h-3 w-3" />
                    Watch Demo
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
