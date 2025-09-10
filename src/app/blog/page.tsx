import { getAllPosts } from '@/lib/blog';
import BlogPostCard from '@/components/BlogPostCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All posts about engineering leadership, DevOps practices, and team building.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Engineering Leadership Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Insights on building better teams, fostering purpose-driven engineering cultures, 
          and leading with human-centered principles.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-accent-yellow-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-gray-700 text-lg">
            I&apos;m working on some great content about engineering leadership. 
            Check back soon for insights on building better teams and fostering purpose-driven cultures.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
