import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck, Phone } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-black p-2 brutal-border transition-transform group-hover:scale-105">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-2xl tracking-tighter uppercase leading-none">
              FORMAN <span className="text-primary">&</span> CO
            </span>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-0.5">JUNK REMOVAL</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/service-areas" className="hover:text-primary transition-colors">Areas</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:9704007357" className="hidden lg:flex items-center gap-2 text-black font-black hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            (970) 400-7357
          </a>
          <Button asChild className="hidden sm:flex font-black uppercase brutal-border bg-black text-white hover:bg-black/90">
            <Link href="/estimate">Free Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
