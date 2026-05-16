
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
        <span className="text-[35vw] font-bold italic uppercase leading-none text-white tracking-tighter">FORMAN</span>
      </div>

      {/* Cinematic Background Image with Glass Blur */}
      {heroImg && (
        <div className="absolute inset-0 -z-10">
          {/* Main cinematic image */}
          <Image 
            src={heroImg.imageUrl} 
            alt={heroImg.description}
            fill
            className="object-cover grayscale opacity-60"
            priority
            data-ai-hint={heroImg.imageHint}
          />
          {/* Glass blur overlay layer */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />
          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20" />
        </div>
      )}

      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[200px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 relative z-30 text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-zinc-900/80 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-4 backdrop-blur-md">
            <MapPin className="w-4 h-4" /> GREELEY & LARIMER COUNTY
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter italic uppercase chrome-text py-4">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed uppercase tracking-tight">
            PROFESSIONAL MOBILE JUNK REMOVAL SERVICE. <br />
            <span className="text-white italic">PREMIUM PROPERTY CLEANOUTS & ECO-RECYCLING.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Link href="/estimate" className="btn-premium flex items-center gap-6 text-sm px-14 py-6">
            GET A QUOTE <ArrowRight className="w-6 h-6" />
          </Link>
          <a href="tel:9704007357" className="group h-16 px-10 border border-white/10 hover:border-white/40 transition-all font-bold uppercase italic tracking-[0.2em] text-[11px] flex items-center gap-5 text-white bg-black/40 backdrop-blur-md metallic-card">
            <Phone className="w-4 h-4 text-primary" /> (970) 400-7357
          </a>
        </div>
      </div>

      {/* Decorative Steel Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-accent to-transparent z-40" />
    </section>
  );
}
