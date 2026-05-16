import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck, Phone, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-black bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 flex items-center justify-center">
             <Settings className="w-14 h-14 text-zinc-400 absolute animate-[spin_10s_linear_infinite]" />
             <Truck className="w-7 h-7 text-primary relative z-10" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-3xl tracking-tighter uppercase leading-none italic">
              FORMAN <span className="text-primary">&</span> CO
            </span>
            <span className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em] pl-0.5">JUNK REMOVAL</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.25em]">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/service-areas" className="hover:text-primary transition-colors">Areas</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:9704007357" className="hidden sm:flex flex-col items-end group">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Call or Text</span>
            <span className="text-xl font-black text-black group-hover:text-primary transition-colors tracking-tighter">
              (970) 400-7357
            </span>
          </a>
          <Button asChild className="font-black uppercase brutal-border bg-primary text-white hover:bg-primary/90 h-12 px-6">
            <Link href="/estimate">Free Quote</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}