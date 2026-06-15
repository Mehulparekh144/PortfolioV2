import { getAllPosts } from "@/lib/blog";
import { BlurFade } from "@/components/ui/blur-fade";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Writing",
  description: "Thoughts on systems, engineering, and building things that matter.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <div>
        <p className="comment-label text-xs mb-1">{"//writing"}</p>
        <p className="text-sm text-retro/60 font-mono">
          thoughts on systems, experimentation, and what I&apos;m learning.
        </p>
      </div>

      <div className="section-divider" />

      {posts.length === 0 ? (
        <p className="text-sm font-mono text-terminal-muted">
          {"// no posts yet — check back soon."}
        </p>
      ) : (
        <div className="space-y-3">
          {posts.map((post, i) => (
            <BlurFade key={post.slug} delay={0.1 + i * 0.07} inView>
              <BlogCard post={post} />
            </BlurFade>
          ))}
        </div>
      )}
    </div>
  );
}
