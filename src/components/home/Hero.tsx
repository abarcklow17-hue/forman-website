
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-black">
      {/* Background Cinematic Image */}
      {heroImg && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg.imageUrl} 
            alt={heroImg.description}
            fill
            className="object-cover brightness-[0.7] scale-105"
            priority
            data-ai-hint={heroImg.imageHint}
          />
          {/* Professional Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[6px] z-10" />
          {/* Subtle Vertical Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-20" />
        </div>
      )}

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-30 text-center space-y-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            <MapPin className="w-3.5 h-3.5" /> GREELEY & WELD COUNTY
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-bold leading-[0.85] tracking-tighter italic uppercase chrome-text py-2 drop-shadow-2xl">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-sm md:text-xl text-muted-foreground max-w-xl mx-auto font-bold leading-tight uppercase tracking-[0.2em] italic">
            PREMIUM MOBILE JUNK REMOVAL. <br />
            <span className="text-white/80 not-italic font-medium">PROFESSIONAL CLEANOUTS & ECO-RECYCLING.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
        >
          <Link href="/estimate" className="btn-premium w-full sm:w-auto flex items-center justify-center gap-4 text-xs px-12 py-5 h-auto transition-transform">
            GET A QUOTE <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:9704007357" className="w-full sm:w-auto h-16 px-10 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-bold uppercase italic tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 text-white">
            <Phone className="w-3.5 h-3.5 text-primary" /> (970) 400-7357
          </a>
        </motion.div>
      </div>

      {/* Bottom Border Anchor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent z-40" />
    </section>
  );
}
