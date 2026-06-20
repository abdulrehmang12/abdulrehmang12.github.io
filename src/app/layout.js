import { DM_Mono, Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
});

export const metadata = {
  title: 'Abdul Rehman Bin Imran - Full Stack & Shopify Developer',
  description:
    'Abdul Rehman Bin Imran is a Full Stack and Shopify developer building MERN apps, AI SaaS platforms, and high-converting Shopify storefronts.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'Shopify Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Pakistan',
    'Remote',
  ],
  openGraph: {
    title: 'Abdul Rehman - Full Stack & Shopify Developer',
    description: '4+ years building scalable web apps, AI SaaS, and Shopify storefronts.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} ${dmMono.variable}`}>{children}</body>
    </html>
  );
}
