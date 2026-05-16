import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-black">
      {/* Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] select-none z-0">
        <span className="text-[35vw] font-black italic uppercase leading-none text-white">FORMAN</span>
      </div>

      {/* Cinematic Background Image */}
      {heroImg && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
          <Image 
            src={heroImg.imageUrl} 
            alt={heroImg.description}
            fill
            className="object-cover grayscale opacity-60"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        </div>
      )}

      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[200px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-center space-y-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-primary/10 border border-primary/40 text-primary text-[11px] font-black uppercase tracking-[0.5em] mb-4 backdrop-blur-md">
            <MapPin className="w-4 h-4" /> SERVING GREELEY & LARIMER COUNTY
          </div>
          
          <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase chrome-text py-6 drop-shadow-2xl">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-black leading-tight uppercase tracking-tighter">
            PROFESSIONAL MOBILE JUNK REMOVAL SERVICE. <br />
            <span className="text-white italic">PREMIUM PROPERTY CLEANOUTS & DISPOSAL.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
          <Link href="/estimate" className="btn-premium flex items-center gap-6 text-sm px-14 py-6">
            GET A FREE QUOTE <ArrowRight className="w-6 h-6" />
          </Link>
          <a href="tel:9704007357" className="group h-20 px-12 border border-white/10 hover:bg-white/5 transition-all font-black uppercase italic tracking-[0.3em] text-xs flex items-center gap-5 text-white bg-black/40 backdrop-blur-md">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
              <Phone className="w-5 h-5 text-primary group-hover:text-white" />
            </div> 
            (970) 400-7357
          </a>
        </div>
      </div>

      {/* Decorative Steel Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-primary to-transparent z-30" />
    </section>
  );
}