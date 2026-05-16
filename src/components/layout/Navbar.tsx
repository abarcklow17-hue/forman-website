import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck, Phone } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-md transition-transform group-hover:scale-110">
            <Truck className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight">
            FORMAN <span className="text-primary">&</span> CO
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
          <Link href="/service-areas" className="hover:text-foreground transition-colors">Service Areas</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:9704007357" className="hidden lg:flex items-center gap-2 text-primary font-bold hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            (970) 400-7357
          </a>
          <Button asChild className="hidden sm:flex font-bold">
            <Link href="/estimate">Free Estimate</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
