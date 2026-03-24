const skills = [
  "JavaScript", "Python", "Java", "C++", "React.js", "Node.js",
  "Express.js", "MongoDB", "MySQL", "Docker", "Git", "GitHub",
  "Linux", "VS Code", "HTML", "CSS"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3">Technologies I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/50 text-sm text-foreground hover:border-primary/50 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
