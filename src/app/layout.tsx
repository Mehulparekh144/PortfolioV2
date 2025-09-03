import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: {
		default: "Mehul Parekh",
		template: "%s | Mehul Parekh",
	},
	description:
		"Portfolio of Mehul Parekh - Software Engineer and Web Developer",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/icon.png" sizes="<generated>" />
			<body
				className={cn(
					"min-h-screen antialiased flex justify-center ",
					outfit.className,
				)}
			>
				<div className="min-h-screen w-screen max-w-xl px-4 py-8 md:py-16">
					{children}
				</div>
			</body>
		</html>
	);
}
