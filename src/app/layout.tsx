import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/provider";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
	title: {
		default: "Mehul Parekh",
		template: "%s | Mehul Parekh",
	},
	description: "Software Engineer at Meta — Instagram Interactive Media",
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<head>
				<link rel="icon" href="/images/icon.png" sizes="any" />
			</head>
			<body
				className={cn(
					"min-h-screen antialiased bg-terminal-bg text-retro",
					jetbrainsMono.variable,
					"font-mono",
				)}
			>
				<Providers>
					<TopBar />
					<div className="min-h-screen w-full max-w-3xl mx-auto px-6 py-12 md:py-20">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
