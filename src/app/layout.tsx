import type { Metadata } from 'next';
import './globals.css';
import { fontVariable } from '@/config/fonts';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Bax Mimarlık',
  description: 'Bax Mimarlık',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${fontVariable.className} antialiased bg-white dark:bg-slate-900 prose prose-md prose-a:no-underline dark:prose-invert max-w-none min-h-full flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
