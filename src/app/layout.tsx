import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

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
			<link rel="icon" href="/images/icon.png" sizes="<generated>" />
			<body
				className={cn(
					"min-h-screen antialiased flex justify-center",
					inter.className,
				)}
			>
				<div className="min-h-screen max-w-2xl px-12 py-16">{children}</div>
			</body>
		</html>
	);
}
