import { Sofa, Monitor, Bed, Home, Hammer, Thermometer, Briefcase, Shovel, Trash2, Box } from 'lucide-react';

const icons = [
  { label: 'Furniture', icon: Sofa, sub: 'Household Items' },
  { label: 'Electronics', icon: Monitor, sub: 'Recycling & Disposal' },
  { label: 'Mattresses', icon: Bed, sub: 'Easy Disposal' },
  { label: 'Clutter', icon: Box, sub: 'Residential Cleanups' },
];

export function ServicesOverview() {
  return (
    <section className="py-40 relative bg-zinc-950/80 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-32 space-y-6">
          <h2 className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">What We Take</h2>
          <h3 className="text-5xl md:text-7xl chrome-title leading-none uppercase italic">
            ONE CALL. <br/> WE HAUL IT ALL.
          </h3>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] max-w-xl mx-auto">
            Professional disposal for every item in your property.
            From single items to multi-truck cleanouts.
          </p>
        </div>

        {/* Icon Grid - Mirroring Logo Image Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 mb-48">
          {icons.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-6 group">
              <div className="w-20 h-20 border border-white/5 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h4 className="font-black italic text-xl uppercase tracking-tighter text-white">{item.label}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Highlight Sections */}
        <div className="space-y-64">
          <ServiceHighlight 
            title="RESIDENTIAL" 
            sub="ESTATE & GARAGE CLEANOUTS"
            desc="Reclaim your property. Our crew handles the sorting, lifting, and eco-friendly disposal of basement clutter, attic treasures, and garage overflow."
            image="https://picsum.photos/seed/res/1200/800"
            reverse={false}
          />
          <ServiceHighlight 
            title="COMMERCIAL" 
            sub="OFFICE & CONSTRUCTION DEBRIS"
            desc="High-performance hauling for local businesses. We provide efficient office liquidation and site debris removal with guaranteed response times."
            image="https://picsum.photos/seed/comm/1200/800"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceHighlight({ title, sub, desc, image, reverse }: { title: string, sub: string, desc: string, image: string, reverse: boolean }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20 md:gap-32 group`}>
      <div className="flex-1 space-y-8">
        <div className="space-y-4">
          <h4 className="text-5xl md:text-8xl font-black italic chrome-title uppercase leading-none">{title}</h4>
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">{sub}</p>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-lg font-medium">
          {desc}
        </p>
        <button className="btn-premium text-[10px] py-3 px-10">EXPLORE SERVICES</button>
      </div>
      
      <div className="flex-1 w-full aspect-[4/3] relative group overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
        />
        <div className="absolute bottom-6 left-6 z-30">
          <div className="w-12 h-1 bg-primary mb-2" />
          <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Project Gallery</span>
        </div>
      </div>
    </div>
  );
}
