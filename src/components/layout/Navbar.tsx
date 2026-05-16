import Link from 'next/link';
import { Truck, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
             <Truck className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase italic text-white group-hover:text-primary transition-colors">
            FORMAN <span className="text-primary">&</span> CO
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="/services" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-white transition-colors">Agency</Link>
          <Link href="/service-areas" className="hover:text-white transition-colors">Areas</Link>
          <Link href="/estimate" className="hover:text-white transition-colors">Quote</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/estimate" className="btn-premium text-[10px] py-2 px-6">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
