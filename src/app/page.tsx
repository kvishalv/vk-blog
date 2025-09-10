import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';

export default function Home() {
  const latestPosts = getLatestPosts(3);

  // Structured data for the website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Engineering Leadership Blog",
    "description": "Insights on engineering leadership, modern DevOps practices, and human-centered team building. Building better teams, one post at a time.",
    "url": "https://vk-blog.vercel.app",
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
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vk-blog.vercel.app/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
          Engineering Leadership
          <span className="block text-orange-500">That Matters</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Insights on building better teams, fostering purpose-driven engineering cultures, 
          and leading with human-centered principles. Because great software starts with great leadership.
        </p>
        <div className="mt-8">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Read the Blog
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Insights</h2>
          <Link 
            href="/blog"
            className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            View all posts →
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
        
        {latestPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts yet. Check back soon!</p>
          </div>
        )}
      </div>

      {/* About Preview */}
      <div className="bg-orange-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          About This Blog
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          This space is dedicated to exploring the intersection of technical excellence and human-centered leadership. 
          Every post is written with the belief that great engineering teams are built on purpose, empathy, and shared vision.
        </p>
        <Link 
          href="/about"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
        >
          Learn More
        </Link>
      </div>
      </div>
    </>
  );
}
