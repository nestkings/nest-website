import { Link } from "react-router-dom";
import { Users, Zap, Heart, Brain, Clock, ChevronRight, CheckCircle } from "lucide-react";
import groupImg from "@/assets/group-training.jpg";
import galleryImg from "@/assets/gallery-3.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  { icon: Users, title: "Teamwork", desc: "Learn to play as a unit, communicate effectively, and build chemistry with teammates." },
  { icon: Zap, title: "Skill Enhancement", desc: "Improve shooting, dribbling, passing, defense, and overall basketball IQ." },
  { icon: Heart, title: "Physical Fitness", desc: "Build endurance, strength, agility, and cardiovascular health through basketball-specific training." },
  { icon: Brain, title: "Mental Toughness", desc: "Develop resilience, focus, and the competitive mindset needed to succeed." },
];

const ageGroups = [
  { age: "5–7", name: "Mini Hoopers", sessions: "Sundays 1:30 – 2:30 PM" },
  { age: "7–9", name: "Junior Beginners", sessions: "Sundays 2:30 – 3:30 PM" },
  { age: "Open", name: "Additional Session", sessions: "Sundays 3:30 – 4:30 PM" },
];

const includes = [
  "Professional coaching staff",
  "Structured drills & scrimmages",
  "Performance tracking",
  "Video analysis sessions",
  "Access to premium facilities",
  "Seasonal tournaments",
];

const Services = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={groupImg} alt="Group training" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto text-center px-4">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest animate-fade-up">Our Program</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-2 animate-fade-up-delay-1 text-foreground">
          Group & Private <span className="text-gradient">Training</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto animate-fade-up-delay-2">
          Our premier group training program combines competitive gameplay with expert coaching to develop complete basketball players.
        </p>
      </div>
    </section>

    {/* Description */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">The Program</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mt-2 text-foreground">
              Train Together, <span className="text-gradient">Win Together</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Our Training sessions are the heart of Nest Kings. Each session is carefully 
              designed to challenge players at every level while fostering a supportive team environment.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              From fundamental drills to live scrimmages, our experienced coaches ensure that every minute 
              on the court is productive, competitive, and fun.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle size={16} className="text-primary shrink-0" /> {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <img src={galleryImg} alt="Team practice" width={640} height={640} loading="lazy" className="rounded-xl shadow-2xl w-full object-cover aspect-square" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Benefits" title="What You'll Gain" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold uppercase text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Age Groups & Schedule */}
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Rookie Start Program" title="Age Groups & Training Times" description="Term 2 starts 19 April and ends 21 June. Program Cost: $290. All sessions on Sundays." />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {ageGroups.map((g, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-heading font-bold text-primary">{g.age}</div>
                <h3 className="font-heading text-xl font-semibold uppercase mt-2 text-foreground">{g.name}</h3>
                <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm">
                  <Clock size={14} /> {g.sessions}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
          Ready to <span className="text-gradient">Get Started?</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Spots are limited. Reserve your place in the next training session today.
        </p>
        <a
          href="https://nestkings.classcard.app/en/bookings"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105"
        >
          Book Your Spot <ChevronRight size={18} />
        </a>
      </ScrollReveal>
    </section>
  </main>
);

export default Services;
