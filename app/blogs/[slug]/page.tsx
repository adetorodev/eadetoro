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
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

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
      <DisqusComments slug={slug} title={post.title} />
    </div>
  );
}