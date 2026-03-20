import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto w-full">
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-content-secondary text-sm">
          © {new Date().getFullYear()} Adewale Ezekiel Adetoro. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <Link href="https://github.com/adetorodev" target="_blank" className="text-content-secondary hover:text-content-primary transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/ezadetoro/" target="_blank" className="text-content-secondary hover:text-content-primary transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:adetoroe787@gmail.com" className="text-content-secondary hover:text-content-primary transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
