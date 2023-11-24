import type { Metadata } from 'next';
import './globals.css';
import { fontVariable } from '@/lib/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Bax Mimarlık',
  description: 'Bax Mimarlık',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`min-h-screen bg-background font-sans antialiased ${fontVariable.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
