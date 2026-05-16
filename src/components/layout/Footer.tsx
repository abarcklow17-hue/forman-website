import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="font-headline text-2xl font-black tracking-tighter uppercase italic">
                FORMAN <span className="text-primary">&</span> CO
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium uppercase tracking-tight">
              Northern Colorado's leading professional mobile junk removal service. We haul, you relax.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all rounded-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all rounded-sm">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-xs italic">Agency Links</h4>
            <ul className="space-y-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <li><Link href="/services" className="hover:text-primary transition-colors">Project Portfolio</Link></li>
              <li><Link href="/estimate" className="hover:text-primary transition-colors">Instant Quote</Link></li>
              <li><Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Archie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-xs italic">Contact Archie</h4>
            <ul className="space-y-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-3 h-3 text-primary" />
                </div>
                <a href="tel:9704007357" className="hover:text-white transition-colors">(970) 400-7357</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-3 h-3 text-primary" />
                </div>
                <a href="mailto:formanandco@gmail.com" className="hover:text-white transition-colors">formanandco@gmail.com</a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <MapPin className="w-3 h-3 text-primary" />
                </div>
                <span className="leading-relaxed">Serving Greeley, Fort Collins & surrounding Weld County.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-white uppercase tracking-[0.2em] text-xs italic">Request Discovery</h4>
            <p className="text-[10px] text-muted-foreground mb-6 font-bold uppercase tracking-widest leading-relaxed">
              READY TO CLEAR THE CLUTTER? OUR TEAM IS STANDING BY FOR SAME-DAY SERVICE.
            </p>
            <Link 
              href="/estimate"
              className="btn-premium w-full block text-center py-4"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-muted-foreground uppercase tracking-[0.4em] font-black italic">
          <p>© {currentYear} FORMAN & CO MOBILE JUNK REMOVAL.</p>
          <div className="flex gap-12">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
