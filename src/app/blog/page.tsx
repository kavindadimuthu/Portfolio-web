import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '../../data/blog-articles';

const BlogPage: React.FC = () => {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 pt-24 py-16 max-w-4xl">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Blog
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technical articles, tutorials, and insights about web development, 
          software engineering, and modern technologies.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/70 cursor-pointer">
              <div className="flex flex-col space-y-4">
                {/* Post Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Post Meta */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read More Button */}
                <div className="pt-2">
                  <span className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                    <span>Read more</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* No posts message */}
      {blogPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No blog posts available yet.</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;