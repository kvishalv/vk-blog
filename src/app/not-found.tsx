import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 text-center">
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-accent-orange mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      
      <div className="bg-accent-yellow-light rounded-2xl p-8 max-w-md mx-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Let&apos;s get you back on track
        </h3>
        <div className="space-y-3">
          <Link 
            href="/"
            className="block w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-orange hover:bg-secondary-600 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            href="/blog"
            className="block w-full px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Browse Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
