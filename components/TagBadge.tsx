export function TagBadge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`px-3 py-1.5 rounded-full bg-[#1F2937] text-content-primary text-xs font-medium tracking-wide ${className}`}>
      {children}
    </span>
  );
}
