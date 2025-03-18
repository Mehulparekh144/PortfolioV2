"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection({
	projects,
}: {
	projects: Array<{
		name: string;
		desc: string;
		tech: string[];
		git: string[];
		deploy?: string;
		image?: string;
	}>;
}) {
	return (
		<div className="space-y-4">
			{projects.map((project) => (
				<ProjectCard
					key={project.name}
					name={project.name}
					desc={project.desc}
					tech={project.tech}
					git={project.git}
					deploy={project.deploy}
				/>
			))}
		</div>
	);
}
