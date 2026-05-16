import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="font-headline text-3xl font-black tracking-tighter uppercase italic">
                FORMAN <span className="text-primary">&</span> CO
              </span>
            </Link>
            <p className="text-muted-foreground text-xs font-black leading-relaxed max-w-xs uppercase tracking-[0.3em]">
              NORTHERN COLORADO'S LEADING PROFESSIONAL MOBILE JUNK REMOVAL SERVICE. WE HAUL, YOU RELAX.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-12 h-12 metallic-card flex items-center justify-center hover:bg-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 metallic-card flex items-center justify-center hover:bg-primary transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-10 text-white uppercase tracking-[0.5em] text-[11px] italic">AGENCY NAVIGATION</h4>
            <ul className="space-y-6 text-[11px] font-black text-muted-foreground uppercase tracking-[0.5em]">
              <li><Link href="/services" className="hover:text-primary transition-colors">PROJECT PORTFOLIO</Link></li>
              <li><Link href="/estimate" className="hover:text-primary transition-colors">INSTANT QUOTE</Link></li>
              <li><Link href="/service-areas" className="hover:text-primary transition-colors">SERVICE AREAS</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">OUR STORY</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-10 text-white uppercase tracking-[0.5em] text-[11px] italic">CONTACT ARCHIE</h4>
            <ul className="space-y-8 text-[11px] font-black text-muted-foreground uppercase tracking-[0.4em]">
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 metallic-card flex items-center justify-center group-hover:border-primary transition-all">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:9704007357" className="hover:text-white transition-colors">(970) 400-7357</a>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 metallic-card flex items-center justify-center group-hover:border-primary transition-all">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:formanandco@gmail.com" className="hover:text-white transition-colors">formanandco@gmail.com</a>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 metallic-card flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="leading-relaxed">SERVING GREELEY, FORT COLLINS & LARIMER COUNTY.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-10 text-white uppercase tracking-[0.5em] text-[11px] italic">DISCOVERY CALL</h4>
            <p className="text-[10px] text-muted-foreground mb-8 font-black uppercase tracking-[0.4em] leading-relaxed">
              READY TO RECLAIM YOUR SPACE? OUR CREW IS STANDING BY FOR SAME-DAY SERVICE.
            </p>
            <Link 
              href="/estimate"
              className="btn-premium w-full block text-center py-5 text-[11px]"
            >
              INITIATE DISCOVERY
            </Link>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-muted-foreground uppercase tracking-[0.6em] font-black italic">
          <p>© {currentYear} FORMAN & CO MOBILE JUNK REMOVAL.</p>
          <div className="flex gap-16">
            <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-white transition-colors">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}