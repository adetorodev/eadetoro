import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TagBadge } from './TagBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-background-secondary border border-border rounded-2xl p-6 card-hover h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-content-primary mb-3 transition-colors group-hover:text-brand-primary">
            {title}
          </h3>
          <p className="text-content-secondary text-sm mb-6 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          
          <div className="flex items-center text-brand-primary text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
