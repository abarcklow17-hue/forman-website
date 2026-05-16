
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
                <h4 className="text-primary font-bold uppercase tracking-wider text-sm">OPERATIONAL POWER</h4>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  We Do The <br/><span className="text-primary">Heavy Lifting.</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                From construction debris to full property cleanouts, Forman & Co is Northern Colorado's elite hauling choice. We don't just move junk; we reclaim your space.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {['On-Site Estimates', 'Professional Crew', 'Guaranteed Match', 'Responsible Disposal'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-300">
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
                  data-ai-hint={debrisImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Weld County Project // Active</p>
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
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm">REGIONAL COVERAGE</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Serving Greeley & <br/><span className="text-primary">Surrounding Cities.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed font-medium">
            Based in Greeley, Colorado. Proudly serving Weld & Larimer Counties including Windsor, Fort Collins, Loveland, Evans, and Eaton.
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8">
            {['WELD COUNTY', 'LARIMER COUNTY', 'NORTHERN CO'].map((area) => (
              <div key={area} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
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
        <span className="font-bold text-sm text-white">{label}</span>
        <span className="text-xs font-medium text-muted-foreground">{sub}</span>
      </div>
    </div>
  );
}

function FeatureItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <motion.div 
      className="metallic-card p-10 space-y-6 group hover:border-primary/40 transition-all duration-300"
    >
      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors">{num}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed font-medium">{desc}</p>
    </motion.div>
  );
}
