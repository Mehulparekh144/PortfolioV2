"use client";

import { Card } from "../ui/card";

export default function ExperienceSection() {
	return (
		<div>
			<h2 className="text-xl font-bold font-heading text-retro mb-4">
				Experience & Education
			</h2>
			<div className="space-y-4">
				<Card>
					<h3 className="font-bold">Software Engineer Co-op</h3>
					<p className="text-gray-600 text-sm">
						Curriculum Associates • Jan 2025 - Present
					</p>
				</Card>
				<Card>
					<h3 className="font-bold">Master&apos;s in Computer Science</h3>
					<p className="text-gray-600 text-sm">
						Northeastern University • Jan 2024 - Present
					</p>
				</Card>
			</div>
		</div>
	);
}
