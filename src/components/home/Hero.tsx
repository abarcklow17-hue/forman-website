import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[25vw] font-black italic uppercase leading-none">FORMAN</span>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
        <div className="space-y-2">
          <p className="text-primary font-black uppercase tracking-[0.4em] text-sm animate-pulse">Welcome to Forman & Co</p>
          <h1 className="text-5xl md:text-[7rem] font-black leading-[0.8] tracking-tighter italic uppercase chrome-title">
            JUNK REMOVAL <br />
            <span className="text-primary">SIMPLIFIED.</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
          Premium property cleanouts and hauling for Northern Colorado. <br className="hidden md:block"/>
          Professional, insured, and ready to reclaim your space today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link href="/estimate" className="btn-premium flex items-center gap-3">
            GET A FREE QUOTE <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:9704007357" className="px-8 py-3 border border-white/10 hover:bg-white/5 transition-colors font-black uppercase italic tracking-widest text-sm flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary" /> (970) 400-7357
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
