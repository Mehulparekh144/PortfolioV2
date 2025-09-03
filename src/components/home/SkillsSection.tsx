"use client";

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
			<div className="space-y-4">
				{primarySkills.items.map((skill) => (
					<div key={skill.name}>
						<h3 className="text-sm font-medium text-zinc-100 mb-1">
							{skill.name}
						</h3>
						<p className="text-xs text-zinc-400">
							{skill.skills.join("  •  ")}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
