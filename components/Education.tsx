import Section from "./ui/Section";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" eyebrow="04. education" title="Education">
      <ol className="space-y-8">
        {education.map((entry, i) => (
          <li key={entry.institution} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-accent mt-1.5" />
              {i < education.length - 1 && (
                <span className="w-px flex-1 bg-border mt-2" />
              )}
            </div>
            <div className="pb-2">
              <p className="text-xs font-mono text-ink-faint mb-1">
                {entry.period}
              </p>
              <h3 className="text-ink font-medium mb-2">
                {entry.institution}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed max-w-xl">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
