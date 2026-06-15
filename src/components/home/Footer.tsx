"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 pt-6 border-t border-terminal-border">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-mono text-terminal-muted">
          {"// mehulparekh"} &mdash; 2026
        </p>
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/Mehulparekh144"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-muted hover:text-retro transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/mehulparekh1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-muted hover:text-retro transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:mehulparekh144@gmail.com"
            className="text-terminal-muted hover:text-retro transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
