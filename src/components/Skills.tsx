import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

const skillGroups = [
  { label: "Languages", items: skills.languages },
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Database", items: skills.database },
  { label: "Architecture", items: skills.architecture },
  { label: "Messaging", items: skills.messaging },
  { label: "Integrations", items: skills.integrations },
  { label: "Other", items: skills.other },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="skills-heading"
          title="Skills"
          subtitle="Technologies and tools I work with daily."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
