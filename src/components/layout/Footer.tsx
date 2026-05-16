import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-md">
                <Truck className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-headline text-lg font-bold tracking-tight">
                FORMAN <span className="text-primary">&</span> CO
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Premium junk removal and property cleanout services in Northern Colorado. Licensed, insured, and family-owned.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-white uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Job Gallery</Link></li>
              <li><Link href="/estimate" className="hover:text-primary transition-colors">Get Estimate</Link></li>
              <li><Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link href="/reviews" className="hover:text-primary transition-colors">Customer Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-white uppercase tracking-wider text-xs">Contact Archie</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9704007357" className="hover:text-white">(970) 400-7357</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:abarcklow17@gmail.com" className="hover:text-white">abarcklow17@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Serving Greeley, Fort Collins, Loveland & surrounding Weld County.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-white uppercase tracking-wider text-xs">Book Now</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to clear the clutter? Our team is standing by for same-day service.
            </p>
            <Link 
              href="/estimate"
              className="inline-block w-full py-3 px-6 bg-primary text-white text-center font-bold rounded-md hover:bg-primary/90 transition-colors"
            >
              Request A Quote
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {currentYear} FORMAN & CO JUNK REMOVAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
