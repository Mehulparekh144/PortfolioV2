import projects from "../../data/projects.json";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectsSection from "@/components/home/ProjectsSection";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
	title: "Projects",
};

export default function ProjectsPage() {
	return (
		<div className="space-y-8">
			<div className="flex flex-col md:flex-row gap-3 items-center justify-between">
				<h1 className="text-2xl font-bold font-heading text-retro">
					All Projects
				</h1>
				<Link
					href="/"
					className="text-zinc-400 flex items-center text-sm hover:text-retro"
				>
					<ChevronLeft className="w-4 h-4" /> Back to Home
				</Link>
			</div>
			<ProjectsSection projects={projects.data} />
		</div>
	);
}
