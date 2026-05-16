import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MapPin, ShieldCheck, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-primary/5 -z-10 skew-x-[-12deg] translate-x-32" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-4 bg-zinc-900 border border-white/10 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] text-primary">
              <Zap className="w-4 h-4" />
              Greeley's #1 Rated Haulers
            </div>
            
            <div className="space-y-4">
              <h1 className="text-[4rem] md:text-[8rem] font-black leading-[0.8] tracking-tighter italic uppercase chrome-text">
                WE HAUL, <br />
                <span className="text-primary">YOU RELAX.</span>
              </h1>
              <div className="flex items-center gap-3 text-xl font-black uppercase tracking-widest text-muted-foreground italic">
                <MapPin className="w-6 h-6 text-primary" />
                Serving All of Northern Colorado
              </div>
            </div>

            <p className="text-2xl font-bold leading-tight max-w-xl text-muted-foreground border-l-4 border-primary pl-8">
              Professional junk removal and property cleanouts. Fast, reliable, and locally owned. Get a guaranteed quote from the owner today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/estimate" className="metal-button text-white flex items-center justify-center gap-4 group">
                GET FREE QUOTE <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="tel:9704007357" className="px-8 py-4 bg-zinc-900 border border-white/10 rounded-md font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-primary" /> (970) 400-7357
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6">
               <div className="flex items-center gap-2 font-black uppercase text-[10px] text-muted-foreground">
                 <ShieldCheck className="w-4 h-4 text-primary" /> Fully Insured
               </div>
               <div className="flex items-center gap-2 font-black uppercase text-[10px] text-muted-foreground">
                 <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Bonded
               </div>
               <div className="flex items-center gap-2 font-black uppercase text-[10px] text-muted-foreground">
                 <ShieldCheck className="w-4 h-4 text-primary" /> Veteran Owned
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="industrial-card aspect-[3/4] relative rotate-2 group">
              <Image 
                src={heroImg?.imageUrl || ''} 
                alt="Forman & Co Truck"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-primary p-6 rounded-lg shadow-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1">Established 2010</p>
                    <p className="text-2xl font-black italic uppercase leading-none">FREE ON-SITE ESTIMATES</p>
                 </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border border-white/5 -z-10 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}