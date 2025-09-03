"use client";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
	name: string;
	desc: string;
	tech: string[];
	git?: string[];
	deploy?: string;
}

export default function ProjectCard({
	name,
	desc,
	tech,
	git,
	deploy,
}: ProjectCardProps) {
	return (
		<Card className="bg-zinc-900 border-zinc-700">
			<div className="flex items-center justify-between mb-2">
				<h3 className="font-bold text-lg truncate">{name}</h3>
				<div className="flex gap-2">
					{git?.map((gitUrl) => (
						<Link
							key={gitUrl}
							href={gitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-retro"
						>
							<Github className="w-4 h-4" />
						</Link>
					))}
					{deploy && (
						<Link
							href={deploy}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-retro"
						>
							<ExternalLink className="w-4 h-4" />
						</Link>
					)}
				</div>
			</div>
			<p className="text-zinc-400 text-sm my-2">{desc}</p>
			<p className="text-xs text-zinc-400 leading-5">{tech.join("  •  ")}</p>
		</Card>
	);
}
