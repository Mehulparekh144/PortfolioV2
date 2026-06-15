"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const skills = [
  {
    label: "//languages",
    items: ["Java", "TypeScript", "Go", "Python", "SQL", "Hack"],
  },
  {
    label: "//backend & infra",
    items: ["Spring Boot", "Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "AWS"],
  },
  {
    label: "//tools & testing",
    items: ["Git", "Figma", "JUnit", "Vitest", "Terraform", "Jenkins"],
  },
];

export default function SkillsSection() {
  return (
    <section className="space-y-4">
      <div className="section-divider" />
      <p className="comment-label text-xs">{"//skills"}</p>
      <AnimatedSection>
        <div className="space-y-3">
          {skills.map((group) => (
            <div key={group.label} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-2 md:gap-6">
              <p className="text-xs font-mono text-terminal-comment">{group.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-terminal-border text-xs font-mono text-retro/70 px-2 py-0.5 rounded-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
