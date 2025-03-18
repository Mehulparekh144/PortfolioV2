"use client";
import { Card } from "@/components/ui/card";

const education = [
	{
		school: "University of California, Berkeley",
		degree: "Master of Science in Computer Science",
		period: "2021 - 2023",
		gpa: "3.8/4.0",
		description:
			"Specialized in Machine Learning and Distributed Systems. Completed coursework in Advanced Algorithms, Distributed Systems, and Deep Learning.",
	},
	{
		school: "Indian Institute of Technology, Bombay",
		degree: "Bachelor of Technology in Computer Science",
		period: "2017 - 2021",
		gpa: "8.5/10.0",
		description:
			"Core coursework in Data Structures, Algorithms, Computer Networks, and Operating Systems. Led the college's technical club.",
	},
];

export default function EducationSection() {
	return (
		<div>
			<h2 className="text-xl font-bold font-heading text-retro mb-4">
				Education
			</h2>
			<div className="space-y-4">
				{education.map((edu) => (
					<Card key={edu.school}>
						<div className="flex justify-between items-start mb-2">
							<div>
								<h3 className="font-bold text-lg">{edu.school}</h3>
								<p className="text-gray-600">{edu.degree}</p>
							</div>
							<div className="text-right">
								<p className="text-sm text-gray-500">{edu.period}</p>
								<p className="text-sm font-medium text-retro">{edu.gpa}</p>
							</div>
						</div>
						<p className="text-gray-600 text-sm">{edu.description}</p>
					</Card>
				))}
			</div>
		</div>
	);
}
