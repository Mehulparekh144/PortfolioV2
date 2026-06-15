"use client";

import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/ui/blur-fade";

interface Project {
  name: string;
  desc: string;
  tech: string[];
  git: string[];
  deploy?: string;
  img?: string;
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {projects.map((project, i) => (
        <BlurFade key={project.name} delay={0.1 + i * 0.06} inView>
          <ProjectCard
            name={project.name}
            desc={project.desc}
            tech={project.tech}
            git={project.git}
            deploy={project.deploy}
          />
        </BlurFade>
      ))}
    </div>
  );
}
