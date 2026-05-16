'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-truck');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background Cinematic Image - Moved to z-0 and ensured container is correct */}
      {heroImg && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroImg.imageUrl} 
            alt={heroImg.description}
            fill
            className="object-cover grayscale-0 brightness-50"
            priority
            data-ai-hint={heroImg.imageHint}
          />
          {/* Glassmorphism Blur Layer */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[4px] z-10" />
          {/* Subtle Vignette for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-20" />
        </div>
      )}

      {/* Content Container - Higher z-index to stay above overlays */}
      <div className="container mx-auto px-4 relative z-30 text-center space-y-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-morphism border-white/20 text-primary text-[11px] font-black uppercase tracking-[0.5em] mb-4">
            <MapPin className="w-4 h-4" /> GREELEY & WELD COUNTY
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-bold leading-[0.85] tracking-tighter italic uppercase chrome-text py-2 drop-shadow-2xl">
            HAUL IT <br />
            <span className="text-primary italic">ALL.</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            PREMIUM MOBILE JUNK REMOVAL. <br />
            <span className="text-white/90 italic">PROFESSIONAL CLEANOUTS & ECO-RECYCLING.</span>
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10"
        >
          <Link href="/estimate" className="btn-premium w-full sm:w-auto flex items-center justify-center gap-4 text-sm px-14 py-6 h-auto transition-transform">
            GET A QUOTE <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:9704007357" className="w-full sm:w-auto h-20 px-10 glass-morphism hover:bg-white/10 transition-all font-black uppercase italic tracking-[0.3em] text-[11px] flex items-center justify-center gap-4 text-white border-white/10">
            <Phone className="w-4 h-4 text-primary" /> (970) 400-7357
          </a>
        </motion.div>
      </div>

      {/* Static Trim */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-40 opacity-40" />
    </section>
  );
}