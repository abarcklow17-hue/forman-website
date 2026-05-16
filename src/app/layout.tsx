import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Forman & Co | Junk Removal Northern Colorado',
  description: 'Fast, reliable junk removal services in Greeley, Fort Collins, Windsor, and surrounding areas. Licensed, insured, and locally owned. Same-day service available.',
  keywords: 'junk removal, Greeley, Fort Collins, Windsor, Weld County, hauling, cleanout, debris removal, Northern Colorado',
  openGraph: {
    title: 'Forman & Co | Junk Removal Northern Colorado',
    description: 'Fast, reliable junk removal services in Greeley, Fort Collins, and surrounding areas. Licensed, insured, and locally owned.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Forman & Co',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground bg-black overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}