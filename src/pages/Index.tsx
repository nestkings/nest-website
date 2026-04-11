import { Link } from "react-router-dom";
import { Users, Star, Trophy, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-basketball.jpg";
import aboutImg from "@/assets/about-team.jpg";
import groupImg from "@/assets/group-training.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Marcus Johnson", role: "Parent", text: "My son's confidence and skills have skyrocketed since joining Nest Kings. The coaches truly care about each player's development." },
  { name: "Sarah Williams", role: "Player, Age 16", text: "The group training sessions are intense but so much fun. I've improved my game more in 3 months here than 2 years elsewhere." },
  { name: "David Chen", role: "Parent", text: "Professional, organized, and genuinely passionate about basketball. Best academy in the city, hands down." },
  { name: "Emily Rodriguez", role: "Player, Age 14", text: "I love the team atmosphere. The coaches push you to be your best while making every session enjoyable." },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Basketball training session" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-up">
          Nest Kings
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight animate-fade-up-delay-1 text-foreground">
          Train Like a Pro.
          <br />
          <span className="text-gradient">Play Like a Champion.</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto animate-fade-up-delay-2">
          Join the premier basketball training program. Build skills, confidence, and championship mentality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up-delay-3">
          <Link
            to="/services"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            Join Training <ChevronRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="border border-foreground/30 text-foreground px-8 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm hover:border-primary hover:text-primary transition-all duration-200 inline-flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={aboutImg} alt="Team training outdoors" width={1280} height={720} loading="lazy" className="rounded-xl shadow-2xl w-full object-cover aspect-video" />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-2 text-foreground">
              More Than Just a <span className="text-gradient">Basketball Academy</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Nest Kings was founded with a mission to develop well-rounded athletes and individuals. 
              Our experienced coaching staff brings decades of professional and collegiate basketball experience 
              to every training session.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We believe in building character, discipline, and teamwork alongside basketball fundamentals.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-primary font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all"
            >
              Learn More <ChevronRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Services Highlight */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading
            subtitle="Our Program"
            title="Group Training"
            description="Our flagship group training program is designed to elevate your game through competitive drills, team play, and expert coaching."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            { icon: Users, title: "Team Building", desc: "Train alongside peers, develop chemistry, and learn the value of teamwork in competitive basketball." },
            { icon: Trophy, title: "Skill Development", desc: "Master ball handling, shooting form, defensive techniques, and game IQ through structured programs." },
            { icon: Star, title: "Physical Fitness", desc: "Improve strength, agility, endurance, and overall athleticism with basketball-specific conditioning." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <ScrollReveal>
            <Link to="/services" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all inline-flex items-center gap-2 hover:scale-105">
              View Full Program <ChevronRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Gallery" title="Life on the Court" />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="overflow-hidden rounded-xl group">
                <img
                  src={img}
                  alt={`Basketball gallery ${i + 1}`}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="Testimonials" title="What Our Community Says" />
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-24 overflow-hidden">
      <img src={ctaBanner} alt="Basketball court aerial" width={1920} height={600} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
      <div className="relative z-10 container mx-auto text-center px-4">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-foreground">
            Ready to <span className="text-gradient">Level Up?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Join Nest Kings today and take the first step towards becoming the player you were meant to be.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105"
          >
            Book Your First Session <ChevronRight size={18} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
