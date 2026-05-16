import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Star, MapPin, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt={heroImg?.description || 'Forman & Co Truck'}
          fill
          className="object-cover opacity-30 grayscale-[0.5]"
          priority
          data-ai-hint="junk removal truck"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3 h-3" /> Same-Day Availability in Weld County
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Fast, Reliable <br />
            <span className="text-primary italic">Junk Removal</span> <br />
            in Northern Colorado.
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            From single item pickups to full estate cleanouts, Archie and the crew provide professional, local-business service you can trust. Serving Greeley, Fort Collins, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 text-base font-bold">
              <Link href="/estimate" className="flex items-center gap-2">
                Get Instant Quote <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10">
              <a href="tel:9704007357">Call (970) 400-7357</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/5">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Licensed & Insured</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Star className="w-4 h-4 fill-primary" />
                <span className="text-xs uppercase tracking-widest">5-Star Rated</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Zap className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Same-Day Pickup</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary font-bold">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Locally Owned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
