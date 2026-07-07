import SectionHeading from "./SectionHeading";
import { experience, education } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="experience-heading"
          title="Experience"
          subtitle="My professional journey in software development."
        />

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="group relative rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-accent">
                    {job.company}
                    {job.parent && (
                      <span className="text-muted"> · {job.parent}</span>
                    )}
                  </p>
                </div>
                <span className="mt-1 shrink-0 font-mono text-xs text-muted sm:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {job.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 font-mono text-sm text-accent">Education</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu) => (
              <div
                key={`${edu.school}-${edu.period}`}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-accent">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
