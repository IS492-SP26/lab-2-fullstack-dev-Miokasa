const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
  {
    name: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator"],
  },
  {
    name: "Other",
    skills: ["WordPress", "Git", "Node.js", "Tailwind CSS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          The tools and technologies I use to bring ideas to life.
        </p>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 bg-background border border-border rounded-full text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-colors cursor-default"
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
}
