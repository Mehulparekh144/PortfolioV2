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
				<h1 className="text-2xl font-bold font-heading text-retro">
					All Projects
				</h1>
				<Link href="/" className="text-gray-600 text-sm hover:text-retro">
					← Back to Home
				</Link>
			</div>
			<ProjectsSection projects={projects.data} />
		</div>
	);
}
