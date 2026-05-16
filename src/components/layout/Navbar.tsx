import Link from 'next/link';
import { Truck, Phone, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 flex items-center justify-center">
             <Settings className="w-14 h-14 text-primary/20 absolute animate-[spin_12s_linear_infinite]" />
             <Truck className="w-8 h-8 text-primary relative z-10 filter drop-shadow-[0_0_10px_rgba(183,18,18,0.5)]" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-3xl tracking-tighter uppercase leading-none italic chrome-text">
              FORMAN <span className="text-primary">&</span> CO
            </span>
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] pl-0.5">JUNK REMOVAL</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/service-areas" className="hover:text-primary transition-colors">Areas</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-8">
          <a href="tel:9704007357" className="hidden sm:flex flex-col items-end group">
            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Call or Text</span>
            <span className="text-xl font-black text-white group-hover:text-primary transition-colors tracking-tighter italic">
              (970) 400-7357
            </span>
          </a>
          <Link href="/estimate" className="metal-button text-xs py-3 px-6 text-white hidden md:block">
            Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}