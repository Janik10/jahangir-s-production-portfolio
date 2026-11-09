import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  link?: string;
  inProgress?: boolean;
}

const projects: Project[] = [
  {
    title: "Edwin",
    subtitle: "Course learning platform with per-student mastery tracking",
    problem: "In large courses, instructors only learn what students didn't understand when exam grades come back, and general chatbots answer from outside the course.",
    solution: "An AI assistant that answers from the course's own materials with citations, plus quizzes, a discussion board and a Bayesian per-topic mastery model that shows instructors where the class is stuck. Built with deletion, retention and privacy controls for student data.",
    tech: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Gemini", "RAG"],
    outcome: "Piloted in ASU's CSE 310 with 42 enrolled students. 2nd of 130+ teams at SunHacks 2025. Currently in UW–Madison's security and privacy review.",
    link: "https://edwinlearning.com",
  },
  {
    title: "kt-bench",
    subtitle: "Benchmarking knowledge-tracing models",
    problem: "Which model best predicts whether a student will answer the next question correctly, and does a simple Bayesian model hold up against deep learning?",
    solution: "Implemented DKT (LSTM) and SAKT (self-attention) from scratch in PyTorch and benchmarked them against BKT, PFA and a Bayesian baseline on ASSISTments 2009 and EdNet, with student-level held-out splits, leakage tests and CI.",
    tech: ["PyTorch", "pandas", "PyArrow", "scikit-learn", "GitHub Actions"],
    outcome: "DKT reaches 0.758 ± 0.005 AUC on held-out students on ASSISTments 2009, within 0.004 of published results. Write-up in progress.",
    inProgress: true,
  },
  {
    title: "SAFE-POS",
    subtitle: "Anomaly detection for point-of-sale fraud",
    problem: "Restaurants lose revenue to cashier fraud that goes unnoticed.",
    solution: "A POS system that flags possible cashier fraud by comparing transaction logs with shift logs, with backend services and schemas designed for anomaly detection.",
    tech: ["FastAPI", "PostgreSQL", "React", "Python"],
    outcome: "In development; a restaurant pilot is in preparation.",
    link: "https://github.com/Janik10/SAFE-POS",
    inProgress: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI for education, from product to model evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {project.link && (
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.link.includes("github.com") ? <Github size={16} /> : <ExternalLink size={16} />}
                    </a>
                  </Button>
                )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
