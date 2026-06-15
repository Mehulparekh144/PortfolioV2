"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "blog", href: "/blog" },
];

export default function TopBar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50"
    >
      {/* Contact row */}
      <div className="border-b border-terminal-border/50">
        <div className="max-w-3xl mx-auto px-6 py-1.5 hidden sm:flex items-center gap-5 text-xs font-mono text-terminal-muted">
          <a
            href="mailto:mehulparekh144@gmail.com"
            className="flex items-center gap-1.5 hover:text-retro/80 transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span className="comment-label">{"//contact"}</span>
            <span>mehulparekh144@gmail.com</span>
          </a>
          <span className="text-terminal-border">|</span>
          <a
            href="https://github.com/Mehulparekh144"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-retro/80 transition-colors"
          >
            <Github className="w-3 h-3" />
            <span className="comment-label">{"//github"}</span>
            <span>Mehulparekh144</span>
          </a>
          <span className="text-terminal-border">|</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" />
            <span className="comment-label">{"//location"}</span>
            <span>remote</span>
          </span>
        </div>
      </div>

      {/* Nav row */}
      <div className="max-w-3xl mx-auto px-6 py-2 flex items-center gap-1">
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href;
          return (
            <span key={link.href} className="flex items-center gap-1">
              {i > 0 && (
                <span className="text-terminal-border text-xs mx-1">|</span>
              )}
              <Link
                href={link.href}
                className={`text-xs font-mono transition-colors px-1 ${
                  isActive
                    ? "text-retro"
                    : "text-terminal-muted hover:text-retro/80"
                }`}
              >
                {isActive && (
                  <span className="text-terminal-accent">{"// "}</span>
                )}
                {link.label}
              </Link>
            </span>
          );
        })}
      </div>
    </motion.header>
  );
}
