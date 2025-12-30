interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "C", "C++", "Java", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "Flask", "FastAPI", "Tailwind", "MySQL", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "AI & Data",
    skills: ["OpenAI GPT-4 API", "RAG", "Embeddings", "Snowflake", "Snowflake API", "Pandas"],
  },
  {
    title: "Cloud & Other",
    skills: ["AWS (RDS, S3)", "Linux", "Git/GitHub", "REST APIs", "Chrome Extensions", "Agile Development"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-muted-foreground">
            Technologies I use to build and ship production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
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
