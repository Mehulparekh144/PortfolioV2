"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPostMeta } from "@/types/blog";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="border border-terminal-border rounded-sm p-4 hover:bg-terminal-surface transition-colors duration-200">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-mono font-semibold text-sm text-retro/90 leading-snug">
              {post.title}
            </h3>
            <span className="text-xs font-mono text-terminal-muted shrink-0">
              {post.readTime}
            </span>
          </div>
          <p className="text-xs font-mono text-terminal-comment mb-3 leading-relaxed">
            {"// "}{post.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-terminal-border text-xs font-mono text-retro/50 px-1.5 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-xs font-mono text-terminal-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
