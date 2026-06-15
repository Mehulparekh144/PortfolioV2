export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
