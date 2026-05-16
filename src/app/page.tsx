
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
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-black relative">
      <div className="fixed inset-0 grid-overlay pointer-events-none -z-10 opacity-20" />
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustStat icon={ShieldCheck} label="LICENSED & INSURED" sub="FULL PROTECTION" />
            <TrustStat icon={Recycle} label="70% RECYCLED" sub="ECO-RESPONSIBLE" />
            <TrustStat icon={Clock} label="SAME-DAY" sub="FAST LOCAL RESPONSE" />
            <TrustStat icon={CheckCircle} label="FREE QUOTES" sub="GUARANTEED PRICE" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-black border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 space-y-4"
          >
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">OPERATIONAL FLOW</h4>
            <h2 className="text-4xl md:text-7xl chrome-title uppercase leading-none tracking-tighter italic">THE PROCESS</h2>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
             <StepItem 
              variants={itemVariants}
              num="01" 
              title="PHOTO QUOTE" 
              desc="Text or upload photos of your junk. We provide a firm, transparent quote within minutes."
             />
             <StepItem 
              variants={itemVariants}
              num="02" 
              title="SCHEDULE" 
              desc="Pick a time that works for you. We offer same-day and next-day service across Weld County."
             />
             <StepItem 
              variants={itemVariants}
              num="03" 
              title="WE HAUL" 
              desc="Our crew handles the heavy lifting, cleaning, and responsible disposal. You relax."
             />
          </motion.div>
        </div>
      </section>

      <ServicesOverview />

      {/* Prohibited Items Section */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="metallic-card p-8 md:p-12 space-y-8"
            >
              <div className="flex items-center gap-4 text-primary">
                <CheckCircle className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold">WE HAUL ALMOST EVERYTHING</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
                {['Old Furniture', 'Appliances', 'Construction Debris', 'Mattresses', 'Yard Waste', 'Hot Tubs', 'Scrap Metal', 'Office Equipment'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"/> {item}</div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="metallic-card p-8 md:p-12 space-y-8 border-red-900/10"
            >
              <div className="flex items-center gap-4 text-zinc-500">
                <XCircle className="w-8 h-8" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">PROHIBITED ITEMS</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-muted-foreground opacity-70">
                {['Hazardous Chemicals', 'Wet Paint & Oils', 'Biohazard Materials', 'Industrial Sludge', 'Explosives', 'Radioactive Waste'].map((item) => (
                  <div key={item} className="flex items-center gap-2"> {item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Local SEO */}
      <section className="py-32 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">REGIONAL COVERAGE</h4>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase italic tracking-tighter leading-none">SERVING GREELEY & WELD COUNTY</h2>
          </motion.div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Based in <strong>Greeley, Colorado</strong>, Forman & Co is a locally-owned family business dedicated to keeping <strong>Northern Colorado</strong> clean. We provide professional junk removal and hauling for <strong>Windsor, Evans, Eaton, Fort Collins, and Loveland</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
            {['WELD COUNTY', 'LARIMER COUNTY', 'NORTHERN COLORADO'].map((area) => (
              <div key={area} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-primary" /> {area}
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
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
      <div className="w-10 h-10 metallic-card flex items-center justify-center border-accent/20">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-sm text-white leading-tight uppercase tracking-tight">{label}</span>
        <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{sub}</span>
      </div>
    </div>
  );
}

function StepItem({ num, title, desc, variants }: { num: string, title: string, desc: string, variants: any }) {
  return (
    <motion.div 
      variants={variants}
      className="metallic-card p-8 space-y-4 group hover:border-primary/40 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-primary italic opacity-30 group-hover:opacity-100 transition-opacity">{num}</span>
        <Truck className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white italic">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}
