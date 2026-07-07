import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="projects-heading"
          title="Projects"
          subtitle="Healthcare software I've built and led at Vitasoft Technologies."
        />
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent">{project.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
