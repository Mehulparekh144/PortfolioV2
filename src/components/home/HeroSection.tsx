"use client";

import { motion } from "framer-motion";
import { staggerContainer, charReveal } from "@/lib/animations";

const nameTokens = ["<", "Mehul", " ", "Parekh", ">"];

export default function HeroSection() {
  return (
    <section className="space-y-6 pt-4">
      <div className="space-y-1.5">
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-mono font-bold text-retro leading-tight tracking-tight"
        >
          {nameTokens.map((token, i) => (
            <motion.span
              key={i}
              variants={charReveal}
              className={
                token === "<" || token === ">"
                  ? "text-terminal-accent"
                  : ""
              }
            >
              {token}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="comment-label text-sm"
        >
          {"//swe @ meta"} &bull; instagram interactive media
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="space-y-3"
      >
        <p className="comment-label text-xs mb-2">{"//about"}</p>
        <p className="text-sm text-retro/70 leading-relaxed max-w-2xl">
          I&apos;m a product-oriented engineer who uses AI to take ideas from{" "}
          <span className="text-retro/90 font-semibold">0 to 1</span> and{" "}
          <span className="text-retro/90 font-semibold">1 to 100</span> —
          building fast, measuring what matters, and shipping things people
          actually use.
        </p>
        <p className="text-sm text-retro/70 leading-relaxed max-w-2xl">
          Currently at Meta driving retention and social connection through
          Interactive Media on Instagram. Previously co-oped at Curriculum
          Associates. 4.0 GPA MS CS at Northeastern. I write here about what
          I&apos;m building and learning along the way.
        </p>
      </motion.div>
    </section>
  );
}
