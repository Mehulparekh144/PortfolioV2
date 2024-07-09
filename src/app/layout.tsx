import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/provider";
import { Navbar } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "Mehul Parekh",
  description: "Generated by create next app",
};

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./logo.ico" sizes="any" />
      <body className={cn("min-h-screen antialiased", jost.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
