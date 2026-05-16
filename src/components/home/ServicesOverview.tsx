import Link from 'next/link';
import { Sofa, Monitor, Bed, Home, Hammer, Thermometer, Briefcase, Shovel, Trash2, Recycle, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const allServices = [
  { title: "Furniture Removal", icon: Sofa, desc: "Couches, tables, and full property clearouts." },
  { title: "Appliance Recycling", icon: Monitor, desc: "Eco-friendly disposal of fridges, washers, and e-waste." },
  { title: "Mattress Disposal", icon: Bed, desc: "Sanitary removal and responsible recycling." },
  { title: "Estate Cleanouts", icon: Home, desc: "Professional, caring property clearing for any scenario." },
  { title: "Construction Debris", icon: Hammer, desc: "We load and haul concrete, sod, and renovation waste." },
  { title: "Hot Tub Removal", icon: Thermometer, desc: "Complete breakdown, transport, or disposal." },
  { title: "Office Equipment", icon: Briefcase, desc: "Fast removal of heavy office furniture and IT gear." },
  { title: "Yard Waste", icon: Shovel, desc: "Storm debris, branches, dirt, and landscape cleanup." },
];

export function ServicesOverview() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-sm font-black text-primary uppercase tracking-[0.4em]">Our Professional Services</h2>
          <h3 className="text-6xl md:text-8xl chrome-text leading-none uppercase">
            WE HAUL ANY <br/> & EVERYTHING.
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Based in Greeley, we service all of Northern Colorado. Whether it's a single item or an entire property, Archie and the crew have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {allServices.map((service, i) => (
            <div key={i} className="industrial-card p-10 group bg-zinc-900/40">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h4 className="font-black text-2xl uppercase italic tracking-tighter mb-4">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8">
           <div className="flex items-center gap-12 grayscale opacity-50">
             <div className="flex items-center gap-2"><Recycle className="w-5 h-5"/> Eco-Friendly</div>
             <div className="flex items-center gap-2"><Truck className="w-5 h-5"/> Same-Day</div>
             <div className="flex items-center gap-2"><Star className="w-5 h-5"/> 5-Star Rated</div>
           </div>
          <Link href="/estimate" className="metal-button text-white">
            Get A Free Quote In Minutes
          </Link>
        </div>
      </div>
    </section>
  );
}