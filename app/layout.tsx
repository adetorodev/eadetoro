import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Adewale Ezekiel Adetoro | AI Engineer & Data Engineer',
  description: 'Portfolio of Adewale Ezekiel Adetoro, specializing in AI Engineering, Data Engineering, and Backend infrastructure. Explore projects, blogs, and expertise in FastAPI, machine learning, and scalable systems.',
  keywords: 'Adewale Adetoro, AI Engineer, Data Engineer, FastAPI, Machine Learning, Backend Development, Python, Portfolio',
  authors: [{ name: 'Adewale Ezekiel Adetoro' }],
  creator: 'Adewale Ezekiel Adetoro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eadetoro.vercel.app', // Replace with actual domain
    title: 'Adewale Ezekiel Adetoro | AI Engineer & Data Engineer',
    description: 'Portfolio of Adewale Ezekiel Adetoro, specializing in AI Engineering, Data Engineering, and Backend infrastructure.',
    siteName: 'Adewale Adetoro Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adewale Ezekiel Adetoro | AI Engineer & Data Engineer',
    description: 'Portfolio of Adewale Ezekiel Adetoro, specializing in AI Engineering, Data Engineering, and Backend infrastructure.',
    creator: '@ezadetoro', // Replace with actual handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background-primary text-content-primary antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
