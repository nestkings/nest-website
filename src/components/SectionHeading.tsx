interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ subtitle, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <span className="text-primary font-semibold text-sm uppercase tracking-widest">{subtitle}</span>
    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mt-2 text-foreground">{title}</h2>
    {description && (
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
  </div>
);

export default SectionHeading;
