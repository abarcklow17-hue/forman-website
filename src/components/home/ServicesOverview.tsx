import { Sofa, Box, Bed, Trash2, Truck, Hammer, Thermometer, HardHat, Recycle } from 'lucide-react';
import Image from 'next/image';

const serviceGrid = [
  { label: 'APPLIANCE REMOVAL', icon: Truck, desc: 'Eco-friendly disposal and recycling of stoves, fridges, and washers.' },
  { label: 'ATTIC & BASEMENT', icon: Box, desc: 'Full cleanouts for those long-forgotten spaces. We lift everything.' },
  { label: 'CONSTRUCTION DEBRIS', icon: HardHat, desc: 'Rugged hauling for renovation waste, drywall, wood, and metal.' },
  { label: 'HOT TUB REMOVAL', icon: Recycle, desc: 'Complete disassembly and removal of old spas and hot tubs.' },
  { label: 'YARD WASTE', icon: Hammer, desc: 'Branches, stumps, sod, and landscape debris removal.' },
  { label: 'SCRAP METAL', icon: Trash2, desc: 'We haul all types of metal from your property for proper recycling.' },
];

export function ServicesOverview() {
  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs italic">HAULING SERVICES</h4>
          <h2 className="text-5xl md:text-7xl chrome-title leading-none uppercase italic tracking-tighter">
            WE HAUL IT ALL.
          </h2>
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.1em] max-w-2xl mx-auto py-4">
            From single-item pickups to massive multi-load cleanouts, Forman & Co provides professional disposal for every Northern Colorado project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceGrid.map((item, i) => (
            <div key={i} className="metallic-card p-10 space-y-6 group hover:border-primary transition-all duration-300">
              <div className="w-14 h-14 bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white tracking-tight italic">{item.label}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
