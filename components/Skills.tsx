import Section from "./ui/Section";
import Badge from "./ui/Badge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02. skills" title="Skills">
      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className="rounded-xl border border-border bg-bg-surface p-6"
          >
            <p className="text-sm font-medium text-ink mb-4">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
