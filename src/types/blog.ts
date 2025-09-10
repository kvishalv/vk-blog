export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: number;
  audioUrl?: string;
  tags?: string[];
  published: boolean;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  audioUrl?: string;
  tags?: string[];
  published: boolean;
}
