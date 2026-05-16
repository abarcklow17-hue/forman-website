import { Sofa, Monitor, Bed, Home, Hammer, Thermometer, Briefcase, Shovel } from 'lucide-react';

const icons = [
  { label: 'Production', icon: Sofa, sub: 'Furniture & Large Items' },
  { label: 'Recycling', icon: Monitor, sub: 'Appliances & E-Waste' },
  { label: 'Property', icon: Home, sub: 'Estate & Attic Cleanouts' },
  { label: 'Debris', icon: Hammer, sub: 'Construction & Reno' },
];

export function ServicesOverview() {
  return (
    <section className="py-24 relative bg-zinc-950/50">
      <div className="container mx-auto px-4">
        {/* Marketing Simplified Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-primary font-black uppercase tracking-[0.4em] text-xs">Services Simplified</h2>
          <h3 className="text-4xl md:text-5xl chrome-title leading-none">
            ALL-IN-ONE AND READY-TO-GO <br/> HAULING SOLUTIONS.
          </h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Everything you need for a clutter-free property. One call, one flat rate quote, zero stress.
            Our team handles the heavy lifting while you focus on what matters.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-32">
          {icons.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-black italic text-lg">{item.label}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Sections (Slanted) */}
        <div className="space-y-40">
          <ServiceHighlight 
            title="RESIDENTIAL" 
            sub="Home & Garage Cleanouts"
            desc="To help you reclaim your home space, our crew arrives ready to sort, load, and haul away everything from basement clutter to attic treasures."
            image="/residential.jpg"
            reverse={false}
          />
          <ServiceHighlight 
            title="COMMERCIAL" 
            sub="Office & Construction"
            desc="We provide efficient, high-volume hauling for businesses and contractors. From office furniture liquidation to site debris removal."
            image="/commercial.jpg"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceHighlight({ title, sub, desc, image, reverse }: { title: string, sub: string, desc: string, image: string, reverse: boolean }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
      <div className="flex-1 space-y-6">
        <h4 className="text-4xl md:text-6xl font-black italic chrome-title">{title}</h4>
        <p className="text-sm font-bold text-primary uppercase tracking-[0.3em]">{sub}</p>
        <p className="text-muted-foreground leading-relaxed max-w-md">{desc}</p>
        <button className="btn-premium text-xs py-2 px-6">Explore Service</button>
      </div>
      <div className="flex-1 w-full aspect-video relative group overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="w-full h-full bg-zinc-900 animate-pulse" /> {/* Placeholder for real images */}
      </div>
    </div>
  );
}
