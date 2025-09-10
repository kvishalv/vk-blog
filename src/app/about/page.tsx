import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my journey in engineering leadership and my philosophy on building better teams.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About This Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Building better teams through purpose-driven engineering leadership.
        </p>
      </div>

      <div className="prose prose-lg max-w-none mx-auto">
        <div className="bg-accent-yellow-light rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            My Leadership Philosophy
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I believe that great engineering teams are built on three pillars: <strong>purpose</strong>, 
            <strong> empathy</strong>, and <strong>shared vision</strong>. When engineers understand not just 
            what they&apos;re building, but why it matters, they create solutions that truly serve users and 
            drive meaningful impact.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Blog Exists</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          After years of leading engineering teams, I&apos;ve learned that the most challenging problems 
          aren&apos;t technical—they&apos;re human. How do you foster a culture where people feel safe to 
          experiment and fail? How do you help teams find meaning in their work? How do you balance 
          shipping fast with building right?
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This blog is my attempt to share the insights, frameworks, and stories that have shaped 
          my approach to engineering leadership. Every post is written with the belief that great 
          software starts with great leadership, and great leadership starts with understanding 
          what truly motivates people.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">What You&apos;ll Find Here</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🎯 Purpose-Driven Leadership
            </h3>
            <p className="text-gray-600">
              How to help teams connect their daily work to meaningful impact, 
              inspired by frameworks like Simon Sinek&apos;s &quot;Start With Why.&quot;
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              🤝 Human-Centered Team Building
            </h3>
            <p className="text-gray-600">
              Practical strategies for building psychological safety, fostering 
              collaboration, and creating environments where people thrive.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ⚡ Modern DevOps Practices
            </h3>
            <p className="text-gray-600">
              Insights on building sustainable engineering practices that balance 
              speed, quality, and team well-being.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              📚 Leadership Stories
            </h3>
            <p className="text-gray-600">
              Real experiences from leading engineering teams, including both 
              successes and the lessons learned from failures.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Approach</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I write in the style of leaders I admire—like <strong>Lara Hogan</strong> and 
          <strong> Simon Sinek</strong>—who blend practical wisdom with human insight. 
          Every post starts with a story or analogy because I believe that&apos;s how we 
          learn best: through narrative and connection.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          My goal isn&apos;t to have all the answers, but to share the questions that have 
          shaped my thinking and the frameworks that have helped me grow as a leader. 
          I hope these posts spark conversations, challenge assumptions, and help you 
          build teams that don&apos;t just ship code—they ship solutions that matter.
        </p>

        <div className="bg-accent-yellow-light rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Let&apos;s Connect
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            I&apos;d love to hear your thoughts, experiences, and questions about engineering leadership. 
            The best insights come from conversations, not monologues.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="https://linkedin.com/in/vishalkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-orange hover:bg-secondary-600 transition-colors"
            >
              Connect on LinkedIn
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
