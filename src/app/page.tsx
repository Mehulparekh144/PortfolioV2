import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import Footer from "@/components/home/Footer";
import projects from "../data/projects.json";
import { ChevronRight } from "lucide-react";

export default function Home() {
	const topProjects = projects.data.slice(0, 5);

	return (
		<div className="space-y-12">
			<HeroSection />
			<SkillsSection />
			<div className="space-y-4">
				<h2 className="text-xl font-bold font-heading text-retro mb-4">
					Featured Projects
				</h2>
				<ProjectsSection projects={topProjects} />
				<Link
					href="/projects"
					className="text-retro/50 text-sm  hover:underline inline-flex items-center gap-1"
				>
					View All Projects <ChevronRight className="w-4 h-4" />
				</Link>
			</div>
			<ExperienceSection />
			<Footer />
		</div>
	);
}
