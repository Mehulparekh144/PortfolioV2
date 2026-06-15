import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import Footer from "@/components/home/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedSection } from "@/components/AnimatedSection";
import projects from "../data/projects.json";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const featuredProjects = projects.data.slice(0, 6);
  const recentPosts = await getAllPosts().then((posts) => posts.slice(0, 3));

  return (
    <div className="space-y-16">
      <HeroSection />

      <ExperienceSection />

      <AnimatedSection>
        <section className="space-y-4">
          <div className="section-divider" />
          <div className="flex items-center justify-between">
            <p className="comment-label text-xs">{"//projects"}</p>
            <Link
              href="/projects"
              className="text-xs font-mono text-terminal-muted hover:text-retro transition-colors cool-underline"
            >
              {"// view-all →"}
            </Link>
          </div>
          <ProjectsSection projects={featuredProjects} />
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="space-y-4">
          <div className="section-divider" />
          <div className="flex items-center justify-between">
            <p className="comment-label text-xs">{"//writing"}</p>
            <Link
              href="/blog"
              className="text-xs font-mono text-terminal-muted hover:text-retro transition-colors cool-underline"
            >
              {"// view-all →"}
            </Link>
          </div>
          {recentPosts.length === 0 ? (
            <p className="text-xs font-mono text-terminal-muted">
              {"// posts coming soon."}
            </p>
          ) : (
            <div className="space-y-3">
              {recentPosts.map((post, i) => (
                <BlurFade key={post.slug} delay={0.1 + i * 0.07} inView>
                  <BlogCard post={post} />
                </BlurFade>
              ))}
            </div>
          )}
        </section>
      </AnimatedSection>

      <SkillsSection />

      <Footer />
    </div>
  );
}
