import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'Vishal Kumar' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Vishal Kumar'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readingTime} min read</span>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-yellow-light text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {post.audioUrl && (
          <div className="mb-6 p-4 bg-accent-yellow-light rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Audio Version</h3>
            <audio controls className="w-full">
              <source src={post.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </header>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-accent-orange prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-accent-yellow prose-blockquote:bg-accent-yellow-light prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Thanks for reading! If you found this post helpful, consider sharing it with your network.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://vk-blog.vercel.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange hover:text-secondary-600 transition-colors"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://vk-blog.vercel.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange hover:text-secondary-600 transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
