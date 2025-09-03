"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="mt-12 pt-8 border-t border-zinc-700 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
				<div className="text-sm text-zinc-400 text-center sm:text-left">
					© 2024 Mehul Parekh. <br /> All rights reserved.
				</div>
				<div className="flex gap-4 items-center">
					<Link
						href="https://github.com/Mehulparekh144"
						className="text-zinc-400 hover:text-retro transition-colors flex items-center gap-1 group"
					>
						<Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
						<span className="text-sm hidden sm:inline">GitHub</span>
					</Link>
					<Link
						href="https://linkedin.com/in/mehulparekh144"
						className="text-zinc-400 hover:text-retro transition-colors flex items-center gap-1 group"
					>
						<Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
						<span className="text-sm hidden sm:inline">LinkedIn</span>
					</Link>
					<Link
						href="mailto:parekh.me@northeastern.edu"
						className="text-zinc-400 hover:text-retro transition-colors flex items-center gap-1 group"
					>
						<Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
						<span className="text-sm hidden sm:inline">Email</span>
					</Link>
				</div>
			</div>
		</footer>
	);
}
