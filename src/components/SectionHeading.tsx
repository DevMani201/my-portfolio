interface SectionHeadingProps {
  id: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  id,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        <span className="font-mono text-accent mr-3">#</span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
