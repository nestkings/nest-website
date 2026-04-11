import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest animate-fade-up">Get In Touch</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-2 animate-fade-up-delay-1 text-foreground">
          Contact <span className="text-gradient">Us</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto animate-fade-up-delay-2">
          Have questions or ready to join? We'd love to hear from you.
        </p>
      </section>

      {/* Form + Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                  { key: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "0420262041" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.key !== "phone"}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Send Message <ChevronRight size={18} />
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold uppercase text-foreground mb-6">Contact Details</h2>
                  <ul className="space-y-5">
                    {[
                      { icon: Phone, label: "Phone", value: "0420262041" },
                      { icon: Mail, label: "Email", value: "info.nestkings@gmail.com" },
                      { icon: MapPin, label: "Location", value: "Craigieburn, Victoria 3064" },
                      { icon: Clock, label: "Hours", value: "Sundays: 1:30 PM - 4:30 PM" },
                    ].map((c) => (
                      <li key={c.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <c.icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{c.label}</p>
                          <p className="text-muted-foreground text-sm">{c.value}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl overflow-hidden border border-border bg-card aspect-video flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin size={40} className="mx-auto mb-2 text-primary/50" />
                    <p className="text-sm">Google Maps Integration</p>
                    <p className="text-xs">Craigieburn, Victoria 3064</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
            Book Your <span className="text-gradient">First Session</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Your first group training session is on us. Experience the Nest Kings difference today.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105">
            Book Free Session <ChevronRight size={18} />
          </button>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Contact;
