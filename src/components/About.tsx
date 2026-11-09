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
              I'm a Computer Sciences student at UW–Madison who builds AI systems for education. My main
              project is Edwin, a course learning platform that answers students' questions from their own
              course materials and tracks what each student understands, topic by topic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about measuring whether things actually work. That's why I built kt-bench, a benchmark
              that tests my own mastery model against deep learning baselines on held-out students. Before
              that, I built backend systems for AI-driven career insights at Yolgen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm looking for Summer 2027 internships in ML engineering, ML infrastructure or backend, and
              for undergraduate research in AI for education.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-foreground font-medium">University of Wisconsin–Madison</p>
              <p className="text-sm text-muted-foreground">B.S. Computer Sciences, Data Science Certificate • Expected May 2028</p>
              <p className="text-sm text-muted-foreground">GPA: 3.79 • Transferred from Arizona State University</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Recognition</h3>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dean's List</li>
                <li>• 2nd of 130+ teams, SunHacks 2025</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 hover-lift hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">Madison, WI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
