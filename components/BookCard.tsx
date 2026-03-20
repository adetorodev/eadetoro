import Link from 'next/link';

interface BookCardProps {
  title: string;
  coverImage: string;
  buyLink: string;
}

export function BookCard({ title, coverImage, buyLink }: BookCardProps) {
  return (
    <div className="bg-background-secondary border border-border rounded-2xl p-4 card-hover flex flex-col gap-4 min-w-[240px] max-w-[280px]">
      <div className="aspect-[2/3] w-full rounded-xl overflow-hidden bg-[#1F2937]">
        {/* Replace with actual next/image when real images are available */}
        <div 
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${coverImage})` }}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold text-content-primary leading-tight mb-3 line-clamp-2">
          {title}
        </h3>
        <Link 
          href={buyLink}
          target="_blank"
          className="inline-flex w-full items-center justify-center bg-brand-primary hover:bg-brand-primary/90 text-white py-2 rounded-lg font-medium transition-colors text-sm"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
