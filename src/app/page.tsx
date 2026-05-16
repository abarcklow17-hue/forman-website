
'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { CallToAction } from '@/components/shared/CallToAction';
import { SmartConcierge } from '@/components/home/SmartConcierge';
import { ShieldCheck, Clock, Recycle, CheckCircle, MapPin } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const debrisImg = PlaceHolderImages.find(img => img.id === 'construction-debris');

  return (
    <main className="min-h-screen bg-black relative">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <section className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TrustStat icon={ShieldCheck} label="LICENSED & INSURED" sub="FULL PROTECTION" />
            <TrustStat icon={Recycle} label="70% RECYCLED" sub="ECO-RESPONSIBLE" />
            <TrustStat icon={Clock} label="SAME-DAY SERVICE" sub="FAST RESPONSE" />
            <TrustStat icon={CheckCircle} label="FREE QUOTES" sub="NO OBLIGATION" />
          </div>
        </div>
      </section>

      {/* Cinematic Content Section */}
      <section className="py-32 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] italic">OPERATIONAL POWER</h4>
                <h2 className="text-5xl md:text-7xl font-bold chrome-text uppercase italic leading-[0.9] tracking-tighter">
                  WE DO THE <br/><span className="text-primary">HEAVY LIFTING.</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium uppercase tracking-tight">
                From construction debris to full property cleanouts, Forman & Co is Northern Colorado's elite hauling choice. We don't just move junk; we reclaim your space.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['On-Site Estimates', 'Professional Crew', 'Guaranteed Match', 'Responsible Disposal'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-primary" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video lg:aspect-square metallic-card group"
            >
              {debrisImg && (
                <Image 
                  src={debrisImg.imageUrl} 
                  alt={debrisImg.description} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white italic">WELD COUNTY PROJECT // ACTIVE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesOverview />

      {/* Industrial Advantage Grid */}
      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
             <FeatureItem 
              num="01" 
              title="SPEED" 
              desc="Same-day availability for urgent cleanouts and debris removal across Northern Colorado."
             />
             <FeatureItem 
              num="02" 
              title="SCALE" 
              desc="Our heavy-duty fleet handles everything from single item pickups to massive multi-load cleanouts."
             />
             <FeatureItem 
              num="03" 
              title="SAFETY" 
              desc="Fully insured and bonded professionals who treat your property with extreme care."
             />
          </motion.div>
        </div>
      </section>

      {/* Regional SEO Section */}
      <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-[0.6em] text-[10px]">REGIONAL COVERAGE</h4>
            <h2 className="text-4xl md:text-6xl font-bold chrome-text uppercase italic tracking-tighter leading-none">
              SERVING GREELEY & <br/><span className="text-primary">SURROUNDING CITIES.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed font-bold uppercase tracking-widest italic opacity-80">
            BASED IN GREELEY, COLORADO. PROUDLY SERVING WELD & LARIMER COUNTIES INCLUDING WINDSOR, FORT COLLINS, LOVELAND, EVANS, AND EATON.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            {['WELD COUNTY', 'LARIMER COUNTY', 'NORTHERN CO'].map((area) => (
              <div key={area} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                <MapPin className="w-4 h-4 text-primary" /> {area}
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
    <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
      <Icon className="w-5 h-5 text-primary" />
      <div className="flex flex-col">
        <span className="font-bold text-[10px] text-white leading-none uppercase tracking-widest italic">{label}</span>
        <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-[0.2em]">{sub}</span>
      </div>
    </div>
  );
}

function FeatureItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div 
      className="metallic-card p-10 space-y-6 group hover:border-primary/40 transition-all duration-300"
    >
      <span className="text-4xl font-black text-primary/20 italic group-hover:text-primary transition-colors">{num}</span>
      <h3 className="text-2xl font-bold text-white italic uppercase tracking-tighter">{title}</h3>
      <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-tight">{desc}</p>
    </motion.div>
  );
}
