import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const postUrl = `https://vk-blog.vercel.app/blog/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'Vishal Kumar' }],
    creator: 'Vishal Kumar',
    publisher: 'Vishal Kumar',
    metadataBase: new URL('https://vk-blog.vercel.app'),
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: postUrl,
      publishedTime,
      modifiedTime,
      authors: ['Vishal Kumar'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@vishalkumar',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://vk-blog.vercel.app/logo.svg",
    "author": {
      "@type": "Person",
      "name": "Vishal Kumar",
      "url": "https://vk-blog.vercel.app/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Engineering Leadership Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vk-blog.vercel.app/logo.svg"
      }
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vk-blog.vercel.app/blog/${post.slug}`
    },
    "keywords": post.tags?.join(", "),
    "wordCount": post.content.split(" ").length,
    "timeRequired": `PT${post.readingTime}M`,
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <time dateTime={post.date} itemProp="datePublished">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span itemProp="timeRequired">{post.readingTime} min read</span>
        </div>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {post.audioUrl && (
          <div className="mb-6 p-4 bg-orange-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Audio Version</h3>
            <audio controls className="w-full">
              <source src={post.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </header>
      
      <div 
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-orange-500 prose-blockquote:bg-orange-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg"
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
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Share on Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://vk-blog.vercel.app/blog/${post.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </footer>
      </article>
    </>
  );
}
