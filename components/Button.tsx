import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

export function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center h-12 px-6 rounded-xl font-medium transition-all duration-200 ease-in-out select-none cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 hover:scale-[1.03]',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90 hover:scale-[1.03]',
    outline: 'bg-transparent border border-border text-content-primary hover:border-content-secondary hover:bg-background-secondary',
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
