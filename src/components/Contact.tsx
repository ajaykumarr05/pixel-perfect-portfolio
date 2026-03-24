import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-2"><span className="glow-dot" /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-2">Let's build something together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Contact Me</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Ready to start a project or collaborate? Send me a message.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">EMAIL</p>
                  <p className="text-foreground text-sm">ajaykumaryadav07@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LOCATION</p>
                  <p className="text-foreground text-sm">Hyderabad - Telangana, India - 506381</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">NAME</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">MESSAGE</label>
              <textarea
                placeholder="Your message..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <Send size={16} /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
