"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { BorderBeam } from "@/components/ui/border-beam";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  const workEntries = experiences.filter((e) => e.type === "work");
  const eduEntries = experiences.filter((e) => e.type === "education");

  return (
    <section className="space-y-6">
      <div className="section-divider" />
      <p className="comment-label text-xs">{"//work-experience"}</p>

      <div className="space-y-6">
        {workEntries.map((entry, i) => (
          <AnimatedSection key={`${entry.company}-${entry.dateRange}`} delay={i * 0.08}>
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-6">
              <p className="text-xs font-mono text-terminal-muted pt-1 shrink-0">
                {entry.dateRange}
              </p>
              <div className="space-y-3">
                <div className="relative inline-flex">
                  <div
                    className={`relative border px-3 py-1.5 rounded-sm text-sm font-mono overflow-hidden ${
                      entry.active
                        ? "border-terminal-accent/40 text-retro"
                        : "border-terminal-border text-retro/80"
                    }`}
                  >
                    <span className="font-semibold">{entry.company}</span>
                    <span className="text-terminal-comment ml-1.5">
                      {`//${entry.role}`}
                    </span>
                    {entry.active && <BorderBeam duration={6} />}
                  </div>
                </div>
                {entry.bullets && (
                  <ul className="space-y-1.5">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-xs font-mono text-retro/65 flex gap-2 leading-relaxed"
                      >
                        <span className="text-terminal-comment shrink-0 mt-0.5">●</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="pt-2">
        <p className="comment-label text-xs mb-4">{"//education"}</p>
        <div className="space-y-4">
          {eduEntries.map((entry, i) => (
            <AnimatedSection key={`${entry.company}-${entry.dateRange}`} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-6">
                <p className="text-xs font-mono text-terminal-muted shrink-0">
                  {entry.dateRange}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="border border-terminal-border px-3 py-1.5 rounded-sm text-sm font-mono">
                    <span className="font-semibold text-retro/80">{entry.company}</span>
                    <span className="text-terminal-comment ml-1.5">{`//${entry.role}`}</span>
                  </div>
                  {entry.detail && (
                    <span className="text-xs font-mono text-terminal-muted">
                      {entry.detail}
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
