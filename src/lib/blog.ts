import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost, BlogPostMeta } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  return fs.readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);
    
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      content,
      readingTime: Math.ceil(stats.minutes),
      audioUrl: data.audioUrl || undefined,
      tags: data.tags || [],
      published: data.published !== false,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getPostSlugs();
  const posts: BlogPostMeta[] = [];
  
  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post && post.published) {
      posts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        readingTime: post.readingTime,
        audioUrl: post.audioUrl,
        tags: post.tags,
        published: post.published,
      });
    }
  }
  
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getLatestPosts(limit: number = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}
