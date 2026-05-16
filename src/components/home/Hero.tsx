import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-block border-2 border-black px-4 py-1 font-black text-sm uppercase tracking-widest bg-white">
              Professional Mobile Junk Removal Service
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter">
              WE HAUL, <br />
              <span className="text-primary">YOU RELAX.</span>
            </h1>

            <p className="text-2xl font-bold leading-tight max-w-xl">
              Professional junk removal in Greeley and Northern Colorado. Same-day service, fair pricing, and eco-friendly disposal.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button asChild size="lg" className="h-16 px-10 text-xl font-black uppercase brutal-border bg-black text-white hover:bg-black/90">
                <Link href="/estimate">
                  Schedule Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl font-black uppercase brutal-border bg-primary text-white border-black hover:bg-primary/90">
                <a href="tel:9704007357">Text The Crew</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="brutal-card relative z-10 p-2 overflow-hidden aspect-[4/5]">
               <Image 
                src={heroImg?.imageUrl || ''} 
                alt="Forman & Co Truck"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute top-12 -right-8 w-full h-full bg-primary -z-0 border-4 border-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
