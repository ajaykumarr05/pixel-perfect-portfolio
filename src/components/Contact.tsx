import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Let's build something together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* LEFT INFO */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Contact Me</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Ready to start a project or collaborate? Send me a message.
            </p>

            <div className="space-y-6">
              
              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LOCATION</p>
                  <p className="text-foreground text-sm">
                    Hyderabad - Telangana, India
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">EMAIL</p>
                  <a
                    href="mailto:ajaykumaronline.in@gmail.com"
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    ajaykumaronline.in@gmail.com
                  </a>
                </div>
              </div>

              {/* MOBILE */}
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">MOBILE</p>
                  <a
                    href="tel:+919876543210" // 👉 replace with your number
                    className="text-foreground text-sm hover:text-primary transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* 🔥 SOCIAL LINKS */}
            <div className="flex gap-4 mt-10 flex-wrap">
              
              <a href="https://github.com/ajaykumarr05" target="_blank" className="social-icon">
                <Github size={18} />
              </a>

              <a href="https://www.linkedin.com/in/ajaykumaryadav07/" target="_blank" className="social-icon">
                <Linkedin size={18} />
              </a>

              <a href="https://twitter.com/" target="_blank" className="social-icon">
                <Twitter size={18} />
              </a>

              <a href="https://instagram.com/" target="_blank" className="social-icon">
                <Instagram size={18} />
              </a>

              {/* Optional */}
              <a href="#" className="social-icon">
                Skype
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className="space-y-4"
          >
            
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary/50 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
