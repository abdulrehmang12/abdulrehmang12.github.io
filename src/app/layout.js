import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Abdul Rehman Bin Imran | Full Stack Developer',
  description:
    'Portfolio of Abdul Rehman Bin Imran, a full stack developer specializing in MERN stack, React, Node.js, TypeScript, Shopify, SaaS, and eCommerce systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
