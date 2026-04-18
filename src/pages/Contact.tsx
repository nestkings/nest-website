import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-secondary text-center">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest animate-fade-up">
          Get In Touch
        </span>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-heading text-3xl font-bold uppercase text-foreground mb-8">
                  Contact Details
                </h2>
                <ul className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone", value: "+61 420262041" },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info.nestkings@gmail.com",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Craigieburn, Victoria 3064",
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Sundays: 1:30 PM - 4:30 PM",
                    },
                  ].map((c) => (
                    <li key={c.label} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          {c.label}
                        </p>
                        <p className="text-muted-foreground text-base mt-0.5">
                          {c.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-xl overflow-hidden border border-border bg-card aspect-square md:aspect-[4/3] flex items-center justify-center shadow-xl hover:border-primary/50 transition-colors relative">
                <iframe
                  title="Nest Kings Location"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Craigieburn+VIC+3064,+Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
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
           Experience the Nest Kings difference today.
          </p>
          <a
            href="https://nestking.classcard.app/en/bookings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105"
          >
            Book Free Session <ChevronRight size={18} />
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Contact;
