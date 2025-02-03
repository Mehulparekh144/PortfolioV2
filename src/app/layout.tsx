import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import AnimatedCursor from "react-animated-cursor";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LenisScroll from "@/components/LenisScroll";
import { LinkPreview } from "@/components/ui/link-preview";
export const metadata: Metadata = {
	title: {
		default: "Mehul Parekh",
		template: "%s | Mehul Parekh",
	},
	description:
		"Portfolio of Mehul Parekh - Software Engineer and Web Developer",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/images.ico" sizes="<generated>" />
			<body
				className={cn(
					"min-h-screen antialiased flex justify-center backdrop-blur-md",
					inter.className
				)}
			>
				<LenisScroll />
				<AnimatedCursor
					innerSize={8}
					outerSize={35}
					innerScale={1}
					outerScale={2}
					outerAlpha={0}
					innerStyle={{
						backgroundColor: "var(--cursor-color)",
					}}
					outerStyle={{
						backgroundColor: "var(--cursor-color)",
					}}
				/>
				<div className="min-h-screen max-w-2xl px-12 py-16 text-zinc-100">
					<nav className="flex gap-4 mb-6 md:mb-3 font-display justify-start md:justify-end">
						<Link href={"/"} className="w-max cool-underline">
							home
						</Link>
						<Link href={"/projects"} className="w-max cool-underline">
							projects
						</Link>
						<Link href={"/about"} className="w-max cool-underline">
							about
						</Link>
						<LinkPreview
							url={
								"https://drive.google.com/file/d/1L_85ccTw_EbHqx1OYQNwSjv82oDMyMEY/view?usp=sharing"
							}
							className="flex gap-0.5 items-center w-max cool-underline text-background"
						>
							resume <ArrowUpRight className="w-4 h-4" />
						</LinkPreview>
					</nav>
					{children}
				</div>
			</body>
		</html>
	);
}
