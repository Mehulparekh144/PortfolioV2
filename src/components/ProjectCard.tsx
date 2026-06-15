"use client";

import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  desc: string;
  tech: string[];
  git?: string[];
  deploy?: string;
}

export default function ProjectCard({
  name,
  desc,
  tech,
  git,
  deploy,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="border border-terminal-border rounded-sm p-4 hover:bg-terminal-surface transition-colors duration-200"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-mono font-semibold text-sm text-retro/90">{name}</h3>
        <div className="flex gap-2 shrink-0">
          {git?.map((gitUrl) => (
            <Link
              key={gitUrl}
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-retro transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </Link>
          ))}
          {deploy && (
            <Link
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-muted hover:text-retro transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
      <p className="text-xs font-mono text-terminal-comment mb-3 leading-relaxed">
        {"// "}{desc}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span
            key={t}
            className="border border-terminal-border text-xs font-mono text-retro/50 px-1.5 py-0.5 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
