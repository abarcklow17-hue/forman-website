import Image from 'next/image';
import Link from 'next/link';
import { Sofa, Monitor, Bed, Box, Trash2, Home, Building2, Hammer, Waves, Thermometer, Briefcase, Shovel } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const allServices = [
  { title: "Furniture Removal", icon: Sofa, desc: "Couches, tables, and full bedroom sets." },
  { title: "Appliance Recycling", icon: Monitor, desc: "Fridges, washers, and electronics." },
  { title: "Mattress Disposal", icon: Bed, desc: "Clean and eco-friendly removal." },
  { title: "Estate Cleanouts", icon: Home, desc: "Full property clearing with care." },
  { title: "Construction Debris", icon: Hammer, desc: "Sod, drywall, and renovation waste." },
  { title: "Hot Tub Removal", icon: Thermometer, desc: "Complete breakdown and hauling." },
  { title: "Office Cleanups", icon: Briefcase, desc: "E-waste and office furniture." },
  { title: "Yard Waste", icon: Shovel, desc: "Branches, dirt, and storm debris." },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white border-y-8 border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em] italic">Our Capabilities</h2>
          <h3 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
            WE HAUL <span className="text-primary italic">EVERYTHING.</span>
          </h3>
          <p className="text-xl font-bold text-zinc-500 max-w-2xl mx-auto">
            From a single chair to a 14ft truck bed full of concrete, Archie and the crew handle the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allServices.map((service, i) => (
            <div key={i} className="group p-8 bg-zinc-50 brutal-border border-zinc-200 hover:bg-black hover:text-white transition-all duration-300">
              <div className="w-16 h-16 bg-white brutal-border border-black group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="font-black text-2xl uppercase italic tracking-tighter mb-2">{service.title}</h4>
              <p className="font-bold text-zinc-500 group-hover:text-zinc-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="h-20 px-16 text-2xl font-black uppercase brutal-border bg-primary text-white hover:bg-primary/90">
            <Link href="/services">View All 50+ Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
