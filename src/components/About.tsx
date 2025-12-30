import { GraduationCap, Award, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a systems-focused software engineer who builds production-grade software that scales. 
              My work spans backend development, full-stack applications, and applied AI — with a focus on 
              designing reliable APIs, optimizing data pipelines, and shipping features that solve real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Yolgen, I developed backend systems powering AI-driven career insights. At ASU, I lead 
              project teams that win hackathons by combining strong engineering with practical AI integration. 
              I prioritize code quality, system reliability, and measurable outcomes over surface-level features.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking Summer 2026 internships where I can contribute to backend infrastructure, 
              distributed systems, or AI/ML engineering.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-foreground font-medium">Arizona State University</p>
              <p className="text-sm text-muted-foreground">B.S. Computer Science • Expected May 2028</p>
              <p className="text-sm text-muted-foreground">GPA: 3.85</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Recognition</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dean's List</li>
                <li>• Scholarship Recipient</li>
                <li>• 2nd Place, DevHacks 2025</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">Tempe, AZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
