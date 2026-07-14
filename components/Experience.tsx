import Section from "./ui/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="05. experience & leadership"
      title="Experience & Leadership"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experience.map((entry) => (
          <div
            key={entry.title}
            className="rounded-xl border border-border bg-bg-surface p-6"
          >
            <p className="eyebrow mb-2">{entry.context}</p>
            <h3 className="text-ink font-medium mb-3">{entry.title}</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
