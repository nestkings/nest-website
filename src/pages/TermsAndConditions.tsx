import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Stethoscope,
  Scale,
  BookOpen,
  Camera,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const sections = [
  {
    icon: ShieldAlert,
    title: "Acknowledgement & Assumption of Risk",
    content:
      "As a parent or legal guardian, I recognise that basketball training, practice sessions, and all related activities organised by Nest Kings Basketball Training carry certain inherent risks. These may include, but are not limited to, physical contact, falls, sprains, and other injuries common to athletic participation. I confirm that my child is in suitable physical condition to take part and I willingly accept all risks that come with their involvement in the program.",
  },
  {
    icon: Stethoscope,
    title: "Medical Authorisation",
    content:
      "Should a medical emergency arise during any Nest Kings Basketball Training session or event, I grant permission for the coaching staff and program representatives to seek and arrange appropriate medical attention for my child. I accept full financial responsibility for any medical costs that may result from injuries sustained while participating in the program.",
  },
  {
    icon: Scale,
    title: "Release of Liability",
    content:
      "I agree to release and hold harmless Nest Kings Basketball Training, along with its coaches, support staff, venue operators, and all affiliated individuals, from any liability, legal claims, or demands resulting from injury, loss, or harm that my child may sustain during their participation in any program activities, training sessions, or events.",
  },
  {
    icon: BookOpen,
    title: "Code of Conduct",
    content:
      "I acknowledge that every participant in the Nest Kings Basketball Training program is required to adhere to the rules, standards, and guidelines established by the organisation. Conduct that is disruptive, disrespectful, or poses a safety concern may lead to immediate dismissal from the program, and no refund will be provided in such cases.",
  },
  {
    icon: Camera,
    title: "Photography & Media Consent",
    content:
      "By enrolling your child in Nest Kings Basketball Training, you as a parent or guardian provide consent for them to be photographed and filmed during training sessions, games, and club events. The captured photos and video footage may be utilised by the club for promotional purposes across various channels, including but not limited to our website, social media accounts, and other marketing materials.",
  },
];

const TermsAndConditions = () => (
  <main className="pt-20">
    {/* Hero */}
    <section className="relative py-20 md:py-32 overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 container mx-auto text-center px-4">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest animate-fade-up">
          Legal
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold uppercase mt-2 animate-fade-up-delay-1 text-foreground">
          Terms &{" "}
          <span className="text-gradient">Conditions</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto animate-fade-up-delay-2">
          Please read these terms carefully before enrolling in any Nest Kings
          Basketball Training program.
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              By registering for a program with Nest Kings Basketball Training,
              you agree to the following terms and conditions regarding
              participation, medical care, liability, conduct, and media consent.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Sections */}
    <section className="pb-16 md:pb-24 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl space-y-8">
        {sections.map((section, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="bg-card border border-border rounded-xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-5 md:gap-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="text-primary" size={26} />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl md:text-2xl font-bold uppercase text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Agreement Notice */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center">
            <SectionHeading
              subtitle="Agreement"
              title="Your Acknowledgement"
            />
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              By completing the registration and payment process for any Nest
              Kings Basketball Training program, you acknowledge that you have
              read, understood, and agreed to all of the above terms and
              conditions. If you have any questions regarding these terms,
              please contact us before enrolling.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm mt-8 hover:bg-primary/90 transition-all hover:scale-105"
            >
              Contact Us <ChevronRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default TermsAndConditions;
