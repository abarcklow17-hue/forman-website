import Link from 'next/link';
import { Truck } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-14 h-14 flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-full h-full text-primary animate-[spin_30s_linear_infinite]">
               <path fill="currentColor" d="M100,56.9V43.1l-12.5-2.1c-1-3.5-2.5-6.8-4.5-9.8l7.3-10.4L80.5,11l-10.4,7.3c-3-2-6.3-3.5-9.8-4.5L58.2,1.3H41.8 l-2.1,12.5c-3.5,1-6.8,2.5-9.8,4.5L19.5,11l-9.8,9.8l7.3,10.4c-2,3-3.5,6.3-4.5,9.8L0,43.1v13.8l12.5,2.1c1,3.5,2.5,6.8,4.5,9.8 l-7.3,10.4L19.5,89l10.4-7.3c3,2,6.3,3.5,9.8,4.5l2.1,12.5h16.4l2.1-12.5c3.5-1,6.8-2.5,9.8-4.5L80.5,89l9.8-9.8l-7.3-10.4 c2-3,3.5-6.3,4.5-9.8L100,56.9z M50,71.5c-11.9,0-21.5-9.6-21.5-21.5S38.1,28.5,50,28.5S71.5,38.1,71.5,50S61.9,71.5,50,71.5z"/>
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
               <Truck className="w-6 h-6 text-white" />
             </div>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-headline text-2xl font-bold tracking-tighter uppercase italic text-white group-hover:text-primary transition-colors leading-none">
              FORMAN <span className="text-primary">&</span> CO
            </span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-muted-foreground uppercase leading-none pl-1">PREMIUM JUNK REMOVAL</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
          <Link href="/services" className="hover:text-white transition-colors relative group">
            SERVICES
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link href="/service-areas" className="hover:text-white transition-colors relative group">
            SERVICE AREAS
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link href="/estimate" className="hover:text-white transition-colors relative group">
            ESTIMATE
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/estimate" className="btn-premium text-[10px] py-3.5 px-10">
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
}
