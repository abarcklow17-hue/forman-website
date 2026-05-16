
'use client';

import { motion } from 'framer-motion';
import { Box, HardHat, Recycle, Truck, Hammer, Trash2 } from 'lucide-react';

const serviceGrid = [
  { label: 'APPLIANCE REMOVAL', icon: Truck, desc: 'Eco-friendly disposal of stoves, fridges, and washers.' },
  { label: 'ATTIC & BASEMENT', icon: Box, desc: 'Full cleanouts for those long-forgotten, cluttered spaces.' },
  { label: 'CONSTRUCTION DEBRIS', icon: HardHat, desc: 'Rugged hauling for renovation waste, drywall, and metal.' },
  { label: 'HOT TUB REMOVAL', icon: Recycle, desc: 'Complete disassembly and removal of old spas and hot tubs.' },
  { label: 'YARD WASTE', icon: Hammer, desc: 'Branches, stumps, sod, and landscape debris cleanup.' },
  { label: 'SCRAP METAL', icon: Trash2, desc: 'We haul all types of metal for proper local recycling.' },
];

export function ServicesOverview() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-32 relative bg-[#050505] overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-4"
        >
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] italic">HAULING SERVICES</h4>
          <h2 className="text-4xl md:text-7xl chrome-title leading-none uppercase italic tracking-tighter">
            WE HAUL IT ALL.
          </h2>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.1em] max-w-2xl mx-auto py-4">
            From single-item pickups to massive multi-load cleanouts, Forman & Co provides professional disposal for every project.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceGrid.map((svc, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="metallic-card p-8 space-y-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                <svc.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white tracking-tight italic">{svc.label}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium">{svc.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
