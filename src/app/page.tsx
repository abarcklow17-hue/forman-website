
'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle, CheckCircle, XCircle, MapPin, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <main className="min-h-screen bg-black relative">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-15" />
      <Navbar />
      <Hero />
      
      {/* Trust Bar - Mobile First Alignment */}
      <section className="border-y border-white/5 bg-zinc-950/80 backdrop-blur-md py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <TrustStat icon={ShieldCheck} label="LICENSED & INSURED" sub="FULL PROTECTION" />
            <TrustStat icon={Recycle} label="70% RECYCLED" sub="ECO-RESPONSIBLE" />
            <TrustStat icon={Clock} label="SAME-DAY SERVICE" sub="FAST LOCAL RESPONSE" />
            <TrustStat icon={CheckCircle} label="FREE QUOTES" sub="GUARANTEED PRICING" />
          </div>
        </div>
      </section>

      {/* How It Works - Premium Flow */}
      <section className="py-40 bg-black border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-28 space-y-6"
          >
            <h4 className="text-primary font-black uppercase tracking-[0.6em] text-[11px] italic">OPERATIONAL EXCELLENCE</h4>
            <h2 className="text-5xl md:text-8xl chrome-title uppercase leading-none tracking-tighter italic">THE PROCESS</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
             <StepItem 
              variants={itemVariants}
              num="01" 
              title="PHOTO QUOTE" 
              desc="Text or upload photos of your project. We provide a firm, transparent quote within minutes of your request."
             />
             <StepItem 
              variants={itemVariants}
              num="02" 
              title="SCHEDULING" 
              desc="Select a window that fits your timeline. We offer same-day and next-day service across all of Northern Colorado."
             />
             <StepItem 
              variants={itemVariants}
              num="03" 
              title="PROFESSIONAL HAUL" 
              desc="Our elite crew handles the heavy lifting and responsible disposal. You sit back and reclaim your property."
             />
          </motion.div>
        </div>
      </section>

      <ServicesOverview />

      {/* Prohibited Items - Industrial Contrast */}
      <section className="py-40 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="metallic-card p-10 md:p-16 space-y-10"
            >
              <div className="flex items-center gap-6 text-primary">
                <CheckCircle className="w-10 h-10" />
                <h3 className="text-3xl md:text-4xl font-black italic uppercase">WE HAUL EVERYTHING</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold text-muted-foreground uppercase tracking-tight">
                {['Old Furniture', 'Appliances', 'Construction Debris', 'Mattresses', 'Yard Waste', 'Hot Tubs', 'Scrap Metal', 'Office Equipment'].map((item) => (
                  <div key={item} className="flex items-center gap-3"><div className="w-2 h-2 bg-primary" /> {item}</div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="metallic-card p-10 md:p-16 space-y-10 border-red-900/10"
            >
              <div className="flex items-center gap-6 text-zinc-500">
                <XCircle className="w-10 h-10" />
                <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white">PROHIBITED ITEMS</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-bold text-muted-foreground opacity-60 uppercase tracking-tight">
                {['Hazardous Chemicals', 'Wet Paint & Oils', 'Biohazard Materials', 'Industrial Sludge', 'Explosives', 'Radioactive Waste'].map((item) => (
                  <div key={item} className="flex items-center gap-3"> {item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Coverage SEO */}
      <section className="py-40 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-primary font-black uppercase tracking-[0.8em] text-[11px] italic">REGIONAL DOMINANCE</h4>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">SERVING GREELEY & <br/><span className="text-primary">WELD COUNTY</span></h2>
          </motion.div>
          <p className="text-muted-foreground text-xl leading-relaxed font-medium uppercase tracking-tight">
            Based in <strong className="text-white">Greeley, Colorado</strong>, Forman & Co is a locally-owned family powerhouse dedicated to keeping <strong className="text-white">Northern Colorado</strong> clean. We provide professional junk removal for <strong className="text-white">Windsor, Evans, Eaton, Fort Collins, and Loveland</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 pt-10">
            {['WELD COUNTY', 'LARIMER COUNTY', 'NORTHERN COLORADO'].map((area) => (
              <div key={area} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 italic">
                <MapPin className="w-5 h-5 text-primary" /> {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
      <SmartConcierge />
    </main>
  );
}

function TrustStat({ icon: Icon, label, sub }: { icon: any, label: string, sub: string }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left group">
      <div className="w-14 h-14 metallic-card flex items-center justify-center border-white/10 group-hover:border-primary/50 transition-all">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-black text-sm text-white leading-none uppercase tracking-widest italic">{label}</span>
        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">{sub}</span>
      </div>
    </div>
  );
}

function StepItem({ num, title, desc, variants }: { num: string, title: string, desc: string, variants: any }) {
  return (
    <motion.div 
      variants={variants}
      className="metallic-card p-10 space-y-6 group hover:border-primary/50 transition-all duration-500"
    >
      <div className="flex items-center justify-between">
        <span className="text-5xl font-black text-primary italic opacity-20 group-hover:opacity-100 transition-opacity duration-500">{num}</span>
        <Truck className="w-7 h-7 text-zinc-600 group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
