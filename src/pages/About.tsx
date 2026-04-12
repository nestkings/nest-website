import { Link } from "react-router-dom";
import { Target, Eye, Shield, Award, Heart, Users, ChevronRight } from "lucide-react";
import coachImg from "@/assets/coach.jpg";
import aboutTeamImg from "@/assets/about-team.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const whyChooseUs = [
  { icon: Award, title: "Expert Coaches", desc: "Experienced coaches with professional and collegiate backgrounds." },
  { icon: Users, title: "Small Groups", desc: "Personalized attention with optimized player-to-coach ratios." },
  { icon: Shield, title: "Safe Environment", desc: "State-of-the-art facilities with a focus on player safety." },
  { icon: Heart, title: "Character Building", desc: "We develop leaders, not just athletes, on and off the court." },
];

const About = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden">
      <img src={aboutTeamImg} alt="Team training" width={1280} height={720} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto text-center px-4">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest animate-fade-up">About Us</span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-2 animate-fade-up-delay-1 text-foreground">
          Our <span className="text-gradient">Story</span>
        </h1>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionHeading subtitle="The Beginning" title="How It All Started" />
            <p className="text-muted-foreground leading-relaxed text-lg">
              Established in 2025, Nest Kings has quickly become one of the fastest growing basketball clubs in Melbourne Northern Suburbs. We are proud to have a roster of 70+ players.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Nest Kings has participated in multiple tournaments including the Sikh Games 2026, where we emerged as the Winner of the U11 division. Training sessions have been running regularly for U10, U12, U16, and U18 since the club formed. We also proudly organised one of the biggest tournaments at Craigieburn Sports Stadium this year, with 8 clubs, 29 teams, and 300+ players participating.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-10">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-foreground">Our Mission</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To provide world-class basketball training that develops skilled, confident, and 
                disciplined athletes while fostering a love for the game and building strong character.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="bg-card border border-border rounded-xl p-10">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Eye className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase text-foreground">Our Vision</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                To be the most trusted and impactful basketball academy, recognized for producing 
                exceptional players and outstanding individuals who lead both on and off the court.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Coach */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={coachImg} alt="Head Coach" width={800} height={1024} loading="lazy" className="rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Meet The Coach</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mt-2 text-foreground">
              Coach <span className="text-gradient">Nippy</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Coach Nippy has 13+ years of professional basketball career & years of coaching & training experience with multiple basketball clubs in Melbourne.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Training Focus & Core Fundamentals:
            </p>
            <ul className="mt-6 space-y-2">
              {["Ball Handling", "Shooting Fundamentals", "Passing & Team Play", "Game Understanding", "Strength & conditioning", "Plyometric Training"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                  <ChevronRight size={16} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Why Nest Kings" title="Why Choose Us" />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold uppercase text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-3">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-foreground">
          Ready to <span className="text-gradient">Join Us?</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Become part of the Nest Kings family and start your basketball journey today.
        </p>
        <a
          href="https://nestkings.classcard.app/en/bookings"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105"
        >
          Get Started <ChevronRight size={18} />
        </a>
      </ScrollReveal>
    </section>
  </main>
);

export default About;
