import { ArrowDown, Github, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to Summer 2027 Internships
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
          Jahangir Mammadli
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          ML & Backend Engineer
        </p>

        <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
          CS @ UW–Madison • Building AI systems for education
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
            <a href="#projects">
              <Briefcase className="mr-2 h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-card hover:border-primary/50">
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
            <a href="https://github.com/Janik10" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <a 
          href="#projects" 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};
