import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-muted-foreground">
            Professional engineering experience building production systems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-px bg-border" />
          
          <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
            <div className="md:text-right md:pr-8">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar size={14} />
                <span>June 2025 — August 2025</span>
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 md:justify-end w-full">
                <MapPin size={14} />
                <span>Remote</span>
              </div>
            </div>

            <div className="relative md:pl-8">
              <div className="absolute left-0 md:left-0 top-0 transform -translate-x-[calc(2rem+4px)] md:-translate-x-[calc(2rem+4px)] w-2 h-2 rounded-full bg-primary" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Backend Developer Intern</h3>
                </div>
                <p className="text-primary font-medium mb-4">Yolgen — AI-Driven Professional Insights Platform</p>
                
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Developed backend APIs and database models powering AI-driven professional simulation features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Implemented user authentication, session management, and data pipelines for personalized insights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Integrated OpenAI GPT APIs to generate real-time career feedback and adaptive recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Worked in a 5-person agile engineering team
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    Reduced median API response time ~30% through query optimization and caching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
