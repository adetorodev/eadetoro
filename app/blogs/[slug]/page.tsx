import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DisqusComments } from '../../../components/DisqusComments';

interface BlogPost {
  title: string;
  date?: string;
  contentHtml: string;
  tags?: string[];
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const fileNames = fs.readdirSync(blogsDirectory);
  const fileName = fileNames.find(fn => fn.replace(/\.md$/, '').replace(/^# /, '').replace(/ /g, '-').toLowerCase() === slug);

  if (!fileName) {
    return null;
  }

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

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    title,
    date: data.date,
    contentHtml,
    tags: data.tags || [],
  };
}

interface RelatedPost {
  slug: string;
  title: string;
  image?: string;
}

function getRelatedPosts(currentSlug: string, tags: string[]): RelatedPost[] {
  const blogsDirectory = path.join(process.cwd(), 'blogs');
  const fileNames = fs.readdirSync(blogsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '').replace(/^# /, '').replace(/ /g, '-').toLowerCase();
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

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
        tags: data.tags || [],
        image,
      };
    })
    .filter((post) => post.slug !== currentSlug && post.tags.some((tag: string) => tags.includes(tag)))
    .slice(0, 3);

  return posts;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.tags);

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <Link href="/blogs" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Back to Blogs
      </Link>
      <article className="prose prose-lg dark:prose-invert mx-auto text-white [&_*]:!text-white">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.date && (
          <p className="mb-8">{new Date(post.date).toLocaleDateString()}</p>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4 text-white">Join the Conversation</h2>
        <p className="text-gray-300 mb-6">What are your thoughts on this topic? Share your insights, ask questions, or discuss with fellow readers in the comments below!</p>
      </div>
      <DisqusComments slug={slug} title={post.title} />
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Related Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                {relatedPost.image && <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-32 object-cover rounded-lg mb-4" />}
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/blogs/${relatedPost.slug}`} className="text-blue-600 hover:text-blue-800">
                    {relatedPost.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}