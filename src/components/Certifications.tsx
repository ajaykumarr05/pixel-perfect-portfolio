import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Cloud Computing", org: "NPTEL", date: "Oct' 2025" },
  { title: "Object Oriented Programming", org: "iamneo", date: "Dec' 2024" },
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services", date: "2024" },
  { title: "Full Stack Development", org: "Udemy", date: "2024" },
];

const education = [
  {
    period: "2023 – PRESENT",
    title: "B.Tech in Computer Science",
    school: "Lovely Professional University",
    desc: "Studied core computer science concepts including Data Structures & Algorithms, Object-Oriented Programming, Database Systems, and Web Development.",
  },
  {
    period: "2021 – 2023",
    title: "Senior Secondary Education",
    school: "Krishna Veni Junior College",
    desc: "Specialized in Mathematics, Physics, and Chemistry.",
  },
  {
    period: "2017 – 2021",
    title: "Matriculation",
    school: "Brilliant High School",
    desc: "Completed secondary education with a focus on core academics.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        {/* Certificates */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Certificates</h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <span className="glow-dot" /> Professional certifications & achievements
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {certs.map((c) => (
              <div key={c.title} className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors relative">
                <ExternalLink size={14} className="absolute top-4 right-4 text-muted-foreground" />
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-3">
                  <Award size={18} />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{c.title}</h3>
                <p className="text-muted-foreground text-xs">{c.org}</p>
                <p className="text-primary text-xs font-semibold mt-1">{c.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Education</h2>
          <p className="text-muted-foreground mt-2">My academic journey</p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />
          {education.map((e) => (
            <div key={e.title} className="relative pl-20 pb-12">
              <div className="absolute left-4 top-1 w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <Award size={16} />
              </div>
              <p className="text-primary text-xs font-semibold tracking-wider">{e.period}</p>
              <h3 className="text-foreground font-bold mt-1">{e.title}</h3>
              <p className="text-muted-foreground text-sm">{e.school}</p>
              <p className="text-muted-foreground text-sm mt-2">{e.desc}</p>
            </div>
          ))}
        </div>

        {/* Resume */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-muted-foreground mt-2">Download my detailed CV</p>
          <button className="mt-8 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity text-lg">
            ↓ Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
