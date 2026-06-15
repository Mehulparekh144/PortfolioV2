import projects from "../../data/projects.json";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectsSection from "@/components/home/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <p className="comment-label text-xs">{"//all-projects"}</p>
        <Link
          href="/"
          className="text-xs font-mono text-terminal-muted hover:text-retro transition-colors"
        >
          ← //home
        </Link>
      </div>
      <div className="section-divider" />
      <ProjectsSection projects={projects.data} />
    </div>
  );
}
