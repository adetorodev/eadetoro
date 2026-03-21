import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from 'next';

interface BlogPost {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  image?: string;
}

function getBlogPosts(): BlogPost[] {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const fileNames = fs.readdirSync(blogsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '').replace(/^# /, '').replace(/ /g, '-').toLowerCase();
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // If no title in frontmatter, use first line if it's a heading
      let title = data.title;
      if (!title) {
        const firstLine = content.trim().split('\n')[0];
        if (firstLine.startsWith('# ')) {
          title = firstLine.replace('# ', '');
        } else {
          title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }
      }

      const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
      const image = imageMatch ? imageMatch[1] : undefined;

      return {
        slug,
        title,
        date: data.date,
        description: data.description || content.slice(0, 150) + '...',
        image,
      };
    })
    .sort((a, b) => (a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0));

  return posts;
}

export const metadata: Metadata = {
  title: 'Blogs | Adewale Adetoro',
  description: 'Explore my latest blog posts on software development, FastAPI, AI, and more.',
  keywords: 'blogs, software development, FastAPI, AI, programming',
  openGraph: {
    title: 'Blogs | Adewale Adetoro',
    description: 'Explore my latest blog posts on software development, FastAPI, AI, and more.',
  },
};

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            {post.image && <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blogs/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                {post.title}
              </Link>
            </h2>
            {post.date && (
              <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            )}
            {post.description && (
              <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}