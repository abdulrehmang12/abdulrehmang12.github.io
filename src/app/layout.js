import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Abdul Rehman | Shopify Developer & eCommerce Specialist',
  description:
    'Portfolio of Abdul Rehman — Shopify Developer with 4+ years of experience building conversion-focused eCommerce stores.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ backgroundColor: '#0a0a0a', color: '#ffffff', margin: 0 }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}