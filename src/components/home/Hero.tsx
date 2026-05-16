import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, MapPin, Truck, ShieldCheck, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background industrial graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -z-10 skew-x-[-15deg] translate-x-32 border-l-8 border-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="inline-flex items-center gap-4 bg-black text-white px-8 py-3 font-black text-sm uppercase tracking-[0.3em] brutal-border">
              <Zap className="w-5 h-5 text-primary" />
              WE BEAT ANY LICENSED PRICE
            </div>
            
            <div className="space-y-4">
              <h1 className="text-[5rem] md:text-[10rem] font-black leading-[0.75] tracking-tighter italic uppercase">
                WE HAUL, <br />
                <span className="text-primary">YOU RELAX.</span>
              </h1>
              <div className="flex items-center gap-4 text-2xl font-black uppercase tracking-widest text-zinc-400 italic">
                <MapPin className="w-7 h-7 text-primary" />
                Greeley's #1 Rated Junk Removal
              </div>
            </div>

            <p className="text-3xl font-bold leading-tight max-w-2xl text-zinc-700 border-l-8 border-primary pl-8 py-2">
              Fast, reliable, and 40% cheaper than the corporate guys. Serving Greeley, Fort Collins, and Weld County since 2010.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button asChild size="lg" className="h-24 px-16 text-3xl font-black uppercase brutal-border bg-black text-white hover:bg-black/90 group transition-all">
                <Link href="/estimate" className="flex items-center gap-4">
                  GET QUOTE <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-24 px-16 text-3xl font-black uppercase brutal-border bg-primary text-white border-black hover:bg-primary/90">
                <a href="tel:9704007357" className="flex items-center gap-4">
                  <Phone className="w-8 h-8" /> (970) 400-7357
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 opacity-60 grayscale group-hover:grayscale-0 transition-all">
               <div className="flex items-center gap-2 font-black uppercase text-xs">
                 <ShieldCheck className="w-5 h-5 text-primary" /> Fully Insured
               </div>
               <div className="flex items-center gap-2 font-black uppercase text-xs">
                 <Truck className="w-5 h-5 text-primary" /> Same-Day
               </div>
               <div className="flex items-center gap-2 font-black uppercase text-xs">
                 <Truck className="w-5 h-5 text-primary" /> Veteran Owned
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="brutal-card relative z-10 p-0 overflow-hidden aspect-[3/4] bg-zinc-100 rotate-2">
               <Image 
                src={heroImg?.imageUrl || ''} 
                alt="Forman & Co Truck"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-primary text-white p-6 brutal-border">
                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">Since 2010</p>
                    <p className="text-3xl font-black italic uppercase leading-none">ESTIMATES IN MINUTES</p>
                 </div>
              </div>
            </div>
            {/* Background metallic element */}
            <div className="absolute top-10 -right-10 w-full h-full bg-black/10 -z-0 border-4 border-black -rotate-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
