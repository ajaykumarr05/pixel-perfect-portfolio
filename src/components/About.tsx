import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 glow-border" />
              <img
                src={profileImg}
                alt="Ajay Kumar"
                width={384}
                height={384}
                className="w-full h-full rounded-full object-cover border-2 border-primary/50"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a passionate <strong className="text-foreground">Computer Science student</strong> at Lovely Professional University, specializing in Full Stack Web Development with a strong focus on the MERN stack.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I love building scalable, efficient applications — from real-time collaborative coding platforms to civic issue management systems with complex role-based workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, I'm sharpening my <strong className="text-foreground">DSA skills</strong>, exploring new frameworks, or working on meaningful projects that make a difference.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Code size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
