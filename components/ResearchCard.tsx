import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TagBadge } from './TagBadge';

interface ResearchCardProps {
  title: string;
  abstract: string;
  tags: string[];
  href: string;
}

export function ResearchCard({ title, abstract, tags, href }: ResearchCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-background-secondary border border-border rounded-2xl p-6 card-hover h-full flex flex-col justify-between border-l-4 border-l-brand-secondary">
        <div>
          <h3 className="text-xl font-bold text-content-primary mb-3 transition-colors group-hover:text-brand-secondary">
            {title}
          </h3>
          <p className="text-content-secondary text-sm mb-6 leading-relaxed line-clamp-3">
            {abstract}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          
          <div className="flex items-center text-brand-secondary text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            Read Research <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
