import SectionHeading from "./SectionHeading";
import { personal } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="about-heading"
          title="About Me"
          subtitle="A bit about my background and what I do."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>{personal.bio}</p>
            <p>
              I enjoy working on complex backend systems, designing
              microservice architectures, and building products that make a
              real impact in healthcare. From monorepo setups with Nx and
              Turborepo to event-driven systems with Kafka and RabbitMQ, I
              focus on scalable, maintainable solutions.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs text-accent">Location</dt>
                <dd className="mt-1 text-foreground">{personal.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-accent">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    {personal.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-accent">Company</dt>
                <dd className="mt-1 text-foreground">
                  Vitasoft Technologies
                  <span className="block text-xs text-muted">
                    (Vibrant America)
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
