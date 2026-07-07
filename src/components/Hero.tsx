import { personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center pt-16">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 font-mono text-sm text-accent">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {personal.name}.
        </h1>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-muted sm:text-5xl lg:text-6xl">
          I build scalable health-tech systems.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {personal.title} specializing in{" "}
          <span className="text-foreground">NestJS</span>,{" "}
          <span className="text-foreground">Next.js</span>, and{" "}
          <span className="text-foreground">MongoDB</span>. Currently building
          healthcare software at Vitasoft Technologies.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-light"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
