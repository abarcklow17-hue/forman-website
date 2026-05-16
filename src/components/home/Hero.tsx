import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[30vw] font-black italic uppercase leading-none">FORMAN</span>
      </div>

      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-none bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
            <MapPin className="w-3 h-3" /> Serving Greeley & Weld County
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter italic uppercase chrome-text py-4">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
            Professional Mobile Junk Removal Service. <br />
            <span className="text-white italic">Premium property cleanouts & disposal.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
          <Link href="/estimate" className="btn-premium flex items-center gap-4 text-sm px-12 py-5">
            GET A FREE QUOTE <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:9704007357" className="group h-16 px-10 border border-white/10 hover:bg-white/5 transition-all font-black uppercase italic tracking-widest text-sm flex items-center gap-4 text-white">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone className="w-4 h-4 text-primary group-hover:text-white" />
            </div> 
            (970) 400-7357
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
