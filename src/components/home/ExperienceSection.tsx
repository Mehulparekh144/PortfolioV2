"use client";

import { Card } from "../ui/card";

export default function ExperienceSection() {
	return (
		<div>
			<h2 className="text-xl font-bold font-heading text-retro mb-4">
				Experience & Education
			</h2>
			<div className="space-y-4">
				<Card className="bg-zinc-900 border-zinc-700">
					<h3 className="font-bold">Software Engineer Co-op</h3>
					<p className="text-zinc-400 text-sm">
						Curriculum Associates • Jan 2025 - Present
					</p>
				</Card>
				<Card className="bg-zinc-900 border-zinc-700">
					<h3 className="font-bold">Master&apos;s in Computer Science</h3>
					<p className="text-zinc-400 text-sm">
						Northeastern University • Jan 2024 - Present
					</p>
				</Card>
			</div>
		</div>
	);
}
