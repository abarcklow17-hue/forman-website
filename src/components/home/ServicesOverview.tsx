import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const services = [
  {
    title: "Residential Junk",
    desc: "Household clutter, furniture, mattresses, and more.",
    image: 'garage-cleanout',
    href: "/services/residential"
  },
  {
    title: "Commercial Pickup",
    desc: "Office furniture, electronic waste, and site cleanups.",
    image: 'furniture-removal',
    href: "/services/commercial"
  },
  {
    title: "Cleanouts",
    desc: "Garage, attic, storage unit, and whole estate services.",
    image: 'construction-debris',
    href: "/services/cleanouts"
  },
  {
    title: "Appliance Removal",
    desc: "Refrigerators, washers, dryers, and recycling.",
    image: 'appliance-hauling',
    href: "/services/appliances"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Core Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              We Haul Everything From Old Couches To Whole Estates.
            </h3>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest hover:text-primary transition-colors">
            View All Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const img = PlaceHolderImages.find(p => p.id === service.image);
            return (
              <Link 
                key={idx} 
                href={service.href}
                className="group relative h-[450px] overflow-hidden rounded-lg bg-card border border-white/5 transition-all hover:border-primary/50"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={service.title}
                    fill
                    className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
