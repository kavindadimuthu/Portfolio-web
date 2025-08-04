import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getBlogPostBySlug, getAllBlogPosts, getBlogPostWithContent } from '../../../data/blog-articles';

interface BlogPostPageProps {
  params: Promise<{
    blogId: string;
  }>;

}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    blogId: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { blogId } = await params;
  const post = getBlogPostBySlug(blogId);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} - Kavinda Dewmith`,
    description: post.excerpt,
  };
}

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params }) => {
  // Await the params promise
  const { blogId } = await params;
  
  // Get the blog post with content from markdown file
  const postWithContent = await getBlogPostWithContent(blogId);
  
  if (!postWithContent) {
    notFound();
  }

  // Custom components for markdown rendering
  const components = {
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold text-white mb-2 mt-4">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base md:text-lg font-semibold text-white mb-2 mt-4">
        {children}
      </h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm md:text-base font-semibold text-white mb-2 mt-4">
        {children}
      </h6>
    ),
    p: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }: any) => (
      <a 
        href={href} 
        className="text-blue-400 hover:text-blue-300 transition-colors underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="text-white font-semibold">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="text-gray-200 italic">
        {children}
      </em>
    ),
    code: ({ inline, children }: any) => {
      if (inline) {
        return (
          <code className="text-blue-300 bg-gray-800 px-1 py-0.5 rounded text-sm">
            {children}
          </code>
        );
      }
      return (
        <code className="block text-gray-200 bg-gray-900 p-4 rounded-lg overflow-x-auto">
          {children}
        </code>
      );
    },
    pre: ({ children }: any) => (
      <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    ul: ({ children }: any) => (
      <ul className="text-gray-300 list-disc list-inside mb-4 space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="text-gray-300 list-decimal list-inside mb-4 space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="text-gray-300 leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-900/50 rounded-r-lg mb-4">
        <div className="text-gray-300 italic">
          {children}
        </div>
      </blockquote>
    ),
    hr: () => (
      <hr className="border-gray-700 my-8" />
    ),
    table: ({ children }: any) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-700 rounded-lg">
          {children}
        </table>
      </div>
    ),
    th: ({ children }: any) => (
      <th className="border border-gray-700 bg-gray-800 px-4 py-2 text-white font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="border border-gray-700 px-4 py-2 text-gray-300">
        {children}
      </td>
    ),
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 pt-24 py-16 max-w-4xl">
        {/* Back to Blog */}
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {postWithContent.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{new Date(postWithContent.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{postWithContent.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {postWithContent.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content - Rendered Markdown */}
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {postWithContent.content || ''}
          </ReactMarkdown>
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog" 
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Back to all posts</span>
            </Link>
            
            <div className="text-sm text-gray-500">
              Published on {new Date(postWithContent.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPostPage;