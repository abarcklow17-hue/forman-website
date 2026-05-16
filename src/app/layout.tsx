import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Forman & Co | Junk Removal Northern Colorado',
  description: 'Fast, reliable junk removal services in Greeley, Fort Collins, and surrounding areas. Licensed, insured, and locally owned.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground bg-black">
        <div className="noise-overlay" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
