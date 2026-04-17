import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SendMoneySmart — Find the Cheapest Way to Send Money Abroad',
    template: '%s | SendMoneySmart',
  },
  description:
    'Compare Wise, Remitly, Western Union and more. Find the cheapest way to send money internationally. Real rates, no hidden fees.',
  metadataBase: new URL('https://sendmoneysmart.com'),
  openGraph: {
    siteName: 'SendMoneySmart',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
