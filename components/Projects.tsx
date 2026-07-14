import Section from "./ui/Section";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03. projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
