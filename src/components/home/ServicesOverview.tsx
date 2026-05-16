import { Sofa, Monitor, Bed, Box, Trash2, Truck, Hammer, Thermometer } from 'lucide-react';

const icons = [
  { label: 'Furniture', icon: Sofa, sub: 'Households & Estates' },
  { label: 'Electronics', icon: Monitor, sub: 'Recycling & Disposal' },
  { label: 'Mattresses', icon: Bed, sub: 'Clean Disposal' },
  { label: 'Clutter', icon: Box, sub: 'Garage & Attics' },
];

export function ServicesOverview() {
  return (
    <section className="py-48 relative bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-40 space-y-8">
          <h2 className="text-primary font-black uppercase tracking-[0.8em] text-[11px]">HAULING SERVICES</h2>
          <h3 className="text-6xl md:text-9xl chrome-title leading-none uppercase italic tracking-tighter">
            ONE CALL. <br/> WE HAUL IT ALL.
          </h3>
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto py-6">
            From single-item pickups to massive multi-load cleanouts, we provide professional, eco-friendly disposal for every project.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 mb-64">
          {icons.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-8 group">
              <div className="w-24 h-24 metallic-card flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-black italic text-2xl uppercase tracking-tighter text-white">{item.label}</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Highlight Sections */}
        <div className="space-y-80">
          <ServiceHighlight 
            title="RESIDENTIAL" 
            sub="FULL PROPERTY CLEANOUTS"
            desc="Basements, attics, and garages. Our professional crew handles the sorting, lifting, and hauling while you relax. We recycle or donate over 70% of what we pick up."
            image="https://picsum.photos/seed/res-cinematic/1200/900"
            reverse={false}
            imageHint="workers hauling furniture"
          />
          <ServiceHighlight 
            title="COMMERCIAL" 
            sub="SITE DEBRIS & LIQUIDATION"
            desc="Heavy-duty solutions for businesses and contractors. Construction debris, office liquidations, and warehouse cleanouts handled with guaranteed response times."
            image="https://picsum.photos/seed/comm-cinematic/1200/900"
            reverse={true}
            imageHint="construction debris truck"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceHighlight({ title, sub, desc, image, reverse, imageHint }: { title: string, sub: string, desc: string, image: string, reverse: boolean, imageHint: string }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-24 md:gap-40 group`}>
      <div className="flex-1 space-y-10">
        <div className="space-y-6">
          <h4 className="text-6xl md:text-[8rem] font-black italic chrome-title uppercase leading-none tracking-tighter">{title}</h4>
          <p className="text-xs font-black text-primary uppercase tracking-[0.6em]">{sub}</p>
        </div>
        <p className="text-muted-foreground text-xl leading-relaxed max-w-lg font-medium">
          {desc}
        </p>
        <button className="btn-premium text-[11px] py-4 px-12">DISCOVER SERVICES</button>
      </div>
      
      <div className="flex-1 w-full aspect-[4/3] relative group overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms] grayscale hover:grayscale-0"
          data-ai-hint={imageHint}
        />
        <div className="absolute bottom-8 left-8 z-30">
          <div className="w-16 h-[2px] bg-primary mb-3" />
          <span className="text-[11px] font-black text-white uppercase tracking-[0.5em]">CASE STUDY / 0{reverse ? '2' : '1'}</span>
        </div>
      </div>
    </div>
  );
}