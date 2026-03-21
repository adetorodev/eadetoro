import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#2563EB',
                    secondary: '#9333EA',
                    accent: '#22C55E',
                },
                background: {
                    primary: '#0B0F19',
                    secondary: '#111827',
                },
                border: {
                    DEFAULT: '#1F2937',
                },
                content: {
                    primary: '#E5E7EB',
                    secondary: '#9CA3AF',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-jetbrains-mono)', 'monospace'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #2563EB 0%, #9333EA 100%)',
            },
            gridTemplateColumns: {
                'desktop': 'repeat(12, minmax(0, 1fr))',
                'tablet': 'repeat(8, minmax(0, 1fr))',
                'mobile': 'repeat(4, minmax(0, 1fr))',
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

export default config;
