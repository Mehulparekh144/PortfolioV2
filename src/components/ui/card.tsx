"use client";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className = "" }: CardProps) {
	return (
		<div
			className={`p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white ${className}`}
		>
			{children}
		</div>
	);
}
