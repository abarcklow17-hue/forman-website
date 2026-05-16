import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, Sofa, Monitor, Bed, Box } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { title: "Household Furniture", icon: Sofa },
  { title: "Electronics Recycling", icon: Monitor },
  { title: "Mattress Disposal", icon: Bed },
  { title: "Residential Clutter", icon: Box },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white border-y-8 border-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] mb-4 italic">The Premium Standard</h2>
              <h3 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
                WHAT WE <span className="text-primary italic">TAKE.</span>
              </h3>
              <p className="text-xl font-bold text-zinc-500 max-w-lg">
                From single item pickups to full estate cleanouts, Forman & Co handles everything with precision and care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-zinc-50 brutal-border border-zinc-200">
                  <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
                    <cat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="font-black text-lg uppercase italic tracking-tighter leading-tight">{cat.title}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="h-16 px-10 text-xl font-black uppercase brutal-border bg-black text-white hover:bg-black/90">
              <Link href="/services">Full List of Items</Link>
            </Button>
          </div>

          <div className="relative">
             <div className="brutal-card bg-zinc-100 aspect-square overflow-hidden p-0 relative">
               <Image 
                src={PlaceHolderImages.find(p => p.id === 'garage-cleanout')?.imageUrl || ''} 
                alt="Service"
                fill
                className="object-cover"
               />
               <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
             </div>
             <div className="absolute -bottom-10 -left-10 brutal-card-red w-64 p-8 text-center">
                <p className="text-4xl font-black italic mb-2">100%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Insured & Licensed</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';