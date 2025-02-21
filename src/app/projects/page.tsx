import React from "react";
import projects from "../../data/projects.json";
import Link from "next/link";
import { ExternalLink, Github, Link2 } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
};

function Projects() {
	return (
		<div>
			<h1 className="text-2xl font-bold font-heading text-retro">
				Some of my projects
			</h1>
			<hr className="my-4" />
			<div className="flex flex-col gap-4">
				{projects.data.map((project, idx) => (
					<div key={idx}>
						<div className="my-2 flex gap-3 items-center font-semibold">
							<h1 className="text-xl font-heading text-retro">
								{project.name}
							</h1>
							<div className="flex gap-1 items-center">
								{project.deploy && (
									<Link
										target="_blank"
										href={project.deploy}
										className="bg-zinc-100 bg-opacity-20 backdrop-blur-3xl text-zinc-100 p-1.5 rounded-full hover:bg-opacity-5 transition-all"
									>
										<ExternalLink className="h-4 w-4" />
									</Link>
								)}
								{project.git &&
									project.git.map((git, i) => (
										<Link
											target="_blank"
											href={git}
											key={i}
											className="bg-zinc-100 bg-opacity-20 backdrop-blur-3xl text-zinc-100 p-1.5 rounded-full hover:bg-opacity-5 transition-all"
										>
											<Github className="h-4 w-4" />
										</Link>
									))}
							</div>
						</div>
						<p className="text-zinc-200 leading-tight">{project.desc}</p>
						<div className="flex gap-1 mt-2 flex-wrap items-center">
							{project.tech.map((t, i) => (
								<SkillBadge skill={t.toLowerCase()} key={i} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
