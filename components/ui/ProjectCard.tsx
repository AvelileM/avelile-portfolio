import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-border bg-bg-surface p-6 transition-colors hover:border-accent-dim flex flex-col h-full">
      <p className="eyebrow mb-2">{project.type}</p>
      <h3 className="section-heading text-lg text-ink mb-3">
        {project.title.replace(/^.*? — /, "")}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-ink-faint border border-border-subtle rounded px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-xs text-ink-faint mb-5 leading-relaxed">
        <span className="text-accent-dim">learned:</span> {project.learnings}
      </p>

      <div className="flex items-center gap-4 text-sm font-mono mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-muted hover:text-accent transition-colors"
        >
          GitHub ↗
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-accent transition-colors"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
