import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const BASE_URL = "https://mehulparekh.vercel.app";
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `${BASE_URL}/blog/${slug}` },
      openGraph: {
        type: "article",
        url: `${BASE_URL}/blog/${slug}`,
        title: post.title,
        description: post.description,
        publishedTime: post.date,
        authors: ["Mehul Parekh"],
        tags: post.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-xs font-mono text-terminal-muted hover:text-retro transition-colors"
      >
        ← //back
      </Link>

      <div className="space-y-3">
        <p className="comment-label text-xs">{"//post"}</p>
        <h1 className="text-2xl font-mono font-bold text-retro leading-snug">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-xs font-mono text-terminal-muted">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="text-terminal-border">|</span>
          <span className="text-xs font-mono text-terminal-muted">
            {post.readTime}
          </span>
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
        </div>
      </div>

      <div className="section-divider" />

      <article className="prose prose-sm max-w-none font-mono leading-relaxed">
        <MDXRemote source={post.content} />
      </article>

      <div className="section-divider" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-xs font-mono text-terminal-muted hover:text-retro transition-colors"
      >
        ← //all-posts
      </Link>
    </div>
  );
}
