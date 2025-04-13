"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
	{
		id: "role",
		text: "Working as a",
		highlight: "Software Engineer Co-op",
		after: "at Curriculum Associates",
	},
	{
		id: "roles",
		text: "Student and Teaching Assistant by day, Full Stack Developer by night",
		emoji: "💻",
	},
	{
		id: "passion",
		text: "Passionate about building cool stuff and exploring new tech",
	},
	{
		id: "hobby",
		text: "When not coding, you'll find me geeking out over professional wrestling",
		emoji: "🎮",
	},
];

export default function HeroSection() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-between mt-3">
				<div className="flex items-center w-full gap-3">
					<Image
						src="/images/logo.png"
						alt="Logo"
						width={64}
						height={64}
						className="object-contain -ml-2 filter invert"
					/>
					<h1 className="text-2xl font-bold font-heading text-retro">
						hey, I am Mehul.{" "}
					</h1>
				</div>
			</div>
			<div className="space-y-3">
				<p className="text-zinc-400 text-sm leading-relaxed">
					Hey there! I&apos;m Mehul Parekh, a tech enthusiast from Mumbai who
					made my way to Boston 🚀 Currently pursuing my Master&apos;s in
					Computer Science at Northeastern University&apos;s Khoury College.
				</p>
				<div className="space-y-2 text-zinc-400 text-sm">
					{highlights.map((item) => (
						<div key={item.id} className="flex items-center gap-2">
							<ChevronsRight className="w-4 h-4 flex-shrink-0" />
							<span className="text-sm">
								{item.text}{" "}
								{item.highlight && (
									<span className="font-semibold text-sm text-retro">
										{item.highlight}
									</span>
								)}{" "}
								{item.after}
								{item.emoji && ` ${item.emoji}`}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
