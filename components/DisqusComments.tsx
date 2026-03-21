'use client';

import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  slug: string;
  title: string;
}

export function DisqusComments({ slug, title }: DisqusCommentsProps) {
  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : `http://localhost:3000/blogs/${slug}`,
    identifier: slug,
    title,
  };

  return (
    <div className="mt-12">
      <DiscussionEmbed shortname="streetcoder-1" config={disqusConfig} />
    </div>
  );
}