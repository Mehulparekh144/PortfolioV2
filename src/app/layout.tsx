import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/provider";
import TopBar from "@/components/TopBar";

const BASE_URL = "https://mehulparekh.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
	title: {
		default: "Mehul Parekh",
		template: "%s | Mehul Parekh",
	},
	description:
		"Software Engineer at Meta working on Interactive Media at Instagram. Product-oriented engineer using AI to take ideas from 0 to 1 and 1 to 100.",
	keywords: [
		"Mehul Parekh",
		"Software Engineer",
		"Meta",
		"Instagram",
		"Interactive Media",
		"Full Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Java",
		"Go",
		"System Design",
		"AI",
	],
	authors: [{ name: "Mehul Parekh", url: BASE_URL }],
	creator: "Mehul Parekh",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: BASE_URL,
		siteName: "Mehul Parekh",
		title: "Mehul Parekh — Software Engineer at Meta",
		description:
			"Product-oriented engineer using AI to take ideas from 0 to 1 and 1 to 100. Currently shipping Interactive Media at Instagram.",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Mehul Parekh — Software Engineer at Meta",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mehul Parekh — Software Engineer at Meta",
		description:
			"Product-oriented engineer using AI to take ideas from 0 to 1 and 1 to 100. Currently shipping Interactive Media at Instagram.",
		images: ["/og.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: BASE_URL,
	},
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Mehul Parekh",
	url: BASE_URL,
	jobTitle: "Software Engineer",
	worksFor: {
		"@type": "Organization",
		name: "Meta",
		url: "https://meta.com",
	},
	alumniOf: [
		{
			"@type": "CollegeOrUniversity",
			name: "Northeastern University",
		},
		{
			"@type": "CollegeOrUniversity",
			name: "University of Mumbai",
		},
	],
	sameAs: [
		"https://github.com/Mehulparekh144",
		"https://linkedin.com/in/mehulparekh1",
	],
	email: "mehulparekh144@gmail.com",
	knowsAbout: [
		"Software Engineering",
		"React",
		"Next.js",
		"TypeScript",
		"Java",
		"Go",
		"System Design",
		"Distributed Systems",
		"AI",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<head>
				<link rel="icon" href="/images/icon.png" sizes="any" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
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
