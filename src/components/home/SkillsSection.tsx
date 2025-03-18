"use client";
import { Card } from "@/components/ui/card";

const primarySkills = {
	items: [
		{
			name: "Core Technologies",
			skills: ["ReactJS", "NextJS", "TypeScript", "Java", "Python", "NodeJS"],
		},
		{
			name: "Backend & Database",
			skills: ["SpringBoot", "PostgreSQL", "MongoDB", "ExpressJS"],
		},
		{
			name: "DevOps & Cloud",
			skills: ["Docker", "AWS", "Git", "Jenkins"],
		},
	],
};

export default function SkillsSection() {
	return (
		<div>
			<h2 className="text-xl font-bold font-heading text-retro mb-4">
				Primary Skills
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{primarySkills.items.map((skill) => (
					<Card key={skill.name} className="h-full">
						<h3 className="font-bold text-lg mb-3">{skill.name}</h3>
						<div className="flex gap-2 flex-wrap">
							{skill.skills.map((s) => (
								<span
									key={`${skill.name}-${s}`}
									className="text-sm bg-gray-100 px-3 py-1 rounded-full"
								>
									{s}
								</span>
							))}
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}
