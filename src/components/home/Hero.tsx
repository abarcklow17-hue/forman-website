import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, MapPin, Truck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-10 skew-x-[-12deg] translate-x-20 border-l-8 border-primary/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 border-4 border-black px-6 py-2 font-black text-sm uppercase tracking-[0.3em] bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Truck className="w-5 h-5 text-primary" />
              Professional Mobile Junk Removal Service
            </div>
            
            <div className="space-y-4">
              <h1 className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter italic">
                FORMAN <span className="text-primary">&</span> CO <br />
                <span className="text-zinc-800 text-[0.65em] not-italic">JUNK REMOVAL</span>
              </h1>
              <div className="flex items-center gap-3 text-xl font-black uppercase tracking-widest text-zinc-500 italic">
                <MapPin className="w-6 h-6 text-primary" />
                Serving Greeley, CO and Surrounding Areas
              </div>
            </div>

            <p className="text-2xl font-bold leading-tight max-w-xl text-zinc-600 border-l-4 border-primary pl-6">
              Northern Colorado's premium choice for fast, reliable, and professional junk hauling. We do the heavy lifting so you don't have to.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button asChild size="lg" className="h-20 px-12 text-2xl font-black uppercase brutal-border bg-black text-white hover:bg-black/90 group">
                <Link href="/estimate" className="flex items-center gap-3">
                  Schedule Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-20 px-12 text-2xl font-black uppercase brutal-border bg-primary text-white border-black hover:bg-primary/90">
                <a href="tel:9704007357" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" /> (970) 400-7357
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="brutal-card relative z-10 p-2 overflow-hidden aspect-[4/5] bg-zinc-100">
               <Image 
                src={heroImg?.imageUrl || ''} 
                alt="Forman & Co Truck"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-primary text-white p-4 brutal-border">
                    <p className="text-xs font-black uppercase tracking-widest mb-1">Greeley Local</p>
                    <p className="text-xl font-black italic">ESTIMATES IN MINUTES</p>
                 </div>
              </div>
            </div>
            {/* Background metallic element */}
            <div className="absolute -top-12 -right-12 w-full h-full metallic-gradient -z-0 border-4 border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}