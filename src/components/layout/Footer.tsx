import Link from 'next/link';
import { Truck, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/5 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center space-y-12">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="font-headline text-2xl font-bold tracking-tighter uppercase italic text-white">
              FORMAN <span className="text-primary">&</span> CO
            </span>
          </Link>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.5em] max-w-sm">
            NORTHERN COLORADO'S LEADING PROFESSIONAL JUNK REMOVAL SERVICE.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-12 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
          <Link href="/estimate" className="hover:text-primary transition-colors">GET A QUOTE</Link>
          <Link href="/services" className="hover:text-primary transition-colors">SERVICES</Link>
          <Link href="/service-areas" className="hover:text-primary transition-colors">SERVICE AREAS</Link>
          <a href="tel:9704007357" className="hover:text-primary transition-colors">CONTACT US</a>
        </nav>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground italic">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary" />
            <span>GREELEY, COLORADO</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:9704007357" className="hover:text-white transition-colors">(970) 400-7357</a>
          </div>
          <div className="flex items-center gap-3">
            <span>© {currentYear} FORMAN & CO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
