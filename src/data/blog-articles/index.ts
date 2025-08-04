import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  content?: string;
}

// Get the path to the blog articles directory
const articlesDirectory = path.join(process.cwd(), 'src/data/blog-articles');

// Function to read a markdown file and return raw markdown content
export async function getMarkdownContent(slug: string): Promise<string | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);
    
    return content;
  } catch (error) {
    console.error(`Error reading markdown file for slug: ${slug}`, error);
    return null;
  }
}

// Function to get blog post metadata by slug
export async function getBlogPostWithContent(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);
    
    // Find the corresponding post metadata
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return null;
    }
    
    return {
      ...post,
      content: content // Return raw markdown content
    };
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}

// Blog posts metadata - this would ideally be generated automatically
export const blogPosts: BlogPost[] = [
  {
    id: "sdk-creation-guide",
    title: "Creating a JavaScript SDK with React (TSX) and Vite",
    excerpt: "This guide provides a comprehensive walkthrough for building a JavaScript SDK using React (TSX) and Vite. Learn how to create reusable components that can be integrated into external applications.",
    date: "2024-01-20",
    readTime: "12 min read",
    tags: ["React", "TypeScript", "Vite", "SDK", "JavaScript"],
    slug: "sdk-creation-guide"
  },
  {
    id: "nextjs-typescript-guide",
    title: "Building Modern Web Applications with Next.js and TypeScript",
    excerpt: "Exploring the benefits of using Next.js with TypeScript for building scalable web applications. Learn about best practices and performance optimizations.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "TypeScript", "React"],
    slug: "nextjs-typescript-guide"
  },
  {
    id: "advanced-css-techniques",
    title: "Advanced CSS Techniques for Modern UI Design",
    excerpt: "Dive deep into modern CSS features including Grid, Flexbox, and custom properties to create stunning user interfaces.",
    date: "2024-01-08",
    readTime: "7 min read",
    tags: ["CSS", "UI/UX", "Design"],
    slug: "advanced-css-techniques"
  },
  {
    id: "database-optimization",
    title: "Database Optimization Strategies for High-Performance Applications",
    excerpt: "Learn how to optimize database queries and implement caching strategies to improve application performance.",
    date: "2023-12-22",
    readTime: "10 min read",
    tags: ["Database", "Performance", "Backend"],
    slug: "database-optimization"
  }
];

// Function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Function to dynamically scan and load all markdown files (optional)
export async function getAllMarkdownPosts(): Promise<BlogPost[]> {
  try {
    const files = fs.readdirSync(articlesDirectory);
    const markdownFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(articlesDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        // You can extract metadata from frontmatter if your markdown files have it
        return {
          id: slug,
          title: data.title || `Post ${slug}`,
          excerpt: data.excerpt || data.description || '',
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          tags: data.tags || [],
          slug: slug
        };
      })
    );
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error scanning markdown files:', error);
    return blogPosts; // Fallback to hardcoded posts
  }
}