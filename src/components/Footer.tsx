import { personal } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          Built by {personal.name} · {year}
        </p>
        <p className="font-mono text-xs text-muted">
          Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
