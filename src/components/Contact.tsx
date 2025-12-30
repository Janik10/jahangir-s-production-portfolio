import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mammadlidzahangir@gmail.com",
    href: "mailto:mammadlidzahangir@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jahangir-mammadli",
    href: "https://linkedin.com/in/jahangir-mammadli",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Janik10",
    href: "https://github.com/Janik10",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
        <p className="text-muted-foreground mb-12">
          Open to discussing internship opportunities, collaborations, or technical projects.
        </p>

        <div className="space-y-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:border-primary/30 hover-lift transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <link.icon size={20} className="text-primary" />
                <span className="text-foreground font-medium">{link.label}</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                {link.value}
              </span>
            </a>
          ))}
        </div>

        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
          <a href="/resume.pdf" download>
            <FileText className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
};
