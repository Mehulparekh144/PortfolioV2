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
		<Card>
			<div className="flex items-center justify-between mb-2">
				<h3 className="font-bold text-lg truncate">{name}</h3>
				<div className="flex gap-2">
					{git?.map((gitUrl) => (
						<Link
							key={gitUrl}
							href={gitUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-retro"
						>
							<Github className="w-4 h-4" />
						</Link>
					))}
					{deploy && (
						<Link
							href={deploy}
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 hover:text-retro"
						>
							<ExternalLink className="w-4 h-4" />
						</Link>
					)}
				</div>
			</div>
			<p className="text-gray-600 text-sm my-2 line-clamp-2">
				{desc.split(".")[0]}.
			</p>
			<div className="flex gap-2 flex-wrap">
				{tech.map((techItem) => (
					<span
						key={`${name}-${techItem}`}
						className="text-sm bg-gray-100 px-3 py-1 rounded-full"
					>
						{techItem}
					</span>
				))}
			</div>
		</Card>
	);
}
