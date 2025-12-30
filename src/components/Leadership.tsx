import { Users } from "lucide-react";

export const Leadership = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership</h2>
          <p className="text-muted-foreground">
            Building and leading engineering teams.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-primary/30 transition-all duration-300 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Founder & Lead — Edwin AI Project Team</h3>
              <p className="text-sm text-muted-foreground">2025 • Arizona State University</p>
            </div>
          </div>
          
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Led a cross-functional team of developers and designers to build an AI-powered learning assistant
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Owned system architecture, UI/UX decisions, and live demo presentation at DevHacks 2025
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Built a product improving learning outcomes for 50+ ASU students
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
